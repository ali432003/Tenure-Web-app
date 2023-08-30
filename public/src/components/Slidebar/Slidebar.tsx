import React from 'react'
import { Link } from 'react-router-dom';
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
                    <Link to="/DashBoard" className='text-white font-semibold text-center text-lg p-3 transition-colors flex items-center ms-4'>
                        <img src="src/assets/icons/logo_icon_small_1.svg" className='mr-1' alt="" />
                        Home
                    </Link>
                </div>
                <div className='pb-1'>
                    <Link to="/Employees" className='text-white font-semibold text-center text-lg p-3 transition-colors flex items-center ms-4'>
                        <img src="src/assets/icons/employees_2.svg" className='mr-5' alt="" />Employee</Link>
                </div>
                <div className='pb-1'>
                    <Link to="/Deals" className='text-white font-semibold text-center text-lg p-3 transition-colors flex items-center ms-4'>
                        <img src="src/assets/icons/deals_2.svg" className='mr-4' alt="" />Deals</Link>
                </div>
                <div className='pb-1'>
                    <Link to="/Wallet" className='text-white font-semibold text-center text-lg p-3 transition-colors flex items-center ms-4'>
                        <img src="src/assets/icons/wallet_2.svg" className='mr-4' alt="" />Wallet</Link>
                </div>
                <div className='pb-1'>
                    <Link to="/Settings" className='text-white font-semibold text-center text-lg p-3 transition-colors flex items-center ms-4'>
                        <img src="src/assets/icons/settings_2.svg" className='mr-4' alt="" />Settings</Link>
                </div>
                <div className='pb-1'>
                    <Link to="/Logout" className='text-white font-semibold text-center text-lg p-3 transition-colors flex items-center ms-4'>
                        <img src="src/assets/icons/logout_2.svg" className='mr-4' alt="" />Logout</Link>
                </div>
            </div>
        </div>

    )
}

export default Slidebar;
