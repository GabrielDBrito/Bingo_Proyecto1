function getNames3x3() {
    // Obtenemos los valores de los campos de texto aquí
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const name3 = document.getElementById("name3").value;
    const name4 = document.getElementById("name4").value;

    if(name1!="" & name2!="" & name3!="" & name4!=""){
  
    const url = `bingo3x3.html?name1=${name1}&name2=${name2}&name3=${name3}&name4=${name4}`;
  
    window.location.href = url;
    }
    else{
        alert("Debes ingresar un nombre para cada jugador");
    }
}

function getNames4x4() {
    // Obtenemos los valores de los campos de texto aquí
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const name3 = document.getElementById("name3").value;
    const name4 = document.getElementById("name4").value;

    if(name1!="" & name2!="" & name3!="" & name4!=""){
  
    const url = `bingo4x4.html?name1=${name1}&name2=${name2}&name3=${name3}&name4=${name4}`;
  
    window.location.href = url;
    }
    else{
        alert("Debes ingresar un nombre para cada jugador");
    }
}


function getNames5x5() {
    // Obtenemos los valores de los campos de texto aquí
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const name3 = document.getElementById("name3").value;
    const name4 = document.getElementById("name4").value;

    if(name1!="" & name2!="" & name3!="" & name4!=""){
  
    const url = `bingo5x5.html?name1=${name1}&name2=${name2}&name3=${name3}&name4=${name4}`;
  
    window.location.href = url;
    }
    else{
        alert("Debes ingresar un nombre para cada jugador");
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

function record(){
    dictionary=getOrCreateDictionary();
    const list = document.getElementById('record');
    const items = list.getElementsByTagName('li');

    const keys = Object.keys(dictionary);
    if (keys.length > 0) {
    for (let i = 0; i < items.length && i < keys.length; i++) {
        const key = keys[i];
        const value = dictionary[key];
        items[i].textContent = `${key}: ${value} victorias`;
    }
    } else {
    console.error('The dictionary is empty');
    }
}
record();
