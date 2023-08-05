// 서비스워커 스크립트가 설치되고 활성화되었는지 install. activat 이벤트로 확인
self.addEventListener("install", function (e) {
    console.log("fcm sw install..");
    self.skipWaiting();
});
  
  self.addEventListener("activate", function (e) {
    console.log("fcm sw activate..");
});

// 웹 푸시 알림 노출
self.addEventListener("push", function (e) {
    if (!e.data.json()) return;
  
    const resultData = e.data.json().notification;
    const notificationTitle = resultData.title;
  
    const notificationOptions = {
      body: resultData.body,
    };
  
    console.log(resultData.title, {
      body: resultData.body,
    });
  
    e.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions));
});

// 웹 푸시 알림 클릭 핸들러
self.addEventListener("notificationclick", function (event) {
    const url = "/";
    event.notification.close();
    event.waitUntil(clients.openWindow(url));
});
  