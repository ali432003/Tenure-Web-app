import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
function Slidebar() {

const [Page, setPage] = useState("Home")

const onChangePage = (pageName:string) =>{
    setPage(pageName)
    localStorage.setItem('currentPage', pageName);
}
useEffect(() => {
    const storedValue = localStorage.getItem('currentPage');
    if (storedValue) {
        setPage(storedValue);
    }
  }, []);
    return (
        // <div className='h-full ' style={{ backgroundColor: "rgb(56 133 123 /1)", color: 'white' ,width:"14%",}}>
         <div className='h-full' style={{ backgroundColor: "rgb(56 133 123 /1)", color: 'white' }}>
            {/* slide bar */}
            <div className='text-center' style={{marginBottom:"45%" }}>
                <Link onClick={()=>onChangePage("Home")} to="" className='text-white font-semibold text-center text-lg p-3 transition-colors flex items-center' >
                    <img src="src/assets/icons/logo_icon_small_1.svg" className='mr-1' alt="" />
                    <h1 >Tenure</h1>
                </Link>
            </div>
            <div >
               
                <div className='pb-1 h-20 ' style={{ backgroundColor : Page ==="Home"? 'white': ''}}>
                    <Link onClick={()=>onChangePage("Home")} to="/Dashboard" className='text-2xl text-white font-semibold  text-lg p-3 transition-colors flex items-center ' style={{margin:"0 3vw", color: Page ==="Home"? 'black': '' }}>
                        {/* <img src={`src/assets/icons/${Page !== 'Home'?'logo_icon_small_2.svg':'logo_icon_small_1.svg'}`} className='mr-1' alt="" /> */}
                        <img src={`src/assets/icons/logo_icon_small_2.svg`} className='mr-1' alt="" />
                        Home
                    </Link>
                    
                </div>
  
  
                <div className='pb-1 h-20' style={{ backgroundColor : Page ==="Employees"? 'white': ''}}>
                    <Link onClick={()=>onChangePage("Employees")} to="/Employees" className='text-2xl text-white font-semibold  text-lg p-3 transition-colors flex items-center ' style={{margin:"0 3vw", color: Page ==="Employees"? 'black': ''}}>
                        <img src={`src/assets/icons/${Page !== 'Employees'?'employees_2.svg':'employees_1.svg'}`} className='mr-4 h-11' alt="" />Employee</Link>
                </div>


                <div className='pb-1 h-20' style={{ backgroundColor : Page ==="Deals"? 'white': ''}}>
                    <Link onClick={()=>onChangePage("Deals")} to="/Deals" className='text-2xl text-white font-semibold  text-lg p-3 transition-colors flex items-center 'style={{margin:"0 3vw", color: Page ==="Deals"? 'black': ''}}>
                        <img src={`src/assets/icons/${Page !== 'Deals'?'deals_2.svg':'deals_1.svg'}`} className='mr-4 h-11' alt="" />Deals</Link>
                </div>


                <div className='pb-1 h-20' style={{ backgroundColor : Page ==="Wallet"? 'white': ''}}>
                    <Link onClick={()=>onChangePage("Wallet")} to="/Walllet" className='text-2xl text-white font-semibold  text-lg p-3 transition-colors flex items-center 'style={{margin:"0 3vw", color: Page ==="Wallet"? 'black': ''}}>
                        <img src={`src/assets/icons/${Page !== 'Wallet'?'wallet_2.svg':'wallet_1.svg'}`} className='mr-4 h-11' alt="" />Wallet</Link>
                </div>


                <div className='pb-1 h-20' style={{ backgroundColor : Page ==="Settings"? 'white': ''}}>
                    <Link onClick={()=>onChangePage("Settings")} to="Settings" className='text-2xl text-white font-semibold  text-lg p-3 transition-colors flex items-center 'style={{margin:"0 3vw", color: Page ==="Settings"? 'black': ''}}>
                        <img src={`src/assets/icons/${Page !== 'Settings'?'settings_2.svg':'settings_1.svg'}`} className='mr-4 h-11' alt="" />Settings</Link>
                </div>


                <div className='pb-1 h-20'>
                    <Link to="" className='text-2xl text-white font-semibold  text-lg p-3 transition-colors flex items-center 'style={{margin:"0 3vw"}}>
                        <img src="src/assets/icons/logout_2.svg" className='mr-4 h-11' alt="" />Logout</Link>
                </div>
            </div>
        </div>

    )
}

export default Slidebar;
