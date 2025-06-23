import Badge from "../elements/Badge";
import Resume from "../../resume.json";

function AboutMe() {
  return (
    <section className="section has-background-primary" id="aboutMe">
      <div className="container has-text-centered">
        <figure className="image is-inline-block">
          <img
            style={{ width: "180px", height: "180px" }}
            src={Resume.basics.picture}
            alt={Resume.basics.name}
            className="is-rounded"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = Resume.basics.x_pictureFallback;
            }}
          />
        </figure>
        <p className="subtitle is-4 has-text-white has-text-weight-bold">
          {Resume.basics.x_title}
        </p>
        <div
          className="subtitle is-5 has-text-white has-text-weight-light summary-text"
          dangerouslySetInnerHTML={{ __html: Resume.basics.summary }}
        ></div>
        
      </div>
    </section>
  );
}

export default AboutMe;
