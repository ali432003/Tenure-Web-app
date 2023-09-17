import React from 'react';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
interface ComponentProps {
  title: string;
  btnText: string;
  show: boolean;
  previousLink: string;
  stepNumber: string;
}

export const Step4_sucess: React.FC<ComponentProps> = ({ title, btnText, show, previousLink, stepNumber }) => {
  const navigate = useNavigate();
  function onStep2Submit(_values: any) {
    navigate('/OnBoarding3');
  }
  function onStep4Submit(_values: any) {
    navigate('/Dashboard');
  }

  return (
    <div className="bg-gray-50 grid grid-cols-1">
      <div className="container min-w-full center pt-48 relative flex flex-col justify-center items-center">
        <h1>Top up your wallet</h1>
        <p style={{ color: 'grey' }} className="mt-2 w-1/3">
          Add money to your gifting wallet through your credit card to gift your employees
        </p>
      </div>
      <div>
        <p className="text-gray-400 mt-5 mx-auto text-right w-1/3 ">Step {stepNumber}/4</p>
      </div>
      <div className="container min-w-full center pt-9 relative flex flex-col justify-center items-center">
        <div className="w-1/3 border-2 rounded-lg border-solid" style={{ borderColor: 'rgb(56 133 123 /1)' }}>
          <img
            src="src/assets/icons/check_filled_1.svg"
            width={'45%'}
            style={{
              padding: '16%',
              marginLeft: '29%',
            }}
            alt="asdas"
          />
          <div style={{ transform: 'translateY(-261%)' }}>
            <span className="text-lg font-semibold cursor-pointer " style={{ color: 'rgb(56 133 123 /1)' }}>
              {title}
            </span>
          </div>
        </div>
        <div className="w-1/3">
          <Button
            type="submit"
            className="button-primary-lg  button mt-5 mb-9"
            style={{ borderRadius: '10px' }}
            onClick={show == true ? onStep2Submit : onStep4Submit}
          >
            {show ? (
              <>
                {btnText}&nbsp;
                <img
                  src="src/assets/icons/chevron_right.svg"
                  style={{ filter: 'brightness(300%)' }}
                  alt="right_arrow"
                />
              </>
            ) : (
              btnText
            )}
          </Button>
        </div>

        <div className="flex justify-between w-1/3">
          <span
            className={`text-lg font-semibold align-bottom cursor-pointer ${show == false ? 'text-left' : ''}`}
            style={{ color: 'rgb(56 133 123 /1)' }}
          >
            <a href={`${previousLink}`}>
              <img
                src="src/assets/icons/chevron_left.svg"
                alt=""
                style={{ maxWidth: 'fit-conteny', display: 'inline', transform: 'translateY(-4px)' }}
              />
              &#9; Previous
            </a>
          </span>
          {show == true && (
            <span
              className="text-lg font-semibold cursor-pointer"
              style={{ color: 'rgb(56 133 123 /1)', textAlign: 'right' }}
            >
              Skip For Now
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
