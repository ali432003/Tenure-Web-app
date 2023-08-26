import React from 'react'

export default function EmTableRows(props:any) {
    return (
        <tr className='bg-white-600 shadow-lg  my-4'>
            <td className='flex p-4 w-1/3'><img src={`src/assets/icons/${props.img}`} className='mr-3' alt="" /><h5 className='text-start pt-1'>{props.name}</h5></td>
            <td style={{ color:'#25384D'}} className=' text-md   text-start'>{props.purch}</td>
            <td style={{ color:'#25384D'}} className=' text-md   text-start'>{props.deals}</td>
            <td style={{ color:'#25384D'}} className=' text-md   text-start'>{props.rupValue}</td>
            <td style={{ color:'#25384D'}} className=' text-md   text-start'>{props.chBack}</td>
            <td className='flex justify-start'>
                <img src={`src/assets/icons/${props.catimg}`} alt="" />
                <p style={{color: props.catCol}}>{props.cat}</p>
            </td>
        </tr>
    )
}
