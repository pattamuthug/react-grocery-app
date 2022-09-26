import './App.css';
import Header from './components/header/Header';
import Categorylist from './components/category/Categorylist';
import Topdeals from './components/topDeals/Topdeals';
  function App() {
  return (
    <div className="App">
      <Header></Header>
      <Categorylist></Categorylist>
      <Topdeals></Topdeals>
    </div>
  );
}

export default App;
