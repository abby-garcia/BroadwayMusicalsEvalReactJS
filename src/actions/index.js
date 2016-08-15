// actions
import axios from 'axios';


//getting musicals

export function fetchMusicals(){
    // do the call
      const request = axios.get("https://api.seatgeek.com/2/discover");
      console.log("I have triggered the Fetch Musical Action :D ")
      console.log(request);
    // return the action
      return{ // this is how you create an action!
        type:"FETCH_MUSICALS",
        payload: request
      }


}
