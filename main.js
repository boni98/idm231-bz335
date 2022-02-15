const displayObj = document.getElementById('display');
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

function fade2Content() {
    document.body.classList.remove("blackScreen");
}

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

cancerBtn.addEventListener('click', function() {
    userPicked('cancer');
});

leoBtn.addEventListener('click', function() {
    userPicked('leo');
});

virgoBtn.addEventListener('click', function() {
    userPicked('virgo');
});

libraBtn.addEventListener('click', function() {
    userPicked('libra');
});

scorpioBtn.addEventListener('click', function() {
    userPicked('scorpio');
});

sagittariusBtn.addEventListener('click', function() {
    userPicked('sagittarius');
});

capricornBtn.addEventListener('click', function() {
    userPicked('capricorn');
});

//create function userPicked();
function userPicked(zodiacBtn) {
    console.log('User picked ' + zodiacBtn);

    switch (zodiacBtn) {
        case 'aquarius':
            console.log('aquarius was clicked');
            displayObj.src = 'images/aquarius.jpg';
            displayObj.classList.add('visible');
        break;
        case 'pisces':
            console.log('pisces was clicked');
            displayObj.src = 'images/pisces.jpg';
        break;
        case 'aries':
            console.log('aries was clicked');
            displayObj.src = 'images/aries.jpg';
        break;
        case 'taurus':
            console.log('taurus was clicked');
            displayObj.src = 'images/taurus.jpg';
        break;
        case 'gemini':
            console.log('gemini was clicked');
            displayObj.src = 'images/gemini.jpg';
        break;
        case 'cancer':
            console.log('cancer was clicked');
            displayObj.src = 'images/cancer.jpg';
        break;
        case 'leo':
            console.log('leo was clicked');
            displayObj.src = 'images/leo.jpg';
        break;
        case 'virgo':
            console.log('virgo was clicked');
            displayObj.src = 'images/virgo.jpg';
        break;
        case 'libra':
            console.log('libra was clicked');
            displayObj.src = 'images/libra.jpg';
        break;
        case 'scorpio':
            console.log('scorpio was clicked');
            displayObj.src = 'images/scorpio.jpg';
        break;
        case 'sagittarius':
            console.log('sagittarius was clicked');
            displayObj.src = 'images/sagittarius.jpg';
        break;
        case 'capricorn':
            console.log('capricorn was clicked');
            displayObj.src = 'images/capricorn.jpg';
        break;
        default:
            console.log('A button was clicked!');
    }
}