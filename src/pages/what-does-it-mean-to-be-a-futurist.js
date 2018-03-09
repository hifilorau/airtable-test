import React from 'react'
import Link from 'gatsby-link'
import FutureDiagram from '../assets/future-diagram.png'

const WDIM = () => (
  <div className="blog-entry">
      <h1 className="blog-title">What is the Future? What is a Futurist?</h1>
      <p>It feels both oddly symbolic and slightly ironic to be asked on week one of a graduate program in foresight studies, “what does it mean to be a futurist?” It is certainly a question that has as many answers as there are possible futures. It is also one of the primary things we will need to ascertain while in this program. But much like a futures project or a hand of poker, we must play our best hand with the incomplete set of data that sits in front of us.
      </p>
      <div className="blog-section">
        <h2>First let's define the future</h2>
        <p>
          Imagine the future as a series of strings. They all start from a single point, A, which represents the present time, or now, and fan out from there (see diagram below). With each new passing instance of time we have a new point A, the new now, which has been derived from one of the previous strings. Some of these futures are possible; they take into account social, economic, political, environmental, and technological trends, and some, like one where I become the NBA Slam Dunk Champion, are so far-fetched they should be discarded. Sometimes the future happens along an evolutionary path, where things evolve continuously along a trend line, and sometimes the future involves events of discontinuous change (ie. writing, farming, cars, the internet, etc). These events cause the future to diverge many standard deviations from its previous trajectory.
        </p>
      </div>
      <div className="image-wrapper-blog"><img src={FutureDiagram} /></div>
      <div className="blog-section">
        <h2>So what does a futurist do?</h2>
        <p>
          With the future in this context we can create a high level view of what it means to be a futurist. Let’s start at the very top; at its core being a futurist means developing and nurturing tools that allow us to be open to as many futures as possible. Futures projects are a combination of systems thinking, design thinking, risk/trend/data analysis, HCI, psychology and just about everything else you can throw in the kitchen sink.
        </p>
      </div>
      <div className="blog-section">
        <h2>Wait... but how?</h2>
        <p>
          This is where it starts to get more complicated as it happens to be the point at which my own future converges upon this very sentence. I am indeed here to learn “the how.” And while I may not know specifically how a future project may unravel, I know that it can be looked at in three stages.
        </p>
     </div>
     <div className="blog-section">
        <ol>
          <li>
            <h3>Define the core question/problem</h3>
            <p>
              Stage one of a future project involves understanding the problem and putting into the correct context. This is done by putting aside any preformed assumptions, asking questions, collecting data, and understanding all of the inputs that might potentially have an effect on possible futures.
            </p>
          </li>
          <li>
            <h3>Find possible likely outcomes </h3>
            <p>
              After one is able to accurately see a problem through a holistic lense based on relevant inputs probable futures begin to come into focus. Some of these threads will be obvious continuations of current trends and others may be the result of disruptive events. It is the job of the futurist to balance both insight and data to create possible outcomes relevant to the original problem/question presented.
            </p>
          </li>
          <li>
            <h3>Set the future in motion</h3>
            <p>
              Once a series of probable and potential futures has been created a futurist must create plans that influence and instigate preferred outcomes while also preparing for negative outcomes. From there it can be up to the futurist to set these plans in motion.
            </p>
          </li>
        </ol>
      </div>
        <div className="blog-section">
          <h2>What does it all mean?</h2>
          <p>
            Being a futurist is not just an interdisciplinary field combining the best of systems thinking, design thinking, and risk/trend/data analysis to produce a series of possible and preferred outcomes. It is also about understanding the consequences of those outcomes and championing futures that solve problems while also mitigating or avoiding any negative outcomes that these new futures could produce. And while this is just the beginning of a journey in which we will dive wholly into what it means to be a futurist,  knowing that the best answer always begins with the best question should be enough to get us started on the right foot.
          </p>
        </div>
        <Link
          to="/"
          style={{
            color: 'grey',
            textDecoration: 'none',
          }}
        >Home
        </Link>
  </div>
)

export default WDIM
