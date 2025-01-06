import { useEffect, useState } from "react";

const VisitCounterFromGA = ({ pagePath }) => {
  const [visitCount, setVisitCount] = useState(null);

  useEffect(() => {
    const fetchPageViews = async () => {
      try {
        const response = await fetch("https://analyticsdata.googleapis.com/v1beta/properties/471434599:runReport", {
          method: "POST",
          headers: {
            Authorization: `Bearer YOUR_ACCESS_TOKEN`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dimensions: [{ name: "pagePath" }],
            metrics: [{ name: "screenPageViews" }],
            dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
            dimensionFilter: {
              filter: {
                fieldName: "pagePath",
                stringFilter: { value: pagePath },
              },
            },
          }),
        });

        const data = await response.json();
        const pageData = data.rows?.[0]?.metricValues?.[0]?.value || 0;
        setVisitCount(pageData);
      } catch (error) {
        console.error("Error fetching pageviews:", error);
      }
    };

    fetchPageViews();
  }, [pagePath]);

  return <p>{visitCount !== null ? `Visits: ${visitCount}` : "Loading..."}</p>;
};

export default VisitCounterFromGA;
