/*Код ниже - JS -----------------------------------------------------------------------------------------------------------------*/

let elArr = document.querySelectorAll('.element4');
let btnArr = document.querySelectorAll('.btn4');
let descAll = document.querySelectorAll('.b4-el1-desc-container');

for (let j = 0; j < btnArr.length; j++) {
    let elemx = btnArr[j];
    
    function clickButton() {
        let elemx = btnArr[j];
        let elem = elArr[j+1];

        elem.classList.toggle('reveal');
        elemx.classList.toggle('active');
        descAll[j].classList.toggle('desc-active');
    }
    elemx.onclick = clickButton;
}

/* Код ниже - JQuery-------------------------------------------------------------------------------------------------------------*/


$(".btn-next").click(function(){
    $(".card1").animate({"left":"10vw", "opacity":"0"}, 250);
    $(".card1").animate({"left":"76vw"}, 0);
    $(".card1").animate({"left":"70vw", "opacity":"1"}, 250);
    $(".card2").animate({"left":"16vw"}, 500);
    $(".card3").animate({"left":"29.5vw"}, 500);
    $(".card4").animate({"left":"43vw"}, 500);
    $(".card5").animate({"left":"56.5vw"}, 500);
    $(".card1").addClass("peremClass");

    $(".card2").addClass("card1").removeClass("card2");
    $(".card3").addClass("card2").removeClass("card3");
    $(".card4").addClass("card3").removeClass("card4");
    $(".card5").addClass("card4").removeClass("card5");
    $(".peremClass").addClass("card5").removeClass("card1 peremClass");
})  



$(".btn-back").click(function(){
    $(".card5").animate({"left":"76vw", "opacity":"0"}, 250);
    $(".card5").animate({"left":"10vw"}, 0);
    $(".card5").animate({"left":"16vw", "opacity":"1"}, 250);
    $(".card4").animate({"left":"70vw"}, 500);
    $(".card3").animate({"left":"56.5vw"}, 500);
    $(".card2").animate({"left":"43vw"}, 500);
    $(".card1").animate({"left":"29.5vw"}, 500);
    $(".card5").addClass("peremClass");

    $(".card4").addClass("card5").removeClass("card4");
    $(".card3").addClass("card4").removeClass("card3");
    $(".card2").addClass("card3").removeClass("card2");
    $(".card1").addClass("card2").removeClass("card1");
    $(".peremClass").addClass("card1").removeClass("card5 peremClass");
})  