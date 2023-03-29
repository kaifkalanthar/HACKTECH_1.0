import AboutPage from "./component/aboutPage";
import HomePage from "./component/homePage";
import NavBar from "./component/navBar";
import PrizePage from "./component/prizePage";
import ProbStat from "./component/problemStatement";
import Sponsers from "./component/sponsers";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <AboutPage />
      <ProbStat />
      <PrizePage />
      <Sponsers/>
    </>
  );
}

export default App;
