import logo from './logo.svg';
import './App.css';
import { Content, Footer, Header } from './func-components';
import MsgBox from './class-props';

function App() {
  return (
    
    <MsgBox
    text = "React & React Native"
    color = "blue"
    bgColor = "#ccc"
    frontSize = "18pt"
    border = "solid 1 px black"
    /> 
  );

  
}

export default App;
