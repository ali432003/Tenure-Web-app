import React from 'react'

function Slidebar() {
    return (
        <div className='w-1/6 h-min-screen' style={{ backgroundColor: "rgb(56 133 123 /1)", color: 'white' }}>
            {/* slide bar */}
            <div className='mt-5 text-center'>
                <a href="" className='text-white font-semibold text-center text-lg p-3 transition-colors flex items-center ms-4'>
                    <img src="src/assets/icons/logo_icon_small_1.svg" className='mr-1' alt="" />
                    <h1 >Tenure</h1>
                </a>
            </div>
            <div style={{marginTop:'60%'}}>
                <div className='pb-1'>
                    <a href="/Dashboard" className='text-white font-semibold text-center text-lg p-3 transition-colors flex items-center ms-4'>
                        <img src="src/assets/icons/logo_icon_small_1.svg" className='mr-1' alt="" />
                        Home
                    </a>
                </div>
                <div className='pb-1'>
                    <a href="/Employees" className='text-white font-semibold text-center text-lg p-3 transition-colors flex items-center ms-4'>
                        <img src="src/assets/icons/employees_2.svg" className='mr-5' alt="" />Employee</a>
                </div>
                <div className='pb-1'>
                    <a href="" className='text-white font-semibold text-center text-lg p-3 transition-colors flex items-center ms-4'>
                        <img src="src/assets/icons/deals_2.svg" className='mr-4' alt="" />Deals</a>
                </div>
                <div className='pb-1'>
                    <a href="" className='text-white font-semibold text-center text-lg p-3 transition-colors flex items-center ms-4'>
                        <img src="src/assets/icons/wallet_2.svg" className='mr-4' alt="" />Wallet</a>
                </div>
                <div className='pb-1'>
                    <a href="" className='text-white font-semibold text-center text-lg p-3 transition-colors flex items-center ms-4'>
                        <img src="src/assets/icons/settings_2.svg" className='mr-4' alt="" />Settings</a>
                </div>
                <div className='pb-1'>
                    <a href="" className='text-white font-semibold text-center text-lg p-3 transition-colors flex items-center ms-4'>
                        <img src="src/assets/icons/logout_2.svg" className='mr-4' alt="" />Logout</a>
                </div>
            </div>
        </div>

    )
}

export default Slidebar;
