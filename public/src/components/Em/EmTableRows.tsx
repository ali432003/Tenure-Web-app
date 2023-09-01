import React, { useState } from 'react'
import Tippy from '@tippyjs/react';
import Button from '../Button/Button';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import './style.css';
import clsx from 'clsx';
import { styled, Box, Theme } from '@mui/system';
import { Modal } from '@mui/base/Modal';





const SaveGoals = () => {         //div which shows by hover on the save-goals
    return (
        <div className='container flex flex-col h-3/5 w-1/3 mx-auto mt-7 rounded-t-lg shadow-lg' style={{ backgroundColor: "#FFFFFF", position: "absolute", transform: "translateY(-15px)" }}>
            <div className='bg-#DCEDF6-300 w-full h-auto rounded-t-lg py-1 text-center' style={{ backgroundColor: "#38857B", color: "white", fontSize: "16px" }}>
                Saving goals
            </div>
            <div className='grid grid-rows-2 grid-cols-2 h-full m-4 my-9 gap-3'>
                <div className='bg-green-200 rounded-lg' style={{ backgroundColor: "#FEF9DE" }}>
                    <h3 className='text-start ms-2 mt-4' style={{ color: "#25384D", fontSize: "16px" }}>First Home</h3>
                    <p className='text-start ms-2 mt-1' style={{ color: "#25384D", fontSize: "12px" }}>Progress</p>
                    <div style={{ backgroundColor: "#DCEDF6" }} className='w-4/6 h-5 justify-center ms-2 rounded-3xl my-2'>
                        <div className='w-1/6 rounded-full h-full' style={{ backgroundColor: "#38857B" }}></div>
                    </div>
                </div>
                <div className='bg-green-200 rounded-lg' style={{ backgroundColor: "#DCF8EA" }}>
                    <h3 className='text-start ms-2 mt-4' style={{ color: "#25384D", fontSize: "16px" }}>Vacation</h3>
                    <p className='text-start ms-2 mt-1' style={{ color: "#25384D", fontSize: "12px" }}>Progress</p>
                    <div style={{ backgroundColor: "#DCEDF6" }} className='w-4/6 h-5 justify-center ms-2 rounded-3xl my-2'>
                        <div className='w-1/6 rounded-full h-full' style={{ backgroundColor: "#38857B" }}></div>
                    </div>
                </div>
                <div className='bg-green-200 rounded-lg' style={{ backgroundColor: "#DCF8EA" }}>
                    <h3 className='text-start ms-2 mt-4' style={{ color: "#25384D", fontSize: "16px" }}>Christmas sho...</h3>
                    <p className='text-start ms-2 mt-1' style={{ color: "#25384D", fontSize: "12px" }}>Progress</p>
                    <div style={{ backgroundColor: "#DCEDF6" }} className='w-4/6 h-5 justify-center ms-2 rounded-3xl my-2'>
                        <div className='w-1/6 rounded-full h-full' style={{ backgroundColor: "#38857B" }}></div>
                    </div>
                </div>
                <div className='bg-green-200 rounded-lg' style={{ backgroundColor: "#FEF9DE" }}>
                    <h3 className='text-start ms-2 mt-4' style={{ color: "#25384D", fontSize: "16px" }}>New car</h3>
                    <p className='text-start ms-2 mt-1' style={{ color: "#25384D", fontSize: "12px" }}>Progress</p>
                    <div style={{ backgroundColor: "#DCEDF6" }} className='w-4/6 h-5 justify-center ms-2 rounded-3xl my-2'>
                        <div className='w-1/6 rounded-full h-full' style={{ backgroundColor: "#38857B" }}></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default function EmTableRows(props: any) {
    // save goals div hover
    const [isHovered, setIsHovered] = useState(false);

    // modals
    // Gift modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Remove modal
    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    var shouldShowMain;
    var shouldShowPurchase;
    var shouldShowReceiver;
    var shouldShowDashRows;
    if (props.rkey === 'main') {
        shouldShowMain = true;
        shouldShowPurchase = false;
        shouldShowReceiver = false;
    }
    if (props.rkey === 'receiver') {
        shouldShowMain = false;
        shouldShowPurchase = false;
        shouldShowReceiver = true;
    }
    if (props.rkey === 'purchase') {
        shouldShowMain = false;
        shouldShowPurchase = true;
        shouldShowReceiver = false;
    }
    if (props.rkey === 'Dash') {
        shouldShowMain = false;
        shouldShowPurchase = false;
        shouldShowReceiver = false;
        shouldShowDashRows = true;
    }



    return (
        <>

            {/* main */}
            {shouldShowMain && (


                <tbody className='gap-x-7 gap-y-7'>
                    <tr className='bg-white-600 shadow-lg  my-4'>
                        <td className='flex p-4'><img src={`src/assets/icons/${props.img}`} className='mr-3' alt="" /><h5 className='text-start pt-1 cursor-pointer'>{props.name}</h5></td>
                        <td
                            style={{ color: 'rgb(28, 92, 95)' }}
                            className={`text-md w-1/3 text-start cursor-pointer ${isHovered ? 'hover:underline' : ''}`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {props.goal}
                            {isHovered && <SaveGoals />}
                        </td>
                        {/* conditionally rendered on hover */}
                        <td>
                            <div style={{ backgroundColor: "#DCEDF6", width: '50%' }} className='h-5 ms-12 rounded-3xl'>
                                <div className=' rounded-2xl h-full' style={{ backgroundColor: "#38857B", width: props.progress }}></div>
                            </div>
                        </td>
                        <td className='flex'>
                            <Tippy content={<span>Make a contribution</span>} placement='bottom' animation="scale">
                                <a onClick={handleOpen} className='rounded me-3 button cursor-pointer' style={{ backgroundColor: 'rgba(28, 92, 95, 1)' }}><img src="src/assets/icons/gift.svg" style={{ filter: 'brightness(900%)' }} className='p-1 px-2' alt="" /></a>
                            </Tippy>
                            <Tippy content={<span>Remove Employee</span>} placement='bottom' animation="scale">
                                <a onClick={handleOpen2} style={{ border: '1px solid rgb(210, 66, 82)' }} className='cross rounded hover:bg-red-100 cursor-pointer'><img src="src/assets/icons/close.svg" className='p-1 px-2 py-2' alt="" /></a>
                            </Tippy>
                        </td>
                    </tr>

                    <StyledModal
                        aria-labelledby="unstyled-modal-title"
                        aria-describedby="unstyled-modal-description"
                        open={open}
                        onClose={handleClose}
                        slots={{ backdrop: StyledBackdrop }}
                    >
                        <Box sx={style}>
                            <div className='py-4'>
                                <div className='flex justify-between text-start'>
                                    <h2 id="unstyled-modal-title">Make a Contribution</h2>
                                    <img src="src/assets/icons/cross69.svg" onClick={handleClose} className='cursor-pointer' alt="" />
                                </div>
                                <div id="unstyled-modal-description" className=' mt-9'>
                                    <h4 className='my-2'>Choose a recipient</h4>
                                    <select name="" id="" className='w-full rounded-md'>
                                        <option value="">Jon Snow</option>
                                        <option value="">Vinn Isuis</option>
                                        <option value="">Rodd Rigo</option>
                                        <option value="">Sam Anther</option>
                                        <option value="">Eden Garden</option>
                                    </select>
                                    <h4 className='my-2'>Select a goal</h4>
                                    <select name="" id="" className='w-full rounded-md'>
                                        <option value="">Select an option</option>
                                        <option value="">New Car</option>
                                        <option value="">First Home</option>
                                        <option value="">Vacation</option>
                                        <option value="">Chirstmas Show</option>
                                    </select>
                                    <h4 className='mt-2'>Amount to contribute</h4>
                                    <p className='mb-1'>Wallet balance:{"$3,000"}</p>
                                    <input type="text" className='w-full rounded-md mb-5' placeholder='enter an amount' />
                                    <div className='flex place-content-center mt-4'>
                                        <button className='p-2 rounded-md' style={{ backgroundColor: "#38857B", color: "white", fontWeight: "600" }}>Contribute</button>
                                        <button onClick={handleClose} className='mx-2 rounded-md p-2' style={{ border: "1px solid #38857B", color: "#38857B", fontWeight: "600" }}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </StyledModal>
                    <StyledModal
                        aria-labelledby="unstyled-modal-title"
                        aria-describedby="unstyled-modal-description"
                        open={open2}
                        onClose={handleClose2}
                        slots={{ backdrop: StyledBackdrop }}
                    >
                        <Box sx={style2}>
                            <div className='py-4'>
                                <div className='flex justify-end'>
                                    <img src="src/assets/icons/cross69.svg" onClick={handleClose2} className='cursor-pointer' alt="" />
                                </div>
                                <p className='text-center mt-6 mb-2' style={{ color: "#25384D" }}>Are you sure you want to delete this employee?</p>
                                <div className='flex place-content-center mt-4'>
                                    <button className='p-2 rounded-md' style={{ border: "1px solid #D24252", color: "#D24252", fontWeight: "600" }}>Yes, remove</button>
                                    <button onClick={handleClose2} className='mx-2 rounded-md p-2' style={{ backgroundColor: "#38857B", color: "#FFFFFF", fontWeight: "600" }}>No, don’t remove</button>
                                </div>
                            </div>
                        </Box>
                    </StyledModal>
                </tbody >

            )
            }

            {/* Receiver Rows */}
            {
                shouldShowReceiver && (
                    <tbody className='gap-x-7 gap-y-7'>
                        <tr className='bg-white-600 shadow-lg  my-4'>
                            <td className='flex p-4'><img src={`src/assets/icons/${props.img}`} className='mr-3' alt="" /><h5 className='text-start pt-1'>{props.name}</h5></td>
                            <td>
                                <div style={{ backgroundColor: "#DCEDF6", width: '50%' }} className='h-5  rounded-3xl'>
                                    <div className=' rounded-2xl h-full' style={{ backgroundColor: "#38857B", width: props.progress }}></div>
                                </div>
                            </td>
                            <td style={{ color: '#25384D' }} className=' text-md w-1/3 text-start'>{props.goal}</td>
                            <td className='flex'>
                                <Tippy content={<span>Make a contribution</span>} placement='bottom' animation="scale">
                                    <a onClick={handleOpen} className='rounded me-3 button cursor-pointer' style={{ backgroundColor: 'rgba(28, 92, 95, 1)' }}><img src="src/assets/icons/gift.svg" style={{ filter: 'brightness(900%)' }} className='p-1 px-2' alt="" /></a>
                                </Tippy>
                                <Tippy content={<span>Remove Employee</span>} placement='bottom' animation="scale">
                                    <a onClick={handleOpen2} style={{ border: '1px solid rgb(210, 66, 82)' }} className='cross rounded hover:bg-red-100 cursor-pointer'><img src="src/assets/icons/close.svg" className='p-1 px-2 py-2' alt="" /></a>
                                </Tippy>
                            </td>
                        </tr>
                        <StyledModal
                            aria-labelledby="unstyled-modal-title"
                            aria-describedby="unstyled-modal-description"
                            open={open}
                            onClose={handleClose}
                            slots={{ backdrop: StyledBackdrop }}
                        >
                            <Box sx={style}>
                                <div className='py-4'>
                                    <div className='flex justify-between text-start'>
                                        <h2 id="unstyled-modal-title">Make a Contribution</h2>
                                        <img src="src/assets/icons/cross69.svg" onClick={handleClose} className='cursor-pointer' alt="" />
                                    </div>
                                    <div id="unstyled-modal-description" className='my-4'>
                                        <h4 className='my-2'>Choose a recipient</h4>
                                        <select name="" id="" className='w-full rounded-md'>
                                            <option value="">Jon Snow</option>
                                        </select>
                                        <h4 className='my-2'>Select a goal</h4>
                                        <select name="" id="" className='w-full rounded-md'>
                                            <option value="">Select an option</option>
                                        </select>
                                        <h4 className='mt-2'>Amount to contribute</h4>
                                        <p className='mb-1'>Wallet balance:{"$3,000"}</p>
                                        <input type="text" className='w-full rounded-md' placeholder='enter an amount' />
                                        <div className='flex place-content-center mt-4'>
                                            <button className='p-2 rounded-md' style={{ backgroundColor: "#38857B", color: "white", fontWeight: "600" }}>Contribute</button>
                                            <button onClick={handleClose} className='mx-2 rounded-md p-2' style={{ border: "1px solid #38857B", color: "#38857B", fontWeight: "600" }}>Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </StyledModal>
                        <StyledModal
                            aria-labelledby="unstyled-modal-title"
                            aria-describedby="unstyled-modal-description"
                            open={open2}
                            onClose={handleClose2}
                            slots={{ backdrop: StyledBackdrop }}
                        >
                            <Box sx={style2}>
                                <div className='py-4'>
                                    <div className='flex justify-end'>
                                        <img src="src/assets/icons/cross69.svg" onClick={handleClose2} className='cursor-pointer' alt="" />
                                    </div>
                                    <p className='text-center mt-6 mb-2' style={{ color: "#25384D" }}>Are you sure you want to delete this employee?</p>
                                    <div className='flex place-content-center mt-4'>
                                        <button className='p-2 rounded-md' style={{ border: "1px solid #D24252", color: "#D24252", fontWeight: "600" }}>Yes, remove</button>
                                        <button onClick={handleClose2} className='mx-2 rounded-md p-2' style={{ backgroundColor: "#38857B", color: "#FFFFFF", fontWeight: "600" }}>No, don’t remove</button>
                                    </div>
                                </div>
                            </Box>
                        </StyledModal>
                    </tbody>

                )
            }

            {/* Purchase Rows */}
            {
                shouldShowPurchase && (

                    <tbody className='gap-x-7 gap-y-7'>
                        <tr className='bg-white-600 shadow-lg  my-4'>
                            <td className='flex p-4 w-1/3'><img src={`src/assets/icons/${props.img}`} className='mr-3' alt="" /><h5 className='text-start pt-1'>{props.name}</h5></td>
                            <td style={{ color: '#25384D' }} className=' text-md   text-start'>{props.purch}</td>
                            <td style={{ color: '#25384D' }} className=' text-md   text-start'>{props.deals}</td>
                            <td style={{ color: '#25384D' }} className=' text-md   text-start'>{props.rupValue}</td>
                            <td style={{ color: '#25384D' }} className=' text-md   text-start'>{props.chBack}</td>
                            <td className='flex justify-start'>
                                <img src={`src/assets/icons/${props.catimg}`} alt="" />
                                <p style={{ color: props.catCol }}>{props.cat}</p>
                            </td>
                        </tr>
                    </tbody>
                )
            }

            {/* Dashboard */}
            {
                shouldShowDashRows && (
                    <tbody className='gap-x-7 gap-y-7'>
                        <tr className='bg-white-600 shadow-lg  my-4'>
                            <td className='flex p-4 w-1/3'><img src={`src/assets/icons/${props.img}`} className='mr-3' alt="" /><h5 className='text-start pt-1'>{props.name}</h5></td>
                            <td style={{ color: '#25384D' }} className='text-md font-bold text-start'>{props.title}</td>
                            <td style={{ color: '#25384D' }} className=' text-md   text-start'>{props.exp}</td>
                            <td className='flex justify-start'>
                                <img src={`src/assets/icons/${props.catimg}`} alt="" />
                                <p style={{ color: props.catCol }}>{props.cat}</p>
                            </td>
                        </tr>
                    </tbody>

                )
            }
        </>
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

const style = (theme: Theme) => ({
    width: 500,
    borderRadius: '12px',
    padding: '16px 32px 24px 32px',
    backgroundColor: 'white',
    color: "black",
    boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
})
const style2 = (theme: Theme) => ({
    width: 500,
    borderRadius: '12px',
    padding: '16px 32px 24px 32px',
    backgroundColor: 'white',
    color: "#25384D",
    boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
});
