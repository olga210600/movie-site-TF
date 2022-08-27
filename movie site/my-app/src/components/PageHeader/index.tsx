import React from 'react';
import styled from 'styled-components'
import Navigation from "../RouterNavigation";

const NavigationWrapper = styled.div`
  width: 100%;
  height: 50px;
  background: white;
  display: flex;
  //justify-content: space-around;
  
  & div {
    display: contents;
  }
`

const PageHeader = ({handleCategoryChange}) => {
    return (
        <NavigationWrapper>
            <Navigation/>

            <div className="filter-container">
                <div>Filter by Category:</div>
                <div>
                    <select
                        name="category-list"
                        id="category-list"
                        onChange={handleCategoryChange}
                    >
                        <option value="">All</option>
                        <option value="action movie">action movie</option>
                        <option value="comedy">comedy</option>
                    </select>
                </div>
            </div>


        </NavigationWrapper>
    );
};

export default PageHeader;