import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Main from "./components/main/Main";
import db from "./database.json";
import ProjectDetails from "./components/project-details/ProjectDetails";

function App() {
  const [isThemeDark, setIsThemeDark] = useState(true);

  useEffect(() => {
    const checkDarkMode = () => {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setIsThemeDark(true);
        document.body.classList.remove("light-theme", "dark-theme");
        document.body.classList.add("dark-theme");
      } else {
        setIsThemeDark(false);
        document.body.classList.remove("light-theme", "dark-theme");
        document.body.classList.add("light-theme");
      }
    };

    checkDarkMode();

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkModeMediaQuery.addListener(checkDarkMode);

    return () => {
      darkModeMediaQuery.removeListener(checkDarkMode);
    };
  }, []);

  const handleThemeChange = () => {
    setIsThemeDark(!isThemeDark);
    const newTheme = isThemeDark ? "light-theme" : "dark-theme";
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(newTheme);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              handleThemeChange={handleThemeChange}
              isThemeDark={isThemeDark}
            />
          }
        >
          <Route index element={<Main db={db} />} />
          {db.reactJsProjects.map((appData, index) => {
            return (
              <Route
                key={index}
                path={appData.name}
                element={<ProjectDetails appData={appData} />}
              />
            );
          })}
          {db.androidProjects.map((appData, index) => {
            return (
              <Route
                key={index}
                path={appData.name}
                element={<ProjectDetails appData={appData} />}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
