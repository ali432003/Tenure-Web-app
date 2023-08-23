import React from 'react'
import Button from '../../components/Button/Button'

function Step4_sucess() {
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
                <div className="w-1/2 border-2 rounded-lg border-solid" style={{ borderColor: "rgb(56 133 123 /1)" }}>
                    <img src="src/assets/icons/check_filled_1.svg" width={'250px'} style={{
                        padding: '16%', marginLeft: '29%'
                    }} alt="" />
                    <div style={{ transform: 'translateY(-261%)' }}>
                        <span className='text-lg font-semibold cursor-pointer '
                            style={{ color: "rgb(56 133 123 /1)" }}>
                            Wallet sucessfully topped up
                        </span>
                    </div>
                </div>
                <div className="w-1/2">
                    <Button type="submit" className="button-primary-lg  button mt-5 mb-9" style={{ borderRadius: '10px' }}>
                        Done
                    </Button>
                </div>
                <div className="w-1/2">
                    <div className='flex justify-between'>
                        <span className='text-lg font-semibold align-bottom cursor-pointer' style={{ color: "rgb(56 133 123 /1)" }}>
                            <a href="/OnBoarding1"><img src="src/assets/icons/chevron_left.svg" alt="" style={{ maxWidth: "fit-content", display: "inline", transform: 'translateY(-3px)' }} /> Previous</a>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Step4_sucess
