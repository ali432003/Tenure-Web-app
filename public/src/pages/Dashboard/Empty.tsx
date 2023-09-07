import { useState } from 'react';
import './Emty.css';
// import Button from '../../components/Button/Button';

import Box from '../../components/Box/Box';
// import  EmTableRowsD from '../../components/EmTableRows/EmTableRowsD';
import { Line, LineChart, Tooltip, XAxis, BarChart, Bar } from 'recharts';
import { ChartHoverBox } from '../../components/Charthoverbox/ChartHoverBox';

import EmTableHeads from '../../components/Em/EmTableHeads';
import EmTableRows from '../../components/Em/EmTableRows';
import { WelcomeJon, June2023, Monthly, Weekly, Daily, Alltime, ActiveOffers } from '../../en.json';
const data = [
  {
    name: 'Jan',
    amount: 4000,
    totalSaver: 2400,
    avgSaving: 2400,
  },
  {
    name: 'Feb',
    amount: 3000,
    totalSaver: 1398,
    avgSaving: 2210,
  },
  {
    name: 'Mar',
    amount: 2000,
    totalSaver: 9800,
    avgSaving: 2290,
  },
  {
    name: 'Apr',
    amount: 2780,
    totalSaver: 3908,
    avgSaving: 2000,
  },
  {
    name: 'May',
    amount: 1890,
    totalSaver: 4800,
    avgSaving: 2181,
  },
  {
    name: 'Jun',
    amount: 2390,
    totalSaver: 3800,
    avgSaving: 2500,
  },
];

function Empty() {
  const [selectedCategory, setSelectedCategory] = useState('monthly'); //by default it should be all
  const setActive = (time: string) => {
    setSelectedCategory(time);
  };

  let dataOfDash = [
    {
      img: 'mc.svg',
      name: "McDonald's",
      title: '20% off annual gym membership',
      exp: '06/11/2023',
      catimg: 'healthcare.svg',
      catCol: '#972144',
      cat: 'Health-care',
    },
    {
      img: 'health_fit.svg',
      name: 'Healthfit',
      title: 'Visit 2 times and save 5%',
      exp: '06/11/2023',
      catimg: 'food.svg',
      catCol: '#DA6252',
      cat: 'Food',
    },
    {
      img: 'make_my_trip.svg',
      name: 'MakeMyTrip',
      title: '50% off a 5-Day All-Inclusive Caribbean Cruise',
      exp: '06/11/2023',
      catimg: 'travel.svg',
      catCol: '#B77900',
      cat: 'Travel',
    },
    {
      img: 'starbucks.svg',
      name: 'Starbucks',
      title: 'Buy One, Get One 50% Off on Selected Fashion Items',
      exp: '06/11/2023',
      catimg: 'retail.svg',
      catCol: '#004E5F',
      cat: 'Retail',
    },
  ];

  return (
    <div className="rightSide w-full h-full ">
      <div className="flex items-center justify-between text-start ms-9 mt-5">
        <h1>{WelcomeJon}</h1>
      </div>
      <div className="mt-5">
        <div>
          <div dir="rtl">
            <button style={{ position: 'absolute' }} className="border-2 border-solid rounded-lg p-2 -mt-2 ms-11">
              <img src="src/assets/icons/chevron_left.svg" alt="" />
            </button>
          </div>
          <h4>{June2023}</h4>
          <div dir="ltr">
            <button style={{ position: 'absolute' }} className="border-2 border-solid rounded-lg p-2 -mt-8 ms-11">
              <img src="src/assets/icons/chevron_right.svg" alt="" />
            </button>
          </div>
        </div>
        <div>
          <ul className="flex justify-end -mt-8">
            <li
              className={`${selectedCategory === 'monthly' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`}
              onClick={() => setActive('monthly')}
            >
              {Monthly}
            </li>
            <li
              className={`${selectedCategory === 'Weekly' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`}
              onClick={() => setActive('Weekly')}
            >
              {Weekly}
            </li>
            <li
              className={`${selectedCategory === 'Daily' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`}
              onClick={() => setActive('Daily')}
            >
              {Daily}
            </li>
            <li
              className={`${selectedCategory === 'All' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`}
              onClick={() => setActive('All')}
            >
              {Alltime}
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-5 ms-5 grid grid-cols-2 gap-4">
        <Box
          title="Employee contribution"
          img="gift.svg"
          valueT="$1,520"
          valueL="$1,520"
          avg="contribution"
          h6="Receivers"
          chart={
            <BarChart width={800} height={250} data={data}>
              <Bar dataKey="amount" fill="rgb(56 133 123 /1)" radius={[10, 10, 0, 0]} />
              <Tooltip
                content={<ChartHoverBox active={undefined} payload={undefined} label={undefined} />}
                cursor={{ fill: 'transparent' }}
              />
            </BarChart>
          }
        />
        <Box
          title="Total amount saved"
          img="amt_saved.svg"
          valueT="$1,520"
          valueL="$1,520"
          avg="savings"
          h6="Total no of savers"
          chart={
            <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <Tooltip
                content={<ChartHoverBox active={undefined} payload={undefined} label={undefined} />}
                cursor={false}
              />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="rgb(56 133 123 /1)"
                strokeWidth={3}
                dot={{ stroke: 'tomato', strokeWidth: '2', fill: 'white', r: 6 }}
              />
            </LineChart>
          }
        />
        <Box
          title="Total round-ups value"
          img="arrow_up.svg"
          valueT="$1,520"
          valueL="$1,520"
          avg="round-ups"
          h6="Total no of transection"
          chart={
            <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <Tooltip
                content={<ChartHoverBox active={undefined} payload={undefined} label={undefined} />}
                cursor={false}
              />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="rgb(56 133 123 /1)"
                strokeWidth={3}
                dot={{ stroke: 'tomato', strokeWidth: '2', fill: 'white', r: 6 }}
              />
            </LineChart>
          }
        />
        <Box
          title="Total cash-back value"
          img="cash_back.svg"
          valueT="$1,520"
          valueL="$1,520"
          avg="cash-back"
          h6="Total no of transection"
          chart={
            <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <Tooltip
                content={<ChartHoverBox active={undefined} payload={undefined} label={undefined} />}
                cursor={false}
              />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="rgb(56 133 123 /1)"
                strokeWidth={3}
                dot={{ stroke: 'tomato', strokeWidth: '2', fill: 'white', r: 6 }}
              />
            </LineChart>
          }
        />
      </div>
      <div className="items-center justify-between text-start ms-9 mt-5">
        {/* ... your active offers section ... */}
        <h4 className="text-start">{ActiveOffers}</h4>
        {/* <div className='text-center my-12'>
                        <p style={{ color: 'grey'}}>There is no active offers at this time</p>
                    </div> */}
        <div className="">
          <div className="mt-4">
            <table className="table-auto w-full">
              <EmTableHeads hkey="Dash" />
              {dataOfDash.map((item, index) => (
                <EmTableRows
                  rkey="Dash"
                  key={index}
                  img={item.img}
                  name={item.name}
                  title={item.title}
                  catimg={item.catimg}
                  catCol={item.catCol}
                  cat={item.cat}
                  exp={item.exp}
                />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Empty;
