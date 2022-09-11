import React from 'react';
import Navigation from "../RouterNavigation";

const PageHeader = ({setAddModalActive, handleCategoryChange}) => {

    return (
        <Navigation setAddModalActive={setAddModalActive} handleCategoryChange={handleCategoryChange}/>
    );
};

export default PageHeader;