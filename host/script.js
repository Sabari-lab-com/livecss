let sec = 3;
const texts = document.querySelectorAll('.typing-it');
texts.forEach(text => {
    const len = text.textContent.length;
    if (len > 10) {
        sec = Math.round((len / 6))
    }
    text.style.width = len + 'ch';
    text.style.animation =
        `typing-it ${sec}s steps(${len}) forwards,
         blink-it .5s infinite alternate`;

    setTimeout(() => {
        text.style.borderRight = "none";
    }, sec * 1000);
});

// for output

const text_run = document.querySelectorAll('.typing-text');
text_run.forEach(text => {
    const len = text.textContent.length;
    if (len > 10) {
        sec = Math.round((len / 6))
    }
    text.style.width = len + 'ch';
    text.style.animation =
        `typing ${sec}s steps(${len}) forwards,
         blink .5s infinite alternate`;

});

const text_loop = document.querySelectorAll('.typing-text-loop');
text_loop.forEach(text => {
    const len = text.textContent.length;
    if (len > 10) {
        sec = Math.round((len / 6))
    }
    text.style.width = len + 'ch';
    text.style.animation =
        `typing ${sec}s steps(${len}) infinite alternate,
         blink .5s infinite alternate`;

});


const text_cusor = document.querySelectorAll('.typing-text-stop');
text_cusor.forEach(text => {
    const len = text.textContent.length;
    if (len > 10) {
        sec = Math.round((len / 6))
    }
    text.style.width = len + 'ch';
    text.style.animation =
        `typing ${sec}s steps(${len}) forwards,
         blink .5s infinite alternate`;

         setTimeout(() => {
        text.style.borderRight = "none";
    }, sec * 1000);

});

// text typing section is over




