import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import CTAbutton from "../helperComponent/button"
import Banner from "../../assets/Images/banner.mp4"
import CodeBlocks from '../helperComponent/codeBlocks'
import Timeline from './Timeline'
import Calender from './calender'
import Instructor from './Instructor'
import Review from './review'
import Footer from './Footer'
import Catogries from './Catogries'

function Home() {
    return (
        <div>
            {/* section1 */}
            <div className='group relative mx-auto flex w-9/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white'>
                <div className='mx-auto rounded-full bg-richblack-600 font-bold transition-all duration-200 hover:scale-90 w-fit'>
                    <div className='flex flex-row items-center gap-2 px-5 py-[5px] cursor-pointer group-hover:bg-richblack-900 transition-all duration-200'>
                        <p>Become an Instructor </p>
                        <FaArrowRight />
                    </div>
                </div>

                <div className='mx-auto font-semibold capitalize text-4xl'>
                    Empower your feature with <span className='font-bold bg-gradient-to-b from-[richblue-200] to-[richblue-900] text-richblue-200'> Coding Skills </span>
                </div>

                <div className='w-[90] text-center text-lg font-bold text-richblack-300'>
                    With our online coding courses, you can learn at your own pace, from
                    anywhere in the world, and get access to a wealth of resources,
                    including hands-on projects, quizzes, and personalized feedback from
                    instructors.
                </div>

                <div className='flex flex-row gap-7 mt-8'>
                    <CTAbutton active={true} linkto="/login" >
                        Learn More
                    </CTAbutton>

                    <CTAbutton active={false} linkto="/signup">
                        Book a Demo
                    </CTAbutton>
                </div>

                <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
                    <video
                        className="shadow-[15px_15px_rgba(255,255,255)]"
                        muted
                        loop
                        autoPlay
                    >
                        <source src={Banner} type="video/mp4" />
                    </video>
                </div>


                <div>
                    <CodeBlocks
                        position={"row"}
                        heading={
                            <div className="text-4xl font-semibold">
                                Unlock your
                                <span className='font-bold bg-gradient-to-b from-[richblue-200] to-[richblue-900] text-richblue-200'> Coding Potential  </span>
                                with our online courses.
                            </div>
                        }
                        subheading={
                            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        }
                        ctabutton1={{
                            btnText: "Try it Yourself",
                            linkto: "/signup",
                            active: true,
                        }}
                        ctabutton2={{
                            btnText: "Learn More",
                            linkto: "/signup",
                            active: false,
                        }}
                        codeColor={"text-yellow-25"}
                        codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}

                    >
                    </CodeBlocks>
                </div>

                <div>
                    <CodeBlocks
                        position={"row-reverse"}
                        heading={
                            <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                                Start
                                <span className='font-bold bg-gradient-to-b from-[richblue-200] to-[richblue-900] text-richblue-200'> coding </span>
                                in seconds.
                            </div>
                        }
                        subheading={
                            "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                        }
                        ctabutton1={{
                            btnText: "Continue Lesson",
                            link: "/signup",
                            active: true,
                        }}
                        ctabutton2={{
                            btnText: "Learn More",
                            link: "/signup",
                            active: false,
                        }}
                        codeColor={"text-white"}
                        codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                    />
                </div>
                <Catogries></Catogries>
            </div>


            {/* section2 */}
            <div className='bg-pure-greys-5 text-richblack-700'>
                <div className="homepage_bg h-[320px]">
                    {/* Explore Full Catagory Section */}
                    <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8" style={{
                        backgroundImage: "url(../../assets/Images/bghome.svg)"
                    }}>
                        <div className="lg:h-[150px]"></div>
                        <div className="flex flex-row gap-7 text-white lg:mt-8">
                            <CTAbutton active={true} linkto={"/signup"}>
                                <div className="flex items-center gap-2">
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>
                            </CTAbutton>
                            <CTAbutton active={false} linkto={"/login"}>
                                Learn More
                            </CTAbutton>
                        </div>
                    </div>
                </div>



                <div className='flex flex-row justify-between w-10/12 mx-auto'>
                    <div className='text-4xl font-semibold w-[45%]'>
                        Get the skills you need for a <span className='font-bold text-blue-200'>job that is in demand </span>.
                    </div>
                    <div className='w-[40%] flex flex-col items-start gap-8'>
                        <div className='text-[17px]'>
                            The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                        </div>
                        <div>
                            <CTAbutton active={true} linkto="/signup">
                                Learn More
                            </CTAbutton>
                        </div>
                    </div>
                </div>



                <Timeline />

                <Calender />
            </div>

            <div className='mt-5'>
                <Instructor />
                <Review />
            </div>

            <Footer></Footer>

            {/* section3 */}
        </div>
    )
}

export default Home