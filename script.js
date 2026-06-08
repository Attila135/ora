var ora = document.getElementById('ora')

function ido() {
    var datum = new Date();
    ora.innerHTML = datum.getHours() + ":" + datum.getMinutes() + ":" + datum.getSeconds();
    setTimeout(ido, 1000);
}
ido();