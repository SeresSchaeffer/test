
import './App.css';
import { Content, Footer, Header } from './func-components';
import MsgBox from './class-props';
import Banner from './banners';
import { EventData1 } from './event-data';
import RefClass from './refs-class';

function App() {
  return (
    <>
    <RefClass/>
    <Header/><Content/>
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
