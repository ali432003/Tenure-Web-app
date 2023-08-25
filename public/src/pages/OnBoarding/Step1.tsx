import React,{useState} from 'react';
import Button from '../../components/Button/Button';
import * as yup from 'yup';
import { Field, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';


function Step1() {
const [validation, setValidation] = useState(false)

const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullName: '',
      role: '',
      companyName: '',
      options: '',
    },
    validationSchema: yup.object().shape({
      fullName: yup.string().required('This field is required'),
      role: yup.string().required('This field is required'),
      companyName: yup.string().required('This field is required'),
      options: yup.string().required('This field is required'),
    }),
    onSubmit: (values) => {
      //console.log(JSON.stringify(values, null, 2));
      navigate('/OnBoarding2')
    },
  });

  const companySize = [
    {value:"1-20",label:"1-20"},
    {value:"21-40",label:"21-40"},
    {value:"41-60",label:"41-60"},
   { value:"61-80",label:"61-80"},
   { value:"81-99",label:"81-99"},
   { value:"100+",label:"100+"}
]


  
  return (
    <div className="bg-gray-50 grid grid-cols-1">
      <div className="container min-w-full center pt-48 relative flex flex-col justify-center items-center">
        <h1>Welcome to Tenure</h1>
        <p style={{ color: 'grey' }} className="mt-2">
          Let's set up your account
        </p>
      </div>
      <div>
        <p
          style={{
            color: 'grey',
            position: 'relative',
            left: '22%',
          }}
          className="mt-5"
        >
          Step 1/4
        </p>
      </div>
      <div className="container min-w-full center pt-9 relative flex flex-col justify-center items-center">
        <form className="w-1/2" onSubmit={formik.handleSubmit}>
          <label className="block">
            <h4 style={{ textAlign: 'left' }}>What is your name?</h4>
            <input
              type="text"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ border: formik.touched.fullName && formik.errors.fullName ? '1px solid red' : '' }}
              placeholder="Enter your full name"
              className="mb-2 placeholder:italic placeholder:text-slate-400 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
            />
          </label>
          <div className="mb-4">
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">
                {formik.errors.fullName}
              </div>
            ) : null}
          </div>
          <label className="block">
            <h4 style={{ textAlign: 'left' }} className="mt-4">
              What is your role?
            </h4>
            <input
              type="name"
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ border: formik.touched.role && formik.errors.role ? '1px solid red' : '' }}
              placeholder="Enter your role"
              className="mb-2 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
            />
          </label>
          <div className="mb-4">
            {formik.touched.role && formik.errors.role ? (
              <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">
                {formik.errors.role}
              </div>
            ) : null}
          </div>
          <label className="block">
            <h4 style={{ textAlign: 'left' }} className="mt-4">
              What is the name of your company?
            </h4>
            <p style={{ color: 'grey', textAlign: 'left' }} className="mt-1 mb-1">
              This is going to be your tenure account name
            </p>
            <input
              type="name"
              name="companyName"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ border: formik.touched.companyName && formik.errors.companyName ? '1px solid red' : '' }}
              placeholder="Enter your company name"
              className="mb-2 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
            />
          </label>
          <div className="mb-4">
            {formik.touched.companyName && formik.errors.companyName ? (
              <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">
                {formik.errors.companyName}
              </div>
            ) : null}
          </div>
          <label className="block" htmlFor="options">
            <h4 style={{ textAlign: 'left' }} className="mt-4">
              What is your name?
            </h4>
            <div className="relative">
              <select 
                id="options"
                className="mb-2 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
                name="options"
                value={formik.values.options}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ border: formik.touched.options && formik.errors.options ? '1px solid red' : '' }}
              >
                <option value="">Select an option</option>
                <optgroup>
                {companySize.map(item => 
                    <option value={item.value} label={item.label}>{item.value}</option>
                     )} 
                  {/* <option id="opt" value="1-20" label='1-20'>
                    1-20
                  </option>
                  <option id="opt" value="21-40" label='21-40'>
                    21-40
                  </option>
                  <option id="opt" value="">
                    41-60
                  </option>
                  <option id="opt" value="">
                    61-80
                  </option>
                  <option id="opt" value="">
                    81-99
                  </option>
                  <option id="opt" value="">
                    100+
                  </option> */}
                </optgroup>
              </select>
            </div>
          </label>
          <div className="mb-4">
            {formik.touched.options && formik.errors.options ? (
              <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">
                {formik.errors.options}
              </div>
            ) : null}
          </div>
          <div className="">
            <Button
              type="submit"
              className="button-primary-lg  button mt-7 "
              style={{ borderRadius: '10px', backgroundColor: 'rgb(56 133 123 /1)' }}
            >
                <span className="contents">
                  Next &nbsp;<img src="src/assets/icons/chevron_right.svg" style={{ filter: 'brightness(300%)' }} alt="right_arrow"></img>
                </span>
              
              {/* {
                Object.keys(formik.errors).length == 0 && 
                <a href="/OnBoarding2" className="contents">
                Next &nbsp;<img src="src/assets/icons/chevron_right.svg" style={{ filter: 'brightness(300%)' }} alt="right_arrow"></img>
              </a>
              } */}
              {/* {Object.keys(formik.errors).length > 0 ? (
                <span className="contents">
                  Next &nbsp;<img src="src/assets/icons/chevron_right.svg" style={{ filter: 'brightness(300%)' }} alt="right_arrow"></img>
                </span>
              ) : (
                <a href="/OnBoarding2" className="contents">
                  Next &nbsp;<img src="src/assets/icons/chevron_right.svg" style={{ filter: 'brightness(300%)' }} alt="right_arrow"></img>
                </a>
              )} */}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Step1;
