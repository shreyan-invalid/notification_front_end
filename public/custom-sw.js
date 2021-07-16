self.addEventListener('push', event => {
  const data = event.data
  console.log(event);
  console.log('New notification', data)
  const options = {
    body: data.body,
  }
  event.waitUntil(
    self.registration.showNotification(data, options)
  );
})