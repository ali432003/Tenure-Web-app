import React from 'react'
import './Emty.css';
import Button from '../../components/Button/Button';


function Empty() {

    return (
        <div className='flex justify-self-center'>
            <div className='w-1/6  min-h-screen' style={{ backgroundColor: "rgb(56 133 123 /1)", color: 'white' }}>
                {/* slide bar */}
                <div className='mt-5 text-center'>
                    <img src="src/assets/icons/logo_icon_small_1.svg" className='ms-4' alt="" style={{ position: 'absolute' }} />
                    <h1 >Tenure</h1>
                </div>
                <div style={{ marginTop: '50%' }}>
                    <div className='pb-8'>
                        <a href="" className='text-white font-semibold text-center text-lg p-3 transition-colors'>
                            <img src="src/assets/icons/logo_icon_small_1.svg" width={'2%'} className='ms-10' style={{ position: 'absolute' }} alt="" />Home
                        </a>
                    </div>
                    <div className='pb-8'>
                        <a href="" className='text-white font-semibold text-center text-lg p-3 transition-colors ms-9'>
                            <img src="src/assets/icons/employees_2.svg" width={'2%'} className='ms-10' style={{ position: 'absolute' }} alt="" />Employee</a>
                    </div>
                    <div className='pb-8'>
                        <a href="" className='text-white font-semibold text-center text-lg p-3 transition-colors '>
                            <img src="src/assets/icons/deals_2.svg" width={'2%'} className='ms-10' style={{ position: 'absolute' }} alt="" />Deals</a>
                    </div>
                    <div className='pb-8'>
                        <a href="" className='text-white font-semibold text-center text-lg p-3 transition-colors '>
                            <img src="src/assets/icons/wallet_2.svg" width={'2%'} className='ms-10' style={{ position: 'absolute' }} alt="" />Wallet</a>
                    </div>
                    <div className='pb-8'>
                        <a href="" className='text-white font-semibold text-center text-lg p-3 transition-colors ms-5'>
                            <img src="src/assets/icons/settings_2.svg" width={'2%'} className='ms-10' style={{ position: 'absolute' }} alt="" />Settings</a>
                    </div>
                    <div className='pb-8'>
                        <a href="" className='text-white font-semibold text-center text-lg p-3 transition-colors '>
                            <img src="src/assets/icons/logout_2.svg" width={'2%'} className='ms-10' style={{ position: 'absolute' }} alt="" />Logout</a>
                    </div>
                </div>
            </div>
            <div className='w-5/6 min-h-screen'>
                {/* main div */}

                <div className='text-start ms-5 mt-5'>
                    <h1>Welcome, Jon</h1>
                </div>
                <div className='mt-5'>
                    <div className='me-11'>
                        <button style={{ position: 'absolute', right: '50%' }} className='border-2 border-solid rounded-lg p-2 -mt-2'>
                            <img src="src/assets/icons/chevron_left.svg" alt="" />
                        </button>
                        <h4>June, 2023</h4>
                        <button style={{ position: 'absolute', left: '62%' }} className='border-2 border-solid rounded-lg p-2 -mt-8'>
                            <img src="src/assets/icons/chevron_right.svg" alt="" />
                        </button>
                    </div>
                    <div>
                        <ul className='flex justify-end -mt-8'>
                            <li className='list-none p-2 rounded-lg mx-4 active'>Monthly</li>
                            <li className='list-none p-2 rounded-lg mx-4'>Weekly</li>
                            <li className='list-none p-2 rounded-lg mx-4'>Daily</li>
                            <li className='list-none p-2 rounded-lg mx-4'>All time</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-5 ms-5 grid grid-rows-2 grid-flow-col gap-4'>
                    <div className='bg-yellow-400 rounded-lg' style={{ padding: '25%' }}></div>
                    <div className='bg-blue-400 rounded-lg' style={{ padding: '25%' }}></div>
                    <div className='bg-green-400 rounded-lg' style={{ padding: '25%' }}></div>
                    <div className='bg-red-400 rounded-lg' style={{ padding: '25%' }}></div>
                </div>
                <div className='mt-5 ms-5'>
                    <h4 className='text-start'>
                        Active offers
                    </h4>
                    <div className='mt-3'>
                        <p style={{ color: 'grey', padding: '5%' }}>There is no active offers at this time</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Empty
