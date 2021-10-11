const uiControlsObject = document.querySelector('.uiControls');
// the stop variable is useful to get a single onmousemove event
// at a time
let stop = false;

document.querySelector('body').onmousemove = () => {
    if (!stop) {
        stop = true;
        uiControlsObject.style.visibility = 'visible';
        setTimeout(() => {
            uiControlsObject.style.visibility = 'hidden';
            stop = false;
        }, 1500);
    }
}
