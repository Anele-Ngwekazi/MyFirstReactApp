import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import About from './components/pages/About';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title:'Research what is React',
        completed: false
      },
      {
        id: 2,
        title:'Complete presentation slides',
        completed: false
      },
      {
        id: 3,
        title:'Create a demo',
        completed: false
      },
      {
        id: 4,
        title:'Do the presentation',
        completed: false
      }
    
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
                <Todos todos={this.state.todos} markComplete={this.markComplete} />
            )} />
            <Route path="/about" component={About} />
          </div>  
        </div>
      </Router>
    );
  }
}

export default App;
