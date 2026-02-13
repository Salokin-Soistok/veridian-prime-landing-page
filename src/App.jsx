import { useState } from "react";
import "./App.css";
import { Lock, Crosshair, Brain, Users, CheckCircle, Check, X } from "lucide-react";
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
     <div className="hero">
        <img src={logo} className="veridian-logo" alt="Logo" />
        <div className="header">
           <h1>
             Your data shouldn't die when you change tools.
            </h1>
        </div>
      </div>

      <div className="hero-section">
        <p className="company-introduction">
          Veridian Prime is a neutral, privacy-first data environment that lets organizations 
          store, structure, and export their operational data in a way that remains usable, 
          auditable, and migratable -- regardless of the software they use today or tomorrow.
        </p>
       <button className="join-button" onClick={() => window.open("https://tally.so/r/wAogWo", "_blank")} type="submit">Join Early Access</button>
      </div>

      <div className="main-section">
        <p className="customer-hook">
          <strong>The problem no SaaS wants to talk about</strong><br /><br />
        </p>
        <p>
          Most tools are built for speed, not longevity.<br /><br />
          The pain only <b>appears years later</b> -- when you try to leave.<br /><br />
        </p>
        <div className="pain-container">
          <ul className="pain-list">
  <li>
    <CheckCircle className="pain-icon" />
    <span>
      Exports lose structure, relationships, and context
    </span>
  </li>

  <li>
    <CheckCircle className="pain-icon" />
    <span>
      Data only makes sense <b>inside the original platform</b>
    </span>
  </li>

  <li>
    <CheckCircle className="pain-icon" />
    <span>
      Migrations require months, consultants, and internal politics
    </span>
  </li>

  <li>
    <CheckCircle className="pain-icon" />
    <span>
      <b>Compliance</b> and chain-of-custody break after tool changes
    </span>
  </li>

  <li>
    <CheckCircle className="pain-icon" />
    <span>
      Users resist <b>retraining</b> more than <b>technical</b> change
    </span>
  </li>

  <li>
    <CheckCircle className="pain-icon" />
    <span>
      Years of data become <b>'technically present'</b>, practically useless
    </span>
  </li>
</ul>
        </div>

        <div className="email-field">
          <form onSubmit={handleClick} className="signup">

          </form>

        </div>

        <div className="founder-introduction">
          <p>
            <b>A neutral data layer</b> between you and your tools<br /><br />
          </p>
          <p>
            Veridian Prime acts as a <b>sovereign data environment</b> where you and/or your 
            <b>organization's core</b> information live independently of any single SaaS, 
            platform or vendor.<br /><br />
            Tools come and go. <b>Your data stays protected, structured, and usable.</b>
          </p>
        </div>

        <section className="audience-fit">
  <div className="audience-fit__container">

    {/* LEFT COLUMN */}
    <div className="audience-fit__column">
      <h2>
        Built for <b>teams</b> that think long-term
      </h2>

      <ul>
        <li>
          <Check className="icon icon--positive" />
          <span>
            You run a <b>small-mid</b> organization with long lived data
          </span>
        </li>

        <li>
          <Check className="icon icon--positive" />
          <span>
            You've experienced <b>painful migrations</b> or failed exports
          </span>
        </li>

        <li>
          <Check className="icon icon--positive" />
          <span>
            You operate in <b>legal, compliance,</b> or regulated environments
          </span>
        </li>

        <li>
          <Check className="icon icon--positive" />
          <span>
            You <b>self-host</b> or <b>care deeply</b> about data portability
          </span>
        </li>
      </ul>
    </div>


    <div className="audience-fit__divider" />


    {/* RIGHT COLUMN */}
    <div className="audience-fit__column">
      <h2>This is not for:</h2>

      <ul>
        <li>
          <X className="icon icon--negative" />
          <span>
            Casual note-taking or personal journaling
          </span>
        </li>

        <li>
          <X className="icon icon--negative" />
          <span>
            Teams with disposable or short-term data
          </span>
        </li>

        <li>
          <X className="icon icon--negative" />
          <span>
            People who don't care about exporting their information
          </span>
        </li>

        <li>
          <X className="icon icon--negative" />
          <span>
            Productivity tourists looking for another "Notion alternative"
          </span>
        </li>
      </ul>
    </div>

  </div>
</section>


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