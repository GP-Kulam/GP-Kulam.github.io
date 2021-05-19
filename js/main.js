var countEle = document.getElementById("count");
updateVisitCount(); 
function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/gpkulam.me/ganga/?amount=1')
    .then(res => res.json())
    .then(res => {
        document.getElementById("count").innerHTML = res.value;
        console.log(res.value);
    });
}