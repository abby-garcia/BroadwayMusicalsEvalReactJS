import React from 'react';
import Musical from './musical';



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
      }

    ],

    musicalSelected:null

    }

    musicalSelection(name){

      this.setState({
        musicalSelected:name
      })
    }


    render() {
        return(
            <div>
            {this.state == null ?
              <h3>Musical</h3>
              <div>
              {
                this.state.musicals.map((musical,index)=>{ //this is a for loop, it gave us an object with elements of musicals , it also gives us the postion of that object
                    return(
                      <Musical key={index} info={musical} onMusicalClick={this.musicalSelection.bind(this)}/> //instead of doing all the HTML, we are calling the compoenent that has all the HTML in it's render
                    )
                })


              }
              </div>
              :
              <h1>{this.state.musicalSelected}</h1>
            }




            </div>


        )

    }
}

export default MusicalsContainer;
