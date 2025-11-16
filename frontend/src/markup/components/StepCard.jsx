// Single Step Card Component
const StepCard = ({ icon, title, description, list, delay }) => (
  <div className="col-lg-4" data-aos="fade-up" data-aos-delay={delay}>
    <div className="how-step">
      <div className="step-icon">{icon}</div>
      <h3>{title}</h3>
      {list ? (
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{description}</p>
      )}
    </div>
  </div>
);

export default StepCard;