import React from 'react'
import Button from '../../components/Button/Button'

function Step4() {
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
                <form className='w-1/2'>
                    <label className='block'>
                        <input type="text"
                        placeholder='Amount to top up'
                        className="mb-5 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500" />
                    </label>
                    <label className='block'>
                        <input type="text"
                        placeholder='Card holder name'
                        className="mb-5 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500" />
                    </label>
                    <label className='block'>
                        <input type="text"
                        placeholder='Card holder number'
                        className="mb-5 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500" />
                    </label>
                    <label >
                        <input type="text"
                        placeholder='Expiration Date'
                        style={{marginRight:'20rem'}}
                        className=" mb-5 form-input px-4 py-3 w-1/2 border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500" />
                        <input type="text"
                        placeholder='CVV'
                        style={{position:'absolute',right:'24.8%'}}
                        className=" mb-5 form-input px-4 py-3 w-1/4 border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500" />
                    </label>
                    <label className='block'>
                        <input type="text"
                        placeholder='Postal code'
                        className="mb-5 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500" />
                    </label>
                    <div className="">
                        <Button type="submit" className="button-primary-lg  button mt-5 mb-9" style={{ borderRadius: '10px'}}>
                            Send Invite
                        </Button>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-lg font-semibold align-bottom cursor-pointer' style={{color:"rgb(56 133 123 /1)"}}>
                        <a href="/OnBoarding1"><img src="src/assets/icons/chevron_left.svg" alt="" style={{maxWidth:"fit-conteny",display:"inline"}} /> Previous</a>
                            
                        </span>
                        <span className='text-lg font-semibold cursor-pointer' style={{color:"rgb(56 133 123 /1)",textAlign:"right"}}>
                            Top Up Wallet
                        </span>
                    </div>
                </form>
            </div>

    </div>
  )
}

export default Step4
