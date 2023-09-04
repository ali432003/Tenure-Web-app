import React from 'react'
import Slidebar from '../../components/Slidebar/Slidebar'

export default function Deals() {



  return (
        <div className='w-full'>
            Deals
        </div>
  )

  return (
    <div className='flex h-full'>
        {/* <Slidebar/> */}
        <div className='w-full'>
            {/* Deals */}
            <div className='container flex flex-col h-3/5 w-1/3 mx-auto mt-9 rounded-t-lg shadow-lg' style={{ backgroundColor: "#FFFFFF",position:"absolute"}}>
              <div className='bg-#DCEDF6-300 w-full h-auto rounded-t-lg py-1' style={{backgroundColor:"#38857B",color:"white",fontSize:"16px"}}>
                Saving goals
              </div>
              <div className='grid grid-rows-2 grid-cols-2 h-full m-4 my-9 gap-3'>
                <div className='bg-green-200 rounded-lg ' style={{backgroundColor:"#FEF9DE"}}>
                  <h3 className='text-start ms-2 mt-4' style={{color:"#25384D",fontSize:"16px"}}>First Home</h3>
                  <p className='text-start ms-2 mt-1' style={{color:"#25384D",fontSize:"12px"}}>Progress</p>
                  <div style={{backgroundColor:"#DCEDF6"}} className='w-5/6 h-5 justify-center ms-2 rounded-3xl my-2'>
                    <div className='w-1/6 rounded-full h-full' style={{backgroundColor:"#38857B"}}></div>
                  </div>
                </div>
                <div className='bg-green-200 rounded-lg' style={{backgroundColor:"#DCF8EA"}}>
                  <h3 className='text-start ms-2 mt-4' style={{color:"#25384D",fontSize:"16px"}}>Vacation</h3>
                  <p className='text-start ms-2 mt-1' style={{color:"#25384D",fontSize:"12px"}}>Progress</p>
                  <div style={{backgroundColor:"#DCEDF6"}} className='w-5/6 h-5 justify-center ms-2 rounded-3xl my-2'>
                    <div className='w-1/6 rounded-full h-full' style={{backgroundColor:"#38857B"}}></div>
                  </div>
                </div>
                <div className='bg-green-200 rounded-lg' style={{backgroundColor:"#DCF8EA"}}>
                  <h3 className='text-start ms-2 mt-4' style={{color:"#25384D",fontSize:"16px"}}>Christmas sho...</h3>
                  <p className='text-start ms-2 mt-1' style={{color:"#25384D",fontSize:"12px"}}>Progress</p>
                  <div style={{backgroundColor:"#DCEDF6"}} className='w-5/6 h-5 justify-center ms-2 rounded-3xl my-2'>
                    <div className='w-1/6 rounded-full h-full' style={{backgroundColor:"#38857B"}}></div>
                  </div>
                </div>
                <div className='bg-green-200 rounded-lg' style={{backgroundColor:"#FEF9DE"}}>
                  <h3 className='text-start ms-2 mt-4' style={{color:"#25384D",fontSize:"16px"}}>New car</h3>
                  <p className='text-start ms-2 mt-1' style={{color:"#25384D",fontSize:"12px"}}>Progress</p>
                  <div style={{backgroundColor:"#DCEDF6"}} className='w-5/6 h-5 justify-center ms-2 rounded-3xl my-2'>
                    <div className='w-1/6 rounded-full h-full' style={{backgroundColor:"#38857B"}}></div>
                  </div>
                </div>
                
              </div>
            </div>

        </div>
      
    </div>
  )
}
