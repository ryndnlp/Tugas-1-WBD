// Typing effect
const words = ['Professional Valorant Player tapi boong', "Benci orang-orang yang suka pake ':v'", "Bubur lebih enak ga diaduk daripada diaduk"];
let i = 0;
let timer;

function typingEffect() {
    document.getElementById('type-animation').innerHTML = '';
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('type-animation').innerHTML += word.shift();
		} else {
            blinkingEffect(230);
            setTimeout(deletingEffect, 2000);
            setTimeout(stopBlinkingEffect, 2000);
			return;
		};
		timer = setTimeout(loopTyping, 100);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('type-animation').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return;
		};
		timer = setTimeout(loopDeleting, 50);
	};
	loopDeleting();
};

var blink;
var cursor;

function blinkingEffect(speed){
    blink = setInterval(() => {
        if(cursor) {
          document.getElementById('cursor').style.opacity = 0;
          cursor = false;
        }else {
          document.getElementById('cursor').style.opacity = 1;
          cursor = true;
        }
    }, speed);
}

function stopBlinkingEffect() {
    if(!cursor) {
        document.getElementById('cursor').style.opacity = 1;
      }
    clearInterval(blink);
}

typingEffect();

// Experiences
const exp = [
    //Organizational
    [
        {
            title: 'Mentor OSKM ITB 2019',
            duration: 'May 2019 - Aug 2019',
            content: 'Share knowledge and culture about ITB to new students.'
        },
        {
            title: 'Mentor SPARTA HMIF ITB 2020',
            duration: 'Jul 2020 - Aug 2020',
            content: 'Share knowledge and culture about HMIF ITB to new members.'
        }
    ],
    [
        {
            title: 'ITB NIM Finder',
            content: 'Make a web application that can find ITB students ID.'
        },
        {
            title: 'Personal Website',
            content: 'Make a web application about myself and things that I made.'
        }
    ]
]
const titles = document.querySelectorAll('#experiences .content-item-header h2');
const durations = document.querySelectorAll('#experiences .duration');
const contents = document.querySelectorAll('#experiences .content-item-body p');
const leftButton = document.querySelector('.chevron-left');
const rightButton = document.querySelector('.chevron-right');

let j = 0;
leftButton.addEventListener('click', (e) => {
    j--;
    if(j<0) j+=exp.length;
    changeText();
});

rightButton.addEventListener('click', (e) => {
    j++;
    if(j>1) j-=exp.length;
    changeText();
});

const changeText = () => {
    for(let k=0; k<exp.length; k++){
        titles[k].innerHTML = exp[j][k].title;
        if(exp[j][k].duration){
            durations[k].innerHTML = exp[j][k].duration;
        }else{
            durations[k].innerHTML = '';
        }
        contents[k].innerHTML = exp[j][k].content;
    }
}
