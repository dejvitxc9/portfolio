import "./MyProjects.css";
import Tile from "../tile/Tile";

function MyProject({ sectionTitle, itemList, pointer }) {
  return (
    <div className="projects-section anim-apear" id={pointer}>
      <h2 className="primary-font-color">{sectionTitle}</h2>
      <div className="grid-projects">
        {itemList.map((item, index) => {
          return (
            <Tile
              key={index}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
}
export default MyProject;
