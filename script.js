let hr = document.getElementById('hr');
let mn = document.getElementById('mn');
let sc = document.getElementById('sc');

// setinterval
setInterval(() => {
  let d = new Date();

  let hh = d.getHours() * 30;
  let mm = d.getMinutes() * 6;
  let ss = d.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  let hour = document.getElementById('hour');
  let minute = document.getElementById('minute');
  let second = document.getElementById('second');
  let ampm = document.getElementById('ampm');

  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let am = h >= 12 ? "PM" : "AM";
  if (h > 12) {
    h = h - 12;
  }
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  hour.innerHTML = h;
  minute.innerHTML = m;
  second.innerHTML = s;
  ampm.innerHTML = am;
})

