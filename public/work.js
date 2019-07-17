var self = this;
self.addEventListener(
  'message',
  function(event) {
    console.log('2. worker收到消息：', event.data);
    console.log('window对象：', typeof window);
    console.log('document对象：', typeof document);
    console.log('navigator对象：', navigator);
    console.log('3. worker发送消息给主线程');
    self.postMessage('好的, 正在干活');
  },
  false,
);
