import React, {useState} from 'react';
import './app.css';
import Header from "../header";
import Nav from "../nav";
import Results from "../results";
import req from "../../requests";

const App = () => {
  const [selectedOption, setSelectedOption] = 
      useState<string>(req.fetchTrending);
  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption}/>
      <Results selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
