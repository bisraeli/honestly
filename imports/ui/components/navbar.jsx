import React from 'react';



export default class Navbar extends React.Component {
    myFirstFunction(){
      $('#modal1').openModal();
    }

    render(){
      return (
        <nav className= "navbar deep-purple darken-2">
          <div className="nav-wrapper container">


            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a a onClick={ this.myFirstFunction } className="waves-effect btn-flat white-text white-border">Sign in</a></li>
            </ul>
          </div>
        </nav>
      );
   }
}
