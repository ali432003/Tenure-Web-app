import React from 'react'
interface ComponentProps {
  active: any;
  payload: any;
  label: any;

}

export const  ChartHoverBox:React.FC<ComponentProps> = ({ active, payload, label })=> {

  if (active && payload && payload.length) {
    return (
      <>
      <h1>hello world</h1>
      </>
      

    );
  }
  return null

    return (
      <>
      
      <div>
        <div>
        Jan,2023

        </div>
        <div>


        </div>
      </div>
      
      
      </>
    )
}
