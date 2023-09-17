import React, { useState } from 'react';
import '../Employees/Employee.css';
import EmTableHeads from '../../components/Em/EmTableHeads';
import EmTableRows from '../../components/Em/EmTableRows';
// import { Link } from 'react-router-dom';
// import CreateANewDeal from './CreateANewDeal/CreateANewDeal';
import {Employeedeals,Employerdeals,Createdbyyou,Allcategories,Food,Travel,Healthcare,Retail,ProfessionalDevelopment ,localbuisness, Financialservices ,Gadgets ,Communitypartnerships, CreateANewDeal } from '../../en.json'
import { useNavigate } from 'react-router-dom';

export default function Deals() {
  let navigate = useNavigate()
  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
  };
  const filterByCategory2 = (category2: string) => {
    setSelectedCategory2(category2);
    //setCurrentKey(category2);
  };
  const [selectedCategory, setSelectedCategory] = useState('all'); //child
  const [selectedCategory2, setSelectedCategory2] = useState('Employee Deals'); //parent
  //const [currentKey, setCurrentKey] = useState('Employee Deals');

  let EmDeals = () => {
    let emCat = document.getElementById('emCat');
    let emrCat = document.getElementById('emrCat');
    let cus = document.getElementById('cus');
    filterByCategory2('Employee Deals');
    if (emCat) {
      emCat.style.display = 'flex';
    }
    if (emrCat) {
      emrCat.style.display = 'none';
    }
    if (cus) {
      cus.style.display = 'none';
    }
  };

  let EmrDeals = () => {
    let emCat = document.getElementById('emCat');
    let emrCat = document.getElementById('emrCat');
    let cus = document.getElementById('cus');
    filterByCategory2('Employer Deals');
    if (emCat) {
      emCat.style.display = 'none';
    }
    if (emrCat) {
      emrCat.style.display = 'flex';
    }
    if (cus) {
      cus.style.display = 'none';
    }
  };
  let CusDeals = () => {
    let emCat = document.getElementById('emCat');
    let emrCat = document.getElementById('emrCat');
    let cus = document.getElementById('cus');
    filterByCategory2('Customer Deals');
    if (emCat) {
      emCat.style.display = 'none';
    }
    if (emrCat) {
      emrCat.style.display = 'none';
    }
    if (cus) {
      cus.style.display = 'flex';
    }
  };
  type Item = {
    id: number;
    brand: string;
    offerTitle: string;
    expirydate: string;
    category: string;
    img: string;
    catimg: string;
    catcol: string;
  };
  const EmployeeDealData = [
    {
      img: 'health_fit.svg',
      catimg: 'healthcare.svg',
      catcol: '#972144',
      id: 1,
      brand: 'Health Fit',
      offerTitle: '20% off annual gym memberships',
      expirydate: '6/11/2023',
      category: 'Health-care',
    },
    {
      img: 'gap.svg',
      catimg: 'retail.svg',
      catcol: '#004E5F',
      id: 2,
      brand: 'Gap',
      offerTitle: 'Buy one, get one 50% off on selected fashion items',
      expirydate: '8/30/2023',
      category: 'Retail',
    },
    {
      img: 'starbucks.svg',
      catimg: 'food.svg',
      catcol: '#DA6252',
      id: 3,
      brand: 'Starbucks',
      offerTitle: 'Visit two times and save 5%',
      expirydate: '9/5/2023',
      category: 'Food',
    },
    {
      img: 'make_my_trip.svg',
      catimg: 'travel.svg',
      catcol: '#B77900',
      id: 4,
      brand: 'MakeMytrip',
      offerTitle: '50% off a 5-day All-inclusive Caribbean cruise',
      expirydate: '11/10/2023',
      category: 'Travel',
    },
    {
      img: 'health_fit.svg',
      catimg: 'healthcare.svg',
      catcol: '#972144',
      id: 5,
      brand: 'Health Fit',
      offerTitle: '10% off personal training sessions',
      expirydate: '7/15/2023',
      category: 'Health-care',
    },
    {
      img: 'gap.svg',
      catimg: 'retail.svg',
      catcol: '#004E5F',
      id: 6,
      brand: 'Gap',
      offerTitle: 'Free shipping on all orders',
      expirydate: '8/25/2023',
      category: 'Retail',
    },
    {
      img: 'starbucks.svg',
      catimg: 'food.svg',
      catcol: '#DA6252',
      id: 7,
      brand: 'Starbucks',
      offerTitle: 'Buy one, get one free on espresso drinks',
      expirydate: '9/10/2023',
      category: 'Food',
    },
    {
      img: 'make_my_trip.svg',
      catimg: 'travel.svg',
      catcol: '#B77900',
      id: 8,
      brand: 'MakeMytrip',
      offerTitle: '25% off a luxury beachfront resort stay',
      expirydate: '11/5/2023',
      category: 'Travel',
    },
  ];
  const filteredRows = EmployeeDealData.filter(
    (item: Item) => selectedCategory === 'all' || item.category === selectedCategory,
  );

  const EmployerDealData = [
    {
      img: 'health_fit.svg',
      catimg: 'healthcare.svg',
      catcol: '#972144',
      id: 1,
      brand: 'Health Fit',
      offerTitle: '20% off annual gym memberships',
      expirydate: '6/11/2023',
      category: 'Health-care',
    },
    {
      img: '',
      catimg: '',
      catcol: '',
      id: 2,
      brand: 'The Apple Factory',
      offerTitle: 'Buy one, get one 50% off on all products',
      expirydate: '6/11/2023',
      category: 'Local Business',
    },
    {
      img: '',
      catimg: '',
      catcol: '',
      id: 3,
      brand: 'S.U.C.C.E.S.S',
      offerTitle: 'Forge the future through donation',
      expirydate: '6/11/2023',
      category: 'Community partnership',
    },
    {
      img: '',
      catimg: '',
      catcol: '',
      id: 4,
      brand: 'SuccessCoaching',
      offerTitle: 'Accelerate professional growth through 10 free courses',
      expirydate: '6/11/2023',
      category: 'Professional Development',
    },
    {
      img: '',
      catimg: '',
      catcol: '',
      id: 5,
      brand: 'Gadgets plus',
      offerTitle: 'Get 50% off all apple products',
      expirydate: '6/11/2023',
      category: 'Gadgets',
    },
    {
      img: '',
      catimg: '',
      catcol: '',
      id: 6,
      brand: 'KPMG',
      offerTitle: 'Free Business Auditing',
      expirydate: '6/11/2023',
      category: 'Financial Services',
    },
    {
      img: 'make_my_trip.svg',
      catimg: 'travel.svg',
      catcol: '#B77900',
      id: 7,
      brand: 'MakeMytrip',
      offerTitle: '50% off a 5-day All-inclusive Caribbean cruise',
      expirydate: '11/10/2023',
      category: 'Travel',
    },
    {
      img: 'health_fit.svg',
      catimg: 'healthcare.svg',
      catcol: '#972144',
      id: 8,
      brand: 'Health Fit',
      offerTitle: '20% off annual gym memberships',
      expirydate: '6/11/2023',
      category: 'Health-care',
    },
    {
      img: '',
      catimg: '',
      catcol: '',
      id: 9,
      brand: 'The Apple Factory',
      offerTitle: 'Buy one, get one 50% off on all products',
      expirydate: '6/11/2023',
      category: 'Local Business',
    },
    {
      img: '',
      catimg: '',
      catcol: '',
      id: 10,
      brand: 'S.U.C.C.E.S.S',
      offerTitle: 'Forge the future through donation',
      expirydate: '6/11/2023',
      category: 'Community partnership',
    },
    {
      img: '',
      catimg: '',
      catcol: '',
      id: 11,
      brand: 'SuccessCoaching',
      offerTitle: 'Accelerate professional growth through 10 free courses',
      expirydate: '6/11/2023',
      category: 'Professional Development',
    },
    {
      img: '',
      catimg: '',
      catcol: '',
      id: 12,
      brand: 'Gadgets plus',
      offerTitle: 'Get 50% off all apple products',
      expirydate: '6/11/2023',
      category: 'Gadgets',
    },
    {
      img: '',
      catimg: '',
      catcol: '',
      id: 13,
      brand: 'KPMG',
      offerTitle: 'Free Business Auditing',
      expirydate: '6/11/2023',
      category: 'Financial Services',
    },
    {
      img: 'make_my_trip.svg',
      catimg: 'travel.svg',
      catcol: '#B77900',
      id: 14,
      brand: 'MakeMytrip',
      offerTitle: '50% off a 5-day All-inclusive Caribbean cruise',
      expirydate: '11/10/2023',
      category: 'Travel',
    },
    {
      img: 'health_fit.svg',
      catimg: 'healthcare.svg',
      catcol: '#972144',
      id: 15,
      brand: 'Health Fit',
      offerTitle: '20% off annual gym memberships',
      expirydate: '6/11/2023',
      category: 'Health-care',
    },
    {
      img: '',
      catimg: '',
      catcol: '',
      id: 16,
      brand: 'The Apple Factory',
      offerTitle: 'Buy one, get one 50% off on all products',
      expirydate: '6/11/2023',
      category: 'Local Business',
    },
    {
      img: '',
      catimg: '',
      catcol: '',
      id: 17,
      brand: 'S.U.C.C.E.S.S',
      offerTitle: 'Forge the future through donation',
      expirydate: '6/11/2023',
      category: 'Community partnership',
    },
    {
      img: '',
      catimg: '',
      catcol: '',
      id: 18,
      brand: 'SuccessCoaching',
      offerTitle: 'Accelerate professional growth through 10 free courses',
      expirydate: '6/11/2023',
      category: 'Professional Development',
    },
    {
      img: '',
      catimg: '',
      catcol: '',
      id: 19,
      brand: 'Gadgets plus',
      offerTitle: 'Get 50% off all apple products',
      expirydate: '6/11/2023',
      category: 'Gadgets',
    },
    {
      img: '',
      catimg: '',
      catcol: '',
      id: 20,
      brand: 'KPMG',
      offerTitle: 'Free Business Auditing',
      expirydate: '6/11/2023',
      category: 'Financial Services',
    },
    {
      img: 'make_my_trip.svg',
      catimg: 'travel.svg',
      catcol: '#B77900',
      id: 21,
      brand: 'MakeMytrip',
      offerTitle: '50% off a 5-day All-inclusive Caribbean cruise',
      expirydate: '11/10/2023',
      category: 'Travel',
    },
  ];
  const filteredRowsEmployer = EmployerDealData.filter(
    (item: Item) => selectedCategory === 'all' || item.category === selectedCategory,
  );

  const DealsCreated = [
    {
      img: 'health_fit.svg',
      catimg: 'healthcare.svg',
      catcol: '#972144',
      id: 1,
      brand: 'Health Fit',
      offerTitle: '20% off annual gym memberships',
      expirydate: '6/11/2023',
      category: 'Health-care',
    },
    {
      img: 'health_fit.svg',
      catimg: 'healthcare.svg',
      catcol: '#972144',
      id: 2,
      brand: 'Health Fit',
      offerTitle: '20% off annual gym memberships',
      expirydate: '6/11/2023',
      category: 'Health-care',
    },
    {
      img: 'health_fit.svg',
      catimg: 'healthcare.svg',
      catcol: '#972144',
      id: 3,
      brand: 'Health Fit',
      offerTitle: '20% off annual gym memberships',
      expirydate: '6/11/2023',
      category: 'Health-care',
    },
  ];

  return (
    <div className="flex h-min-screen">
      <div className="w-full ms-5">
        <div className="flex mt-6" id="prDiv">
          <a
            className={`mx-4 cursor-pointer text-xl ${selectedCategory2 === 'Employee Deals' ? 'blink' : ''}`}
            onClick={EmDeals}
          >
            {Employeedeals}
          </a>
          <a
            className={`mx-4 cursor-pointer text-xl ${selectedCategory2 === 'Employer Deals' ? 'blink' : ''}`}
            onClick={EmrDeals}
          >
            {Employerdeals}
          </a>
          <a
            className={`mx-4 cursor-pointer text-xl ${selectedCategory2 === 'Customer Deals' ? 'blink' : ''}`}
            onClick={CusDeals}
          >
            {Createdbyyou}
          </a>
        </div>
        <div className="w-11/12 ms-4 mt-9">
          <ul className="flex" id="emCat">
            <li
              className={`${selectedCategory === 'all' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`}
              onClick={() => filterByCategory('all')}
            >
              {Allcategories}
            </li>
            <li
              className={`${selectedCategory === 'Food' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`}
              onClick={() => filterByCategory('Food')}
            >
              {Food}
            </li>
            <li
              className={`${
                selectedCategory === 'Health-care' ? 'active' : ''
              } list-none rounded-lg p-2 cursor-pointer`}
              onClick={() => filterByCategory('Health-care')}
            >
              {Healthcare}
            </li>
            <li
              className={`${selectedCategory === 'Travel' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`}
              onClick={() => filterByCategory('Travel')}
            >
              {Travel}
            </li>
            <li
              className={`${selectedCategory === 'Retail' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`}
              onClick={() => filterByCategory('Retail')}
            >
              {Retail}
            </li>
          </ul>
          <ul className="flex" id="emrCat" style={{ display: 'none' }}>
            <li
              className={`${selectedCategory === 'all' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`}
              onClick={() => filterByCategory('all')}
            >
              {Allcategories}
            </li>
            <li
              className={`${
                selectedCategory === 'Health-care' ? 'active' : ''
              } list-none rounded-lg p-2 cursor-pointer`}
              onClick={() => filterByCategory('Health-care')}
            >
              {Healthcare}
            </li>
            <li
              className={`${
                selectedCategory === 'Professional Development' ? 'active' : ''
              } list-none rounded-lg p-2 cursor-pointer`}
              onClick={() => filterByCategory('Professional Development')}
            >
              {ProfessionalDevelopment}
            </li>
            <li
              className={`${
                selectedCategory === 'Local Business' ? 'active' : ''
              } list-none rounded-lg p-2 cursor-pointer`}
              onClick={() => filterByCategory('Local Business')}
            >
              {localbuisness}
            </li>
            <li
              className={`${
                selectedCategory === 'Financial Services' ? 'active' : ''
              } list-none rounded-lg p-2 cursor-pointer`}
              onClick={() => filterByCategory('Financial Services')}
            >
              {Financialservices}
            </li>
            <li
              className={`${selectedCategory === 'Travel' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`}
              onClick={() => filterByCategory('Travel')}
            >
              {Travel}
            </li>
            <li
              className={`${selectedCategory === 'Gadgets' ? 'active' : ''} list-none rounded-lg p-2 cursor-pointer`}
              onClick={() => filterByCategory('Gadgets')}
            >
              {Gadgets}
            </li>
            <li
              className={`${
                selectedCategory === 'Community partnership' ? 'active' : ''
              } list-none rounded-lg p-2 cursor-pointer`}
              onClick={() => filterByCategory('Community partnership')}
            >
              {Communitypartnerships}
            </li>
          </ul>
          <button
            className="p-2 rounded-lg"
            style={{ display: 'none', backgroundColor: '#38857b', color: 'white' }}
            id="cus"
            onClick={() => navigate('/CreateANewDeal')}
          >
            <img src="src/assets/icons/add_2.svg" className="mr-2" />
            {CreateANewDeal}
          </button>
          <div className="relative">
            <input type="text" placeholder="search deals" className="mt-5 w-full rounded-lg" />
            <img src="src/assets/icons/search.svg" className="absolute bottom-2 right-2" alt="" />
          </div>
        </div>
        <div className="mt-10">
          <table className="table-auto w-full">
            {selectedCategory2 === 'Employee Deals' ? (
              <>
                <EmTableHeads hkey={'Employee Deals'} />
                {filteredRows.map((item) => (
                  <React.Fragment key={item.id}>
                    <EmTableRows
                      className="group-hover:text-white"
                      rkey={'DealsTable'}
                      img={item.img}
                      brand={item.brand}
                      offerTitle={item.offerTitle}
                      expirydate={item.expirydate}
                      category={item.category}
                      catimg={item.catimg}
                      catcol={item.catcol}
                    />
                  </React.Fragment>
                ))}
              </>
            ) : selectedCategory2 === 'Employer Deals' ? (
              <>
                <EmTableHeads hkey={'Employee Deals'} />
                {filteredRowsEmployer.map((item) => (
                  <React.Fragment key={item.id}>
                    <EmTableRows
                      rkey={'DealsTable'}
                      img={item.img}
                      brand={item.brand}
                      offerTitle={item.offerTitle}
                      expirydate={item.expirydate}
                      category={item.category}
                      catimg={item.catimg}
                      catcol={item.catcol}
                    />
                  </React.Fragment>
                ))}
              </>
            ) : (
              <>
                <EmTableHeads hkey={'DealsCreated'} />
                {DealsCreated.map((item) => (
                  <React.Fragment key={item.id}>
                    <EmTableRows
                      rkey={'dealsCreatedByYou'}
                      img={item.img}
                      brand={item.brand}
                      offerTitle={item.offerTitle}
                      expirydate={item.expirydate}
                      category={item.category}
                      catimg={item.catimg}
                      catcol={item.catcol}
                    />
                  </React.Fragment>
                ))}
              </>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
