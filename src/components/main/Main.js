import AboutMe from "../about-me/AboutMe";
import MyProject from "../my-projects/MyProjects";
import Contact from "../contact-me/Contact";

function Main({ db }) {
  return (
    <>
      <AboutMe
        sectionTitle={db.textSections.aboutMeText}
        languageSkills={db.languageSkills}
        textSecAboutMe={db.textSecAboutMe}
      />
      <MyProject
        sectionTitle={db.textSections.reactProjectsText}
        itemList={db.reactJsProjects}
        pointer={"projects-react-js"}
        className={"projects-section-first"}
      />
      <MyProject
        sectionTitle={db.textSections.androidProjectsText}
        itemList={db.androidProjects}
        pointer={"projects-android"}
        className={"projects-section-first"}
      />
      <Contact
        sectionTitle={db.textSections.contactText}
        textSecContact={db.textSecContact}
      />
    </>
  );
}
export default Main;
