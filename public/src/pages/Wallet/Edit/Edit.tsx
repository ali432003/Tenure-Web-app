import { TextField } from '@mui/material'
import {  useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
interface EditProps {
  headingText: string; // Define the type of headingText as string
}
export default function Edit({ headingText }: EditProps) {
  const navigate = useNavigate(); // Initialize the navigate function
  const navigateToWall = () => {
    navigate('/Wallet'); 
  };
  const formik = useFormik({
    initialValues: {
      holderName: '',
      cardNumber: '',
      ExpDate: '',
      CVV: '',
      postalCode: '',
    },
    validationSchema: yup.object().shape({
      holderName: yup.string().required('This field is required'),
      cardNumber: yup.string().required('This field is required'),
      ExpDate: yup.string().required('This field is required'),
      CVV: yup.string().required('This field is required'),
      postalCode: yup.string().required('This field is required'),
    }),
    onSubmit: () => {
      navigate('/Wallet')
    },
  });

  return (
 
      <div className='w-full ms-5'>
        <div className='flex text-start ms-4 mt-5'>
          <img src="src/assets/icons/arrow_left.svg" onClick={navigateToWall} className='mr-4 cursor-pointer' alt="" />
          {/* <h1>{location.pathname==='/Edit'&&'Edit Card Details'}</h1> */}
          <h1>{headingText}</h1>
        </div>
        <form className='flex flex-col mt-9' style={{width:"95%"}}onSubmit={formik.handleSubmit}>
          <TextField
           label="Card holder name" sx={{marginY:2}}
           type="text"
           name="holderName"
           value={formik.values.holderName}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           style={{ border: formik.touched.holderName && formik.errors.holderName ? '1px solid red' : '' }}></TextField>
          {formik.touched.holderName && formik.errors.holderName ? (
            <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik.errors.holderName}</div>
          ) : null}

          <TextField 
          label="Card number" sx={{marginY:2,outline:'none'}}
          name="cardNumber"
          value={formik.values.cardNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ border: formik.touched.cardNumber && formik.errors.cardNumber ? '1px solid red' : '' }}
          ></TextField>
          {formik.touched.cardNumber && formik.errors.cardNumber ? (
            <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">
              {formik.errors.cardNumber}
            </div>
          ) : null}

          <div className="flex w-full my-2 gap-8">
            <div className='w-1/2'>
            <TextField 
            sx={{width:1 ,marginRight:2}} label="Expiry date"
            name="ExpDate"
            value={formik.values.ExpDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ border: formik.touched.ExpDate && formik.errors.ExpDate ? '1px solid red' : '' }}
            ></TextField>
            {formik.touched.ExpDate && formik.errors.ExpDate ? (
                <div className="text-start mb-4 peer-invalid:visible text-danger-500 text-sm mt-2">
                  {formik.errors.ExpDate}
                </div>
              ) : null}
            </div>
            <div className='w-1/2'>
            <TextField 
            sx={{width:1}} label="CVV"
            name="CVV"
            value={formik.values.CVV}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ border: formik.touched.CVV && formik.errors.CVV ? '1px solid red' : '' }}
            ></TextField>
                          {formik.touched.CVV && formik.errors.CVV ? (
                <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm mt-2">{formik.errors.CVV}</div>
              ) : null}
              </div>
          </div>
          <TextField
           sx={{marginY:2}} label="postal code"
           name="postalCode"
              value={formik.values.postalCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ border: formik.touched.postalCode && formik.errors.postalCode ? '1px solid red' : '' }}
          ></TextField>
           {formik.touched.postalCode && formik.errors.postalCode ? (
            <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">
              {formik.errors.postalCode}
            </div>
          ) : null}
        <div className='flex justify-end mt-5 w-full'>
          <button className='p-2 rounded-md cursor-pointer mx-2' onClick={navigateToWall} style={{ border: "1px solid #38857B", color: "#38857B", fontWeight: "600" }}>Cancel</button>
          <button type="submit" className='p-2 rounded-md cursor-pointer' style={{ backgroundColor: "#38857B", color: "white", fontWeight: "600" }}>Save changes</button>
        </div>
        </form>
        <div className='h-40'></div>
      </div>

  )
}
