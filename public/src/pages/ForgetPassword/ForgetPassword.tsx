import React from 'react'
import { useState } from 'react';

import * as yup from 'yup';
import Button from '../../components/Button/Button';



function ForgetPassword() {

    return (

        <div className="bg-gray-50 grid grid-cols-1">
            <div>
                <a href="/Login"><img src="src/assets/icons/arrow_left.svg" alt="" className='mt-5 text-primary-500' /></a>
            </div>
            <div className="container min-w-full center pt-18 relative flex flex-col justify-center items-center">
                <img className="w-72" src="src/assets/images/lock.png" alt="" />
                <h2 className='mt-5 mb-3'>Forgot password?</h2>
                <p style={{
                    color: 'grey'
                }}>Enter Your email below and we'll get you back into your account</p>
            </div>
            <div className="container min-w-full center pt-9 relative flex flex-col justify-center items-center">
                <div className='w-1/2'>
                    <div className='block'>
                        <input type="email"
                            placeholder='Enter your email'
                            className="mb-5 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500" />
                    </div>
                    <div className="">
                        <Button type="submit" className="button-primary-lg  button mt-1 mb-3" style={{ borderRadius: '10px'}}>
                            Set Budget
                        </Button>
                    </div>
                </div>
                <div className="container min-w-full center relative flex flex-col justify-center items-center mt-5">
                    <blockquote className="body-text-medium blockquote-form text-gray-500">
                        Back to
                        <a href="/Login">
                            <span className="relative font-semibold text-primary-500"> Login</span>
                        </a>
                    </blockquote>
                </div>

                {/* <a href="/OnBoarding">
                    <span className="relative font-semibold text-primary-500"> OnBoarding step 1</span>
                </a> */}
            </div>

        </div>
    )
}

export default ForgetPassword;
