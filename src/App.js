import styled from 'styled-components';
import './App.css';
import Header from './Components/Header'
import OurServices from './Components/OurServices'
import Members from './Components/Members'
import OurPorjects from './Components/OurPorjects'



import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const HeaderWraper = styled.div`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 900px;
  `
  return (
    <div className="App">
    <Header/>
    <OurServices/>

    <Members/>
    <OurPorjects/>
     {/*  <ContactUs/> */}
     
    </div>
  );
}

export default App;
