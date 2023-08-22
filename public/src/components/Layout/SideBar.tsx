import logo_icon from '../../assets/icons/logo_icon.svg';
import logo_icon_1 from '../../assets/icons/logo_icon_small_1.svg';
import logo_icon_2 from '../../assets/icons/logo_icon_small_2.svg';
import employees_1 from '../../assets/icons/employees_1.svg';
import employees_2 from '../../assets/icons/employees_2.svg';
import deals_1 from '../../assets/icons/deals_1.svg';
import deals_2 from '../../assets/icons/deals_2.svg';
import wallet_1 from '../../assets/icons/wallet_1.svg';
import wallet_2 from '../../assets/icons/wallet_2.svg';
import settings_1 from '../../assets/icons/settings_1.svg';
import settings_2 from '../../assets/icons/settings_2.svg';
import logout_1 from '../../assets/icons/logout_1.svg';
import logout_2 from '../../assets/icons/logout_2.svg';
import { useState } from 'react';

interface Menu {
  id: number;
  menuName: string;
  icon: string;
  hovericon: string;
  href: string;
}

export const SideBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuList: Menu[] = [
    { id: 1, menuName: 'Home', href: '/Home', icon: logo_icon_2, hovericon: logo_icon },
    { id: 2, menuName: 'Employees', href: '/', icon: employees_2, hovericon: employees_1 },
    { id: 3, menuName: 'Deals', href: '/', icon: deals_2, hovericon: deals_1 },
    { id: 4, menuName: 'Wallet', href: '/', icon: wallet_2, hovericon: wallet_1 },
    { id: 5, menuName: 'Settings', href: '/', icon: settings_2, hovericon: settings_1 },
    { id: 6, menuName: 'Logout', href: '/', icon: logout_2, hovericon: logout_1 },
  ];

  const [activeID, setActiveID] = useState<number>(0);

  const handleClick = (id: number): void => {
    setActiveID(id);
  };

  const [isHovered, setIsHovered] = useState<number>(0);

  const handleMouseEnter = (id: number) => {
    setIsHovered(id);
  };

  const handleMouseLeave = (id: number) => {
    setIsHovered(id);
  };

  return (
    <>
      <div
        className={` ${open ? 'w-0' : 'w-60 '} 
        bg-primary-500 
        h-screen 
        absolute 
        top-0 
        bottom-0 
        left-0 
        right-0
        duration-300`}
      >
        <div
          className="w-full 
          flex 
          items-center
          px-8 
          py-10"
        >
          <button onClick={() => setOpen(!open)} className="inline-flex items-center align-baseline">
            {open ? (
              <>
                <img src={logo_icon} alt="Tenure Logo" />
                <h4 className="text-gray-900 text-uppercase">TENURE</h4>
              </>
            ) : (
              <>
                <img src={logo_icon_1} alt="Tenure Logo" />
                <h4 className="text-gray-50 text-uppercase">TENURE</h4>
              </>
            )}
          </button>
        </div>
        <div className="mt-[160px]">
          <ul>
            {menuList.map((menu: Menu) => {
              return (
                <li
                  className={`
                  flex-col
                  
                  ${
                    activeID === menu.id
                      ? 'bg-white text-primary-500  hover:bg-white text-primary-500'
                      : 'bg-primary-500 text-white  hover:bg-white text-primary-500'
                  }
                  `}
                  key={menu.id}
                  onClick={() => handleClick(menu.id)}
                  onMouseEnter={() => handleMouseEnter(menu.id)}
                  onMouseLeave={() => handleMouseLeave(menu.id)}
                >
                  <a
                    href={menu.href}
                    className="w-full py-5 px-8 items-center text-gray-50 text-center inline-flex hover:text-primary-500"
                  >
                    <img
                      src={activeID === menu.id ? menu.hovericon : isHovered === menu.id ? menu.hovericon : menu.icon}
                      alt=""
                      className="pr-4"
                    />
                    <h4>{menu.menuName}</h4>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
