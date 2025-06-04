// let key = prompt('hafta kunlarini kiriting');

// switch(key) {
//     case 'dushanba': alert('1');
//         break;
//     case 'seshanba': alert('2');
//     break;
//     case 'chorshanba': alert('3');
//     break;
//     case 'payshanba': alert('4');
//     break;
//     case 'juma': alert('5');
//     break;
//     case 'shanba': alert('6');
//     break;
//     case 'yakshanba': alert('7');
//     break;

//     default:
//         alert('error');
//         break;
// }

// setInterval(() => {
//     alert('interval ishladi')
    
// }, 2000);

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


setInterval(() => {
    let time = new Date();
    hours.innerHTML = String(time.getHours()).padStart(2, '0');
    minutes.innerHTML = String(time.getMinutes()).padStart(2, '0');
    seconds.innerHTML = String(time.getSeconds()).padStart(2, '0');
}, 1000);
