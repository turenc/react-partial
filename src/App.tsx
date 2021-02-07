import './App.css';
import { MyContextProvider } from './my-context/my-context-provider';
import MyContextConsumers from './consumers/my-context-consumers';

function App() {
  return (
    <div className="App">
      <MyContextProvider myContextText="Provider Test">
        <MyContextConsumers></MyContextConsumers>
      </MyContextProvider>
    </div>
  );
}

export default App;