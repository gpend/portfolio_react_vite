
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'

function App() {
  return(
    <div className="container cont-main">
        <Header />
        <Intro />
        <section className="whatIDo dark" id='what_i_do'>
            <div className="WhatIDo section-header">
                <h2 className="WhatIDo title">What I do</h2>
            </div> 
            <div className="WhatIDo--items">
                <div className="WhatIDo--development WhatIDo--item">
                    <h3 className="whatIDo--development title">Development</h3>
                    <p className="whatIDo--development description">I'm a front-end developer with a passion for creating
                        beautiful, functional, and responsive websites. I'm looking for a position where I can continue to grow and learn.</p>
                    <p>In my past life I was a windows systems administrator specializing in scripting and automation.</p>
                </div>  {/* End of WhatIDo--development*/}
                {/*  <div className="WhatIDo--sysadmin WhatIDo--item">
                    <h3 className="whatIDo--sysadmin title">sysadmin</h3>
                    <p className="whatIDo--sysadmin description">In my past life I was an accomplished Windows Systems Admin 
                        specializing in scripting and automation.</p>*/}
                {/*  </div>  End of WhatIDo--sysadmin*/}
            </div>  {/* End of WhatIDo--items*/}
        </section> {/* End of whatIDo*/}
        <section className="WhoAmI light" id='who_am_i'>
            <div className="WhoAmI section-header">
                <h2 className="WhoAmI title">Who am I</h2>
                <h3 className="WhoAmI subtitle">Front-end developer based in Nashville, TN, USA</h3>
            </div>
            <p className="WhoAmI--description">Throughout my years working in IT, I have always enjoyed 
                scripting and developing applications to automate the tasks that keep things running 
                smoothly. I started scripting with PowerShell and have been extremely interested in 
                development since.</p>

                <p>As I move forward in my career, I am transitioning my scripting abilities to 
                    front-end development. For that reason, I am recently complete my Front-end 
                    developer certification studying HTML, CSS, JavaScript and React through Scrimba.</p>
                
                <p>In addition to my career in IT, I like to spend my time automating my home, 
                    hiking, spending time with my German Shepherd, advocating for safe bicycling, 
                    and volunteering. I recently answered a call to help a Humane Society in Kentucky
                        after tornados left many pets stranded and homeless. Whether it’s pets or people,
                        it is my belief that the most successful people are compassionate and eager to 
                        help where needed. Building relationships is the foundation of a great home 
                        life and a great work life.</p>
        </section> {/* End of WhoAmI*/}
        <section className="MyWork dark" id='my_work'>
            <div className="MyWork section-header">
                <h2 className ="MyWork title">My Work</h2>
                {/*  <h3 className="MyWork subtitle">Check out some of my work</h3>*/}
            </div>
            <div className="MyWork--items">
                <a href="https://gpend.github.io/color-picker/"><img className="MyWork item"src="/color_picker_s.png" alt="My Work Item"/></a>
                <a href="https://gpend.github.io/tip-calculator-app/"><img className="MyWork item"src="/splitter (Medium).jpg" alt="My Work Item"/></a>
                <a href="https://gpend.github.io/calc-app/"><img className="MyWork item"src="/calc (Medium).jpg" alt="My Work Item"/></a>
                <a href="https://gpend.github.io/receipe-site/"><img className="MyWork item"src="/batchlor_chow.png" alt="My Work Item"/></a>
                <a href="https://gpend.github.io/frontendMentor_stats_preview_card/"><img className="MyWork item"src="/stats-card (Medium).jpg" alt="My Work Item"/></a>
                <a href="https://gpend.github.io/pomodoro-timer/"><img className="MyWork item"src="/pomodoro (Medium).jpg" alt="My Work Item"/></a>
                <a href="https://gpend.github.io/password-creator/"><img className="MyWork item" src="/password.png" alt="My WorkItem"/></a>
            </div>
        </section> {/* End of MyWork*/}
        <footer className="dark" id='socials'>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://codepen.io/gpend">
                        <i className="fab fa-codepen"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://twitter.com/gpendleton">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/gpend">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.linkedin.com/in/gregpendleton/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>
                
            </ul>
        </footer>
    </div>
  )
}

export default App

{/* <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" classNameName="logo" alt="Vite logo" />
        </a> */}