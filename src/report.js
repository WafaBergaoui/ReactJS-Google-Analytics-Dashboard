import React, { useState, useEffect } from "react";


const Report = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const queryReport = () => {
      window.gapi.client
        .request({
          path: "/v4/reports:batchGet",
          root: "https://analyticsreporting.googleapis.com/",
          method: "POST",

          body: {
            reportRequests: [
              {
                viewId: "218896537", //this is my view ID 
                dateRanges: [
                  {
                    startDate: "2020-04-10",
                    endDate: "2020-07-20"
                  },
                ],
                dimensions: [
                    {
                        name: "ga:date",
                    }
                ],
                metrics: [
                  {
                        expression: "ga:users",
                  },
                ],
              },
            ],
          },
        })
        .then(displayResults, console.error.bind(console));
    };

    const displayResults = (response) => {
      const queryResult = response.result.reports[0].data.rows;
      const result = queryResult.map((row) => {
        const dateSting = row.dimensions[0];
        const formattedDate = `${dateSting.substring(0, 4)}-${dateSting.substring(4, 6)}-${dateSting.substring(6, 8)}`;
        return {
            date: formattedDate,
            visits: row.metrics[0].values[0],
        };
      });
      setData(result);
    };
    queryReport();
  }, []);

  return data.map((row) => (
    <div key={row.date}>
        {`${row.date}: ${row.visits} visiteur(s)`}
    </div>
  ));
};

export default Report;