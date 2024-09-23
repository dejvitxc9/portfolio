import "./AboutMe.css";
import { Tooltip, OverlayTrigger, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function AboutMe({ sectionTitle, languageSkills, textSecAboutMe }) {
  const skills = () => {
    return languageSkills.map((language, index) => {
      return (
        <Card className="m-3" key={index}>
          <Accordion.Item eventKey={index}>
            <Accordion.Header>
              <img
                src={`icons/${language.icon}`}
                alt={`ikona języka programowania - ${language.name}`}
                className="language-icon"
              />
              <p className="m-3 primary-font-color">{language.name}</p>
            </Accordion.Header>
            <Accordion.Body>
              {language.skills.map((skill, index2) => {
                return (
                  <p key={index2} className="m-1 primary-font-color">
                    {skill}
                  </p>
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Card>
      );
    });
  };

  const tooltip1 = (
    <Tooltip id="tooltip">
      <strong>INF.02</strong> {textSecAboutMe.inf02text}
    </Tooltip>
  );
  const tooltip2 = (
    <Tooltip id="tooltip">
      <strong>INF.03</strong> {textSecAboutMe.inf03text}
    </Tooltip>
  );
  const tooltip3 = (
    <Tooltip id="tooltip">
      <strong>INF.04</strong> {textSecAboutMe.inf04text}
    </Tooltip>
  );

  return (
    <div className="about-me" id="o-mnie">
      <h2 className="primary-font-color">{sectionTitle}</h2>
      <div className="cv-container">
        <div className="name-section">
          <h1 className="primary-font-color name-line">
            {textSecAboutMe.myNameis}
            <span className="accent-font-color no-wrap">Dawid Uniowski</span>
          </h1>

          <p className="primary-font-color">
            {textSecAboutMe.helloTxt1}
            <span className="accent-font-color">
              {textSecAboutMe.helloTxt2}
            </span>{" "}
            {textSecAboutMe.helloTxt3}
            <span className="accent-font-color">
              {textSecAboutMe.helloTxt4}
            </span>
            .
          </p>
          <p className="primary-font-color">
            {textSecAboutMe.helloTxt5}
            <span className="no-wrap primary-font-color">
              <OverlayTrigger placement="bottom" overlay={tooltip1}>
                <a>
                  <span className="qualification primary-font-color">
                    Inf.02
                  </span>
                </a>
              </OverlayTrigger>
              <span className="primary-font-color">, i </span>
              <OverlayTrigger placement="bottom" overlay={tooltip2}>
                <a>
                  <span className="qualification primary-font-color">
                    Inf.03
                  </span>
                </a>
              </OverlayTrigger>
              <span className="primary-font-color">, i </span>
              <OverlayTrigger placement="bottom" overlay={tooltip3}>
                <a>
                  <span className="qualification primary-font-color">
                    Inf.04
                  </span>
                </a>
              </OverlayTrigger>
              <span className="primary-font-color">.</span>
            </span>
          </p>
        </div>

        <div className="picture-section">
          <img
            src="/icons/dawiduniowskiportret.png"
            alt="Zdjęcie portretowe przedstawiające Dawida Uniowskiego"
            loading="lazy"
            className="profile-picture"
          />
        </div>

        <div className="language-section">
          <h2 className="my-4 primary-font-color">{textSecAboutMe.mySkills}:</h2>
          <Accordion defaultActiveKey="0">{skills()}</Accordion>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
