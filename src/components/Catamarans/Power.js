import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Yacht = () => {
    return (
        <div id='SecondYachtPage' className='TheContainerSingleYacht'>
            {/* <img className='h-full z-0' src={Image1} alt="" /> */}
            <div className='pb-12 text-white grid w-full h-full content-end  items-center px-4'>
                <div className='mb-6'> 
                    <h1 className='text-5xl font-bold'>Power </h1>
                    <h1 className='text-5xl font-bold'>Catamaran </h1>
                </div>
                <p className='flex items-center font-semibold'>scroll <AiOutlineArrowRight></AiOutlineArrowRight></p>
             
                <div className='block'>

                </div>
            </div>            
                
        </div>
    )
}

const FirstYachtPage = () => {
    return (
        <div id='SecondYachtPage' className='TheContainerSingleYacht'>
            <div className='pb-16 text-white grid w-full h-[100vh] content-end items-center px-10'>
             
                <li>sail surface 150 m2</li>
                <li>full Displacement 9 Tn</li>
                <li> centerline Beam  5.7 m</li>
                <li>sail surface 150 m2</li>
                <li>full Displacement 9 Tn</li>
                <li> centerline Beam  5.7 m</li>
                <div className='block'>
                <div className=''>
                    <h1 className='text-5xl font-bold'>Experience.  </h1>
                </div>
                </div>
            </div>
          
        </div>
    )
}
const SecondYachtPage = () => {
    return (
        <div id='SecondYachtPage' className='TheContainerSingleYacht'>
            <div className='pb-16 text-white grid w-full h-[100vh] content-end items-center px-10'>
             
                <li>sail surface 150 m2</li>
                <li>full Displacement 9 Tn</li>
                <li> centerline Beam  5.7 m</li>
                <li>sail surface 150 m2</li>
                <li>full Displacement 9 Tn</li>
                <li> centerline Beam  5.7 m</li>
                <div className='block'>
                <div className=''>
                    <h1 className='text-5xl font-bold'>Different.  </h1>
                </div>
                </div>
            </div>
          
        </div>
    )
}
const ThirdYachtPage = () => {
    return (
        <div  className='TheContainerSingleYacht bg-MyBlack'>
            <div className='pt-32 text-white grid w-full h-[100vh] content-start items-center px-4'>
            <div className=''>
                    <h1 className='text-5xl font-bold mb-6'>Our plans.  </h1>
                    <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi enim nihil dolores debitis veritatis autem repellat? Optio, eum modi, dolorem voluptate delectus exercitationem dicta quo vero ullam eveniet assumenda doloribus?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi enim nihil dolores debitis veritatis autem repellat? Optio, eum modi, dolorem voluptate delectus exercitationem dicta quo vero ullam eveniet assumenda doloribus?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi enim nihil dolores debitis veritatis autem repellat? Optio, eum modi, dolorem voluptate delectus exercitationem dicta quo vero ullam eveniet assumenda doloribus?</p>
                </div>
               
               </div>
          
        </div>
    )
}


function Power() {
    return (
        <div className='HomeSingleYacht'>

<Navbar></Navbar>
            <Yacht ></Yacht>
            <FirstYachtPage ></FirstYachtPage>
            <SecondYachtPage ></SecondYachtPage>
            <ThirdYachtPage ></ThirdYachtPage>
        </div>
    )
}

export default Power