import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import { Formik, Form, FieldArray, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
  employees: [{ name: '', email: '', birthday: '', location: '' }],
};

const validationSchema = yup.object().shape({
  employees: yup.array().of(
    yup.object().shape({
      name: yup.string().required('This Field is required'),
      email: yup.string().required('This Field is required').email('Not a valid email'),
      birthday: yup.date().required('This Field is required'),
      location: yup.string().required('This Field is required').min(3, 'Location must be at least 3 characters'),
    }),
  ),
});

function Step2() {
  // return(
  //     <Formik initialValues={
  //             initialValues
  //         }
  //         validationSchema={validationSchema}
  //         onSubmit={(values,actions)=>{
  //             console.log(values)
  //         }}>
  //     {({values})=>(
  //         <Form>
  //             <FieldArray name='employees'
  //             render ={({push,pop})=>{
  //                 return(
  //                     <>
  //                     <div>
  //                         {values.employees.map((employee, index) => {
  //                             return (
  //                             <div key={index}>
  //                             <Field key={`${index}-name`} id={`employees.${index}.name`} name={`employees.${index}.name`} />
  //                             <Field key={`${index}-role`} id={`employees.${index}.role`} name={`employees.${index}.role`} />
  //                             </div>
  //                              )
  //                         })}
  //                     </div>
  //                     <button
  //                         type='button'
  //                         onClick={() => push({ name: '', role: '' })}
  //                     >
  //                             add New
  //                         </button><button
  //                             type='button'
  //                             onClick={() => pop()}
  //                         >
  //                             remove
  //                         </button>
  //                         </>

  //                 )
  //             }}
  //             />
  //         </Form>
  //     )}

  //     </Formik>
  // )
  const [submitted, setSubmitted] = useState(false);
  function onSubmit(values: any) {
    console.log(values);
  }
  type PushFunctionType = (obj: any) => void;
  type PopFunctionType = () => void;

  return (
    <>
      <div className="bg-gray-50 grid grid-cols-1">
        <div className="container min-w-full center pt-48 relative flex flex-col justify-center items-center">
          <h1>Invite your employees</h1>
          <p style={{ color: 'grey' }} className="mt-2">
            Invite your employees and start sharing rewards with them.
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
            Step 2/4
          </p>
        </div>

        <div className="container min-w-full center pt-9 relative flex flex-col justify-center items-center">
          <div className="mb-5 w-1/2 border border-gray-400 border-dashed p-4 rounded-lg">
            <img src="src/assets/icons/upload.svg" alt="" className="m-auto mb-3" />
            Upload a CSV file with your employee details
          </div>

          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ values, errors }) => (
              <Form className="w-1/2" method="Post">
                <FieldArray
                  name="employees"
                  render={({ push, pop }: { push: PushFunctionType; pop: PopFunctionType }) => {
                    return (
                      <>
                        {values.employees.map((employee, index) => {
                          return (
                            <>
                              <div key={index}>
                                <label className="block mb-5 text-left">
                                  <Field
                                    key={`${index}-name`}
                                    id={`employees.${index}.name`}
                                    name={`employees.${index}.name`}
                                    type="text"
                                    placeholder="Enter Employee name"
                                    className="mb-1 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
                                  />
                                  <ErrorMessage
                                    component="div"
                                    name={`employees.${index}.name`}
                                    className="text-red-500"
                                  />
                                </label>
                                <label className="block mb-5 text-left">
                                  <Field
                                    key={`${index}-email`}
                                    id={`employees.${index}.email`}
                                    name={`employees.${index}.email`}
                                    type="email"
                                    placeholder="Enter Employee email"
                                    className="mb-1 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
                                  />
                                  <ErrorMessage
                                    component="div"
                                    name={`employees.${index}.email`}
                                    className="text-red-500"
                                  />
                                </label>
                                <label className="block mb-5 text-left">
                                  <Field
                                    key={`${index}-birthday`}
                                    id={`employees.${index}.birthday`}
                                    name={`employees.${index}.birthday`}
                                    type="date"
                                    placeholder="Enter Employee birth date"
                                    className="mb-1 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
                                  />
                                  <ErrorMessage
                                    component="div"
                                    name={`employees.${index}.birthday`}
                                    className="text-red-500 "
                                  />
                                </label>
                                <label className="block mb-5 text-left">
                                  <Field
                                    key={`${index}-location`}
                                    id={`employees.${index}.location`}
                                    name={`employees.${index}.location`}
                                    type="search"
                                    placeholder="Enter Employee location"
                                    className="mb-1 form-input px-4 py-3 w-full border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
                                  />
                                  <img
                                    src="src/assets/icons/search.svg"
                                    alt=""
                                    className="absolute"
                                    style={{ right: '26%', transform: 'translateY(-2.5rem)' }}
                                  />
                                  <ErrorMessage
                                    component="div"
                                    name={`employees.${index}.location`}
                                    className="text-red-500 "
                                  />
                                </label>
                              </div>

                              {values.employees.length >= 2 && <hr className="border-t border-gray-300 mb-4" />}
                            </>
                          );
                        })}
                        <div className="flex justify-end gap-4 mb-6">
                          {values.employees.length >= 2 && (
                            <button
                              type="button"
                              className="text-lg font-semibold text-right text-red-600"
                              onClick={() => pop()}
                            >
                              <img
                                src="src/assets/icons/close.svg"
                                alt=""
                                style={{
                                  borderRadius: '50%',
                                  maxWidth: 'fit-content',
                                  display: 'inline',
                                  transform: 'translateY(-2px)',
                                }}
                              />{' '}
                              Remove Employee
                            </button>
                          )}
                          <button
                            type="button"
                            className="text-lg font-semibold text-right"
                            style={{ color: 'rgb(56 133 123 /1)' }}
                            onClick={() => push({ name: '', email: '', birthday: '', location: '' })}
                          >
                            <img
                              src="src/assets/icons/add_1.svg"
                              alt=""
                              style={{ borderRadius: '50%', maxWidth: 'fit-content', display: 'inline' }}
                            />{' '}
                            Add Another Employee
                          </button>
                        </div>
                      </>
                    );
                  }}
                />

                <div className="">
                  {/* <Button type="submit" className="button-primary-lg button mt-5 mb-9" style={{ borderRadius: '10px',backgroundColor: "rgb(56 133 123 /1)"}}>
                          <a href="/OnBoarding3">Send Invite</a> 
                        </Button> */}
                  <Button
                    type="submit"
                    className="button-primary-lg button mt-7"
                    style={{ borderRadius: '10px', backgroundColor: 'rgb(56 133 123 /1)' }}
                    onClick={() => setSubmitted(true)} // Update state when button is clicked
                  >
                    {submitted ? (
                      <a href="/OnBoarding2" className="contents">
                        Send Invite
                        <img
                          src="src/assets/icons/chevron_right.svg"
                          style={{ filter: 'brightness(300%)' }}
                          alt="right_arrow"
                        />
                      </a>
                    ) : (
                      <span className="contents">
                        Send Invite
                        <img
                          src="src/assets/icons/chevron_right.svg"
                          style={{ filter: 'brightness(300%)' }}
                          alt="right_arrow"
                        />
                      </span>
                    )}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>

          <div className="flex justify-between w-1/2 mb-4">
            <span className="text-lg font-semibold align-bottom cursor-pointer" style={{ color: 'rgb(56 133 123 /1)' }}>
              <a href="/OnBoarding1">
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
        </div>
      </div>
    </>
  );
}

export default Step2;
