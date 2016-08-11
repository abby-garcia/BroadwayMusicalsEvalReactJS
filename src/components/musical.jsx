import React from 'react';

class Musical extends React.Component {


    render() {

      return(
        <div className="musical">
        <p> {this.props.info.name} </p>
        <img src={this.props.info.picture}/>
        </div>
      )
    }





}


export default Musical;
