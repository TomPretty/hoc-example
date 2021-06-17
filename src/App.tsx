import { useEffect } from "react";
import { Header, SupportAgainHeader, AusHeader } from "./components/Header";
import "./App.css";

function App() {
  useEffect(() => {
    fetchUserData("tom");
    fetchUserData("tom");
    fetchUserData("tom");
    fetchUserData("ara");
    fetchUserData("ara");
  }, []);

  return (
    <div className="App">
      <Header baseUrl="https://support.theguardian.com" />
      <SupportAgainHeader baseUrl="https://support.theguardian.com" />
      <AusHeader baseUrl="https://support.theguardian.com" />
    </div>
  );
}

function _fetchUserData(userName: string): string {
  console.log(`fetching data for: ${userName}`);
  return userName;
}

const fetchUserData = withCache(_fetchUserData);

function withCache(func: (param: string) => string) {
  const cache: Record<string, string> = {};

  function wrapped(param: string) {
    if (!(param in cache)) {
      cache[param] = func(param);
    }

    return cache[param];
  }

  return wrapped;
}

export default App;
