import React from 'react';
import { Link } from "react-router-dom";

// import { Container } from './styles';

export default function SidebarItem(props) {

    const { path, name, iconClass, index, isActive } = props;
    const handleClick = () => { props.onClick(index); }

    return (
        <>
            <li className="nav-item has-treeview">
                <Link
                    className={isActive ? 'nav-link active' : 'nav-link'}
                    onClick={handleClick}
                    to={path}
                >
                    <i className={iconClass}></i>
                    <p>{name}</p>

                </Link>
            </li>
        </>
    )
}
