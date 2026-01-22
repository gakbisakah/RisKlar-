import React from 'react';

const StatusKerjaSama = ({ statusData }) => {
  const status = statusData || {
    status: 'Dalam Kerja Sama',
    timeline: [
      { tanggal: '2024-01-10', event: 'UMKM terdaftar di sistem' },
      { tanggal: '2024-01-12', event: 'Mentor review selesai' },
      { tanggal: '2024-01-15', event: 'Investor menunjukkan minat' },
      { tanggal: '2024-01-20', event: 'Kesepakatan awal dibuat' },
      { tanggal: '2024-01-25', event: 'Dana pertama ditransfer' },
      { tanggal: '2024-02-01', event: 'Monitoring pertama dilakukan' }
    ]
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Dalam Kerja Sama': return 'success';
      case 'Kerja Sama Selesai': return 'info';
      case 'Dibatalkan': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <div className="card border-0 shadow" data-aos="fade-up">
      <div className="card-header bg-dark text-white">
        <h5 className="mb-0">
          <i className="fas fa-history me-2"></i>
          Status Kerja Sama
        </h5>
      </div>
      <div className="card-body">
        <div className="text-center mb-4">
          <div className={`badge bg-${getStatusColor(status.status)} px-4 py-2 fs-5 mb-3`}>
            {status.status}
          </div>
          {status.alasanPembatalan && (
            <div className="alert alert-danger mt-2">
              <small>
                <i className="fas fa-exclamation-circle me-2"></i>
                <strong>Alasan Pembatalan:</strong> {status.alasanPembatalan}
              </small>
            </div>
          )}
        </div>
        
        <h6 className="mb-3">Timeline Perkembangan:</h6>
        <div className="timeline">
          {status.timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="d-flex">
                <div className="timeline-marker"></div>
                <div className="ms-3 mb-3">
                  <div className="card border-0 bg-light">
                    <div className="card-body py-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="mb-0">{item.event}</h6>
                        <small className="text-muted">{item.tanggal}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4">
          <div className="row">
            <div className="col-md-6">
              <button className="btn btn-outline-primary w-100">
                <i className="fas fa-file-contract me-2"></i>
                Lihat Dokumen
              </button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-outline-danger w-100">
                <i className="fas fa-ban me-2"></i>
                Ajukan Pembatalan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusKerjaSama;