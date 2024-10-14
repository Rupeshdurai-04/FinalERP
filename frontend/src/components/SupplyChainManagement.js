import React from 'react';
import './SupplyChainManagement.css'; 
import person1 from '../assets/emp1.jpg';
import person2 from '../assets/emp2.jpg';
import person3 from '../assets/emp3.jpg';
import person4 from '../assets/emp4.jpg';
import person5 from '../assets/emp5.jpg';
import person6 from '../assets/emp6.jpg';
import person7 from '../assets/emp7.jpg';
import person8 from '../assets/emp8.jpg';
import person9 from '../assets/emp9.jpg';

const SupplyChainManagement = () => {
  return (
    <div className="supply-chain-management">
      <div className="scm-dashboard-cards">
        <div className="scm-dashboard-card">
          <div className="scm-card-header">
            <h3>Supplied</h3>
            <div className="scm-chart"></div> 
          </div>
          <div className="scm-card-metrics">
            <div className="metric">
              <span>24 hrs</span>
              <div>
              <span className="value">28</span>
              </div>
            </div>
            <div className="metric">
              <span>40 hrs</span>
              <div>
              <span className="value">122</span>
              </div>
            </div>
            <div className="metric">
              <span>Total</span>
              <div>
              <span className="value">150</span>
              </div>
            </div>
          </div>
        </div>

        <div className="scm-dashboard-card">
          <div className="scm-card-header">
            <h3>Delivered</h3>
            <div className="scm-chart"></div> 
          </div>
          <div className="scm-card-metrics">
            <div className="metric">
              <span>24 hrs</span>
              <div>
              <span className="value">15</span>
              </div>
            </div>
            <div className="metric">
              <span>40 hrs</span>
              <div>
              <span className="value">75</span>
              </div>
            </div>
            <div className="metric">
              <span>Total</span>
              <div>
              <span className="value">90</span>
              </div>
            </div>
          </div>
        </div>

        <div className="scm-dashboard-card">
          <div className="scm-card-header">
            <h3>Inventory</h3>
            <div className="scm-chart"></div> 
          </div>
          <div className="scm-card-metrics">
            <div className="metric">
              <span>24 hrs</span>
              <div>
              <span className="value">10</span>
              </div>
            </div>
            <div className="metric">
              <span>40 hrs</span>
              <div>
              <span className="value">40</span>
              </div>
            </div>
            <div className="metric">
              <span>Total</span>
              <div>
              <span className="value">50</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scm-table-section">
        <table className="scm-table">
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Phone</th>
              <th>Ordered Date</th>
              <th>Shipment Started</th>
              <th>Delivered Date</th>
              <th>Ratings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={person1} alt="Cecelia McGee" className="scm-table-avatar" />
                Cecelia McGee
              </td>
              <td>167-686-1691</td>
              <td>18 Aug 2019</td>
              <td>22 Aug 2019</td>
              <td>06 Dec 2019</td>
              <td>⭐⭐⭐</td>
            </tr>
            <tr>
              <td>
                <img src={person2} alt="Olivia Bryan" className="scm-table-avatar" />
                Olivia Bryan
              </td>
              <td>591-750-7906</td>
              <td>06 Aug 2019</td>
              <td>23 Aug 2019</td>
              <td>19 Nov 2019</td>
              <td>⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td>
                <img src={person3} alt="John Doe" className="scm-table-avatar" />
                John Doe
              </td>
              <td>458-556-2251</td>
              <td>12 Jul 2019</td>
              <td>19 Jul 2019</td>
              <td>29 Oct 2019</td>
              <td>⭐⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td>
                <img src={person4} alt="Mary Smith" className="scm-table-avatar" />
                Mary Smith
              </td>
              <td>323-556-1299</td>
              <td>15 Sep 2019</td>
              <td>20 Sep 2019</td>
              <td>10 Dec 2019</td>
              <td>⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td>
                <img src={person5} alt="James Johnson" className="scm-table-avatar" />
                James Johnson
              </td>
              <td>301-798-2456</td>
              <td>01 Oct 2019</td>
              <td>05 Oct 2019</td>
              <td>18 Dec 2019</td>
              <td>⭐⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td>
                <img src={person6} alt="Emily Davis" className="scm-table-avatar" />
                Emily Davis
              </td>
              <td>612-334-7722</td>
              <td>20 Oct 2019</td>
              <td>23 Oct 2019</td>
              <td>05 Jan 2020</td>
              <td>⭐⭐⭐</td>
            </tr>
            <tr>
              <td>
                <img src={person7} alt="Michael Brown" className="scm-table-avatar" />
                Michael Brown
              </td>
              <td>467-992-1235</td>
              <td>11 Nov 2019</td>
              <td>15 Nov 2019</td>
              <td>22 Feb 2020</td>
              <td>⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td>
                <img src={person8} alt="Jennifer Wilson" className="scm-table-avatar" />
                Jennifer Wilson
              </td>
              <td>778-342-9898</td>
              <td>28 Nov 2019</td>
              <td>01 Dec 2019</td>
              <td>15 Mar 2020</td>
              <td>⭐⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td>
                <img src={person9} alt="Robert Martinez" className="scm-table-avatar" />
                Robert Martinez
              </td>
              <td>880-556-4432</td>
              <td>05 Dec 2019</td>
              <td>10 Dec 2019</td>
              <td>25 Mar 2020</td>
              <td>⭐⭐⭐</td>
            </tr>
            <tr>
              <td>
                <img src={person1} alt="Cecelia McGee" className="scm-table-avatar" />
                Cecelia McGee
              </td>
              <td>167-686-1691</td>
              <td>18 Aug 2019</td>
              <td>22 Aug 2019</td>
              <td>06 Dec 2019</td>
              <td>⭐⭐⭐</td>
            </tr>
            <tr>
              <td>
                <img src={person2} alt="Olivia Bryan" className="scm-table-avatar" />
                Olivia Bryan
              </td>
              <td>591-750-7906</td>
              <td>06 Aug 2019</td>
              <td>23 Aug 2019</td>
              <td>19 Nov 2019</td>
              <td>⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td>
                <img src={person3} alt="John Doe" className="scm-table-avatar" />
                John Doe
              </td>
              <td>458-556-2251</td>
              <td>12 Jul 2019</td>
              <td>19 Jul 2019</td>
              <td>29 Oct 2019</td>
              <td>⭐⭐⭐⭐⭐</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplyChainManagement;
