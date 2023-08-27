import React from 'react'

export default function Box(props:any) {
    return (
        <div className='mt-5 mx-5 relative border rounded-lg border-solid' style={{ color: 'rgb(28, 92, 95)' }}>
            <div className=' rounded-lg w-full p-4'>
                <div className='flex justify-start items-start h-full'>
                    <img src={`src/assets/icons/${props.img}`} className='mr-2' alt="" />
                    <h1>{props.title}</h1>
                </div>
                <div className='flex justify-between mt-5'>
                    <div className='justify-start text-start'>
                        <h4>This month</h4>
                        <h1 className='text-5xl my-4'>{props.valueT}</h1>
                        <h6 className='text-start my-2'>{props.h6}: 8</h6>
                        <h6>Average {props.avg}: $150.20</h6>
                    </div>
                    <div className='justify-end text-start ms-2' style={{color:'#5A7894'}}>
                        <h4>Last month</h4>
                        <h1 className='text-5xl my-4'>{props.valueL}</h1>
                        <h6 className=' my-2'>{props.h6}: 8</h6>
                        <h6>Average {props.avg}: $150.20</h6>
                    </div>
                </div>
                <div className='my-10'>
                    {/* Graph */} Graph
                </div>
            </div>
        </div>
    )
}
