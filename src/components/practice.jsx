import React from 'react';
import {connect} from 'react-redux'; // use {} to filter the module you need
import {fetchOneMusical} from '../actions/index'; // you must export the function to then import here

class Musical extends React.Component {

    render() {

      return(
        
      )
    }
}



function mapStateToProps(state){ // map state to this.props
  return{
      musical:state.musicals //conncected  to the componenet by the connect down in line 57
  }
}

export default connect(mapStateToProps,{fetchOneMusical})(IndividualMusical); // reducers is first, actions is second, MusicalContainers is where it is happening
//now we can use the action with "this.props.fetchMusicals", we will have the action now
//if there are no actions or reducers, replace either one with null
