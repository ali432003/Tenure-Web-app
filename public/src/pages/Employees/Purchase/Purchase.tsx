import React from 'react'
import Slidebar from '../../../components/Slidebar/Slidebar'
import Button from '../../../components/Button/Button'
import EmTableRows3 from '../../../components/EmTableRows/EmTableRows3'


export default function Employees() {
    return (
        <div className='flex h-screen'>
            <Slidebar />
            <div className='w-5/6 ms-5'>
                <div className='flex items-center justify-between text-start ms-4 mt-5'>
                    <h1>Employees</h1>
                </div>
                <div className='mt-5 flex justify-between'>
                    <div>
                        <ul className='flex ms-4'>
                            <li className='list-none p-2 rounded-lg '><a href="/Employees">All Employee</a></li>
                            <li className='list-none p-2 rounded-lg '><a href="/Reciever">Top Recievers</a></li>
                            <li className='list-none p-2 rounded-lg active'><a href="/Purchase">Top Purchases</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex '>
                            <li className='list-none p-2 rounded-lg flex'><img src="src/assets/icons/bell.svg" className='mr-2' alt="" /><a href="">Send A Notification</a></li>
                            <li className='list-none mx-3 border border-solid rounded-lg flex'><img src="src/assets/icons/gift.svg" className='ms-1' width={'20px'} alt="" /><a href='' className='mt-2 ms-2 me-2'> Gift All Employees</a></li>
                            <li className='list-none p-2 rounded-lg active flex'><img src="src/assets/icons/add_2.svg
                                " alt="" className='mr-2' /><a href=''> Add Another Employee</a></li>
                        </ul>
                    </div>
                    
                </div>
                <div className='mt-10'>
                        <table className="table-auto w-full">
                            <thead>
                                <tr >
                                    <th className='text-start w-1/4' style={{color:'#25384D'}}>Brand</th>
                                    <th className='  text-start' style={{color:'#25384D'}}>No. of purchases</th>
                                    <th className='  text-start' style={{color:'#25384D'}}>Active deals</th>
                                    <th className='  text-start' style={{color:'#25384D'}}>Total round-up value</th>
                                    <th className=' text-start' style={{color:'#25384D'}}>Total cash-back value</th>
                                    <th className='  text-start' style={{color:'#25384D'}}>Category</th>
                                </tr>
                            </thead>
                            <tbody className='gap-x-7 gap-y-7'>
                                <EmTableRows3 img="mc.svg" name="McDonald's" purch="500" deals="3" rupValue="$300" chBack="$400" catimg="food.svg" catCol="#DA6252" cat="Food"/>
                                <EmTableRows3 img="health_fit.svg" name="Healthfit" purch="500" deals="3" rupValue="$300" chBack="$400" catimg="healthcare.svg" catCol="#972144" cat="Health-care"/>
                                <EmTableRows3 img="make_my_trip.svg" name="MakeMyTrip" purch="500" deals="3" rupValue="$300" chBack="$400" catimg="travel.svg" catCol="#B77900" cat="Travel"/>
                                <EmTableRows3 img="starbucks.svg" name="Starbucks" purch="500" deals="3" rupValue="$300" chBack="$400" catimg="food.svg" catCol="#DA6252" cat="Food"/>
                                <EmTableRows3 img="gap.svg" name="GAP" purch="500" deals="3" rupValue="$300" chBack="$400" catimg="retail.svg" catCol="#004E5F" cat="Retail"/>
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    )
}


