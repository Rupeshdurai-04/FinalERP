import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './WorkforceManagement.css';

const WorkforceManagement = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Average Team KPI',
        data: [65, 70, 60, 65, 72, 75, 80],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: '#007bff',
        pointBackgroundColor: '#007bff',
        pointBorderColor: '#fff',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="workforce-page">
  
      <div className="kpi-section-container">
        <div className="kpi-card">
          <p className="kpi-title">Total Employees</p>
          <h3 className="kpi-value">432</h3>
          <span className="kpi-change up">↑ 3.5% Than last month</span>
        </div>
        <div className="kpi-card">
          <p className="kpi-title">Total Payrolls</p>
          <h3 className="kpi-value">24</h3>
          <span className="kpi-change up">↑ 5% Than last month</span>
        </div>
        <div className="kpi-card">
          <p className="kpi-title">Turnover Rate</p>
          <h3 className="kpi-value">8%</h3>
          <span className="kpi-change down">↓ 1% Than last month</span>
        </div>
        <div className="kpi-card">
          <p className="kpi-title">Job Applicants</p>
          <h3 className="kpi-value">24</h3>
          <span className="kpi-change up">↑ 6% Than last month</span>
        </div>
      </div>

      <div className="schedule-section">
        <h3>Schedule</h3>
        <div className="schedule-container">
          <div className="schedule-item">
            <div className="schedule-icon">
              📅
            </div>
            <div className="schedule-details">
              <p className="schedule-event-title">Interview Candidate - UI/UX Designer</p>
              <p className="schedule-event-time">Google Meet | 13:00 - 13:30</p>
            </div>
          </div>
          <div className="schedule-item">
            <div className="schedule-icon">
              📅
            </div>
            <div className="schedule-details">
              <p className="schedule-event-title">Retro Day - HR Department</p>
              <p className="schedule-event-time">Meeting Room Floor 2 | 15:00 - 16:00</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="kpi-section">
        <h3>Average Team </h3>
        <div className="chart-container">
          <Line data={data} options={options} />
        </div>
      </div>

      <div className="employment-status-section">
        <h3>Employment Status</h3>
        <div className="status-bar">
          <div className="status-permanent">Permanent: 49%</div>
          <div className="status-contract">Contract: 31%</div>
          <div className="status-probation">Probation: 20%</div>
        </div>
      </div>


      <div className="leave-summary">
        <h3>Leave Summary</h3>
        <div className="leave-item">
          <span>Annual Leave: 12 Days</span>
          <button>Request Leave</button>
        </div>
        <div className="leave-item">
          <span>Sick Leave: 5 Days</span>
          <button>Request Leave</button>
        </div>
      </div>
    </div>
  );
};

export default WorkforceManagement;
