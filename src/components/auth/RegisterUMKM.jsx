import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterUMKM = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    namaUMKM: '',
    namaPemilik: '',
    email: '',
    password: '',
    whatsapp: '',
    terms: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simulasi registrasi berhasil
    alert('Registrasi berhasil! (Mode demonstrasi - data tidak disimpan)')
    
    // Redirect ke dashboard UMKM dengan akun dummy
    navigate('/dashboard-umkm')
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Registrasi UMKM</h2>
          <p style={styles.subtitle}>
            Lengkapi data berikut untuk mulai mengecek kesiapan investasi.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="namaUMKM" style={styles.label}>
              Nama UMKM *
            </label>
            <input
              type="text"
              id="namaUMKM"
              name="namaUMKM"
              value={formData.namaUMKM}
              onChange={handleChange}
              style={styles.input}
              required
              placeholder="Contoh: Warung Kopi Nusantara"
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="namaPemilik" style={styles.label}>
              Nama Pemilik *
            </label>
            <input
              type="text"
              id="namaPemilik"
              name="namaPemilik"
              value={formData.namaPemilik}
              onChange={handleChange}
              style={styles.input}
              required
              placeholder="Nama lengkap pemilik usaha"
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
              placeholder="email@contoh.com"
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>
              Password *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              required
              placeholder="Minimal 8 karakter"
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="whatsapp" style={styles.label}>
              Nomor WhatsApp *
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              style={styles.input}
              required
              placeholder="+6281234567890"
            />
          </div>

          <div style={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              style={styles.checkbox}
              required
            />
            <label htmlFor="terms" style={styles.checkboxLabel}>
              Saya paham platform tidak menjamin investasi
            </label>
          </div>

          <div style={styles.warningBox}>
            <p><strong>Peringatan:</strong> Pendaftaran tidak menjamin pendanaan atau kerja sama.</p>
            <p style={styles.demoMode}>Mode demonstrasi - data tidak disimpan</p>
          </div>

          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.submitBtn}>
              Daftar sebagai UMKM
            </button>
            <button 
              type="button" 
              style={styles.demoBtn}
              onClick={() => navigate('/dashboard-umkm')}
            >
              Masuk dengan Akun Demo
            </button>
          </div>
        </form>

        <div style={styles.loginLink}>
          Sudah punya akun?{' '}
          <button 
            onClick={() => navigate('/auth')}
            style={styles.linkBtn}
          >
            Masuk di sini
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '2rem 1rem'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: '2rem'
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  title: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#6b7280',
    fontSize: '0.875rem'
  },
  form: {
    marginBottom: '2rem'
  },
  formGroup: {
    marginBottom: '1.5rem'
  },
  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '0.5rem'
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    transition: 'border-color 0.2s'
  },
  checkboxGroup: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '1.5rem'
  },
  checkbox: {
    marginRight: '0.75rem',
    marginTop: '0.25rem'
  },
  checkboxLabel: {
    fontSize: '0.875rem',
    color: '#4b5563',
    lineHeight: '1.4'
  },
  warningBox: {
    backgroundColor: '#fef3c7',
    border: '1px solid #f59e0b',
    borderRadius: '0.5rem',
    padding: '1rem',
    marginBottom: '1.5rem'
  },
  demoMode: {
    color: '#92400e',
    fontSize: '0.75rem',
    fontStyle: 'italic',
    marginTop: '0.5rem'
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  submitBtn: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '1rem',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%'
  },
  demoBtn: {
    backgroundColor: '#f3f4f6',
    color: '#4b5563',
    padding: '1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%'
  },
  loginLink: {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: '0.875rem',
    paddingTop: '1rem',
    borderTop: '1px solid #e5e7eb'
  },
  linkBtn: {
    background: 'none',
    border: 'none',
    color: '#2563eb',
    cursor: 'pointer',
    fontWeight: '600',
    padding: '0'
  }
}

export default RegisterUMKM