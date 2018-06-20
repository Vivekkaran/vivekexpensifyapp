import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import Header from '../components/Header'
import AddExpensePage from '../components/AddDashboard'
import EditExpensePage from '../components/EditDashboard'
import ExpenseDashboardPage from '../components/ExpenseDashboard'
import HelpPage from '../components/HelpDashboard'
import NotFoundPage from '../components/NotFound'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header /> <br/>
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        {/* <Route path="/help" component={HelpPage} /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;