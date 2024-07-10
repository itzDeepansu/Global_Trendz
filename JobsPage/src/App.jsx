import "./App.css";
import "./helper.css";
import Navbar from "./components/Navbar/Navbar";
import TitleSection from "./components/TitleSection/TitleSection";
import OverViewSection from "./components/OverViewSection/OverViewSection";
import CategoryArea from "./components/CategoryArea/CategoryArea";
import EmployerZone from "./components/EmployerZone/EmployerZone";
import JobSeekerZone from "./components/JobSeekerZone/JobSeekerZone";
import FeaturedJobsArea from "./components/FeaturedJobsArea/FeaturedJobsArea";
import SearchBar from "./components/SearchBar/SearchBar";
import FooterBox from "./components/FooterBox/FooterBox";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="overflowhidden col flexgap50">
      <Navbar className="sticky"/>
      <TitleSection />
      <SearchBar />
      <OverViewSection />
      <CategoryArea />
      <FeaturedJobsArea />
      <EmployerZone />
      <JobSeekerZone />
      <FooterBox />
      <Footer />
    </div>
  );
}

export default App;
