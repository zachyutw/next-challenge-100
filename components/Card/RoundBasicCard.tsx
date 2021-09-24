import React, { useCallback } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { RecordItemHandlerProps } from '../../models/RecordItem';
import { LinkProp } from '../../models/Link';
export default function RoundBasicCard({
    title,
    description,
    linkProp,
    className,
    record,
    index,
    onClick,
    showNumber,
    ...rest
}: {  showNumber?:boolean; className?: string; title: string | React.ReactElement; description: string | React.ReactElement; linkProp?: LinkProp } & RecordItemHandlerProps) {
    const handleOnClick = useCallback(() => {
        if (onClick) {
            onClick(record, index);
        }
    }, [onClick, record, index]);

    return (
        <div onClick={handleOnClick} className={clsx('max-w-md py-4 px-8 bg-white shadow-lg rounded-lg', className)} {...rest}>
            {/* <div className='flex justify-center md:justify-end -mt-16'>
                <Image alt="header" className='w-20 h-20 object-cover rounded-full border-2 border-indigo-500' src='https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' />
            </div> */}
            { showNumber && index && index > -1 && <span>{index}</span> }
            <div>
                <h2 className='text-gray-800 text-3xl font-semibold'>{title}</h2>
                <p className='mt-2 text-gray-600'>{description}</p>
            </div>
            <div className='flex justify-end mt-4'>
                {  linkProp?.defaultHref? <a href={linkProp.defaultHref} className='text-xl font-medium text-indigo-500'>
                            {linkProp.text}
                        </a> : linkProp && (
                    <Link href={linkProp.href}>
                        <a href='#' className='text-xl font-medium text-indigo-500'>
                            {linkProp.text}
                        </a>
                    </Link>
                )}
            </div>
        </div>
    );
}
