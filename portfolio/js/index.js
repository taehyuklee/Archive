//event 등록
document.addEventListener('DOMContentLoaded', function() {
    var dropdownButton = document.getElementById('dropdownButton');
    var dropdownContent = document.getElementById('dropdownContent');

    dropdownButton.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    // 클릭 이외의 영역을 클릭하면 드롭다운이 닫히도록 설정
    window.addEventListener('click', function(event) {
    if (!event.target.matches('#dropdownButton')) {
            if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
            }
        }
    });
}); 

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
