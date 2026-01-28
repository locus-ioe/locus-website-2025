import React, { useEffect, useRef, useState } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import './analytics.css';
import StatusGrid from './StatusGrid';
import Login from './Login';

const Analytics = () => {
  const [days, setDays] = useState(7); // Changed to numeric value
  const [loading, setLoading] = useState(false);
  const [analyticsData, setAnalyticsData] = useState(null);
  const [error, setError] = useState(null);
  const [auth, setAuth] = useState(null);
  const [loginError, setLoginError] = useState('');

  //  chart references
  const lineChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);
  const lineChartInstance = useRef(null);
  const pieChartInstance = useRef(null);
  const barChartInstance = useRef(null);
  
  const backendUrl = import.meta.env.VITE_BACKEND_URL;


  const handleLoginAttempt = (username, password) => {
    setAuth({ username, password });
    setLoginError('');
  };
  
  useEffect(() => {
    if (!auth) return;

    const fetchAnalytics = async () => {
      const credentials = btoa(`${auth.username}:${auth.password}`);
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${backendUrl}/analytics?days=${days}`, {
          method: 'GET',
          headers: {
            'Authorization': `Basic ${credentials}`,
            'Accept': 'application/json'
          },
        });

        if (response.status === 401) {
          setAuth(null);
          setLoginError("Invalid Credentials. Please try again.");
          setLoading(false);
          return;
        }

        if (!response.ok) throw new Error(`Server Error: ${response.status}`);

        const result = await response.json();
        console.log(result)
        if (result.status === "success") {
          setAnalyticsData(result.data);
        } else {
          setAuth(null);
          setLoginError(result.message || "Authentication failed.");
        }
      } catch (err) {
        console.error('Fetch Error:', err);
        setError("Failed to connect to the server. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, [days, auth, backendUrl]); 


  useEffect(() => {
    if (!analyticsData) return;

    const destroyCharts = () => {
      if (lineChartInstance.current) lineChartInstance.current.destroy();
      if (pieChartInstance.current) pieChartInstance.current.destroy();
      if (barChartInstance.current) barChartInstance.current.destroy();
    };

    destroyCharts();

    const chartDefaults = {
      color: '#fafafa',
      grid: { color: 'rgba(255, 255, 255, 0.1)' }
    };

    // Line Chart
    if (lineChartRef.current) {
      lineChartInstance.current = new ChartJS(lineChartRef.current, {
        type: 'line',
        data: {
          labels: analyticsData.trafficOverTime.labels,
          datasets: [
            {
              label: 'Users',
              data: analyticsData.trafficOverTime.activeUsers,
              borderColor: '#00abe6',
              backgroundColor: 'rgba(0, 171, 230, 0.1)',
              tension: 0.4,
              fill: true
            },
            {
              label: 'Page Views',
              data: analyticsData.trafficOverTime.pageViews,
              borderColor: '#7c3aed',
              backgroundColor: 'rgba(124, 58, 237, 0.1)',
              tension: 0.4,
              fill: true
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                color: '#fafafa',
                usePointStyle: true,
                padding: 15
              }
            }
          },
          scales: {
            y: { 
              beginAtZero: true,
              ticks: { color: '#a1a1aa' }, 
              grid: chartDefaults.grid 
            },
            x: { 
              ticks: { color: '#a1a1aa' }, 
              grid: { display: false } 
            }
          }
        }
      });
    }

    // Pie Chart
    if (pieChartRef.current) {
      pieChartInstance.current = new ChartJS(pieChartRef.current, {
        type: 'doughnut',
        data: {
          labels: analyticsData.deviceCategory.labels,
          datasets: [{
            data: analyticsData.deviceCategory.data,
            backgroundColor: analyticsData.deviceCategory.colors,
            borderWidth: 3,
            borderColor: '#18181b'
          }]
        },
        options: { 
          responsive: true, 
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: '#fafafa',
                padding: 15,
                usePointStyle: true
              }
            }
          }
        }
      });
    }

    // Bar Chart
    if (barChartRef.current) {
      barChartInstance.current = new ChartJS(barChartRef.current, {
        type: 'bar',
        data: {
          labels: analyticsData.trafficSources.labels,
          datasets: [
            {
              label: 'Users',
              data: analyticsData.trafficSources.users,
              backgroundColor: '#00abe6',
              borderRadius: 4
            },
          ]
        },
        options: { 
          responsive: true, 
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                color: '#fafafa',
                usePointStyle: true,
                padding: 15
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { color: '#a1a1aa' },
              grid: chartDefaults.grid
            },
            x: {
              ticks: { color: '#a1a1aa' },
              grid: { display: false }
            }
          }
        }
      });
    }

    return () => destroyCharts();
  }, [analyticsData]);


  // login 
  if (!auth) {
    return <Login onLogin={handleLoginAttempt} loginError={loginError} />;
  }
  
  //delay handle
  if (loading || !analyticsData) {
    return (
      <div className="analytics-container">
        <div className="analytics-wrapper">
          <div className="skeleton skeleton-header"></div>
          <div className="stats-grid">
            {[1, 2, 3, 4].map(i => <div key={i} className="skeleton skeleton-card"></div>)}
          </div>
          <div className="skeleton skeleton-chart" style={{ height: '350px' }}></div>
          <div className="charts-grid">
            <div className="skeleton skeleton-chart" style={{ height: '300px' }}></div>
            <div className="skeleton skeleton-chart" style={{ height: '300px' }}></div>
          </div>
        </div>
      </div>
    );
  }

  // Error 
  if (error) {
    return (
      <div className="analytics-error">
        <div className="error-content">
          <h3>Connection Error</h3>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry Connection</button>
        </div>
      </div>
    );
  }

  // Dashboard Render
  return (
    <div className="analytics-container">
      <div className="analytics-wrapper">
        <div className="analytics-header">
          <h1>Analytics <span className="highlight">Dashboard</span></h1>
        </div>
        
        <div className="date-range-filter">
          {[
            { value: 7, label: 'Last 7 Days' },
            { value: 30, label: 'Last 30 Days' },
            { value: 90, label: 'Last 90 Days' }
          ].map((range) => (
            <button
              key={range.value}
              onClick={() => setDays(range.value)}
              className={`date-button ${days === range.value ? 'active' : ''}`}
            >
              {range.label}
            </button>
          ))}
        </div>

        <StatusGrid analyticsData={analyticsData} />

        <div className="chart-card">
          <h2>Traffic Over Time</h2>
          <div className="chart-container"><canvas ref={lineChartRef}></canvas></div>
        </div>

        <div className="charts-grid">
          <div className="chart-card">
            <h2>Device Breakdown</h2>
            <div className="chart-container"><canvas ref={pieChartRef}></canvas></div>
          </div>
          <div className="chart-card">
            <h2>Traffic Sources</h2>
            <div className="chart-container"><canvas ref={barChartRef}></canvas></div>
          </div>
        </div>

        <div className="table-card">
          <div className="table-header"><h2>Top Performing Pages</h2></div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Page Path</th>
                  <th>Total Views</th>
                  <th>Avg. Time</th>
                  <th>Bounce Rate</th>
                </tr>
              </thead>
              <tbody>
                {analyticsData?.topPages?.map((page, idx) => (
                  <tr key={idx}>
                    <td className="page-path">{page.page}</td>
                    <td className="page-views">{page.views.toLocaleString()}</td>
                    <td className="page-time">{page.avgTime}</td>
                    <td className="page-bounce">{page.bounceRate}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Analytics;