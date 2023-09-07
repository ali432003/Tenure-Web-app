import React from 'react'
import { useNavigate } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Input } from '@mui/joy';
import styled from '@emotion/styled';
import CatDetails from '../../../components/CatDetails/CatDetails';
import { Link } from 'react-router-dom';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ['Everyday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function CreateANewDeal() {
  const navigate = useNavigate(); // Initialize the navigate function
  const navigateToDeal = () => {
    navigate('/Deals'); // Replace '/cat-details' with the actual path to your CatDetails page
  };
  
  

  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (

    <div className='flex h-min-screen'>
      <Slidebar />
      <div className='w-5/6 ms-5'>
        <div className='flex text-start ms-4 mt-5'>
          <img src="src/assets/icons/arrow_left.svg" className='mr-4' alt="" />
          <h1>Create new deal</h1>
        </div>

        {isNewDealFormVisible && <div className='text-start mt-8 ms-4'>
          <div className='flex flex-col w-5/6'>
            <h3>Deal availability</h3>
            <p className='my-2' style={{ color: "gray" }}>Select the date range and reach or your deal</p>
            <Input sx={{ marginTop: 2 }}
              type="date"
              slotProps={{
                input: {
                  min: '2018-06-07T00:00',
                  max: '2018-06-14T00:00',
                },
              }}
            />
            <FormControl sx={{ marginTop: 2, marginLeft: 0, width: 'full' }}>
              <InputLabel id="demo-multiple-checkbox-label">Days available</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Days available" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
                style={{ padding: "0px" }}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: "full", marginLeft: 0, marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label">Deal reach</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Deal reach"
                onChange={handleChange}
              >
                <MenuItem>State</MenuItem>
                <MenuItem>National</MenuItem>
                <MenuItem>Online</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "full", marginLeft: 0, marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label">Deal target</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Deal target"
                onChange={handleChange}
              >
                <MenuItem>Employers</MenuItem>
                <MenuItem>All employees</MenuItem>
                <MenuItem>Your employees only</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "full", marginLeft: 0, marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label">category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="category"
                onChange={handleChange}
              >
                <MenuItem>Food</MenuItem>
                <MenuItem>Healthcare</MenuItem>
                <MenuItem>Retail</MenuItem>
                <MenuItem>Travel</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='flex flex-col w-5/6 mt-10'>
            <h3>Deal redemption</h3>
            <p className='my-2' style={{ color: "gray" }}>Select an offer type and redemption criteria</p>
            <FormControl sx={{ width: "full", marginLeft: 0, marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label">Deal type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Deal type"
                onChange={handleChange}
              >
                <MenuItem>Card linked</MenuItem>
                <MenuItem>Click</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "full", marginLeft: 0, marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label">Trigger</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Trigger"
                onChange={handleChange}
              >
                <MenuItem>Minimus purchase amount</MenuItem>
                <MenuItem>Cumulative purchase amount</MenuItem>
                <MenuItem>Purchase frequency</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='flex flex-col w-5/6 mt-10'>
            <h3>Minimum purchase amount details</h3>
            <TextField type='text' label="minimus purchase amount" sx={{ marginTop: 2 }}></TextField>
            <TextField type='text' label="Redemption limit per user" sx={{ marginTop: 2 }}></TextField>
            <div className='flex'>
              <FormControl sx={{ width: 1 / 4, marginLeft: 0, marginTop: 2 }}>
                <InputLabel id="demo-simple-select-label">Reward Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Reward Type"
                  onChange={handleChange}
                >
                  <MenuItem>percentage (%)</MenuItem>
                  <MenuItem>Cash ($)</MenuItem>
                </Select>
              </FormControl>
              <TextField label="Reward amount full" sx={{ marginTop: 2, marginLeft: 1, width: 1 }}></TextField>
            </div>
          </div>
          <div className='flex flex-col w-5/6 mt-10'>
            <h3>Deal Details</h3>
            <TextField label="Title" sx={{ marginTop: 2 }}></TextField>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              sx={{ marginTop: 2 }}
    <div className="w-full ms-5">
      <div className="flex text-start ms-4 mt-5">
        <img src="src/assets/icons/arrow_left.svg" className="mr-4" alt="" />
        <h1>Create new deal</h1>
      </div>
      <div className="text-start mt-8 ms-4">
        <div className="flex flex-col " style={{ width: '95%' }}>
          <h3>Deal availability</h3>
          <p className="my-2" style={{ color: 'gray' }}>
            Select the date range and reach or your deal
          </p>
          <Input
            sx={{ marginTop: 2 }}
            type="date"
            slotProps={{
              input: {
                min: '2018-06-07T00:00',
                max: '2018-06-14T00:00',
              },
            }}
          />
          <FormControl sx={{ marginTop: 2, marginLeft: 0, width: 'full' }}>
            <InputLabel id="demo-multiple-checkbox-label">Days available</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Days available" />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
              style={{ padding: '0px' }}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ width: 'full', marginLeft: 0, marginTop: 2 }}>
            <InputLabel id="demo-simple-select-label">Deal reach</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Deal reach"
              onChange={handleChange}
            >
              <MenuItem>State</MenuItem>
              <MenuItem>National</MenuItem>
              <MenuItem>Online</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: 'full', marginLeft: 0, marginTop: 2 }}>
            <InputLabel id="demo-simple-select-label">Deal target</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Deal target"
              onChange={handleChange}
            >
              <MenuItem>Employers</MenuItem>
              <MenuItem>All employees</MenuItem>
              <MenuItem>Your employees only</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: 'full', marginLeft: 0, marginTop: 2 }}>
            <InputLabel id="demo-simple-select-label">category</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="category" onChange={handleChange}>
              <MenuItem>Food</MenuItem>
              <MenuItem>Healthcare</MenuItem>
              <MenuItem>Retail</MenuItem>
              <MenuItem>Travel</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex flex-col mt-10" style={{ width: '95%' }}>
          <h3>Deal redemption</h3>
          <p className="my-2" style={{ color: 'gray' }}>
            Select an offer type and redemption criteria
          </p>
          <FormControl sx={{ width: 'full', marginLeft: 0, marginTop: 2 }}>
            <InputLabel id="demo-simple-select-label">Deal type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Deal type"
              onChange={handleChange}
            >
              <MenuItem>Card linked</MenuItem>
              <MenuItem>Click</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: 'full', marginLeft: 0, marginTop: 2 }}>
            <InputLabel id="demo-simple-select-label">Trigger</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Trigger" onChange={handleChange}>
              <MenuItem>Minimus purchase amount</MenuItem>
              <MenuItem>Cumulative purchase amount</MenuItem>
              <MenuItem>Purchase frequency</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex flex-col mt-10" style={{ width: '95%' }}>
          <h3>Minimum purchase amount details</h3>
          <TextField type="text" label="minimus purchase amount" sx={{ marginTop: 2 }}></TextField>
          <TextField type="text" label="Redemption limit per user" sx={{ marginTop: 2 }}></TextField>
          <div className="flex">
            <FormControl sx={{ width: 1 / 4, marginLeft: 0, marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label">Reward Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Reward Type"
                onChange={handleChange}
              >
                <MenuItem>percentage (%)</MenuItem>
                <MenuItem>Cash ($)</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Reward amount full" sx={{ marginTop: 2, marginLeft: 1, width: 1 }}></TextField>
          </div>
        </div>
        <div className="flex flex-col mt-10" style={{ width: '95%' }}>
          <h3>Deal Details</h3>
          <TextField label="Title" sx={{ marginTop: 2 }}></TextField>
          <TextField id="outlined-multiline-static" label="Description" multiline rows={4} sx={{ marginTop: 2 }} />
        </div>
        <div className="flex mt-10 justify-between" style={{ width: '95%' }}>
          <span style={{ color: '#38857B', fontWeight: '600' }}>Cancel</span>
          <button
            onClick={navigateToCatDetails}
            className="p-2 px-8 ps-4 rounded-lg flex "
            style={{ backgroundColor: '#38857B', color: 'white', fontWeight: '600' }}
          >
            Next{' '}
            <img
              src="src/assets/icons/chevron_right.svg"
              style={{ filter: 'brightness(500%)' }}
              className="ml-9 absolute"
              alt=""
            />
          </div>
          <div className='flex w-5/6 mt-10 justify-between'>
            <span className="cursor-pointer" style={{ color: "#38857B", fontWeight: "600" }} onClick={navigateToDeal}>Cancel</span>
            <button onClick={toggleBrandForm} className='p-2 px-8 ps-4 rounded-lg flex ' style={{ backgroundColor: "#38857B", color: "white", fontWeight: "600" }}>Next <img src="src/assets/icons/chevron_right.svg" style={{ filter: "brightness(500%)" }} className='ml-9 absolute' alt="" /></button>
          </div>

        </div>}
        {isBrandFormVisible && <div className='text-start mt-8 ms-4'>
          <h1>Brand logo</h1>
          <p style={{ color: "grey" }} className='my-2'>Select your brand logo</p>
          <div className='w-5/6'>
            <div className="w-full my-5 border border-gray-400 border-dashed p-4 rounded-lg text-center">
              <img src="src/assets/icons/CSV_file.svg" alt="" className='m-auto mb-3' />
              Upload a CSV file with your employee details
            </div>
          </div>
          <div className='flex flex-col w-5/6'>
            <h1 className='my-2'>Address</h1>
            <TextField type="text" sx={{marginY:1}} label='email address'/>
            <TextField type="text" sx={{marginY:1}} label='city'/>
            <TextField type="text" sx={{marginY:1}} label='provice'/>
            <TextField type="text" sx={{marginY:1}} label='postal code'/>
            <div className='flex justify-end'>
              <span className='flex'><img src="src\assets\icons\add_1.svg" alt="" className='mr-2'/>Add Another Address</span>
            </div>
          </div>
          <div className='flex justify-between w-5/6 mt-5'>
            <div>
              <button onClick={navigateToDeal} style={{ color: "#38857B", fontWeight: "600" }}>cancel</button>
            </div>
            <div className='flex'>
              <button onClick={toggleBackward} className='p-2 ps-5 mx-2 rounded-lg flex '  style={{ border: "1px solid #38857B", color: "#38857B", fontWeight: "600" }}><img src="src\assets\icons\chevron_left.svg" style={{filter:"brightness(200%)"}} alt="" className='-ml-5 absolute' /> Previous</button>
              <button  className='p-2  rounded-lg' style={{backgroundColor:" #38857B", color: "white", fontWeight: "600" }}>Done</button>
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
}