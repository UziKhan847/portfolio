import { render, screen } from '@testing-library/react';
import CertificateSection from './CertificateSection';

describe('CertificateSection', () => {
  const props = {
    title: 'Responsive Web Design',
    subtitle: 'freeCodeCamp · June 11, 2024',
    details: ['~300 hours', 'Final project: Portfolio site (HTML/CSS)'],
    link: '/portfolio/web.webp',
    linkText: 'View the Certificate Here',
    linkColor: 'blue',
  };

  it('renders the title and details', () => {
    render(<CertificateSection {...props} />);
    expect(screen.getByRole('heading', { name: 'Responsive Web Design' })).toBeInTheDocument();
    expect(screen.getByText(/300 hours/)).toBeInTheDocument();
  });

  it('renders the certificate link with the correct href and colour class', () => {
    render(<CertificateSection {...props} />);
    const link = screen.getByRole('link', { name: /view the certificate/i });
    expect(link).toHaveAttribute('href', '/portfolio/web.webp');
    // Guards the fix for dynamically-built Tailwind classes being purged.
    expect(link).toHaveClass('text-blue-300');
  });

  it('falls back to a valid colour class for an unknown colour', () => {
    render(<CertificateSection {...props} linkColor="chartreuse" />);
    const link = screen.getByRole('link', { name: /view the certificate/i });
    expect(link).toHaveClass('text-blue-300');
  });

  it('shows a status instead of a link when there is no certificate yet', () => {
    render(
      <CertificateSection
        title="MSc Computer Science"
        subtitle="University of York · 2026 – 2027"
        status="In progress"
        linkColor="amber"
      />
    );
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(screen.getByText('In progress')).toHaveClass('text-amber-300');
  });
});
