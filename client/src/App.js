import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
    <body className="max-w-screen overflow-x-hidden min-h-[100vh]">
    <header className="bg-silver">
        <div id="mob-nav" className="mobile-only-nav w-full md:hidden hidden bg-silver transition-all duration-[1.2s]">
            <div className="nav-links  md:flex items-center ">
                <ul className="w-full flex gap-9 font-normal flex-col items-center">
                    <li><a href="">Home</a></li>
                    <li><a href="#Service">Service</a></li>
                    <li><a href="#Feature">Feature</a></li>
                    <li><a href="#testimonial">Testimonial</a></li>
                </ul>
            </div>
            <div className="nav-cta flex gap-4 w-full justify-center mt-4">
                <a className="text-white bg-brand_primary pr-4 pl-4 pt-2 pb-2 rounded-sm text  md:block " href="/">Contact us</a>
            </div>
        </div>
        <nav className="flex lg:w-full justify-between p-7">
            <div className="logo flex items-center">
                <a href="">
                    <img src="assets/nexcent-logo-black.png" alt="nexcent-logo" />
                </a>
            </div>
            <div className="nav-links hidden  md:flex items-center ">
                <ul className=" flex gap-9 font-normal ">
                    <li><a href="">Home</a></li>
                    <li><a href="#Service">Service</a></li>
                    <li><a href="#Feature">Feature</a></li>
                    <li><a href="#testimonial">Testimonial</a></li>
                </ul>
            </div>
            <div className="nav-cta flex gap-4 ">
                <a className="text-white bg-brand_primary pr-4 pl-4 pt-2 pb-2 rounded-sm text hidden md:block" href="http://localhost:3001/"> Register Now <i class="bi bi-arrow-right"></i>
                </a>
            </div>


            <div className="reponsive-hamburger-toggler md:hidden ">
                <button id="nav-toggle-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="2rem" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </button>
            </div>

        </nav>
    </header>
    <section className="hero bg-silver w-screen p-4 flex justify-center flex-wrap items-center min-h-[75vh]">
        <div className="transition-all duration-[1.5s] opacity-1 txt-content md:w-2/3 w-full grid items-center" data-observerable_elem>
            <h1 className="text-6xl font-bold text-d_grey text-center md:text-left">Lessons and insights <br /> <span className="text-brand_primary"> from 8 years</span></h1>

            <p className="mt-6 mb-6 text-center md:text-left">Where to grow your business as a photographer: site or social media?</p>

            <a className="text-white bg-brand_primary pr-4 pl-4 pt-2 pb-2 rounded-sm text w-[100%] flex justify-center self-end md:w-[8rem] mb-12" href="/Contact/">Register</a>
        </div>
        <img data-observerable_elem src="assets/illustrations/Illustrationhero-page-person-standing.png" alt="" className="transition-all opacity-1 max-h-96 duration-[1.2s]" />
    </section>

    <section className="clients">
        <h1 className="text-center text-3xl mt-4 font-semibold opacity-1 transition-all duration-[1.3s]" data-observerable_elem>Our clients are from</h1>
        <p className="text-center opacity-1 transition-all duration-[1.3s]" data-observerable_elem>We have been working with some Fortune 500+ clients</p>

        <div className="client-logos-con flex w-full justify-evenly mt-16 mb-16 flex-wrap">
            <img className="p-6 min-w-32 opacity-1 transition-all duration-1000" src="assets/brand_logos/Logo-1.png" data-observerable_elem alt="logo-1" />

            <img className="p-6 min-w-32 opacity-1 transition-all duration-1000 delay-100" src="assets/brand_logos/Logo-2.png" data-observerable_elem alt="logo-2" />

            <img className="p-6 min-w-32 opacity-1 transition-all duration-1000 delay-200" src="assets/brand_logos/Logo-3.png" data-observerable_elem alt="logo-3" />

            <img className="p-6 min-w-32 opacity-1 transition-all duration-1000 delay-300" src="assets/brand_logos/Logo-4.png" data-observerable_elem alt="logo-4" />

            <img className="p-6 min-w-32 opacity-1 transition-all duration-1000 delay-400" src="assets/brand_logos/Logo-5.png" data-observerable_elem alt="logo-5" />

            <img className="p-6 min-w-32 opacity-1 transition-all duration-1000 delay-500" src="assets/brand_logos/Logo-6.png" data-observerable_elem alt="logo-6" />

        </div>
    </section>


    <section className="community grid justify-center mt-14" id="Service">
     
        <h1 className="text-center text-3xl mt-4 font-semibold opacity-1 transition-all duration-[1.3s]" data-observerable_elem>Manage your entire community <br /> in a single system</h1>
        <p className="text-center mt-8 mb-8 opacity-1 transition-all duration-[1.3s]" data-observerable_elem>Who is Nextcent suitable for?
        </p>

        <div className="flex w-screen justify-evenly flex-wrap gap-8">
            <div className="opacity-1.transition-all duration-[1.3s] w-[20%] min-w-[20rem]  grid justify-center ml-8" data-observerable_elem="">

                <img className="m-6" src="assets/icons/community/Icon-1.png" alt="Community Icon 1" />
                <h1 className="text-2xl font-semibold mb-4 ">
                    Membership Organisations
                </h1>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>

            <div className="opacity-1.transition-all duration-[1.3s] w-[20%] min-w-[20rem]  grid justify-center ml-8" data-observerable_elem="">

                <img className="m-6" src="assets/icons/community/Icon-2.png" alt="Community Icon 2" />
                <h1 className="text-2xl font-semibold mb-4 ">National Associations</h1>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>

            <div className="opacity-1.transition-all duration-[1.3s] w-[20%] min-w-[20rem]  grid justify-center ml-8" data-observerable_elem="">

                <img className="m-6" src="assets/icons/community/Icon-3.png" alt="Community Icon 3" />
                <h1 className="text-2xl font-semibold mb-4 ">Clubs And Groups</h1>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
        </div>
    </section>

    <section className=" w-screen flex justify-evenly mt-[10rem] min-h-[35vh] flex-wrap">

        <div className="w-100% md:w-[40%] flex justify-center">
            <img data-observerable_elem src="assets/illustrations/user smart phone.png" alt="Person using smartphone" className="w-[100%] max-w-[25rem] md:w-70% opacity-1 transition-all duration-[1s]" />
        </div>

  
        <div className="min-h-[100%] flex flex-col justify-center w-10/12 md:w-5/12 items-center">
            <h1 className="text-2xl font-semibold mb-6 opacity-1 transition-all duration-[1s]" data-observerable_elem>Elevate Your Local Business Marketing with Nexcent</h1>
            <p className="opacity-1 transition-all duration-[1s]" data-observerable_elem>At Nexcent, we go beyond the ordinary to empower local businesses with unparalleled marketing solutions. Our commitment to excellence and a rich history of collaboration with Fortune 500+ clients sets us apart as a leading marketing agency. Explore the distinctive features that make Nexcent the ideal choice for your business growth.</p>
        </div>
    </section>


    <section className="bg-silver min-h-[25rem] w-screen flex justify-evenly items-center flex-wrap mt-12" id="Feature">
  
        <div className="w-90% md:-40%">
            <h1 className="text-3xl font-bold text-d_grey text-center md:text-left pb-3">Helping a local <br /> <span className="text-brand_primary"> business reinvent itself </span></h1>

            <p className="text-center md:text-left">We reached here with our hard work and dedication</p>
        </div>

      
        <div className="grid grid-cols-2 w-[90vw] md:w-[35vw] justify-end gap-8">
            <div className="flex w-[30%] gap-4">
                <img src="assets/icons/achivements/Icon-memebers.png" alt="" className="h-[2rem]" />
                <div>
                    <h3 className="text-xl font-semibold"  data-textcounter="534"></h3>
                    <p>Members</p>
                </div>
            </div>
            <div className="flex w-[30%] gap-4">
                <img src="assets/icons/achivements/Icon-clubs.png" alt="" className="h-[2rem]" />
                <div>
                    <h3 className="text-xl font-semibold" data-textcounter="328"></h3>
                    <p>Clubs</p>
                </div>
            </div>
            <div className="flex w-[30%] gap-4">
                <img src="assets/icons/achivements/Icon-event-bookings.png" alt="" className="h-[2rem]" />
                <div>
                    <h3 className="text-xl font-semibold" data-textcounter="867"></h3>
                    <p>Bookings</p>
                </div>
            </div>
            <div className="flex w-[30%] gap-4">
                <img src="assets/icons/achivements/Icon-payments.png" alt="" className="h-[2rem]" />
                <div>

                    <h3 className="text-xl font-semibold" data-textcounter="436"></h3>
                    <p>Payments</p>
                </div>
            </div>
        </div>
    </section>

    <section className="flex w-screen flex-wrap justify-evenly items-center flex-col md:flex-row mt-8 gap-4" >
       
        <img className="md:w-[45%] max-w-[25rem] opacity-1 transition-all duration-[1.2s]" src="assets/illustrations/login-mobile.png" data-observerable_elem alt="" />


        <div className=" md:w-[45%] p-8 grid items-center gap-4">
            <h1 className="text-2xl font-semibold opacity-1 transition-all duration-[1.2s]" data-observerable_elem >Dedicated Support Team</h1>
            <p className="opacity-1 transition-all duration-[1.2s]" data-observerable_elem >Experience unparalleled support with Nexcent's dedicated team of experts. From the initial consultation to ongoing campaign management, our responsive support ensures your queries are addressed promptly. Your success is our success, and we're committed to providing the assistance you need, when you need it.</p>
            <a className="text-white bg-brand_primary pr-4 pl-4 pt-2 pb-2 rounded-sm text min-w-[7rem] opacity-1 transition-all duration-[1.2s] flex justify-center" data-observerable_elem  href="../contact">Contact us</a>
        </div>
    </section>


    <section className="flex justify-evenly items-center mt-32 flex-wrap bg-silver pt-4" id="testimonial">
        <img src="assets/peoples/sarah.svg" className="md:w-[30%] w-80% max-w-[21rem] opacity-1 transition-all duration-[1.2s]" alt="" data-observerable_elem />

     
        <div className="w-[90%] md:w-[55%] grid gap-4 p-8">
            <p className="text-justify opacity-1 transition-all duration-[1.2s]" data-observerable_elem>Partnering with Nexcent has transformed my business. Their tailored marketing strategies not only resonated with our local audience but also delivered exceptional results. The team's collaborative approach and transparent communication made the entire process seamless. What sets Nexcent apart is their dedication to client satisfaction—I've experienced a significant increase in customer engagement and brand visibility. Nexcent is more than an agency; they are genuine partners in local business success.</p>

            <h2 data-observerable_elem className="opacity-1 transition-all duration-[1.2s]"> <span className="font-semibold text-brand_primary">— Sarah Thompson</span>

                <p className="text-d_grey">Real estate broker, Sukkur</p>
            </h2>

            <div className="flex gap-6 mt-12 items-center flex-wrap">
                <img data-observerable_elem src="assets/brand_logos/Logo-1.png" alt="" className="h-12 opacity-1 transition-all duration-[1.2s]" />

                <img data-observerable_elem src="assets/brand_logos/Logo-2.png" alt="" className="h-12 opacity-1 transition-all duration-[1.2s]" />

                <img data-observerable_elem src="assets/brand_logos/Logo-3.png" alt="" className="h-12 opacity-1 transition-all duration-[1.2s]" />

                <img data-observerable_elem src="assets/brand_logos/Logo-4.png" alt="" className="h-12 opacity-1 transition-all duration-[1.2s]" />

                <img data-observerable_elem src="assets/brand_logos/Logo-5.png" alt="" className="h-12 opacity-1 transition-all duration-[1.2s]" />

                <img data-observerable_elem src="assets/brand_logos/Logo-6.png" alt="" className="h-12 opacity-1 transition-all duration-[1.2s]" />

                <p data-observerable_elem className="text-brand_primary opacity-1 transition-all duration-[1.2s]">And more...</p>
            </div>
        </div>
    </section>


    <section className="w-screen h-[30vh] flex flex-col justify-center items-center p-4 gap-3">
        <h1 className="text-4xl  font-bold text-center pt-4 hover:decoration-dotted hover:decoration-brand_primary hover:underline underline-offset-4">Caring is the <span className="text-brand_primary">new marketing</span></h1>
        <p className="text-center ">In a world inundated with messages and advertisements, Nexcent stands out by transformative approach</p>
    </section>

   
    <section className="bg-silver h-[30vh] flex items-center justify-center w-screen flex-col md:flex-row md:justify-evenly gap-12 md:gap-0">
        <h1 className="text-4xl">Do not believe it, <br /> Till you try it!</h1>

        <a className="text-white bg-brand_primary pr-4 pl-4 pt-2 pb-2 rounded-sm text flex justify-center gap-[2rem]  transition-all hover:gap-[2.5rem] duration-[.5s]  items-center" href="/Contact/">
            Book a demo

            <svg xmlns="http://www.w3.org/2000/svg" width="1rem " fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
              </svg>
        </a>
    </section>

   
    <footer className="min-h-80 w-screen flex bg-brand_black text-white items-center justify-center md:justify-center flex-col md:flex-row gap-12 md:gap-0">
   
        <div className="grid gap-3 w-[100%] justify-center md:w-[55%] md:justify-start">

         
            <img src="/assets/nexcent-logo-white.png" alt="Nexcent" className="w-44" />

            <p>Copyright &copy; <span id="footer_current_year"></span> Nexcent ltd. <br /> All rights reserved</p>
        </div>

        <div className="grid gap-4">
            <h1 className="font-semibold text-xl text-center">Stay up-to date</h1>
            
            <form className="flex gap-3 p-3  flex-col" id="form_email" onsubmit=" document.getElementById('form_email_message').classNameList.remove('hidden'); this.reset(); return false">
                <div className="flex rounded-md p-3 bg-d_grey">

                    <input required className="focus-visible:outline-none bg-d_grey" placeholder="Your email address" type="email" name="email_inp" id="" />
                    <button id="form_email_submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                          </svg>
                    </button>
                </div>

                <input id="form_email_message" type="text"  className="text-brand_primary bg-brand_black font-semibold text-xl hidden focus-visible:outline-none" name="message" readonly value="Thank you for submission!" />
            </form>
        </div>
    </footer>

</body>
    </div>
  );
}

export default App;
