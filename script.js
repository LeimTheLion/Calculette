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
let moinss = 0;
let multt = 0;
let divv = 0;
let ress = 0;
let operand;
let writeVirg;
const addition = [];
const soustraction = [];
const multiplication = [];
const division = [];
let résultAdd;
let numCount = 0;
let lastOpe;
let addAll;
let divisAll;
let arrayAdd;
let easter = 0;


function raiseToNine() {
    if (n == 8) {
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
    numCount++;
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
    numCount++;
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
    numCount++;
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
    numCount++;
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
    numCount++;
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
    numCount++;
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
    numCount++;
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
    numCount++;
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
    numCount++;
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
    numCount++;
    no0();
    n++;
    raiseToNine();
    activateAnn();
};

function virg() {
    if (n == 0 && screen.textContent == "") {
        writeVirg = document.createTextNode("0.");
        n++;
        screen.appendChild(writeVirg);
    }
    else if (n == 0 && screen.textContent !== "") {
        if (screen.textContent.search(".") == -1) {
            virgule.disabled = true;
        }
        else if (screen.textContent.search(".") == -1) {
            writeVirg = document.createTextNode(".");
            screen.appendChild(writeVirg);
        }
    }
    else if (n !== 0) {
        writeVirg = document.createTextNode(".");
        screen.appendChild(writeVirg);
    }
}

const virgule = document.getElementById('virg');
virgule.onclick = () => {
    enterOperand2();
    numCount++;
    virg();
    n++;
    virgNum++;
    max1Virg();
    activateAnn();
};

eff.onclick = () => {
    screen.textContent = "";
    n = 0;
    virgNum = 0;
    pluss = 0;
    moinss = 0;
    multt = 0;
    divv = 0;
    easter = 0;
    operand = "";
    addition.length = 0;
    soustraction.length = 0;
    multiplication.length = 0;
    division.length = 0;
    allNumbers.forEach(number => number.disabled = false);
    virgule.disabled = false;
    plus.disabled = false;
    moins.disabled = false;
    croix.disabled = false;
    divi.disabled = false;
    result.disabled = false;
}

ann.onclick = () => {
    screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1);
    if (n <= 9) {
        n--;
        allNumbers.forEach(number => number.disabled = false);
    }
    checkVirg();
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

function enterOperand2() {
    if (numCount == 0) {
        screen.textContent = "";
        virgNum = 0;
        allNumbers.forEach(number => number.disabled = false);
        virgule.disabled = false;
        raiseToNine();
        activateAnn();
        max1Virg();
    }
    else
        virgNum = 0;
    allNumbers.forEach(number => number.disabled = false);
    virgule.disabled = false;
    raiseToNine();
    activateAnn();
    max1Virg();
}

const plus = document.getElementById('plus');
plus.onclick = () => {
    giveResult();
    continueAfterRes();
    numCount = 0;
    pluss++;
    moinss = 0;
    multt = 0;
    divv = 0;
    n = 0;
    virgNum = 0;
    allNumbers.forEach(number => number.disabled = false);
    virgule.disabled = false;
    operand = Number(screen.textContent);
    addition.push(operand);
    raiseToNine();
    activateAnn();
    max1Virg();
}

const moins = document.getElementById('moins');
moins.onclick = () => {
    giveResult();
    continueAfterRes();
    numCount = 0;
    moinss++;
    pluss = 0;
    multt = 0;
    divv = 0;
    n = 0;
    virgNum = 0;
    allNumbers.forEach(number => number.disabled = false);
    virgule.disabled = false;
    operand = Number(screen.textContent);
    soustraction.push(operand);
    raiseToNine();
    activateAnn();
    max1Virg();
}

const croix = document.getElementById('croix');
croix.onclick = () => {
    giveResult();
    continueAfterRes();
    numCount = 0;
    multt++;
    pluss = 0;
    moinss = 0;
    divv = 0;
    n = 0;
    virgNum = 0;
    allNumbers.forEach(number => number.disabled = false);
    virgule.disabled = false;
    operand = Number(screen.textContent);
    multiplication.push(operand);
    raiseToNine();
    activateAnn();
    max1Virg();
}

const divi = document.getElementById('divi');
divi.onclick = () => {
    giveResult();
    continueAfterRes();
    numCount = 0;
    divv++;
    pluss = 0;
    moinss = 0;
    multt = 0;
    n = 0;
    virgNum = 0;
    allNumbers.forEach(number => number.disabled = false);
    virgule.disabled = false;
    operand = Number(screen.textContent);
    division.push(operand);
    raiseToNine();
    activateAnn();
    max1Virg();
}

const result = document.getElementById('result');
result.onclick = () => {
    ress++;
    giveResult();
    easterEgg();
    continueAfterRes();
    result.disabled = true;
}

function giveResult() {
    if (pluss !== 0) {
        lastOpe = Number(screen.textContent);
        addAll = parseFloat((operand + lastOpe).toFixed(3));
        screen.textContent = "";
        const addThis = document.createTextNode(addAll);
        if (addThis.length > 8) {
            errorMsg = document.createElement('p');
            errorMsg.textContent = "ERREUR";
            screen.appendChild(errorMsg);
            alert("Le nombre était trop long !");
            allNumbers.forEach(number => number.disabled = true);
            pluss = 0;
            ress = 0;
            ann.disabled = true;
            virgule.disabled = true;
            plusmoins.disabled = true;
            pourc.disabled = true;
            result.disabled = true;
            plus.disabled = true;
            moins.disabled = true;
            croix.disabled = true;
            divi.disabled = true;
        }
        else
            screen.appendChild(addThis);
        allNumbers.forEach(number => number.disabled = true);
        ann.disabled = true;
        virgule.disabled = true;
    }
    else if (moinss !== 0) {
        lastOpe = Number(screen.textContent);
        sousAll = parseFloat((operand - lastOpe).toFixed(3));
        screen.textContent = "";
        const sousThis = document.createTextNode(sousAll);
        if (sousThis.length > 8) {
            errorMsg = document.createElement('p');
            errorMsg.textContent = "ERREUR";
            screen.appendChild(errorMsg);
            alert("Le nombre était trop long !");
            allNumbers.forEach(number => number.disabled = true);
            moinss = 0;
            ress = 0;
            ann.disabled = true;
            virgule.disabled = true;
            plusmoins.disabled = true;
            pourc.disabled = true;
            result.disabled = true;
            plus.disabled = true;
            moins.disabled = true;
            croix.disabled = true;
            divi.disabled = true;
        }
        else
            screen.appendChild(sousThis);
        allNumbers.forEach(number => number.disabled = true);
        ann.disabled = true;
        virgule.disabled = true;
    }
    else if (multt !== 0) {
        lastOpe = Number(screen.textContent);
        multAll = parseFloat((operand * lastOpe).toFixed(3));
        screen.textContent = "";
        const mulThis = document.createTextNode(multAll);
        if (mulThis.length > 8) {
            errorMsg = document.createElement('p');
            errorMsg.textContent = "ERREUR";
            screen.appendChild(errorMsg);
            alert("Le nombre était trop long !");
            allNumbers.forEach(number => number.disabled = true);
            multt = 0;
            ress = 0;
            ann.disabled = true;
            virgule.disabled = true;
            plusmoins.disabled = true;
            pourc.disabled = true;
            result.disabled = true;
            plus.disabled = true;
            moins.disabled = true;
            croix.disabled = true;
            divi.disabled = true;
        }
        else
            screen.appendChild(mulThis);
        allNumbers.forEach(number => number.disabled = true);
        ann.disabled = true;
        virgule.disabled = true;
    }
    else if (divv !== 0) {
        lastOpe = Number(screen.textContent);
        divisAll = parseFloat((operand / lastOpe).toFixed(3));
        screen.textContent = "";
        const diviThis = document.createTextNode(divisAll);
        if (diviThis.length > 8) {
            errorMsg = document.createElement('p');
            errorMsg.textContent = "ERREUR";
            screen.appendChild(errorMsg);
            alert("Le nombre était trop long !");
            allNumbers.forEach(number => number.disabled = true);
            divv = 0;
            ress = 0;
            ann.disabled = true;
            virgule.disabled = true;
            plusmoins.disabled = true;
            pourc.disabled = true;
            result.disabled = true;
            plus.disabled = true;
            moins.disabled = true;
            croix.disabled = true;
            divi.disabled = true;
        }
        else
            screen.appendChild(diviThis);
        allNumbers.forEach(number => number.disabled = true);
        ann.disabled = true;
        virgule.disabled = true;
        if (divisAll == Infinity) {
            easter++;
        }
    }
}
function easterEgg() {
    if (easter !== 0) {
        let bofEaster = document.createElement('p');
        bofEaster.textContent = "Infinity";
        bofEaster.classList.add('egg');
        bofEaster.setAttribute('href', "https://www.youtube.com/watch?v=GImvJWEehkA");
        bofEaster.style.color = "darkred";
        bofEaster.style.textDecoration = "underline";
        bofEaster.onclick = () => { window.open("https://www.youtube.com/watch?v=GImvJWEehkA", '_blank') };
        screen.textContent = "";
        screen.appendChild(bofEaster);
    }
}

function continueAfterRes() {
    if (ress !== 0) {
        n = 0;
        virgNum = 0;
        pluss = 0;
        moinss = 0;
        multt = 0;
        divv = 0;
        easter = 0;
        addition.length = 0;
        soustraction.length = 0;
        multiplication.length = 0;
        division.length = 0;
        allNumbers.forEach(number => number.disabled = false);
        virgule.disabled = false;
        plus.disabled = false;
        moins.disabled = false;
        croix.disabled = false;
        divi.disabled = false;
        result.disabled = false;
    }
}

let plusmoins = document.getElementById('plusmoins');
plusmoins.onclick = () => {
    let négatif = Number(screen.textContent) * -1;
    screen.textContent = "";
    let nég2 = document.createElement('p');
    nég2.textContent = négatif;
    screen.appendChild(nég2);
}

let pourc = document.getElementById('pourc');
pourc.onclick = () => {
    let pourcentage = Number(screen.textContent) / 100;
    screen.textContent = "";
    let pourc2 = document.createElement('p');
    pourc2.textContent = pourcentage;
    screen.appendChild(pourc2);
}

//MAINTENANT, IL NE MANQUE QUE :

// - CONTROLE PAR LE CLAVIER ;
// - CONTROLE CE QUI SE PASSE SI ON APPUIE SUR UNE OPERATION APRES AVOIR APPUYE UNE AUTRE OPERATION;
// - CHANGER LA FONTE.
// - SI IL N'Y A PAS DE NOMBRES SUR L'ECRAN, ZERO DEVIENT ZERO VIRGULE.