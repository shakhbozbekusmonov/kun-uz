import React from 'react';
import '../sass/admin-layout.scss';
import {Link} from "react-router-dom";
import { createBrowserHistory } from "history";
import {AiOutlineMenu} from "react-icons/ai";
import {ImNewspaper} from "react-icons/im";


const AdminLayout = (props) => {
    const history = createBrowserHistory({ window });
    return (
        <div className='admin-layout'>
            <div className="admin-layout-left">
                <div className="user-info d-flex justify-content-between align-items-center">
                    <div>
                        <img src="/images/user.svg" alt="Shakhbozbek Usmonov"/>
                    </div>
                    <div>
                        <h5 className='mb-1'>Shakhbozbek Usmonov</h5>
                        <p className='mb-0'>Administrator</p>
                    </div>
                </div>
                <div className="menus">
                    <ul className="nav flex-column">
                        <li className="nav-item"><Link to='/admin/menus' className={`nav-link ${history.location.pathname === '/admin/menus' ? 'active' : "" }`} ><AiOutlineMenu className='mr-2'/> Menular</Link></li>
                        <li className="nav-item"><Link to='/admin/news' className={`nav-link ${history.location.pathname === '/admin/news' ? 'active' : "" }`} ><ImNewspaper className='mr-2'/> Yangiliklar</Link></li>
                        <li className="nav-item"><Link to='/admin/' className={`nav-link ${history.location.pathname === '/admin/' ? 'active' : "" }`} ><ImNewspaper className='mr-2'/> Yangiliklar</Link></li>
                        <li className="nav-item"><Link to='/admin/' className={`nav-link ${history.location.pathname === '/admin/' ? 'active' : "" }`} ><ImNewspaper className='mr-2'/> Yangiliklar</Link></li>
                        <li className="nav-item"><Link to='/admin/' className={`nav-link ${history.location.pathname === '/admin/' ? 'active' : "" }`} ><ImNewspaper className='mr-2'/> Yangiliklar</Link></li>
                        <li className="nav-item"><Link to='/admin/' className={`nav-link ${history.location.pathname === '/admin/' ? 'active' : "" }`} ><ImNewspaper className='mr-2'/> Yangiliklar</Link></li>
                        <li className="nav-item"><Link to='/admin/' className={`nav-link ${history.location.pathname === '/admin/' ? 'active' : "" }`} ><ImNewspaper className='mr-2'/> Yangiliklar</Link></li>
                        <li className="nav-item"><Link to='/admin/' className={`nav-link ${history.location.pathname === '/admin/' ? 'active' : "" }`} ><ImNewspaper className='mr-2'/> Yangiliklar</Link></li>
                    </ul>
                </div>
            </div>
            <div className="admin-layout-right">
                {props.children}
            </div>
        </div>
    );
};

export default AdminLayout;
