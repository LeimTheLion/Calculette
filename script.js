const screen = document.querySelector('.screen');
const allNumbers = document.querySelectorAll('.number');
let n = 0;
let virgNum = 0;

function raiseToNine() {
    if (n == 9) {
        allNumbers.forEach(number => number.disabled = true);
        virgule.disabled = true;
    }
}
function max1Virg() {
    if (virgNum == 1) {
        virgule.disabled = true;
    }
}

function no1() {
    const write1 = document.createTextNode("1");
    screen.appendChild(write1);
}
const un = document.getElementById('un');
un.onclick = () => {
    no1();
    n++;
    raiseToNine();
};

function no2() {
    const write2 = document.createTextNode("2");
    screen.appendChild(write2);
}
const deux = document.getElementById('deux');
deux.onclick = () => {
    no2();
    n++;
    raiseToNine();
};

function no3() {
    const write3 = document.createTextNode("3");
    screen.appendChild(write3);
}
const trois = document.getElementById('trois');
trois.onclick = () => {
    no3();
    n++;
    raiseToNine();
};

function no4() {
    const write4 = document.createTextNode("4");
    screen.appendChild(write4);
}
const quatre = document.getElementById('quatre');
quatre.onclick = () => {
    no4();
    n++;
    raiseToNine();
};

function no5() {
    const write5 = document.createTextNode("5");
    screen.appendChild(write5);
}
const cinq = document.getElementById('cinq');
cinq.onclick = () => {
    no5();
    n++;
    raiseToNine();
};

function no6() {
    const write6 = document.createTextNode("6");
    screen.appendChild(write6);
}
const six = document.getElementById('six');
six.onclick = () => {
    no6();
    n++;
    raiseToNine();
};

function no7() {
    const write7 = document.createTextNode("7");
    screen.appendChild(write7);
}
const sept = document.getElementById('sept');
sept.onclick = () => {
    no7();
    n++;
    raiseToNine();
};

function no8() {
    const write8 = document.createTextNode("8");
    screen.appendChild(write8);
}
const huit = document.getElementById('huit');
huit.onclick = () => {
    no8();
    n++;
    raiseToNine();
};

function no9() {
    const write9 = document.createTextNode("9");
    screen.appendChild(write9);
}
const neuf = document.getElementById('neuf');
neuf.onclick = () => {
    no9();
    n++;
    raiseToNine();
};

function no0() {
    const write0 = document.createTextNode("0");
    screen.appendChild(write0);
}
const zéro = document.getElementById('zéro');
zéro.onclick = () => {
    no0();
    n++;
    raiseToNine();
};

function virg() {
    const writeVirg = document.createTextNode(",");
    screen.appendChild(writeVirg);
}
const virgule = document.getElementById('virg');
virgule.onclick = () => {
    virg();
    virgNum++;
    max1Virg();
};



const eff = document.getElementById('effacer');
eff.onclick = () => {
    screen.textContent = "";
    n = 0;
    virgNum = 0;
    allNumbers.forEach(number => number.disabled = false);
    virgule.disabled = false;
}
const ann = document.getElementById('annuler');
ann.onclick = () => {
    screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1);
    n--; // MODIFICA: SE IO CANCELLO LA VIRGOLA, MI TOGLIE CMQ 1 PUNTO A n!!! DA FARE ANK: SE METTI VIRGOLA, DI CIFRE CE NE STANNO SOLO 8 POI!!!
    if (n < 9) {
        allNumbers.forEach(number => number.disabled = false);
    }
    let decimals = screen.textContent.search(",");
    if (decimals !== -1) {
        virgule.disabled = true;
    }
    else if (decimals == -1) {
        virgNum = 0;
        virgule.disabled = false;
        max1Virg();
    }
}