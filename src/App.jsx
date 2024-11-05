import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Schedule from "./components/Schedule";
import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  return (
    <Router>
      <Header />
      <Banner />
      <About />
      <Schedule />
      <RegistrationForm />
    </Router>
  );
};

export default App;
