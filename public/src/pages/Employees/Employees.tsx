import React, { useState } from 'react'
import Slidebar from '../../components/Slidebar/Slidebar'
import EmTableRows from '../../components/Em/EmTableRows'
import EmptyEm from './Empty/EmptyEm'
import EmTableHeads from '../../components/Em/EmTableHeads'
import './Employee.css'
import clsx from 'clsx';
import { styled, Box, Theme } from '@mui/system';
import { Modal } from '@mui/base/Modal';



export default function Employees() {

    // gift all employee
    const [open, setOpen] = useState(false);
    const giftAllEmOp = () => setOpen(true);
    const giftAllEmCl = () => setOpen(false);

    // send a notification
    const [open2, setOpen2] = useState(false);
    const sendANotOp = () => setOpen2(true);
    const sendANotCl = () => setOpen2(false);

    // Add employee
    const [open3, setOpen3] = useState(false);
    const addEmOp = () => setOpen3(true);
    const addEmCl = () => setOpen3(false);


    const [currentKey, setCurrentKey] = useState('');
    const [emClass, setEmClass] = useState('list-none rounded-lg p-2');
    const [prClass, setPrClass] = useState('list-none rounded-lg p-2');
    const [reClass, setReClass] = useState('list-none rounded-lg p-2');
    const [selectedCategory, setSelectedCategory] = useState('all'); //by default it should be all

    const maHandler = () => {
        setCurrentKey('main');
        setEmClass('list-none rounded-lg p-2 active');
        setPrClass('list-none rounded-lg p-2');
        setReClass('list-none rounded-lg p-2');
    };

    const puHandler = () => {
        setCurrentKey('purchase');
        setEmClass('list-none rounded-lg p-2');
        setPrClass('list-none rounded-lg p-2 active');
        setReClass('list-none rounded-lg p-2');
        setSelectedCategory('all')
    };

    const reHandler = () => {
        setCurrentKey('receiver');
        setEmClass('list-none rounded-lg p-2');
        setPrClass('list-none rounded-lg p-2');
        setReClass('list-none rounded-lg p-2 active');
    };
    // const emHandler = () => {
    //     setCurrentKey('empty');  // just for cheking purpose if no data is passed then this handler runs and 
    //     // renders the default empty page made for employees
    //     let di = document.getElementById('di')
    //     if (di) {
    //         di.style.display = 'none';
    //     }
    // }
    const dataOfPurch = [
        {
            id: 1,
            name: "McDonald's",
            category: 'food',
            img: 'mc.svg',
            purch: '500',
            deals: '3',
            rupValue: '$300',
            chBack: '$400',
            catimg: 'food.svg',
            catCol: '#DA6252',
            cat: 'Food',
        },
        {
            id: 2,
            name: "McDonald's",
            category: 'food',
            img: 'mc.svg',
            purch: '500',
            deals: '3',
            rupValue: '$300',
            chBack: '$400',
            catimg: 'food.svg',
            catCol: '#DA6252',
            cat: 'Food',
        },
        {
            id: 3,
            name: 'Healthfit',
            category: 'Health-care',
            img: 'health_fit.svg',
            purch: '500',
            deals: '3',
            rupValue: '$300',
            chBack: '$400',
            catimg: 'healthcare.svg',
            catCol: '#972144',
            cat: 'Health-care',
        },
        {
            id: 4,
            name: 'Healthfit',
            category: 'Health-care',
            img: 'health_fit.svg',
            purch: '500',
            deals: '3',
            rupValue: '$300',
            chBack: '$400',
            catimg: 'healthcare.svg',
            catCol: '#972144',
            cat: 'Health-care',
        },
        {
            id: 5,
            name: 'Healthfit',
            category: 'Health-care',
            img: 'health_fit.svg',
            purch: '500',
            deals: '3',
            rupValue: '$300',
            chBack: '$400',
            catimg: 'healthcare.svg',
            catCol: '#972144',
            cat: 'Health-care',
        },
        {
            id: 6,
            name: 'Healthfit',
            category: 'Health-care',
            img: 'health_fit.svg',
            purch: '500',
            deals: '3',
            rupValue: '$300',
            chBack: '$400',
            catimg: 'healthcare.svg',
            catCol: '#972144',
            cat: 'Health-care',
        },
        {
            id: 7,
            name: 'Healthfit',
            category: 'Health-care',
            img: 'health_fit.svg',
            purch: '500',
            deals: '3',
            rupValue: '$300',
            chBack: '$400',
            catimg: 'healthcare.svg',
            catCol: '#972144',
            cat: 'Health-care',
        },
        {
            id: 8,
            name: 'MakeMyTrip',
            category: 'travel',
            img: 'make_my_trip.svg',
            purch: '500',
            deals: '3',
            rupValue: '$300',
            chBack: '$400',
            catimg: 'travel.svg',
            catCol: '#B77900',
            cat: 'Travel',
        },
        {
            id: 9,
            name: 'MakeMyTrip',
            category: 'travel',
            img: 'make_my_trip.svg',
            purch: '500',
            deals: '3',
            rupValue: '$300',
            chBack: '$400',
            catimg: 'travel.svg',
            catCol: '#B77900',
            cat: 'Travel',
        },
        {
            id: 10,
            name: 'MakeMyTrip',
            category: 'travel',
            img: 'make_my_trip.svg',
            purch: '500',
            deals: '3',
            rupValue: '$300',
            chBack: '$400',
            catimg: 'travel.svg',
            catCol: '#B77900',
            cat: 'Travel',
        },
        {
            id: 11,
            name: 'MakeMyTrip',
            category: 'travel',
            img: 'make_my_trip.svg',
            purch: '500',
            deals: '3',
            rupValue: '$300',
            chBack: '$400',
            catimg: 'travel.svg',
            catCol: '#B77900',
            cat: 'Travel',
        },
        {
            id: 12,
            name: 'MakeMyTrip',
            category: 'travel',
            img: 'make_my_trip.svg',
            purch: '500',
            deals: '3',
            rupValue: '$300',
            chBack: '$400',
            catimg: 'travel.svg',
            catCol: '#B77900',
            cat: 'Travel',
        },
        {
            id: 13,
            name: 'Starbucks',
            category: 'food',
            img: 'starbucks.svg',
            purch: '500',
            deals: '3',
            rupValue: '$300',
            chBack: '$400',
            catimg: 'food.svg',
            catCol: '#DA6252',
            cat: 'Food',
        },
        {
            id: 14,
            name: 'Starbucks',
            category: 'food',
            img: 'starbucks.svg',
            purch: '500',
            deals: '3',
            rupValue: '$300',
            chBack: '$400',
            catimg: 'food.svg',
            catCol: '#DA6252',
            cat: 'Food',
        },
        {
            id: 15,
            name: 'GAP',
            category: 'retail',
            img: 'gap.svg',
            purch: '500',
            deals: '3',
            rupValue: '$300',
            chBack: '$400',
            catimg: 'retail.svg',
            catCol: '#004E5F',
            cat: 'Retail',
        },
        {
            id: 16,
            name: 'GAP',
            category: 'retail',
            img: 'gap.svg',
            purch: '500',
            deals: '3',
            rupValue: '$300',
            chBack: '$400',
            catimg: 'retail.svg',
            catCol: '#004E5F',
            cat: 'Retail',
        },
        {
            id: 17,
            name: 'GAP',
            category: 'retail',
            img: 'gap.svg',
            purch: '500',
            deals: '3',
            rupValue: '$300',
            chBack: '$400',
            catimg: 'retail.svg',
            catCol: '#004E5F',
            cat: 'Retail',
        },
        {
            id: 18,
            name: 'GAP',
            category: 'retail',
            img: 'gap.svg',
            purch: '500',
            deals: '3',
            rupValue: '$300',
            chBack: '$400',
            catimg: 'retail.svg',
            catCol: '#004E5F',
            cat: 'Retail',
        },

    ];
    const dataOfMain = [
        { img: "jon.svg", name: "Jon Snow", goal: "New car, First home, Vacation, Engagament ring", prog: "40%" },
        { img: "vinn.svg", name: "Vinn Isuis", goal: "Vacation", prog: "40%" },
        { img: "rodd.svg", name: "Rodd Rigo", goal: "Mortgage, Birthday shopping", prog: "40%" },
        { img: "sam.svg", name: "Sam Anther", goal: "Rent, New car, New TV", prog: "40%" },
        { img: "eden.svg", name: "Eden Garden", goal: "Family vacation, Greece trip", prog: "40%" },
        { img: "gabi.svg", name: "Gabi Cunha", goal: "Birthday party", prog: "40%" },
        { img: "ronald.svg", name: "Ronald Christian", goal: "New car, Vacation, Christmas shopping", prog: "40%" },
        { img: "lionel.svg", name: "Lionel Richmond", goal: "Summer party", prog: "40%" }
    ];
    const dataOfRecie = [
        { img: "jon.svg", name: "Jon Snow", goal: "$1,340.56", prog: "40%" },
        { img: "vinn.svg", name: "Vinn Isuis", goal: "$1,200", prog: "40%" },
        { img: "rodd.svg", name: "Rodd Rigo", goal: "$1,000", prog: "40%" },
        { img: "sam.svg", name: "Sam Anther", goal: "$800", prog: "40%" },
        { img: "eden.svg", name: "Eden Garden", goal: "$750", prog: "40%" },
        { img: "gabi.svg", name: "Gabi Cunha", goal: "$600", prog: "40%" },
        { img: "ronald.svg", name: "Ronald Christian", goal: "$560", prog: "40%" },
        { img: "lionel.svg", name: "Lionel Richmond", goal: "$400", prog: "40%" }
    ];


    const filterByCategory = (category: any) => {
        setSelectedCategory(category);
    };
    type Item = {
        id: number;
        name: string;
        category: string;
        img: string;
        purch: string,
        deals: string,
        rupValue: string,
        chBack: string,
        catimg: string,
        catCol: string,
        cat: string,

    };
    const filteredRows = dataOfPurch.filter((item: Item) => selectedCategory === 'all' || item.category === selectedCategory);


    // Render rows based on the selected key
    const renderRows = () => {
        if (currentKey === 'main') {
            let prDiv = document.getElementById('prDiv');
            if (prDiv) {
                prDiv.style.display = 'none'
            }
            let di = document.getElementById('di');
            if (di) {
                di.style.display = 'flex';
            }
            return (
                <>
                    {
                        dataOfMain.map((item, index) => (
                            <EmTableRows
                                rkey={currentKey}
                                key={index}
                                img={item.img}
                                name={item.name}
                                progress={item.prog} //for overall progress
                                goal={item.goal}
                            />
                        ))}

                </>
            );
        } else if (currentKey === 'receiver') {
            let prDiv = document.getElementById('prDiv');
            if (prDiv) {
                prDiv.style.display = 'none'
            }
            let di = document.getElementById('di');
            if (di) {
                di.style.display = 'flex';
            }
            return (
                <>
                    {
                        dataOfRecie.map((item, index) => (
                            <EmTableRows
                                rkey={currentKey}
                                key={index}
                                img={item.img}
                                name={item.name}
                                progress={item.prog} //for overall progress
                                goal={item.goal}
                            />
                        ))}
                </>
            );
        } else if (currentKey === 'purchase') {
            let prDiv = document.getElementById('prDiv');
            if (prDiv) {
                prDiv.style.display = 'flex'
            }
            let di = document.getElementById('di');
            if (di) {
                di.style.display = 'flex';
            }

            return (
                <>
                    {filteredRows.map((item: Item) => (
                        <React.Fragment key={item.id}>
                            <EmTableRows
                                rkey={currentKey}
                                selectedCategory={selectedCategory}
                                img={item.img}
                                name={item.name}
                                purch={item.purch}
                                deals={item.deals}
                                rupValue={item.rupValue}
                                chBack={item.chBack}
                                catimg={item.catimg}
                                catCol={item.catCol}
                                cat={item.cat}
                            />

                        </React.Fragment>
                    ))}
                </>
            );

        } else {
            //  Default case when no key is selected
            // return null;
            let di = document.getElementById('di');
            if (di) {
                di.style.display = 'none';
            }
            return <EmptyEm />;

        }

    };
    return (

        <div className='flex h-min-screen'>
            <Slidebar />
            <div className='w-5/6 ms-5'>
                {/* EmTop Componenet */}
                <div className='flex items-center justify-between text-start ms-4 mt-5'>
                    <h1>Employees</h1>
                </div>
                <div className='mt-5 flex justify-between' id='di'>
                    <div>
                        <ul className='flex ms-4'>
                            <li className={`${emClass} cursor-pointer`} onClick={maHandler} >All Employee</li>
                            <li className={`${reClass} cursor-pointer`} onClick={reHandler}>Top Recievers</li>
                            <li className={`${prClass} cursor-pointer`} onClick={puHandler}>Top Purchases</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex '>
                            <li className='list-none p-2 rounded-lg flex  cursor-pointer' onClick={sendANotOp}><img src="src/assets/icons/bell.svg" className='mr-2' alt="" /><a>Send A Notification</a></li>
                            <li className='list-none mx-2 border border-solid rounded-lg flex cursor-pointer' onClick={giftAllEmOp}><img src="src/assets/icons/gift.svg" className='ms-1' width={'20px'} alt="" /><a className='mt-2 ms-2 me-2'> Gift All Employees</a></li>
                            <li className='list-none p-2 rounded-lg active flex cursor-pointer' onClick={addEmOp}>
                                <img src="src/assets/icons/add_2.svg
                        "alt="" className='mr-2' /><a> Add Another Employee</a></li>
                        </ul>
                        {/* giftAllEm */}
                        <StyledModal
                            aria-labelledby="unstyled-modal-title"
                            aria-describedby="unstyled-modal-description"
                            open={open}
                            onClose={giftAllEmCl}
                            slots={{ backdrop: StyledBackdrop }}
                        >
                            <Box sx={style}>
                                <div className='flex justify-end'>
                                    <img src="src/assets/icons/cross69.svg" className='cursor-pointer' onClick={giftAllEmCl} alt="" />
                                </div>
                                <div className='text-center my-9'>
                                    <h2 className='capitalize' style={{ color: "#25384D" }}>gift all employees</h2>
                                </div>
                                <div className='text-start'>
                                    <h4 className='my-2' style={{ color: "#25384D", fontWeight: "700" }}>Amount to gift each employee</h4>
                                    <span style={{ color: "#38857B", fontWeight: "700" }}>Wallet balance: $3,000</span>
                                    <input className='rounded-lg w-full mt-2' type="text" placeholder='enter an amount' />
                                </div>
                                <div className="flex place-content-center mt-4">
                                    <button className='p-2 rounded-md cursor-pointer' style={{ backgroundColor: "#38857B", color: "white", fontWeight: "600" }}>Gift Employees</button>
                                    <button className='mx-3 p-2 rounded-md cursor-pointer' onClick={giftAllEmCl} style={{ border: "1px solid #38857B", color: "#38857B", fontWeight: "600" }}>Cancel</button>
                                </div>

                            </Box>
                        </StyledModal>

                        {/* sendANot */}
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
                                <h3 className='text-center mt-6' style={{ color: "#25384D", fontWeight: "700" }}>Send A Notification</h3>
                                <div>
                                    <input type="text" placeholder='Enter a Title' className='w-full rounded-lg my-4' />
                                    <textarea name="" placeholder='Enter Details' className='w-full rounded-lg my-2' cols={10} rows={3}></textarea>
                                </div>
                                <div className='flex justify-center'>
                                    <button className='p-2 rounded-md cursor-pointer' style={{ backgroundColor: "#38857B", color: "white", fontWeight: "600" }}>Send</button>
                                    <button onClick={sendANotCl} className='mx-3 p-2 rounded-md cursor-pointer' style={{ border: "1px solid #38857B", color: "#38857B", fontWeight: "600" }}>Cancel</button>
                                </div>
                            </Box>
                        </StyledModal>


                        {/* addEm */}
                        <StyledModal
                            aria-labelledby="unstyled-modal-title"
                            aria-describedby="unstyled-modal-description"
                            open={open3}
                            onClose={addEmCl}
                            slots={{ backdrop: StyledBackdrop }}
                        >
                            <Box sx={style3}>
                                <div className="flex justify-end">
                                    <img src="src/assets/icons/cross69.svg" className='cursor-pointer' onClick={addEmCl} alt="" />
                                </div>
                                <h3 className='text-center mt-6' style={{ color: "#25384D", fontWeight: "700" }}>Add An Employee</h3>
                                <div className="w-full my-5 border border-gray-400 border-dashed p-4 rounded-lg text-center">
                                    <img src="src/assets/icons/CSV_file.svg" alt="" className='m-auto mb-3' />
                                    Upload a CSV file with your employee details
                                </div>
                                <div className='w-full relative' style={{ backgroundColor: "#8AAEC9", height: "1px" }}>
                                    <div className='-mt-2 px-2 absolute left-48' style={{ backgroundColor: "white", color: "#8AAEC9" }}>
                                        OR
                                    </div>
                                </div>
                                <div className='mt-4 flex flex-col'>
                                    <input type="text" placeholder='Enter employee name' className='my-3 rounded-lg' />
                                    <input type="email" name="" placeholder='Enter employee email' className='my-3 rounded-lg' id="" />
                                    <input type="date" name="" placeholder='Enter employee birthday' id="" className='my-3 rounded-lg' />
                                    <div className=' relative'>
                                        <input type="search" name="" placeholder='Enter employee location (min. 3 characters)' id="" className='my-3 py-2 rounded-lg w-full' /><img src="src/assets/icons/search.svg" alt="" className='absolute bottom-4 right-2 cursor-pointer' />
                                    </div>
                                </div>
                                <div className='flex justify-end mt-3'>
                                    <img src="src/assets/icons/add_1.svg" className='mx-2' />
                                    <span style={{ color: "#38857B", fontWeight: "700" }}>Add Another Employee</span>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <button className='p-2 rounded-md cursor-pointer' style={{ backgroundColor: "#38857B", color: "white", fontWeight: "600" }}>Submit</button>
                                    <button onClick={addEmCl} className='mx-3 p-2 rounded-md cursor-pointer' style={{ border: "1px solid #38857B", color: "#38857B", fontWeight: "600" }}>Cancel</button>
                                </div>
                            </Box>
                        </StyledModal>
                    </div>

                </div>
                <div className='flex mt-6' id='prDiv' style={{ display: 'none' }}>
                    <a className={`mx-2 cursor-pointer ${selectedCategory === 'all' ? 'blink' : ''}`} onClick={() => filterByCategory('all')}>All categories</a>
                    <a className={`mx-2 cursor-pointer ${selectedCategory === 'food' ? 'blink' : ''}`} onClick={() => filterByCategory('food')}>Food</a>
                    <a className={`mx-2 cursor-pointer ${selectedCategory === 'travel' ? 'blink' : ''}`} onClick={() => filterByCategory('travel')}>Travel</a>
                    <a className={`mx-2 cursor-pointer ${selectedCategory === 'Health-care' ? 'blink' : ''}`} onClick={() => filterByCategory('Health-care')}>Healthcare</a>
                    <a className={`mx-2 cursor-pointer ${selectedCategory === 'retail' ? 'blink' : ''}`} onClick={() => filterByCategory('retail')}>Retail</a>
                </div>
                <div className='mt-10'>
                    <table className='table-auto w-full'>
                        <EmTableHeads hkey={currentKey} />
                        {renderRows()}
                    </table>
                </div>

                <div className='h-40'></div>
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

const style = (theme: Theme) => ({
    width: 500,
    borderRadius: '12px',
    padding: '16px 32px 24px 32px',
    backgroundColor: 'white',
    color: "black",
    boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
});
const style2 = (theme: Theme) => ({
    width: 500,
    borderRadius: '12px',
    padding: '16px 32px 24px 32px',
    backgroundColor: 'white',
    color: "black",
    boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
});
const style3 = (theme: Theme) => ({
    width: 500,
    borderRadius: '12px',
    padding: '16px 32px 24px 32px',
    backgroundColor: 'white',
    color: "black",
    boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
});