//import React from 'react'
import Button from '../../components/Button/Button';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Step4_sucess } from './Step4_sucess';
// import Step4_sucess from './Step4_sucess.tsx';
function Step4() {
const [component, setComponent] = useState(false)

  const formik = useFormik({
    initialValues: {
      amount: '',
      holderName: '',
      cardNumber: '',
      ExpDate: '',
      CVV: '',
      postalCode: '',
    },
    validationSchema: yup.object().shape({
      amount: yup.string().required('This field is required'),
      holderName: yup.string().required('This field is required'),
      cardNumber: yup.string().required('This field is required'),
      ExpDate: yup.string().required('This field is required'),
      CVV: yup.string().required('This field is required'),
      postalCode: yup.string().required('This field is required'),
    }),
    onSubmit: () => {
    setComponent(true);
    },
  });


  
  return (
<>
{
  component === false ?  

    <div className="bg-gray-50 grid grid-cols-1">
      <div className="container min-w-full center pt-48 relative flex flex-col justify-center items-center">
        <h1>Top up your wallet</h1>
        <p style={{ color: 'grey' }} className="mt-2 w-1/3">
          Add money to your gifting wallet through your credit card to gift your employees
        </p>
      </div>
      <div>
        <p
          className="text-gray-400 mt-5 mx-auto text-right w-1/3 "
        >
          Step 4/4
        </p>
      </div>
      <div className="container min-w-full center pt-9 relative flex flex-col justify-center items-center">
        <form className="w-1/3" onSubmit={formik.handleSubmit}>
          <label className="block">
            <input
              type="text"
              name="amount"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ border: formik.touched.amount && formik.errors.amount ? '1px solid red' : '' }}
              placeholder="Amount to top up"
              className="mb-5 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
            />
          </label>
          {formik.touched.amount && formik.errors.amount ? (
            <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik.errors.amount}</div>
          ) : null}
          <label className="block">
            <input
              type="text"
              name="holderName"
              value={formik.values.holderName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ border: formik.touched.holderName && formik.errors.holderName ? '1px solid red' : '' }}
              placeholder="Card holder name"
              className="mb-5 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
            />
          </label>
          {formik.touched.holderName && formik.errors.holderName ? (
            <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">
              {formik.errors.holderName}
            </div>
          ) : null}
          <label className="block">
            <input
              type="text"
              name="cardNumber"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ border: formik.touched.cardNumber && formik.errors.cardNumber ? '1px solid red' : '' }}
              placeholder="Card number"
              className="mb-5 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
            />
          </label>
          {formik.touched.cardNumber && formik.errors.cardNumber ? (
            <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">
              {formik.errors.cardNumber}
            </div>
          ) : null}

          <div className="flex gap-4">
            {/* <div > */}
            <div className="w-1/2">
              <label>
                <input
                  type="date"
                  name="ExpDate"
                  value={formik.values.ExpDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ border: formik.touched.ExpDate && formik.errors.ExpDate ? '1px solid red' : '' }}
                  placeholder="Expiration Date"
                  // style={{marginRight:'20rem'}}
                  className=" mb-5 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
                />
              </label>
              {formik.touched.ExpDate && formik.errors.ExpDate ? (
                <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">
                  {formik.errors.ExpDate}
                </div>
              ) : null}
            </div>

            <div className="w-1/2">
              <label>
                <input
                  type="text"
                  placeholder="CVV"
                  name="CVV"
                  value={formik.values.CVV}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ border: formik.touched.CVV && formik.errors.CVV ? '1px solid red' : '' }}
                  // style={{position:'absolute',right:'24.8%'}}
                  className=" mb-5 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
                />
              </label>
              {formik.touched.CVV && formik.errors.CVV ? (
                <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik.errors.CVV}</div>
              ) : null}
            </div>
          </div>

          <label className="block">
            <input
              type="text"
              name="postalCode"
              value={formik.values.postalCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ border: formik.touched.postalCode && formik.errors.postalCode ? '1px solid red' : '' }}
              placeholder="Postal code"
              className="mb-5 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
            />
          </label>
          {formik.touched.postalCode && formik.errors.postalCode ? (
            <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">
              {formik.errors.postalCode}
            </div>
          ) : null}
          <div className="">
            <Button type="submit" className="button-primary-lg  button mt-5 mb-9" style={{ borderRadius: '10px' }}>
              Link A Card
            </Button>
          </div>
          <div className="flex justify-between">
            <span className="text-lg font-semibold align-bottom cursor-pointer" style={{ color: 'rgb(56 133 123 /1)' }}>
              <a href="/OnBoarding3">
                <img
                  src="src/assets/icons/chevron_left.svg"
                  alt=""
                  style={{ maxWidth: 'fit-content', display: 'inline', transform: 'translateY(-4px)' }}
                />{' '}
                Previous
              </a>
            </span>
            <span
              className="text-lg font-semibold cursor-pointer"
              style={{ color: 'rgb(56 133 123 /1)', textAlign: 'right' }}
            >
              Skip For Now
            </span>
          </div>
        </form>
      </div>
    </div>


      : <Step4_sucess title={"Wallet successfully topped up"} btnText={"Done"} show={false} previousLink={"/onBoarding4"} stepNumber='4'/>
}
    </>
  );
}

export default Step4;
