export default class BrowserNotification {
    permission: NotificationPermission;
    constructor() {
        this.permission = 'denied';
    }

    check = () => {
        if (!('Notification' in window)) {
            alert('This browser does not support desktop notification');
        }
    };
    requestPermission = () =>
        Notification.requestPermission().then((permission) => {
            this.permission = permission;
            return permission;
        });
    openNotification = (title: string, options?: NotificationOptions) => {
        if (this.permission === 'granted') {
            const notification = new Notification(title, options);
            return notification;
        }
    };
}
