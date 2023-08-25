import React from 'react';
import './Emty.css';
import Button from '../../components/Button/Button';
import Slidebar from '../../components/Slidebar/Slidebar';
import Box from '../../components/Box/Box';



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
                            <li className='list-none p-2 rounded-lg mx-4 active'>Monthly</li>
                            <li className='list-none p-2 rounded-lg mx-4'>Weekly</li>
                            <li className='list-none p-2 rounded-lg mx-4'>Daily</li>
                            <li className='list-none p-2 rounded-lg mx-4'>All time</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-5 ms-5 grid grid-cols-2 gap-4'>
                    <Box title="Employee contribution" img="gift.svg" valueT = "$1,520" valueL = "$1,520" avg="contribution" h6='Receivers'/>
                    <Box title="Total amount saved" img="amt_saved.svg" valueT = "$1,520" valueL = "$1,520" avg='savings' h6='Total no of savers'/>
                    <Box title="Total round-ups value" img="arrow_up.svg" valueT = "$1,520" valueL = "$1,520" avg='round-ups' h6='Total no of transection'/>
                    <Box title="Total cash-back value" img="cash_back.svg" valueT = "$1,520" valueL = "$1,520" avg="cash-back" h6='Total no of transection'/>
                </div>
                <div className='items-center justify-between text-start ms-9 mt-5'>
                    {/* ... your active offers section ... */}
                    <h4 className='text-start'>
                        Active offers
                    </h4>
                    <div className='text-center my-12'>
                        <p style={{ color: 'grey'}}>There is no active offers at this time</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Empty;
