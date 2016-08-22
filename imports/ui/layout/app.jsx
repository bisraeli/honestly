import React from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx'
import CreateAccountModal from '../components/create-account-modal.jsx';


export default class App extends React.Component {
  render () {
    return (

        <div className="push-wrap">
          <div>
            <Navbar/>
            { this.props.main }
            <CreateAccountModal/>
            <Footer/>
          </div>
        </div>


    );
  }
}
