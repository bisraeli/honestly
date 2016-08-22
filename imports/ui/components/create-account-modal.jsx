import React from 'react';

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
          <button className="btn btn-sign-in amber waves-effect">
            Let's go
          </button>
        </div>
        <div className="col s12">
          <a className= "grey-text" href="#">Forgot your password?</a>
          <div className="horizontal-divider">OR</div>
          <button className="btn facebook-connect">Sign in</button>
        </div>
      </div>
    </div>
  </div>
);

export default CreateAccountModal;
