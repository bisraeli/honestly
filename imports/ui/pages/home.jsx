import React from 'react';
import CreateUserName from './create-username.jsx';
import Signup from './signup.jsx';
import HomeOrientation from '../components/home-orientation.jsx';
import { Accounts } from 'meteor/accounts-base';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: 'Straight',
      gender: 'Male',
      header: 'orientation',
      birthMonth: null,
      birthDay: null,
      birthYear: null,
      zipcode: null,
      email: null,
      confirmEmail: null,
      username: null,
      password: null,
    };

    this.handleHeaderChange = this.handleHeaderChange.bind(this);
    this.changeState = this.changeState.bind(this);
    this.handleUserSignup = this.handleUserSignup.bind(this);
  }

  renderHeader() {
    let header = this.state.header;

    if (header === 'orientation') {
      return <HomeOrientation
        changeHeader={ this.handleHeaderChange }
        changeState={ this.changeState }
        />;
    } else if (header === 'signup') {
      return <Signup
        changeHeader={ this.handleHeaderChange }
        changeState={ this.changeState }
        />;
    } else if (header === 'createUsername') {
      return <CreateUserName
        changeHeader={ this.handleHeaderChange }
        changeState={ this.changeState }
        handleSubmit={ this.handleUserSignup }
        />;
    }
  }

  handleHeaderChange(header) {
    this.setState({ header: header });
  }

  changeState(key, eventOrValue) {
    // in case we get an event instead of value
    if (typeof eventOrValue === 'object') {
      eventOrValue = eventOrValue.target.value;
    }

    let newState = {};
    newState[key] = eventOrValue;
    console.log(newState);
    this.setState(newState);
  }

  handleUserSignup(e) {
    e.preventDefault();
    const formData = this.state;
    console.log(formData);
    // we can sign up the user here finally! :)
    // Accounts.createUser({
    //   username: formData.username,
    //   email: formData.email,
    //   password: formData.password,
    //   profile: {
    //     birthday: `${formData.birthdayMonth}`
    //   }
    // });
  }

  render() {
    return (
    <div className="home">
      { this.renderHeader() }

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center amber-text">
                  <i className="medium material-icons dp48">announcement</i>
                </h2>
                <h5 className="center">Become a better dater</h5>
                <p className="light"> Receiving feedback from people you have
                  been on dates with is the best way to bring out your best self
                  on future dates!
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center amber-text">
                  <i className = "medium material-icons dp48">supervisor_account</i>
                </h2>
                <h5 className="center">Anonymous Feedback & Filtering</h5>
                <p className="light"> Getting feedback anonymously ensures that
                  people feel comfortable giving candid commentary on how the
                  date went, while our filtering process prevents non-constructive
                  feedback from arriving at your mailbox.
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center amber-text">
                  <i className="medium material-icons dp48">loyalty</i>
                </h2>
                <h5 className="center">Rewards for Putting Yourself Out There </h5>
                <p className="light">Lookout for our special restaurant and bar
                  promotions. The more you date the better your chances of
                  winning free stuff to improve your dating life!
                </p>
              </div>
            </div>
          </div>

        </div>
      <br/><br/>

        <div className="section">

        </div>
      </div>
    </div>

    );
  }
}
