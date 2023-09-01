import Empty from '../../pages/Dashboard/Empty';
import Employees from '../../pages/Employees/Employees';
import Slidebar from '../Slidebar/Slidebar';
import Reciever from '../../pages/Employees/Reciever/Reciever.tsx';
// import Purchase from '.././pages/Employees/Purchase/Purchase.tsx';
import Purchase from '../../pages/Employees/Purchase/Purchase.tsx';
import { Route, BrowserRouter as Router, Routes,useLocation } from 'react-router-dom';
export default function Layout() {
  return (
    <div style={{ display: 'flex',height:"100%" }}>
      <div><Slidebar /></div>
      <div style={{ flex: 1, padding: '20px' }}>
      <Routes>
          {/* Remove the nested Routes component from here */}
          <Route path="/Dashboard" element={<Empty />} />
          <Route path="/Employees" element={<Employees />} />
          <Route path="/Reciever" element={<Reciever />} />
          <Route path="/Purchase" element={<Purchase />} />
        </Routes>
      </div>
    </div>
  );
}
