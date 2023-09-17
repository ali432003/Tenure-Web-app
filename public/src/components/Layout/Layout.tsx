import Empty from '../../pages/Dashboard/Empty';
import Employees from '../../pages/Employees/Employees';
import Deals from '../../pages/Deals/Deals';
import Wallet from '../../pages/Wallet/Wallet';
import Settings from '../../pages/Settings/Settings';
import Slidebar from '../Slidebar/Slidebar';
// import Reciever from '../../pages/Employees/Reciever/Reciever.tsx';
// import Purchase from '.././pages/Employees/Purchase/Purchase.tsx';
// import Purchase from '../../pages/Employees/Purchase/Purchase.tsx';
import { Route, Routes } from 'react-router-dom';
import CatDetails from '../CatDetails/CatDetails';
import CreateANewDeal from '../../pages/Deals/CreateANewDeal/CreateANewDeal';
import Edit from '../../pages/Wallet/Edit/Edit';
import TopUp from '../../pages/Wallet/TopUp/TopUp';
import './Layout.css';
export default function Layout() {
  return (
    <div className='wholePage'>
      <div className="left">
        <Slidebar />
      </div>
      <div className='right'>
        <Routes>
          {/* Remove the nested Routes component from here */}
          <Route path="/Dashboard" element={<Empty />} />
          <Route path="/Employees" element={<Employees />} />
          <Route path="/Deals" element={<Deals />} />
          <Route path="/Wallet" element={<Wallet />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/CatDetails" element={<CatDetails />} />
          <Route path="/CreateANewDeal" element={<CreateANewDeal headingText={'Create a new deal'} />} />
          <Route path="/EditDeal" element={<CreateANewDeal headingText={'Edit Deal'}/>} />
          <Route path="/Edit" element={<Edit headingText='Edit card details'/>} />
          <Route path="/AddCard" element={<Edit headingText='Add a new Card'/>} />
          <Route path="/TopUp" element={<TopUp />} />
        </Routes>
      </div>
    </div>
  );
}
