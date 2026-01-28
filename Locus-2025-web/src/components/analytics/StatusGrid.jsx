import StatCard from "./StatCard";
import {
  TrendingUp,
  Users,
  Eye,
  Clock,
  MousePointer,
  Activity,
  Globe,
  Target
} from "lucide-react";

const safeNumber = (value) =>
  typeof value === "number" ? value.toLocaleString() : "0";

const safePercent = (value) =>
  typeof value === "number" ? `${value}%` : "0%";

const StatusGrid = ({ analyticsData }) => {
  // Skeleton state
  if (!analyticsData || !analyticsData.overview) {
    return (
      <div className="stats-grid">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="stat-card skeleton-box" />
        ))}
      </div>
    );
  }

  const o = analyticsData.overview;

  return (
    <div className="stats-grid">
      <StatCard
        icon={Users}
        title="Total Users"
        value={safeNumber(o.totalUsers)}
      />

      <StatCard
        icon={Eye}
        title="Page Views"
        value={safeNumber(o.pageViews)}   /* FIXED */
      />

      <StatCard
        icon={Clock}
        title="Avg. Session Duration"
        value={o.avgSessionDuration ?? "0"}
      />

      <StatCard
        icon={MousePointer}
        title="Total Sessions"
        value={safeNumber(o.sessions)}
      />

      <StatCard
        icon={TrendingUp}
        title="Bounce Rate"
        value={safePercent(o.bounceRate)}
      />

      <StatCard
        icon={Activity}
        title="New Users"
        value={safeNumber(o.newUsers)}
      />

      <StatCard
        icon={Target}
        title="Engaged Session"
        value={safeNumber(o.engagedSessions)}
      />

      <StatCard
        icon={Globe}
        title="Engagement Rate"
        value={safePercent(o.engagementRate)}
      />
    </div>
  );
};

export default StatusGrid;
