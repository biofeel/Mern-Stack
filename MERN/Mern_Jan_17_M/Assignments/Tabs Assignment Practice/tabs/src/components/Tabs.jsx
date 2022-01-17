import React from "react";

const Tabs = (props) => {
    const { allTabs, setAllTabs } = props;

    const selectTab = (index) => {
        setAllTabs({
            ...allTabs,
            selectedTab: index,
        })

    }
    return (
        <div>
            <h1>Click on tabs to view content</h1>
            {
                allTabs.content.map((content, index) => (
                    <div className="tab" onClick={() => selectTab(index)}>
                        Tab {index + 1}

                    </div>
                ))
            }
        </div>
    )
}

export default Tabs;