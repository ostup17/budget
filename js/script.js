let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    nav = document.getElementsByTagName('nav'),
    li = document.createElement('li'),
    heading = document.createElement('div'),
    title = document.querySelector('#title'),
    prompt1 = document.querySelector('#prompt');
    column = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv');
    

menu.insertBefore(menuItem[2], menuItem[1]);    

li.classList.add('menu-item');
li.innerHTML = 'Пятый пункт';
menu.appendChild(li);

document.body.style.backgroundImage = "url('./img/apple_true.jpg')";

title.textContent = 'Мы продаем только подлинную технику Apple';

let youorAttitude = prompt('Vashe Otnoshenie k reklame');
prompt1.textContent = youorAttitude;

adv.remove();




