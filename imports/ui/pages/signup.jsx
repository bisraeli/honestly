import React from 'react';
import CountriesSelect from '../components/countries-select.jsx'

export default class SignUp extends React.Component {
  componentDidMount() {
    // this function will run when the dom is ready (elements are visible);
    // modal
    // select
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
              <a className="waves-effect waves-light btn facebook-connect">
                Signup with Facebook
              </a>
              <div className="horizontal-divider white-text">OR</div>
            </div>

           <form className="col s6 offset-s3">
            <div className="row">
             <div className="input-field col s4">
              <input placeholder= "MM" id="birthmonth" type="text" className="validate white-text" maxLength="2" required="true"/>
              <label className="active" for="month">Birth Month</label>
            </div>
            <div className="input-field col s4">
              <input placeholder = "DD" id="day" type="text" className="validate white-text" maxLength="2" required="true"/>
              <label className="active" for="day active">Day</label>
            </div>
            <div className="input-field col s4">
              <input placeholder = "YYYY" id="year" type="text" className="validate white-text" maxLength="4"/>
              <label className="active" for="year">Year</label>
            </div>
           </div>

        <div className="row">
          <div className="input-field col s6">
            <CountriesSelect />
          </div>
          <div className="input-field col s6">
            <input placeholder = "Zipcode" id="zipcode" type="text" className="validate"/>
            <label className= "active" for="zipcode">Zipcode</label>
          </div>
          <div className="input-field col s6">
            <input placeholder = "Email address" id="email" type="text" className="validate white-text"/>
            <label className="active"for="email">Email</label>
          </div>
          <div className="input-field col s6">
            <input placeholder="Confirm email" id="confirm-email" type="text" className="validate white-text"/>
            <label className="active" for="disabled">Confirm email</label>
          </div>

        </div>
      </form>

      <div className="col s6 offset-s3 center">
        <a href="/signup/create-username" className="waves-effect waves-light btn facebook-connect">
          Next...
        </a>
      </div>


    </div>
  </div>
  </div>



      )
      }
    }
