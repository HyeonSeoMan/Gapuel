import {PushNotificationIOS} from 'react-native';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  onAction: function (notification) {
    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
});

const _registerLocalNotification = (sec, title) => {
  PushNotification.localNotificationSchedule({
    /* Android Only Properties */
    vibrate: true,
    vibration: 300,
    priority: 'hight',
    visibility: 'public',
    importance: 'hight',

    invokeApp: true,

    /* iOS and Android properties */
    title,
    playSound: false,
    number: 1,
    actions: '["OK"]',
    date: new Date(Date.now() + sec * 1000),
    allowWhileIdle: true,
  });
};

export default {
  register: (sec, title) => _registerLocalNotification(sec, title),
  cancelAll: () => PushNotification.cancelAllLocalNotifications(),
  removeBadge: () => PushNotification.setApplicationIconBadgeNumber(0),
  getAllNoti: () => {
    PushNotification.getScheduledLocalNotifications((callback) => {
      console.log(callback);
    });
  },
};
