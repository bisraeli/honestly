import React from 'react';
import CountriesSelect from '../components/countries-select.jsx'

export default class SignUp extends React.Component {

  handleFacebookSignup() {
    // sign up here with fb
    Meteor.loginWithFacebook();
  }

  handleSubmit(e) {
    // this cancels the browser default form submit behaivor so we can handle it
    // the way we want
    e.preventDefault();
    console.log('form submit');

  }

    render(){
      return (
        <div className="section section-main deep-purple darken-2 signup" id="index-banner">
          <div className="container">
            <h1 className="header center white-text">Honestly</h1>
            <div className="row center">
              <h5 className="header col s12 light white-text">You're almost ready to get out there! </h5>
            </div>

          <div className="row">
            <div className="col s6 offset-s3 center">
              <a onClick={ this.handleFacebookSignup } className="waves-effect waves-light btn facebook-connect">
                <i className="left fa fa-facebook" aria-hidden="true"></i>
                Signup with Facebook
              </a>
              <div className="horizontal-divider white-text">OR</div>
            </div>

           <form onSubmit={ this.handleSubmit } className="col s6 offset-s3">
            <div className="row">
             <div className="amber-color-input input-field col s4">
              <input placeholder= "MM" id="birthmonth" type="text" className="validate white-text" maxLength="2" required="true"/>
              <label className="active" for="month">Birth Month</label>
            </div>
            <div className="amber-color-input input-field col s4">
              <input placeholder = "DD" id="day" type="text" className="validate white-text" maxLength="2" required="true"/>
              <label className="active" for="day active">Day</label>
            </div>
            <div className="amber-color-input input-field col s4">
              <input placeholder = "YYYY" id="year" type="text" className="validate white-text" maxLength="4" required="true"/>
              <label className="active" for="year">Year</label>
            </div>
           </div>

        <div className="row">
          <div className="amber-color-input input-field col s6">
            <CountriesSelect />
          </div>
          <div className="amber-color-input input-field col s6">
            <input placeholder = "Zipcode" id="zipcode" type="text" className="validate white-text" required="true"/>
            <label className= "active" for="zipcode">Zipcode</label>
          </div>
          <div className="amber-color-input input-field col s6">
            <input autocomplete="off" placeholder = "Email address" id="email" type="email" className="validate white-text" required="true"/>
            <label className="active"for="email">Email</label>
          </div>
          <div className="amber-color-input input-field col s6">
            <input autocomplete="off" placeholder="Confirm email" id="confirm-email" type="email" className="validate white-text" required="true"/>
            <label className="active" for="disabled">Confirm email</label>
          </div>

        </div>
        <div className="col s6 offset-s3 center">
          <button
            type="submit"
            className="waves-effect amber waves-light btn facebook-connect">
            Next...
          </button>
        </div>
      </form>




    </div>
  </div>
  </div>



      )
      }
    }
