import React from "react";
import teamData from "../../data/clinicalTeamData.json";
// import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ClinicalTeam = () => {
  //   React.useEffect(() => {
  //     AOS.init({ duration: 800, once: true });
  //   }, []);

  return (
    <section id="clinical-team" className="clinical-team section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Renowned Clinical Team</h2>
        <p>
          Our team delivers comprehensive care—from critical and chronic
          conditions to preventive health and mental wellness—combining
          specialists, general practitioners, nutritionists, pharmacists, and
          counselors for holistic, patient-centered healthcare at all levels.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4 justify-content-start">
          {teamData.map((role, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={role.delay}
            >
              <div className="clinical-role">
                <i
                  className={`bi ${role.icon}`}
                  style={{ color: role.color, fontSize: "2rem" }}
                ></i>

                <h5>{role.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicalTeam;
