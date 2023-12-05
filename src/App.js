// App.js
import React, {useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import Home from './components/Home';

import { auth } from "./firebase";
import NewsList from './components/News/NewsList';

const App = () => {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Signin />} />
          <Route path='/' element={<Home  name={userName} />} />
          <Route path='/news' element={ <NewsList /> } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
