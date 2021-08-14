import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './home/HomePage';
import Header from './common/Header';
import AboutPage from './about/AboutPage';
import CoursePage from './courses/CoursePage';
import ManageCoursePage from './courses/ManageCoursePage';

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/courses' component={CoursePage} />
        <Route path='/course/:slug' component={ManageCoursePage} />
        <Route path='/course' component={ManageCoursePage} />
        <Route path='/about' component={AboutPage} />
        <Route render={() => <h1>Oops! Page not found.</h1>} />
      </Switch>
    </div>
  );
}

export default App;