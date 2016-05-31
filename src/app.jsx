
import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './placeholder/avatar/avatar.jsx'

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <div className="message">
      <div className="left">
        <Avatar />

        <div className="social">
          <a href="https://github.com/Istar-Eldritch"><i className="fi-social-github"></i></a>
          <a href="https://twitter.com/IstarEldritch"><i className="fi-social-twitter"></i></a>
          <a href="https://www.linkedin.com/in/rubenpaz"><i className="fi-social-linkedin"></i></a>
        </div>
      </div>

      <div className="content">
        <h1>Hi!</h1>
        <p className="first"> Unfortunately this website is still empty.
          That does not mean is going to be like that forever, or at least that is what I want to believe.
          **Spoiler Alert** I plan to use it as a complacency temple.</p>
        <h2>About me</h2>
        <p>I am a 25 years old Spaniard and OSS advocate with interest for a wide range of topics.</p>
        <p>My main interest is in CS, with focus now on the underlying maths that support it. In this sense I am particulary interested
        in functional and computational methodologies.</p>
        <p> I had the chance to work with many languages, from Java and Scala to JS with Node. Mainly for web development.
        Nevertheless my favourtive languages are the ones close to the Haskell family, like Haskell itself, Purescript and Elm.</p>
      </div>
    </div>,
    document.getElementById('app')
  );
}, false);
