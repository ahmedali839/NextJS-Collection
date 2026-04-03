self.onmessage = function () {
  setTimeout(() => {
    self.postMessage("3️⃣ WORKER SCRIPT FINISHED");
  }, 3000);
};
