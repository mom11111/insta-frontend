import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Followers from './components/Followers'
import Followings from './components/Followings'
import NotFollowBack from './components/NotFollowBack'
import Profileinfo from './components/Profileinfo'
import {PostProvider} from './contexts/PostContext'
import './App.css';
import {FollowerProvider} from './contexts/FollowerContext'
import Yourprofile from './components/Yourprofile';

function App() {
  return (
    <BrowserRouter>
     <FollowerProvider>
    <PostProvider>
    <div className="App">

     <Route exact path="/login"><Login/></Route>
     <Route exact path="/"><Signup/></Route>
     <Route exact path="/profile/:id"><Profileinfo/></Route>
     <Route exact path="/posts/:id"><Home/></Route>
     <Route exact path="/:id/followers"><Followers /></Route>
     <Route exact path="/:id/followings"><Followings /></Route>
     <Route exact path="/:id/profileinfo"><Yourprofile /></Route>
     <Route exact path="/:id/notfollowback"><NotFollowBack /></Route>
    </div>
    </PostProvider>
    </FollowerProvider>
    </BrowserRouter>
    
  );
}

export default App;
