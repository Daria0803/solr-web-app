import React, { Component } from "react";
import "./App.css";
import Info from "./components/Info";
import Form from "./components/Form";
import Data from "./components/Data";


class App extends Component {

  state = {
    //url: undefined,
    //data: null,
    numFound: undefined,
    docs: [],
    error: undefined
  }

 /*
  constructor() {
    super();
    this.state = {
      data: null
    };
  }
*/
  /*
  componentDidMount =  (e) => {
    //const zip = this.props.zip;
    e.preventDefault();
    const keyword = e.target.elements.keyword.value;
    const URL = `http://localhost:8983/solr/test-wet/select?q=${keyword}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial`;
     fetch(URL)
        .then(res => res.json())
        .then(solrData => this.setState({ solrData }));
  }
  */

  gettingData = async (e) => {
    e.preventDefault();
    var keyword = e.target.elements.keyword.value;

    const URL = await
    fetch(`http://localhost:8983/solr/test-wet/select?q=${keyword}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial`);
    const data =  await URL.json();
    console.log(data);

    this.setState({
      numFound: data.response.numFound,
      docs: data.response.docs,
      error: ""
    });

  }

  render(){

    //const data = this.state.data;
    //if (!data) return <div>Loading</div>;

    return(
      <div>
        <Info />
        <Form solrMethod={this.gettingData} />
        <Data
          numFound={this.state.numFound}
          docs={this.state.docs}
        />
      </div>
    );
  }
}

export default App;
