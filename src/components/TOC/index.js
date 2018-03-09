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
          <ul>
            <li><Link to="/scanning-hits">Scanning Hits</Link></li>
              <li><Link to="/what-does-it-mean-to-be-a-futurist">What does it mean to be a futurist?</Link></li>
          </ul>
      </div>
    )
  }

}

export default TOC
