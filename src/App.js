
import './App.css';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

 

const App = () => {
  
  
  return (

    <>

  <Navbar/>
  <ItemListContainer/>
  <Header/>
  <Main buy="BUY THINGS"/>
  <Footer/>
    
     
    </>
 
  );
};
  

export default App;
