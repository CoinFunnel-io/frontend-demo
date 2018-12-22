import * as React from 'react'
import { Route, HashRouter } from 'react-router-dom'
import { Switch } from 'react-router-dom'

import MenuAppBar from './components/menu-app-bar'
import Inventory from './components/inventory'
import SalesReport from './components/sales-report'
import Add from './components/add'
import Payment from './components/payment'

import CONFIG from './constants/config'
import ROUTE from './constants/route'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

const styles = {
  backgroundColor: 'cornflowerblue',
}

class Root extends React.Component {
  render() {
    return (
      <div className="App" style={styles}>
        <HashRouter basename={CONFIG.PUBLIC_URL} id={110}>
          <div id={'a'}>
            <MenuAppBar id={98} />
            <Switch id={109}>
              <Route
                exact
                path={ROUTE.PATH.INVENTORY}
                component={Inventory}
                id={105}
              />
              <Route
                exact
                path={ROUTE.PATH.SALES_REPORT}
                component={SalesReport}
                id={106}
              />
              <Route exact path={ROUTE.PATH.ADD} component={Add} id={107} />
              <Route exact path={ROUTE.PATH.EDIT} component={Add} id={121} />
              <Route
                path="/payment/:address/:amount/"
                component={Payment}
                id={108}
              />
              <Route
                exact
                path={ROUTE.PATH.SIGNIN}
                component={SignIn}
                id={111}
              />
              <Route
                exact
                path={ROUTE.PATH.SIGNUP}
                component={SignUp}
                id={112}
              />
            </Switch>
          </div>
        </HashRouter>
      </div>
    )
  }
}

export default Root