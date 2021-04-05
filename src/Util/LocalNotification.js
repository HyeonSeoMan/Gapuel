import {PushNotificationIOS} from 'react-native';
import PushNotification from 'react-native-push-notification';

const _registerLocalNotification = (date, title) => {
  PushNotification.configure({
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
      PushNotification.setApplicationIconBadgeNumber(0);
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    onAction: function (notification) {
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);
    },
    onRegistrationError: function (err) {
      console.error(err.message, err);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  });
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
    date: date,
    allowWhileIdle: true,
  });
};

export default {
  register: (date, title) => _registerLocalNotification(date, title),
  cancelAll: () => PushNotification.cancelAllLocalNotifications(),
  removeBadge: () => PushNotification.setApplicationIconBadgeNumber(0),
  getAllNoti: () => {
    PushNotification.getScheduledLocalNotifications((callback) => {
      console.log(callback);
    });
  },
};
