import React from 'react'
import Workitem from './Workitem'


const data = [{
    year:2018,
    title:"Softel",
    duration:"5 Years",
    description:"Data scientist - Backend developer: lorem ipsum. dolor sit amet cosectetur adipisicing elit."
},{
  year:2018,
  title:"Softel",
  duration:"5 Years",
  description:"Data scientist - Backend developer: lorem ipsum. dolor sit amet cosectetur adipisicing elit."
},{
  year:2018,
  title:"Softel",
  duration:"5 Years",
  description:"Data scientist - Backend developer: lorem ipsum. dolor sit amet cosectetur adipisicing elit."
}]


const Work = () => {   
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item, idx)=>(
      <Workitem key={idx} year={item.year} title={item.title} duration={item.duration} description={item.description} />
      ))}
    </div>
  )
}


export default Work