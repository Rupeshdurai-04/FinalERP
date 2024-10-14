
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import {  FaUsers, FaMoneyBillWave, FaHandshake, FaTruck, FaBox, FaCog,  FaBlackTie } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>ERP Panel.</h1>
      </div>
      <ul className="sidebar-menu">
        <li>
          <NavLink 
            to="/human-resources" 
            className={({ isActive }) => isActive ? 'menu-link active-link' : 'menu-link'}
          >
            <FaUsers className="menu-icon" />
            <span>Human Resources</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/finance" 
            className={({ isActive }) => isActive ? 'menu-link active-link' : 'menu-link'}
          >
            <FaMoneyBillWave className="menu-icon" />
            <span>Finance and Accounting</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/crm" 
            className={({ isActive }) => isActive ? 'menu-link active-link' : 'menu-link'}
          >
            <FaHandshake className="menu-icon" />
            <span>Customer Relationship Management</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/supply-chain" 
            className={({ isActive }) => isActive ? 'menu-link active-link' : 'menu-link'}
          >
            <FaTruck className="menu-icon" />
            <span>Supply Chain Management</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/inventory" 
            className={({ isActive }) => isActive ? 'menu-link active-link' : 'menu-link'}
          >
            <FaBox className="menu-icon" />
            <span>Inventory</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/WorkForce Management" 
            className={({ isActive }) => isActive ? 'menu-link active-link' : 'menu-link'}
          >
            <FaBlackTie className="menu-icon" />
            <span>WorkForce Management</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/settings" 
            className={({ isActive }) => isActive ? 'menu-link active-link' : 'menu-link'}
          >
            <FaCog className="menu-icon" />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
