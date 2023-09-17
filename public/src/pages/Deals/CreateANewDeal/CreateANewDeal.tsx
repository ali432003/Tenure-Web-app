import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { Input } from '@mui/joy';
import * as yup from 'yup';
import { useFormik } from 'formik';

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
interface EditProps {
  headingText: string; // Define the type of headingText as string
}
export default function CreateANewDeal({headingText}: EditProps) {
  const navigate = useNavigate(); // Initialize the navigate function
  const navigateToDeal = () => {
    navigate('/Deals'); // Replace '/cat-details' with the actual path to your CatDetails page
  };

  const [isBrandFormVisible, setIsBrandFormVisible] = useState(false);
  const [isNewDealFormVisible, setIsNewDealFormVisible] = useState(true);

  const toggleBrandForm = () => {
    setIsBrandFormVisible(!isBrandFormVisible);
    setIsNewDealFormVisible(!isNewDealFormVisible);
  };
  const toggleBackward = () => {
    setIsBrandFormVisible(!isBrandFormVisible);
    setIsNewDealFormVisible(!isNewDealFormVisible);
  };

  const formik = useFormik({
    initialValues: {
      date: '',
      days: [] as string[],
      reach: '',
      target: '',
      category: '',
      type: '',
      url: '',
      trigger: '',
      purchaseAmount: '',
      limit: '',
      rewardType: '',
      rewardAmount: '',
      title: '',
      description: '',
    },
    validationSchema: yup.object().shape({
      date: yup.string().required('This field is required'),
      days: yup.array().of(yup.string()).required('This field is required').min(1, 'Select at least one day'),
      reach: yup.string().required('This field is required'),
      target: yup.string().required('This field is required'),
      category: yup.string().required('This field is required'),
      type: yup.string().required('This field is required'),
      url: yup.string().required('This field is required'),
      trigger: yup.string().required('This field is required'),
      purchaseAmount: yup.string().required('This field is required'),
      limit: yup.string().required('This field is required'),
      rewardType: yup.string().required('This field is required'),
      rewardAmount: yup.string().required('This field is required'),
      title: yup.string().required('This field is required'),
      description: yup.string().required('This field is required'),
    }),
    onSubmit: () => {
      toggleBrandForm();
    },
  });
  const formik2 = useFormik({
    initialValues: {
      address: '',
      city: '',
      province: '',
      postalCode: '',
    },
    validationSchema: yup.object().shape({
      address: yup.string().required('This field is required'),
      city: yup.string().required('This field is required'),
      province: yup.string().required('This field is required'),
      postalCode: yup.string().required('This field is required'),
    }),
    onSubmit: () => {
      navigateToDeal();
    },
  });

  console.log(formik.errors.days);

  return (
    <div className="w-full px-4 pl-10">
      <div className="flex text-start ms-4 mt-5">
        <img src="src/assets/icons/arrow_left.svg" className="mr-4" alt="" onClick={() => navigate('/Deals')} />
        <h1>{headingText}</h1>
      </div>

      {isNewDealFormVisible && (
        <form className="text-start mt-8 " onSubmit={formik.handleSubmit}>
          <div className="flex flex-col" style={{ width: '95%' }}>
            <h3>Deal availability</h3>
            <p className="my-2" style={{ color: 'gray' }}>
              Select the date range and reach or your deal
            </p>
            <Input
              sx={{ marginTop: 2 }}
              type="date"
              name="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ border: formik.touched.date && formik.errors.date ? '1px solid red' : '' }}
              slotProps={{
                input: {
                  min: '2018-06-07T00:00',
                  max: '2018-06-14T00:00',
                },
              }}
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik.errors.date}</div>
            ) : null}

              <FormControl sx={{ marginTop: 2, marginLeft: 0, width: 'full' }}>
                <InputLabel id="demo-multiple-checkbox-label">Days available</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  input={<OutlinedInput label="Days available" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                  name="days" // Match the field name in Formik
                  value={formik.values.days as string[] }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ border: formik.touched.days && formik.errors.days ? '1px solid red' : '' }}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={formik.values.days.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            {formik.touched.days && formik.errors.days ? (
              <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik.errors.days}</div>
            ) : null}

            <FormControl sx={{ width: 'full', marginLeft: 0, marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label">Deal reach</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Deal reach"
                name="reach"
                value={formik.values.reach}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ border: formik.touched.reach && formik.errors.reach ? '1px solid red' : '' }}
                renderValue={(selected) => selected as string}
              >
                <MenuItem value="State">State</MenuItem>
                <MenuItem value="National">National</MenuItem>
                <MenuItem value="Online">Online</MenuItem>
              </Select>
            </FormControl>
            {formik.touched.reach && formik.errors.reach ? (
              <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik.errors.reach}</div>
            ) : null}

            <FormControl sx={{ width: 'full', marginLeft: 0, marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label">Deal target</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Deal target"
                name="target"
                value={formik.values.target}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ border: formik.touched.target && formik.errors.target ? '1px solid red' : '' }}
                renderValue={(selected) => selected as string}
              >
                <MenuItem value="Employers">Employers</MenuItem>
                <MenuItem value="All employees">All employees</MenuItem>
                <MenuItem value="Your employees only">Your employees only</MenuItem>
              </Select>
            </FormControl>
            {formik.touched.target && formik.errors.target ? (
              <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">
                {formik.errors.target}
              </div>
            ) : null}

            <FormControl sx={{ width: 'full', marginLeft: 0, marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label">category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="category"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ border: formik.touched.category && formik.errors.category ? '1px solid red' : '' }}
                renderValue={(selected) => selected as string}
              >
                <MenuItem value="Food">Food</MenuItem>
                <MenuItem value="Healthcare">Healthcare</MenuItem>
                <MenuItem value="Retail">Retail</MenuItem>
                <MenuItem value="Travel">Travel</MenuItem>
              </Select>
            </FormControl>
            {formik.touched.category && formik.errors.category ? (
              <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">
                {formik.errors.category}
              </div>
            ) : null}
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
                name="type"
                value={formik.values.type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ border: formik.touched.type && formik.errors.type ? '1px solid red' : '' }}
                renderValue={(selected) => selected as string}
              >
                <MenuItem value="Card linked">Card linked</MenuItem>
                <MenuItem value="Click">Click</MenuItem>
              </Select>
            </FormControl>
            {formik.touched.type && formik.errors.type ? (
              <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik.errors.type}</div>
            ) : null}

            {formik.values.type === 'Click' && (
              <FormControl>
                <TextField
                  type="text"
                  label={`Enter URL`}
                  sx={{ marginTop: 2 }}
                  name="url"
                  value={formik.values.url}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ border: formik.touched.url && formik.errors.url ? '1px solid red' : '' }}
                ></TextField>
                {formik.touched.url && formik.errors.url && (
                  <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">
                    {formik.errors.url}
                  </div>
                )}
              </FormControl>
            )}

            <FormControl sx={{ width: 'full', marginLeft: 0, marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label">Trigger</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Trigger"
                name="trigger"
                value={formik.values.trigger}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ border: formik.touched.trigger && formik.errors.trigger ? '1px solid red' : '' }}
                renderValue={(selected) => selected as string}
              >
                <MenuItem value="Minimus purchase amount">Minimus purchase amount</MenuItem>
                <MenuItem value="Cumulative purchase amount">Cumulative purchase amount</MenuItem>
                <MenuItem value="Purchase frequency">Purchase frequency</MenuItem>
              </Select>
            </FormControl>
            {formik.touched.trigger && formik.errors.trigger ? (
              <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">
                {formik.errors.trigger}
              </div>
            ) : null}
          </div>
          {formik.values.trigger !== '' && (
            <div className="flex flex-col mt-10" style={{ width: '95%' }}>
              <h3>{formik.values.trigger} details</h3>
              <TextField
                type="text"
                label={`${formik.values.trigger}`}
                sx={{ marginTop: 2 }}
                name="purchaseAmount"
                value={formik.values.purchaseAmount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ border: formik.touched.purchaseAmount && formik.errors.purchaseAmount ? '1px solid red' : '' }}
              ></TextField>
              {formik.touched.purchaseAmount && formik.errors.purchaseAmount ? (
                <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">
                  {formik.errors.purchaseAmount}
                </div>
              ) : null}

              <TextField
                type="text"
                label="Redemption limit per user"
                sx={{ marginTop: 2 }}
                name="limit"
                value={formik.values.limit}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ border: formik.touched.limit && formik.errors.limit ? '1px solid red' : '' }}
              ></TextField>
              {formik.touched.limit && formik.errors.limit ? (
                <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">
                  {formik.errors.limit}
                </div>
              ) : null}

              <div className="flex">
                <FormControl sx={{ width: 1 / 4, marginLeft: 0, marginTop: 2 }}>
                  <InputLabel id="demo-simple-select-label">Reward Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Reward Type"
                    name="rewardType"
                    value={formik.values.rewardType}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ border: formik.touched.rewardType && formik.errors.rewardType ? '1px solid red' : '' }}
                  >
                    <MenuItem value="percentage">percentage (%)</MenuItem>
                    <MenuItem value="Cash">Cash ($)</MenuItem>
                  </Select>
                  {formik.touched.rewardType && formik.errors.rewardType ? (
                    <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">
                      {formik.errors.rewardType}
                    </div>
                  ) : null}
                </FormControl>
                <FormControl sx={{ width: '100%', marginLeft: 0 }}>
                  <TextField
                    label="Reward amount full"
                    sx={{ marginTop: 2, marginLeft: 1, width: 1 }}
                    name="rewardAmount"
                    value={formik.values.rewardAmount}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ border: formik.touched.rewardAmount && formik.errors.rewardAmount ? '1px solid red' : '' }}
                  ></TextField>
                  {formik.touched.rewardAmount && formik.errors.rewardAmount ? (
                    <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">
                      {formik.errors.rewardAmount}
                    </div>
                  ) : null}
                </FormControl>
              </div>
            </div>
          )}
          <div className="flex flex-col mt-10" style={{ width: '95%' }}>
            <h3>Deal Details</h3>
            <TextField
              label="Title"
              sx={{ marginTop: 2 }}
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ border: formik.touched.title && formik.errors.title ? '1px solid red' : '' }}
            ></TextField>
            {formik.touched.title && formik.errors.title ? (
              <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik.errors.title}</div>
            ) : null}

            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              sx={{ marginTop: 2 }}
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ border: formik.touched.description && formik.errors.description ? '1px solid red' : '' }}
            />
          </div>
          {formik.touched.description && formik.errors.description ? (
            <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">
              {formik.errors.description}
            </div>
          ) : null}
          <div className="flex mt-10 justify-between" style={{ width: '95%' }}>
            <span className="cursor-pointer" style={{ color: '#38857B', fontWeight: '600' }} onClick={navigateToDeal}>
              Cancel
            </span>
            <button
              type="submit"
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
            </button>
          </div>
        </form>
      )}
      {isBrandFormVisible && (
        <div className="text-start mt-8 ms-4">
          <h1>Brand logo</h1>
          <p style={{ color: 'grey' }} className="my-2">
            Select your brand logo
          </p>
          <div className="w-5/6">
            <div className="w-full my-5 border border-gray-400 border-dashed p-4 rounded-lg text-center">
              <img src="src/assets/icons/CSV_file.svg" alt="" className="m-auto mb-3" />
              Upload a CSV file with your employee details
            </div>
          </div>
          <form className="flex flex-col w-5/6" onSubmit={formik2.handleSubmit}>
            <h1 className="my-2">Address</h1>
            <TextField
              type="text"
              sx={{ marginY: 1 }}
              label="street address"
              name="address"
              value={formik2.values.address}
              onChange={formik2.handleChange}
              onBlur={formik2.handleBlur}
              style={{ border: formik2.touched.address && formik2.errors.address ? '1px solid red' : '' }}
            />
                   {formik2.touched.address && formik2.errors.address ? (
            <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik2.errors.address}</div>
          ) : null}
            <TextField 
            type="text" 
            sx={{ marginY: 1 }} 
            label="city" 
            name="city"
            value={formik2.values.city}
            onChange={formik2.handleChange}
            onBlur={formik2.handleBlur}
            style={{ border: formik2.touched.city && formik2.errors.city ? '1px solid red' : '' }}
            />
            {formik2.touched.city && formik2.errors.city ? (
            <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik2.errors.city}</div>
          ) : null}
            <TextField
              type="text"
              sx={{ marginY: 1 }}
              label="province"
              name="province"
              value={formik2.values.province}
              onChange={formik2.handleChange}
              onBlur={formik2.handleBlur}
              style={{ border: formik2.touched.province && formik2.errors.province ? '1px solid red' : '' }}
            />
            {formik2.touched.province && formik2.errors.province ? (
            <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik2.errors.province}</div>
          ) : null}
            <TextField
              type="text"
              sx={{ marginY: 1 }}
              label="postal code"
              name="postalCode"
              value={formik2.values.postalCode}
              onChange={formik2.handleChange}
              onBlur={formik2.handleBlur}
              style={{ border: formik2.touched.postalCode && formik2.errors.postalCode ? '1px solid red' : '' }}
            />
            {formik2.touched.postalCode && formik2.errors.postalCode ? (
            <div className="text-start  mb-4 peer-invalid:visible text-danger-500 text-sm">{formik2.errors.postalCode}</div>
          ) : null}
            {/* <div className="flex justify-end">
              <span className="flex">
                <img src="src\assets\icons\add_1.svg" alt="" className="mr-2" />
                Add Another Address
              </span>
            </div> */}
          
          <div className="flex justify-between w-full mt-5">
            <div>
              <button onClick={navigateToDeal} style={{ color: '#38857B', fontWeight: '600' }}>
                cancel
              </button>
            </div>
            <div className="flex">
              <button
                onClick={toggleBackward}
                className="p-2 ps-5 mx-2 rounded-lg flex "
                style={{ border: '1px solid #38857B', color: '#38857B', fontWeight: '600' }}
              >
                <img
                  src="src\assets\icons\chevron_left.svg"
                  style={{ filter: 'brightness(200%)' }}
                  alt=""
                  className="-ml-5 absolute"
                />{' '}
                Previous
              </button>
              <button
                type="submit"
                className="p-2  rounded-lg"
                style={{ backgroundColor: ' #38857B', color: 'white', fontWeight: '600' }}
              >
                Done
              </button>
            </div>
          </div>
            </form>
        </div>
      )}
    </div>
  );
}
