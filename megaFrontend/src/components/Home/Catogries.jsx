import React, { useState } from 'react'
import { HomePageExplore } from '../../data/homepage-explore'
import Card from '../helperComponent/Card'
import Loading from '../helperComponent/Loading'

function Catogries() {
    const tabContent = [
        "Free",
        "New to Coding",
        "Most Popular",
        "Skill paths",
        "Career paths"
    ]

    const [tag, setTag] = useState(0)
    const [tagCourses, setTagCourses] = useState(HomePageExplore[0].courses)
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading)
    const [loading, setLoading] = useState(false)

    function setMyCard(i) {
        setLoading(true)
        setTimeout(() => {
            const value = HomePageExplore[i].tag
            setTag(i)
            const result = HomePageExplore.filter(e => e.tag === value)
            setTagCourses(result[0].courses)
            setCurrentCard(result[0].courses[0].heading)
            setLoading(false)
        }, [200])


    }

    function handleCard(selectedCard) {
        setCurrentCard(selectedCard)
    }

    return (
        <div className='flex flex-col gap-3 items-center'>
            <div className='text-4xl font-semibold text-center'>
                Unlock the Power of code
            </div>
            <div className='text-base font-normal text-center text-richblack-200'>
                Learn to Build Anything you can Imagine
            </div>
            <div className='flex flex-row gap-6 items-center bg-richblack-800 rounded-full shadow-[0px 2px rgb(225,255,255) border-white px-1 py-1 mt-5'>

                {
                    tabContent.map((e, i) => {
                        return (
                            <div
                                className={`text-[16px] flex flex-row gap-2 ${tag === i ? 'bg-richblack-900 text-richblack-5 font-medium' : 'text-richblack-600'} rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2`}
                                onClick={() => setMyCard(i)}
                                key={i}
                            >
                                {
                                    e
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className='lg:h-[50px]'></div>
            {
                loading ? <Loading /> 
                
                : 
                
                <div className='mx-auto item-center flex flex-row gap-6 -mb-[100px]'>
                    {
                        tagCourses.map((e, i) => <Card cardData={e} currentCard={currentCard} handleCard={handleCard} />)
                    }

                </div>
            }

        </div>
    )
}

export default Catogries