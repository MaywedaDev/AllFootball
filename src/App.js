
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './Home';
import Articles from './Articles';
import SingleBlog from './SingleBlog';
import Stats from './Stats';
import Fixtures from './Fixtures';
import Footer from './components/Footer'
import PlayerStats from './PlayerStats';
import ClubStats from './ClubStats';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Match from './Match';


function App() {

  const [page, setPage] = useState('Home');

  function setActivePage(active){
    setPage(active)
  }

  return (
    <Router>
      <div className="App">
        <Navbar active={page} />

        <Switch>

          <Route exact path='/'>
            <Home setActivePage={setActivePage} />
          </Route>


          <Route exact path='/articles'>
           <Articles setActivePage={setActivePage} />
          </Route>

          <Route exact path='/stats'>
           <Stats setActivePage={setActivePage} />
          </Route>

          <Route exact path='/fixtures'>
           <Fixtures setActivePage={setActivePage} />
          </Route>

          <Route path='/articles/blogs/:id'>
           <SingleBlog />
          </Route>

          <Route path='/stats/player/:id'>
            <PlayerStats setActivePage={setActivePage}/>
          </Route>

          <Route path='/stats/club/:id'>
            <ClubStats setActivePage={setActivePage}></ClubStats>
          </Route>

          <Route path='/match/:id'>
            <Match setActivePage={setActivePage} />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
