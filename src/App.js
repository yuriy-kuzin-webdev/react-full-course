import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper" >
        {/* header */}
        <header className='header'>
          <img src='https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg' alt=''/>
        </header>

        {/* nav */}
        <nav className='nav'>
          <div><a href='#/'>Profile</a></div>
          <div><a href='#/'>Messages</a></div>
          <div><a href='#/'>News</a></div>
          <div><a href='#/'>Music</a></div>
          <div><a href='#/'>Settings</a></div>
        </nav>

        {/* main content */}
        <div className='content'>
          <div><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt=''/></div>
          <div>ava + desc</div>
          <div>my posts
            <div>new post</div>
            <div>
              <div>post 1</div>
              <div>post 2</div>
            </div>
          </div>

        </div>


      </div>
    );
  }
}

export default App;
