import React from 'react'

export default function EmTableRows(props:any) {
    return (
        <tr className='bg-white-600 shadow-lg  my-4'>
            <td className='flex p-4'><img src={`src/assets/icons/${props.img}`} className='mr-3' alt="" /><h5 className='text-start pt-1'>{props.name}</h5></td>
            <td style={{ color: ' rgb(28, 92, 95)' }} className=' text-md w-1/3 text-start'>{props.goal}</td>
            <td><input type="range"
                disabled={true} value={50}
            /></td>
            <td className='flex'>
                <a href="" className='rounded me-3' style={{ backgroundColor: 'rgba(28, 92, 95, 1)' }}><img src="src/assets/icons/gift.svg" style={{ filter: 'brightness(900%)' }} className='ms-2 mr-2 ' alt="" /></a>
                <a href="" style={{ border: '1px solid rgb(210, 66, 82)' }} className='rounded px-3 py-1'><img src="src/assets/icons/close.svg" alt="" /></a>
            </td>
        </tr>
    )
}
