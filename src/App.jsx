import { useState } from "react";
import "./App.css";
import { Lock, Crosshair, Brain, Users } from "lucide-react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from "./assets/logosecond.png";

function App() {
  const [email, setEMail] = useState("");

  function handleClick(e) {
    e.preventDefault();
    console.log("Email: ", email);
  }

  return (
    <>
      <img src={logo} alt="Logo" />
      <div className="header">
        <h1>
          Work Your Way <br />
          Own Your Space <br />
          Stay In Control
        </h1>
      </div>

      <div className="hero-section">
        <p className="company-introduction">
          Veridian Prime is a Privacy-First focused workspace designed to help you think clearly, stay organised, and own your data -- without distractions
        </p>
        <button className="waitlist-button" onClick={() => {
          const section = document.querySelector(".email-field");
          section?.scrollIntoView({behavior: "smooth"});
        }} type="button">Get Early Access</button>
      </div>

      <div className="main-section">
        <p className="customer-hook">
          Veridian Prime is a private workspace where your notes, projects and ideas stay yours, simple, secure, and distraction-free.
        </p>

        <div className="icons-description">
          <div className="text-center">
            <Lock className="mx-auto h-10 w-10" />
            <p className="mt-2 font-semibold">
              Private By
              <br />
              Design
            </p>
          </div>

          <div className="text-center">
            <Crosshair className="mx-auto h-10 w-10" />
            <p className="mt-2 font-semibold">
              You Own
              <br />
              Your Data
            </p>
          </div>

          <div className="text-center">
            <Brain className="mx-auto h-10 w-10" />
            <p className="mt-2 font-semibold">
              Helpful AI,
              <br />
              Respecting Your Privacy
            </p>
          </div>

          <div className="text-center">
            <Users className="mx-auto h-10 w-10" />
            <p className="mt-2 font-semibold">
              Simple Collaboration
              <br />
              (when you need it)
            </p>
          </div>
        </div>

        <div className="email-field">
          <form onSubmit={handleClick} className="signup">
  <input
    id="email"
    type="email"
    value={email}
    onChange={(e) => setEMail(e.target.value)}
    required 
    placeholder="Enter your email"
  />
  <button className="join-button" onClick={() => window.open("https://tally.so/r/wAogWo", "_blank")} type="submit">Join Early Access</button>
</form>

        </div>

        <div className="founder-introduction">
          <p>
            Hi, I'm Nikolas. I'm building Veridian Prime because I believe productivity should
            feel calm, private, and intentional. If owning your data and working without
            distractions matters to you, I'd love to have you join early
          </p>
        </div>

        <footer>
          <div className="contacts">
            <a href="#" className="icon">
              <FaInstagram />
            </a>
            <a href="#" className="icon">
              <FaFacebook />
            </a>
            <a href="#" className="icon">
              <FaTwitter />
            </a>
            <a href="#" className="icon">
              <FaLinkedin />
            </a>
            <a href="mailto:info@anatolia.com.au" className="icon">
              <SiGmail />
            </a>
            <a href="#" className="icon">
              <FaGithub />
            </a>
          </div>

          <p className="final-sending">Built with integrity. Powered by Privacy.</p>
        </footer>
      </div>
    </>
  );
}

export default App;