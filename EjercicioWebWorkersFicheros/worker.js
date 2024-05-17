self.onmessage = function(event) {
    if (event.data === 'start') {
      setInterval(() => {
        self.postMessage('update');
      }, 10000);
    }
  };
  