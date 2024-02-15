//index 페이지 event 등록
function mouseenterHandler() {
    document.getElementById("api_text").textContent = "Under Construction";
}
function mouseleaveHandler() {
    document.getElementById("api_text").textContent = "My Open-APIs page";
}

function goPage(){
    document.querySelector('.container2').scrollIntoView({behavior:'smooth'});
}
