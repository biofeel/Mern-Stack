import React from "react";

const ShowContent = (props) => {
    const { allTabs } = props;

    return (
        <div>
            <h3>Content</h3>
            <div className="resulttab">
                {allTabs.content[allTabs.selectedTab]}
            </div>
        </div>
    )
}

export default ShowContent;