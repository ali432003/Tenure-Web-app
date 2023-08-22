import React from 'react'
import Button from '../../components/Button/Button'

function Step4_dc() {
  return (
    <div className="bg-gray-50 grid grid-cols-1">
      <div className="container min-w-full center pt-48 relative flex flex-col justify-center items-center">
        <h1>Top up your wallet</h1>
        <p style={{ color: 'grey' }}
          className='mt-2 w-1/3'>Add money to your gifting wallet through your credit card to gift your employees</p>
      </div>
      <div>
        <p style={{
          color: 'grey',
          position: 'relative',
          left: '22%'
        }}
          className='mt-5'>Step 4/4</p>
      </div>
      <div className="container min-w-full center pt-9 relative flex flex-col justify-center items-center">
        <img src="src/assets/icons/cards_1.svg" width={'250px'} height={'40px'}></img>
        {/* <img src="src/assets/images/chain-round.jpg" width={'70px'} style={{
          position:'absolute', top:'70%',left:'55%',filter:'brightness(90%)'
        }}></img> */}
      </div>
      <div className="container min-w-full center pt-9 relative flex flex-col justify-center items-center">
        <div className='w-1/2'>
          <div>
            <Button type="submit" className="button-primary-lg  button mt-5 mb-9" style={{ borderRadius: '10px' }}>
              Top up your wallet
            </Button>
          </div>
          <div className='flex justify-between'>
            <span className='text-lg font-semibold align-bottom cursor-pointer' style={{ color: "rgb(56 133 123 /1)" }}>
              <a href="/OnBoarding1"><img src="src/assets/icons/chevron_left.svg" alt="" style={{ maxWidth: "fit-conteny", display: "inline" }} /> Previous</a>

            </span>
            <span className='text-lg font-semibold cursor-pointer' style={{ color: "rgb(56 133 123 /1)", textAlign: "right" }}>
              Top Up Wallet
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Step4_dc
