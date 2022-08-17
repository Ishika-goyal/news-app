// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  apiKey="1339dbe14eca413bb7b3eab3378a4b45";
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        
          <Routes>
            <Route path="/" element={<News key={"general"} apikey={this.apikey} country="in" category="general" />}></Route>
            <Route path="/business" element={<News key={"business"} apikey={this.apikey} country="in" category="business" />}></Route>
            <Route path="/entertainment" element={<News key={"entertainment"} apikey={this.apikey} country="in" category="entertainment" />}></Route>
            <Route path="/general" element={<News key={"general"} apikey={this.apikey} country="in" category="general" />}></Route>
            <Route path="/health" element={<News key={"health"} apikey={this.apikey} country="in" category="health" />}></Route>
            <Route path="/science" element={<News key={"science"} apikey={this.apikey} country="in" category="science" />}></Route>
            <Route path="/sports" element={<News key={"sports"} apikey={this.apikey} country="in" category="sports" />}></Route>
            <Route path="/technology" element={<News key={"technology"} apikey={this.apikey} country="in" category="technology" />}></Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    );
  }
}
