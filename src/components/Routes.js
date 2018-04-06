import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

// import page framework components
import Header from './headerComponent/Header';
import Footer from './footerComponent/Footer';

// components
import BlogHome from './BlogHome';
import BlogPost from './BlogPost';

const Routes = () => (
  <Router>
    <div className='app wrapper'>

      <Route path='/' component={Header} />

      <div className='content-router'>
        <Switch>
          <Route exact path='/' component={BlogHome} />
          <Route path='/p/:page' component={BlogHome} />
          <Route path='/post/:slug' component={BlogPost} />
        </Switch>
      </div>

      <Route path='/' component={Footer} />

    </div>
  </Router>
);

export default Routes;
