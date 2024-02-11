function getBingoCard5x5() {
    // Crear arreglo con subarreglo para cada columna necesaria
    let arr = [
        [], // b (1-10)
        [], // i (11-20)
        [], // n (21-30)
        [], // g (31-40)
        []  // o (41-50)
    ];
    // Llenar cada subarreglo
    for(let i = 0; i < arr.length; i++) {
        // Asignar máximo y mínimo de acuerdo a posición
        let min = (i * 10) + 1;
        let max = min + 10;
        // Este ciclo termina cuando el subarreglo tenga 5 elementos
        while(arr[i].length < 5) {
            let num = Math.floor(Math.random() * (max - min)) + min;
            // Evitar que se repitan números
            if(!arr[i].includes(num)) {
                arr[i].push(num);
            }
        }
        // Ordenar
        arr[i].sort((a,b) => a - b);
    }
    arr[2][2] = '★';
    return arr;
}

function setBingoCardValues(bingoCard1, bingoCard2, bingoCard3,bingoCard4) {
    const boxes = document.querySelectorAll('#board1 .box');

    for (let i = 0; i < bingoCard1.length; i++) {
        const row = bingoCard1[i];

        for (let j = 0; j < row.length; j++) {
            const value = row[j];
            const boxIndex = (j * bingoCard1.length) + i;
            const box = boxes[boxIndex];
            box.textContent = value;
            if (value === '★') {
                box.className='box_filled'
            }
        }
    }

    const boxes2 = document.querySelectorAll('#board2 .box');

    for (let i = 0; i < bingoCard2.length; i++) {
        const row = bingoCard2[i];

        for (let j = 0; j < row.length; j++) {
            const value = row[j];
            const boxIndex = (j * bingoCard2.length) + i;
            const box = boxes2[boxIndex];
            box.textContent = value;
            if (value === '★') {
                box.className='box_filled'
            }
        }
    }

    const boxes3 = document.querySelectorAll('#board3 .box');

    for (let i = 0; i < bingoCard3.length; i++) {
        const row = bingoCard3[i];

        for (let j = 0; j < row.length; j++) {
            const value = row[j];
            const boxIndex = (j * bingoCard3.length) + i;
            const box = boxes3[boxIndex];
            box.textContent = value;
            if (value === '★') {
                box.className='box_filled'
            }
        }
    }

    const boxes4 = document.querySelectorAll('#board4 .box');

    for (let i = 0; i < bingoCard4.length; i++) {
        const row = bingoCard4[i];

        for (let j = 0; j < row.length; j++) {
            const value = row[j];
            const boxIndex = (j * bingoCard4.length) + i;
            const box = boxes4[boxIndex];
            box.textContent = value;
            if (value === '★') {
                box.className='box_filled'
            }
        }
    }
}

function randomRange(min, max) {
    if (generatedNumbers.length === max - min + 1) {
      return null; // todos los numeros han sido generados
    }
  
    let num;
    do {
      num = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (generatedNumbers.includes(num));
  
    generatedNumbers.push(num);
    return num;
}

function numGenerate5x5(){
    if(!finished){
        let num=randomRange(1,50);
        const indicator1 = document.querySelector('#section-1__left .square #indicator1');
        indicator1.textContent=num;
        checkNumber(num);
        nextTurn();
    }
    else{
        alert("El juego ha finalizado");
    }
}

function nextTurn(){
    const indicator2 = document.querySelector('#section-1__right .square #indicator2');
    let turn=indicator2.textContent;
    let turnPlus=Number(turn)+1;
    indicator2.textContent=turnPlus;
    //maximo de turnos//
    if(turnPlus===25){
        finished=true;
        scores();
    }

}

function checkNumber(number) {

    const boxes = document.querySelectorAll('#board1 .box');
    boxes.forEach((box) => {
        if (box.textContent === number.toString()) {
            box.classList.remove('box');
            box.classList.add('box_filled');
            filleds1.push(Number(box.id))
            checkBingo5x5(filleds1,1);
        }
    });

    const boxes2 = document.querySelectorAll('#board2 .box');
    
    boxes2.forEach((box) => {
        if (box.textContent === number.toString()) {
            box.classList.remove('box');
            box.classList.add('box_filled');
            filleds2.push(Number(box.id))
            checkBingo5x5(filleds2,2);
        }
    });

    const boxes3 = document.querySelectorAll('#board3 .box');
    boxes3.forEach((box) => {
        if (box.textContent === number.toString()) {
            box.classList.remove('box');
            box.classList.add('box_filled');
            filleds3.push(Number(box.id))
            checkBingo5x5(filleds3,3);
        }
    });

    const boxes4 = document.querySelectorAll('#board4 .box');
    boxes4.forEach((box) => {
        if (box.textContent === number.toString()) {
            box.classList.remove('box');
            box.classList.add('box_filled');
            filleds4.push(Number(box.id))
            checkBingo5x5(filleds4,4);
        }
    });
    if(finished){
        scores();
    }
  }

function checkBingo5x5(filleds,num) {
    points=0
    let allNumbers=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[5,10,15,20,25]];
    for (let i = 0; i < allNumbers.length; i++) {
        let allNumbersPresent = true;
        for(let j=0; j<allNumbers[i].length;j++){
            if(!filleds.includes(allNumbers[i][j])){
                allNumbersPresent = false;
            }
        }
        if (allNumbersPresent) {
          points += 1;
        }
    }
    allNumbers=[[1,7,13,19,25],[5,9,13,17,21]]
    for (let i = 0; i < allNumbers.length; i++) {
        let allNumbersPresent = true;
        for(let j=0; j<allNumbers[i].length;j++){
            if(!filleds.includes(allNumbers[i][j])){
                allNumbersPresent = false;
            }
        }
        if (allNumbersPresent) {
          points += 3;
        }
    }
    allNumbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
    let allNumbersPresent = true;
    if(!allNumbers.every(el => filleds.includes(el))){
        allNumbersPresent = false;
    }
    if (allNumbersPresent) {
        points += 5;
        finished=true;
      }

    if(num==1){
        const pts=document.querySelector('#square1 h5');
        pts.textContent=points.toString()+' pts'
    }

    if(num==2){
        const pts=document.querySelector('#square2 h5');
        pts.textContent=points.toString()+' pts'
    }

    if(num==3){
        const pts=document.querySelector('#square3 h5');
        pts.textContent=points.toString()+' pts'
    }

    if(num==4){
        const pts=document.querySelector('#square4 h5');
        pts.textContent=points.toString()+' pts'
    }
}

function bingoCardview1(){
    let div1 = document.getElementById("board1");
    if(window.getComputedStyle(div1).display==="none"){
        let div2 = document.getElementById("board2");
        div2.style.setProperty("display", "none");
        let div3 = document.getElementById("board3");
        div3.style.setProperty("display", "none");
        let div4 = document.getElementById("board4");
        div4.style.setProperty("display", "none");
        div1.style.setProperty("display", "grid");
    }
}

function bingoCardview2(){
    let div2 = document.getElementById("board2");
    if(window.getComputedStyle(div2).display==="none"){
        let div1 = document.getElementById("board1");
        div1.style.setProperty("display", "none");
        let div3 = document.getElementById("board3");
        div3.style.setProperty("display", "none");
        let div4 = document.getElementById("board4");
        div4.style.setProperty("display", "none");
        div2.style.setProperty("display", "grid");
    }
}

function bingoCardview3(){
    let div3 = document.getElementById("board3");
    if(window.getComputedStyle(div3).display==="none"){
        let div1 = document.getElementById("board1");
        div1.style.setProperty("display", "none");
        let div2 = document.getElementById("board2");
        div2.style.setProperty("display", "none");
        let div4 = document.getElementById("board4");
        div4.style.setProperty("display", "none");
        div3.style.setProperty("display", "grid");
    }
}

function bingoCardview4(){
    let div4 = document.getElementById("board4");
    if(window.getComputedStyle(div4).display==="none"){
        let div2 = document.getElementById("board2");
        div2.style.setProperty("display", "none");
        let div3 = document.getElementById("board3");
        div3.style.setProperty("display", "none");
        let div1 = document.getElementById("board1");
        div1.style.setProperty("display", "none");
        div4.style.setProperty("display", "grid");
    }
}

function names(){
    const urlParams = new URLSearchParams(window.location.search);
    const name1 = urlParams.get('name1');
    const name2 = urlParams.get('name2');
    const name3 = urlParams.get('name3');
    const name4 = urlParams.get('name4');

    // Set the text content of the elements
    document.getElementById("n1").textContent = name1;
    document.getElementById("n2").textContent = name2;
    document.getElementById("n3").textContent = name3;
    document.getElementById("n4").textContent = name4;
    
    localStorage.setItem('name1', urlParams.get('name1'));
    localStorage.setItem('name2', urlParams.get('name2'));
    localStorage.setItem('name3', urlParams.get('name3'));
    localStorage.setItem('name4', urlParams.get('name4'));
}

function extractNumber(str) {
    str = str.toString();
    const match = str.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  }

function sortNumbers(numbers) {
    return numbers.sort((a, b) => b - a);
}

function scores(){
    let p1=document.getElementById("p1")
    p1=p1.textContent;
    let p2=document.getElementById("p2")
    p2=p2.textContent;
    let p3=document.getElementById("p3")
    p3=p3.textContent;
    let p4=document.getElementById("p4")
    p4=p4.textContent;
    p1=extractNumber(p1);
    p2=extractNumber(p2);
    p3=extractNumber(p3);
    p4=extractNumber(p4);

    const numbers = [p1, p2, p3, p4];
    const sortedNumbers = sortNumbers(numbers);

    const pos1 = sortedNumbers[0];
    const pos2 = sortedNumbers[1];
    const pos3 = sortedNumbers[2];
    const pos4 = sortedNumbers[3];

    const p1Index = numbers.indexOf(p1);
    const p2Index = numbers.indexOf(p2);
    const p3Index = numbers.indexOf(p3);
    const p4Index = numbers.indexOf(p4);

    updateOrCreateVictories(localStorage.getItem('name1'),0);
    updateOrCreateVictories(localStorage.getItem('name2'),0);
    updateOrCreateVictories(localStorage.getItem('name3'),0);
    updateOrCreateVictories(localStorage.getItem('name4'),0);

    orderScores(p1,p1Index,localStorage.getItem('name1'));
    orderScores(p2,p2Index,localStorage.getItem('name2'));
    orderScores(p3,p3Index,localStorage.getItem('name3'));
    orderScores(p4,p4Index,localStorage.getItem('name4'));

    let div1 = document.getElementById("board1");
    div1.style.setProperty("display", "none");
    let div2 = document.getElementById("board2");
    div2.style.setProperty("display", "none");
    let div3 = document.getElementById("board3");
    div3.style.setProperty("display", "none");
    let div4 = document.getElementById("board4");
    div4.style.setProperty("display", "none");
    let scoreboard=document.getElementById("scoreboard")
    scoreboard.style.setProperty("display", "flow");
}

function orderScores(p,pIndex,name){
    //const nameAndNumber = '  ' + name + ' ' + p + 'pts  |  '+getValue(name)+' victories | ';
    if(pIndex===0){
        let p1 = document.getElementById("pts1");
        updateOrCreateVictories(name,1);
        p1.textContent+= ' | ' + name + ' ' + p + 'pts  -  '+getValue(name)+' victorias | ';
        
    }
    if(pIndex===1){
        let p2 = document.getElementById("pts2");
        p2.textContent+= ' | ' + name + ' ' + p + 'pts  -  '+getValue(name)+' victorias | ';;
    }
    if(pIndex===2){
        let p3 = document.getElementById("pts3");
        p3.textContent+= ' | ' + name + ' ' + p + 'pts  -  '+getValue(name)+' victorias | ';;
    }
    if(pIndex===3){
        let p4 = document.getElementById("pts4");
        p4.textContent+= ' | ' + name + ' ' + p + 'pts  -  '+getValue(name)+' victorias | ';;
    }
}


function getOrCreateDictionary() {
    let victories = localStorage.getItem('victories');
    if (!victories) {
      victories = {};
      localStorage.setItem('victories', JSON.stringify(victories));
    }
    return JSON.parse(victories);
}

function updateOrCreateVictories(key, value) {
    let victories = localStorage.getItem('victories');
    if (victories) {
        victories = JSON.parse(victories);
    } else {
        victories = {};
    }
    if (victories.hasOwnProperty(key)) {
        victories[key] += value;
    } else {
        victories[key] = value;
    }
    localStorage.setItem('victories', JSON.stringify(victories));
    return victories;
  }

function getValue(key) {
    const dictionary = JSON.parse(localStorage.getItem('victories'));
    return dictionary[key];
  }


function start5x5(){
    names();
    let bingoCard1 = getBingoCard5x5();
    let bingoCard2 = getBingoCard5x5();
    let bingoCard3 = getBingoCard5x5();
    let bingoCard4 = getBingoCard5x5();
    setBingoCardValues(bingoCard1,bingoCard2,bingoCard3,bingoCard4);

}


//ejecucion
let finished=false;
let filleds1=[13]
let filleds2=[13]
let filleds3=[13]
let filleds4=[13]
let generatedNumbers=[];
start5x5();

