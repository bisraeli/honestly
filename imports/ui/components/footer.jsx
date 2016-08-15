import React from 'react';

export default class Footer extends React.Component {
    render(){
      return(

         <footer className="page-footer white">
           <div className="divider"></div>
            <div className="footer-copyright white">
              <div className="container grey-text">
              © 2014 Copyright Text
              <a className="grey-text right" href="#!">More Links</a>
              </div>
            </div>
          </footer>
            );
      }
};
