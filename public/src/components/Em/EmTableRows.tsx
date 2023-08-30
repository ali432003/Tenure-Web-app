import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import 'tippy.js/animations/scale.css'; 
import './style.css';








export default function EmTableRows(props: any) {




    var shouldShowMain;
    var shouldShowPurchase;
    var shouldShowReceiver;
    if (props.rkey === 'main') {
        shouldShowMain = true;
        shouldShowPurchase = false;
        shouldShowReceiver = false;
    }
    if (props.rkey === 'receiver') {
        shouldShowMain = false;
        shouldShowPurchase = false;
        shouldShowReceiver = true;
    }
    if (props.rkey === 'purchase') {
        shouldShowMain = false;
        shouldShowPurchase = true;
        shouldShowReceiver = false;
    }


    return (
        <>
            {/* main */}
            {shouldShowMain && (
                <tbody className='gap-x-7 gap-y-7'>
                    <tr className='bg-white-600 shadow-lg  my-4'>
                        <td className='flex p-4'><img src={`src/assets/icons/${props.img}`} className='mr-3' alt="" /><h5 className='text-start pt-1 cursor-pointer'>{props.name}</h5></td>
                        <td style={{ color: ' rgb(28, 92, 95)' }} className=' text-md w-1/3 text-start cursor-pointer hover:underline'>{props.goal}</td>
                        <td><input type="range"
                            disabled={true} value={50} //for overall progress
                        /></td>
                        <td className='flex'>
                            <Tippy content={<span>Make a contribution</span>} placement='bottom' animation="scale">
                                <a className='rounded me-3 button cursor-pointer' style={{ backgroundColor: 'rgba(28, 92, 95, 1)' }}><img src="src/assets/icons/gift.svg" style={{ filter: 'brightness(900%)' }} className='p-1 px-2' alt="" /></a>
                            </Tippy>
                            <Tippy content={<span>Remove Employee</span>} placement='bottom' animation="scale">
                                <a style={{ border: '1px solid rgb(210, 66, 82)' }} className='cross rounded hover:bg-red-100 cursor-pointer'><img src="src/assets/icons/close.svg" className='p-1 px-2 py-2' alt="" /></a>
                            </Tippy>
                        </td>
                    </tr>
                </tbody>
            )}



            {/* Receiver Rows */}
            {shouldShowReceiver && (
                <tbody className='gap-x-7 gap-y-7'>
                    <tr className='bg-white-600 shadow-lg  my-4'>
                        <td className='flex p-4'><img src={`src/assets/icons/${props.img}`} className='mr-3' alt="" /><h5 className='text-start pt-1'>{props.name}</h5></td>
                        <td><input type="range"
                            disabled={true} value={50}  //for overall progress
                        /></td>
                        <td style={{ color: '#25384D' }} className=' text-md w-1/3 text-start'>{props.goal}</td>
                        <td className='flex'>
                            <Tippy content={<span>Make a contribution</span>} placement='bottom' animation="scale">
                                <a className='rounded me-3 button cursor-pointer' style={{ backgroundColor: 'rgba(28, 92, 95, 1)' }}><img src="src/assets/icons/gift.svg" style={{ filter: 'brightness(900%)' }} className='p-1 px-2' alt="" /></a>
                            </Tippy>
                            <Tippy content={<span>Remove Employee</span>} placement='bottom' animation="scale">
                                <a style={{ border: '1px solid rgb(210, 66, 82)' }} className='cross rounded hover:bg-red-100 cursor-pointer'><img src="src/assets/icons/close.svg" className='p-1 px-2 py-2' alt="" /></a>
                            </Tippy>
                        </td>
                    </tr>
                </tbody>
            )}


            {/* Purchase Rows */}
            {shouldShowPurchase && (

                <tbody className='gap-x-7 gap-y-7'>
                    <tr className='bg-white-600 shadow-lg  my-4'>
                        <td className='flex p-4 w-1/3'><img src={`src/assets/icons/${props.img}`} className='mr-3' alt="" /><h5 className='text-start pt-1'>{props.name}</h5></td>
                        <td style={{ color: '#25384D' }} className=' text-md   text-start'>{props.purch}</td>
                        <td style={{ color: '#25384D' }} className=' text-md   text-start'>{props.deals}</td>
                        <td style={{ color: '#25384D' }} className=' text-md   text-start'>{props.rupValue}</td>
                        <td style={{ color: '#25384D' }} className=' text-md   text-start'>{props.chBack}</td>
                        <td className='flex justify-start'>
                            <img src={`src/assets/icons/${props.catimg}`} alt="" />
                            <p style={{ color: props.catCol }}>{props.cat}</p>
                        </td>
                    </tr>
                </tbody>

            )}
        </>
    )
}

