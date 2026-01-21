import React, { useState } from 'react'
import { updateStatus } from '../../data/statusDummy'

const StatusKerjaSama = ({ statusData, umkmId }) => {
  const [currentStatus, setCurrentStatus] = useState(statusData)
  
  const statusOptions = [
    { value: 'Dalam Kerja Sama', color: '#10b981', icon: '🤝' },
    { value: 'Kerja Sama Selesai', color: '#6b7280', icon: '✅' },
    { value: 'Dibatalkan', color: '#ef4444', icon: '❌' },
    { value: 'Mencari Investor', color: '#f59e0b', icon: '🔍' }
  ]

  const handleStatusChange = (newStatus) => {
    const updated = updateStatus(umkmId, newStatus)
    if (updated) {
      setCurrentStatus(updated)
      alert(`Status diperbarui menjadi: ${newStatus}`)
    }
  }

  const getTimelineStatusIcon = (status) => {
    switch(status) {
      case 'Selesai': return '✅'
      case 'Dalam Proses': return '🔄'
      case 'Menunggu': return '⏳'
      default: return '●'
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>Status Kerja Sama</h3>
        <div style={{ ...styles.currentStatus, backgroundColor: currentStatus.warna + '20', color: currentStatus.warna }}>
          <span style={styles.statusIcon}>
            {statusOptions.find(s => s.value === currentStatus.status)?.icon}
          </span>
          {currentStatus.status}
        </div>
      </div>

      <div style={styles.content}>
        {currentStatus.jenisKerjaSama && (
          <div style={styles.details}>
            <div style={styles.detailItem}>
              <span style={styles.detailLabel}>Jenis Kerja Sama:</span>
              <span style={styles.detailValue}>{currentStatus.jenisKerjaSama}</span>
            </div>
            {currentStatus.nilai && (
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Nilai:</span>
                <span style={styles.detailValue}>{currentStatus.nilai}</span>
              </div>
            )}
            <div style={styles.detailItem}>
              <span style={styles.detailLabel}>Tanggal Mulai:</span>
              <span style={styles.detailValue}>{currentStatus.tanggalMulai}</span>
            </div>
            {currentStatus.estimasiSelesai && (
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Estimasi Selesai:</span>
                <span style={styles.detailValue}>{currentStatus.estimasiSelesai}</span>
              </div>
            )}
          </div>
        )}

        {currentStatus.progress && (
          <div style={styles.progressSection}>
            <div style={styles.progressHeader}>
              <span>Progress</span>
              <span>{currentStatus.progress}%</span>
            </div>
            <div style={styles.progressBar}>
              <div style={{ ...styles.progressFill, width: `${currentStatus.progress}%` }}></div>
            </div>
          </div>
        )}

        {currentStatus.timeline && (
          <div style={styles.timelineSection}>
            <h4 style={styles.timelineTitle}>Timeline</h4>
            <div style={styles.timeline}>
              {currentStatus.timeline.map((item, index) => (
                <div key={index} style={styles.timelineItem}>
                  <div style={styles.timelineDate}>{item.tanggal}</div>
                  <div style={styles.timelineContent}>
                    <div style={styles.timelineEvent}>
                      {getTimelineStatusIcon(item.status)} {item.event}
                    </div>
                    <div style={{
                      ...styles.timelineStatus,
                      color: item.status === 'Selesai' ? '#10b981' : 
                             item.status === 'Dalam Proses' ? '#3b82f6' : '#9ca3af'
                    }}>
                      {item.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div style={styles.statusControls}>
        <h4 style={styles.controlsTitle}>Ubah Status (Demo):</h4>
        <div style={styles.statusButtons}>
          {statusOptions.map((option) => (
            <button
              key={option.value}
              style={{ ...styles.statusButton, backgroundColor: option.color }}
              onClick={() => handleStatusChange(option.value)}
            >
              {option.icon} {option.value}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.note}>
        <p>
          <strong>Catatan Platform:</strong> Platform hanya mencatat proses, bukan menilai hasil kerja sama.
        </p>
        <p style={styles.demoNote}>Mode demonstrasi - perubahan status bersifat sementara</p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    marginBottom: '2rem'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    margin: 0
  },
  currentStatus: {
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  statusIcon: {
    fontSize: '1rem'
  },
  content: {
    marginBottom: '1.5rem'
  },
  details: {
    backgroundColor: '#f9fafb',
    padding: '1rem',
    borderRadius: '0.75rem',
    marginBottom: '1.5rem'
  },
  detailItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 0',
    borderBottom: '1px solid #e5e7eb'
  },
  detailLabel: {
    color: '#6b7280',
    fontSize: '0.875rem'
  },
  detailValue: {
    fontWeight: '600',
    color: '#1f2937'
  },
  progressSection: {
    marginBottom: '1.5rem'
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
    color: '#4b5563'
  },
  progressBar: {
    height: '0.75rem',
    backgroundColor: '#e5e7eb',
    borderRadius: '0.375rem',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#10b981',
    transition: 'width 0.3s ease'
  },
  timelineSection: {
    backgroundColor: '#f0f9ff',
    padding: '1rem',
    borderRadius: '0.75rem'
  },
  timelineTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem'
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  timelineItem: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start'
  },
  timelineDate: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    padding: '0.25rem 0.75rem',
    borderRadius: '0.375rem',
    fontSize: '0.75rem',
    fontWeight: '600',
    minWidth: '80px'
  },
  timelineContent: {
    flex: 1
  },
  timelineEvent: {
    fontWeight: '500',
    marginBottom: '0.25rem'
  },
  timelineStatus: {
    fontSize: '0.75rem',
    fontWeight: '600'
  },
  statusControls: {
    marginBottom: '1.5rem'
  },
  controlsTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem'
  },
  statusButtons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '0.5rem'
  },
  statusButton: {
    backgroundColor: '#10b981',
    color: 'white',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.875rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  },
  note: {
    backgroundColor: '#eff6ff',
    padding: '1rem',
    borderRadius: '0.5rem'
  },
  demoNote: {
    fontSize: '0.75rem',
    color: '#6b7280',
    marginTop: '0.5rem'
  }
}

export default StatusKerjaSama