import React, { useState } from 'react';

const TombolAksi = ({ umkmData }) => {
  const [showWhatsappConfirm, setShowWhatsappConfirm] = useState(false);
  const [showInterestConfirm, setShowInterestConfirm] = useState(false);
  const [showDataRequest, setShowDataRequest] = useState(false);

  const handleWhatsappClick = () => {
    setShowWhatsappConfirm(true);
  };

  const handleConfirmWhatsapp = () => {
    window.open(`https://wa.me/${umkmData.kontak}?text=Halo%20${umkmData.nama},%20saya%20investor%20dari%20platform%20UMKMInvest.%20Bisa%20berdiskusi%20lebih%20lanjut?`, '_blank');
    setShowWhatsappConfirm(false);
  };

  const handleRequestData = () => {
    setShowDataRequest(true);
  };

  const handleSubmitDataRequest = (requestedData) => {
    alert(`Permintaan data telah dikirim ke ${umkmData.nama}`);
    setShowDataRequest(false);
  };

  return (
    <>
      <div className="card border-0 shadow" data-aos="fade-up">
        <div className="card-header bg-success text-white">
          <h5 className="mb-0">Aksi yang Tersedia</h5>
        </div>
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <button 
                className="btn btn-success w-100 d-flex align-items-center justify-content-center"
                onClick={handleWhatsappClick}
              >
                <i className="fab fa-whatsapp me-2 fs-5"></i>
                Hubungi via WhatsApp
              </button>
              <small className="text-muted d-block mt-2 text-center">
                Komunikasi langsung dengan UMKM
              </small>
            </div>
            
            <div className="col-md-6">
              <button 
                className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center"
                onClick={() => setShowInterestConfirm(true)}
              >
                <i className="fas fa-handshake me-2"></i>
                Ajukan Minat Investasi
              </button>
              <small className="text-muted d-block mt-2 text-center">
                Mulai proses kesepakatan
              </small>
            </div>
            
            <div className="col-md-12">
              <button 
                className="btn btn-outline-info w-100 d-flex align-items-center justify-content-center"
                onClick={handleRequestData}
              >
                <i className="fas fa-file-alt me-2"></i>
                Minta Data Tambahan
              </button>
              <small className="text-muted d-block mt-2 text-center">
                Minta dokumen spesifik yang belum tersedia
              </small>
            </div>
          </div>
          
          <div className="alert alert-warning mt-4">
            <div className="d-flex">
              <i className="fas fa-exclamation-triangle me-3 mt-1"></i>
              <div>
                <small className="fw-bold">Peringatan:</small>
                <small className="d-block">
                  Semua komunikasi dan kesepakatan terjadi di luar platform. Platform tidak bertanggung jawab atas keputusan investasi Anda.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Confirmation Modal */}
      {showWhatsappConfirm && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-warning">
                <h5 className="modal-title">Konfirmasi Kontak WhatsApp</h5>
                <button type="button" className="btn-close" onClick={() => setShowWhatsappConfirm(false)}></button>
              </div>
              <div className="modal-body">
                <div className="alert alert-danger">
                  <h6><i className="fas fa-exclamation-triangle me-2"></i>PERINGATAN RISIKO</h6>
                  <p className="small mb-2">Dengan menghubungi UMKM, Anda:</p>
                  <ul className="small">
                    <li>Keluar dari ekosistem platform</li>
                    <li>Bertanggung jawab penuh atas komunikasi selanjutnya</li>
                    <li>Bisa berhenti kapan saja tanpa kewajiban</li>
                    <li>Tidak mendapat jaminan dari platform</li>
                  </ul>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="understandRisk" />
                  <label className="form-check-label small" htmlFor="understandRisk">
                    Saya memahami semua risiko dan siap berkomunikasi di luar platform
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowWhatsappConfirm(false)}>
                  Batalkan
                </button>
                <button type="button" className="btn btn-success" onClick={handleConfirmWhatsapp}>
                  <i className="fab fa-whatsapp me-2"></i>
                  Buka WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Data Request Modal */}
      {showDataRequest && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-info text-white">
                <h5 className="modal-title">Minta Data Tambahan</h5>
                <button type="button" className="btn-close" onClick={() => setShowDataRequest(false)}></button>
              </div>
              <div className="modal-body">
                <p className="mb-3">Pilih data yang ingin Anda minta dari {umkmData.nama}:</p>
                <div className="border rounded p-3">
                  {[
                    'Laporan keuangan 6 bulan terakhir',
                    'Bukti perizinan usaha lengkap',
                    'Struktur organisasi dan job description',
                    'Rencana bisnis 1 tahun ke depan',
                    'Daftar pelanggan tetap',
                    'Dokumen kontrak dengan supplier',
                    'Sertifikat produk (jika ada)',
                    'Dokumen aset dan inventaris'
                  ].map((item, index) => (
                    <div key={index} className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" id={`data${index}`} />
                      <label className="form-check-label small" htmlFor={`data${index}`}>
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="mt-3">
                  <label className="form-label small">Catatan Tambahan (opsional):</label>
                  <textarea className="form-control form-control-sm" rows="3" placeholder="Jelaskan kebutuhan data Anda..."></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowDataRequest(false)}>
                  Batalkan
                </button>
                <button type="button" className="btn btn-primary" onClick={() => handleSubmitDataRequest()}>
                  Kirim Permintaan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TombolAksi;