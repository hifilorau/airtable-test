import React from 'react'
import Link from 'gatsby-link'

fetch("https://api.airtable.com/v0/appwv8sbEAZqDwbxG/Scanning%20Hits?maxRecords=20&view=Grid%20view", {
  headers: {"Authorization": 'Bearer keyN4bQqzj0O0fVbT'}
}).then(function(res) {
  if (res.ok) {
    console.log(res.json());
  } else if (res.status == 401) {
    alert("Oops! You are not authorized.");
  }
}, function(e) {
  alert("Error submitting form!");
});



const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
