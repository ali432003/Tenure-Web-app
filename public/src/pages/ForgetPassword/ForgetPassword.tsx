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
            <div className="container min-w-full center pt-48 relative flex flex-col justify-center items-center">
                <img className="w-72 phone:w-24 tablet:w-32" src="src/assets/icons/password.svg" alt="" />
                <h2 className='mt-5 mb-3'>Forgot password?</h2>
                <p style={{
                    color: 'grey'
                }}>Enter Your email below and we'll get you back into your account</p>
            </div>
            <div className='container min-w-full center pt-2 relative flex flex-col justify-center items-center'>
                <div className='email  mt-5'>
                    <input type="email"
                        placeholder='Enter your email'
                        style={{
                            width: '150%',
                            marginLeft:'2rem',
                            transform:'translateX(-6rem)'
                        }}
                        className='border-2 rounded-lg border-solid border-gray-300' />
                </div>
                
                    <Button type="submit" className="button-primary-lg center button" style={{ borderRadius: '10px', backgroundColor: "rgb(56 133 123 /1)",width:"30%",marginTop:"1rem" }}>
                        Submit
                    </Button>
                
                <div className="container min-w-full center relative flex flex-col justify-center items-center mt-5">
                    <blockquote className="body-text-medium blockquote-form text-gray-500">
                        Back to
                        <a href="/Login">
                            <span className="relative font-semibold text-primary-500"> Login</span>
                        </a>
                    </blockquote>
                </div>

                <a href="/OnBoarding1">
                    <span className="relative font-semibold text-primary-500"> OnBoarding step 1</span>
                </a>
            </div>

        </div>
    )
}

export default ForgetPassword;
