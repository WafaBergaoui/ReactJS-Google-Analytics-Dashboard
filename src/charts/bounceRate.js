import React, { useState, useEffect } from "react";
import { queryReport } from "./queryReport";
import { addDays } from "date-fns";

import "chartjs-plugin-datalabels";

const BounceRate = (props) => {

    const [reportData, setReportData] = useState([]);
    const [startDate, setStartDate] = useState(addDays(new Date(), -10));
    const [endDate, setEndDate] = useState(new Date());
    const [percentBounces, setPercentBounces] = useState(0);

    const displayResults = (response) => {
       // const queryResult = response.result.reports[0].data.rows;
        setPercentBounces(parseInt(response.result.reports[0].data.totals[0].values[0]));
      
      };

    useEffect(() => {
        const request = {
            viewID: props.viewID,
            startDate : "2020-04-01",
            endDate : "2020-07-30",
            metrics: props.metric,
            dimensions: [props.dimension],
        };
        setTimeout(
          () =>
            queryReport(request)
              .then((resp) => displayResults(resp))
              .catch((error) => console.error(error)),
          1000
        );
      }, [startDate, endDate]);
    
    return (
        <div>
            <h1>{`${percentBounces}% `}</h1>
        </div>
    )
}

export default BounceRate