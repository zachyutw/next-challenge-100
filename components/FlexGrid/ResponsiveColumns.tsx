import React, { useMemo } from 'react';
import useWindowSize from '../Browser/useWindowSize';
import chunk from 'lodash.chunk';
import clsx from 'clsx';
import RoundBasicCard from '../Card/RoundBasicCard';

export default function ResponsiveColumns({ wrapperWidth, records, recordItemWidth = 300, RecordItem }: { wrapperWidth?:number, records: any[]; recordItemWidth?: number | string; RecordItem?: new () => React.Component<any, any> }) {
    const windowSize = useWindowSize();
    const columns = useMemo(() => {
        try {
            let divisor: number;
            const dividend:number = wrapperWidth? wrapperWidth: windowSize.width
            if (typeof recordItemWidth === 'string') {
                divisor = +recordItemWidth.replace('px', '');
            } else {
                divisor = recordItemWidth;
            }

            return chunk(records, (records.length / ( dividend / divisor) +1 ));
        } catch (error) {
            console.error(error);
            return [];
        }
    }, [records, wrapperWidth, recordItemWidth, windowSize.width]);
    return (
        <div className='flex flex-wrap p-4 mx-auto lg:mt-20'>
            {columns.map((records, index) => (
                <div key={index} className={clsx('w-auto', index)} style={{ width: `${100 / columns.length}%` }}>
                    {records.map((record, recordIndex) =>
                        RecordItem ? (
                            <div key={recordIndex} className={clsx('w-auto p-2')}>
                                <RecordItem  {...record} />
                            </div>
                        ) : (
                            <div key={recordIndex} className={clsx('w-auto p-2')}>
                                <RoundBasicCard  {...record} />
                            </div>
                        )
                    )}
                </div>
            ))}
        </div>
    );
}
