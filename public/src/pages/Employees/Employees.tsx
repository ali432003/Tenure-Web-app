import React, { useState } from 'react'
import Slidebar from '../../components/Slidebar/Slidebar'
import EmTableRows from '../../components/Em/EmTableRows'
import EmptyEm from './Empty/EmptyEm'
import EmTableHeads from '../../components/Em/EmTableHeads'
import './Employee.css'



export default function Employees() {


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
    const emHandler = () => {
        setCurrentKey('empty');  // just for cheking purpose if no data is passed then this handler runs and 
        // renders the default empty page made for employees
        let di = document.getElementById('di')
        if (di) {
            di.style.display = 'none';
        }
    }
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
        { img: "jon.svg", name: "Jon Snow", goal: "New car, First home, Vacation, Engagament ring" },
        { img: "vinn.svg", name: "Vinn Isuis", goal: "Vacation" },
        { img: "rodd.svg", name: "Rodd Rigo", goal: "Mortgage, Birthday shopping" },
        { img: "sam.svg", name: "Sam Anther", goal: "Rent, New car, New TV" },
        { img: "eden.svg", name: "Eden Garden", goal: "Family vacation, Greece trip" },
        { img: "gabi.svg", name: "Gabi Cunha", goal: "Birthday party" },
        { img: "ronald.svg", name: "Ronald Christian", goal: "New car, Vacation, Christmas shopping" },
        { img: "lionel.svg", name: "Lionel Richmond", goal: "Summer party" }
    ];
    const dataOfRecie = [
        { img: "jon.svg", name: "Jon Snow", goal: "$1,340.56" },
        { img: "vinn.svg", name: "Vinn Isuis", goal: "$1,200" },
        { img: "rodd.svg", name: "Rodd Rigo", goal: "$1,000" },
        { img: "sam.svg", name: "Sam Anther", goal: "$800" },
        { img: "eden.svg", name: "Eden Garden", goal: "$750" },
        { img: "gabi.svg", name: "Gabi Cunha", goal: "$600" },
        { img: "ronald.svg", name: "Ronald Christian", goal: "$560" },
        { img: "lionel.svg", name: "Lionel Richmond", goal: "$400" },

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
                                // progress = {item.prog} for overall progress
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
                                // progress = {item.prog} for overall progress
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
        <div className='flex h-full'>
            <div className='w-full ms-5'>
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
                            <li className='list-none p-2 rounded-lg flex  cursor-pointer' onClick={emHandler}><img src="src/assets/icons/bell.svg" className='mr-2' alt="" /><a>Send A Notification</a></li>
                            <li className='list-none mx-2 border border-solid rounded-lg flex'><img src="src/assets/icons/gift.svg" className='ms-1' width={'20px'} alt="" /><a href='' className='mt-2 ms-2 me-2'> Gift All Employees</a></li>
                            <li className='list-none p-2 rounded-lg active flex'>
                                <img src="src/assets/icons/add_2.svg
                        "alt="" className='mr-2' /><a href=''> Add Another Employee</a></li>
                        </ul>
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

                {/* <div className='h-40'></div> */}
            </div>
        </div>
    )
}
