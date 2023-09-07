import Button from '../../components/Button/Button';
import Step4 from './Step4';
import { useState } from 'react';

function Step4_dc() {
  const [componet, setComponent] = useState(false);
  return (
    <>
      {componet === false ? (
        <div className="bg-gray-50 grid grid-cols-1">
          <div className="container min-w-full center pt-48 relative flex flex-col justify-center items-center">
            <h1>Top up your wallet</h1>
            <p style={{ color: 'grey' }} className="mt-2 w-1/3">
              Add money to your gifting wallet through your credit card to gift your employees
            </p>
          </div>
          <div>
            <p className="text-gray-400 mt-5 mx-auto text-right w-1/3 ">Step 4/4</p>
          </div>
          <div className="container min-w-full center pt-9 relative flex flex-col justify-center items-center">
            <img src="src/assets/images/card.jpeg" className="w-80"></img>
          </div>
          <div className="container min-w-full center pt-9 relative flex flex-col justify-center items-center">
            <div className="w-1/3">
              <div>
                <Button
                  type="button"
                  className="button-primary-lg  button mt-5 mb-9"
                  style={{ borderRadius: '10px' }}
                  onClick={() => setComponent(true)}
                >
                  Top up your wallet
                </Button>
              </div>
              <div className="flex justify-between">
                <span
                  className="text-lg font-semibold align-bottom cursor-pointer"
                  style={{ color: 'rgb(56 133 123 /1)' }}
                >
                  <a href="/OnBoarding3">
                    <img
                      src="src/assets/icons/chevron_left.svg"
                      alt=""
                      style={{ maxWidth: 'fit-conteny', display: 'inline', transform: 'translateY(-4px)' }}
                    />
                    &#9; Previous
                  </a>
                </span>
                <span
                  className="text-lg font-semibold cursor-pointer"
                  style={{ color: 'rgb(56 133 123 /1)', textAlign: 'right' }}
                >
                  Skip For Now
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Step4 />
      )}
    </>
  );
}

export default Step4_dc;
