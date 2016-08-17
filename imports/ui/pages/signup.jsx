import React from 'react';
import CountriesSelect from '../components/countries-select.jsx'

export default class SignUp extends React.Component {
    render(){
      return (
        <div className="section section-main deep-purple darken-2" id="index-banner">
          <div className="container">
            <br/><br/>
            <h1 className="header center white-text">Honestly</h1>
            <div className="row center">
              <h5 className="header col s12 light white-text">A Modern take on Dating</h5>
            </div>


          <br/><br/>
          </div>

          <div className="row">
      <form className="col s6 offset-s3">
        <div className="row">
          <div className="input-field col s4">

            <input placeholder= "MM" id="birthmonth" type="text" className="validate" maxLength="2" required="true"/>
            <label className="active" for="month">Birth Month</label>
          </div>
          <div className="input-field col s4">
            <input placeholder = "DD" id="day" type="text" className="validate" maxLength="2" required="true"/>
            <label className="active" for="day active">Day</label>
          </div>
          <div className="input-field col s4">
            <input placeholder = "YYYY" id="year" type="text" className="validate" maxLength="4"/>
            <label className="active" for="year">Year</label>
          </div>

        </div>




        <div className="row">
          <div className="input-field col s6">
            <CountriesSelect />
          </div>
          <div className="input-field col s6">
            <input id="zipcode" type="text" className="validate"/>
            <label for="zipcode">Zipcode</label>
          </div>
          <div className="input-field col s6">
            <input id="email" type="text" className="validate"/>
            <label for="email">Email</label>
          </div>
          <div className="input-field col s6">
            <input placeholder="Confirm email" id="confirm-email" type="text" className="validate"/>
            <label className="active" for="disabled">Confirm email</label>
          </div>
        </div>

      </form>
    </div>
        </div>



      )
      }
    }
