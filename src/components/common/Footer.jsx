import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-4 mb-4">
            <div className="d-flex align-items-center mb-3">
           
              <div>
                <h4 className="fw-bold text-white mb-1">UMKMInvest</h4>
                <small className="text-muted">Platform Transparan</small>
              </div>
            </div>
            <p className="text-light opacity-75 small">
              Menghubungkan UMKM dengan investor melalui sistem penilaian terbuka, edukasi risiko, dan kesepakatan mandiri.
            </p>
            <div className="social-links d-flex gap-3 mt-4">
              <a href="#" className="text-white opacity-75 hover-primary">
                <i className="fab fa-twitter fs-5"></i>
              </a>
              <a href="#" className="text-white opacity-75 hover-primary">
                <i className="fab fa-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white opacity-75 hover-primary">
                <i className="fab fa-linkedin fs-5"></i>
              </a>
              <a href="#" className="text-white opacity-75 hover-primary">
                <i className="fab fa-instagram fs-5"></i>
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-4 mb-4">
            <h5 className="text-white mb-4">Platform</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/#tentang" className="text-light text-decoration-none opacity-75 hover-opacity-100">
                  Tentang Sistem
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/#cara-kerja" className="text-light text-decoration-none opacity-75 hover-opacity-100">
                  Cara Kerja
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/#roadmap" className="text-light text-decoration-none opacity-75 hover-opacity-100">
                  Roadmap
                </Link>
              </li>
              <li className="mb-2">
                <a href="#kebijakan" className="text-light text-decoration-none opacity-75 hover-opacity-100">
                  Kebijakan Risiko
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-4 mb-4">
            <h5 className="text-white mb-4">Peran</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#umkm" className="text-light text-decoration-none opacity-75 hover-opacity-100">
                  Untuk UMKM
                </a>
              </li>
              <li className="mb-2">
                <a href="#investor" className="text-light text-decoration-none opacity-75 hover-opacity-100">
                  Untuk Investor
                </a>
              </li>
             
             
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-4 mb-4">
            <h5 className="text-white mb-4">Kontak & Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#audit" className="text-light text-decoration-none opacity-75 hover-opacity-100">
                  Audit & Transparansi
                </a>
              </li>
              <li className="mb-2">
                <a href="#batasan" className="text-light text-decoration-none opacity-75 hover-opacity-100">
                  Batas Peran Platform
                </a>
              </li>
              <li className="mb-2">
                <a href="mailto:kontak@umkminvest.id" className="text-light text-decoration-none opacity-75 hover-opacity-100">
                  <i className="fas fa-envelope me-2"></i>
                  kontak@umkminvest.id
                </a>
              </li>
              <li className="mb-2">
                <a href="tel:+6281234567890" className="text-light text-decoration-none opacity-75 hover-opacity-100">
                  <i className="fas fa-phone me-2"></i>
                  +62 812 3456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-top border-secondary border-opacity-25 pt-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0 text-muted small">
                &copy; {new Date().getFullYear()} UMKMInvest Platform. Hak Cipta Dilindungi.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-0 text-muted small">
                Dibangun dengan transparansi dan kepercayaan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;