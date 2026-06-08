var ora = documemt.getElementById("ora")

function ido(params) {
    var datum = new Date();
    ora.innerHTML = datum.getHours() + ":" + datum.getMinutes() + ":" + datum.getSeconds();
    setTimeout(ido, 1000);
}
ido();