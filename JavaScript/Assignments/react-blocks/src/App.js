import logo from './logo.svg';
import './App.css';
import TabComp from './components/TabComp';
import Results from './components/Results';
import React, {useState} from 'react';

function App() {

  // Create an array of tabs that has two properties, label and content
  const tabsArray = [
    {label: "Tab 1", content: "Tab 1 content is showing here"},
    {label: "Tab 2", content: "Tab 2 content is showing here"},
    {label: "Tab 3", content: "Tab 3 content is showing here"},
    {label: "Tab 4", content: "Tab 4 content is showing here"}
  ];

  const [allTabs, setAllTabs] = useState(tabsArray);

  const [currentTabIndex, setCurrentTabIndex] = useState(0);


  // Each tab is going to pass in three variables into props
  return (
    <div className="App">
      {/* This is going to be the top part of the page where the tabs are going to be */}
      <TabComp
        allTabs = {allTabs}
        currentTabIndex = {currentTabIndex}
        setCurrentTabIndex = {setCurrentTabIndex}
      />
      {/* Below is going to be the other part of the home page where the content from 
      whatever tab we clicked on */}
      {/* Were only passing in allTabs and currentTabIndex because the Results component isn't
      going to be setting any new tabs to the array */}
      <Results 
        allTabs = {allTabs}
        currentTabIndex = {currentTabIndex}
      />
    </div>
  );
}

export default App;
