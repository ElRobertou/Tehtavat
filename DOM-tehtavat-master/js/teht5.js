function kelloFunctio() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  document.getElementById('kello').innerHTML =
      h + ":" + m + ":" + s;
}
setInterval(kelloFunctio, 1000);