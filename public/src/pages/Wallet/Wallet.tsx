import React, { useState } from 'react'
import Slidebar from '../../components/Slidebar/Slidebar'
import EmTableHeads from '../../components/Em/EmTableHeads';
import EmTableRows from '../../components/Em/EmTableRows';
import Tippy from '@tippyjs/react';

export default function Wallet(props: any) {
  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
  };
  const [selectedCategory, setSelectedCategory] = useState('monthly');
  return (
    <div className='flex h-min-screen'>
      <Slidebar />
      <div className='w-5/6 ms-5'>
        <div className='flex items-center justify-between text-start ms-4 mt-5'>
          <h1>Wallet</h1>

        </div>
        <div className="flex">
          <div className='mt-5 mx-5  w-1/2 relative border rounded-lg border-solid p-4' style={{ color: 'rgb(28, 92, 95)' }}>
            <div className='rounded-lg p-4'>
              <div className='flex justify-between items-start'>
                <div className='flex'>
                  <img src={`src/assets/icons/wallet_1.svg`} className='mr-2' alt="" />
                  <h1>Wallet</h1>
                </div>
                <div className='flex cursor-pointer'>
                  <img src="src/assets/icons/edit.svg" className='mr-2' alt="" />
                  <span>Edit Rewards Budget</span>
                </div>
              </div>
              <div className="flex justify-between mt-7">
                <div className="flex flex-col text-start">
                  <h1 className='text-base my-1'>Available balance</h1>
                  <h1 className='text-5xl'>$3,000</h1>
                </div>
                <div className="flex flex-col text-start" style={{ color: '#5A7894' }}>
                  <h1 className='text-base my-1'>Reward Budget</h1>
                  <h1 className='text-5xl'>$3,000</h1>
                </div>
              </div>
              <div className='flex justify-center pt-40'>
                <button className='flex rounded-lg p-2' style={{ backgroundColor: "#38857b", color: "white" }}><img src="src/assets/icons/add_2.svg" className='mr-2' alt="" />Top up Wallet</button>
              </div>

            </div>
          </div>
          <div className='mt-5 mx-5  w-1/2 relative border rounded-lg border-solid p-4' style={{ color: 'rgb(28, 92, 95)' }}>
            <div className='rounded-lg p-4'>
              <div className='flex justify-between items-start'>
                <div className='flex'>
                  <img src={`src/assets/icons/cards_2.svg`} className='mr-2 w-10' alt="" />
                  <h1>Link cards</h1>
                </div>
                <div className='flex cursor-pointer'>
                  <img src="src/assets/icons/add_1.svg" className='mr-2' alt="" />
                  <span>Add Another Card</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col mt-5'>
              <div className='flex justify-between border mx-3 rounded-lg p-2 my-3'>
                <div className='flex'>
                  <img src="src/assets/icons/mastercard.svg" className='mr-3 w-10' alt="" />
                  <div className='flex flex-col'>
                    <h5 className='text-lg font-bold text-start'>1234****1280</h5>
                    <p className='text-start'>Expires 6/24</p>
                  </div>
                </div>
                <div className='flex p-2'>
                  <Tippy content={<span>Edit</span>} placement='bottom' animation="scale">
                    <a className='rounded me-3 button cursor-pointer px-3 py-3' style={{ backgroundColor: 'rgba(28, 92, 95, 1)' }}><img src="src/assets/icons/edit.svg" style={{ filter: 'brightness(900%)' }} alt="" /></a>
                  </Tippy>
                  <Tippy content={<span>Remove</span>} placement='bottom' animation="scale">
                    <a style={{ border: '1px solid rgb(210, 66, 82)' }} className='cross px-3 py-3 rounded hover:bg-red-100 cursor-pointer'><img src="src/assets/icons/close.svg" alt="" /></a>
                  </Tippy>
                </div>
              </div>
              <div className='flex justify-between border mx-3 rounded-lg p-2 my-3'>
                <div className='flex'>
                  <img src="src/assets/icons/visa.svg" className='mr-3 w-10' alt="" />
                  <div className='flex flex-col'>
                    <h5 className='text-lg font-bold text-start'>1234****1280</h5>
                    <p className='text-start'>Expires 6/24</p>
                  </div>
                </div>
                <div className='flex p-2'>
                  <Tippy content={<span>Edit</span>} placement='bottom' animation="scale">
                    <a className='rounded me-3 button cursor-pointer px-3 py-3' style={{ backgroundColor: 'rgba(28, 92, 95, 1)' }}><img src="src/assets/icons/edit.svg" style={{ filter: 'brightness(900%)' }} alt="" /></a>
                  </Tippy>
                  <Tippy content={<span>Remove</span>} placement='bottom' animation="scale">
                    <a style={{ border: '1px solid rgb(210, 66, 82)' }} className='cross px-3 py-3 rounded hover:bg-red-100 cursor-pointer'><img src="src/assets/icons/close.svg" alt="" /></a>
                  </Tippy>
                </div>
              </div>
              <div className='flex justify-between border mx-3 rounded-lg p-2 my-3'>
                <div className='flex'>
                  <img src="src/assets/icons/mastercard.svg" className='mr-3 w-10' alt="" />
                  <div className='flex flex-col'>
                    <h5 className='text-lg font-bold text-start'>1234****1280</h5>
                    <p className='text-start'>Expires 6/24</p>
                  </div>
                </div>
                <div className='flex p-2'>
                  <Tippy content={<span>Edit</span>} placement='bottom' animation="scale">
                    <a className='rounded me-3 button cursor-pointer px-3 py-3' style={{ backgroundColor: 'rgba(28, 92, 95, 1)' }}><img src="src/assets/icons/edit.svg" style={{ filter: 'brightness(900%)' }} alt="" /></a>
                  </Tippy>
                  <Tippy content={<span>Remove</span>} placement='bottom' animation="scale">
                    <a style={{ border: '1px solid rgb(210, 66, 82)' }} className='cross px-3 py-3 rounded hover:bg-red-100 cursor-pointer'><img src="src/assets/icons/close.svg" alt="" /></a>
                  </Tippy>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='mt-9'>
          <div className='text-start'>
            <h1>Transection History</h1>
          </div>

          <div className='mt-9 flex justify-end mb-5'>
            <div className='mr-56'>
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
            <ul className='flex justify-end mb-5 -mt-1'>
              <li className={`${selectedCategory === 'monthly' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer mx-2`} onClick={() => filterByCategory('monthly')}><a>Monthly</a></li>
              <li className={`${selectedCategory === 'weekly' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer mx-2`} onClick={() => filterByCategory('weekly')}><a>Weekly</a></li>
              <li className={`${selectedCategory === 'daily' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer mx-2`} onClick={() => filterByCategory('daily')}><a>Daily</a></li>
              <li className={`${selectedCategory === 'alltime' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer mx-2`} onClick={() => filterByCategory('alltime')}><a>All time</a></li>
            </ul>
          </div>
        </div>
        <table className='w-full'>
          <EmTableHeads hkey="Wall" />
          <EmTableRows rkey="Wall" date="06/11/23, 12:55pm EST" amt="$4000" channel="credit card" type="Top up" />
          <EmTableRows rkey="Wall" date="06/11/23, 12:55pm EST" amt="$1000" channel="wallet" type="Contribution" />
          <EmTableRows rkey="Wall" date="06/11/23, 12:55pm EST" amt="$3000" channel="bank account" type="Contribution" />
        </table>

      </div>

    </div>
  )
}
