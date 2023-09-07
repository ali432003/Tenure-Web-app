import React, { useState } from 'react'
import Slidebar from '../../components/Slidebar/Slidebar'
import EmTableHeads from '../../components/Em/EmTableHeads';
import EmTableRows from '../../components/Em/EmTableRows';
import Tippy from '@tippyjs/react';
import clsx from 'clsx';
import { styled, Box, Theme } from '@mui/system';
import { TextField } from '@mui/material';
import { Modal } from '@mui/base/Modal';
import { useNavigate } from 'react-router-dom';

export default function Wallet(props: any) {
  const navigate = useNavigate(); // Initialize the navigate function
  const navigateToEditCard = () => {
    navigate('/Edit'); // Replace '/cat-details' with the actual path to your CatDetails page
  };
  
  // edit reward budget
  const [open2, setOpen2] = useState(false);
  const sendANotOp = () => setOpen2(true);
  const sendANotCl = () => setOpen2(false);

  const [openR, setOpenR] = useState(false);
    const handleOpenR = () => setOpenR(true);
    const handleCloseR = () => setOpenR(false);


  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
  };
  const [selectedCategory, setSelectedCategory] = useState('monthly');
  return (
    <div className='flex h-min-screen'>
      <Slidebar />
      <div className='w-5/6 ms-5'>
        <div className='flex items-center justify-between text-start ms-4 mt-5'>
          <h1>Wallet</h1>
        </div>
      </div>

    </div>
  )
}

const Backdrop = React.forwardRef<
    HTMLDivElement,
    { open?: boolean; className: string }
>((props, ref) => {
    const { open, className, ...other } = props;
    return (
        <div
            className={clsx({ 'MuiBackdrop-open': open }, className)}
            ref={ref}
            {...other}
        />
    );
});





const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;


const style2 = (theme: Theme) => ({
  width: 500,
  borderRadius: '12px',
  padding: '16px 32px 24px 32px',
  backgroundColor: 'white',
  color: "black",
  boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
});