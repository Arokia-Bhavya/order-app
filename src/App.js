import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AddOrder from './orders/AddOrder';
import EditOrder from './orders/EditOrder';
import ViewOrder from './orders/ViewOrder';
function App() {
  return (
    <div className="App">
      <Router>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/addOrder" element={<AddOrder/>}/>
    <Route exact path="/editOrder/:id" element={<EditOrder/>} />
    <Route exact path="/viewOrder/:id" element={<ViewOrder/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
