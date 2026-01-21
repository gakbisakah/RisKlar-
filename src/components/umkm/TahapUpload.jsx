import React, { useState } from 'react'

const TahapUpload = () => {
  const [currentStep, setCurrentStep] = useState(1)
  
  const steps = [
    {
      id: 1,
      title: 'Tahap 1 — Fakta Dasar',
      description: 'Data ini digunakan untuk menilai kesiapan operasional, bukan potensi keuntungan.',
      fields: [
        { id: 'status', label: 'Status Usaha', type: 'select', options: ['Rencana', 'Berjalan (<1 tahun)', 'Berjalan (1-3 tahun)', 'Berjalan (3-5 tahun)', 'Berjalan (>5 tahun)'] },
        { id: 'omzet', label: 'Range Omzet Tahunan', type: 'select', options: ['< Rp 50 juta', 'Rp 50-100 juta', 'Rp 100-500 juta', 'Rp 500 juta - 1 M', '> Rp 1 M'] },
        { id: 'karyawan', label: 'Jumlah Karyawan', type: 'select', options: ['1-2 orang', '2-5 orang', '5-10 orang', '10-20 orang', '>20 orang'] },
        { id: 'legalitas', label: 'Legalitas Usaha', type: 'select', options: ['Belum berbadan hukum', 'UMKM (NIB)', 'CV', 'PT', 'Koperasi'] }
      ]
    },
    {
      id: 2,
      title: 'Tahap 2 — Masalah & Solusi',
      description: 'Digunakan untuk menilai validitas masalah, bukan keunikan ide.',
      fields: [
        { id: 'masalah', label: 'Masalah Nyata yang Dihadapi', type: 'textarea', placeholder: 'Jelaskan masalah utama bisnis Anda saat ini...' },
        { id: 'solusi', label: 'Solusi yang Sudah/Sedang Diterapkan', type: 'textarea', placeholder: 'Jelaskan solusi yang sudah dilakukan...' },
        { id: 'bukti', label: 'Bukti Sederhana (Opsional)', type: 'textarea', placeholder: 'Data, testimoni, atau bukti lain yang mendukung...' }
      ]
    },
    {
      id: 3,
      title: 'Tahap 3 — Kesiapan Investasi',
      description: 'Digunakan untuk menilai kesiapan menghadapi kegagalan.',
      fields: [
        { id: 'penggunaan', label: 'Penggunaan Dana Investasi', type: 'textarea', placeholder: 'Jelaskan secara spesifik penggunaan dana...' },
        { id: 'risiko', label: 'Risiko Terburuk yang Mungkin Terjadi', type: 'textarea', placeholder: 'Identifikasi risiko terbesar jika investasi gagal...' },
        { id: 'transparansi', label: 'Kesediaan Transparansi', type: 'select', options: ['Tidak bersedia', 'Bersedia dengan batasan', 'Bersedia penuh termasuk audit'] }
      ]
    }
  ]

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const currentStepData = steps.find(step => step.id === currentStep)

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Upload Data Usaha Bertahap</h2>
        <p style={styles.subtitle}>
          Prinsip: UMKM tidak dapat melompat tahap untuk menjaga konsistensi penilaian.
        </p>
      </div>

      <div style={styles.stepIndicator}>
        {steps.map((step) => (
          <div key={step.id} style={styles.step}>
            <div 
              style={{
                ...styles.stepNumber,
                backgroundColor: step.id === currentStep ? '#2563eb' : step.id < currentStep ? '#10b981' : '#e5e7eb',
                color: step.id <= currentStep ? 'white' : '#9ca3af'
              }}
            >
              {step.id}
            </div>
            <div style={styles.stepInfo}>
              <div style={styles.stepTitle}>{step.title}</div>
              {step.id === currentStep && (
                <div style={styles.stepDescription}>{step.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div style={styles.formContainer}>
        <h3 style={styles.formTitle}>{currentStepData.title}</h3>
        <p style={styles.formDescription}>{currentStepData.description}</p>

        <form style={styles.form}>
          {currentStepData.fields.map((field) => (
            <div key={field.id} style={styles.formGroup}>
              <label htmlFor={field.id} style={styles.label}>
                {field.label}
              </label>
              
              {field.type === 'select' ? (
                <select id={field.id} style={styles.select}>
                  <option value="">Pilih opsi...</option>
                  {field.options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <textarea 
                  id={field.id} 
                  style={styles.textarea}
                  placeholder={field.placeholder}
                  rows={4}
                />
              )}
            </div>
          ))}
        </form>

        <div style={styles.note}>
          <p><strong>Catatan Sistem:</strong> Data yang diisi akan mempengaruhi skor kesiapan investasi.</p>
        </div>

        <div style={styles.buttons}>
          {currentStep > 1 && (
            <button onClick={handlePrev} style={styles.secondaryButton}>
              Kembali
            </button>
          )}
          
          {currentStep < 3 ? (
            <button onClick={handleNext} style={styles.primaryButton}>
              Lanjut ke Tahap {currentStep + 1}
            </button>
          ) : (
            <button style={styles.primaryButton}>
              Simpan dan Lihat Skor
            </button>
          )}
        </div>
      </div>

      <div style={styles.demoNote}>
        <p><strong>Mode demonstrasi:</strong> Form ini hanya simulasi UI. Data tidak disimpan.</p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    marginBottom: '2rem'
  },
  header: {
    marginBottom: '2rem'
  },
  title: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#6b7280'
  },
  stepIndicator: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '3rem',
    position: 'relative'
  },
  step: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    position: 'relative',
    zIndex: 1
  },
  stepNumber: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.125rem',
    flexShrink: 0
  },
  stepInfo: {
    flex: 1,
    paddingTop: '0.5rem'
  },
  stepTitle: {
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '0.25rem'
  },
  stepDescription: {
    fontSize: '0.875rem',
    color: '#6b7280'
  },
  formContainer: {
    marginBottom: '2rem'
  },
  formTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '0.5rem'
  },
  formDescription: {
    color: '#6b7280',
    marginBottom: '2rem',
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
  select: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    backgroundColor: 'white'
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontFamily: 'inherit',
    resize: 'vertical'
  },
  note: {
    backgroundColor: '#eff6ff',
    padding: '1rem',
    borderRadius: '0.5rem',
    marginBottom: '1.5rem'
  },
  buttons: {
    display: 'flex',
    gap: '1rem'
  },
  primaryButton: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: '600',
    flex: 1
  },
  secondaryButton: {
    backgroundColor: '#f3f4f6',
    color: '#4b5563',
    padding: '0.75rem 1.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: '600',
    flex: 1
  },
  demoNote: {
    backgroundColor: '#fef3c7',
    padding: '1rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
    color: '#92400e',
    fontSize: '0.875rem'
  }
}

export default TahapUpload