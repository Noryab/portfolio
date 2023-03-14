import React from 'react'
import Projectitem from './Projectitem'
import OneImg  from '@/assets/1.jpg'
import TwoImg  from '../assets/2.png'
import ThreeImg  from '../assets/3.png'
import FourImg  from '../assets/4.png'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-10'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rerum iste voluptates, quidem iure blanditiis, quasi esse fuga repellat quod excepturi enim quas sapiente cum doloremque animi cumque reprehenderit? Minus.</p>
        <div className='grid sm:grid-cols-2 gap-7'>        
            <Projectitem img={OneImg} title="1" />
            <Projectitem img={TwoImg} title="2" />
            <Projectitem img={ThreeImg} title="3"/>
            <Projectitem img={FourImg} title="4"/>
        </div>
    </div>
  )
}

export default Projects