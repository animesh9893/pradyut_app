import './CSS/home.css';
import AboutBox from './AboutBox';


function Home() {
  return (
    <div className="Main">
      <div className="Home background-img">
        <div className="Main-Name gradient-text">PRADYUT FOUNDATION</div>
      </div>
      <div className="Home2">
        <div className="zindex">
          <AboutBox />
          <AboutBox />
        </div>
        <div className="AboutUs gradient-text">About Us</div>
      </div>
    </div>
  );
}

export default Home;
