import {useRouter} from 'next/router';
import React, { useCallback } from 'react';

export default function GoBackLink({ children }: { children: React.ReactChild }) {
    const router = useRouter()
    const handleOnClick = useCallback(()=>router.back(),[])
    return <div className="cursor-pointer" onClick={handleOnClick}>{children}</div>;
}
