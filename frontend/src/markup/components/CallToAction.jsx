import React, { useEffect, useState } from "react";
import { publicAxios } from "../../utils/axios/publicAxiosInstance";

const CallToAction = () => {
  const [cta, setCta] = useState({
    content: "",
    download_url: "#",
  });
  const [loading, setLoading] = useState(true);

  // ---------------- FETCH DATA ---------------- //
  useEffect(() => {
    const fetchCta = async () => {
      try {
        const response = await publicAxios.get("/calltoaction");
        setCta(response?.data);
      } catch (err) {
        console.error("Failed to fetch Call to Action:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCta();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section id="call-to-action" className="call-to-action section dark-background">
      <div className="container">
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-9 text-center text-xl-start">
            <h3>Download Tenachin</h3>
            <p>{cta?.content}</p>
          </div>
          <div className="col-xl-3 cta-btn-container text-center">
            <a
              className="cta-btn align-middle"
              href={cta?.download_url || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
