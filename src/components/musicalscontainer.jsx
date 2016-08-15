import React from 'react';
import Musical from './musical';
import {connect} from 'react-redux'; // use {} to filter the module you need
import {fetchMusicals} from '../actions/index'; // you must export the function to then import here


class MusicalsContainer extends React.Component {
  state={
    musicals:[
      {
        name:'Lion King',
        picture:'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/The_Lion_King_Musical.svg/803px-The_Lion_King_Musical.svg.png'
      },
      {
        name:'Hamilton',
        picture:'https://www.playbillstore.com/resize/images/Hamilton%20the%20Musical%20Official%20Broadway%20Poster.png?lr=t&bw=1000&w=1000&bh=1000&h=1000'
      },
      {
        name:'Phantom of Opera',
        picture:'https://upload.wikimedia.org/wikipedia/en/f/f8/Phantom.jpg'
      },

      {
        name:'Lion King',
        picture:'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/The_Lion_King_Musical.svg/803px-The_Lion_King_Musical.svg.png'
      },
      {
        name:'Hamilton',
        picture:'https://www.playbillstore.com/resize/images/Hamilton%20the%20Musical%20Official%20Broadway%20Poster.png?lr=t&bw=1000&w=1000&bh=1000&h=1000'
      },
      {
        name:'Phantom of Opera',
        picture:'https://upload.wikimedia.org/wikipedia/en/f/f8/Phantom.jpg'
      }

    ],

    musicalSelected:null

    }

    componentWillMount(){
      console.log("Hello")
      this.props.fetchMusicals();
    }

    musicalSelection(name){

      this.setState({
        musicalSelected:name
      })
    }


    render() {
      console.log(this.state);
        return(
            <div className="container">
              <h3>Musical</h3>
              <div className="row">
              {
                this.state.musicals.map((musical,index)=>{ //this is a for loop, it gave us an object with elements of musicals , it also gives us the postion of that object
                    return(
                      <Musical  key={index} info={musical} onMusicalClick={this.musicalSelection.bind(this)}/> //instead of doing all the HTML, we are calling the compoenent that has all the HTML in it's render
                    )
                })


              }
              </div>



            </div>


        )

    }
}
  // function mapStateToProps(state){ // map state to this.props
  //   return{
  //       musicals:state.musicals;
  //   }
  // }

export default connect(null,{fetchMusicals})(MusicalsContainer); // reducers is first, actions is second
//now we can use the action with "this.props.fetchMusicals", we will have the action now
