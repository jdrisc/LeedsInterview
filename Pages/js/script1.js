const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


let try1;
let try2;
let try3;

let parity1 = 0;
let parity2 = 0;
let parity3= 0;

const correctAns1 = document.getElementById('ans1');


/* checks if the answer is correct and gives feedback */
function checkAns1(){
    const feedback1 = document.getElementById('feedback1');
    const para1 = document.createElement("p");
    if(try1 == 1){
        console.log('correct ans');    
        const node1 = document.createTextNode("That's correct! Organisations often bring application deadlines forward for this reason. The other options aren't common practice.");
        para1.appendChild(node1);
        feedback1.appendChild(para1);
        feedback1.style["background-color"] = "#CAEEC2";
    }else{
        console.log('incorrect');
        const node1 = document.createTextNode("That's not quite right. The only common reason for an application deadline to move is when an organisation thinks they have enough hihg-quality applications.");
        para1.appendChild(node1);
        feedback1.appendChild(para1);
        feedback1.style["background-color"] = "#FFCCCB"
    }
}

/* updates the try according to their last click */
const ans1 = document.getElementById("ans1");
ans1.addEventListener("click",function(){
    try1 = 1;
    parity1++;
    if(parity1 % 2 == 0){
        ans1.style["background-color"] = "#CAEEC2";
    }else{
        ans1.style["background-color"] = "#FFFFFF";
    }
}, false);

const ans2 = document.getElementById("ans2");
ans2.addEventListener("click",function(){
    try1 = 2;
    parity1++;
    if(parity1 % 2 == 0){
        ans2.style["background-color"] = "#CAEEC2";
    }else{
        ans2.style["background-color"] = "#FFFFFF";
    }
}, false);

const ans3 = document.getElementById("ans3");
ans3.addEventListener("click",function(){
    try1 = 3;
    parity1++;
    if(parity1 % 2 == 0){
        ans3.style["background-color"] = "#CAEEC2";
    }else{
        ans3.style["background-color"] = "#FFFFFF";
    }
}, false);

const ans4 = document.getElementById("ans4");
ans4.addEventListener("click",function(){
    try1 = 4;
    parity1++;
    if(parity1 % 2 == 0){
        ans4.style["background-color"] = "#CAEEC2";
    }else{
        ans4.style["background-color"] = "#FFFFFF";
    }
}, false);



function checkAns2(){
    const feedback2 = document.getElementById('feedback2');
    const para2 = document.createElement("p");
    if(try2 == 3){
        console.log('correct ans');    
        const node2 = document.createTextNode("That's correct! It wouldn't be appropriate to message a personal social media account, but the other options are a great way of speculatively applying for a role.");
        para2.appendChild(node2);
        feedback2.appendChild(para2);
        feedback2.style["background-color"] = "#CAEEC2";
    }else{
        console.log('incorrect');
        const node2 = document.createTextNode("That's not quite right. It  wouldn't be appropriate to message a personal social media account, but the other options are all great ways of speculatively applying for a role.");
        para2.appendChild(node2);
        feedback2.appendChild(para2);
        feedback2.style["background-color"] = "#FFCCCB"
    }
}


const ans5 = document.getElementById("ans5");
ans5.addEventListener("click",function(){
    try2 = 1;
    parity2++;
    if(parity2 % 2 == 0){
        ans5.style["background-color"] = "#CAEEC2";
    }else{
        ans5.style["background-color"] = "#FFFFFF";
    }
}, false);

const ans6 = document.getElementById("ans6");
ans6.addEventListener("click",function(){
    try2 = 2;
    parity2++;
    if(parity2 % 2 == 0){
        ans6.style["background-color"] = "#CAEEC2";
    }else{
        ans6.style["background-color"] = "#FFFFFF";
    }
}, false);

const ans7 = document.getElementById("ans7");
ans7.addEventListener("click",function(){
    try2 = 3;
    parity2++;
    if(parity2 % 2 == 0){
        ans7.style["background-color"] = "#CAEEC2";
    }else{
        ans7.style["background-color"] = "#FFFFFF";
    }
}, false);

const ans8 = document.getElementById("ans8");
ans8.addEventListener("click",function(){
    try2 = 4;
    parity2++;
    if(parity2 % 2 == 0){
        ans8.style["background-color"] = "#CAEEC2";
    }else{
        ans8.style["background-color"] = "#FFFFFF";
    }
}, false);



function checkAns3(){
    const feedback3 = document.getElementById('feedback3');
    const para3 = document.createElement("p");
    if(try3 == 4){
        console.log('correct ans');    
        const node3 = document.createTextNode("That's correct! Whilst the CEO's salary won't affect your placement, the other factors are all important to consider.");
        para3.appendChild(node3);
        feedback3.appendChild(para3);
        feedback3.style["background-color"] = "#CAEEC2";
    }else{
        console.log('incorrect');
        const node3 = document.createTextNode("That's not quite right. The CEO's salary won't affect your placement, but the other factors are all important to consider.");
        para3.appendChild(node3);
        feedback3.appendChild(para3);
        feedback3.style["background-color"] = "#FFCCCB"
    }
}


const ans9 = document.getElementById("ans9");
ans9.addEventListener("click",function(){
    try3 = 1;
    parity3++;
    if(parity3 % 2 == 0){
        ans9.style["background-color"] = "#CAEEC2";
    }else{
        ans9.style["background-color"] = "#FFFFFF";
    }
}, false);

const ans10 = document.getElementById("ans10");
ans10.addEventListener("click",function(){
    try3 = 2;
    parity3++;
    if(parity3 % 2 == 0){
        ans10.style["background-color"] = "#CAEEC2";
    }else{
        ans10.style["background-color"] = "#FFFFFF";
    }
}, false);

const ans11 = document.getElementById("ans11");
ans11.addEventListener("click",function(){
    try3 = 3;
    parity3++;
    if(parity3 % 2 == 0){
        ans11.style["background-color"] = "#CAEEC2";
    }else{
        ans11.style["background-color"] = "#FFFFFF";
    }
}, false);

const ans12 = document.getElementById("ans12");
ans12.addEventListener("click",function(){
    try3 = 4;
    parity3++;
    if(parity3 % 2 == 0){
        ans12.style["background-color"] = "#CAEEC2";
    }else{
        ans12.style["background-color"] = "#FFFFFF";
    }
}, false);



const checkButton = document.getElementById("check-btn");
checkButton.addEventListener("click",checkAns1);
checkButton.addEventListener("click",checkAns2);
checkButton.addEventListener("click",checkAns3);
