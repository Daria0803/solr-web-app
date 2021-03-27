import React from "react";

class Data extends React.Component{
  render(){
    return(
      <div>
      { this.props.numFound &&
        <div>
          <p>Found: {this.props.numFound} documents</p>
          {this.props.docs.map(x => <div>{x.url}</div>)}
        </div>
      }
      </div>
    );
  }
}

export default Data;
