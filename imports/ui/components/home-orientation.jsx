import React from 'react';

export default class HomeOrientation extends React.Component {
  componentDidMount() {
    $('.js-orientation-option').change((e)=> {
      let val = $(e.currentTarget).val();
      this.props.changeState('orientation', val);
    }).material_select()
    $('.js-gender-option').change((e)=> {
      let val = $(e.currentTarget).val();
      this.props.changeState('gender', val);
    }).material_select(this.changeState);
  }
  render() {
    let { changeHeader } = this.props;
    return (
      <div className="section section-main deep-purple darken-2" id="index-banner">
        <div className="container">
          <h1 className="header center white-text">Honestly</h1>
          <div className="row center">
            <h5 className="header col s12 light white-text">A Modern take on Dating</h5>
          </div>
          <div className="row">
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
              <a
                onClick={ ()=> { changeHeader('signup') } }
                className="btn-large special-button waves-effect waves-light amber">
                Continue
              </a>
            </div>
          </div>
          <br/><br/>
          </div>
      </div>
    );
  }
}
