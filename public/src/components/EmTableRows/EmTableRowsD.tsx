import React from 'react'

export default function  EmTableRowsD(props:any) {
    return (
        <tr className='bg-white-600 shadow-lg  my-4'>
            <td className='flex p-4 w-1/3'><img src={`src/assets/icons/${props.img}`} className='mr-3' alt="" /><h5 className='text-start pt-1'>{props.name}</h5></td>
            <td style={{ color:'#25384D'}} className='text-md font-bold text-start'>{props.title}</td>
            <td style={{ color:'#25384D'}} className=' text-md   text-start'>{props.exp}</td>
            <td className='flex justify-start'>
                <img src={`src/assets/icons/${props.catimg}`} alt="" />
                <p style={{color: props.catCol}}>{props.cat}</p>
            </td>
        </tr>
    )
}
