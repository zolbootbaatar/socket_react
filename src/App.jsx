import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from './navbar'
import Test from './test'

export default class App extends Component {

  render() {
    
    return (
      <div className='bg-slate-300 dark:bg-zinc-800 min-h-screen'>
        <Router ref={(router) => (this.router = router)}>
          <Navbar />
          <div>
            <Switch>
              {/* <Route exact path='/' component={CarScreen} /> */}
              <Route exact path='/' component={Test} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}
