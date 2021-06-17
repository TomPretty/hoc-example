import { Header, SupportAgainHeader, AusHeader } from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header baseUrl="https://support.theguardian.com" />
      <SupportAgainHeader baseUrl="https://support.theguardian.com" />
      <AusHeader baseUrl="https://support.theguardian.com" />
    </div>
  );
}

export default App;
