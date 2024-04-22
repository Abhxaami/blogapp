import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Main from './Components/Main';
import AddBlog from './Components/AddBlog';
import ViewBlog from './Components/ViewBlog';

function App() {
  return (
    <div className="App">
      
<Routes>
<Route path ='/login' element={<Login/>}/>
  <Route path ='/sign' element={<Signup/>}/>
  <Route path ='/add' element={<Main child={<AddBlog/>}/>}/>
  <Route path ='/view' element={<Main child={<ViewBlog/>}/>}/>
</Routes>
    </div>
  );
}

export default App;
