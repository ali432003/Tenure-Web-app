
import './Sidebar.css'
import { Link,useLocation  } from 'react-router-dom'


function Slidebar() {

let location = useLocation();

return (
    <div className='h-full' style={{ backgroundColor: "rgb(56 133 123 /1)", color: 'white' }}>
       {/* slide bar */}
       <div className='text-center' style={{marginBottom:"45%" }}>
           <Link  to="" className='text-white font-semibold text-center text-lg p-3 transition-colors flex items-center' >
               <img src="src/assets/icons/logo_icon_small_1.svg" className='mr-1' alt="" />
               <h1 >Tenure</h1>
           </Link>
       </div>
       <div >
          
           <div className='pb-1 h-20 ' style={{ backgroundColor : location.pathname ==="/Dashboard"? 'white': ''}}>
               <Link  to="/Dashboard" className='text-2xl text-white font-semibold  text-lg p-3 transition-colors flex items-center ' style={{margin:"0 3vw", color: location.pathname ==="/Dashboard"? 'black': '' }}>
                   {/* <img src={`src/assets/icons/${Page !== 'Home'?'logo_icon_small_2.svg':'logo_icon_small_1.svg'}`} className='mr-1' alt="" /> */}
                   <img src={`src/assets/icons/logo_icon_small_2.svg`} className='mr-1' alt="" />
                   Home
               </Link>
               
           </div>


           <div className='pb-1 h-20' style={{ backgroundColor : location.pathname ==="/Employees"? 'white': ''}}>
               <Link  to="/Employees" className='text-2xl text-white font-semibold  text-lg p-3 transition-colors flex items-center ' style={{margin:"0 3vw", color: location.pathname ==="/Employees"? 'black': ''}}>
                   <img src={`src/assets/icons/${location.pathname !== '/Employees'?'employees_2.svg':'employees_1.svg'}`} className='mr-4 h-11' alt="" />Employee</Link>
           </div>


           <div className='pb-1 h-20' style={{ backgroundColor : location.pathname ==="/Deals"? 'white': ''}}>
               <Link  to="/Deals" className='text-2xl text-white font-semibold  text-lg p-3 transition-colors flex items-center 'style={{margin:"0 3vw", color: location.pathname ==="/Deals"? 'black': ''}}>
                   <img src={`src/assets/icons/${location.pathname !== '/Deals'?'deals_2.svg':'deals_1.svg'}`} className='mr-4 h-11' alt="" />Deals</Link>
           </div>


           <div className='pb-1 h-20' style={{ backgroundColor : location.pathname ==="/Wallet"? 'white': ''}}>
               <Link  to="/Wallet" className='text-2xl text-white font-semibold  text-lg p-3 transition-colors flex items-center 'style={{margin:"0 3vw", color: location.pathname ==="/Wallet"? 'black': ''}}>
                   <img src={`src/assets/icons/${location.pathname !== '/Wallet'?'wallet_2.svg':'wallet_1.svg'}`} className='mr-4 h-11' alt="" />Wallet</Link>
           </div>


           <div className='pb-1 h-20' style={{ backgroundColor : location.pathname ==="/Settings"? 'white': ''}}>
               <Link  to="Settings" className='text-2xl text-white font-semibold  text-lg p-3 transition-colors flex items-center 'style={{margin:"0 3vw", color: location.pathname ==="/Settings"? 'black': ''}}>
                   <img src={`src/assets/icons/${location.pathname !== '/Settings'?'settings_2.svg':'settings_1.svg'}`} className='mr-4 h-11' alt="" />Settings</Link>
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
