
import './App.css';
import { Content, Footer, Header } from './func-components';
import MsgBox from './class-props';
import Banner from './banners';
import { EventData1 } from './event-data';
import RefClass from './refs-class';
import RefsArray from './refs-array';
import MessageBox from './state-func';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FormValidation from './form-validation';

function App() {
  return (
    <>
    <RefClass/>
    <Header/>
    <FormValidation/>
    <MessageBox/>
    <RefsArray/>
    <Content/>
    <MsgBox
      text="React & React Native"
      color="blue"
      bgColor="#ccc"
      frontSize="18pt"
      border="solid 1px black"
    />
    <EventData1/>
    
    <Banner/>
    <Footer/>
    </>
    
  );

  
}

export default App;
