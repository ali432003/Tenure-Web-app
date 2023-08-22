import React from 'react'
import Button from '../../components/Button/Button'


function Step2() {
    return (
        <div className="bg-gray-50 grid grid-cols-1">
            <div className="container min-w-full center pt-48 relative flex flex-col justify-center items-center">
                <h1>Invite your employees</h1>
                <p style={{ color: 'grey' }}
                    className='mt-2'>Invite your employees and start sharing rewards with them.</p>
            </div>
            <div>
                <p style={{
                    color: 'grey',
                    position: 'relative',
                    left:'22%'
                }}
                    className='mt-5'>Step 2/4</p>
            </div>
            
        <div className="container min-w-full center pt-9 relative flex flex-col justify-center items-center">

            <div className="mb-5 w-1/2 border border-gray-400 border-dashed p-4 rounded-lg">
                <img src="src/assets/icons/upload.svg" alt="" className='m-auto mb-3' />
                  Upload a CSV file with your employee details
            </div>
                <form className='w-1/2' method='Post' >
                    <label className="block">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Employee name"
                            className="mb-5 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
                        />
                    </label>
                    <label className="block">
                        <input
                            type="email"
                            name="role"
                            placeholder="Enter Employee email"
                            className="mb-5 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
                        />
                    </label>
                    <label className="block">
                        <input
                            type="date"
                            name="DOB"
                            placeholder="Enter Employee birth date"
                            className="mb-5 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
                        />
                    </label>
                    <label className="block">
                        <input
                            type="search"
                            name="location"
                            placeholder="Enter Employee location"
                            className="mb-5 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500" 
                        />
                        <img src="../../assets/icons/search.svg" alt="" />
                    </label>
                    <div className='text-lg font-semibold text-right' style={{color:"rgb(56 133 123 /1)"}}>
                    <img src="src/assets/icons/add_1.svg" alt="" style={{borderRadius:"50%",maxWidth:"fit-conteny",display:"inline"}}/>  Add Another Employee
                    </div>
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
                            Skip For Now
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Step2