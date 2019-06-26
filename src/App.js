import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './redux/store';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginContainer from './app/containers/loginContainer.jsx';
import SignupContainer from './app/containers/signupContainer.jsx';
import ViewReportComponent from './app/components/viewReportComponent.jsx';

class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <ToastContainer />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginContainer} />
            <Route path="/signup" component={SignupContainer} />
            <Route path="/viewreports" component={ViewReportComponent} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
