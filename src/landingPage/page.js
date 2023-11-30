import { ChevronRightIcon } from '@heroicons/react/24/outline';
import bgBack from '../assets/netflix-background.jpg'
import Button from '../components/Button'
import LandingNav from './LandingNav';
import tv1 from '../assets/tv.png'
import tv2 from '../assets/tvImg2.png'
import tvid1 from '../assets/tvVideo1.m4v'
import tvid2 from '../assets/tvVideo2.m4v'
import strange from '../assets/strangeThings.jpg'
import child from '../assets/children.png'

import LandingBanner from '../components/LandingBanner';
import React from 'react';
const LandingPage = () => {
    const bannerData = [
        {
            title: 'Enjoy on your TV',
            para: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
            img: tv1,
            video: tvid1,
            row:false
        },
        {
            title: 'Download your shows to watch offline',
            para: 'Save your favourites easily and always have something to watch.',
            img: strange,
            video: '',
            row:true
        },
        {
            title: 'Watch everywhere',
            para: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
            img: tv2,
            video: tvid2,
            row:false
        },
        {
            title: 'Create profiles for kids',
            para: 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
            img: child,
            video: '',
            row:true
        },
    ]
    return (
        <div >
            <div style={{ backgroundImage: `url(${bgBack})` }} className='h-[100vh] w-full  flex justify-center items-center'>
                <div style={{ background: 'linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.2),rgba(0,0,0,0.9))' }} className='w-full h-full '>
            <LandingNav/>
                    <Button pX={'px-8'} pY={'py-4'} rounded={'rounded-md'}   textSize='text-2xl' font='font-semibold' borderRadius={6} >
                        <div className='flex gap-2 justify-center items-center'>
                            Get Started <ChevronRightIcon className='h-7 w-7' />
                        </div> 
            </Button>
         </div>
            </div>
            {bannerData.map((item, index) => (
                <React.Fragment key={index}>
                    <LandingBanner title={item.title} des={item.para} img={item.img} video={item.video} reverse={item.row ? 'flex-row-reverse' :''} />
               </React.Fragment>
           ))}
        </div>
    )
}

export default LandingPage