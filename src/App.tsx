import React from 'react';
import './app.scss';
import { DataProvider, LineChart, Series } from "@cognite/griff-react";

export default function App() {
  return (<div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '80%'
      }}
  >
      <DataProvider
          collections={[]}
          defaultLoader={function noRefCheck(){}}
          drawLines={undefined}
          drawPoints={undefined}
          isTimeSubDomainSticky={false}
          limitTimeSubDomain={function noRefCheck(){}}
          onFetchData={function noRefCheck(){}}
          onFetchDataError={function noRefCheck(){}}
          onTimeSubDomainChanged={undefined}
          onUpdateDomains={undefined}
          opacity={1}
          opacityAccessor={undefined}
          pointWidth={undefined}
          pointWidthAccessor={undefined}
          pointsPerSeries={250}
          series={[]}
          strokeWidth={undefined}
          timeAccessor={function noRefCheck(){}}
          timeDomain={[
              1599306686846,
              1601898686846
          ]}
          timeSubDomain={undefined}
          updateInterval={0}
          x0Accessor={undefined}
          x1Accessor={undefined}
          xAccessor={function noRefCheck(){}}
          xDomain={undefined}
          xSubDomain={undefined}
          y0Accessor={undefined}
          y1Accessor={undefined}
          yAccessor={function noRefCheck(){}}
          yAxisWidth={50}
          yDomain={undefined}
          ySubDomain={undefined}
      >
          <Series
              color="steelblue"
              id="1"
          />
          <Series
              color="maroon"
              id="2"
          />
          <LineChart height={500} />
      </DataProvider>
  </div>);
}
