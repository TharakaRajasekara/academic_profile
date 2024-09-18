import React from 'react';
import './ProfessorProfile.css';

const ProfessorProfile = () => {
  return (
    <div className="profile-container">
      <h1>Prof. Munidasa P. Ranaweera</h1>
      
      {/* Add the image */}
      <img
        src={`${process.env.PUBLIC_URL}/professor.jpg`}
        alt="Prof. Munidasa P. Ranaweera"
        className="profile-image"
      />
      
      <section>
        <h2>Education</h2>
        <p>
          Munidasa P. Ranaweera received his primary and secondary education at Ananda College, Colombo. He entered the University of Ceylon in 1961, graduating in 1965 with first-class honors in Civil Engineering. In 1966, he pursued a PhD in Structural Engineering at Churchill College, Cambridge, researching finite element methods for limit analysis.
        </p>
      </section>

      <section>
        <h2>Academic Career</h2>
        <p>
          After obtaining his PhD, he returned to Sri Lanka in 1969 to serve as a lecturer in Civil Engineering at the University of Peradeniya. Promoted to Senior Lecturer in 1975, he took a sabbatical in 1976 to serve as a Research Fellow at the University of Leicester, later becoming a Visiting Assistant Professor at the University of Illinois at Urbana-Champaign.
        </p>
        <p>
          Upon his return to Sri Lanka in 1981, he became a Senior Lecturer and later, in 1984, a Professor of Civil Engineering at the University of Peradeniya. He served as the Head of Civil Engineering from 1987, and as the Dean of the Faculty of Engineering from 1989 to 1994. He retired in 2008, earning the title of Emeritus Professor.
        </p>
      </section>

      <section>
        <h2>LinkedIn Profile</h2>
        {/* Add a link to his LinkedIn profile */}
        <a
          href="https://lk.linkedin.com/in/munidasapranaweera"  // Updated LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-button"
        >
          Connect with Prof. Ranaweera on LinkedIn
        </a>
      </section>
    </div>
  );
};

export default ProfessorProfile;
