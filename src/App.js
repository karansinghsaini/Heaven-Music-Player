import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import GenreTile from './Components/genretile';
import ArtistTile from './Components/artist';
import Musicplayer from './Components/audioplayer';
import Main from './Components/login';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/genretile' component={GenreTile} />
                    <Route path='/artist' component={ArtistTile} />
                    <Route path='/audioplayer' component={Musicplayer} />
                    <Route path='/login' component={Main} />
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
