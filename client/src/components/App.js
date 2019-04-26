import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Landing from "./Landing";
import Header from "./Header";
import * as actions from "../actions";
import { connect } from "react-redux";
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <Router>
          <Header />
          <Switch>
            <Route path={"/"} exact component={Landing} />
            <Route path={"/surveys"} exact component={Dashboard} />
            <Route path={"/surveys/new"} component={SurveyNew} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
