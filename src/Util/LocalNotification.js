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

const _registerLocalNotification = () => {
  const messages = [
    '잠깐 시간내서 일본어 공부를 해보는건 어떨까요?',
    '오늘 일본어 공부하셨나요?',
    '일본어 단어를 공부해 보세요.',
    '단어 공부는 매일매일 하는 것이 중요해요.',
    '새로운 단어와 암기한 공부를 복습해 보세요.',
    '일본어를 공부할 시간이에요.',
    '테스트 기능을 사용해서 자신의 실력을 확인해 보세요.',
    '일본어 단어들이 당신을 기다리고 있어요.',
    '일본어, 어렵지 않아요. 공부해 봅시다.',
    '일본어 마스터가 되기위해!',
  ];
  const message = messages[Math.floor(Math.random() * messages.length)];

  PushNotification.localNotificationSchedule({
    /* Android Only Properties */
    vibrate: true,
    vibration: 300,
    priority: 'hight',
    visibility: 'public',
    importance: 'hight',

    invokeApp: true,

    /* iOS and Android properties */
    message,
    playSound: false,
    number: 1,
    actions: '["OK"]',
    date: new Date(Date.now() + 7 * 1000),
    allowWhileIdle: true,
  });
};

export default {
  register: () => _registerLocalNotification(),
  cancelAll: () => PushNotification.cancelAllLocalNotifications(),
  removeBadge: () => PushNotification.setApplicationIconBadgeNumber(0),
  getAllNoti: () => {
    PushNotification.getScheduledLocalNotifications((callback) => {
      console.log(callback);
    });
  },
};
