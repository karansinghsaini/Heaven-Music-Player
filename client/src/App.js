import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ArtistTile from './Components/artist';
import Main from './Components/login';
import Signup from './Components/signup';
import LPplayer from './players/lp';
import Emplayer from './players/eminem';
import Drplayer from './players/dragons';
import Adplayer from './players/adele';
import Charts from './Components/charts';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/artist' component={ArtistTile} />
                    <Route path='/charts' component={Charts} />
                    <Route path='/login' component={Main} />
                    <Route path='/signup' component={Signup} />
                    <Route path= '/players/lp' component={LPplayer}/>
                    <Route path= '/players/eminem' component={Emplayer}/>
                    <Route path= '/players/dragons' component={Drplayer}/>
                    <Route path= '/players/adele' component={Adplayer}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
