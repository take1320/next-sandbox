import React, { FC } from 'react';

const pad = (n: any) => (n < 10 ? `0${n}` : n);

const format = (t: any) => {
  const hours = t.getUTCHours();
  const minutes = t.getUTCMinutes();
  const seconds = t.getUTCSeconds();
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

export interface ClockProps {
  lastUpdate?: number;
  light?: boolean;
}

const Clock: FC<ClockProps> = ({ lastUpdate = 0, light = false }) => (
  <div className={light ? 'light' : ''}>
    {format(new Date(lastUpdate))}
    <style jsx>{`
      div {
        padding: 15px;
        display: inline-block;
        color: #82fa58;
        font: 50px menlo, monaco, monospace;
        background-color: #000;
      }
      .light {
        background-color: #999;
      }
    `}</style>
  </div>
);

export default Clock;
