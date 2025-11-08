import React from 'react';
import { History as HistoryInterface } from './interface';
import { Ps1 } from '../Ps1';

export const History: React.FC<{ history: Array<HistoryInterface> }> = ({
  history,
}) => {
  return (
    <>
      {history.map((entry: HistoryInterface, index: number) => (
        <div key={entry.command + index}>
          <div className="flex flex-row space-x-1 sm:space-x-2">
            <div className="flex-shrink">
              <Ps1 />
            </div>

            <div className="flex-grow min-w-0">{entry.command}</div>
          </div>

          <p
            className="whitespace-pre-wrap mb-2 text-xs sm:text-sm md:text-base"
            style={{ lineHeight: 'normal' }}
            dangerouslySetInnerHTML={{ __html: entry.output }}
          />
        </div>
      ))}
    </>
  );
};

export default History;
