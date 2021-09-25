
import { useEffect } from 'react';
import BrowserNotification from '../../utils/BrowserNotification';

export default function useBrowserNotification(): BrowserNotification {
    const browserNotification = new BrowserNotification();
    useEffect(() => {
        browserNotification.requestPermission();
    }, []);

    return browserNotification;
}