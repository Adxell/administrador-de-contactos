import './App.css';

import Table from "./components/Table/Table";
import FormCreate from './components/Form/FormCreate';


import {
  Routes,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App flex flex-wrap justify-center px-14">
      <Router>
        <Routes>
          <Route path={"/addContact"} element={<FormCreate />}></Route>
        </Routes>
        <Routes>
          <Route path={"/"} element={<Table />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
