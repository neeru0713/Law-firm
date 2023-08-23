// import logo from './logo.svg';
import './App.css';
import Introduction from './components/Introduction';
import LandingPage from './components/LandingPage';
import Choose from './components/Choose';
import GridPage from './components/GridPage';
import Client from './components/Client';
import Team from './components/Team';
import Faq from './components/Faq'

function App() {
  return (
    <div className="h-[100%] ">
      <LandingPage />
      <Introduction />
      <Choose />
      <GridPage/>
      <Client/>
      <Team />
      <Faq/>
    </div>
  );
}

export default App;
