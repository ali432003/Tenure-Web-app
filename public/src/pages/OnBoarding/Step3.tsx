import React from 'react'
import Button from '../../components/Button/Button'

function Step3() {
    return (
        <div className="bg-gray-50 grid grid-cols-1">
            <div className="container min-w-full center pt-48 relative flex flex-col justify-center items-center">
                <h1>Set your rewards budget</h1>
                <p style={{ color: 'grey' }}
                    className='mt-2'>Set your rewards budget for the next year</p>
            </div>
            <div>
                <p style={{
                    color: 'grey',
                    position: 'relative',
                    left: '22%'
                }}
                    className='mt-5'>Step 3/4</p>
            </div>
            <div className="container min-w-full center pt-9 relative flex flex-col justify-center items-center">
                <form className='w-1/2'>
                    <label className='block'>
                        <input type="text"
                            placeholder='enter an amount'
                            className="mb-5 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500" />
                    </label>
                    <div className="">
                        <Button type="submit" className="button-primary-lg  button mt-5 mb-9" style={{ borderRadius: '10px'}}>
                            Set Budget
                        </Button>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-lg font-semibold align-bottom cursor-pointer' style={{color:"rgb(56 133 123 /1)"}}>
                        <a href="/OnBoarding1"><img src="src/assets/icons/chevron_left.svg" alt="" style={{maxWidth:"fit-conteny",display:"inline"}} /> Previous</a>
                            
                        </span>
                        <span className='text-lg font-semibold cursor-pointer' style={{color:"rgb(56 133 123 /1)",textAlign:"right"}}>
                            Skip For Now
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Step3
