import React, { useEffect, useState } from "react";
import { publicAxios } from "../../utils/axios/publicAxiosInstance";

const About = () => {
  const [descriptionLeft, setDescriptionLeft] = useState("");
  // const [descriptionRight, setDescriptionRight] = useState("");
  // const [listItems, setListItems] = useState([]);


  useEffect(() => {
    // Fetch hero section data from backend
    const fetchHeroData = async () => {
      try {
        const response = await publicAxios.get("/aboutsection");
        console.log(response)
        const data = response?.data;
        // Set state values for the hero content
        setDescriptionLeft(data?.description_left);
        // setDescriptionRight(data?.description_right);
        // setListItems(data?.list_items);
      } catch (error) {
        console.error("Error fetching hero section data:", error);
      }
    };

    // Call the fetch function
    fetchHeroData();
  }, []);

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
            className="content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p>
              {descriptionLeft}
            </p>

             {/* <ul>
              {listItems?.map((item, index) => (
                <li key={index}>
                  <i className="bi bi-check2-circle"></i>
                  <span> {item?.text}</span>
                </li>
              ))}
            </ul> */}
          </div>

          {/* <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <p>
              {descriptionRight}
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
