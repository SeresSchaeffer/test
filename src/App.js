
import './App.css';
import { Content, Footer, Header } from './func-components';
import MsgBox from './class-props';
import Banner from './banners';
import { EventData1 } from './event-data';

function App() {
  return (
    <>
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
