import React from 'react';

const Results = (props) => {

    // Descructuring like usual
    const {allTabs, currentTabIndex} = props


    return(
        <div>
            {
                // Undestand what is being called here
                // All Tabs is an array, so each item of the array is accessed through []
                // The currentTabIndex, which is a number, is being SET in the TabComp.js 
                // by an onClick event which calls the setSelectedTab, which THEN 
                // calls the setCurrentTabIndex method from the App.js
                allTabs[currentTabIndex].content
            }
        </div>
    )
}

export default Results;