import React from 'react';

export default class Home extends React.Component {
  componentDidMount() {
    // run this only after the element exists in the html
     $('.js-gender-preference-option').material_select();

  }

  render() {
    return (
    <div className="home">
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <br/><br/>
          <h1 className="header center orange-text">Honestly</h1>
          <div className="row center">
            <h5 className="header col s12 light">A Modern take on Dating</h5>
          </div>

        <div className = "row">
          <div className="col s12 m3 offset-m3">I am a</div>
          <div className="input-field col s12 m3 ">
           <select className="js-gender-preference-option">
             <option value="" disabled defaultValue>Choose your option</option>
             <option value="1">Straight</option>
             <option value="2">Gay</option>
             <option value="3">Bisexual</option>
           </select>
           <label>Gender Preference</label>
         </div>
         <div className="input-field col s12 m3 ">
          <select className="js-gender-preference-option">
            <option value="" disabled defaultValue>Choose your option</option>
            <option value="1">Man</option>
            <option value="2">Woman</option>
            <option value="3">Transgender</option>
          </select>
          <label>Gender</label>
        </div>
        <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light purple">Continue</a>
        </div>
        <br/><br/>

        </div>
      </div>

      <div className="container">
        <div className="section">


          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text"><i className="material-icons">flash_on</i></h2>
                <h5 className="center">Become a better dater</h5>

                <p className="light"> Receiving feedback from people you have been on dates with is the best way to bring out your best self on future dates! </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text"><i className="material-icons">group</i></h2>
                <h5 className="center">Anonymous Feedback & Filtering</h5>

                <p className="light"> Getting feedback anonymously ensures that people feel comfortable giving candid commentary on how the date went, while our filtering process prevents non-constructive feedback from arriving at your mailbox. </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text"><i className="material-icons">settings</i></h2>
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
