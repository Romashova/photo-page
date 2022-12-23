import React from "react";
import './Sidebar.css';
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
return (
    <div className="sidebar">
        <ul className="sidebar-list">
            <li className="sidebar-item">

                    <NavLink to="/" className={({isActive}) => `link ${isActive ? "isActive":""}`}>Home</NavLink>

            </li>
            <li className="sidebar-item">

                    <NavLink to="/family" className={({isActive}) => `link ${isActive ? "isActive":""}`}>Family</NavLink>

            </li>
            <li className="sidebar-item">

                    <NavLink to="/girls" className={({isActive}) => `link ${isActive ? "isActive":""}`}>Girls</NavLink>

            </li>
            <li className="sidebar-item">

                    <NavLink to="/kids" className={({isActive}) => `link ${isActive ? "isActive":""}`}>Children</NavLink>

            </li>
            <li className="sidebar-item">

                    <NavLink to="/love" className={({isActive}) => `link ${isActive ? "isActive":""}`}>LoveStory</NavLink>

            </li>
            <li className="sidebar-item">

                    <NavLink to="/media" className={({isActive}) => `link ${isActive ? "isActive":""}`}>Media</NavLink>

            </li>
            <li className="sidebar-item">

                    <NavLink to="/pets" className={({isActive}) => `link ${isActive ? "isActive":""}`}>Pets</NavLink>

            </li>
            <li className="sidebar-item">

                    <NavLink to="/reportage" className={({isActive}) => `link ${isActive ? "isActive":""}`}>Reportage</NavLink>

            </li>

        </ul>

    </div>
);
}