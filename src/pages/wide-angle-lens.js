import React from 'react'
import Link from 'gatsby-link'



class SecondPage extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
          records:[]
        };
      }

  componentDidMount() {
}


  render() {


    return (
      <div className="blog-entry">
        <iframe className="airtable-embed" src="https://airtable.com/embed/shrI25iWvIJOgGtjU?backgroundColor=green&viewControls=on" frameBorder="0"
          style= {{width:'100%', height:'85vh', background: 'transparent', border: '1px solid #ccc'}}>
          </iframe>
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }

}

export default SecondPage;
