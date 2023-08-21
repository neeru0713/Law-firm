// import logo from './logo.svg';
import './App.css';
import Introduction from './components/Introduction';
import LandingPage from './components/LandingPage';
import Choose from './components/Choose';
import GridPage from './components/GridPage';

function App() {
  return (
    <div className="h-[100%] ">
      <LandingPage />
      <Introduction />
      <Choose />
      <GridPage/>
      
    </div>
  );
}

export default App;
