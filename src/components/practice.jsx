import React from 'react';
import {connect} from 'react-redux'; // use {} to filter the module you need
import {fetchOneMusical} from '../actions/index'; // you must export the function to then import here

class Practice extends React.Component {
  componentWillMount(){
    this.props.fetchOneMusical(); // we're calling the action here
  }


    render() {

      return(
        <div>
          <h1> Practice Code! </h1>
        </div>
      )
    }
}



function mapStateToProps(state){ // map state to this.props
  return{
      musical:state.musicals //conncected  to the componenet by the connect down in line 57
  }
}

export default connect(mapStateToProps,{fetchOneMusical})(Practice); // reducers is first, actions is second, MusicalContainers is where it is happening
//now we can use the action with "this.props.fetchMusicals", we will have the action now
//if there are no actions or reducers, replace either one with null
