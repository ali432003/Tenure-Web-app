import React, { useState } from 'react'
import Slidebar from '../../components/Slidebar/Slidebar'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';





export default function Settings() {
  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
  };
  const [selectedCategory, setSelectedCategory] = useState('accountSetting'); //child
  const [accDivShown, setAccDivShown] = useState(true)
  const [passDivShown, setPassDivShown] = useState(false)
  const [editInfoFormShown, setEditInfoFormShown] = useState(false)
  const [InfoFormShown, setInfoFormShown] = useState(true)


  let EditInfo = () => {
    setEditInfoFormShown(true)
    setInfoFormShown(false)
  }
  let info = () => {
    setEditInfoFormShown(false)
    setInfoFormShown(true)
  }
  const accSett = () => {
    filterByCategory('accountSetting')
    setAccDivShown(true)
    setPassDivShown(false)

  }
  const passSett = () => {
    filterByCategory('passwordSetting')
    setPassDivShown(true)
    setAccDivShown(false)

  }
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  }



  return (
    <div className='flex h-min-screen'>
      <Slidebar />
      <div className='w-5/6 ms-5'>
        <div className='flex items-center justify-between text-start ms-4 mt-5'>
          <h1>Settings</h1>

        </div>
        <div className="flex h-full">
          <div className='w-1/3 h-full mt-6 shadow-2xl'>
            <a onClick={accSett} className={`${selectedCategory === 'accountSetting'
              ? 'bg-yellow-400 text-white'
              : 'hover:bg-yellow-400 hover:text-white'
              } mb-3 cursor-pointer p-4 flex`} style={{ color: "#5A7894" }}><img src="src/assets/icons/user.svg" className='mr-5' alt="" />Account Setting <img src="src/assets/icons/chevron_right.svg" className='ml-36' alt="" /></a>
            <h4 onClick={passSett} className={`${selectedCategory === 'passwordSetting'
              ? 'bg-yellow-400 text-white'
              : 'hover:bg-yellow-400 hover:text-white'
              } mb-3 cursor-pointer p-4 flex`} style={{ color: "#5A7894" }}><img src="src/assets/icons/password.svg" className='mr-5' alt="" />Change password <img src="src/assets/icons/chevron_right.svg" className='ml-32' alt="" /></h4>
            <h4 className={`${selectedCategory === 'customerSupport'
              ? 'bg-yellow-400 text-white'
              : 'hover:bg-yellow-400 hover:text-white'
              } mb-3 cursor-pointer p-4 flex`} style={{ color: "#5A7894" }}><img src="src/assets/icons/contact_support.svg" className='mr-5' alt="" />Contact support <img src="src/assets/icons/chevron_right.svg" className='ml-36' alt="" /></h4>
          </div>

          {accDivShown && <div className='ml-10 mt-8' style={{ color: "#5A7894" }}>
            <div className="flex">
              <h4 className='text-xl text-black'>Account Info</h4>
              <button onClick={EditInfo} className='flex ml-96 p-2 rounded-lg' style={{ border: "1px solid #38857b", color: "#38857b", fontWeight: "700" }}><img src="src/assets/icons/edit.svg" className='mr-2' alt="" />Edit Account Info</button>
            </div>
            {InfoFormShown && <><div className='flex mt-12 justify-between w-5/6'>
              <div className='flex flex-col'>
                <h6 className='font-bold text-lg text-start'>Full name</h6>
                <p className='text-sm font-bold my-5 text-start'>John Doe</p>
              </div>
              <div className='flex flex-col'>
                <h6 className='font-bold text-lg text-start'>Email</h6>
                <p className='text-sm font-bold my-5'>Johndoe@gmail.com</p>
              </div>
              <div className='flex flex-col'>
                <h6 className='font-bold text-lg text-start'>Role</h6>
                <p className='text-sm font-bold my-5'>Human Resources manager</p>
              </div>
            </div>
              <div className="flex mt-10 justify-start w-3/5">
                <div className='flex flex-col'>
                  <h6 className='font-bold text-lg text-start w-1/5'>Company name</h6>
                  <p className='text-sm font-bold my-5 text-start'>Tenure</p>
                </div>
                <div className='flex flex-col ml-8'>
                  <h6 className='font-bold text-lg text-start'>No of Employees</h6>
                  <p className='text-sm font-bold my-5 text-start'>1-20</p>
                </div>
              </div></>}
            {editInfoFormShown && <div className='flex mt-12 justify-between w-5/6'>
              <div className="flex flex-col w-full text-start" style={{ color: "#25384D" }}>
                <h4>Full name</h4>
                <input type="text" style={{ border: "2px solid #8AAEC9" }} className='my-2 rounded-lg' />
                <h4>Email</h4>
                <input type="text" style={{ border: "2px solid #8AAEC9" }} className='my-2 rounded-lg' />
                <h4>Role</h4>
                <input type="text" style={{ border: "2px solid #8AAEC9" }} className='my-2 rounded-lg' />
                <h4>Company Name</h4>
                <input type="text" style={{ border: "2px solid #8AAEC9" }} className='my-2 rounded-lg' />
                <h4>Company Size</h4>
                <Box sx={{ width: 1 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Company Size</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Company Size"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>1-20</MenuItem>
                      <MenuItem value={20}>1-20</MenuItem>
                      <MenuItem value={30}>1-20</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <div className='flex justify-end mt-5'>
                  <button className='p-2 rounded-md cursor-pointer mx-2' onClick={info} style={{ border: "1px solid #38857B", color: "#38857B", fontWeight: "600" }}>Cancel</button>
                  <button className='p-2 rounded-md cursor-pointer' onClick={info} style={{ backgroundColor: "#38857B", color: "white", fontWeight: "600" }}>Save changes</button>
                </div>
              </div>

            </div>}
          </div>}
          {passDivShown && <div className='ml-10 mt-8' style={{ color: "#5A7894" }}>
            <div className="flex">
              <h4 className='text-xl text-black'>Change password</h4>
              <div>
                
              </div>
            </div>
          </div>}

        </div>
      </div>

    </div>
  )
}

