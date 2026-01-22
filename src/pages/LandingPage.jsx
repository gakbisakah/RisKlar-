import React, { useEffect } from 'react';
import HeroSection from '../components/landing/HeroSection';
import SectionMasalah from '../components/landing/SectionMasalah';
import VisualAlur from '../components/landing/VisualAlur';
import ContohOutput from '../components/landing/ContohOutput';
import TargetPengguna from '../components/landing/TargetPengguna';
import BatasanSistem from '../components/landing/BatasanSistem';

const LandingPage = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }
    
    return () => {
      if (window.AOS) {
        window.AOS.refresh();
      }
    };
  }, []);

  return (
    <div className="landing-page">
      <HeroSection />
      <SectionMasalah />
      <VisualAlur />
      <ContohOutput />
      <TargetPengguna />
      <BatasanSistem />
      
      {/* CTA Section */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" data-aos="fade-up">
              <div className="card border-0 shadow-lg rounded-3">
                <div className="card-body p-5">
                  <h2 className="display-5 fw-bold mb-4 gradient-text">Siap Bergabung?</h2>
                  <p className="lead mb-4">
                    Mulai perjalanan investasi UMKM yang lebih transparan dan bertanggung jawab.
                  </p>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    <a href="/auth" className="btn btn-gradient-primary btn-lg px-5 py-3">
                      <i className="fas fa-rocket me-2"></i>
                      Daftar Sekarang
                    </a>
                    <a href="/auth" className="btn btn-outline-primary btn-lg px-5 py-3">
                      <i className="fas fa-sign-in-alt me-2"></i>
                      Masuk ke Akun
                    </a>
                  </div>
                  <div className="mt-4">
                    <div className="alert alert-light border-0 rounded-pill d-inline-block px-4">
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;