import React from 'react';
import DateHeadline from "./component/DateHeadline";
import NavBar from "./component/NavBar";
import { BrowserRouter, Switch, Route,withRouter } from 'react-router-dom';
import Bodypage from "./component/Bodypage";
import Fetching from "./component/Fetching";
import NewsItem from './component/NewsItem';
import Coronafetch from './component/Coronafetch';
import CoronaNews from './component/CoronaNews';
function App() {
  return (
    <div className="App">
        <Fetching/>
        <Coronafetch/>
        <DateHeadline/>
        {/* <NavBar/> */}
        <BrowserRouter>
            <Switch>
                <Route component={Bodypage} exact path={'/'}/>
                <Route path={'/newsitem'} component={NewsItem}/>
                <Route path={'/corona'} component={CoronaNews}/>
            </Switch>
        </BrowserRouter>




          </div>
  );
}

export default withRouter(App);
