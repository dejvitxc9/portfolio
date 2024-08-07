import AboutMe from "../about-me/AboutMe";
import MyProject from "../my-projects/MyProjects";
import Contact from "../contact-me/Contact";

function Main({db}) {
  return (
    <>
      <AboutMe languageSkills={db.languageSkills}/>
      <MyProject
        sectionTitle={"Projekty: React JS"}
        itemList={db.reactJsProjects}
        pointer={"projects-react-js"}
        className={"projects-section-first"}
      />
      <MyProject
        sectionTitle={"Projekty: Android"}
        itemList={db.androidProjects}
        pointer={"projects-android"}
        className={"projects-section-first"}
      />
      <Contact />
    </>
  );
}
export default Main;