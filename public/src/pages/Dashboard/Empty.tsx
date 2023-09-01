import React from 'react';
import './Emty.css';
// import Button from '../../components/Button/Button';
import Slidebar from '../../components/Slidebar/Slidebar';
import Box from '../../components/Box/Box';
// import  EmTableRowsD from '../../components/EmTableRows/EmTableRowsD';
import { ChartContainer, BarPlot } from '@mui/x-charts';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';

const box1Data = [400, 300, 200, 278, 189, 239];
const box1Labels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
];
import EmTableHeads from '../../components/Em/EmTableHeads';
import EmTableRows from '../../components/Em/EmTableRows';
const box2Data = [4000, 3000, 2000, 2780, 1890, 2390];
// const box2Data = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const box2Labels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',

];

function Empty() {

    let dataOfDash = [
        {
            "img": "mc.svg",
            "name": "McDonald's",
            "title": "20% off annual gym membership",
            "exp": "06/11/2023",
            "catimg": "healthcare.svg",
            "catCol": "#972144",
            "cat": "Health-care"
        },
        {
            "img": "health_fit.svg",
            "name": "Healthfit",
            "title": "Visit 2 times and save 5%",
            "exp": "06/11/2023",
            "catimg": "food.svg",
            "catCol": "#DA6252",
            "cat": "Food"
        },
        {
            "img": "make_my_trip.svg",
            "name": "MakeMyTrip",
            "title": "50% off a 5-Day All-Inclusive Caribbean Cruise",
            "exp": "06/11/2023",
            "catimg": "travel.svg",
            "catCol": "#B77900",
            "cat": "Travel"
        },
        {
            "img": "starbucks.svg",
            "name": "Starbucks",
            "title": "Buy One, Get One 50% Off on Selected Fashion Items",
            "exp": "06/11/2023",
            "catimg": "retail.svg",
            "catCol": "#004E5F",
            "cat": "Retail"
        }
    ]

    return (
        <div className='wholePage h-full'>
            {/* <div className='leftSide'>
            <Slidebar />
            </div> */}
            <div className='rightSide w-full '>
                {/* main div */}
                <div className='flex items-center justify-between text-start ms-9 mt-5'>
                    <h1>Welcome, Jon</h1>
                </div>
                <div className='mt-5'>
                    <div>
                        <div dir='rtl'>
                            <button style={{ position: 'absolute' }} className='border-2 border-solid rounded-lg p-2 -mt-2 ms-11'>
                                <img src="src/assets/icons/chevron_left.svg" alt="" />
                            </button>
                        </div>
                        <h4>June, 2023</h4>
                        <div dir='ltr'>
                            <button style={{ position: 'absolute' }} className='border-2 border-solid rounded-lg p-2 -mt-8 ms-11'>
                                <img src="src/assets/icons/chevron_right.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <div>
                        <ul className='flex justify-end -mt-8'>
                            <li className='list-none p-2 rounded-lg mx-4 active'><a href="">Monthly</a></li>
                            <li className='list-none p-2 rounded-lg mx-4'><a href="">Weekly</a></li>
                            <li className='list-none p-2 rounded-lg mx-4'><a href="">Daily</a></li>
                            <li className='list-none p-2 rounded-lg mx-4'><a href="">All time</a></li>
                        </ul>
                    </div>
                </div>
                <div className='mt-5 ms-5 grid grid-cols-2 gap-4'>
                    <Box title="Employee contribution" img="gift.svg" valueT="$1,520" valueL="$1,520" avg="contribution" h6='Receivers' chart={
                        <ChartContainer 
                        width={800}
                        height={300}
                        series={[{ data: box1Data, label: 'uv', type: 'bar' }]}
                        xAxis={[{ scaleType: 'band', data: box1Labels }]}
                        sx={{
                            '.MuiBarElement-root': {
                              stroke: 'rgb(56 133 123 /1)',
                              strokeWidth: 0,
                            },
                        }}
                      >
                        <BarPlot />
                      </ChartContainer>
                    } />
                    <Box title="Total amount saved" img="amt_saved.svg" valueT="$1,520" valueL="$1,520" avg='savings' h6='Total no of savers' chart={
                        <ChartContainer
                        width={800}
                        height={300}
                        series={[{ type: 'line', data: box2Data }]}
                        xAxis={[{ scaleType: 'point', data: box2Labels }]}
                        sx={{
                          '.MuiLineElement-root': {
                            stroke: 'rgb(56 133 123 /1)',
                            strokeWidth: 3,
                          },
                          '.MuiMarkElement-root': {
                            stroke: 'tomato',
                            scale: '1.5',
                            fill: '#fff',
                            strokeWidth: 2,
                          },
                        }}
                        disableAxisListener
                      >
                        <LinePlot />
                        <MarkPlot />
                      </ChartContainer>
                    } />
                    <Box title="Total round-ups value" img="arrow_up.svg" valueT="$1,520" valueL="$1,520" avg='round-ups' h6='Total no of transection'  chart={
                        <ChartContainer
                        width={800}
                        height={300}
                        series={[{ type: 'line', data: box2Data }]}
                        xAxis={[{ scaleType: 'point', data: box2Labels }]}
                        sx={{
                          '.MuiLineElement-root': {
                            stroke: 'rgb(56 133 123 /1)',
                            strokeWidth: 3,
                          },
                          '.MuiMarkElement-root': {
                            stroke: 'tomato',
                            scale: '1.5',
                            fill: '#fff', 
                            strokeWidth: 2,
                          },
                        }}
                        disableAxisListener
                      >
                        <LinePlot />
                        <MarkPlot />
                      </ChartContainer>
                    }/>
                    <Box title="Total cash-back value" img="cash_back.svg" valueT="$1,520" valueL="$1,520" avg="cash-back" h6='Total no of transection'  chart={
                        <ChartContainer
                        width={800}
                        height={300}
                        series={[{ type: 'line', data: box2Data }]}
                        xAxis={[{ scaleType: 'point', data: box2Labels }]}
                        sx={{
                          '.MuiLineElement-root': {
                            stroke: 'rgb(56 133 123 /1)',
                            strokeWidth: 3,
                          },
                          '.MuiMarkElement-root': {
                            stroke: 'tomato',
                            scale: '1.5',
                            fill: '#fff',
                            strokeWidth: 2,
                          },
                        }}
                        disableAxisListener
                      >
                        <LinePlot />
                        <MarkPlot />
                      </ChartContainer>
                    }/>
                </div>
                <div className='items-center justify-between text-start ms-9 mt-5'>
                    {/* ... your active offers section ... */}
                    <h4 className='text-start'>
                        Active offers
                    </h4>
                    {/* <div className='text-center my-12'>
                        <p style={{ color: 'grey'}}>There is no active offers at this time</p>
                    </div> */}
                    <div className=''>
                        <div className='mt-4'>
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
        </div>
    );
}

export default Empty;
