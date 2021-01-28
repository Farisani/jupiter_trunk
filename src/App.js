import React, { Component } from 'react';
import DataSourcesTable from './components/DataSourcesTable.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataSourcesPage from './components/DataSourcespage';
import NotFoundPage from './components/NotFoundPage'
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      DataSourcess: []
    };
  }
  componentDidMount() {
    fetch('https://api.staging.kpilens.com/graphql')
    .then(res => res.json())
    .then(json => json.DataSources)
    .then(DataSources => this.setState({ 'DataSources': DataSources }));
  }
  render() {
    return (
      <div className="App">
         <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="./">
          
          </a>
        </nav>
        <DataSourcesTable DataSources={ this.state.DataSources } />
      </div>
    );
  }
}


export default App;