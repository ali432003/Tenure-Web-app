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
                    marginLeft: '23rem'
                }}
                    className='mt-5'>Step 1/4</p>
            </div>
            <div className="container min-w-full center pt-9 relative flex flex-col justify-center items-center">
                <form >
                    <label className="block">
                        <h4 style={{ marginRight: '14rem' }}>What is your name?</h4>
                        <input
                            type="name"
                            name="name"
                            placeholder="Enter your full name"
                            className="mb-2 form-input px-4 py-3 w-96 border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
                        />
                    </label>
                    <label className="block">
                        <h4 style={{ marginRight: '15rem' }} className='mt-4'>What is your role?</h4>
                        <input
                            type="name"
                            name="role"
                            placeholder="Enter your role"
                            className="mb-2 form-input px-4 py-3 w-96 border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
                        />
                    </label>
                    <label className="block">
                        <h4 style={{ marginRight: '6.3rem' }} className='mt-4'>What is the name of your company?</h4>
                        <p style={{ color: 'grey', marginRight: '3.3rem' }} className='mt-1 mb-1'>This is going to be your tenure account name</p>
                        <input
                            type="name"
                            name="email"
                            placeholder="Enter your company name"
                            className="mb-2 form-input px-4 py-3 w-96 border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
                        />
                    </label>
                    <label className="block">
                        <h4 style={{ marginRight: '14rem' }} className='mt-4'>What is your name?</h4>
                        <div className="relative">
                            <select name="" id=""  className="mb-2 form-input px-4 py-3 w-96 border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500">
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
                    <div className="px-5">
                        <Button type="submit" className="button-primary-lg  button" style={{ borderRadius: '10px', backgroundColor: "rgb(56 133 123 /1)", marginRight: '20rem', marginBottom: '5rem', marginTop: '1rem' }}>
                                Next <img src='src/assets/icons/chevron_right.svg' style={{ position: 'absolute', marginLeft: '4rem', filter: 'brightness(300%)' }}></img>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Step1
