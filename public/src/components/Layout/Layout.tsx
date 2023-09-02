import Empty from '../../pages/Dashboard/Empty';
import Employees from '../../pages/Employees/Employees';
import Deals from '../../pages/Deals/Deals';
import Wallet from '../../pages/Wallet/Wallet';
import Settings from '../../pages/Settings/Settings';
import Slidebar from '../Slidebar/Slidebar';
// import Reciever from '../../pages/Employees/Reciever/Reciever.tsx';
// import Purchase from '.././pages/Employees/Purchase/Purchase.tsx';
// import Purchase from '../../pages/Employees/Purchase/Purchase.tsx';
import { Route, Routes, } from 'react-router-dom';
export default function Layout() {
  return (
    <div  style={{ display: 'flex' }}>
      <div  ><Slidebar /></div>
      <div style={{ flex: 1, padding: '20px' }}>
      <Routes>
          {/* Remove the nested Routes component from here */}
          <Route path="/Dashboard" element={<Empty />} />
          <Route path="/Employees" element={<Employees />} />
          <Route path="/Deals" element={<Deals />} />
          <Route path="/Wallet" element={<Wallet />} />
          <Route path="/Settings" element={<Settings />} />
          {/* <Route path="/Reciever" element={<Reciever />} /> */}
          {/* <Route path="/Purchase" element={<Purchase />} /> */}
        </Routes>
      </div>
    </div>
  );
}
