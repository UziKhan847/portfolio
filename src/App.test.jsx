import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('has a single h1 with the name', () => {
    const h1s = screen.getAllByRole('heading', { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toHaveTextContent('Mohammad Uzair Saleem');
  });

  it('shows the experience and projects from the current resume', () => {
    expect(screen.getByText('Freelance Full-Stack Developer')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'NIGERIAN MUSHAF' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'MUSHAF MISTAKE MARKER' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'INVOICE GENERATOR' })).toHaveAttribute(
      'href',
      'https://github.com/UziKhan847/invoice_generator'
    );
  });

  it('lists the MSc and no longer lists the IBM certificate', () => {
    expect(screen.getByRole('heading', { name: 'MSc Computer Science' })).toBeInTheDocument();
    expect(screen.queryByText(/IBM/)).not.toBeInTheDocument();
  });

  it('only loads DartPad on request', () => {
    expect(document.querySelector('iframe')).toBeNull();
    expect(screen.getByRole('button', { name: /run it in dartpad/i })).toBeInTheDocument();
  });

  it('has working contact links and a resume download', () => {
    expect(screen.getByRole('link', { name: 'uzair.jamiah@proton.me' })).toHaveAttribute('href', 'mailto:uzair.jamiah@proton.me');
    expect(screen.getByRole('link', { name: 'linkedin.com/in/mohammad-uzair-saleem' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/mohammad-uzair-saleem'
    );
    expect(screen.getByRole('link', { name: /download resume/i })).toHaveAttribute('download');
  });
});
