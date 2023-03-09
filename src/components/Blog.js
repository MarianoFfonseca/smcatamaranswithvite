import React from 'react'
import Navbar from './Navbar'
import {motion} from 'framer-motion'
function Blog() {
  return (
    <div className='bg-MyBlack home'>
        <Navbar />
      
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}} id='BlogPage'  className='TheContainer'>
            <div className='pb-16 text-center text-white grid w-full h-[100vh] content-center items-center px-10'>
                <div className='mb-4'>
                    <h1 className='text-7xl font-bold'>News  </h1>
                    <h1 className='text-lg'>Everything we do is here.  </h1>
                </div>
            </div>
          
        </motion.div>
        <div >
            <div className='mt-16 text-white grid w-full pb-16 content-start space-y-6 px-4'>
              <div>
                <h1 className='text-2xl font-semibold '>New motors in the 
industry</h1>
                <p className='underline'>read more</p>
                </div>
              <div>
                <h1 className='text-2xl font-semibold '>More deals</h1>
                <p className='underline'>read more</p>
                </div>
              <div>
                <h1 className='text-2xl font-semibold '>The fastes catamran in the world</h1>
                <p className='underline'>read more</p>
                </div>
<div className='text-white text-center underline'>load more</div>
            </div>
       
        </div>
    
    </div>
  )
}

export default Blog