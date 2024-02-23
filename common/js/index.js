//index 페이지 event 등록
function mouseenterHandler() {
    document.getElementById("api_text").textContent = "Under Construction";
}
function mouseleaveHandler() {
    document.getElementById("api_text").textContent = "My Open-APIs page";
}

function goPage(){
    document.querySelector('#imgHoverEvent').scrollIntoView({behavior:'smooth'});
    
}

var arrow_page = document.querySelector('.arrow-down');
var event_box = document.querySelector('.event1');

arrow_page.addEventListener('click', function() {
    if(event_box.classList.contains('active')) {
        event_box.classList.remove('active');
    }
    else{
        event_box.classList.toggle('active');
    }
});

//index portfolio 등록
document.addEventListener('DOMContentLoaded', function() {
    var arrow_page = document.getElementById('arrow-page');
    var hoverBox = document.getElementById('imgHoverEvent');

    arrow_page.addEventListener('click', function() {
        hoverBox.classList.toggle('show');
    });

    // 클릭 이외의 영역을 클릭하면 드롭다운이 닫히도록 설정
    window.addEventListener('click', function(event) {
    if (!event.target.matches('#arrow-page')) {
            if (hoverBox.classList.contains('show')) {
                hoverBox.classList.remove('show');
            }
        }
    });
}); 
