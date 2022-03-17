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
            speakers.src = `sounds/aquarius.mp3`;
            speakers.play();
            console.log('aquarius was clicked');
            displayObj.src = 'images/aquarius.jpg';
            displayObj.classList.add('visible');
        break;
        case 'pisces':
            speakers.src = `sounds/pisces.mp3`;
            speakers.play();
            console.log('pisces was clicked');
            displayObj.src = 'images/pisces.jpg';
        break;
        case 'aries':
            speakers.src = `sounds/aries.mp3`;
            speakers.play();
            console.log('aries was clicked');
            displayObj.src = 'images/aries.jpg';
        break;
        case 'taurus':
            speakers.src = `sounds/taurus.mp3`;
            speakers.play();
            console.log('taurus was clicked');
            displayObj.src = 'images/taurus.jpg';
        break;
        case 'gemini':
            speakers.src = `sounds/gemini.mp3`;
            speakers.play();
            console.log('gemini was clicked');
            displayObj.src = 'images/gemini.jpg';
        break;
        case 'cancer':
            speakers.src = `sounds/cancer.mp3`;
            speakers.play();
            console.log('cancer was clicked');
            displayObj.src = 'images/cancer.jpg';
        break;
        case 'leo':
            speakers.src = `sounds/leo.mp3`;
            speakers.play();
            console.log('leo was clicked');
            displayObj.src = 'images/leo.jpg';
        break;
        case 'virgo':
            speakers.src = `sounds/virgo.mp3`;
            speakers.play();
            console.log('virgo was clicked');
            displayObj.src = 'images/virgo.jpg';
        break;
        case 'libra':
            speakers.src = `sounds/libra.mp3`;
            speakers.play();
            console.log('libra was clicked');
            displayObj.src = 'images/libra.jpg';
        break;
        case 'scorpio':
            speakers.src = `sounds/scorpio.mp3`;
            speakers.play();
            console.log('scorpio was clicked');
            displayObj.src = 'images/scorpio.jpg';
        break;
        case 'sagittarius':
            speakers.src = `sounds/sagittarius.mp3`;
            speakers.play();
            console.log('sagittarius was clicked');
            displayObj.src = 'images/sagittarius.jpg';
        break;
        case 'capricorn':
            speakers.src = `sounds/capricorn.mp3`;
            speakers.play();
            console.log('capricorn was clicked');
            displayObj.src = 'images/capricorn.jpg';
        break;
        default:
            console.log('A button was clicked!');
    }
}