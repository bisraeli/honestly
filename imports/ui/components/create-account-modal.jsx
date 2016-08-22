import React from 'react';

const loginWithFacebook = ()=> {
  Meteor.loginWithFacebook();
};

const CreateAccountModal = ()=> (
  <div id="modal1" className="modal mini-modal">
    <div className="modal-content">
      <div className="row">
        <div className="col s12">
          <h2 className="title">Sign in</h2>
        </div>
        <div className="input-field purple-color-input col s12">
          <input
            placeholder="Email address"
            id="email"
            type="text"
            className="validate white-text"/>
          <label className="active"for="email">Email</label>
        </div>
        <div className="input-field purple-color-input col s12">
          <input placeholder = "Password" id="password" type="text"
            className="validate white-text"/>
          <label className="active"for="password">Password</label>
        </div>
        <div className="col s12">
          <button className="btn-large-modal btn amber waves-effect">
            Let's go
          </button>
        </div>
        <div className="col s12">
          <a className= "grey-text" href="#">Forgot your password?</a>
          <div className="horizontal-divider">OR</div>
          <button onClick={ loginWithFacebook } className="btn-large facebook-connect">
            <i className="left fa fa-facebook" aria-hidden="true"></i>
            Sign in
          </button>
        </div>
      </div>
    </div>
  </div>
);
//es6 function declration


export default CreateAccountModal;
