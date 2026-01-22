import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import StatusKerjaSama from '../components/shared/StatusKerjaSama';

const Kesepakatan = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    pahamRisiko: false,
    tanpaJaminan: false,
    diLuarPlatform: false,
    opsiBatalkan: false,
    jumlahInvestasi: '',
    periodeInvestasi: '',
    bentukKerjaSama: '',
    catatanTambahan: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check authentication
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'investor') {
      navigate('/auth');
      return;
    }

    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true
      });
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      alert('Kesepakatan berhasil diajukan! Anda akan dihubungi oleh UMKM.');
      navigate('/dashboard-investor');
    }, 2000);
  };

  const handleCancel = () => {
    if (window.confirm('Apakah Anda yakin ingin membatalkan minat investasi?')) {
      navigate('/dashboard-investor');
    }
  };

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="row mb-5" data-aos="fade-up">
        <div className="col-md-8">
          <button className="btn btn-outline-primary mb-3" onClick={() => navigate('/dashboard-investor')}>
            <i className="fas fa-arrow-left me-2"></i>
            Kembali
          </button>
          <h1 className="display-6 fw-bold mb-2">Kesepakatan Mandiri</h1>
          <p className="text-muted">
            Ajukan minat investasi Anda dengan UMKM terpilih
          </p>
        </div>
        <div className="col-md-4 text-md-end">
          <div className="badge bg-warning px-3 py-2 fs-6">
            Status: Draft
          </div>
        </div>
      </div>

      <div className="row">
        {/* Left Column - Form */}
        <div className="col-lg-8">
          <div className="card border-0 shadow mb-4" data-aos="fade-up">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Checklist Persetujuan (Wajib)</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <h6 className="mb-3">Persetujuan Dasar</h6>
                  <div className="border rounded p-3">
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="pahamRisiko"
                        checked={formData.pahamRisiko}
                        onChange={(e) => setFormData({...formData, pahamRisiko: e.target.checked})}
                        required
                      />
                      <label className="form-check-label" htmlFor="pahamRisiko">
                        <strong>Saya memahami semua risiko investasi UMKM</strong> - termasuk risiko kehilangan seluruh dana investasi, kesulitan exit strategy, dan ketidakpastian return.
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="tanpaJaminan"
                        checked={formData.tanpaJaminan}
                        onChange={(e) => setFormData({...formData, tanpaJaminan: e.target.checked})}
                        required
                      />
                      <label className="form-check-label" htmlFor="tanpaJaminan">
                        <strong>Saya memahami bahwa TIDAK ADA jaminan dari platform</strong> - platform hanya menyediakan informasi, tidak memberikan jaminan keamanan, return, atau keberhasilan investasi.
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="diLuarPlatform"
                        checked={formData.diLuarPlatform}
                        onChange={(e) => setFormData({...formData, diLuarPlatform: e.target.checked})}
                        required
                      />
                      <label className="form-check-label" htmlFor="diLuarPlatform">
                        <strong>Saya memahami bahwa kesepakatan terjadi DI LUAR platform</strong> - semua negosiasi, kontrak, dan implementasi terjadi langsung antara saya dan UMKM.
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="opsiBatalkan"
                        checked={formData.opsiBatalkan}
                        onChange={(e) => setFormData({...formData, opsiBatalkan: e.target.checked})}
                      />
                      <label className="form-check-label" htmlFor="opsiBatalkan">
                        <strong>Saya ingin menyimpan opsi untuk membatalkan minat investasi kapan saja</strong> - sebelum adanya komitmen formal.
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h6 className="mb-3">Detail Minat Investasi (Opsional)</h6>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Jumlah Investasi (Rp)</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Contoh: 100.000.000"
                        value={formData.jumlahInvestasi}
                        onChange={(e) => setFormData({...formData, jumlahInvestasi: e.target.value})}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Periode Investasi</label>
                      <select
                        className="form-select"
                        value={formData.periodeInvestasi}
                        onChange={(e) => setFormData({...formData, periodeInvestasi: e.target.value})}
                      >
                        <option value="">Pilih Periode</option>
                        <option value="1-2 tahun">1-2 tahun</option>
                        <option value="3-5 tahun">3-5 tahun</option>
                        <option value=">5 tahun">&gt; 5 tahun</option>
                        <option value="open">Terbuka</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Bentuk Kerja Sama</label>
                      <select
                        className="form-select"
                        value={formData.bentukKerjaSama}
                        onChange={(e) => setFormData({...formData, bentukKerjaSama: e.target.value})}
                      >
                        <option value="">Pilih Bentuk</option>
                        <option value="equity">Equity (Saham)</option>
                        <option value="debt">Pinjaman</option>
                        <option value="hybrid">Hibrid (Debt + Equity)</option>
                        <option value="revenue-sharing">Revenue Sharing</option>
                        <option value="other">Lainnya</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Catatan Tambahan untuk UMKM</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Jelaskan ekspektasi, syarat khusus, atau hal lain yang perlu diketahui UMKM..."
                        value={formData.catatanTambahan}
                        onChange={(e) => setFormData({...formData, catatanTambahan: e.target.value})}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="alert alert-danger">
                  <div className="d-flex">
                    <i className="fas fa-exclamation-triangle me-3 mt-1"></i>
                    <div>
                      <small>
                        <strong>PERINGATAN AKHIR:</strong> Dengan mengirimkan minat investasi ini, Anda mengkonfirmasi bahwa semua keputusan investasi adalah tanggung jawab Anda sepenuhnya. Platform tidak bertanggung jawab atas keputusan, kerugian, atau masalah yang timbul dari kesepakatan ini.
                      </small>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between mt-4">
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={handleCancel}
                  >
                    <i className="fas fa-ban me-2"></i>
                    Batalkan Minat
                  </button>
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-secondary me-2"
                      onClick={() => navigate('/dashboard-investor')}
                    >
                      Simpan Draft
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting || !formData.pahamRisiko || !formData.tanpaJaminan || !formData.diLuarPlatform}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane me-2"></i>
                          Ajukan Minat Investasi
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Right Column - Status & Info */}
        <div className="col-lg-4">
          {/* Status Info */}
          <div className="mb-4" data-aos="fade-up">
            <StatusKerjaSama />
          </div>

          {/* Important Info */}
          <div className="card border-0 shadow" data-aos="fade-up">
            <div className="card-header bg-info text-white">
              <h5 className="mb-0">
                <i className="fas fa-info-circle me-2"></i>
                Proses Selanjutnya
              </h5>
            </div>
            <div className="card-body">
              <div className="timeline">
                {[
                  { step: 1, text: 'UMKM menerima notifikasi minat Anda' },
                  { step: 2, text: 'UMKM akan menghubungi Anda via WhatsApp' },
                  { step: 3, text: 'Diskusi dan negosiasi langsung' },
                  { step: 4, text: 'Pembuatan kontrak oleh pihak UMKM' },
                  { step: 5, text: 'Review kontrak oleh Anda' },
                  { step: 6, text: 'Penandatanganan kontrak' },
                  { step: 7, text: 'Transfer dana investasi' }
                ].map((item) => (
                  <div key={item.step} className="timeline-item">
                    <div className="d-flex">
                      <div className="rounded-circle bg-info text-white d-flex align-items-center justify-content-center"
                           style={{ width: '30px', height: '30px', minWidth: '30px' }}>
                        {item.step}
                      </div>
                      <div className="ms-3">
                        <p className="mb-0 small">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kesepakatan;