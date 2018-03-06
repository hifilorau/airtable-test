import React from 'react'
import Link from 'gatsby-link'

fetch("https://api.airtable.com/v0/appwv8sbEAZqDwbxG/Scanning%20Hits?maxRecords=20&view=Grid%20view", {
  headers: {"Authorization": 'Bearer keyN4bQqzj0O0fVbT'}
}).then((response) => response.json())
    .then((responseData) => {
      const records = responseData.records
      console.log(records);
    })
  .catch(function(err) {
    console.log(err);
  });



const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
