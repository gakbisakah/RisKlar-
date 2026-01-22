import React, { useState } from 'react';

const DiskusiTerstruktur = ({ diskusiData }) => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState(diskusiData || []);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        pengirim: 'investor',
        waktu: new Date().toLocaleString('id-ID'),
        teks: newMessage,
        status: 'terkirim'
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <div className="card border-0 shadow" data-aos="fade-up">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">
          <i className="fas fa-comments me-2"></i>
          Diskusi Terstruktur
        </h5>
      </div>
      <div className="card-body">
        <div className="discussion-container" style={{ height: '400px', overflowY: 'auto' }}>
          {messages.length === 0 ? (
            <div className="text-center py-5">
              <i className="fas fa-comment-slash text-muted fs-1 mb-3"></i>
              <p className="text-muted">Belum ada diskusi</p>
              <small className="text-muted">Mulai diskusi dengan mengirim pesan pertama</small>
            </div>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className={`mb-3 ${msg.pengirim === 'investor' ? 'text-end' : ''}`}>
                <div className={`d-inline-block p-3 rounded ${msg.pengirim === 'investor' ? 'bg-primary text-white' : 'bg-light'}`}
                     style={{ maxWidth: '80%' }}>
                  <p className="mb-1">{msg.teks}</p>
                  <small className={`${msg.pengirim === 'investor' ? 'text-white-50' : 'text-muted'}`}>
                    {msg.pengirim === 'investor' ? 'Anda' : 'UMKM'} • {msg.waktu}
                  </small>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="mt-3">
          <div className="input-group">
            <textarea
              className="form-control"
              placeholder="Tulis pesan Anda..."
              rows="2"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            ></textarea>
            <button className="btn btn-primary" onClick={handleSendMessage}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
        
        <div className="alert alert-info mt-3">
          <div className="d-flex">
            <i className="fas fa-info-circle me-3 mt-1"></i>
            <div>
              <small>
                <span className="fw-bold">Catatan:</span> Diskusi ini tercatat dalam sistem.
                Hindari berbagi informasi sensitif. Untuk komunikasi lebih lanjut, gunakan WhatsApp.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiskusiTerstruktur;