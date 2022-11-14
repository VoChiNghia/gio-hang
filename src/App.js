
import './app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="" element={<Home/>}></Route>
    //     <Route path="/home" element={<Home/>}></Route>
    //     <Route path="/detail" element={<Detail/>}></Route>
    //     <Route path="/detail/:id" element={<Detail/>}></Route>
       
    //   </Routes>
    // </BrowserRouter>

    <>
    <Home/>
    </>

  );
}

export default App;
