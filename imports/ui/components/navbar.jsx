import React from 'react';



export default class Navbar extends React.Component {
    render(){
      return (
        <nav className= "navbar deep-purple darken-2">
          <div className="nav-wrapper container">


            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a className="waves-effect btn-flat white-text white-border">Sign in</a></li>
            </ul>
          </div>
        </nav>
      );
   }
}
