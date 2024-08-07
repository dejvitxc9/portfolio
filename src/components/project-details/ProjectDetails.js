import "./ProjectDetails.css";
import { FaGithubSquare } from "react-icons/fa";

function ProjectDetails({ appData }) {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
  const tryMyApp = () => {
    window.open(appData.simulationLink, "_blank");
  };
  const gitHubApp = () => {
    window.open(appData.gitHubLink, "_blank");
  };
  return (
    <div className="project-details">
      <h1 className="primary-font-color">{appData.name}</h1>
      <div className="details-container">
        <div className="details-description">
          {appData.description.map((description, index) => {
            return (
              <p key={index} className="primary-font-color text-1">
                {description}
              </p>
            );
          })}
          {appData.simulationLink ? (
            <button
              className="btn btn-info primary-font-color"
              onClick={tryMyApp}
            >{`Wypróbuj aplikację ${appData.name}`}</button>
          ) : (
            <></>
          )}
          <br />
          {appData.gitHubLink ? (
            <button
              className="btn btn-info primary-font-color"
              onClick={gitHubApp}
            >
              <FaGithubSquare size={30} />
              {`Repozytorium ${appData.name} w serwisie GitHub`}
            </button>
          ) : (
            <></>
          )}
        </div>
        <div className="details-picture-container">
          <a href={`pictures/${appData.imageLink}`} className="fullImage">
            <img
              src={`pictures/${appData.imageLink}`}
              alt={`zdjęcie przedstawiające projekt o naziwe ${appData.imageLink}`}
              className="details-picture"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectDetails;
