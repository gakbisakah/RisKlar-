import React from 'react';

const RoleSelection = ({ onSelectRole }) => {
  const roles = [
    {
      id: 'umkm',
      title: 'UMKM',
      description: 'Usaha yang membutuhkan pendanaan dan ingin meningkatkan kelayakan investasi',
      icon: 'fas fa-store',
      color: '#4361ee',
      features: [
        'Dapatkan skor kelayakan transparan',
        'Identifikasi titik lemah bisnis',
        'Dapatkan masukan dari mentor',
        'Tampilkan ke investor yang tepat'
      ]
    },
    {
      id: 'investor',
      title: 'Investor',
      description: 'Ingin berinvestasi di UMKM dengan analisis risiko yang jelas dan transparan',
      icon: 'fas fa-chart-line',
      color: '#10b981',
      features: [
        'Akses data UMKM yang sudah difilter',
        'Analisis risiko yang transparan',
        'Histori perbaikan bisnis',
        'Kontak langsung setelah paham risiko'
      ]
    }
  ];

  return (
    <div className="role-selection" data-aos="fade-up">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold mb-3" style={{ color: '#1e293b' }}>
          Pilih Peran Anda
        </h2>
        <p className="text-muted lead mb-0">
          Pilih bagaimana Anda ingin bergabung dengan platform
        </p>
      </div>
      
      <div className="row g-4 justify-content-center">
        {roles.map((role) => (
          <div key={role.id} className="col-md-6">
            <div 
              className="card border-0 h-100"
              onClick={() => onSelectRole(role.id)}
              style={{ 
                cursor: 'pointer',
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                border: '2px solid rgba(0,0,0,0.05)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = `0 20px 60px ${role.color}30`;
                e.currentTarget.style.borderColor = `${role.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)';
              }}
            >
              {/* Header with Gradient */}
              <div className="card-header border-0 py-4 text-center" style={{
                background: `linear-gradient(135deg, ${role.color} 0%, ${role.color}dd 100%)`,
                color: 'white'
              }}>
                <div className="role-icon mb-3 mx-auto" style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)'
                }}>
                  <i className={`${role.icon} fs-1`}></i>
                </div>
                <h3 className="mb-2">{role.title}</h3>
                <p className="mb-0 opacity-90">{role.description}</p>
              </div>
              
              <div className="card-body p-4">
                <h6 className="mb-3" style={{ color: '#1e293b' }}>
                  <i className="fas fa-star me-2" style={{ color: role.color }}></i>
                  Manfaat Utama
                </h6>
                <ul className="list-unstyled mb-4">
                  {role.features.map((feature, index) => (
                    <li key={index} className="mb-2 d-flex align-items-start">
                      <i className="fas fa-check-circle me-3 mt-1" style={{ color: role.color }}></i>
                      <span style={{ color: '#64748b' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="alert alert-light border-0 rounded-3 mb-0" style={{
                  background: `${role.color}08`,
                  border: `1px solid ${role.color}20`
                }}>
                  <small className="d-flex align-items-center">
                    <i className="fas fa-info-circle me-2" style={{ color: role.color }}></i>
                    <span style={{ color: '#64748b' }}>
                      Pilih peran ini untuk memulai pendaftaran sebagai {role.title.toLowerCase()}
                    </span>
                  </small>
                </div>
              </div>
              
              <div className="card-footer bg-transparent border-0 p-4 pt-0">
                <button 
                  className="btn w-100 py-3 fw-bold"
                  style={{
                    background: `linear-gradient(135deg, ${role.color} 0%, ${role.color}dd 100%)`,
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    boxShadow: `0 4px 20px ${role.color}40`
                  }}
                >
                  <i className="fas fa-arrow-right me-2"></i>
                  Pilih sebagai {role.title}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-5">
        <div className="alert alert-light border-0 d-inline-block" style={{ 
          background: 'rgba(0,0,0,0.03)',
          backdropFilter: 'blur(10px)'
        }}>
          <p className="mb-0 text-muted">
            <i className="fas fa-question-circle me-2 text-primary"></i>
            Bingung memilih? <strong>UMKM</strong> untuk yang butuh pendanaan, <strong>Investor</strong> untuk yang ingin berinvestasi
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;