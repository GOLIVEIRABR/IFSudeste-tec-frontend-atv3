import './App.css';
import InputBox from './components/InputBox';
import Login from './components/Login';

function App() {
  return (
    <>
    <InputBox/>
    <Login logged={false}/>
    </>
  );
}

export default App;
