// Select All Element:-
let start = document.querySelector('.start');
let button_start = document.querySelector('.start .button');
let header_name = document.querySelector('.header .name span');
let Counter_error = document.querySelector('.header .erorr span');
let sound_Game_i = document.querySelector('.sound i');
let sound_Game_span = document.querySelector('.sound span');
let Game = document.querySelector('.Game');
let new_start = document.querySelector('.new_start');
// Selected All Box in Array
let All_Box = Array.from(Game.children);
let All_Box_keys = [...Array(All_Box.length).keys()];


let button_return = document.querySelector('.button_return');

// Select Elements Audio :-
let startGame = document.querySelector('.startGame');
let Error_sound = document.querySelector('.rihgt');
let  Correct_voice = document.querySelector('.no');
let  win = document.querySelector('.win');

// add Elements:-
let duration=1000;
sound_Game_i.onclick = function(){
    sound_Game_span.classList.toggle('sound_opacity');

    if(sound_Game_span.classList.contains('sound_opacity')){
startGame.play()
    }else{
startGame.pause()
    }
}

shuffle(All_Box_keys)
button_start.onclick = function () {
    
    player_name() ;
    Game_show();
    startGame.play();
    startGame.volume=0.3;
}

function Game_show() {
    start.remove();
}

function player_name() {
    let You_Are_Name =prompt(`what's You'r Name ? `);
    You_Are_Name===""||You_Are_Name==='null'?header_name.innerHTML='UnKnown':header_name.innerHTML = You_Are_Name;
}

 All_Box.forEach((box , index )=>{

    // Add order on Elements
    box.style.order = All_Box_keys[index]

        box.addEventListener('click' , () => {
             // add class show :-
        Add_class_show(box)
        })
       

    })
// Change place Elements by order:-
function shuffle(Array) {
    Array.forEach(ele => {
        let current=Array.length,
        random,
        temp;


  while (current>0) {
   random=Math.floor(Math.random() * current);
   current--; 
            
    temp =Array[current];
    Array[current]=Array[random];
    Array[random]=temp

        }
       
    })
}
// function add class show:-
function Add_class_show(element) {
    element.classList.add('show')
    // Add function stop clicking:-
let Compare_element = All_Box.filter(box => box.classList.contains('show'));
if(Compare_element.length === 2){
    stop_clicking();
    compar_tow_Elements(Compare_element[0],Compare_element[1])
}

let All_elements = All_Box.filter(box => box.classList.contains('showing'));
if(All_elements.length == All_Box.length){
    startGame.pause()
    win.play();
    setTimeout(()=>{
        return_Game();
        startGame.play()
        
    },4000)
    
    

}
}
function return_Game(){
   
    All_Box.forEach(box => {
         box.classList.remove('showing');
         Counter_error.innerHTML=0;
         
    })
}

function  stop_clicking() {
    Game.classList.add('stop_clicking');
    setTimeout(()=>{
        Game.classList.remove('stop_clicking');
    },duration)
    
}
// compar Elements:-
function compar_tow_Elements(first_Element , sound_Element) {
    if (first_Element.dataset.technology == sound_Element.dataset.technology) {
        first_Element.classList.remove('show');
        sound_Element.classList.remove('show');

        first_Element.classList.add('showing');
        sound_Element.classList.add('showing');
         Correct_voice.play()
    }else{
        Counter_error.innerHTML = parseInt(Counter_error.innerHTML) + 1;
        setTimeout(()=>{
            first_Element.classList.remove('show');
        sound_Element.classList.remove('show');

        Error_sound.play()

        },duration)
    }
    
}
new_start.onclick = function(){
    location.reload()
}


