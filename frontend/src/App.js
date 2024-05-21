import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import DashboardPage from './pages/DashboardPage';
import InvoiceLibraryPage from './pages/InvoiceLibraryPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/invoices" component={InvoiceLibraryPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
