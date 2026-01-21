import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Platform Penyaring UMKM<br />
          Sebelum Bertemu Investor
        </h1>
        <p style={styles.subtitle}>
          Kami tidak menjanjikan keuntungan.<br />
          Kami menyaring risiko dan membuka data secara jujur.
        </p>
        
        <div style={styles.ctaContainer}>
          <Link to="/auth?role=UMKM" style={styles.ctaPrimary}>
            Daftar sebagai UMKM
          </Link>
          <Link to="/auth?role=INVESTOR" style={styles.ctaSecondary}>
            Daftar sebagai Investor
          </Link>
        </div>
        
        <p style={styles.disclaimer}>
          Pendaftaran tidak menjamin pendanaan atau kerja sama.
        </p>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
    padding: '6rem 1rem',
    textAlign: 'center'
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: '1.5rem',
    lineHeight: '1.2'
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#4b5563',
    marginBottom: '3rem',
    lineHeight: '1.6'
  },
  ctaContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
    flexWrap: 'wrap'
  },
  ctaPrimary: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1.125rem',
    transition: 'background-color 0.2s'
  },
  ctaSecondary: {
    backgroundColor: 'white',
    color: '#2563eb',
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1.125rem',
    border: '2px solid #2563eb',
    transition: 'all 0.2s'
  },
  disclaimer: {
    color: '#6b7280',
    fontSize: '0.875rem',
    fontStyle: 'italic',
    marginTop: '2rem'
  }
}

export default HeroSection