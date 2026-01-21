import React from 'react'
import HeroSection from '../components/landing/HeroSection'
import SectionMasalah from '../components/landing/SectionMasalah'
import VisualAlur from '../components/landing/VisualAlur'
import ContohOutput from '../components/landing/ContohOutput'
import TargetPengguna from '../components/landing/TargetPengguna'
import BatasanSistem from '../components/landing/BatasanSistem'

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <SectionMasalah />
      <VisualAlur />
      <ContohOutput />
      <TargetPengguna />
      <BatasanSistem />
    </div>
  )
}

export default LandingPage