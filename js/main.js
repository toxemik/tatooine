const uiElements = document.querySelectorAll('.ui');
// the stop variable is useful to get a single onmousemove event
// at a time
let stop = false;

document.querySelector('body').onmousemove = () => {
    if (!stop) {
        stop = true;
        for(const element of uiElements)
            element.style.visibility = 'visible';
        setTimeout(() => {
            for(const element of uiElements)
                element.style.visibility = 'hidden';
            stop = false;
        }, 1500);
    }
}
