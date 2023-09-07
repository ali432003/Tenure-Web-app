import React  from 'react'
import Slidebar from '../../../components/Slidebar/Slidebar'
import { TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';

export default function Edit() {
  const navigate = useNavigate(); // Initialize the navigate function
  const navigateToWall = () => {
    navigate('/Wallet'); // Replace '/cat-details' with the actual path to your CatDetails page
  };
  return (
    <div className='flex h-min-screen'>
      <Slidebar />
      <div className='w-5/6 ms-5'>
        <div className='flex text-start ms-4 mt-5'>
          <img src="src/assets/icons/arrow_left.svg" onClick={navigateToWall} className='mr-4 cursor-pointer' alt="" />
          <h1>Edit card details</h1>
        </div>
        <div className='flex flex-col w-5/6 mt-9'>
          <TextField label="Card holder name" sx={{marginY:2}}></TextField>
          <TextField label="Card number" sx={{marginY:2}}></TextField>
          <div className="flex justify-between my-2">
            <TextField sx={{width:1 ,marginRight:2}} label="Expiry date"></TextField>
            <TextField sx={{width:1}} label="CVV"></TextField>
          </div>
          <TextField sx={{marginY:2}} label="postal code"></TextField>
        </div>
        <div className='flex justify-end w-5/6 mt-5'>
          <button className='p-2 rounded-md cursor-pointer mx-2' onClick={navigateToWall} style={{ border: "1px solid #38857B", color: "#38857B", fontWeight: "600" }}>Cancel</button>
          <button className='p-2 rounded-md cursor-pointer' style={{ backgroundColor: "#38857B", color: "white", fontWeight: "600" }}>Save changes</button>
        </div>
        <div className='h-40'></div>
      </div>
    </div>
  )
}
