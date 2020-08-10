import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

const menus = [
    {
        name: 'Trang Chu',
        to: '/',
        exact: true
    },
    {
        name: 'Quan ly san pham',
        to: '/product-list',
        exact: false
    },
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                let active = match ? 'active' : ''
                return (
                    <li className={`nav-item ${active}`}>
                        <Link to={to} className="nav-link">
                        {label}
                        </Link>
                    </li>
                )
            }
            }
        />
    )
}

class Menu extends Component {
    render() {
        return (
            <div className="container-fuild">
                <nav className="navbar navbar-expand-lg bg-light  mb-4">
                    <a className="navbar-brand">Navbar</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            
                            {this.showMenus(menus)}
                        </ul>
                    </div>
                </nav>

            </div>
        );
    }
    showMenus(menus){
        var result = null;
        if(menus.length>0){
            result = menus.map((menu, index) =>{
                return (
                    <MenuLink 
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        exact={menu.activeOnlyWhenExact}
                    />
                )
            })
        }
        return result
    }
}

export default Menu;
