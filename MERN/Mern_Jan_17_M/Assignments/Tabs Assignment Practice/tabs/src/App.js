import './App.css';
import React, { useState } from 'react';
import Tabs from './components/Tabs';
import ShowContent from './components/ShowContent';

function App() {

  const [ allTabs, setAllTabs ] = useState({
    content: [
      "Tab 1 Content is showing here",
      "Tab 2 Content is showing here",
      "Tab 3 Content is showing here",
    ],
    selectedTab: 1,
  });

  return (
    <div className="App">
      <Tabs allTabs={allTabs} setAllTabs={setAllTabs} />
      <ShowContent allTabs={allTabs} />
    </div>
  )
}

export default App
