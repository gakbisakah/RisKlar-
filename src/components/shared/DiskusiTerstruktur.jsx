import React, { useState } from 'react'
import { akunDummy } from '../../data/akunDummy'
import { getDiskusiByUMKMId, addDiskusiMessage } from '../../data/diskusiDummy'

const DiskusiTerstruktur = ({ umkmId }) => {
  const currentUser = akunDummy.getCurrentUser()
  const [newMessage, setNewMessage] = useState('')
  const messages = getDiskusiByUMKMId(umkmId)

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const message = {
      id: `msg-${Date.now()}`,
      pengirim: currentUser.id,
      nama: currentUser.name,
      role: currentUser.role,
      waktu: new Date().toISOString().replace('T', ' ').substring(0, 16),
      pesan: newMessage,
      type: 'text'
    }

    addDiskusiMessage(umkmId, message)
    setNewMessage('')
  }

  const formatTime = (timeString) => {
    return timeString.substring(11, 16)
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>Diskusi Terstruktur</h3>
        <div style={styles.status}>
          <span style={styles.statusDot}></span>
          Percakapan Simulasi
        </div>
      </div>

      <div style={styles.chatContainer}>
        {messages.length === 0 ? (
          <div style={styles.emptyState}>
            <div style={styles.emptyIcon}>💬</div>
            <p style={styles.emptyText}>Belum ada diskusi</p>
            <p style={styles.emptySubtext}>Mulai percakapan pertama</p>
          </div>
        ) : (
          <div style={styles.messages}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  ...styles.message,
                  ...(msg.pengirim === currentUser.id ? styles.messageSent : styles.messageReceived)
                }}
              >
                <div style={styles.messageHeader}>
                  <span style={styles.senderName}>{msg.nama}</span>
                  <span style={{
                    ...styles.senderRole,
                    backgroundColor: msg.role === 'INVESTOR' ? '#10b98120' : 
                                   msg.role === 'MENTOR' ? '#8b5cf620' : '#3b82f620',
                    color: msg.role === 'INVESTOR' ? '#10b981' : 
                          msg.role === 'MENTOR' ? '#8b5cf6' : '#3b82f6'
                  }}>
                    {msg.role}
                  </span>
                  <span style={styles.messageTime}>{formatTime(msg.waktu)}</span>
                </div>
                <div style={styles.messageContent}>{msg.pesan}</div>
                {msg.type === 'saran' && (
                  <div style={styles.suggestionBadge}>
                    💡 Saran Mentor
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={styles.inputContainer}>
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Ketik pesan Anda di sini..."
          style={styles.textarea}
          rows={3}
        />
        <div style={styles.inputActions}>
          <div style={styles.inputNote}>
            <small>Percakapan ini bersifat simulasi untuk demonstrasi</small>
          </div>
          <button 
            onClick={handleSendMessage}
            style={styles.sendButton}
            disabled={!newMessage.trim()}
          >
            Kirim Pesan
          </button>
        </div>
      </div>

      <div style={styles.note}>
        <p>
          <strong>Catatan:</strong> Diskusi difasilitasi platform untuk transparansi. 
          Percakapan disimpan sebagai referensi.
        </p>
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
  status: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    color: '#6b7280'
  },
  statusDot: {
    width: '0.5rem',
    height: '0.5rem',
    borderRadius: '50%',
    backgroundColor: '#10b981',
    display: 'inline-block'
  },
  chatContainer: {
    backgroundColor: '#f9fafb',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    minHeight: '300px',
    maxHeight: '400px',
    overflowY: 'auto'
  },
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px',
    color: '#9ca3af'
  },
  emptyIcon: {
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  emptyText: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '0.5rem'
  },
  emptySubtext: {
    fontSize: '0.875rem'
  },
  messages: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  message: {
    padding: '1rem',
    borderRadius: '0.75rem',
    maxWidth: '80%'
  },
  messageSent: {
    backgroundColor: '#dbeafe',
    marginLeft: 'auto',
    borderTopRightRadius: '0.25rem'
  },
  messageReceived: {
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    marginRight: 'auto',
    borderTopLeftRadius: '0.25rem'
  },
  messageHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
    flexWrap: 'wrap'
  },
  senderName: {
    fontWeight: '600',
    fontSize: '0.875rem'
  },
  senderRole: {
    fontSize: '0.75rem',
    padding: '0.125rem 0.5rem',
    borderRadius: '9999px',
    fontWeight: '600'
  },
  messageTime: {
    fontSize: '0.75rem',
    color: '#9ca3af',
    marginLeft: 'auto'
  },
  messageContent: {
    lineHeight: '1.5',
    fontSize: '0.875rem'
  },
  suggestionBadge: {
    display: 'inline-block',
    marginTop: '0.5rem',
    padding: '0.25rem 0.5rem',
    backgroundColor: '#fef3c7',
    color: '#92400e',
    borderRadius: '0.375rem',
    fontSize: '0.75rem'
  },
  inputContainer: {
    marginBottom: '1.5rem'
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontFamily: 'inherit',
    fontSize: '0.875rem',
    resize: 'vertical',
    marginBottom: '0.75rem'
  },
  inputActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputNote: {
    color: '#9ca3af',
    fontSize: '0.75rem'
  },
  sendButton: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.5rem 1.5rem',
    border: 'none',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    fontWeight: '600'
  },
  note: {
    backgroundColor: '#eff6ff',
    padding: '1rem',
    borderRadius: '0.5rem',
    fontSize: '0.875rem'
  }
}

export default DiskusiTerstruktur