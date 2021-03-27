import React from "react";

class Form extends React.Component{
  render(){
    return(
      <form onSubmit={this.props.solrMethod}>
        <input type="text" name="keyword" placeholder="Search"/>
        <button>Get data</button>
      </form>
    );
  }
}

export default Form;
