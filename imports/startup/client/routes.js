import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import App from '../../ui/layout/app.jsx';
import Home from '../../ui/pages/home.jsx';
import SignUp from '../../ui/pages/signup.jsx'
import CreateUserName from '../../ui/pages/create-username.jsx'

// FlowRouter.route('/signup', {
//   name: 'signup',
//   action() {
//     mount(App, {
//       main: <SignUp/>,
//     });
//   }
// });

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(App, {
      main: <Home/>,
    });
  }
});

// FlowRouter.route('/signup/create-username',{
//   name: 'createusername',
//   action(){
//     mount(App, {
//       main: <CreateUserName/>
//     });
//   }
// });
