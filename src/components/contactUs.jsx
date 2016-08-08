import React from 'react';

class ContactUs extends React.Component {
    state={
      inputText: null
    }

    whenIclick(event){
      console.log(this.state.inputText);
      alert(this.state.inputText + " You clicked me!");
    }

    onInputChange(event){
      console.log(event.target.value);
      this.setState({
        inputText:event.target.value
      })
    }

    render() {
        return(
        <div>
          <h1 className="contactus"> Contact Us</h1>
          <h3 className="contactus_name"> Email Us: broadway[@]awesome com</h3>
          <input type="text" name="lname" onChange={this.onInputChange.bind(this)}/>
          <button className="btn btn-warning" onClick={this.whenIclick.bind(this)}> Click Me! </button>
        </div>
      )

    }
}

export default ContactUs;
