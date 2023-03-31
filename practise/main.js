function timeNew (){
    let timeNow = new Date();

    document.querySelector('.hours').textContent = timeNow.getHours();
    document.querySelector('.minutes').textContent = timeNow.getMinutes();
    document.querySelector('.seconds').textContent = timeNow.getSeconds();
}

timeNew();

setInterval(function (){
    timeNew();
}, 1000);