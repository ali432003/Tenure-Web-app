import React from 'react'
import Button from '../../components/Button/Button'


function Step1() {
    return (
        <div className="bg-gray-50 grid grid-cols-1">
            <div className="container min-w-full center pt-48 relative flex flex-col justify-center items-center">
                <h1>Welcome to Tenure</h1>
                <p style={{ color: 'grey' }}
                    className='mt-2'>Let's set up your account</p>
            </div>
            <div>
                <p style={{
                    color: 'grey',
                    position: 'relative',
                    left:'22%'
                }}
                    className='mt-5'>Step 1/4</p>
            </div>
            <div className="container min-w-full center pt-9 relative flex flex-col justify-center items-center">
                <form className='w-1/2' >
                    <label className="block">
                        <h4 style={{ textAlign:'left' }}>What is your name?</h4>
                        <input
                            type="name"
                            name="name"
                            placeholder="Enter your full name"
                            className="mb-2 placeholder:italic placeholder:text-slate-400 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
                        />
                    </label>
                    <label className="block">
                        <h4 style={{textAlign:'left' }} className='mt-4'>What is your role?</h4>
                        <input
                            type="name"
                            name="role"
                            placeholder="Enter your role"
                            className="mb-2 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
                        />
                    </label>
                    <label className="block">
                        <h4 style={{ textAlign:'left' }} className='mt-4'>What is the name of your company?</h4>
                        <p style={{ color: 'grey',textAlign:'left' }} className='mt-1 mb-1'>This is going to be your tenure account name</p>
                        <input
                            type="name"
                            name="email"
                            placeholder="Enter your company name"
                            className="mb-2 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
                        />
                    </label>
                    <label className="block">
                        <h4 style={{ textAlign:'left' }} className='mt-4'>What is your name?</h4>
                        <div className="relative">
                            <select name="" id=""  className="mb-2 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500">
                                <option value="">Select an option</option>
                                <optgroup>
                                    <option id='opt' value="">1-20</option>
                                    <option id='opt' value="">21-40</option>
                                    <option id='opt' value="">41-60</option>
                                    <option id='opt' value="">61-80</option>
                                    <option id='opt' value="">81-99</option>
                                    <option id='opt' value="">100+</option>
                                </optgroup>
                            </select>
                        </div>
                    </label>
                    <div className="">
                        <Button type="submit" className="button-primary-lg  button mt-7 " style={{ borderRadius: '10px', backgroundColor: "rgb(56 133 123 /1)", }}>
                           <a href="/OnBoarding2" className='contents'>
                            Next &nbsp;<img src='src/assets/icons/chevron_right.svg' style={{ filter: 'brightness(300%)' }}></img>
                           </a>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Step1
