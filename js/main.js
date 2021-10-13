const data = {
    tatooine: {
        img: "images/f27903e009_50179578_tatooine-lucasfilm.jpeg",
        title: "La planète-désert Tatooine",
        description: "Tatooine est une planète-désert de l’univers de fiction Star Wars. Située dans la Bordure extérieure, cette planète orbite autour des étoiles binaires Tatoo I et II. Il s'agit du monde d'origine de la famille Skywalker."
    },
    mosEspa: {
        img: "images/1600px-Star_Wars_Episode_One_Village_-_05.jpeg",
        title: "Mos Espa",
        description: "Avant que l'avènement de l'Empire ne contraigne le seigneur du crime Jabba le Hutt à transférer ses activités, Mos Espa est la plus grande ville de Tatooine, et d'une certaine façon, sa capitale."
    },
    tatooineTraders: {
        img: "images/Star_Tours_-_The_Adventure_Continues_(29380304448).jpeg",
        title: "Tatooine Traders",
        description: "La boutique Tatooine Traders à la sortie de <i>Star Tours: The Adventures Continue</i> à Walt Disney World Resort."
    },
    systemesBinaires: {
        img: "images/1600px-Kepler-16.jpeg",
        title: "Systèmes binaires",
        description: "Tatooine a marqué la culture par l'iconique scène du coucher de soleil binaire dans <i>Un nouvel espoir</i> sorti en 1977. En effet, le film y présente le concept d'objet circumbinaire, dont le premier a été découvert en 1993. Depuis, les exoplanètes découvertes dans des systèmes binaires sont parfois surnommées « Tatooine »."
    },
    quartierEsclaves: {
        img: "images/Ksar_Ouled_Soltane_01.jpeg",
        title: "Quartier des Esclaves",
        description: "Lieu de tournage du quartier des esclaves de Mos Espa où résident Shmi et Anakin Skywalker dans la prélogie."
    }
}

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

// get the current page name
let currentPage = 'tatooine';

// load the content related to the page arg (menu item)
function loadContent(page) {
    for(const content in data) {
        if(content == page) {
            // change the current page name
            currentPage = page
            // load the content
            document.querySelector('img').setAttribute('src', data[page].img);
            document.querySelector('.title').innerHTML = data[page].title;
            document.querySelector('.description').innerHTML = data[page].description;
            // hide the menu
            menuTogglerElement.style.visibility = 'hidden';
            menuPanelVisible = false;
        }
    }
}
