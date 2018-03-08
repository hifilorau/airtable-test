import React from 'react'
import Link from 'gatsby-link'



class SecondPage extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
          records:[]
        };
      }



  componentDidMount (){

    fetch("https://api.airtable.com/v0/appwv8sbEAZqDwbxG/Scanning%20Hits?maxRecords=20&view=Grid%20view", {
      headers: {"Authorization": 'Bearer keyN4bQqzj0O0fVbT'}
    }).then((response) => response.json())
        .then((responseData) => {
          const records = responseData.records
          this.setState({
            records : records
          })
          console.log(this.state.records);
        })
      .catch(function(err) {
        console.log(err);
      });
  }


  render() {

    const recordListItem = this.state.records.map((record) =>
      <li key={record.id}>{record.fields.Title}</li>
    );

    return (
      <div>
        <h1>RECORDS</h1>
        <ul>{recordListItem}</ul>
        {/* {this.state.records} */}

        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }

}

export default SecondPage;
