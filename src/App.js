import React from 'react';

function App() {
  return (
    <>
      <div id="wrapper" className="divided">
        {/* One */}
        <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
          <div className="content">
            <h1>Eric Bach</h1>
            <p>Senior Agile Team Lead</p>
            <h4>Alberta Motor Association</h4>
          </div>
          <div className="image">
            <img src="images/01.jpg" alt="" />
          </div>
        </section>

        <section className="wrapper style1 align-center">
          <div className="inner">
            <h2>About Me</h2>
            <h4>I'm always in search of the perfect bowl of ramen</h4>
            <h4>I often travel solo to places for weeks at a time</h4>
            <h4>I enjoy capturing perfect moments with my camera</h4>
            <h4>I'm a strong runner that consistently finishes on the podium</h4>
            <h4>I like to think I'm a good golfer when you exclude my bad shots</h4>
            <h4>I'm often seen at the net blocking your volleyball spikes</h4>
          </div>
        </section>

        {/* Role */}
        <section
          className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in"
          id="first"
        >
          <div className="content">
            <h2>My Role</h2>
            <p>My job as a team lead is to build a fun and high-performing team:</p>
            <ul>
              <li>
                <b>I enable teams</b> to be innovative and successful, leading to high quality
                software products.
              </li>
              <li>
                <b>I provide context</b> from across the association to help you understand your
                priority and focus.
              </li>
              <li>
                <b>I balance</b> dynamic and challenging work with social team activities and
                events.
              </li>
              <li>
                <b>I attract, retain, and grow</b> high performing individuals.
              </li>
              <li>
                <b>I can take off</b> for at least 4 weeks and it won’t make a difference.
              </li>
            </ul>
            <p>
              If you feel I’m not meeting any of these responsibilities I appreciate if you do me a
              huge favour by letting me know as soon as possible.
            </p>
          </div>
          <div className="image">
            <img src="images/02.jpg" alt="" />
          </div>
        </section>

        {/* Availability */}
        <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
          <div className="content">
            <h2>Availability</h2>
            <ul>
              <li>
                My office hours are generally from 7:30 - 4:30. If you need something from me
                outside these hours, let me know ahead of time and I can usually accommodate unless
                I have a prior commitment scheduled.
              </li>
              <li>
                I keep my calendar up to date. You are welcome and encouraged to book time with me
                if you want to discuss something or want my undivided attention. The only thing I
                ask is you include an agenda or some context whenever possible.
              </li>
              <li>
                If you want to or need to talk to me, and my schedule is not open, DM me on
                Slack/Teams and I’ll make sure to get back to you once I’m available.
              </li>
            </ul>
          </div>
          <div className="image">
            <img src="images/03.jpg" alt="" />
          </div>
        </section>

        {/* Comms */}
        <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
          <div className="content">
            <h2>Comms</h2>
            <ul>
              <li>
                <b>Open communication</b> and trust-based relationships is important to me.
              </li>
              <li>
                <b>You can talk to me</b> about anything. If I don’t have an answer or can’t share
                it with you at the moment, I’ll be honest about it.
              </li>
              <li>
                <b>My priority is to help you succeed</b> so I encourage you to reach out to me when
                you have a question or just want to talk even if it’s just to vent.
              </li>
              <li>
                <b>Nothing beats face-to-face</b> in-person communication. Our next best option is
                face-to-face video.
              </li>
              <li>
                <b>My preferred communication</b> channels (in order of fastest to slowest
                response): in-person, DM on Slack/Teams, phone, text message, ......, and lastly if
                really necessary, email.
              </li>
            </ul>
          </div>
          <div className="image">
            <img src="images/04.jpg" alt="" />
          </div>
        </section>

        {/* Expectations */}
        <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
          <div className="content">
            <h2>Expectations</h2>
            <ul>
              <li>
                <b>Be available</b> during our core hours from 9 am to 3 pm. I expect you to find a
                start and end time that works for you to meet these core hours, have an unpaid lunch
                break, coffee breaks, and a 7.5 hour working day.
              </li>
              <li>
                <b>You let me know if you can’t do your job</b>. If you feel you're about to
                encounter a potential issue or roadblock, I appreciate to hear about it rather than
                to have to help resolve a major issue later on.
              </li>
              <li>
                <b>Our job is to solve problems, not write code</b>. I encourage you to think
                creatively for the best solution to the problem at hand. Come up with a solid design
                before you start to write any sizeable code.
              </li>
              <li>
                <b>You are engaged in team activities</b> like discussions, collaborative workshops,
                and team building activities or social events.
              </li>
              <li>
                <b>You live by the boy scout principles</b> of continually improving the small
                things. As it relates to code, always leave code better than you found it.
              </li>
            </ul>
          </div>
          <div className="image">
            <img src="images/05.jpg" alt="" />
          </div>
        </section>

        {/* One-on-ones */}
        <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
          <div className="content">
            <h2>O3s</h2>
            <p>
              One-on-ones are your time to tell me what’s on your mind, whatever it is. I usually
              send an email with a <b>“question of the week”</b> that will initiate the
              conversation. I would prefer to keep status updates out of our conversation unless you
              have a pressing need for an update. I would strongly encourage you to bring items that
              you would like to discuss with me:
            </p>
            <ul>
              <li>is there anything bothering you?</li>
              <li>thoughts on your career and goals</li>
              <li>challenges or conflicts you're dealing with</li>
              <li>feedback</li>
              <li>or even talking about your outside interests</li>
            </ul>
            <p>
              I do everything I can not to cancel a one-on-one with you, but I will have to
              reschedule from time to time.
            </p>
            <p>
              If you have something urgent to discuss with me, don't wait for our one-on-one to
              happen, feel free to reach out to me earlier.
            </p>
          </div>
          <div className="image">
            <img src="images/06.jpg" alt="" />
          </div>
        </section>

        {/* Nuance and Errata */}
        <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
          <div className="content">
            <h2>Imperfections</h2>
            <ul>
              <li>
                There may be occasions where I require some time to gather my thoughts. While this
                may be perceived as I’m not engaged I’m actually quite open once I have the space. I
                will provide you my opinion once I'm ready.
              </li>
              <li>
                I will often multi-task so you may see me typing away, but it doesn’t mean I’m not
                paying attention to you. The only exception is one-on-ones where you will always
                have my undivided attention.
              </li>
              <li>
                I am awful at responding to emails so if you feel your email has gone into the
                Outlook void, please give me a gentle reminder.
              </li>
              <li>
                Provide me enough context when you ask me to do something. Before I commit I need
                the time to process new information. I commit deliberately.
              </li>
            </ul>
          </div>
          <div className="image">
            <img src="images/07.jpg" alt="" />
          </div>
        </section>

        {/* Footer*/}
        <footer className="wrapper style1 align-center">
          <div className="inner social-link-group">
            <ul className="icons">
              <li>
                <a href="https://github.com/eric-bach" className="icon brands style2 fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/ebachamp"
                  className="icon brands style2 fa-linkedin-in"
                >
                  <span className="label">LinkedIn</span>
                </a>
              </li>
            </ul>
            <p>
              &copy; <a href="https://ericbach.dev">Eric Bach</a>. Design by:{' '}
              <a href="https://html5up.net">HTML5 UP</a>
            </p>
          </div>
        </footer>
      </div>

      {/* Scripts */}
      <script src="js/jquery.min.js"></script>
      <script src="js/jquery.scrollex.min.js"></script>
      <script src="js/jquery.scrolly.min.js"></script>
      <script src="js/browser.min.js"></script>
      <script src="js/breakpoints.min.js"></script>
      <script src="js/util.js"></script>
      <script src="js/main.js"></script>
    </>
  );
}

export default App;
