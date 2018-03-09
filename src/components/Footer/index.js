import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment'

class Footer extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
          records:[],
          month: 1,
          day: 1,
          dailyText: "",
          date: ''
        };
      }

  fetchQuote() {
    const url = "http://numbersapi.com/";
    const finalUrl = url + this.state.month + "/" + this.state.day + "?json";
    console.log(finalUrl);
    fetch(finalUrl
    //    {
    //   headers: {'Content-Type': "application/json"}
    // }
  )
    .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData)
          this.setState({dailyText: responseData.text })
      })
    .catch(function(err) {
        console.log(err);
    //   });
  })
  }

  componentDidMount (){
    const date = moment().format('MMM Do');
    const day = moment().format('D');
    const month = moment().format('M');
    this.setState({
      date: date,
      day:day,
      month:month
    }, () => {
      this.fetchQuote();
    });
}


  render() {
    return (
      <div
        style={{
          background: 'black',
          color: 'white',
          width: '100%',
          minHeight: '5em',
          padding: '2em',
        // marginBottom: '1.45rem'
        }}
        >
          <div style={{maxWidth: '1000px', margin: '0 auto'}}>
          <div style={{}}>Today in history</div>
          <div>{this.state.dailyText}</div>
          </div>
      </div>
    )
  }

}

export default Footer
