// 调用摄像头方法，原生Navigator.mediaDevices api
function setwebcam() {
  var options = true;
  if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
    try {
      navigator.mediaDevices.enumerateDevices().then(function (devices) {
        devices.forEach(function (device) {
          if (device.kind === 'videoinput') {
            options = { 'deviceId': { 'exact': device.deviceId }, 'facingMode': 'environment' };
            console.log(device);
          }
          console.log(device.kind + ": " + device.label + " id = " + device.deviceId);
        });
        console.log(options)
        setwebcam2(options);
      });
    }
    catch (e) {
      console.log(e);
    }
  }
  else {
    console.log("无设备信息。");
  }
}


// html 样式自调
<div class="container">
  <div id="scan">
    <video id="vcode" autoplay></video>
    <canvas id="code-canvas"></canvas>
  </div>
</div>
start()
//  function
function start() {
  createCanvas(800, 600);
  setwebcam();
}
// 此处借鉴了导师给的方法，构建canvas
function createCanvas(w, h) {
  n = navigator;
  v = document.getElementById("vcode");
  var gCanvas = document.getElementById("code-canvas");
  gCanvas.style.width = w + "px";
  gCanvas.style.height = h + "px";
  gCanvas.width = w;
  gCanvas.height = h;
  gCtx = gCanvas.getContext("2d");
  gCtx.clearRect(0, 0, w, h);
  console.log("canvas complete！");
}
function setwebcamres(options) {
  var setvideo = n.mediaDevices.getUserMedia({ video: options, audio: false });
  setvideo.then(success, error);

}
