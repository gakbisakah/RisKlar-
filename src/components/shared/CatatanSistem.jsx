import React from 'react'

const CatatanSistem = ({ catatan, type = 'info' }) => {
  const getTypeStyles = () => {
    switch(type) {
      case 'warning':
        return {
          backgroundColor: '#fffbeb',
          borderColor: '#f59e0b',
          color: '#92400e'
        }
      case 'success':
        return {
          backgroundColor: '#d1fae5',
          borderColor: '#10b981',
          color: '#065f46'
        }
      case 'error':
        return {
          backgroundColor: '#fef2f2',
          borderColor: '#ef4444',
          color: '#991b1b'
        }
      default:
        return {
          backgroundColor: '#eff6ff',
          borderColor: '#3b82f6',
          color: '#1e40af'
        }
    }
  }

  const typeStyles = getTypeStyles()

  return (
    <div style={{...styles.container, ...typeStyles}}>
      <div style={styles.header}>
        <div style={styles.icon}>
          {type === 'warning' && '⚠️'}
          {type === 'success' && '✅'}
          {type === 'error' && '❌'}
          {type === 'info' && 'ℹ️'}
        </div>
        <h4 style={styles.title}>Catatan Sistem</h4>
      </div>
      
      <div style={styles.content}>
        {Array.isArray(catatan) ? (
          <ul style={styles.list}>
            {catatan.map((item, index) => (
              <li key={index} style={styles.listItem}>{item}</li>
            ))}
          </ul>
        ) : (
          <p style={styles.text}>{catatan}</p>
        )}
      </div>
      
      <div style={styles.footer}>
        <p style={styles.footerText}>
          <em>Catatan ini dihasilkan secara otomatis berdasarkan data yang diunggah.</em>
        </p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    borderRadius: '0.75rem',
    padding: '1.5rem',
    marginBottom: '1rem',
    borderLeft: '4px solid'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1rem'
  },
  icon: {
    fontSize: '1.5rem'
  },
  title: {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    margin: 0
  },
  content: {
    marginBottom: '1rem'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  listItem: {
    padding: '0.5rem 0',
    borderBottom: '1px solid rgba(0,0,0,0.1)'
  },
  text: {
    margin: 0,
    lineHeight: '1.6'
  },
  footer: {
    paddingTop: '1rem',
    borderTop: '1px solid rgba(0,0,0,0.1)'
  },
  footerText: {
    margin: 0,
    fontSize: '0.875rem',
    opacity: 0.8
  }
}

export default CatatanSistem