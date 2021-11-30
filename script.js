const screenHTML = document.querySelector('.screen');
const screen = document.createElement('p');
screenHTML.appendChild(screen);
const allNumbers = document.querySelectorAll('.number');
let n = 0;
let virgNum = 0;
const ann = document.getElementById('annuler');
ann.disabled = true;
const eff = document.getElementById('effacer');
let pluss = 0;
let operand1;
let writeVirg;

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
function activateAnn() {
    ann.disabled = false;
}

function no1() {
    const write1 = document.createTextNode("1");
    screen.appendChild(write1);
}
const un = document.getElementById('un');
un.onclick = () => {
    enterOperand2();
    no1();
    n++;
    raiseToNine();
    activateAnn();
};

function no2() {
    const write2 = document.createTextNode("2");
    screen.appendChild(write2);
}
const deux = document.getElementById('deux');
deux.onclick = () => {
    enterOperand2();
    no2();
    n++;
    raiseToNine();
    activateAnn();
};

function no3() {
    const write3 = document.createTextNode("3");
    screen.appendChild(write3);
    activateAnn();
}
const trois = document.getElementById('trois');
trois.onclick = () => {
    enterOperand2();
    no3();
    n++;
    raiseToNine();
    activateAnn();
};

function no4() {
    const write4 = document.createTextNode("4");
    screen.appendChild(write4);
}
const quatre = document.getElementById('quatre');
quatre.onclick = () => {
    enterOperand2();
    no4();
    n++;
    raiseToNine();
    activateAnn();
};

function no5() {
    const write5 = document.createTextNode("5");
    screen.appendChild(write5);
}
const cinq = document.getElementById('cinq');
cinq.onclick = () => {
    enterOperand2();
    no5();
    n++;
    raiseToNine();
    activateAnn();
};

function no6() {
    const write6 = document.createTextNode("6");
    screen.appendChild(write6);
}
const six = document.getElementById('six');
six.onclick = () => {
    enterOperand2();
    no6();
    n++;
    raiseToNine();
    activateAnn();
};

function no7() {
    const write7 = document.createTextNode("7");
    screen.appendChild(write7);
}
const sept = document.getElementById('sept');
sept.onclick = () => {
    enterOperand2();
    no7();
    n++;
    raiseToNine();
    activateAnn();
};

function no8() {
    const write8 = document.createTextNode("8");
    screen.appendChild(write8);
}
const huit = document.getElementById('huit');
huit.onclick = () => {
    enterOperand2();
    no8();
    n++;
    raiseToNine();
    activateAnn();
};

function no9() {
    const write9 = document.createTextNode("9");
    screen.appendChild(write9);
}
const neuf = document.getElementById('neuf');
neuf.onclick = () => {
    enterOperand2();
    no9();
    n++;
    raiseToNine();
    activateAnn();
};

function no0() {
    const write0 = document.createTextNode("0");
    screen.appendChild(write0);
}
const zéro = document.getElementById('zéro');
zéro.onclick = () => {
    enterOperand2();
    no0();
    n++;
    raiseToNine();
    activateAnn();
};

function virg() {
    if (n == 0) { // NON FUNZIONA PERCHE' APPENA PREMI ",", DIVENTA 1 !!!!!!!!!
        writeVirg = document.createTextNode("0.");
        screen.appendChild(writeVirg);
    }
    else if (n !== 0) {
        writeVirg = document.createTextNode(".");
        screen.appendChild(writeVirg);
    }
}
const virgule = document.getElementById('virg');
virgule.onclick = () => {
    enterOperand2();
    n++;
    virg();
    virgNum++;
    max1Virg();
    activateAnn();
};

eff.onclick = () => {
    screen.textContent = "";
    n = 0;
    virgNum = 0;
    pluss = 0;
    operand1 = "";
    allNumbers.forEach(number => number.disabled = false);
    virgule.disabled = false;
    plus.disabled = false;
    result.disabled = false;
}

ann.onclick = () => {
    screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1);
    if (n <= 9) {
        n--;
        allNumbers.forEach(number => number.disabled = false);
    }
    function checkVirg() {
        if (screen.textContent.search(".") !== -1) {
            virgule.disabled = true;
        }
        else if (screen.textContent.search(".") == -1) {
            virgNum = 0;
            virgule.disabled = false;
            max1Virg();
        }
    }
    checkVirg();
}

function enterOperand2() {
    if (pluss !== 0) {
        screenHTML.removeChild(screen);
        pluss = 0;
        screenHTML.appendChild(screen);
        screen.textContent = "";
        n = 0;
        virgNum = 0;
        allNumbers.forEach(number => number.disabled = false);
        virgule.disabled = false;
        raiseToNine();
        activateAnn();
        max1Virg();

    }
}

const plus = document.getElementById('plus');
plus.onclick = () => {
    pluss++;
    operand1 = Number(screen.textContent);
    n = 0;
    virgNum = 0;
    allNumbers.forEach(number => number.disabled = false);
    virgule.disabled = false;
    raiseToNine();
    activateAnn();
    max1Virg();
}

const result = document.getElementById('result');
result.onclick = () => {
    if (n !== 0) {
        let résultat = operand1 + Number(screen.textContent);
        screenHTML.removeChild(screen);
        screenHTML.appendChild(screen);
        screen.textContent = "";
        const writeResult = document.createTextNode(résultat);
        screen.appendChild(writeResult);
        allNumbers.forEach(number => number.disabled = true);
        ann.disabled = true;
        virgule.disabled = true;
        result.disabled = true;
    }
}