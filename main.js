const displayObj = document.getElementById('zodiac');
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
    const titleObj = document.getElementById('title');
    const dateObj = document.getElementById('date');
    const descriptionObj = document.getElementById('description');

    switch (zodiacBtn) {
        case 'aquarius':
            speakers.src = `sounds/aquarius.mp3`;
            speakers.play();
            console.log('aquarius was clicked');
            displayObj.src = 'images/aquarius.png';
            displayObj.classList.add('visible');
            titleObj.innerHTML = "Aquarius \"The Water Bearer\"";
            dateObj.innerHTML = "January 20 - February 18"
            descriptionObj.innerHTML = "Aquarius resembles a royal blue mermaid. A dark blue tattoo resembling the Aquarius zodiac symbol rests right under her collarbone. Aquarius also wields an urn that acts as the basis of the Water Magic she employs in battle. She is a moody and ill-tempered Celestial Spirit who often threatens to kill her owner, Lucy (her master). Despite this, Aquarius does care for Lucy's well-being. She is very kind and loving towards her boyfriend, Scorpio, to whom she shows a completely different side of herself. ";
            modal.hidden = !modal.hidden;
            break;
        case 'pisces':
            speakers.src = `sounds/pisces.mp3`;
            speakers.play();
            console.log('pisces was clicked');
            displayObj.src = 'images/pisces.png';
            titleObj.innerHTML = "Pisces \"The Paired Fish\"";
            dateObj.innerHTML = "February 19 - March 20"
            descriptionObj.innerHTML = "Pisces is made up by two separate entities, which, in their animal form, are huge sea creatures resembling fish with elongated bodies similar to those of eels. It's true, humanoid form is that of a mother (the light fish) and her son (the dark one). Pisces use Water Magic as their primary source of combat. The mother employs this Magic as a Caster type, being able to create masses of water accompanying her motions when she kicks in order to increase the damage inflicted to the target. On the other hand, the son uses it as a Holder Magic, wielding a trident to send waves focused around the weapon's tip against the opponent when he lunges at them. When Pisces are in their fish form, they appear to be quite eccentric. When in their human form, the son has a comedic habit, using \"mom\" to refer to not only his mother, but also those who summoned the two of them.";
            modal.hidden = !modal.hidden;
            break;
        case 'aries':
            speakers.src = `sounds/aries.mp3`;
            speakers.play();
            console.log('aries was clicked');
            displayObj.src = 'images/aries.png';
            titleObj.innerHTML = "Aries \"The Ram\"";
            dateObj.innerHTML = "March 21 - April 19"
            descriptionObj.innerHTML = "Aries is a female spirit who resembles a young woman with pink hair, brown eyes and a pair of twisted horns on her head. She wears clothes that have a white and fluffy wool-like getup. Aries' Wool Magic allows her to create and manipulate pink wool that covers opponents by distracting them, sending them into a relaxed and comfortable state. She is able to create enough wool to entangle many opponents at once, as well as use it underwater. Aries is very shy and polite. She frequently apologizes, regardless of whether or not she is truly at fault.";
            modal.hidden = !modal.hidden;
            break;
        case 'taurus':
            speakers.src = `sounds/taurus.mp3`;
            speakers.play();
            console.log('taurus was clicked');
            displayObj.src = 'images/taurus.png';
            titleObj.innerHTML = "Taurus \"The Golden Bull\"";
            dateObj.innerHTML = "April 20 - May 20"
            descriptionObj.innerHTML = "Taurus is an extremely tall, heavily muscular and athletic humanoid whose physical features are highly reminiscent of a bull, as his theme implies. He wore a cingulum, whose belt has the Taurus symbol on it, and a shoulder pad with the same symbol on it on his left shoulder with two straps that lead to his back. Taurus is a melee-oriented Celestial Spirit who utilizes an axe in battle. He is a very perverted and fun-loving character. However, when the time calls for it, he can be focused to protect his summoner as he becomes quite the formidable warrior.";
            modal.hidden = !modal.hidden;
            break;
        case 'gemini':
            speakers.src = `sounds/gemini.mp3`;
            speakers.play();
            console.log('gemini was clicked');
            displayObj.src = 'images/gemini.png';
            titleObj.innerHTML = "Gemini \"The Twins\"";
            dateObj.innerHTML = "May 21 - June 21"
            descriptionObj.innerHTML = "Gemini are two individual twins of a single Celestial Spirit. They are both small creatures with blue colored bodies and two antennae. The Gemini twins have the ability to transform flawlessly into anyone that they have contact with. Once transformed, they will gain the transformed person's knowledge, Magic, and their recent thoughts. Depending on the Mage they're contracted with, they undergo personality changes to reflect said Mage's personality. Gemi and Mini are generally shown to be very joyful Spirits. While waiting for orders, they dance and make various poses.";
            modal.hidden = !modal.hidden;
            break;
        case 'cancer':
            speakers.src = `sounds/cancer.mp3`;
            speakers.play();
            console.log('cancer was clicked');
            displayObj.src = 'images/cancer.png';
            titleObj.innerHTML = "Cancer \"The Great Crab\"";
            dateObj.innerHTML = "June 22 - July 22"
            descriptionObj.innerHTML = "Cancer dresses in a way reminiscent of a hairdresser. His hair is black and braided in red cornrows that end in a shape that resembles crab's pincers. He always wears a blue striped shirt and dark trousers with two aquamarine stripes each side, also wearing boots in his feet. Cancer appears to be remarkably dexterous and fast, being capable of performing swift hand movements, and wielding his signature scissors with great speed. He has a very \"cool\" personality, he isn't very emotional or hotheaded.";
            modal.hidden = !modal.hidden;
            break;
        case 'leo':
            speakers.src = `sounds/leo.mp3`;
            speakers.play();
            console.log('leo was clicked');
            displayObj.src = 'images/leo.png';
            titleObj.innerHTML = "Leo AKA Loke \"The Lion\"";
            dateObj.innerHTML = "July 23 - August 22"
            descriptionObj.innerHTML = "Loke is a young man of average height, distinguished by his delicate facial features and his orange hair. He is the leader of the 12 Golden Zodiac Keys. He use Regulus, A type of Caster Magic related to his Celestial Spirit powers which allows him to produce the element of light from his body. Loke is very flirtatious with attractive women, being fourth ranked as The Wizard I'd Like To Be My Boyfriend Rankings of the Sorcerer Magazine. Whilst being glamorous, he does not take kindly to those who abuse or take advantage of women.";
            modal.hidden = !modal.hidden;
            break;
        case 'virgo':
            speakers.src = `sounds/virgo.mp3`;
            speakers.play();
            console.log('virgo was clicked');
            displayObj.src = 'images/virgo.png';
            titleObj.innerHTML = "Virgo \"The Maiden\"";
            dateObj.innerHTML = "August 24 - September 22"
            descriptionObj.innerHTML = "Virgo takes the form of a maid with shackles around her wrists, short, pink hair, and blue eyes. She wears a typical maid outfit, consisting of a black under coat and a white, frilled-trim apron and white knee-length socks with black Mary Jane shoes. Virgo exhibits great prowess in Earth Magic, with her form of Earth Magic revolving around the creation of holes. She is able to create holes to immobilize opponents and use as entryways to travel underground with her Diver. Virgo has a tendency to ask whether she should be punished after she has done something, regardless of if it was good or bad, indicating that she's a masochist.";
        break;
        case 'libra':
            speakers.src = `sounds/libra.mp3`;
            speakers.play();
            console.log('libra was clicked');
            displayObj.src = 'images/libra.png';
            titleObj.innerHTML = "Libra \"The Heavenly Scales\"";
            dateObj.innerHTML = "September 23 - October 23"
            descriptionObj.innerHTML = "Libra is a curvaceous woman with dark hair tied in an ox horn style. Her attire resembles a belly dancer's, while she carries a pair of scales, with thin cords running from her fingertips to the sides of the scales, so that she holds them in an almost puppeteer-like fashion. Libra uses this type of Gravity Magic which can alter either her target's gravity or her own. She is also able to change the body figure of anyone she wishes. Libra is a very quiet Spirit. She barely talks and always seems calm and serene, however, she quickly obeys Yukino's (her master) orders without questioning them.";
            modal.hidden = !modal.hidden;
            break;
        case 'scorpio':
            speakers.src = `sounds/scorpio.mp3`;
            speakers.play();
            console.log('scorpio was clicked');
            displayObj.src = 'images/scorpio.png';
            titleObj.innerHTML = "Scorpio \"The Scorpion\"";
            dateObj.innerHTML = "October 24 - November 21"
            descriptionObj.innerHTML = "Scorpio is a relatively tall, lean-built, dark-skinned man with short hair that is red on one side and white on the other. His tail is a large gun that is shaped like a scorpion's tail that has the word \"Antares\" written on it. He has a red sheet-like material around his waist that is kept up by his large belt that has the Scorpio symbol on it.  Scorpio is known for employing Sand Magic as his primary means of combat. He is shown casting such Magic through the use of his scorpion-like stinger, using it to produce sand which is focused to assault opponents at mid-to-long range. In contrast to his girlfriend Aquarius, Scorpio is much kinder, and much more respectful to Lucy (his master).";
            modal.hidden = !modal.hidden;
            break;
        case 'sagittarius':
            speakers.src = `sounds/sagittarius.mp3`;
            speakers.play();
            console.log('sagittarius was clicked');
            displayObj.src = 'images/sagittarius.png';
            titleObj.innerHTML = "Sagittarius \"The Archer\"";
            dateObj.innerHTML = "November 22 - December 21"
            descriptionObj.innerHTML = "Sagittarius is a tall, black-haired and lanky man sporting a horse costume. His weapon of choice, a large bow- is fastened to his back by a red strap along with an equally large quiver. He is able to nock and shoot more than one arrow at the same time, firing a barrage of arrows at once. Sagittarius is very formal, and shows great respect for his owner. He strives to carry out the orders he's given quickly and to the best of his capabilities.";
            modal.hidden = !modal.hidden;
            break;
        case 'capricorn':
            speakers.src = `sounds/capricorn.mp3`;
            speakers.play();
            console.log('capricorn was clicked');
            displayObj.src = 'images/capricorn.png';
            titleObj.innerHTML = "Capricorn \"The Goat\"";
            dateObj.innerHTML = "December 22 - January 19"
            descriptionObj.innerHTML = "Capricorn is a tall humanoid, towering over all of his fellow guild mates, who possesses many goat-like traits: his body is covered in short, brownish white fur, with longer tufts covering his lower face, resembling a goatee, and the back of his legs, which greatly resemble those of a goat, being slightly bent backwards and ending in dark hooves. Capricorn is an expert hand-to-hand combatant. He has demonstrated great physical prowess, as he is both exceptionally fast and strong. He is very respectful as he calls everybody with the honorific \"-sama\". He also shows fondness for writing and reciting poems.";
            modal.hidden = !modal.hidden;
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