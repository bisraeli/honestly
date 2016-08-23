import React from 'react';
import CreateUserName from './create-username.jsx';
import Signup from './signup.jsx';

class HomeOrientation extends React.Component {
  componentWillMount() {
    $('.js-orientation-option').change((e)=> {
      let val = $(e.currentTarget).val();
      this.changeState('orientation', val);
    }).material_select()
    $('.js-gender-option').change((e)=> {
      let val = $(e.currentTarget).val();
      this.changeState('gender', val);
    }).material_select(this.changeState);
  }
  render() {
    
  }
}
= ({ changeHeader, changeState })=> (
  <div className="section section-main deep-purple darken-2" id="index-banner">
    <div className="container">

  <h1 className="header center white-text">Honestly</h1>
  <div className="row center">
    <h5 className="header col s12 light white-text">A Modern take on Dating</h5>
  </div>
  <div className = "row">
  <div className="col s12 m3 right-align">
    <span className="pre-dropdown-text white-text">I am a</span>
  </div>
  <div className="input-field col s12 m3 ">
   <select className="js-orientation-option dropdown-purple-white-big">
     <option value="straight" defaultValue>Straight</option>
     <option value="gay">Gay</option>
     <option value="bisexual">Bisexual</option>
   </select>
 </div>
 <div className="input-field col s12 m3 ">
   <select className="js-gender-option dropdown-purple-white-big">
     <option value="man" defaultValue>Man</option>
     <option value="woman">Woman</option>
     <option value="transgender">Transgender</option>
   </select>
  </div>
  <div className="col s12 m3">
    <a onClick={ ()=> { changeHeader('signup') } } className="btn-large special-button waves-effect waves-light amber">Continue</a>
  </div>

  </div>
  <br/><br/>
  </div>
</div>
);

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: 'Straight',
      gender: 'Male',
      header: 'orientation'
    };

    this.handleHeaderChange = this.handleHeaderChange.bind(this);
    this.changeState = this.changeState.bind(this);

  }
  componentDidMount() {

  }

  renderHeader() {
    let header = this.state.header;

    if (header === 'orientation') {
      return <HomeOrientation
        changeHeader={ this.handleHeaderChange }
        changeState={ this.changeState }
        />;
    } else if (header === 'signup') {
      return <Signup changeHeader={ this.handleHeaderChange }/>;
    } else if (header === 'createUsername') {
      return <CreateUserName changeHeader={ this.handleHeaderChange }/>;
    }
  }

  handleHeaderChange(header) {
    this.setState({ header: header });
  }

  changeState(key, val) {
    console.log(key, val);
    let newState = {};
    newState[key] = val;
    this.setState(newState);
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

                <h2 className="center amber-text"><i className="medium material-icons dp48">announcement</i></h2>
                <h5 className="center">Become a better dater</h5>

                <p className="light"> Receiving feedback from people you have been on dates with is the best way to bring out your best self on future dates! </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center amber-text"><i className = "medium material-icons dp48">supervisor_account</i></h2>
                <h5 className="center">Anonymous Feedback & Filtering</h5>

                <p className="light"> Getting feedback anonymously ensures that people feel comfortable giving candid commentary on how the date went, while our filtering process prevents non-constructive feedback from arriving at your mailbox. </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center amber-text"><i className="medium material-icons dp48">loyalty</i></h2>
                <h5 className="center">Rewards for Putting Yourself Out There </h5>

                <p className="light">Lookout for our special restaurant and bar promotions. The more you date the better your chances of winning free stuff to improve your dating life! </p>
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
