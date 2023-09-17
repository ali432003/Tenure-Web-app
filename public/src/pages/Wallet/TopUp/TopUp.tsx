import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import { useFormik } from 'formik';
const TopUp = () => {
let navigate =useNavigate()
const [active, setActive] = useState('card')

// const changeActive = (type:string) => {
//     setActive(type)
// }

  const formik = useFormik({
    initialValues: {
    amount:'',
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
      navigate('/Wallet')
    },
  });
  const formik2 = useFormik({
    initialValues: {
    amount:'',
      name: '',
      email: '',
      bank: ''
    },
    validationSchema: yup.object().shape({
        amount: yup.string().required('This field is required'),
        name: yup.string().required('This field is required'),
        email: yup.string().required('This field is required'),
        bank: yup.string().required('This field is required'),
    }),
    onSubmit: () => {
      navigate('/Wallet')
    },
  });
  return (
    <>
    <div className='flex text-start ms-4 mt-5'>
      <img src="src/assets/icons/arrow_left.svg" onClick={()=>navigate('/wallet')} className='mr-4 cursor-pointer' alt="" />
      {/* <h1>{location.pathname==='/Edit'&&'Edit Card Details'}</h1> */}
      <h1>Top Up Wallet</h1>
    </div>

    <div className='w-full ms-5'>
        <div className='flex gap-8'>
        <div className={`rounded-xl  border-4 pl-2 py-2 ${active==='card' && 'border-primary-400'}`} style={{width:'6%',}} onClick={()=>setActive('card')}>
            <img src={`src/assets/icons/${active==='card'?'wallet_1.svg':'wallet_1.svg'}`} alt="" />
            <p className='text-start text-gray mt-3'>Card</p>
        </div>
        <div className={`rounded-xl  border-4 pl-2 py-2 ${active === 'bank' && 'border-primary-400'}`} style={{width:'6%',}} onClick={()=>setActive('bank')}>
            <img src={`src/assets/icons/${active==='bank'?'bank_2.svg':'bank_1.svg'}  `} alt="" />
            <p className='text-start text-primary-600 mt-3'>Card</p>
        </div>
        </div>

        {/* <div className='flex flex-col mt-9' style={{width:"95%"}}>
              <TextField label="Enter an amount" sx={{marginY:2}}></TextField>
              <TextField label="Card number" sx={{marginY:2}}></TextField>
              <TextField label="Card holder name" sx={{marginY:2}}></TextField>
              <div className="flex justify-between my-2">
                <TextField sx={{width:1 ,marginRight:2}} label="Expiry date"></TextField>
                <TextField sx={{width:1}} label="CVV"></TextField>
              </div>
              <TextField sx={{marginY:2}} label="postal code"></TextField>
            </div>
             */}
{  active==='card' && 
     (
     
     
     <form className='flex flex-col mt-9' style={{width:"95%"}}onSubmit={formik.handleSubmit}>
        <TextField 
        label="Enter an amount" sx={{marginY:2}}
        name="amount"
        value={formik.values.amount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        style={{ border: formik.touched.amount && formik.errors.amount ? '1px solid red' : '' }}
        >
        </TextField>

        {formik.touched.amount && formik.errors.amount ? (
            <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik.errors.amount}</div>
          ) : null}

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
          <button className='p-2 rounded-md cursor-pointer mx-2' onClick={()=>navigate('/Wallet')} style={{ border: "1px solid #38857B", color: "#38857B", fontWeight: "600" }}>Cancel</button>
          <button type="submit" className='p-2 rounded-md cursor-pointer' style={{ backgroundColor: "#38857B", color: "white", fontWeight: "600" }}>Save changes</button>
        </div>
        </form>)
    }

{
    active === 'bank'&& 
    <>
    <form className='flex flex-col mt-9' style={{ width: "95%" }} onSubmit={formik2.handleSubmit}>
                      <TextField 
                      label="Enter amount" sx={{ marginY: 2 }}
                      name="amount"
                    value={formik2.values.amount}
                    onChange={formik2.handleChange}
                    onBlur={formik2.handleBlur}
                    style={{ border: formik2.touched.amount && formik2.errors.amount ? '1px solid red' : '' }}
                      >
                      </TextField>
                      {formik2.touched.amount && formik2.errors.amount ? (
                        <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik2.errors.amount}</div>
                    ) : null}

                      <TextField 
                      label="Enter your name" sx={{ marginY: 2 }}
                      name='name'
                      value={formik2.values.name}
                      onChange={formik2.handleChange}
                      onBlur={formik2.handleBlur}
                      style={{ border: formik2.touched.name && formik2.errors.name ? '1px solid red' : '' }}
                        >
                        </TextField>
                        {formik2.touched.name && formik2.errors.name ? (
                          <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik2.errors.name}</div>
                      ) : null}


                      <TextField 
                      label="Enter your email" sx={{ marginY: 2 }}
                      name='email'
                      value={formik2.values.email}
                      onChange={formik2.handleChange}
                      onBlur={formik2.handleBlur}
                      style={{ border: formik2.touched.email && formik2.errors.email ? '1px solid red' : '' }}
                        >
                        </TextField>
                        {formik2.touched.email && formik2.errors.email ? (
                          <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik2.errors.email}</div>
                      ) : null}

                      <FormControl sx={{ width: 'full', marginLeft: 0, marginTop: 2 }}>
                          <InputLabel id="demo-simple-select-label">Search Your Bank</InputLabel>
                          <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Search Your Bank"
                              onChange={formik2.handleChange}
                              onBlur={formik2.handleBlur}
                              value={formik2.values.bank}
                              name="bank" 
                              renderValue={(selected) => selected as string}
                              style={{ border: formik2.touched.bank && formik2.errors.bank ? '1px solid red' : '' }}
                          >
                              <MenuItem value="Bank of Canada">Bank of Canada</MenuItem>
                              <MenuItem value="TD Bank">TD Bank</MenuItem>
                              <MenuItem value="Royal Bank Of Canada">Royal Bank Of Canada</MenuItem>
                              <MenuItem value="Bank of Nova Scotia">Bank of Nova Scotia</MenuItem>
                              <MenuItem value="Bank Of Montreal">Bank Of Montreal</MenuItem>
                          </Select>
                      </FormControl>
                      {formik2.touched.bank && formik2.errors.bank ? (
                          <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik2.errors.bank}</div>
                      ) : null}
                      <div className='flex justify-end mt-5 w-full'>
                    <button className='p-2 rounded-md cursor-pointer mx-2' onClick={()=>navigate('/Wallet')} style={{ border: "1px solid #38857B", color: "#38857B", fontWeight: "600" }}>Cancel</button>
                    <button type="submit" className='p-2 rounded-md cursor-pointer' style={{ backgroundColor: "#38857B", color: "white", fontWeight: "600" }}>Save changes</button>
                    </div>
                  </form>
                  <div className='w-full mt-10 flex gap-4 justify-between' style={{width:"95%"}}>
                          <div className='border-4 w-3/12 rounded-lg'>
                              <img src="src/assets/icons/wallet_1.svg" alt="" className=' m-auto ' style={{width:'130px'}}/>
                          </div>
                          <div className='border-4 w-3/12 rounded-lg'>
                              <img src="src/assets/icons/wallet_1.svg" alt="" className=' m-auto ' style={{width:'130px'}}/>
                          </div>
                          <div className='border-4 w-3/12 rounded-lg'>
                              <img src="src/assets/icons/wallet_1.svg" alt="" className=' m-auto ' style={{width:'130px'}}/>
                          </div>
                          <div className='border-4 w-3/12 rounded-lg'>
                              <img src="src/assets/icons/wallet_1.svg" alt="" className=' m-auto ' style={{width:'130px'}}/>
                          </div>
                          <div className='border-4 w-3/12 rounded-lg'>
                              <img src="src/assets/icons/wallet_1.svg" alt="" className=' m-auto ' style={{width:'130px'}}/>
                          </div>
                         
   
                      </div>
                      </>
}


    {/* <div className='flex justify-end mt-5' style={{width:"95%"}}>
      <button className='p-2 rounded-md cursor-pointer mx-2' onClick={()=>navigate('/wallet')} style={{ border: "1px solid #38857B", color: "#38857B", fontWeight: "600" }}>Cancel</button>
      <button onClick={()=>navigate('/wallet')} className='p-2 rounded-md cursor-pointer' style={{ backgroundColor: "#38857B", color: "white", fontWeight: "600" }}>Top Up Wallet</button>
    </div> */}
    
    {/* <div className='h-40'></div> */}
  </div>
  </>
  )
}

export default TopUp