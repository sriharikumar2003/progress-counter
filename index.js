$(document).ready(function(){
    let first = document.getElementsByClassName("first")[0];
    let second = document.getElementsByClassName("second")[0];
    let third = document.getElementsByClassName("third")[0];
    let fourth = document.getElementsByClassName("fourth")[0];
    let fifth = document.getElementsByClassName("fifth")[0];

    let arr = [first,second,third,fourth,fifth];
    let ind = 0;
    arr[ind].classList.add("active");
    $(".next").click(function(){
        ind = ind +1;
        console.log(ind);
        arr[ind].classList.add("active");
    });
    $(".prev").click(function(){
        arr[ind].classList.remove("active");
        ind = ind - 1;
        console.log(ind);
        if(ind ===0){
            alert("not available");
        }
    });
});