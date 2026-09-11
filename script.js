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

        alert("PIN salah ❤️");

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
        (Math.random()*20+15) + "px";

    heart.style.opacity = ".8";

    heart.style.pointerEvents = "none";

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

        flower.style.position = "absolute";

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

const message = `

Selamat ulang tahun sayang kuuu 🤍

Wish u all the best cintakuuu.

Terimakasii banyaak sayang sudah lahir di dunia inii hahaha alayku 😭

Terimakasii karena sudah mau terimaka kembali, sayang sekalii sama sayaaa.

Jujur sedih sekalikaaa karena di hari bahagiata ini nda ada ka disampingtaaaa 😞

Tapi selaluja ada di hati ta tohh, toh sayang?

Nassami masa nda.

Semoga senyumnya tidak bakalan berubah.

Semoga tatapannya juga ke saya tidak pernah berubah.

Tatapan cinta ta nah ku maksudd ka.

Kalau kuliat video ta berdua, tatapan ta ke saya selaluka berfikir disayang sekalikaa.

Haruski tau sayang nah, ku sayang sekaliiii kii.

Sayaang bangeett.

Semoga bisajki lihat itu sayang.

Bangga ka sama kita bisa ki bertahan sejauh ini.

Karena setahuku pasti trauma sekaliki sama saya toh?

Minta maaf ka sayang nah.

Percaya ka ndbkal ka kasi begituki sayang.

Semoga di umur 20 ta ini lebih tenangki menghadapi masalah kalau dunia lagi nda berpihak ke kita sayang.

Sama kita banyak ka belajar banyak hal tentang sabar, tulus, dan berjuang.

Sayangku Aulyazulfaindana alias BUBOSSSKUU 🤍

Selamat bertambah usiaa nahhhh cintaaakuuu.

Semogaa selalu diberikan kesehatan, kebahagiaan, kekuatan untuk kejar impiannya.

Tapi ku tauji iya impian ta itu menikah sama saya toh? 😭

Jmmi bohong ka, kutau skli ji itu.

Dan janganki pernah putus asa sayang nah.

Apapun yang terjadi nanti kedepannya bakalan selaluja adaa.

Nda pernahjki sendirian sayang.

Selaluka ada, doakanki dan dukungki.

I love uu elweeyysss cintakuuu ❤️

Happy birthday, my love. 🤍
`;


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

        alert("Salah? Coba lagi sayang ❤️");

        return;

    }

    questions[currentQuestion]
        .classList.remove("active");

    currentQuestion++;

    if(currentQuestion < questions.length){

        questions[currentQuestion]
            .classList.add("active");

    }else{

        document.getElementById("quizSuccess")
            .classList.remove("hidden");

        createConfetti();

        document.getElementById("quizSuccess")
            .scrollIntoView({
                behavior:"smooth"
            });

    }

}


/* =========================
   SPECIAL MEMORY VIDEO
========================= */

function showSpecialMemory(){

    const video =
        document.getElementById("specialMemory");

    video.classList.remove("hidden");

    video.scrollIntoView({
        behavior:"smooth"
    });

}


/* =========================
   CONFETTI
========================= */

function createConfetti(){

    for(let i=0;i<80;i++){

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            ["❤️","✨","🌹"]
            [Math.floor(Math.random()*3)];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random()*100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.fontSize =
            (Math.random()*20+15)+"px";

        confetti.style.animation =
            `fall ${Math.random()*3+3}s linear`;

        confetti.style.pointerEvents = "none";

        document.body.appendChild(
            confetti
        );

        setTimeout(()=>{

            confetti.remove();

        },6000);

    }

}
