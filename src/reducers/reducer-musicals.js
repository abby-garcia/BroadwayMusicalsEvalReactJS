//reducer
// takes two paramenters: inital state, action
// the reducer returns a new state with the new information
//THIS RETURNS DATA.
// YOu want to use data in component. This is why you do mapStateToProps
//this

export default function(state = [], action){
  if(action.type == "FETCH_MUSICALS" ){
      return action.payload.data.events;  //this gets sent to state. REducers always send back to the state!!!!! What reducers return is called the state
  }
  else{
    return state; //returns empty state, has no data
  }
}
