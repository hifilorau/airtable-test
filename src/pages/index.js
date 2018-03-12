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
      <div className="blog-entry">
      <h1>Welcome</h1>
      <p>My name is Tom Rau. I resent the idea that people are put into buckets, "He is a developer. They are a marketing person. She plays music. etc, etc". What we do is not a blueprint to understanding who we are. In fact in most cases it's more misdirection than discriptor.
        Amongst other things, both good and bad, I am a graduate student in the University of Houston's College of Technology Strategic Foresight program. And i'd like to share some of this experience as I go in the hope that it will help other people navigate their own future. </p>
        <p>But also I just need a good place to hit you all with my sick rants.</p>
       <TOC />
      </div>
    )
  }

}

export default Home;
