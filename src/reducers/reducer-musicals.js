//reducer
// takes two paramenters: inital state, action
// the reducer returns a new state with the new information
export function(state, action){
  if(action.type == "FETCH_MUSICALS" ){
    console.log(action);
      return action.payload;
  }
}
