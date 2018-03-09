import React from 'react'
import Link from 'gatsby-link'
import TOC from '../components/TOC'



class Home extends React.Component {

  constructor(props) {
        super(props);
        this.state = {

        };
      }



  componentDidMount (){

    //   });

}

  render() {
    //
    // const recordListItem = this.state.records.map((record) =>
    //   <li key={record.id}>{record.fields.Title}</li>
    // );

    return (
      <div>
      <h1>Welcome</h1>
      <p>My name is Tom Rau. Amongst other things, both good and bad, I am a graduate student in the University of Houston college of Technology Strategic Foresight program. This is me sharing some of that experience. Actually, maybe this is just my blog area now, and I'll focus on life and learning.</p>
       <TOC />
      </div>
    )
  }

}

export default Home;
