import React from 'react'

export default function EmTableRowsR(props:any) {
    return (
        <tr className='bg-white-600 shadow-lg  my-4'>
            <td className='flex p-4'><img src={`src/assets/icons/${props.img}`} className='mr-3' alt="" /><h5 className='text-start pt-1'>{props.name}</h5></td>
            <td><input type="range"
                disabled={true} value={50}
            /></td>
            <td style={{ color:'#25384D'}} className=' text-md w-1/3 text-start'>{props.goal}</td>
            <td className='flex'>
                <a href="" className='rounded me-3 button' style={{ backgroundColor: 'rgba(28, 92, 95, 1)' }}><img src="src/assets/icons/gift.svg" style={{ filter: 'brightness(900%)' }} className='p-1 px-2' alt="" /></a>
                <a href="" style={{ border: '1px solid rgb(210, 66, 82)' }} className='rounded hover:bg-red-100'><img src="src/assets/icons/close.svg" className='p-1 px-2 py-2' alt="" /></a>
            </td>
        </tr>
    )
}
