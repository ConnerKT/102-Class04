let colors = ["#F1FFC4","#C6E2E9","#A7BED3","#FFCAAF","#1a1a1a"]

let button = document.getElementById('button');

button.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let body = document.getElementById('body');

    body.style.background = randomColor
})
let buttonclicks = 0
function buttonclick(){
    if (buttonclicks < 2){
        confirm("Are you sure you want to change the background? It may lead to weird side effects.....")
    }else if (buttonclicks === 2){
        confirm("Hey are you sure...?")
    }else if (buttonclicks === 4){
        confirm("Don't your eyes hurt...?")

}
buttonclicks++
}


var username;
 function display(){
    var username = prompt("Your name:", "");
    if (username == "") {
        alert("Name must be inputed!")
        display();
 }else
         alert ("Hello " + username );
   
 }