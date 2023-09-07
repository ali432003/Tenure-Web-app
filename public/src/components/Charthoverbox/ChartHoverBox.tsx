import React from 'react';
interface ComponentProps {
  active: any;
  payload: any;
  label: any;
}

export const ChartHoverBox: React.FC<ComponentProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          width: '185%',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          borderRadius: '10px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <div className="text-white w-full py-1 rounded-t-lg" style={{ backgroundColor: '#38857B', padding: '1rem 0' }}>
          {`${label},2023`}
        </div>
        <h1 className="text-left p-2 w-11/12 m-auto text-5xl">{payload[0].value}</h1>
        <p className="text-left p-2 w-11/12 m-auto mb-0 text-xl">Total Savers:{payload[0].payload.totalSaver}</p>
        <p className="text-left p-2 pb-4 w-11/12 m-auto mb-2 text-xl">Average Savings:{payload[0].payload.avgSaving}</p>
      </div>
    );
  }
  return null;
};
