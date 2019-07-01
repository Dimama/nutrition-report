import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";


import AddForm from "./components/add-form";
import ReportForm from "./components/report-form";

class App extends Component {
  render() {
    return (
        <Router>
          <Route exact path="/" component={ReportForm}/>
          <Route path="/add" component={AddForm}/>
        </Router>
    );
  }
}

export default App;
