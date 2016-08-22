import React from 'react';


export default class CreateUserName extends React.Component {
  render(){
  return(
    <div
      className="section section-main deep-purple darken-2 create-username"
      id="index-banner">
      <div className="container">

        <h1 className="header center white-text">Honestly</h1>
        <div className="row center">
          <h5 className="header col s12 light white-text">
            Come on, now! Get after it!
          </h5>
        </div>
        <div className="row">
          <div className="input-field col s4 offset-s4">
            <input
              placeholder = "Email address"
              id="email"
              type="text"
              className="validate white-text"/>
            <label className="active"for="email">Email</label>
          </div>
        </div>
          <div className = "row">
          <div className="input-field col s4 offset-s4" >
              <input
                placeholder="Confirm email"
                id="confirm-email"
                type="text"
                className="validate white-text"/>
              <label className="active" for="disabled">
                Confirm email
              </label>
          </div>
          </div>
          <div className="row">
            <div className="col s4 offset-s4">
            <a href="/onboarding" className="btn btn-onboarding amber">
              Next...
            </a>
          </div>
          </div>

        </div>
      </div>



    );
  }
}
