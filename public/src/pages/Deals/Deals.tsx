import React, { useState } from 'react'
import Slidebar from '../../components/Slidebar/Slidebar'
import '../Employees/Employee.css'
import { Link } from 'react-router-dom';
import CreateANewDeal from './CreateANewDeal/CreateANewDeal';

export default function Deals() {
  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
  };
  const filterByCategory2 = (category2: string) => {
    setSelectedCategory2(category2);
  };
  const [selectedCategory, setSelectedCategory] = useState('allCat'); //child
  const [selectedCategory2, setSelectedCategory2] = useState('Employee Deals'); //parent 


  let EmDeals = () => {
    let emCat = document.getElementById('emCat')
    let emrCat = document.getElementById('emrCat')
    let cus = document.getElementById('cus')
    filterByCategory2('Employee Deals')
    if (emCat) {
      emCat.style.display = 'flex'
    }
    if (emrCat) {
      emrCat.style.display = 'none'
    }
    if (cus) {
      cus.style.display = 'none'
    }

  }

  let EmrDeals = () => {
    let emCat = document.getElementById('emCat')
    let emrCat = document.getElementById('emrCat')
    let cus = document.getElementById('cus')
    filterByCategory2('Employer Deals')
    if (emCat) {
      emCat.style.display = 'none'

    }
    if (emrCat) {
      emrCat.style.display = 'flex'
    }
    if (cus) {
      cus.style.display = 'none'
    }
  }
  let CusDeals = () => {
    let emCat = document.getElementById('emCat')
    let emrCat = document.getElementById('emrCat')
    let cus = document.getElementById('cus')
    filterByCategory2('Customer Deals')
    if (emCat) {
      emCat.style.display = 'none'

    }
    if (emrCat) {
      emrCat.style.display = 'none'
    }
    if (cus) {
      cus.style.display = 'flex'
    }
  }


  return (
    <div className='flex h-min-screen'>
      <Slidebar />
      <div className='w-5/6 ms-5'>
        <div className='flex mt-6' id='prDiv'>
          <a className={`mx-4 cursor-pointer text-xl ${selectedCategory2 === 'Employee Deals' ? 'blink' : ''}`} onClick={EmDeals}>Employee deals</a>
          <a className={`mx-4 cursor-pointer text-xl ${selectedCategory2 === 'Employer Deals' ? 'blink' : ''}`} onClick={EmrDeals}>Employer deals</a>
          <a className={`mx-4 cursor-pointer text-xl ${selectedCategory2 === 'Customer Deals' ? 'blink' : ''}`} onClick={CusDeals}>Created by you</a>
        </div>
        <div className='w-11/12 ms-4 mt-9'>
          <ul className='flex' id="emCat">
            <li className={`${selectedCategory === 'allCat' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`} onClick={() => filterByCategory('allCat')} >All categories</li>
            <li className={`${selectedCategory === 'food' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`} onClick={() => filterByCategory('food')}>Food</li>
            <li className={`${selectedCategory === 'health' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`} onClick={() => filterByCategory('health')}>HealthCare</li>
            <li className={`${selectedCategory === 'travel' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`} onClick={() => filterByCategory('travel')}>Travel</li>
            <li className={`${selectedCategory === 'retail' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`} onClick={() => filterByCategory('retail')}>Retail</li>
          </ul>
          <ul className='flex' id='emrCat' style={{ display: "none" }}>
            <li className={`${selectedCategory === 'allCat' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`} onClick={() => filterByCategory('allCat')}>All categories</li>
            <li className={`${selectedCategory === 'health' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`} onClick={() => filterByCategory('health')}>HealthCare</li>
            <li className={`${selectedCategory === 'pd' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`} onClick={() => filterByCategory('pd')}>Professional Development</li>
            <li className={`${selectedCategory === 'lb' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`} onClick={() => filterByCategory('lb')}>local buisness</li>
            <li className={`${selectedCategory === 'fs' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`} onClick={() => filterByCategory('fs')}>Fiancial services</li>
            <li className={`${selectedCategory === 'travel' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`} onClick={() => filterByCategory('travel')}>Travel</li>
            <li className={`${selectedCategory === 'gadgets' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`} onClick={() => filterByCategory('gadgets')}>Gadgets</li>
            <li className={`${selectedCategory === 'cp' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`} onClick={() => filterByCategory('cp')}>Commuinty partnerships</li>
          </ul>
          <button className='p-2 rounded-lg' style={{ display: "none", backgroundColor: "#38857b", color: "white" }} id='cus'><img src='src/assets/icons/add_2.svg' className='mr-2' />Create A New Deal</button>
          <div className='relative'>
            <input type="text" placeholder='search deals' className='mt-5 w-full rounded-lg' />
            <img src="src/assets/icons/search.svg" className='absolute bottom-2 right-2' alt="" />
          </div>
        </div>
      </div>
    </div >
  )
}
