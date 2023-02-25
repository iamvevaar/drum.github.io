

const dyno = document.querySelector(".dyno");
const error = document.querySelector(".error");

console.log("heelo saaab");
window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    audio.currentTime = "0";
    if (!audio){
        return
    }         
    else {
        audio.play();
    }
    dyno.style.Tra
    dyno.innerText = e.key
    key.classList.add("playing");
})

function removeTrans(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    console.log(e);
}

const keys = document.querySelectorAll('.key');
keys.forEach(key=>key.addEventListener('transitionend' , removeTrans))
console.log(keys);