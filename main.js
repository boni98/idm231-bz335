const displayObj = document.getElementById('display');
const descriptionbj = document.getElementById('description');

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

            descriptionbj.innerHTML = "aquarius";
            //zInstrument.innerHTML = "You are a trumpet!";
            //zDescription.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus tortor sit amet sem pellentesque posuere."
            //modal.hidden = !modal.hidden;
        break;
        case 'pisces':
            speakers.src = `sounds/pisces.mp3`;
            speakers.play();
            console.log('pisces was clicked');
            displayObj.src = 'images/pisces.jpg';

            descriptionbj.innerHTML = "pisces";

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

    const userSubmitBtn = document.getElementById('submit');

// add Event Listener
userSubmitBtn.addEventListener('click', function() {
    console.log('Submit button clicked!');

    const usersFirstName = document.getElementById('name').value;
    //console.log('Users name is: ' + usersFirstName);

    const userBday = new Date(document.getElementById('birthday').value);
    //console.log(userBday);

    const whichMonth = userBday.getUTCMonth() + 1;
    //console.log(`Users month is: ${whichMonth}`);

    const whichDayOfMonth = userBday.getUTCDate();
    //console.log(`Users birth day is: ${whichDayOfMonth}`);

    // Zodiac Algorithm
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "capricorn";
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "sagittarius";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "scorpio";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "libra";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        AstroSign = "virgo";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "leo";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "cancer";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        AstroSign = "gemini";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "taurus";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        AstroSign = "aries";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "pisces";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "aquarius";
    }
    
    userPicked(AstroSign);
});

// Modal Functionality
const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('btn-modal-close');
modalCloseBtn.addEventListener('click', function() {
    console.log('modal close clicked!');
    modal.hidden = !modal.hidden;
});