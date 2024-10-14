
import React from 'react';
import './FinancePage.css';
import { Bar, Pie } from 'react-chartjs-2';
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

const FinancePage = () => {
  
  const invoicedVsPaidData = {
    labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
    datasets: [
      {
        label: 'Invoiced',
        data: [2000, 4000, 6000, 5500, 7000, 8000],
        backgroundColor: '#ffb74d',
      },
      {
        label: 'Paid',
        data: [1500, 3000, 5000, 4500, 6000, 7000],
        backgroundColor: '#42a5f5',
      },
    ],
  };

  const invoicedVsPaidOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'start',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value.toLocaleString(); 
          },
        },
      },
    },
  };

  
  const expenseDistributionData = {
    labels: ['COS - Product', 'Payroll & Wages', 'Other Exp'],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ['#e57373', '#81c784', '#ffb74d'],
      },
    ],
  };

  const expenseDistributionOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
    },
  };

  
  const incomeExpenseData = {
    labels: ['Dec 18', 'Jan 18', 'Feb 19'],
    datasets: [
      {
        label: 'Expense',
        data: [2000, 4000, 6000],
        backgroundColor: '#42a5f5',
      },
      {
        label: 'Income',
        data: [3000, 5000, 7000],
        backgroundColor: '#66bb6a',
      },
    ],
  };

  const incomeExpenseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value.toLocaleString(); 
          },
        },
      },
    },
  };

  
  const bestCustomersData = {
    labels: ['Harris', 'McCormick', 'Tyler', 'James', 'Tran'],
    datasets: [
      {
        data: [67, 23, 12, 15, 10],
        backgroundColor: ['#e57373', '#81c784', '#64b5f6', '#ffb74d', '#9575cd'],
      },
    ],
  };

  const bestCustomersOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
    },
  };

  
  const topExpensesData = {
    labels: ['Furniture bureau', 'Location voiture'],
    datasets: [
      {
        data: [82, 18],
        backgroundColor: ['#f06292', '#4fc3f7'],
      },
    ],
  };

  const topExpensesOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
    },
  };

  return (
    <div className="finance-page">
      <h2>Finance and Accounting</h2>
      <div className="finance-grid">
    
        <div className="data-card profits">
          <h4>10,000 USD</h4>
          <p>PROFITS</p>
          <span>Last month: 29,890,000 USD</span>
        </div>
        <div className="data-card sales">
          <h4>3,088.100 USD</h4>
          <p>SALES</p>
          <span>Last month: 13,900,000 USD</span>
        </div>
        <div className="data-card cash">
          <h4>120,780.000 USD</h4>
          <p>CASH</p>
          <span>Last month: 0 USD</span>
        </div>
        <div className="data-card balance">
          <h4>124,890.000 USD</h4>
          <p>BALANCE</p>
          <span>Last month: 69,000 USD</span>
        </div>

        
        <div className="finance-card full-width">
          <h3>Invoiced vs Paid</h3>
          <div className="chart-container">
            <Bar data={invoicedVsPaidData} options={invoicedVsPaidOptions} />
          </div>
        </div>
        <div className="finance-card half-width">
          <h3>Expense Distribution</h3>
          <div className="chart-container">
            <Pie data={expenseDistributionData} options={expenseDistributionOptions} />
          </div>
        </div>
        <div className="finance-card half-width">
          <h3>Income & Expense</h3>
          <div className="chart-container">
            <Bar data={incomeExpenseData} options={incomeExpenseOptions} />
          </div>
        </div>

        
        <div className="finance-card half-width">
          <h3>Best Customers</h3>
          <div className="chart-container">
            <Pie data={bestCustomersData} options={bestCustomersOptions} />
          </div>
        </div>
        <div className="finance-card half-width">
          <h3>Top Expenses</h3>
          <div className="chart-container">
            <Pie data={topExpensesData} options={topExpensesOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancePage;
