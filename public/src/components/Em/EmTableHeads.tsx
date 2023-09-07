import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import './style.css';
import { Employee,Brand ,OfferTitle ,ExpirayDate ,Category, Overallprogress,Savinggoals,Noofpurchases, Activedeals, Totalroundupvalue ,Totalcashbackvalue,Totalcontributionsreceived} from '../../en.json'
export default function EmTableHeads(props: any) {
  var shouldShowMain;
  var shouldShowPurchase;
  var shouldShowReceiver;
  var shouldShowDashHeads;
  var shouldShowDealsHead;
    var shouldShowWalletHeads;
  if (props.hkey === 'main') {
    shouldShowMain = true;
    shouldShowPurchase = false;
    shouldShowReceiver = false;
  }
  if (props.hkey === 'receiver') {
    shouldShowMain = false;
    shouldShowPurchase = false;
    shouldShowReceiver = true;
  }
  if (props.hkey === 'purchase') {
    shouldShowMain = false;
    shouldShowPurchase = true;
    shouldShowReceiver = false;
  }
  if (props.hkey === 'Dash') {
    shouldShowMain = false;
    shouldShowPurchase = false;
    shouldShowReceiver = false;
    shouldShowDashHeads = true;
  }
  if (props.rkey === 'Employee Deals') {
    shouldShowMain = false;
    shouldShowPurchase = false;
    shouldShowReceiver = false;
    shouldShowDashHeads = false;
    shouldShowDealsHead = true;
  }
    if (props.hkey === 'Wall') {
        shouldShowMain = false;
        shouldShowPurchase = false;
        shouldShowReceiver = false;
        shouldShowDashHeads = false;
        shouldShowWalletHeads = true;
    }
  return (
    <>
      {/* Main heads */}
      {shouldShowMain && (
        <>
          <thead>
            <tr className="bg-white-600 shadow-lg my-4">
              <th className="text-start w-1/4 p-4" style={{ color: '#25384D' }}>
                {Employee}
              </th>
              <th className="flex justify-start mt-4 saveGoals cursor-pointer" style={{ color: '#25384D' }}>
                <a>
                  <Tippy
                    content={<span>Hover on saving goals to see more info</span>}
                    placement="bottom"
                    animation="scale"
                  >
                    <span className="flex">
                      {' '}
                      {Savinggoals}
                      <img src="src/assets/icons/i.svg" className="ml-2" alt="" />
                    </span>
                  </Tippy>
                </a>
              </th>

              <th className="w-1/4" style={{ color: '#25384D' }}>
                {Overallprogress}
              </th>
              <th className="w-1/2"></th>
            </tr>
          </thead>
        </>
      )}

      {/* Receiver Heads */}
      {shouldShowReceiver && (
        <>
          <thead>
            <tr className="bg-white-600 shadow-lg my-4">
              <th className="text-start w-1/4 p-4" style={{ color: '#25384D' }}>
                {Employee}
              </th>
              <th className="text-center w-1/4" style={{ color: '#25384D' }}>
                {Overallprogress}
              </th>
              <th className="w-1/4 text-center" style={{ color: '#25384D' }}>
                {Totalcontributionsreceived}
              </th>
              <th className="w-1/6"></th>
            </tr>
          </thead>
        </>
      )}

      {/* Purchase heads */}
      {shouldShowPurchase && (
        <>
          <thead>
            <tr className="bg-white-600 shadow-lg my-4">
              <th className="text-start w-1/4 p-4" style={{ color: '#25384D' }}>
                {Brand}
              </th>
              <th className="text-start" style={{ color: '#25384D' }}>
               {Noofpurchases}
              </th>
              <th className="text-start" style={{ color: '#25384D' }}>
                {Activedeals}
              </th>
              <th className="text-start" style={{ color: '#25384D' }}>
                {Totalroundupvalue}
              </th>
              <th className="text-start" style={{ color: '#25384D' }}>
              {Totalcashbackvalue}
              </th>
              <th className="text-start" style={{ color: '#25384D' }}>
                {Category}
              </th>
            </tr>
          </thead>
        </>
      )}

      {/* Dashboard */}
      {shouldShowDashHeads && (
        <>
          <thead>
            <tr className="bg-white-600 shadow-lg my-4">
              <th className="text-start w-1/4 p-4" style={{ color: '#25384D' }}>
                {Brand}
              </th>
              <th className="text-start" style={{ color: '#25384D' }}>
                {OfferTitle}
              </th>
              <th className="  text-start w-1/5" style={{ color: '#25384D' }}>
                {ExpirayDate}
              </th>
              <th className="  text-start" style={{ color: '#25384D' }}>
                {Category}
              </th>
            </tr>
          </thead>
        </>
      )}
            {shouldShowWalletHeads && (
                <>
                    <thead>
                        <tr className='bg-white-600 shadow-lg my-4'>
                            <th className='text-start w-1/5 p-4' style={{ color: '#25384D' }}>Date & Time</th>
                            <th className='text-start w-1/5' style={{ color: '#25384D' }}>Amount</th>
                            <th className='  text-start w-1/5' style={{ color: '#25384D' }}>Payment channel</th>
                            <th className='  text-start' style={{ color: '#25384D' }}>Transection Type</th>
                        </tr>
                    </thead>
                </>
            )}

      {props.hkey === 'Employee Deals' && (
        <>
          <thead>
            <tr className="bg-white-600 shadow-lg my-4">
              <th className="text-start w-1/4 p-4" style={{ color: '#25384D' }}>
                {Brand}
              </th>
              <th className="text-start" style={{ color: '#25384D' }}>
                {OfferTitle}
              </th>
              <th className="  text-start w-1/5" style={{ color: '#25384D' }}>
                {ExpirayDate}
              </th>
              <th className="  text-start" style={{ color: '#25384D' }}>
                {Category}
              </th>
            </tr>
          </thead>
        </>
      )}

      {props.hkey === 'DealsCreated' && (
        <thead>
          <tr className="bg-white-600 shadow-lg my-4">
            <th className="text-start w-1/4 p-4" style={{ color: '#25384D' }}>
              {Brand}
            </th>
            <th className="text-start" style={{ color: '#25384D' }}>
              {OfferTitle}
            </th>
            <th className="  text-start w-1/5" style={{ color: '#25384D' }}>
              {ExpirayDate}
            </th>
            <th className="  text-start" style={{ color: '#25384D' }}>
              {Category}
            </th>
            <th className="w-1/4"></th>
          </tr>
        </thead>
      )}
    </>
  );
}
