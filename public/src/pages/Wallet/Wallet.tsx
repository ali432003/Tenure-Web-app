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
        <div className="flex">
          <div className='mt-5 mx-5  w-1/2 relative border rounded-lg border-solid p-4' style={{ color: 'rgb(28, 92, 95)' }}>
            <div className='rounded-lg p-4'>
              <div className='flex justify-between items-start'>
                <div className='flex'>
                  <img src={`src/assets/icons/wallet_1.svg`} className='mr-2' alt="" />
                  <h1>Wallet</h1>
                </div>
                <div className='flex cursor-pointer'>
                  <img src="src/assets/icons/edit.svg" className='mr-2' alt="" />
                  <span onClick={sendANotOp}>Edit Rewards Budget</span>
                  {/* edit reward budget */}
                  <StyledModal
                            aria-labelledby="unstyled-modal-title"
                            aria-describedby="unstyled-modal-description"
                            open={open2}
                            onClose={sendANotCl}
                            slots={{ backdrop: StyledBackdrop }}
                        >
                            <Box sx={style2}>
                                <div className='flex justify-end'>
                                    <img src="src/assets/icons/cross69.svg" className='cursor-pointer' onClick={sendANotCl} alt="" />
                                </div>
                                <h3 className='text-center mt-6' style={{ color: "#25384D", fontWeight: "700" }}>Edit Reward Budget</h3>
                                <div className='my-2'>
                                    <TextField type="text" label='$ Current budget' sx={{width:1, marginY:1}} />
                                </div>
                                <div className='flex justify-center'>
                                    <button className='p-2 rounded-md cursor-pointer' style={{ backgroundColor: "#38857B", color: "white", fontWeight: "600" }}>Send</button>
                                    <button onClick={sendANotCl} className='mx-3 p-2 rounded-md cursor-pointer' style={{ border: "1px solid #38857B", color: "#38857B", fontWeight: "600" }}>Cancel</button>
                                </div>
                            </Box>
                        </StyledModal>

                </div>
              </div>
              <div className="flex justify-between mt-7">
                <div className="flex flex-col text-start">
                  <h1 className='text-base my-1'>Available balance</h1>
                  <h1 className='text-5xl'>$3,000</h1>
                </div>
                <div className="flex flex-col text-start" style={{ color: '#5A7894' }}>
                  <h1 className='text-base my-1'>Reward Budget</h1>
                  <h1 className='text-5xl'>$3,000</h1>
                </div>
              </div>
              <div className='flex justify-center pt-40'>
                <button className='flex rounded-lg p-2' style={{ backgroundColor: "#38857b", color: "white" }}><img src="src/assets/icons/add_2.svg" className='mr-2' alt="" />Top up Wallet</button>
              </div>

            </div>
          </div>
          <div className='mt-5 mx-5  w-1/2 relative border rounded-lg border-solid p-4' style={{ color: 'rgb(28, 92, 95)' }}>
            <div className='rounded-lg p-4'>
              <div className='flex justify-between items-start'>
                <div className='flex'>
                  <img src={`src/assets/icons/cards_2.svg`} className='mr-2 w-10' alt="" />
                  <h1>Link cards</h1>
                </div>
                <div className='flex cursor-pointer'>
                  <img src="src/assets/icons/add_1.svg" className='mr-2' alt="" />
                  <span>Add Another Card</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col mt-5'>
              <div className='flex justify-between border mx-3 rounded-lg p-2 my-3'>
                <div className='flex'>
                  <img src="src/assets/icons/mastercard.svg" className='mr-3 w-10' alt="" />
                  <div className='flex flex-col'>
                    <h5 className='text-lg font-bold text-start'>1234****1280</h5>
                    <p className='text-start'>Expires 6/24</p>
                  </div>
                </div>
                <div className='flex p-2'>
                  <Tippy content={<span>Edit this card</span>} placement='bottom' animation="scale">
                    <a onClick={navigateToEditCard} className='rounded me-3 button cursor-pointer px-3 py-3' style={{ backgroundColor: 'rgba(28, 92, 95, 1)' }}><img src="src/assets/icons/edit.svg" style={{ filter: 'brightness(900%)' }} alt="" /></a>
                  </Tippy>
                  <Tippy content={<span>Remove this card</span>} placement='bottom' animation="scale">
                    <a onClick={handleOpenR} style={{ border: '1px solid rgb(210, 66, 82)' }} className='cross px-3 py-3 rounded hover:bg-red-100 cursor-pointer'><img src="src/assets/icons/close.svg" alt="" /></a>
                  </Tippy>
                  <StyledModal
                        aria-labelledby="unstyled-modal-title"
                        aria-describedby="unstyled-modal-description"
                        open={openR}
                        onClose={handleCloseR}
                        slots={{ backdrop: StyledBackdrop }}
                    >
                        <Box sx={style2}>
                            <div className='py-4'>
                                <div className='flex justify-end'>
                                    <img src="src/assets/icons/cross69.svg" onClick={handleCloseR} className='cursor-pointer' alt="" />
                                </div>
                                <p className='text-center mt-6 mb-2' style={{ color: "#25384D" }}>Are you sure you want to delete this card?</p>
                                <div className='flex place-content-center mt-4'>
                                    <button className='p-2 rounded-md' style={{ border: "1px solid #D24252", color: "#D24252", fontWeight: "600" }}>Yes, remove</button>
                                    <button onClick={handleCloseR} className='mx-2 rounded-md p-2' style={{ backgroundColor: "#38857B", color: "#FFFFFF", fontWeight: "600" }}>No, don’t remove</button>
                                </div>
                            </div>
                        </Box>
                    </StyledModal>
                </div>
              </div>
              <div className='flex justify-between border mx-3 rounded-lg p-2 my-3'>
                <div className='flex'>
                  <img src="src/assets/icons/visa.svg" className='mr-3 w-10' alt="" />
                  <div className='flex flex-col'>
                    <h5 className='text-lg font-bold text-start'>1234****1280</h5>
                    <p className='text-start'>Expires 6/24</p>
                  </div>
                </div>
                <div className='flex p-2'>
                  <Tippy content={<span>Edit</span>} placement='bottom' animation="scale">
                    <a className='rounded me-3 button cursor-pointer px-3 py-3' style={{ backgroundColor: 'rgba(28, 92, 95, 1)' }}><img src="src/assets/icons/edit.svg" style={{ filter: 'brightness(900%)' }} alt="" /></a>
                  </Tippy>
                  <Tippy content={<span>Remove</span>} placement='bottom' animation="scale">
                    <a style={{ border: '1px solid rgb(210, 66, 82)' }} className='cross px-3 py-3 rounded hover:bg-red-100 cursor-pointer'><img src="src/assets/icons/close.svg" alt="" /></a>
                  </Tippy>
                </div>
              </div>
              <div className='flex justify-between border mx-3 rounded-lg p-2 my-3'>
                <div className='flex'>
                  <img src="src/assets/icons/mastercard.svg" className='mr-3 w-10' alt="" />
                  <div className='flex flex-col'>
                    <h5 className='text-lg font-bold text-start'>1234****1280</h5>
                    <p className='text-start'>Expires 6/24</p>
                  </div>
                </div>
                <div className='flex p-2'>
                  <Tippy content={<span>Edit</span>} placement='bottom' animation="scale">
                    <a className='rounded me-3 button cursor-pointer px-3 py-3' style={{ backgroundColor: 'rgba(28, 92, 95, 1)' }}><img src="src/assets/icons/edit.svg" style={{ filter: 'brightness(900%)' }} alt="" /></a>
                  </Tippy>
                  <Tippy content={<span>Remove</span>} placement='bottom' animation="scale">
                    <a style={{ border: '1px solid rgb(210, 66, 82)' }} className='cross px-3 py-3 rounded hover:bg-red-100 cursor-pointer'><img src="src/assets/icons/close.svg" alt="" /></a>
                  </Tippy>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='mt-9'>
          <div className='text-start'>
            <h1>Transection History</h1>
          </div>

          <div className='mt-9 flex justify-end mb-5'>
            <div className='mr-56' id='main'>
              <div dir='rtl'>
                <button style={{ position: 'absolute' }} className='border-2 border-solid rounded-lg p-2 -mt-2 mr-16'>
                  <img src="src/assets/icons/chevron_left.svg" alt="" />
                </button>
              </div>
              <h4 id='change'>June, 2023</h4>
              <div dir='ltr'>
                <button style={{ position: 'absolute' }} className='border-2 border-solid rounded-lg p-2 -mt-8 ml-16'>
                  <img src="src/assets/icons/chevron_right.svg" alt="" />
                </button>
              </div>
            </div>
            <ul className='flex justify-end mb-5 -mt-1'>
              <li className={`${selectedCategory === 'monthly' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer mx-2`} onClick={() => {
                let ch = document.getElementById('change')
                let main = document.getElementById('main')
                if(ch){
                  ch.innerHTML = "June , 2023"
                } 
                if(main){
                  main.style.display = 'block'
                }
                filterByCategory('monthly')
                }}><a>Monthly</a></li>
              <li className={`${selectedCategory === 'weekly' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer mx-2`} onClick={() => {
                let ch = document.getElementById('change')
                let main = document.getElementById('main')
                if(ch){
                  ch.innerHTML = "Week 23,2023"
                }
                if(main){
                  main.style.display = 'block'
                }
                filterByCategory('weekly')}}><a>Weekly</a></li>
              <li className={`${selectedCategory === 'daily' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer mx-2`} onClick={() => {
                let ch = document.getElementById('change')
                let main = document.getElementById('main')
                if(ch){
                  ch.innerHTML = "June 11,2023"
                }
                if(main){
                  main.style.display = 'block'
                }
                filterByCategory('daily')}}><a>Daily</a></li>
              <li className={`${selectedCategory === 'alltime' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer mx-2`} onClick={() => {
                let main = document.getElementById('main')
                if(main){
                  main.style.display = 'none'
                }
                filterByCategory('alltime')}}><a>All time</a></li>
            </ul>
          </div>
        </div>
        <table className='w-full'>
          <EmTableHeads hkey="Wall" />
          <EmTableRows rkey="Wall" date="06/11/23, 12:55pm EST" amt="$4000" channel="credit card" type="Top up" />
          <EmTableRows rkey="Wall" date="06/11/23, 12:55pm EST" amt="$1000" channel="wallet" type="Contribution" />
          <EmTableRows rkey="Wall" date="06/11/23, 12:55pm EST" amt="$3000" channel="bank account" type="Contribution" />
        </table>

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