import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Navbar and Hero Section */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* About Section */}
        <About />

        {/* Experience Section */}
        <Experience />

        {/* Tech Section */}
        <Tech />

        {/* Works Section with a higher z-index */}
        <div className="relative z-10">
          <Works />
        </div>

        {/* Feedbacks Section */}
        <Feedbacks />

        {/* Contact and StarsCanvas Section */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
