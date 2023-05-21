
function calcform(el){
    var state = el.state.value;
    var age = el.age.value;
    var height = el.height.value;
    var weight = el.weight.value;
    var purpose = document.getElementById('purpose').value;
    var activity = document.getElementById('activity').value;
    var fail = '';
    if(state == '' || age == '' || height == '' || weight == '' || purpose == '' || activity == ''){
        fail = 'Заполните все поля';
    }else if(Number(age) == NaN || Number(weight) == NaN || Number(height) == NaN){
        fail = 'Введите данные корректно';
    }else if(Number(age) < 0 || Number(age) > 100 || Number(weight) < 0 || Number(weight) > 200 || Number(height) < 0 || Number(height) > 250){
        fail = 'Введите данные корректно';
    }
    if(fail != ''){
        alert(fail);
        return false;
    }
    var meta = 0
    if(state == 'Мужской'){
        meta = ((66.5 + (13.75 * Number(weight)) + (5.003 * Number(height)) - (6.775 * Number(age))) * Number(purpose)) * Number(activity);
    }else if(state == 'Женский'){
        meta = ((655.1 + (9.563 * Number(weight)) + (1.85 * Number(height)) - (4.676 * Number(age))) * Number(purpose)) * Number(activity);
    }
    var belok = 0; 
    var fat = 0;
    var carb = 0;
    if(Number(purpose) == 1.15){
        belok = ((meta / 100) * 30) / 4;
        fat = ((meta / 100) * 20) / 9;
        carb = ((meta / 100) * 50) / 4;
    }else if(Number(purpose) == 1){
        belok = ((meta / 100) * 25) / 4;
        fat = ((meta / 100) * 30) / 9;
        carb = ((meta / 100) * 45) / 4;
    }else if(Number(purpose) == 0.8){
        belok = ((meta / 100) * 30) / 4;
        fat = ((meta / 100) * 30) / 9;
        carb = ((meta / 100) * 40) / 4;
    }
    document.getElementById('r1').innerHTML = Math.round(meta);
    document.getElementById('r2').innerHTML = Math.round(belok);
    document.getElementById('r3').innerHTML = Math.round(fat);
    document.getElementById('r4').innerHTML = Math.round(carb);
    return false;
}
let button = document.querySelector(".button_calc");
button.onclick = function() {
    const el = document.getElementById('ReSult');
    el.scrollIntoView({behavior: "smooth"});
  };