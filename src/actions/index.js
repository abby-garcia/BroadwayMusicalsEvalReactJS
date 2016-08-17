// actions
import axios from 'axios';


//getting musicals

export function fetchMusicals(){
    // do the call
      const request = axios.get("https://api.seatgeek.com/2/events?geoip=98.213.245.205&range=12mi");
      
    // return the action
      return{ // this is how you create an action!
        type:"FETCH_MUSICALS",
        payload: request
      }


}
