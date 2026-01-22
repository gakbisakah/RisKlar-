import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const CompareUMKM = ({ umkmList }) => {
  const [selectedUMKM, setSelectedUMKM] = useState([0, 1]);

  const comparisonData = selectedUMKM.map(index => umkmList[index]);

  const chartData = [
    { name: 'Legalitas', ...comparisonData.reduce((acc, umkm, i) => {
      acc[`umkm${i+1}`] = umkm.skorDetail.legalitas;
      return acc;
    }, {}) },
    { name: 'Model Bisnis', ...comparisonData.reduce((acc, umkm, i) => {
      acc[`umkm${i+1}`] = umkm.skorDetail.modelBisnis;
      return acc;
    }, {}) },
    { name: 'Keuangan', ...comparisonData.reduce((acc, umkm, i) => {
      acc[`umkm${i+1}`] = umkm.skorDetail.keuangan;
      return acc;
    }, {}) },
    { name: 'Operasional', ...comparisonData.reduce((acc, umkm, i) => {
      acc[`umkm${i+1}`] = umkm.skorDetail.operasional;
      return acc;
    }, {}) }
  ];

  const colors = ['#4361ee', '#4cc9f0', '#7209b7', '#f72585'];

  return (
    <div className="card border-0 shadow" data-aos="fade-up">
      <div className="card-header bg-primary text-white">
        <h4 className="mb-0">Bandingkan UMKM</h4>
      </div>
      <div className="card-body">
        <div className="row mb-4">
          {comparisonData.map((umkm, index) => (
            <div key={umkm.id} className="col-md-6">
              <div className="card border-0 bg-light h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h5 className="mb-1">{umkm.nama}</h5>
                      <span className={`badge bg-${umkm.status === 'Layak Ditampilkan' ? 'success' : 'warning'}`}>
                        {umkm.status}
                      </span>
                    </div>
                    <div className="text-end">
                      <div className="score-circle-sm">
                        <h3 className="mb-0 fw-bold">{umkm.skorSekarang}%</h3>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <small className="text-muted">Omzet</small>
                      <p className="mb-1 fw-bold">{umkm.omzet}</p>
                    </div>
                    <div className="col-6">
                      <small className="text-muted">Risiko Utama</small>
                      <p className="mb-1 fw-bold">{umkm.risikoUtama}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <h6 className="mb-3">Perbandingan Skor Detail:</h6>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {comparisonData.map((_, index) => (
                <Bar 
                  key={`umkm${index+1}`} 
                  dataKey={`umkm${index+1}`} 
                  fill={colors[index % colors.length]}
                  name={`UMKM ${index+1}`}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="alert alert-warning">
          <div className="d-flex">
            <i className="fas fa-balance-scale me-3 mt-1"></i>
            <div>
              <small className="fw-bold">Tips Perbandingan:</small>
              <small className="d-block">
                Bandingkan tidak hanya skor total, tetapi juga tren perbaikan, komitmen UMKM, dan chemistry bisnis.
                Investasi yang baik membutuhkan kecocokan strategi dan nilai.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareUMKM;