

import './App.css';
import HomePage from './Components/HomePage';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';

import Contact from './Components/Contact';

import Shopingcart from './Project1/Shopingcart';
import Cartproduct from './Project1/Cartproduct';
import PageNotFound from './Components/PageNotFound';
import CheckAmount from './Project1/CheckAmount';
import SearchList from './TODO _LIST_Project2/SearchList';
import KeepNotes from '../src/KeepClone/KeepNotes'

function App() {
  return (
        <>
              <BrowserRouter basename='/React-Portfolio'>
               
                <Routes>
                  <Route exact path='/' element={<HomePage/>}/>
                  <Route path='/contact' element={<Contact/>}/>
                  <Route  path='/project1' element={<Shopingcart/>}/>
                  <Route path='/cartproduct' element={<Cartproduct/>}/>
                  <Route path='/checkamount' element={<CheckAmount/>}/>
                  <Route  path='/todolistapp' element={<SearchList/>}/>
                  <Route path='/notes'  element={<KeepNotes/>}/>
                  <Route path='/*' element={<PageNotFound/>}/>
                   
                </Routes>
                
       

            </BrowserRouter>

        </>
  );
}

export default App;
