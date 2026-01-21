import React from 'react'

const SistemPenilaianTransparan = () => {
  const prinsip = [
    {
      title: 'Skor Dapat Dijelaskan',
      description: 'Setiap skor memiliki penjelasan yang jelas tentang bagaimana skor tersebut dihasilkan.',
      contoh: 'Skor legalitas berdasarkan kelengkapan dokumen, bukan nilai dokumen itu sendiri.'
    },
    {
      title: 'Tidak Ada Manipulasi Sistem',
      description: 'Sistem tidak memiliki "black box" atau algoritma tersembunyi yang memanipulasi skor.',
      contoh: 'Rumus perhitungan tersedia untuk ditinjau oleh semua pihak.'
    },
    {
      title: 'Konsistensi Data',
      description: 'Penilaian dilakukan berdasarkan data yang konsisten dari semua UMKM.',
      contoh: 'Semua UMKM mengisi form yang sama dengan parameter yang sama.'
    }
  ]

  const indikator = [
    {
      kategori: 'Legalitas Dasar',
      parameter: ['Keberadaan dokumen legal', 'Kesesuaian jenis usaha', 'Masa berlaku dokumen'],
      bobot: '20%',
      tujuan: 'Menilai dasar hukum operasional usaha'
    },
    {
      kategori: 'Konsistensi Operasional',
      parameter: ['Lama usaha berjalan', 'Stabilitas jumlah karyawan', 'Kontinuitas produksi'],
      bobot: '25%',
      tujuan: 'Menilai kemampuan bertahan usaha'
    },
    {
      kategori: 'Kejelasan Arus Kas',
      parameter: ['Kejelasan sumber pendapatan', 'Rasionalitas pengeluaran', 'Ketersediaan catatan'],
      bobot: '30%',
      tujuan: 'Menilai kesehatan keuangan dasar'
    },
    {
      kategori: 'Kesiapan Risiko Operasional',
      parameter: ['Identifikasi risiko', 'Rencana mitigasi', 'Kesiapan menghadapi kegagalan'],
      bobot: '25%',
      tujuan: 'Menilai kesiapan menghadapi tantangan'
    }
  ]

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Sistem Penilaian Transparan</h1>
        <p style={styles.subtitle}>
          Prinsip, metode, dan logika penilaian yang terbuka untuk semua pihak
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Prinsip Dasar Penilaian</h2>
        <div style={styles.prinsipGrid}>
          {prinsip.map((item, index) => (
            <div key={index} style={styles.prinsipCard}>
              <div style={styles.prinsipNumber}>{index + 1}</div>
              <h3 style={styles.prinsipTitle}>{item.title}</h3>
              <p style={styles.prinsipDesc}>{item.description}</p>
              <div style={styles.prinsipContoh}>
                <strong>Contoh:</strong> {item.contoh}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Indikator Penilaian</h2>
        <p style={styles.sectionIntro}>
          <strong>Sumber Logika:</strong> Indikator disusun berdasarkan praktik umum kesiapan usaha: 
          legalitas dasar, konsistensi operasional, kejelasan arus kas, dan kesiapan risiko operasional.
        </p>
        
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Kategori</th>
                <th style={styles.th}>Parameter Penilaian</th>
                <th style={styles.th}>Bobot</th>
                <th style={styles.th}>Tujuan Penilaian</th>
              </tr>
            </thead>
            <tbody>
              {indikator.map((item, index) => (
                <tr key={index} style={styles.tr}>
                  <td style={styles.td}>
                    <strong>{item.kategori}</strong>
                  </td>
                  <td style={styles.td}>
                    <ul style={styles.parameterList}>
                      {item.parameter.map((param, i) => (
                        <li key={i} style={styles.parameterItem}>• {param}</li>
                      ))}
                    </ul>
                  </td>
                  <td style={styles.td}>
                    <div style={styles.bobot}>{item.bobot}</div>
                  </td>
                  <td style={styles.td}>{item.tujuan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Mekanisme Perbaikan Skor</h2>
        <div style={styles.auditCard}>
          <div style={styles.auditIcon}>⚖️</div>
          <div style={styles.auditContent}>
            <h3 style={styles.auditTitle}>Kalimat Audit WAJIB</h3>
            <p style={styles.auditText}>
              "Skor dapat ditinjau ulang jika UMKM memperbaiki data, namun sistem tidak mengubah skor tanpa perubahan input."
            </p>
            <div style={styles.auditDetails}>
              <div style={styles.detailItem}>
                <strong>Prinsip:</strong> Data-driven, bukan subjektif
              </div>
              <div style={styles.detailItem}>
                <strong>Mekanisme:</strong> Perubahan skor hanya terjadi saat data berubah
              </div>
              <div style={styles.detailItem}>
                <strong>Transparansi:</strong> Riwayat perubahan skor tercatat
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Contoh Perhitungan</h2>
        <div style={styles.contohCard}>
          <div style={styles.contohHeader}>
            <h3 style={styles.contohTitle}>UMKM Contoh</h3>
            <div style={styles.contohSkor}>Skor Total: 68%</div>
          </div>
          
          <div style={styles.contohGrid}>
            <div style={styles.contohItem}>
              <span>Legalitas Dasar (20%):</span>
              <span>80% × 20% = 16%</span>
            </div>
            <div style={styles.contohItem}>
              <span>Konsistensi Operasional (25%):</span>
              <span>75% × 25% = 18.75%</span>
            </div>
            <div style={styles.contohItem}>
              <span>Kejelasan Arus Kas (30%):</span>
              <span>60% × 30% = 18%</span>
            </div>
            <div style={styles.contohItem}>
              <span>Kesiapan Risiko Operasional (25%):</span>
              <span>65% × 25% = 16.25%</span>
            </div>
            <div style={styles.contohTotal}>
              <span>Total:</span>
              <span>16 + 18.75 + 18 + 16.25 = 68%</span>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.note}>
        <p>
          <strong>Disclaimer:</strong> Sistem penilaian ini fokus pada kesiapan dasar investasi, 
          bukan prediksi kesuksesan atau profitabilitas. Investor tetap harus melakukan due diligence independen.
        </p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem'
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '1rem'
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#6b7280',
    maxWidth: '600px',
    margin: '0 auto'
  },
  section: {
    marginBottom: '3rem'
  },
  sectionTitle: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '1.5rem',
    paddingBottom: '0.5rem',
    borderBottom: '3px solid #e5e7eb'
  },
  sectionIntro: {
    backgroundColor: '#eff6ff',
    padding: '1rem',
    borderRadius: '0.5rem',
    marginBottom: '1.5rem',
    color: '#1e40af'
  },
  prinsipGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  prinsipCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    position: 'relative'
  },
  prinsipNumber: {
    position: 'absolute',
    top: '-1rem',
    left: '-1rem',
    width: '2.5rem',
    height: '2.5rem',
    backgroundColor: '#2563eb',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.25rem'
  },
  prinsipTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '0.75rem'
  },
  prinsipDesc: {
    color: '#6b7280',
    marginBottom: '1rem',
    lineHeight: '1.6'
  },
  prinsipContoh: {
    backgroundColor: '#f0f9ff',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    color: '#1e40af'
  },
  tableContainer: {
    overflowX: 'auto'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  },
  th: {
    backgroundColor: '#f9fafb',
    padding: '1rem',
    textAlign: 'left',
    fontWeight: '600',
    color: '#374151',
    borderBottom: '2px solid #e5e7eb'
  },
  tr: {
    borderBottom: '1px solid #e5e7eb'
  },
  td: {
    padding: '1rem',
    verticalAlign: 'top'
  },
  parameterList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  parameterItem: {
    padding: '0.25rem 0',
    color: '#4b5563'
  },
  bobot: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontWeight: '600',
    display: 'inline-block'
  },
  auditCard: {
    backgroundColor: '#f0f9ff',
    borderRadius: '1rem',
    padding: '2rem',
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start',
    border: '2px solid #0ea5e9'
  },
  auditIcon: {
    fontSize: '3rem',
    flexShrink: 0
  },
  auditContent: {
    flex: 1
  },
  auditTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#0c4a6e',
    marginBottom: '1rem'
  },
  auditText: {
    fontSize: '1.125rem',
    color: '#0369a1',
    fontStyle: 'italic',
    marginBottom: '1.5rem',
    lineHeight: '1.6'
  },
  auditDetails: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem'
  },
  detailItem: {
    backgroundColor: 'white',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    fontSize: '0.875rem'
  },
  contohCard: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    padding: '1.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  },
  contohHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    paddingBottom: '1rem',
    borderBottom: '2px solid #e5e7eb'
  },
  contohTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937'
  },
  contohSkor: {
    backgroundColor: '#d1fae5',
    color: '#065f46',
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    fontWeight: 'bold'
  },
  contohGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  contohItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 0',
    borderBottom: '1px solid #f3f4f6'
  },
  contohTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 0',
    fontWeight: 'bold',
    color: '#1f2937',
    fontSize: '1.125rem'
  },
  note: {
    backgroundColor: '#fef3c7',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    textAlign: 'center',
    color: '#92400e',
    marginTop: '2rem'
  }
}

export default SistemPenilaianTransparan