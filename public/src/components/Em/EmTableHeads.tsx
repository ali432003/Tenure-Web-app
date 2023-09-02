import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import './style.css';


export default function EmTableHeads(props: any) {


    var shouldShowMain;
    var shouldShowPurchase;
    var shouldShowReceiver;
    var shouldShowDashHeads;
    if (props.hkey === 'main') {
        shouldShowMain = true;
        shouldShowPurchase = false;
        shouldShowReceiver = false;
    }
    if (props.hkey === 'receiver') {
        shouldShowMain = false;
        shouldShowPurchase = false;
        shouldShowReceiver = true;
    }
    if (props.hkey === 'purchase') {
        shouldShowMain = false;
        shouldShowPurchase = true;
        shouldShowReceiver = false;
    }
    if (props.hkey === 'Dash') {
        shouldShowMain = false;
        shouldShowPurchase = false;
        shouldShowReceiver = false;
        shouldShowDashHeads = true;
    }
    return (
        <>
            {/* Main heads */}
            {shouldShowMain && (
                <>
                    <thead>
                        <tr className='bg-white-600 shadow-lg my-4'>
                            <th className='text-start w-1/4 p-4' style={{ color: '#25384D' }}>Employee</th>
                            <th className='flex justify-start mt-4 saveGoals cursor-pointer' style={{ color: '#25384D' }}>
                                <a>
                                    <Tippy content={<span>Hover on saving goals to see more info</span>} placement='bottom' animation="scale">
                                        <span className='flex'> Saving goal(s)<img src="src/assets/icons/i.svg" className='ml-2' alt="" /></span>
                                    </Tippy>

                                </a>
                            </th>

                            <th className='w-1/4' style={{ color: '#25384D'}}>Overall progress</th>
                            <th className='w-1/2'></th>
                        </tr>
                    </thead>
                </>
            )}

            {/* Receiver Heads */}
            {shouldShowReceiver && (
                <>
                    <thead>
                        <tr className='bg-white-600 shadow-lg my-4'>
                            <th className='text-start w-1/4 p-4' style={{ color: '#25384D' }}>Employee</th>
                            <th className='text-start w-1/4' style={{ color: '#25384D' }}>Overall progress</th>
                            <th className='w-1/4 text-start' style={{ color: '#25384D' }}>Total contributions received</th>
                            <th className='w-1/4'></th>
                        </tr>
                    </thead>
                </>

            )}

            {/* Purchase heads */}
            {shouldShowPurchase && (
                <>
                    <thead>
                        <tr className='bg-white-600 shadow-lg my-4'>
                            <th className='text-start w-1/4 p-4' style={{ color: '#25384D' }}>Brand</th>
                            <th className='text-start' style={{ color: '#25384D' }}>No. of purchases</th>
                            <th className='text-start' style={{ color: '#25384D' }}>Active deals</th>
                            <th className='text-start' style={{ color: '#25384D' }}>Total round-up value</th>
                            <th className='text-start' style={{ color: '#25384D' }}>Total cash-back value</th>
                            <th className='text-start' style={{ color: '#25384D' }}>Category</th>
                        </tr>
                    </thead>
                </>
            )}

            {/* Dashboard */}
            {shouldShowDashHeads && (
                <>
                    <thead>
                        <tr className='bg-white-600 shadow-lg my-4'>
                            <th className='text-start w-1/4 p-4' style={{ color: '#25384D' }}>Brand</th>
                            <th className='text-start' style={{ color: '#25384D' }}>Offer Title</th>
                            <th className='  text-start w-1/5' style={{ color: '#25384D' }}>Expiray-Date</th>
                            <th className='  text-start' style={{ color: '#25384D' }}>Category</th>
                        </tr>
                    </thead>
                </>
            )}


        </>
    );
}
