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
function rating(){
    var stars = prompt("How many stars would you rate this site? (1-5): ")
    var imgDiv = document.getElementById("stars-container");
    if (stars > 5|| stars < 1|| isNaN(stars)){
        alert("ERROR:Choose from 1-5")}
    
    while (stars > 0){
    let img = document.createElement('img');
    img.src = "https://www.freepnglogos.com/uploads/star-png/star-icon-small-flat-iconset-paomedia-0.png";
    imgDiv.appendChild(img);
    stars--;
    
    }


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