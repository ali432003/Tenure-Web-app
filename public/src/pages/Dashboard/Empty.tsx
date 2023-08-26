import React from 'react';
import './Emty.css';
import Button from '../../components/Button/Button';
import Slidebar from '../../components/Slidebar/Slidebar';
import Box from '../../components/Box/Box';
import  EmTableRowsD from '../../components/EmTableRows/EmTableRowsD';



function Empty() {
    return (
        <div className='flex h-min-screen'>
            <Slidebar />
            <div className='w-5/6'>
                {/* main div */}
                <div className='flex items-center justify-between text-start ms-9 mt-5'>
                    <h1>Welcome, Jon</h1>
                </div>
                <div className='mt-5'>
                    <div>
                        <div dir='rtl'>
                            <button style={{ position: 'absolute' }} className='border-2 border-solid rounded-lg p-2 -mt-2 ms-11'>
                                <img src="src/assets/icons/chevron_left.svg" alt="" />
                            </button>
                        </div>
                        <h4>June, 2023</h4>
                        <div dir='ltr'>
                            <button style={{ position: 'absolute' }} className='border-2 border-solid rounded-lg p-2 -mt-8 ms-11'>
                                <img src="src/assets/icons/chevron_right.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <div>
                        <ul className='flex justify-end -mt-8'>
                            <li className='list-none p-2 rounded-lg mx-4 active'><a href="">Monthly</a></li>
                            <li className='list-none p-2 rounded-lg mx-4'><a href="">Weekly</a></li>
                            <li className='list-none p-2 rounded-lg mx-4'><a href="">Daily</a></li>
                            <li className='list-none p-2 rounded-lg mx-4'><a href="">All time</a></li>
                        </ul>
                    </div>
                </div>
                <div className='mt-5 ms-5 grid grid-cols-2 gap-4'>
                    <Box title="Employee contribution" img="gift.svg" valueT="$1,520" valueL="$1,520" avg="contribution" h6='Receivers' />
                    <Box title="Total amount saved" img="amt_saved.svg" valueT="$1,520" valueL="$1,520" avg='savings' h6='Total no of savers' />
                    <Box title="Total round-ups value" img="arrow_up.svg" valueT="$1,520" valueL="$1,520" avg='round-ups' h6='Total no of transection' />
                    <Box title="Total cash-back value" img="cash_back.svg" valueT="$1,520" valueL="$1,520" avg="cash-back" h6='Total no of transection' />
                </div>
                <div className='items-center justify-between text-start ms-9 mt-5'>
                    {/* ... your active offers section ... */}
                    <h4 className='text-start'>
                        Active offers
                    </h4>
                    {/* <div className='text-center my-12'>
                        <p style={{ color: 'grey'}}>There is no active offers at this time</p>
                    </div> */}
                    <div className=''>
                        <div className='mt-4'>
                            <table className="table-auto w-full">
                                <thead>
                                    <tr className='bg-white-600 shadow-lg my-4'>
                                        <th className='text-start w-1/4 p-4' style={{ color: '#25384D' }}>Brand</th>
                                        <th className='text-start'  style={{ color: '#25384D' }}>Offer Title</th>
                                        <th className='  text-start w-1/5' style={{ color: '#25384D' }}>Expiray-Date</th>
                                        <th className='  text-start' style={{ color: '#25384D' }}>Category</th>
                                    </tr>
                                </thead>
                                <tbody className='gap-x-7 gap-y-7'>
                                    <  EmTableRowsD img="mc.svg" name="McDonald's" title="20% off annual gym membership"  exp="06/11/2023" catimg="healthcare.svg" catCol="#972144" cat="Health-care" />
                                    <  EmTableRowsD img="health_fit.svg" name="Healthfit" title="Visit 2 times and save 5%"  exp="06/11/2023" catimg="food.svg" catCol="#972144" cat="Health-care" />
                                    <  EmTableRowsD img="make_my_trip.svg" name="MakeMyTrip" title="50% off a 5-Day All-Inclusive Caribbean Cruise"  exp="06/11/2023" catimg="travel.svg" catCol="#B77900" cat="Travel" />
                                    <  EmTableRowsD img="starbucks.svg" name="Starbucks" title="Buy One, Get One 50% Off on Selected Fashion Items"  exp="06/11/2023" catimg="retail.svg" catCol="#004E5F" cat="Retail" />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Empty;
