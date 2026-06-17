import React, { useEffect } from 'react'

import ServiceHero from '../../components/services/ServiceHero'
import Commitment from '../../components/common/Commitment'
import ServiceCards from '../../components/services/ServiceCards'
import ContactFormSection from '../../components/contact/ContactForm'
import WhoWeServe from '../../components/services/WhoWeServe'

import { updateSEO } from '../../utils/seo'

const ServicePage = () => {

  useEffect(() => {

    updateSEO({

      title:
        "Telehealth & Healthcare Services | Centered Care Wellness",

      description:
        "Explore our telehealth services including chronic care management, behavioral health support, medication management coaching, remote patient monitoring, concierge medicine, and personalized virtual healthcare.",

      keywords:
        "telehealth services, chronic care management, remote patient monitoring, behavioral health, medication management, concierge medicine, online healthcare, virtual care"

    })

  }, [])

  return (
    <>
      <ServiceHero />
      <ServiceCards />
      <WhoWeServe />
      <Commitment />
      <ContactFormSection />
    </>
  )
}

export default ServicePage