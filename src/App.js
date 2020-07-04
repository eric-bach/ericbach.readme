import React from 'react';

function App() {
  return (
    <body className='is-preload'>
      <div id='wrapper' className='divided'>
        {/* One */}
        <section className='banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right'>
          <div className='content'>
            <h1>Eric Bach</h1>
            <p>Senior Agile Team Lead</p>
            <h5>Alberta Motor Association</h5>
            <br />
            <h2 className='major'>My readme</h2>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className='image'>
            <img src='images/01.jpg' alt='' />
          </div>
        </section>

        <section className='wrapper style1 align-center'>
          <div className='inner'>
            <h2>About Me</h2>
            <div className='items style1 medium onscroll-fade-in'>
              <section>
                <h3>Developer</h3>
              </section>
              <section>
                <h3>Foodie</h3>
                <br />
              </section>
              <section>
                <h3>Runner</h3>
              </section>
              <section>
                <h3>Photographer</h3>
                <br />
              </section>
              <section>
                <h3>Wanderlust</h3>
              </section>
              <section>
                <h3>Music</h3>
              </section>
              <section>
                <h3>DIYer</h3>
                <br />
              </section>
              <section>
                <h3>Golfer</h3>
              </section>
              <section>
                <h3>Volleyballer</h3>
              </section>
            </div>
          </div>
        </section>

        {/* Role */}
        <section
          className='spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in'
          id='first'
        >
          <div className='content'>
            <h2>My Role</h2>
            <p>My job as a team lead is to build a fun and high-performing team:</p>
            <ul>
              <li>
                <b>I enable teams</b> to be innovative and successful, leading to high quality software products.
              </li>
              <li>
                <b>I provide context</b> from across the association to help you understand your priority and focus.
              </li>
              <li>
                <b>I attract, retain, and grow</b> high performing individuals.
              </li>
              <li>
                <b>I can take off</b> for at least 4 weeks and it won’t make a difference.
              </li>
            </ul>
            <p>
              If you feel I’m not meeting any of these responsibilities I appreciate if you do me a huge favour by
              letting me know as soon as possible.
            </p>
          </div>
          <div className='image'>
            <img src='images/02.jpg' alt='' />
          </div>
        </section>

        {/* Availability */}
        <section className='spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in'>
          <div className='content'>
            <h2>Availability</h2>
            <ul>
              <li>I keep my calendar up to date.</li>
              <li>
                You are welcome and encouraged to book time with me if you want to discuss something or want my
                undivided attention. The only thing I ask is you include an agenda or some context whenever possible.
              </li>
              <li>
                If you want to or need to talk to me, and my schedule is not open, DM me on Slack/Teams and I’ll make
                sure to get back to you once I’m available.
              </li>
            </ul>
          </div>
          <div className='image'>
            <img src='images/03.jpg' alt='' />
          </div>
        </section>

        {/* Comms */}
        <section className='spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in'>
          <div className='content'>
            <h2>Comms</h2>
            <ul>
              <li>
                <b>Open communication</b> and trust-based relationships is important to me.
              </li>
              <li>
                <b>You can talk to me</b> about anything. If I don’t have an answer or can’t share it with you at the
                moment, I’ll be honest about it.
              </li>
              <li>
                <b>My priority is to help you</b> succeed so I encourage you to reach out to me when you have a question
                or just want to talk even if it’s just to vent.
              </li>
              <li>
                <b>Nothing beats face-to-face</b> in-person communication. Our next best option is face-to-face video.
              </li>
              <li>
                <b>My preferred communication</b> channels (in order of fastest to slowest response): In-person, DM on
                Slack/Teams, phone, text message, ......, email.
              </li>
            </ul>
          </div>
          <div className='image'>
            <img src='images/04.jpg' alt='' />
          </div>
        </section>

        {/* Expectations */}
        <section className='spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in'>
          <div className='content'>
            <h2>Expectations</h2>
            <ul>
              <li>
                <b>Be available</b> during our core hours from 9 am to 3 pm. I expect you to find a start and end time
                that works for you to meet the core hours and a 7.5 hour working day.
              </li>
              <li>
                <b>You let me know if you can’t do your job</b>. If you feel you are running into a potential issue or
                roadblock, I prefer to hear about it sooner.
              </li>
              <li>
                <b>Our job is to solve problems, not write code</b>. I encourage you to think creatively for the best
                solution to the problem at hand. Come up with a solid design before you start to write any sizeable
                code.
              </li>
              <li>
                <b>You bring well thought-out problems and good decisions</b> to conversations. I believe in the
                equality in distribution of conversational turn-taking.
              </li>
              <li>
                <b>You live by the boy scout principles</b> of continually improving the small things. As it relates to
                code, always leave code better than you found it.
              </li>
            </ul>
          </div>
          <div className='image'>
            <img src='images/05.jpg' alt='' />
          </div>
        </section>

        {/* One-on-ones */}
        <section className='spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in'>
          <div className='content'>
            <h2>O3s</h2>
            <p>
              One-on-ones are your time to tell me what’s on your mind, whatever it is. I usually email a{' '}
              <b>“question of the week”</b> that will initiate the conversation, but I strongly encourage you to bring
              items that you would like to discuss with me:
            </p>
            <ul>
              <li>is there anything bothering you?</li>
              <li>thoughts on your career and goals</li>
              <li>feedback</li>
              <li>airing grievances</li>
              <li>seeking clarity</li>
              <li>or even talking about your outside interests</li>
            </ul>
            <p>
              Let's not turn this time into a status update meeting unless you have a pressing need to update status.
            </p>
            <p>
              I do everything I can not to cancel a one-on-one with you, but I will have to reschedule from time to
              time.
            </p>
            <p>
              If you have something urgent to discuss with me, don't wait for our one-on-one to happen, feel free to
              book a meeting earlier.
            </p>
          </div>
          <div className='image'>
            <img src='images/06.jpg' alt='' />
          </div>
        </section>

        {/* Nuance and Errata */}
        <section className='spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in'>
          <div className='content'>
            <h2>Nuance and Errata</h2>
            <ul>
              <li>
                There may be occasions where I require some time to gather my thoughts. While this may be perceived as
                I’m not engaged I’m actually quite open once I have the space.
              </li>
              <li>I prefer to multi-task it but it doesn’t mean I’m not paying attention to you.</li>
              <li>
                I am awful at responding to emails so if you feel your email has gone into the Outlook void, please give
                me a gentle reminder.
              </li>
              <li>
                Provide me enough context when you ask me to do something. But don't push me to commit immediately. I
                need the time to process new information. I commit deliberately.
              </li>
            </ul>
          </div>
          <div className='image'>
            <img src='images/07.jpg' alt='' />
          </div>
        </section>

        {/* Footer*/}
        <footer className='wrapper style1 align-center'>
          <div className='inner social-link-group'>
            <ul className='icons'>
              <a href='https://ericbach.dev'>
                <i className='github icon large grey' />
              </a>
              <a href='https://github.com/eric-bach'>
                <i className='github icon large grey' />
              </a>
              <a href='https://linkedin/in/ebach'>
                <i className='linkedin icon large grey' />
              </a>
              <a href='https://medium.com/@bacheric'>
                <i className='medium m icon large grey' />
              </a>
            </ul>
            <p>
              &copy; Eric Bach. Design: <a href='https://html5up.net'>HTML5 UP</a>.
            </p>
          </div>
        </footer>
      </div>

      {/* Scripts */}
      <script src='js/jquery.min.js'></script>
      <script src='js/jquery.scrollex.min.js'></script>
      <script src='js/jquery.scrolly.min.js'></script>
      <script src='js/browser.min.js'></script>
      <script src='js/breakpoints.min.js'></script>
      <script src='js/util.js'></script>
      <script src='js/main.js'></script>
    </body>
  );
}

export default App;
