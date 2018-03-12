import React from 'react'
import Link from 'gatsby-link'


class TOC extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
        };
      }


  componentDidMount (){

}


  render() {
    return (
      <div>
          <h2>Recent Entries</h2>
          <ul>
            <li><Link to="/scanning-hits">Scanning Hits</Link></li>
            <li><Link to="/what-does-it-mean-to-be-a-futurist">What does it mean to be a futurist?</Link></li>
            <li><Link to="/wide-angle-lens">Domain Learning - The Wide Angle Lens</Link></li>
          </ul>
      </div>
    )
  }

}

export default TOC
