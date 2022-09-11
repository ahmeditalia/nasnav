import Navbar from './components/Navbar';
import React, { Suspense } from 'react';
import { CircularProgress } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: []
    }
  }

  addtoCart = (item) => {
    const { cartItems } = this.state;
    this.setState({ cartItems: [...cartItems, item] });
  }

  removeFromCart = (item) => {
    const { cartItems } = this.state;
    this.setState({ cartItems: cartItems.filter((temp) => temp.id !== item.id) });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div className="App">
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={
            <Suspense fallback={<CircularProgress/>}>
              <Dashboard addtoCart={this.addtoCart} removeFromCart={this.removeFromCart} />
            </Suspense>
          } />
        </Routes>

      </div>
    );
  }

}

export default App;
