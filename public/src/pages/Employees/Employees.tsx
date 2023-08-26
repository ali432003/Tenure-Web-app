import React from 'react'
import Slidebar from '../../components/Slidebar/Slidebar'
import Button from '../../components/Button/Button'
import EmTableRows from '../../components/EmTableRows/EmTableRows'

export default function Employees() {
    return (
        <div className='flex h-min-screen'>
            <Slidebar />
            <div className='w-5/6 ms-5'>
                <div className='flex items-center justify-between text-start ms-4 mt-5'>
                    <h1>Employees</h1>
                </div>
                <div className='mt-5 flex justify-between'>
                    <div>
                        <ul className='flex ms-4'>
                            <li className='list-none p-2 rounded-lg active'><a href="">All Employee</a></li>
                            <li className='list-none p-2 rounded-lg '><a href="">Top Recievers</a></li>
                            <li className='list-none p-2 rounded-lg '><a href="">Top Purchases</a></li>
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
                                    <th className='text-start w-1/4'>Employee</th>
                                    <th className='w-1/1 flex justify-start'>Saving goal(s) <img src="src/assets/icons/i.svg" className='ml-2' alt="" /></th>
                                    <th className='w-1/4'>Overall progress</th>
                                    <th className='w-1/4'></th>
                                </tr>
                            </thead>
                            <tbody className='gap-x-7 gap-y-7'>
                                <EmTableRows img="jon.svg" name="Jon Snow" goal="New car, First home, Vacation, Engagament ring"/>
                                <EmTableRows img="vinn.svg" name="Vinn Isuis" goal="Vacation"/>
                                <EmTableRows img="rodd.svg" name="Rodd Rigo" goal="Mortgage, Birthday shopping"/>
                                <EmTableRows img="sam.svg" name="Sam Anther" goal="Rent, New car, New TV"/>
                                <EmTableRows img="eden.svg" name="Eden Garden" goal="Family vacation, Greece trip"/>
                                <EmTableRows img="gabi.svg" name="Gabi Cunha" goal="Birthday party"/>
                                <EmTableRows img="ronald.svg" name="Ronald Christian" goal="New car, Vacation, Christmas shopping"/>
                                <EmTableRows img="lionel.svg" name="Lionel Richmond" goal="Summer party"/>
                                
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    )
}
