import React from 'react';
import styled from 'styled-components'
import Navigation from "../RouterNavigation";

const NavigationWrapper = styled.div`
`

const PageHeader = ({setAddModalActive,handleCategoryChange}) => {

    return (
        <NavigationWrapper>
            <Navigation setAddModalActive={setAddModalActive} handleCategoryChange={handleCategoryChange}/>
        </NavigationWrapper>
    );
};

export default PageHeader;