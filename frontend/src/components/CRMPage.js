
import React from 'react';
import './CRMPage.css';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const CRMPage = () => {
  
  const leadsBySourceData = {
    labels: ['Web Site', 'Partner', 'Campaign', 'Call', 'Email', 'Existing Customer'],
    datasets: [
      {
        data: [15, 10, 5, 20, 35, 15],
        backgroundColor: ['#64b5f6', '#81c784', '#ffb74d', '#9575cd', '#f06292', '#4db6ac'],
      },
    ],
  };

  const leadsBySourceOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
    },
  };

  
  const opportunitiesByUserData = {
    labels: ['Admin', 'Ferna Partner', 'Padilla', 'Nunez', 'Brewer'],
    datasets: [
      {
        label: 'Partner',
        data: [1, 2, 1, 1, 3],
        backgroundColor: '#42a5f5',
      },
      {
        label: 'Call',
        data: [0, 1, 0, 2, 1],
        backgroundColor: '#66bb6a',
      },
      {
        label: 'Web Site',
        data: [1, 1, 1, 2, 2],
        backgroundColor: '#ffa726',
      },
      {
        label: 'Email',
        data: [2, 1, 1, 1, 3],
        backgroundColor: '#ab47bc',
      },
    ],
  };

  const opportunitiesByUserOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
  };

  
  const opportunitiesData = {
    labels: ['Admin', 'Ferna Partner', 'Padilla', 'Nunez', 'Brewer'],
    datasets: [
      {
        label: 'Opportunities',
        data: [3, 1, 1, 2, 3],
        backgroundColor: '#42a5f5',
      },
    ],
  };

  const opportunitiesOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="crm-page">
      <h2>Customer Relationship Management</h2>
      <div className="crm-grid">
        <div className="crm-card large">
          <h3>Leads by Source</h3>
          <div className="chart-container">
            <Pie data={leadsBySourceData} options={leadsBySourceOptions} />
          </div>
        </div>
        <div className="crm-card large">
          <h3>Opportunities by Lead Source and User</h3>
          <div className="chart-container">
            <Bar data={opportunitiesByUserData} options={opportunitiesByUserOptions} />
          </div>
        </div>


        <div className="crm-card full">
          <h3>Opportunities by User</h3>
          <div className="chart-container">
            <Bar data={opportunitiesData} options={opportunitiesOptions} />
          </div>
        </div>


        <div className="info-card">
          <h3>Locations</h3>
          <p>Busey Home<br />2971 Price Pines Apt. 901</p>
          <p>Downtown<br />87 Eve Mission</p>
          <p>Tarrytown<br />536 Candido Fort</p>
          <p>Westlake<br />877 Roob Wall Apt. 667</p>
        </div>
        <div className="info-card">
          <h3>Contacts</h3>
          <p>Mario Schneider<br />frederik_blick@oswaldo.org<br />338-206-9343</p>
          <p>Gilbert Townsend<br />frederik_blick@oswaldo.org<br />338-206-9343</p>
          <p>Mittie Wheeler<br />orn.russell@wendell.io<br />775-108-0504</p>
          <p>Nicholas Gibson<br />jennie.gerlach@harvey.info<br />974-121-0438</p>
        </div>
        <div className="info-card">
          <h3>Passwords</h3>
          <p>Domain Admin<br />**********</p>
          <p>Domain WiFi<br />**********</p>
        </div>
      </div>
    </div>
  );
};

export default CRMPage;
