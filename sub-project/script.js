"use strict"

function EaseOutQuint (x) {
    return 1 - ((1 - x)**5)
}

function EaseInQuint (x) {
    return x ** 5
}

let inputs = document.getElementsByClassName('inputs');
for (let inp of inputs) {
    inp.addEventListener('focus', (e) => {
        let txt = e.path[0].parentElement.children[1].children[0]
        let inp = e.path[0].value;
        if (inp === '') {
            let x = 0;
            let up = 0;
            let id = setInterval(() => {
                if (up >= 15) {
                    clearInterval(id)
                } else {
                    up = EaseOutQuint(x) * 15;
                    x += 0.01;
                    txt.style.transform = `translate(0, -${up}px)`
                }
            }, 1)
            txt.style.background = `linear-gradient(var(--paste) 0% 50%, white 50% 100%)`
        }
    })

    inp.addEventListener('focusout', (e) => {
        let txt = e.path[0].parentElement.children[1].children[0]
        let inp = e.path[0].value;
        if (inp === '') {
            let up = 15;
            let x  = 1;
            let id = setInterval(() => {
                if (up <= 0) {
                    clearInterval(id)
                } else {
                    up = EaseInQuint(x) * 15;
                    x -= 0.01;
                    txt.style.transform = `translate(0, -${up}px)`
                }
            }, 1)
            txt.style.background = `white`
        }
    })
}

const MALE = document.getElementById('imgMale');
const FEMALE = document.getElementById('imgFemale');
const OTHER = document.getElementById('imgOther');

for (let elem of document.getElementsByName('gender')) {
    elem.addEventListener('click', (e) => {
        switch (e.path[0].id) {
            case "male":
                MALE.style.display = 'block';
                FEMALE.style.display = 'none';
                OTHER.style.display = 'none';
                break;
            case "female":
                MALE.style.display = 'none';
                FEMALE.style.display = 'block';
                OTHER.style.display = 'none';
                break;
            case "other":
                MALE.style.display = 'none';
                FEMALE.style.display = 'none';
                OTHER.style.display = 'block';
                break;
        }
    })
}

const FNAME_INPUT = document.getElementById("fname")
const LNAME_INPUT = document.getElementById("lname")
const FNAME = document.getElementById("pi-graphic-fname");
const LNAME = document.getElementById("pi-graphic-lname");

FNAME_INPUT.addEventListener("blur", () => {
    FNAME.innerText = FNAME_INPUT.value
})
LNAME_INPUT.addEventListener("blur", () => {
    LNAME.innerText = LNAME_INPUT.value
})

let slideNum = 0;
let slides = document.getElementsByClassName("slide");
let sliderButtons = document.getElementsByClassName('slider-button');
let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');

for (let i = 1; i < slides.length; i++) {
    slides[i].style.transform = `scale(0)`
    slides[i].style.display = 'none'
}

for (let i = 0; i < sliderButtons.length; i++) {
    sliderButtons[i].addEventListener("click", () => {
        let shrink = 1;
        let id = setInterval(() => {
            if (shrink <= 0) {
                clearInterval(id);
                slides[slideNum].style.display = 'none';
            }
            else {
                slides[slideNum].style.transform = `scale(${shrink})`
                shrink -= 0.01
            }
        }, 1);

        setTimeout(() => {
            slideNum = i;
            slides[slideNum].style.display = 'block';

            let grow = 0;
            let id2 = setInterval(() => {
                if (grow >= 1) {
                    clearInterval(id2);
                }
                else {
                    slides[slideNum].style.transform = `scale(${grow})`
                    grow += 0.01
                }
            }, 1);
        }, 1100);
    })
}

arrowRight.addEventListener('click', () => {
    let shrink = 1;
    let id = setInterval(() => {
        if (shrink <= 0) {
            clearInterval(id);
            slides[slideNum].style.display = 'none';
        }
        else {
            slides[slideNum].style.transform = `scale(${shrink})`
            shrink -= 0.01
        }
    }, 1);

    setTimeout(() => {
        if (slideNum === 2) slideNum = 0;
        else slideNum++;
        slides[slideNum].style.display = 'block';

        let grow = 0;
        let id2 = setInterval(() => {
            if (grow >= 1) {
                clearInterval(id2);
            }
            else {
                slides[slideNum].style.transform = `scale(${grow})`
                grow += 0.01
            }
        }, 1);
    }, 1100);
});

arrowLeft.addEventListener('click', () => {
    let shrink = 1;
    let id = setInterval(() => {
        if (shrink <= 0) {
            clearInterval(id);
            slides[slideNum].style.display = 'none';
        }
        else {
            slides[slideNum].style.transform = `scale(${shrink})`
            shrink -= 0.01
        }
    }, 1);

    setTimeout(() => {
        if (slideNum === 0) slideNum = 2;
        else slideNum--;
        slides[slideNum].style.display = 'block';

        let grow = 0;
        let id2 = setInterval(() => {
            if (grow >= 1) {
                clearInterval(id2);
            }
            else {
                slides[slideNum].style.transform = `scale(${grow})`
                grow += 0.01
            }
        }, 1);
    }, 1100);
});

let up = document.getElementById('up');
let down = document.getElementById('down');
let baggageNum = document.getElementById('baggage')

baggageNum.addEventListener('input', () => {
    if (baggageNum.value < 0 ) baggageNum.value = 0 ;
    if (baggageNum.value > 10) baggageNum.value = 10;
})

up.addEventListener('click', () => {
    baggageNum.value = Number(baggage.value) + 1
    if (baggageNum.value < 0 ) baggageNum.value = 0 ;
    if (baggageNum.value > 10) baggageNum.value = 10;
})

down.addEventListener('click', () => {
    baggageNum.value = Number(baggage.value) - 1
    if (baggageNum.value < 0 ) baggageNum.value = 0 ;
    if (baggageNum.value > 10) baggageNum.value = 10;
})

let append = document.getElementById('append');

append.addEventListener('click', () => {
    let personal = {
        fname : document.getElementById("fname").value,
        lname : document.getElementById("lname").value,
        dob : document.getElementById("dob").value,
        pnum : document.getElementById("pnum").value,
        email : document.getElementById("email").value,
        male : document.getElementById("male").value,
        female : document.getElementById("female").value,
        other : document.getElementById("other").value,
    }
    let tripInfo = {
        cityLeaving : document.getElementById("city-leaving").value,
        dateLeaving : document.getElementById("date-leaving").value,
        cityGoing : document.getElementById("city-going").value,
        dateReturning : document.getElementById("date-returning").value,
    }
    let extras = {
        baggage : document.getElementById("baggage").value,
        chicken : document.getElementById("chicken").value,
        fish : document.getElementById("fish").value,
        vegetarian : document.getElementById("vegetarian").value,
        exLegroom : document.getElementById("exLegroom").value,
        windowSeat : document.getElementById("window-seat").value,
        headphones : document.getElementById("headphones").value,
    }
    
    let user = new User (personal, tripInfo, extras)
    userId++
})

let userId = 0;

class User {
    constructor (personal, tripInfo, extras) {
        this.personal = personal;
        this.tripInfo = tripInfo;
        this.extras = extras;
        this.userId = userId;
    }

    CanDrink () {
        if (Date.now() - new Date ( this.personal.dob ) > 1000 * 60 * 60 * 24 * 365 * 21) return true
        else return false
    }

    Cost () {
        let total = 300;
        total += this.extras.baggage * 20;
        if (this.extras.exLegroom === 'on') total += 10;
        if (this.extras.windowSeat === 'on') total += 10;
        if (this.extras.headphones === 'on') total += 10;
        return total;
    }

    TripDuration () {
        return (new Date (this.tripInfo.dateReturning) - new Date (this.tripInfo.dateLeaving)) / (1000 * 60 * 60 * 24)
    }
}

let user = new User ({
    fname : "Ethan",
    lname : "Philott",
    dob : "1/1/2000",
    pnum : "555-555-5555",
    email : "exmaple@gmail.com",
    male : "on",
    female : "off",
    other : "off",
}, {
    cityLeaving : "Pheonix",
    dateLeaving : "1/1/2020",
    cityGoing : "Somewhere else",
    dateReturning : "1/3/2020",
}, {
    baggage : "5",
    chicken : "on",
    fish : "off",
    vegetarian : "off",
    exLegroom : "off",
    windowSeat : "off",
    headphones : "on",
})



