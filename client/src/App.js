import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Blog from './Components/Blog'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/services" component={Services}/>
            <Route path="/blogs" component={Blog}/>
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
