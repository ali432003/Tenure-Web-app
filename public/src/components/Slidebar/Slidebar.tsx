import React, { useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
function Slidebar() {

const [Page, setPage] = useState("Home")

const onChangePage = (pageName:string) =>{
    setPage(pageName)
}
console.log(Page)

    return (
        // <div className='h-full ' style={{ backgroundColor: "rgb(56 133 123 /1)", color: 'white' ,width:"14%",}}>
         <div className='h-full ' style={{ backgroundColor: "rgb(56 133 123 /1)", color: 'white' }}>
            {/* slide bar */}
            <div className='text-center' style={{marginBottom:"45%" }}>
                <a onClick={()=>onChangePage("Home")} href="" className='text-white font-semibold text-center text-lg p-3 transition-colors flex items-center' >
                    <img src="src/assets/icons/logo_icon_small_1.svg" className='mr-1' alt="" />
                    <h1 >Tenure</h1>
                </a>
            </div>
            <div >

                <div className='pb-1 h-20 ' style={{ backgroundColor : Page ==="Home"? 'white': ''}}>
                    <Link onClick={()=>onChangePage("Home")} to="/Dashboard" className='text-2xl text-white font-semibold  text-lg p-3 transition-colors flex items-center ' style={{margin:"0 3vw", color: Page ==="Home"? 'black': '' }}>
                        <img src="src/assets/icons/logo_icon_small_1.svg" className='mr-1' alt="" />
                        Home
                    </Link>
                </div>
  
  
                <div className='pb-1 h-20' style={{ backgroundColor : Page ==="Employees"? 'white': ''}}>
                    <Link onClick={()=>onChangePage("Employees")} to="/Employees" className='text-2xl text-white font-semibold  text-lg p-3 transition-colors flex items-center ' style={{margin:"0 3vw", color: Page ==="Employees"? 'black': ''}}>
                        <img src="src/assets/icons/employees_2.svg" className='mr-4 h-11' alt="" />Employee</Link>
                </div>


                <div className='pb-1 h-20'>
                    <a onClick={()=>onChangePage("Deals")} href="" className='text-2xl text-white font-semibold  text-lg p-3 transition-colors flex items-center 'style={{margin:"0 3vw"}}>
                        <img src="src/assets/icons/deals_2.svg" className='mr-4 h-11' alt="" />Deals</a>
                </div>
                <div className='pb-1 h-20'>
                    <a onClick={()=>onChangePage("Wallet")} href="" className='text-2xl text-white font-semibold  text-lg p-3 transition-colors flex items-center 'style={{margin:"0 3vw"}}>
                        <img src="src/assets/icons/wallet_2.svg" className='mr-4 h-11' alt="" />Wallet</a>
                </div>
                <div className='pb-1 h-20'>
                    <a onClick={()=>onChangePage("Settings")} href="" className='text-2xl text-white font-semibold  text-lg p-3 transition-colors flex items-center 'style={{margin:"0 3vw"}}>
                        <img src="src/assets/icons/settings_2.svg" className='mr-4 h-11' alt="" />Settings</a>
                </div>
                <div className='pb-1 h-20'>
                    <a href="" className='text-2xl text-white font-semibold  text-lg p-3 transition-colors flex items-center 'style={{margin:"0 3vw"}}>
                        <img src="src/assets/icons/logout_2.svg" className='mr-4 h-11' alt="" />Logout</a>
                </div>
            </div>
        </div>

    )
}

export default Slidebar;
