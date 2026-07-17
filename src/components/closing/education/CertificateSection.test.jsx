import { render, screen } from '@testing-library/react';
import CertificateSection from './CertificateSection';

describe('CertificateSection', () => {
  const props = {
    title: 'Responsive Web Design',
    date: 'FreeCodeCamp · June 11, 2024',
    timeSpent: '~300 hours',
    project: 'Portfolio site (HTML/CSS)',
    certificateLink: '/portfolio/web.jpg',
    linkText: 'View the Certificate Here',
    linkColor: 'blue',
  };

  it('renders the title and details', () => {
    render(<CertificateSection {...props} />);
    expect(screen.getByText('Responsive Web Design')).toBeInTheDocument();
    expect(screen.getByText(/300 hours/)).toBeInTheDocument();
  });

  it('renders the certificate link with the correct href and colour class', () => {
    render(<CertificateSection {...props} />);
    const link = screen.getByRole('link', { name: /view the certificate/i });
    expect(link).toHaveAttribute('href', '/portfolio/web.jpg');
    // Guards the fix for dynamically-built Tailwind classes being purged.
    expect(link).toHaveClass('text-blue-300');
  });

  it('falls back to a valid colour class for an unknown colour', () => {
    render(<CertificateSection {...props} linkColor="chartreuse" />);
    const link = screen.getByRole('link', { name: /view the certificate/i });
    expect(link).toHaveClass('text-blue-300');
  });
});
