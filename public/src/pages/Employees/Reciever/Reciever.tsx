import React from 'react'
import Slidebar from '../../../components/Slidebar/Slidebar'
import Button from '../../../components/Button/Button'
import EmTableRows2 from '../../../components/EmTableRows/EmTableRows2'


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
                            <li className='list-none p-2 rounded-lg '><a href="/Employees">All Employee</a></li>
                            <li className='list-none p-2 rounded-lg active'><a href="/Reciever">Top Recievers</a></li>
                            <li className='list-none p-2 rounded-lg '><a href="/Purchase">Top Purchases</a></li>
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
                                <tr className='bg-white-600 shadow-lg my-4'>
                                    <th className='text-start w-1/4 p-4' style={{color:'#25384D'}}>Employee</th>
                                    <th className='w-1/4' style={{color:'#25384D'}}>Overall progress</th>
                                    <th className='w-1/4 text-start' style={{color:'#25384D'}}>Total contributions received</th>
                                    <th className='w-1/4'></th>
                                </tr>
                            </thead>
                            <tbody className='gap-x-7 gap-y-7'>
                                <EmTableRows2 img="jon.svg" name="Jon Snow" goal="$1,340.56"/>
                                <EmTableRows2 img="vinn.svg" name="Vinn Isuis" goal="$1,200"/>
                                <EmTableRows2 img="rodd.svg" name="Rodd Rigo" goal="$1,000"/>
                                <EmTableRows2 img="sam.svg" name="Sam Anther" goal="$800"/>
                                <EmTableRows2 img="eden.svg" name="Eden Garden" goal="$750"/>
                                <EmTableRows2 img="gabi.svg" name="Gabi Cunha" goal="$600"/>
                                <EmTableRows2 img="ronald.svg" name="Ronald Christian" goal="$560"/>
                                <EmTableRows2 img="lionel.svg" name="Lionel Richmond" goal="$400"/>
                                
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    )
}

