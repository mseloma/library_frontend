
import React, {Component} from 'react';

export default class App extends Component {

  alertBookName(book){
    alert(book)
    console.log(book)
  }


    render () {
        return  <div>
        <h1>Book</h1>
        <h2>Name : {this.props.title}</h2>
        <h3>Author : {this.props.author}</h3>
        <button onClick={this.alertBookName}>Say My Name</button>
        </div>

    }
}
