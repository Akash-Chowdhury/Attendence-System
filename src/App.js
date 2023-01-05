import './App.css';
import Attendence from './Attendence'
import Header from './header'
import Footer from './footer'

import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  const name= "Attendence Sheet";
  return (<>
    <Router>
    <Header title={name} />
    <Attendence/>
    <Footer/>
    </Router>
  </>);
}

export default App;
