const StatCard = ({ icon: Icon, title, value, change }) => (
    <div className="stat-card">
      <div className="stat-card-content">
        <div className="stat-info">
          <p className="stat-title">{title}</p>
          <p className="stat-value">{value}</p>
          {change !== undefined && (
            <div className="stat-change">
              <span className={change > 0 ? 'change-positive' : 'change-negative'}>
                {change > 0 ? '↑' : '↓'} {Math.abs(change)}%
              </span>
              <span className="change-label">vs last period</span>
            </div>
          )}
        </div>
        <div className="stat-icon">
          <Icon />
        </div>
      </div>
    </div>
  );
export default StatCard;