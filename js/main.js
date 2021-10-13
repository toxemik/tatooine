// get the .ui elements
const uiElements = document.querySelectorAll('.ui:not(.menuPanel, .menuToggler)');
// get the .menuPanel element
const menuTogglerElement = document.querySelector('.menuPanel');

// the stop variable is useful to get a single onmousemove event
// at a time
let stop = false;

// on the mouse move event, show ui commands
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

// the menu panel state (visible | hidden)
let menuPanelVisible = false;

// on the mouse click event on the menu toggler, show the menu panel
document.querySelector('.menuToggler').onclick = () => {
    if(!menuPanelVisible) {
        menuTogglerElement.style.visibility = 'visible';
        menuPanelVisible = true;
    } else {
        menuTogglerElement.style.visibility = 'hidden';
        menuPanelVisible = false;
    }
}
