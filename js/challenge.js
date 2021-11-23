let counterDisplayElem = document.getElementById('counter');
let counterMinusElem = document.getElementById('minus');
let counterPlusElem = document.getElementById('plus');
let heart = document.getElementById('heart')
let counterPause = document.getElementById('pause')

let count = 0
let boolPause = false
counterPause.addEventListener('click', function () {
   /*condition*/ boolPause === false ? 
    /*if true*/ (counterPause.innerHTML = 'resume', boolPause = !boolPause, document.getElementById("minus").disabled = true, document.getElementById("plus").disabled = true) 
 /*if false*/   : (counterPause.innerHTML = 'pause', boolPause = !boolPause, document.getElementById("minus").disabled = false, document.getElementById("plus").disabled = false)
    }
);
setInterval(function Counter() {   
   /*count if not paused*/  boolPause === false ? (count ++, counterDisplayElem.innerHTML = count) : counterDisplayElem.innerHTML = count       
    },1000
)
counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
    }
) ;
counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
    }
);
function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};
heart.addEventListener('click', function () {
    let ul= document.getElementsByID('like')
    let li =document.createElement(li)
    li.textContent = count + "has been liked"
    ul.appendChild(li)
}
    // function append(likes) {
    //     document.getElementById(likes)
    //     li = document.createElement("li")
    //     li.textContent = count + "has been liked"
    //     ul.appendChild(li)
    //     console.log(ul)
    
    // }
    
);
  



