
import './App.css'

function App() {
  return(
    <div class="container cont-main">
            <header>
                <div class="devGreg Logo"><img src="#" alt="devgreg logo"/></div>
                <button class="nav-toggle"></button>
            </header>
            <section class="intro light">
                <h1 class="intro name">Hi, I'm <strong>Greg Pendleton</strong></h1>
                <h2 class="intro title">Front-end Developer</h2>
                <img src="/GregPendleton_20200220_0024_SQweb.jpg" alt="me"/>
            </section>  {/* <!-- End of intro --> */}
            <section class="whatIDo dark">
                <div class="WhatIDo section-header">
                    <h2 class="WhatIDo title">What I do</h2>
                </div> 
                <div class="WhatIDo--items">
                    <div class="WhatIDo--development WhatIDo--item">
                        <h3 class="whatIDo--development title">Development</h3>
                        <p class="whatIDo--development description">I'm a front-end developer with a passion for creating
                            beautiful, functional, and responsive websites. I'm looking for a position where I can continue to grow and learn.</p>
                        <p>In my past life I was a windows systems administrator specializing in scripting and automation.</p>
                    </div>  {/*<!-- End of WhatIDo--development -->*/}
                    {/* <!-- <div class="WhatIDo--sysadmin WhatIDo--item">
                        <h3 class="whatIDo--sysadmin title">sysadmin</h3>
                        <p class="whatIDo--sysadmin description">In my past life I was an accomplished Windows Systems Admin 
                            specializing in scripting and automation.</p> --> */}
                   {/* <!-- </div>  End of WhatIDo--sysadmin --> */}
                </div>  {/*<!-- End of WhatIDo--items -->*/}
            </section> {/*<!-- End of whatIDo --> */}
            <section class="WhoAmI light">
                <div class="WhoAmI section-header">
                    <h2 class="WhoAmI title">Who am I</h2>
                    <h3 class="WhoAmI subtitle">Front-end developer based in Nashville, TN, USA</h3>
                </div>
                <p class="WhoAmI--description">Throughout my years working in IT, I have always enjoyed 
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
            </section> {/*<!-- End of WhoAmI --> */}
            <section class="MyWork dark">
                <div class="MyWork section-header">
                    <h2 class ="MyWork title">My Work</h2>
                    {/* <!-- <h3 class="MyWork subtitle">Check out some of my work</h3> --> */}
                </div>
                <div class="MyWork--items">
                    <a href="https://gpend.github.io/color-picker/"><img class="MyWork item"src="/color_picker_s.png" alt="My Work Item"/></a>
                    <a href="https://gpend.github.io/tip-calculator-app/"><img class="MyWork item"src="/splitter (Medium).jpg" alt="My Work Item"/></a>
                    <a href="https://gpend.github.io/calc-app/"><img class="MyWork item"src="/calc (Medium).jpg" alt="My Work Item"/></a>
                    <a href="https://gpend.github.io/receipe-site/"><img class="MyWork item"src="/batchlor_chow.png" alt="My Work Item"/></a>
                    <a href="https://gpend.github.io/frontendMentor_stats_preview_card/"><img class="MyWork item"src="/stats-card (Medium).jpg" alt="My Work Item"/></a>
                    <a href="https://gpend.github.io/pomodoro-timer/"><img class="MyWork item"src="/pomodoro (Medium).jpg" alt="My Work Item"/></a>
                    <a href="https://gpend.github.io/password-creator/"><img class="MyWork item" src="/password.png" alt="My WorkItem"/></a>
                </div>
            </section> {/*<!-- End of MyWork --> */}
            <footer class="dark">
                <ul class="social-list">
                    <li class="social-list__item">
                        <a class="social-list__link" href="https://codepen.io/gpend">
                            <i class="fab fa-codepen"></i>
                        </a>
                    </li>
                    <li class="social-list__item">
                        <a class="social-list__link" href="https://twitter.com/gpendleton">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li class="social-list__item">
                        <a class="social-list__link" href="https://github.com/gpend">
                            <i class="fab fa-github"></i>
                        </a>
                    </li>
                    <li class="social-list__item">
                        <a class="social-list__link" href="https://www.linkedin.com/in/gregpendleton/">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    
                </ul>
            </footer>
        </div>
  )
}

export default App

{/* <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a> */}