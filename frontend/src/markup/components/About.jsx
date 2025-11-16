import React from 'react'

const About = () => {
  return (
   <section id="about" className="about section">

  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>About</h2>
    <p>Who we are</p>
  </div>

  <div className="container">
    <div className="row gy-4">

      <div
        className="col-lg-6 content"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <p>
          Tenachin is Africa’s first multilingual, full-spectrum telehealth
          platform, founded by doctors, programmers, and public health experts.
          We bridge the gap between skilled professionals and underserved
          communities by combining cutting-edge technology with top-tier
          specialists from Ethiopia and worldwide.
        </p>

        <ul>
          <li>
            <i className="bi bi-check2-circle"></i>
            <span> Launched in Ethiopia. Built for Africa.</span>
          </li>
          <li>
            <i className="bi bi-check2-circle"></i>
            <span> 24/7. In your language. On your terms.</span>
          </li>
          <li>
            <i className="bi bi-check2-circle"></i>
            <span> This is the future of care. Welcome to Tenachin.</span>
          </li>
        </ul>
      </div>

      <div
        className="col-lg-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p>
          Available 24/7 via phone, Tenachin’s trusted multidisciplinary team
          provides seamless, patient-centered care—from urgent and chronic
          disease management to mental health, prescription refills, tele-ICU,
          tele-anesthesia, maternal care, and home-based digital monitoring—
          through secure, easy-to-use digital platforms tailored to your needs.
        </p>
      </div>

    </div>
  </div>

</section>

  )
}

export default About