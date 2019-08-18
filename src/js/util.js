export function id($) {
  return document.getElementById($);
}

export function rgbToHex(int) {
  var i = Math.abs(~~int);

  if (255 < i) {
    return 'ff';
  }

  var hex = i.toString(16);

  return 2 > hex.length ? ('0' + hex) : hex;
}

export function bindInputs(x, y) {
  x.addEventListener('input', function () {
    y.value = x.value || '0';
  });

  y.addEventListener('input', function () {
    x.value = y.value || '0';
  });
}

export function debounce(fn, ms) {
  var timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, ms);
  }
};

export function sendBeacon(url) {
	var isSend = false;

	try {
		isSend = navigator.sendBeacon(url);
	} catch (error) {}

	if (!isSend) {
		(new Image()).src = url;
	}
}