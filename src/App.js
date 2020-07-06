import React from 'react';

function App() {
  return (
    <>
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
              </section>
              <section>
                <h3>Runner</h3>
              </section>
              <section>
                <h3>Photographer</h3>
              </section>
              <section>
                <h3>Wanderlust</h3>
              </section>
              <section>
                <h3>Music</h3>
              </section>
              <section>
                <h3>DIYer</h3>
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
                <b>My preferred communication</b> channels (in order of fastest to slowest response): in-person, DM on
                Slack/Teams, phone, text message, ......, and lastly if really necessary, email.
              </li>
            </ul>
          </div>
          <div className='image'>
            <img src='images/04.jpg' alt='' />
          </div>
        </section>

        <section className='wrapper style1 align-center'>
          <div className='inner'>
            <h3>
              “A mind that is stretched by a new experience can never go back to its old dimensions.” – Oliver Wendell
              Holmes
            </h3>
          </div>

          <div className='gallery lightbox onscroll-fade-in style1 medium'>
            <article>
              <a href='images/gallery/fulls/01.jpg' className='image'>
                <img src='images/gallery/thumbs/01.jpg' alt='' />
              </a>
              <div className='caption'>
                <h3>Australian Open</h3>
                <p>Melbourne, Australia</p>
                <ul className='actions fixed'>
                  <li>
                    <span className='button small'>Details</span>
                  </li>
                </ul>
              </div>
            </article>
            <article>
              <a href='images/gallery/fulls/02.jpg' className='image'>
                <img src='images/gallery/thumbs/02.jpg' alt='' />
              </a>
              <div className='caption'>
                <h3>Machu Picchu</h3>
                <p>Cusco, Peru</p>
                <ul className='actions fixed'>
                  <li>
                    <span className='button small'>Details</span>
                  </li>
                </ul>
              </div>
            </article>
            <article>
              <a href='images/gallery/fulls/03.jpg' className='image'>
                <img src='images/gallery/thumbs/03.jpg' alt='' />
              </a>
              <div className='caption'>
                <h3>Lotus of Siam</h3>
                <p>Las Vegas, NV</p>
                <ul className='actions fixed'>
                  <li>
                    <span className='button small'>Details</span>
                  </li>
                </ul>
              </div>
            </article>
            <article>
              <a href='images/gallery/fulls/04.jpg' className='image'>
                <img src='images/gallery/thumbs/04.jpg' alt='' />
              </a>
              <div className='caption'>
                <h3>Gyeongbokgung</h3>
                <p>Seoul, South Korea</p>
                <ul className='actions fixed'>
                  <li>
                    <span className='button small'>Details</span>
                  </li>
                </ul>
              </div>
            </article>
            <article>
              <a href='images/gallery/fulls/05.jpg' className='image'>
                <img src='images/gallery/thumbs/05.jpg' alt='' />
              </a>
              <div className='caption'>
                <h3>Chiang Kai-shek</h3>
                <p>Taipei, Taiwan</p>
                <ul className='actions fixed'>
                  <li>
                    <span className='button small'>Details</span>
                  </li>
                </ul>
              </div>
            </article>
            <article>
              <a href='images/gallery/fulls/06.jpg' className='image'>
                <img src='images/gallery/thumbs/06.jpg' alt='' />
              </a>
              <div className='caption'>
                <h3>Cradle Mountain</h3>
                <p>Tasmania, Australia</p>
                <ul className='actions fixed'>
                  <li>
                    <span className='button small'>Details</span>
                  </li>
                </ul>
              </div>
            </article>
            <article>
              <a href='images/gallery/fulls/07.jpg' className='image'>
                <img src='images/gallery/thumbs/07.jpg' alt='' />
              </a>
              <div className='caption'>
                <h3>Grand Lisboa</h3>
                <p>Macau, China</p>
                <ul className='actions fixed'>
                  <li>
                    <span className='button small'>Details</span>
                  </li>
                </ul>
              </div>
            </article>
            <article>
              <a href='images/gallery/fulls/08.jpg' className='image'>
                <img src='images/gallery/thumbs/08.jpg' alt='' />
              </a>
              <div className='caption'>
                <h3>Kinkaku-ji</h3>
                <p>Kyoto, Japan</p>
                <ul className='actions fixed'>
                  <li>
                    <span className='button small'>Details</span>
                  </li>
                </ul>
              </div>
            </article>
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
                <b>You bring well thought-out problems and good decisions</b> to conversations. I believe the equality
                in distribution of conversational turn-taking is foundation to supporting a high-performing team.
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
              I do everything I can not to cancel a one-on-one with you, but I will have to reschedule from time to
              time. Unless you have a pressing need to update status, let's not use this time for a status update.
            </p>
            <p>
              If you have something urgent to discuss with me, don't wait for our one-on-one to happen, feel free to
              reach out to me earlier.
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
                I’m not engaged I’m actually quite open once I have the space. I will provide you my opinion once I'm
                ready.
              </li>
              <li>
                I will often multi-task so you may see me typing away, but it doesn’t mean I’m not paying attention to
                you. The only exception is one-on-ones where you will always have my undivided attention.
              </li>
              <li>
                I am awful at responding to emails so if you feel your email has gone into the Outlook void, please give
                me a gentle reminder.
              </li>
              <li>
                Provide me enough context when you ask me to do something. Before I commit I need the time to process
                new information. I commit deliberately.
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
              <li>
                <a href='https://github.com/eric-bach' className='icon brands style2 fa-github'>
                  <span className='label'>GitHub</span>
                </a>
              </li>
              <li>
                <a href='https://linkedin/in/ebach' className='icon brands style2 fa-linkedin-in'>
                  <span className='label'>LinkedIn</span>
                </a>
              </li>
            </ul>
            <p>
              &copy; <a href='https://ericbach.dev'>Eric Bach</a>. Design by: <a href='https://html5up.net'>HTML5 UP</a>
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
    </>
  );
}

export default App;
