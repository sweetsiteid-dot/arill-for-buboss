/* =========================
   PIN SYSTEM
========================= */

let pin = "";

function addPin(num){

    if(pin.length >= 4) return;

    pin += num;

    document.getElementById("pinInput").value =
        "●".repeat(pin.length);

}

function clearPin(){

    pin = pin.slice(0,-1);

    document.getElementById("pinInput").value =
        "●".repeat(pin.length);

}

function checkPin(){

    if(pin === "1209"){

        document.getElementById("pinScreen")
        .style.display = "none";

        document.getElementById("website")
        .classList.remove("hidden");

        document.getElementById("music")
        .play()
        .catch(()=>{});

    }else{

        alert("Wrong PIN ❤️");

        pin = "";

        document.getElementById("pinInput")
        .value = "";

    }

}


/* =========================
   OPEN HEART
========================= */

function openHeart(){

    document.getElementById("bottleSection")
    .classList.remove("hidden");

    document.getElementById("bottleSection")
    .scrollIntoView({
        behavior:"smooth"
    });

}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart(){

    const heart =
        document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random()*100 + "vw";

    heart.style.top = "-30px";

    heart.style.fontSize =
        (Math.random()*20+15)+"px";

    heart.style.opacity = ".8";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    heart.style.animation =
        `fall ${Math.random()*4+6}s linear`;

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

}

setInterval(createHeart,600);


/* =========================
   ANIMATION STYLE
========================= */

const style =
    document.createElement("style");

style.innerHTML = `

@keyframes fall{

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(120vh);
opacity:0;
}

}

@keyframes flowerBurst{

0%{
opacity:1;
transform:
translate(0,0)
scale(.5);
}

100%{
opacity:0;
transform:
translate(
var(--x),
var(--y)
)
scale(1.5)
rotate(360deg);
}

}

@keyframes popIn{

from{
opacity:0;
transform:scale(.5);
}

to{
opacity:1;
transform:scale(1);
}

}

`;

document.head.appendChild(style);


/* =========================
   BOTTLE BREAK
========================= */

let bottleOpened = false;

function breakBottle(){

    if(bottleOpened) return;

    bottleOpened = true;

    const bottle =
        document.getElementById("bottle");

    bottle.innerHTML = "💥";

    createFlowerBurst();

    setTimeout(()=>{

        bottle.style.display = "none";

        document.getElementById(
            "letterContainer"
        ).style.display = "block";

        typeLetter();

    },1500);

}


/* =========================
   FLOWER BURST
========================= */

function createFlowerBurst(){

    const flowers =
        document.getElementById("flowers");

    const emojis = [
        "🌹",
        "🌹",
        "🌹",
        "🌹",
        "🌹",
        "❤️",
        "✨",
        "🌹",
        "❤️"
    ];

    for(let i=0;i<40;i++){

        const flower =
            document.createElement("div");

        flower.innerHTML =
            emojis[
                Math.floor(
                    Math.random()*emojis.length
                )
            ];

        flower.style.position =
            "absolute";

        flower.style.left = "0px";

        flower.style.top = "0px";

        flower.style.fontSize =
            (Math.random()*15+25)+"px";

        flower.style.setProperty(
            "--x",
            (Math.random()*700-350)+"px"
        );

        flower.style.setProperty(
            "--y",
            (-Math.random()*450-50)+"px"
        );

        flower.style.animation =
            "flowerBurst 2.5s forwards";

        flowers.appendChild(flower);

        setTimeout(()=>{
            flower.remove();
        },2500);

    }

}


/* =========================
   LETTER
========================= */

const message = `selamat ulang tahun sayang kuuu wish u all the best cintakuuu terimakasii banyaak sayang sudah lahir di dunia inii hahaha alayku terimakasii karena sudah mau terimaka kembali, sayang sekalii sama sayaaa, jujur sedih sekalikaaa karena di hari bahagiata ini nda ada ka disampingtaaaa😞 tapi selaluja ada di hati ta tohh, toh sayang? nassami masa nda semoga senyumnya tidak bakalan berubah semoga tatapannya juga ke saya tidak pernah berubah tatapan cinta ta nah ku maksudd ka kalau kuliat video ta berdua tatapan ta ke saya selaluka berfikir disayang sekalikaa, haruski tau sayang nah ku sayang sekaliiii kii sayaang bangeett semoga bisajki lihat itu sayang. bangga ka sama kita bisa ki bertahan sejauh ini karena setahuku pasti trauma sekaliki sama saya toh? minta maaf ka sayang nah, percaya ka ndbkal ka kasi begituki sayang, semoga di umur 20 ta ini lebih tenangki menghadapi masalah kalau dunia lagi nda berpihak ke kita sayang. sama kita banyak ka belajar banyak hal tentang sabar, tulus, dan berjuang. sayangku aulyazulfaindana alias BUBOSSSKUU selamat bertambah usiaa nahhhh cintaaakuuu semogaa selalu diberikan kesehatan kebahagiaan kekuatan untuk kejar impiannya tapi ku tauji iya impian ta itu menikah sama saya toh? jmmi bohong ka kutau skli ji itu dan janganki pernah putus asa sayang nah apapun yang terjadi nanti kedepannya bakalan selaluja adaa nda pernahjki sendirian sayang selaluka ada doakanki dan dukungki iloveuu elweeyysss cintakuuu happy birthday, my love.`;

function typeLetter(){

    const target =
        document.getElementById("letterText");

    target.innerHTML = "";

    let i = 0;

    const typing =
        setInterval(()=>{

            target.innerHTML +=
                message.charAt(i);

            i++;

            if(i >= message.length){

                clearInterval(typing);

            }

        },5);

}


/* =========================
   LOVE QUIZ
========================= */

let currentQuestion = 0;

const questions =
    document.querySelectorAll(".question");

function checkAnswer(button,correct){

    if(!correct){

        alert("Salahh 🤭 Coba lagi sayang ❤️");

        return;

    }

    questions[currentQuestion]
        .classList.remove("active");

    currentQuestion++;

    if(currentQuestion < questions.length){

        questions[currentQuestion]
            .classList.add("active");

    }else{

        document.getElementById(
            "quizSuccess"
        ).classList.remove("hidden");

        createConfetti();

        document.getElementById(
            "quizSuccess"
        ).scrollIntoView({
            behavior:"smooth"
        });

    }

}


/* =========================
   CONFETTI
========================= */

function createConfetti(){

    for(let i=0;i<80;i++){

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            ["❤️","✨","🌹"][
                Math.floor(
                    Math.random()*3
                )
            ];

        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random()*100 + "vw";

        confetti.style.top =
            "-20px";

        confetti.style.fontSize =
            (Math.random()*20+15)+"px";

        confetti.style.animation =
            `fall ${Math.random()*3+3}s linear`;

        confetti.style.pointerEvents =
            "none";

        confetti.style.zIndex = "999";

        document.body.appendChild(
            confetti
        );

        setTimeout(()=>{

            confetti.remove();

        },6000);

    }

}
