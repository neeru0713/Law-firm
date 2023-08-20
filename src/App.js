// import logo from './logo.svg';
import './App.css';
import Introduction from './components/Introduction';
import LandingPage from './components/LandingPage';
import Choose from './components/Choose';

function App() {
  return (
    <div className="h-[100%] ">
      <LandingPage />
      <Introduction />
      <Choose />
      
    </div>
  );
}

export default App;
