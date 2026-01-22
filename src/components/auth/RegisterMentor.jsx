import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION } from '../../utils/constants';

const RegisterMentor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    password: '',
    whatsapp: '',
    bidang: '',
    nonInvestor: false,
    agreeRisk: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simpan data ke localStorage (dummy)
    const userData = {
      ...formData,
      role: 'mentor',
      umkmDireview: 0,
      reviewAktif: 0,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('auth_token', 'dummy_token_mentor');
    
    alert('Registrasi Mentor berhasil! Mengarahkan ke dashboard...');
    navigate('/dashboard-mentor');
  };

  return (
    <div className="card border-0 shadow" data-aos="fade-up">
      <div className="card-header bg-warning text-white py-3">
        <h4 className="mb-0">Form Registrasi Mentor</h4>
      </div>
      <div className="card-body p-4">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-12">
              <label className="form-label">Nama Lengkap *</label>
              <input
                type="text"
                className="form-control"
                value={formData.namaLengkap}
                onChange={(e) => setFormData({...formData, namaLengkap: e.target.value})}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email *</label>
              <input
                type="email"
                className="form-control"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password *</label>
              <input
                type="password"
                className="form-control"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>
            <div className="col-12">
              <label className="form-label">Nomor WhatsApp *</label>
              <div className="input-group">
                <span className="input-group-text">+62</span>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="81234567890"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="col-12">
              <label className="form-label">Bidang Keahlian *</label>
              <select
                className="form-select"
                value={formData.bidang}
                onChange={(e) => setFormData({...formData, bidang: e.target.value})}
                required
              >
                <option value="">Pilih Bidang</option>
                <option value="Keuangan & Akuntansi">Keuangan & Akuntansi</option>
                <option value="Bisnis & Strategi">Bisnis & Strategi</option>
                <option value="Pemasaran & Digital">Pemasaran & Digital</option>
                <option value="Operasional & Produksi">Operasional & Produksi</option>
                <option value="Legal & Perizinan">Legal & Perizinan</option>
                <option value="Manajemen SDM">Manajemen SDM</option>
              </select>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="nonInvestor"
                  checked={formData.nonInvestor}
                  onChange={(e) => setFormData({...formData, nonInvestor: e.target.checked})}
                  required
                />
                <label className="form-check-label" htmlFor="nonInvestor">
                  Saya menyatakan bahwa saya TIDAK akan berinvestasi di UMKM yang saya review, untuk menjaga independensi.
                </label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="agreeRisk"
                  checked={formData.agreeRisk}
                  onChange={(e) => setFormData({...formData, agreeRisk: e.target.checked})}
                  required
                />
                <label className="form-check-label" htmlFor="agreeRisk">
                  Saya menyetujui untuk memberikan penilaian yang objektif dan independen.
                  Saya bertanggung jawab atas masukan yang saya berikan.
                </label>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <button type="submit" className="btn btn-warning btn-lg w-100">
              Daftar sebagai Mentor
            </button>
          </div>
        </form>
        
        <div className="alert alert-info mt-4">
          <div className="d-flex">
            <i className="fas fa-info-circle me-3 mt-1"></i>
            <div>
              <small className="fw-bold">Peran Mentor:</small>
              <small className="d-block">
                Sebagai mentor, Anda akan menilai UMKM secara independen dan memberikan masukan untuk perbaikan.
                Review Anda akan mempengaruhi skor UMKM secara transparan.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterMentor;