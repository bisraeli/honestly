import React from 'react';

export default class CreateUserName extends React.Component {
  render() {
    let { changeState } = this.props;

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
          <form onSubmit={ (e)=> this.props.handleSubmit(e) }>
            <div className="row">
              <div className="amber-color-input input-field col s4 offset-s4">
                <input
                  onChange={ (e)=> changeState('username', e) }
                  placeholder = "Create Username"
                  id="create-username"
                  type="text"
                  className="validate white-text"/>
                <label className="active"for="create-username">Username</label>
              </div>
            </div>
              <div className = "row">
                <div className="amber-color-input input-field col s4 offset-s4" >
                  <input
                    onChange={ (e)=> changeState('password', e) }
                    placeholder="Create Password"
                    id="create-password"
                    type="password"
                    className="validate white-text"/>
                  <label className="active" for="disabled">
                    Password
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col s4 offset-s4">
                  <button type="submit" className="btn-large btn-onboarding amber">
                    Next...
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
  }
}
