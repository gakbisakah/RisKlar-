import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const SubSkor = ({ scoreData }) => {
  const scores = scoreData || {
    legalitas: 65,
    modelBisnis: 78,
    keuangan: 70,
    operasional: 75
  };

  const getColor = (score) => {
    if (score >= 75) return 'success';
    if (score >= 50) return 'warning';
    return 'danger';
  };

  const getLabel = (score) => {
    if (score >= 75) return 'Baik';
    if (score >= 50) return 'Cukup';
    return 'Perlu Perbaikan';
  };

  return (
    <div className="card border-0 shadow" data-aos="fade-up">
      <div className="card-header bg-white border-0">
        <h4 className="mb-0">Analisis Skor Detail</h4>
      </div>
      <div className="card-body">
        {Object.entries(scores).map(([key, value]) => (
          <div key={key} className="mb-4">
            <div className="d-flex justify-content-between mb-2">
              <div>
                <h6 className="mb-0 text-capitalize">{key.replace(/([A-Z])/g, ' $1')}</h6>
                <small className="text-muted">Nilai: {value}%</small>
              </div>
              <div>
                <span className={`badge bg-${getColor(value)}`}>
                  {getLabel(value)}
                </span>
              </div>
            </div>
            <ProgressBar
              now={value}
              variant={getColor(value)}
              className="mb-3"
              style={{ height: '10px', borderRadius: '5px' }}
            />
            <div className="edu-info">
              {value < 75 && (
                <div className={`alert alert-${getColor(value)} border-0 py-2`}>
                  <small>
                    <i className="fas fa-lightbulb me-2"></i>
                    {key === 'legalitas' && 'Perkuat legalitas usaha dengan perizinan yang lengkap'}
                    {key === 'modelBisnis' && 'Kembangkan model bisnis yang lebih sustainable'}
                    {key === 'keuangan' && 'Tingkatkan pencatatan keuangan dan cash flow management'}
                    {key === 'operasional' && 'Optimalkan proses operasional dan dokumentasi'}
                  </small>
                </div>
              )}
            </div>
          </div>
        ))}
        
        <div className="mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card border-0 bg-light">
                <div className="card-body">
                  <h6 className="mb-2">Rata-rata Industri</h6>
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <ProgressBar now={68} variant="info" className="mb-1" />
                    </div>
                    <span className="ms-2 fw-bold">68%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 bg-light">
                <div className="card-body">
                  <h6 className="mb-2">Target Minimal Investor</h6>
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <ProgressBar now={65} variant="success" className="mb-1" />
                    </div>
                    <span className="ms-2 fw-bold">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSkor;