'use client'
import React from 'react';
import ApiSearch from './components/apiSearch';


const Page = () => {

  return (
    <div id="page-container">
      <h1>Weather Information</h1>
        <ApiSearch />
        <br/> <br/> <br/> <br/>
        <p>Powered by Tomorrow.io</p>
    </div>
  );
};

export default Page;
