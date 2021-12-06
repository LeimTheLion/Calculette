// GENERAUX //
const screenHTML = document.querySelector('.screen');
const screen = document.createElement('p');
screenHTML.appendChild(screen);
screen.classList.add("inScreen");

// NOMBRES //
let n = 0;
const allNumbers = document.querySelectorAll('.number');

// VIRGULE //
let writeVirg;

// OPERATIONS //
const allOpe = document.querySelectorAll('.ope');
let pluss = 0;
let moinss = 0;
let multt = 0;
let divv = 0;
let ress = 0;
let operand;
const addition = [];
const soustraction = [];
const multiplication = [];
const division = [];
let résultAdd;
let numCount = 0;
let lastOpe;
let addAll;
let sousAll;
let multAll;
let divisAll;
let arrayAdd;

// EASTER EGG //
let easter = 0;

// INSERER LES NOMBRES //
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
};
function no3() {
    const write3 = document.createTextNode("3");
    screen.appendChild(write3);
}
const trois = document.getElementById('trois');
trois.onclick = () => {
    enterOperand2();
    numCount++;
    no3();
    n++;
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
};
function no0() {
    if (screen.textContent == "") {
        const write0 = document.createTextNode("0.");
        n++;
        checkVirg();
        screen.appendChild(write0);
    }
    else if (screen.textContent !== "") {
        const write0 = document.createTextNode("0");
        screen.appendChild(write0);
    }
}
const zéro = document.getElementById('zéro');
zéro.onclick = () => {
    enterOperand2();
    numCount++;
    no0();
    n++;
};

// VIRGULE //
function checkVirg() {
    if (screen.textContent.search(/[.]/) == -1) {
        virgule.disabled = false;
    }
    else if (screen.textContent.search(/[.]/) !== -1) {
        virgule.disabled = true;
    }
}
function virg() {
    if (screen.textContent == "") {
        writeVirg = document.createTextNode("0.");
        screen.appendChild(writeVirg);
        checkVirg();

    }
    else if (screen.textContent !== "") {
        writeVirg = document.createTextNode(".");
        screen.appendChild(writeVirg);
        checkVirg();
    }
}
const virgule = document.getElementById('virg');
virgule.onclick = () => {
    checkVirg();
    enterOperand2();
    numCount++;
    virg();
    n++;
};

// EFFACER ET ANNULER //
const eff = document.getElementById('effacer');
eff.onclick = () => {
    if (easter !== 0) {
        console.log(easter);
        window.location.reload();
    }
    else if (easter == 0) {
        screen.textContent = "";
        n = 0;
        pluss = 0;
        moinss = 0;
        multt = 0;
        divv = 0;
        operand = "";
        addition.length = 0;
        soustraction.length = 0;
        multiplication.length = 0;
        division.length = 0;
        allNumbers.forEach(number => number.disabled = false);
        virgule.disabled = false;
    }
}
const ann = document.getElementById('annuler');
ann.onclick = () => {
    screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1);
    checkVirg();
    allNumbers.forEach(number => number.disabled = false);
    virgule.disabled = false;
}

// OPERATIONS //
function enterOperand2() {
    if (numCount == 0) {
        screen.textContent = "";
        checkVirg();
    }
}
const plus = document.getElementById('plus');
plus.onclick = () => {
    giveResult();
    continueAfterRes();
    checkVirg();
    numCount = 0;
    pluss++;
    moinss = 0;
    multt = 0;
    divv = 0;
    n = 0;
    allNumbers.forEach(number => number.disabled = false);
    virgule.disabled = false;
    operand = Number(screen.textContent);
    addition.push(operand);
}
const moins = document.getElementById('moins');
moins.onclick = () => {
    giveResult();
    continueAfterRes();
    checkVirg();
    numCount = 0;
    moinss++;
    pluss = 0;
    multt = 0;
    divv = 0;
    n = 0;
    allNumbers.forEach(number => number.disabled = false);
    virgule.disabled = false;
    operand = Number(screen.textContent);
    soustraction.push(operand);
}
const croix = document.getElementById('croix');
croix.onclick = () => {
    giveResult();
    continueAfterRes();
    checkVirg();
    numCount = 0;
    multt++;
    pluss = 0;
    moinss = 0;
    divv = 0;
    n = 0;
    allNumbers.forEach(number => number.disabled = false);
    virgule.disabled = false;
    operand = Number(screen.textContent);
    multiplication.push(operand);
}
const divi = document.getElementById('divi');
divi.onclick = () => {
    giveResult();
    continueAfterRes();
    checkVirg();
    numCount = 0;
    divv++;
    pluss = 0;
    moinss = 0;
    multt = 0;
    n = 0;
    allNumbers.forEach(number => number.disabled = false);
    virgule.disabled = false;
    operand = Number(screen.textContent);
    division.push(operand);
}
function continueAfterRes() {
    if (ress !== 0) {
        checkVirg();
        n = 0;
        pluss = 0;
        moinss = 0;
        multt = 0;
        divv = 0;
        addition.length = 0;
        soustraction.length = 0;
        multiplication.length = 0;
        division.length = 0;
    }
}
let plusmoins = document.getElementById('plusmoins');
plusmoins.onclick = () => {
    let négatif = Number(screen.textContent) * -1;
    screen.textContent = "";
    screen.textContent = négatif;
    checkVirg();
}
let pourc = document.getElementById('pourc');
pourc.onclick = () => {
    let pourcentage = Number(screen.textContent) / 100;
    screen.textContent = "";
    screen.textContent = pourcentage;
    checkVirg();
}

// RESULTAT //
const result = document.getElementById('result');
result.onclick = () => {
    ress++;
    checkVirg();
    easterEgg();
    giveResult();
    continueAfterRes();
}
function giveResult() {
    if (pluss !== 0) {
        lastOpe = Number(screen.textContent);
        addAll = parseFloat((operand + lastOpe).toFixed(5));
        if (addAll == Infinity || addAll == -Infinity) {
            easter++;
            easterEgg();
        }
        else if (addAll !== Infinity) {
            screen.textContent = "";
            const addThis = document.createTextNode(addAll);
            checkVirg();
            screen.appendChild(addThis);
            allNumbers.forEach(number => number.disabled = true);
        }
    }
    else if (moinss !== 0) {
        lastOpe = Number(screen.textContent);
        sousAll = parseFloat((operand - lastOpe).toFixed(5));
        if (sousAll == Infinity || sousAll == -Infinity) {
            easter++;
            easterEgg();
        }
        else if (sousAll !== Infinity) {
            screen.textContent = "";
            const sousThis = document.createTextNode(sousAll);
            checkVirg();
            screen.appendChild(sousThis);
            allNumbers.forEach(number => number.disabled = true);
        }
    }
    else if (multt !== 0) {
        lastOpe = Number(screen.textContent);
        multAll = parseFloat((operand * lastOpe).toFixed(5));
        if (multAll == Infinity || multAll == -Infinity) {
            easter++;
            easterEgg();
        }
        else if (multAll !== Infinity) {
            screen.textContent = "";
            const mulThis = document.createTextNode(multAll);
            checkVirg();
            screen.appendChild(mulThis);
            allNumbers.forEach(number => number.disabled = true);
        }
    }
    else if (divv !== 0) {
        lastOpe = Number(screen.textContent);
        divisAll = parseFloat((operand / lastOpe).toFixed(5));
        if (divisAll == Infinity || divisAll == -Infinity) {
            easter++;
            easterEgg();
        }
        else if (divisAll !== Infinity) {
            screen.textContent = "";
            const diviThis = document.createTextNode(divisAll);
            checkVirg();
            screen.appendChild(diviThis);
            allNumbers.forEach(number => number.disabled = true);
        }
    }
}

// BONUS //
function easterEgg() {
    if (easter !== 0) {
        let bofEaster = document.createElement('p');
        bofEaster.textContent = "Infinity";
        bofEaster.classList.add('egg');
        bofEaster.setAttribute('href', "https://www.youtube.com/watch?v=GImvJWEehkA");
        bofEaster.style.color = "darkred";
        bofEaster.style.textDecoration = "underline";
        bofEaster.onclick = () => { window.open("https://www.youtube.com/watch?v=GImvJWEehkA", '_blank') };
        screenHTML.removeChild(screen);
        screenHTML.appendChild(bofEaster);
        allNumbers.forEach(number => number.disabled = true);
        virgule.disabled = true;
        plus.disabled = true;
        moins.disabled = true;
        croix.disabled = true;
        divi.disabled = true;
        result.disabled = true;
        pourc.disabled = true;
        ann.disabled = true;
        plusmoins.disabled = true;
    }
}



//MAINTENANT, IL NE MANQUE QUE :

// - CONTROLE PAR LE CLAVIER ;
// - CONTROLE CE QUI SE PASSE SI L'ON APPUIE SUR UNE OPERATION APRES AVOIR APPUYE UNE AUTRE OPERATION; (fais comme ça : check++, console.log, pour voir qui donne comme résultat "NaN" ; on va ensuite le transformer en "ERREUR" ...)
// - CHANGER LA FONTE.