import React from 'react';

const TabComp = (props) => {

    // Descructuring props 
    // All of these variables are being passed down from the parent component, "App"
    // which is allowed since data can be passed from parent to child
    const {allTabs, currentTabIndex, setCurrentTabIndex} = props

    // Conditionally styling css into each tab
    const tabStyle = (index) => {
        // The currentTabIndex is being SET when THAT INDEX is being clicked 
        // When tabStyle is being passed an index, it checks to see if the index thats been clicked 
        // is the same as the one being passed. If it is, then it gets "selectedTab" returned to the className
        // else, if it is not, it gets "nonSelectedTab" returned to the className
        if (index === currentTabIndex) {
            return "selectedTab";
        } else {
            return "nonSelectedTab";
        }
    }

    const setSelectedTab = (index) => {
        setCurrentTabIndex(index);
    }

    return (
        <div style={{margin: "auto", width: "85%", textAlign: "left"}}>
            {
                // Iterating through the allTabs array......
                allTabs.map((item, index) => (
                    // The tabStyle method is being called each time a new component is rendered - 
                    // in this case, 4 times the tabStyle method is going to be called since the amount of 
                    // tab components we have is 4. 
                    // Whats being passed is the index of the map item
                    <div className={`tab ${tabStyle(index)}`}
                     onClick={(e) => setSelectedTab(index) }>
                        {/* setSelectedTab calls setCurrentTabIndex to whatever number the index of
                        the map is */}
                        { item.label }
                    </div>
                ))
            }
        </div>
    )
}

export default TabComp;