import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from '../public/images/favicon.png';
import vidblur from '../public/images/looped_blur.mp4';
import { css } from 'glamor';
import './App.css';


// inline css rules
let rule1 = css({
  color: 'red',
  ':hover': {
    color: 'pink'
  },
  '@media(min-width: 600px)': {
    color: 'greenyellow',
    ':hover': {
      color: 'lime'
    }
  }
})
let rule2 = css({
  color: 'firebrick',
  ':hover': {
    color: 'red'
  },
  '@media(min-width: 600px)': {
    color: 'navy',
    ':hover': {
      color: 'deepskyblue'
    }
  }
})



const Page = ({ title }) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Elements</h2>
      </div>
      <div className="App-body-vid">
        <p className={`${rule1}`}>
          This is the {title} page.
        </p>

        {/*video test*/}
        <video loop autoPlay className="vidbox1">
          <source src={vidblur}/>
        </video>

        <p>
          <Link to="/" className={`${rule2}`}>Home</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to="/settings">Settings</Link>
        </p>
      </div>
    </div>
);

const Home = (props) => (
  <Page title="Home"/>
);

const About = (props) => (
  <Page title="About"/>
);

const Settings = (props) => (
  <Page title="Settings"/>
);

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/settings" component={Settings}/>
      </Router>
    );
  }
}


export default App;
