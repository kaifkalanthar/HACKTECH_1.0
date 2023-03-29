import AboutPage from "./component/aboutPage";
import HomePage from "./component/homePage";
import NavBar from "./component/navBar";
import PrizePage from "./component/prizePage";
import ProbStat from "./component/problemStatement";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <AboutPage />
      <ProbStat />
      <PrizePage />
    </>
  );
}

export default App;
