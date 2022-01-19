const aquariusBtn = document.getElementById('aquarius');
const piscesBtn = document.getElementById('pisces');
const ariesBtn = document.getElementById('aries');
const taurusBtn = document.getElementById('taurus');
const geminiBtn = document.getElementById('gemini');
const cancerBtn = document.getElementById('cancer');
const leoBtn = document.getElementById('leo');
const virgoBtn = document.getElementById('virgo');
const libraBtn = document.getElementById('libra');
const scorpioBtn = document.getElementById('scorpio');
const sagittariusBtn = document.getElementById('sagittarius');
const capricornBtn = document.getElementById('capricorn');
const bottomDiv = document.querySelector('bottom');

aquariusBtn.addEventListener('click', function() {
    userPicked('aquarius');
});

piscesBtn.addEventListener('click', function() {
    userPicked('pisces');
});

ariesBtn.addEventListener('click', function() {
    userPicked('aries');
});

taurusBtn.addEventListener('click', function() {
    userPicked('taurus');
});

geminiBtn.addEventListener('click', function() {
    userPicked('gemini');
});

//create function userPicked();
function userPicked(zodiac) {
    //console.log(`user picked ${zodiac}`);
    //window.alert(`user picked ${zodiac}`);
    //bottom.innerText('user picked a '+ zodiac + '!');
    //bottomDiv.innerHTML('<h2>user picked a '+ zodiac + '!</h2>');

}