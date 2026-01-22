import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION } from '../../utils/constants';

const RegisterInvestor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    password: '',
    whatsapp: '',
    agreeRisk: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simpan data ke localStorage (dummy)
    const userData = {
      ...formData,
      role: 'investor',
      statusEdukasi: 'Belum',
      riwayatMinat: 0,
      status: 'Aktif',
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('auth_token', 'dummy_token_investor');
    
    alert('Registrasi Investor berhasil! Mengarahkan ke dashboard...');
    navigate(NAVIGATION.DASHBOARD_INVESTOR);
  };

  return (
    <div className="card border-0 shadow" data-aos="fade-up">
      <div className="card-header bg-success text-white py-3">
        <h4 className="mb-0">Form Registrasi Investor</h4>
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
              <small className="text-muted">Nomor ini akan digunakan untuk komunikasi dengan UMKM</small>
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
                  Saya menyetujui bahwa saya telah memahami semua risiko investasi UMKM.
                  Saya bertanggung jawab penuh atas keputusan investasi saya dan platform tidak memberikan jaminan apapun.
                </label>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <button type="submit" className="btn btn-success btn-lg w-100">
              Daftar sebagai Investor
            </button>
          </div>
        </form>
        
        <div className="alert alert-danger mt-4">
          <div className="d-flex">
            <i className="fas fa-exclamation-circle me-3 mt-1"></i>
            <div>
              <small className="fw-bold">Peringatan Risiko:</small>
              <small className="d-block">
                Investasi UMKM memiliki risiko tinggi. Anda bisa kehilangan seluruh dana yang diinvestasikan.
                Platform hanya menyediakan informasi, bukan nasihat investasi.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterInvestor;