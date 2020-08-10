import React, { useState, useEffect } from "react";
import { queryReport } from "../charts/queryReportStatistique";
import {
  ChartTitle,
  ReportWrapper,
  Subtitle,
  DatepickerRow,
  StyledTable,
} from "./styles";

const NumbersHeader = (props) => {
  
  const [reportData, setReportData] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [totalVariables, setTotalVariables] = useState(0);


  const displayResults = (response) => {
    //pour faire la somme 
    const queryResult = response.result.reports[0].data.rows;
    setTotalVariables(queryResult.length);


    /*const total = response.result.reports[0].data.totals[0].values[0];
    const perc = parseFloat((queryResult.metric[0].values[0]/total)*100);
    setPercVariables(perc);*/


   /* const total = response.result.reports[0].data.totals[0].values[0];
    let newReportData = [];
    queryResult.forEach((row, idx) => {
      if (idx < 10) {
        let tempObj = {
          path: row.dimensions[0],
          views: row.metrics[0].values[0],
          perc: `${parseFloat((row.metrics[0].values[0] / total) * 100).toFixed(
            1
          )}%`,
        };
        newReportData.push(tempObj);
      }
    });
    setReportData(newReportData);*/
  };


  useEffect(() => {
    const request = {
        viewID: props.viewID,
        startDate : "30daysAgo",
        endDate : "today",
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
  <h1>{`${totalVariables}`}</h1>

   /* <ReportWrapper>
      <Subtitle>{`${totalVariables}`}</Subtitle>
    {reportData.length && (
      <StyledTable>
          {reportData.map((row, id) => (
            <tr key={id}>
              <td className="left-align">{row.path}</td>
              <td>{row.views}</td>
              <td>{row.perc}</td>
            </tr>
          ))}
      </StyledTable>
    )}
        </ReportWrapper>*/

  );
};


export default NumbersHeader
    




  