
// create stars
for(let i=0;i<120;i++){
const star=document.createElement("div")
star.className="star"
star.style.left=Math.random()*100+"vw"
star.style.top=Math.random()*100+"vh"
star.style.animationDuration=(Math.random()*2+1)+"s"
document.body.appendChild(star)
}

// romantic message
const text=`រីករាយទិវានារីអន្តរជាតិ ៨ មីនា 🌹

អូនគឺជាមនុស្សពិសេសបំផុតសម្រាប់បង។
អរគុណដែលតែងតែយល់ចិត្ត និងនៅក្បែរបងជានិច្ច។

សូមអោយអូនមានសុខភាពល្អ
សុភមង្គល
និងជោគជ័យគ្រប់ការងារ។

បងស្រលាញ់អូន ❤️`

let i=0

const btn=document.getElementById("openBtn")
const msg=document.getElementById("message")
const music=document.getElementById("music")

btn.onclick=()=>{

document.getElementById("gift").style.display="none"
btn.style.display="none"

msg.style.display="block"

music.volume=0.4
music.play()

typeWriter()

setInterval(createHeart,250)
setInterval(createFirework,700)

}

function typeWriter(){
if(i<text.length){
msg.innerHTML+=text.charAt(i)
i++
setTimeout(typeWriter,60)
}
}

function createHeart(){

const heart=document.createElement("div")

const shapes=["❤️","💖","🌸","🌹","💕"]

heart.innerHTML=shapes[Math.floor(Math.random()*shapes.length)]

heart.className="heart"

heart.style.left=Math.random()*100+"vw"

heart.style.fontSize=(Math.random()*20+15)+"px"

heart.style.animationDuration=(Math.random()*3+4)+"s"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),7000)

}

function createFirework(){

const fire=document.createElement("div")

const shapes=["✨","💫","🌟"]

fire.innerHTML=shapes[Math.floor(Math.random()*shapes.length)]

fire.className="fire"

fire.style.left=Math.random()*100+"vw"
fire.style.top=Math.random()*100+"vh"

document.body.appendChild(fire)

setTimeout(()=>fire.remove(),1000)

}
