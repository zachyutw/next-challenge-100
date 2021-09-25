import { useCallback, useEffect } from 'react';
import BrowserNotification from '../../utils/BrowserNotification';
import { Typography, Button } from 'antd';

function useBrowserNotification(): BrowserNotification {
    const browserNotification = new BrowserNotification();
    useEffect(() => {
        browserNotification.requestPermission();
    }, []);

    return browserNotification;
}

export default function NotificationDemo() {
    const browserNotification = useBrowserNotification();

    useEffect(() => {
        if (browserNotification.permission === 'granted') {
            browserNotification.openNotification('Test Notification');
        }
    }, [browserNotification.permission]);

    const handleOnSendNotification = useCallback(()=>{
        if (browserNotification.permission === 'granted') {
            browserNotification.openNotification('Click send more Notification');
        }
    },[browserNotification.permission])
    return (
        <div className='p-5'>
            <Typography.Title> Notification Demo </Typography.Title>
            <Button onClick={handleOnSendNotification}> Send Notification </Button>
        </div>
    );
}
