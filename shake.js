var t1 = new Date().getTime();

function play(fileName){
  var audio = new Audio('/assets/' + fileName + '.mp3');
  audio.play();
}

function ping() {
  var t2 = new Date().getTime();
  var value = t2 - t1

  if (value > 400) { window.document.body.style.backgroundColor = 'white'; }
  if (value > 150 && value < 400)  { window.document.body.style.backgroundColor = 'yellow'; }
  if (value < 150) { window.document.body.style.backgroundColor = 'red'; }

  t1 = t2;
};

if (typeof window.DeviceMotionEvent != 'undefined') {
    var sensitivity = 30;
    var x1 = 0, y1 = 0, z1 = 0, x2 = 0, y2 = 0, z2 = 0;

    window.addEventListener('devicemotion', function (e) {
        x1 = e.accelerationIncludingGravity.x;
        y1 = e.accelerationIncludingGravity.y;
        z1 = e.accelerationIncludingGravity.z;
    }, false);

    setInterval(function () {
      var change = Math.abs(x1-x2+y1-y2+z1-z2);

      if (change > sensitivity) {
        ping();
      }

      x2 = x1;
      y2 = y1;
      z2 = z1;
    }, 40);

    setInterval(function () {
      window.document.body.style.backgroundColor = 'white';
    }, 1000);

};