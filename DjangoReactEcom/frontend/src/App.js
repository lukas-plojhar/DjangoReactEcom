import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'

class App extends Component {
  state = {
    products: []
  };

  async componentDidMount(){
    try{
      const res = await fetch('http://localhost:8000/product');
      const products = await res.json();
      this.setState({products});
    }
    catch (e){
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.products.map(item => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;



