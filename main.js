document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');

    const css = `
            .fullscreen-menu {
            display: none;
        }
    @media (max-width: 840px){

        .hamburger-menu {
            position: absolute;
            top: 2.5rem;
            left: 86%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 51px;
            height: 26px;
            cursor: pointer;
            z-index: 1100;
            visibility: visible;
        }

        .hamburger-menu .bar {
            width: 51px;
            height: 6px;
            background-color: white;
            border-radius: 3px;
        }


        .fullscreen-menu {
            display: none;
            position: fixed;
            width: calc(100% - 36px);
            height: calc(100% - 36px);
            margin: 20px;
            bottom: 0;
            background-color: #011827;
            z-index: 1001;
            color: white;
            text-align: center;
            opacity: 0;
            transition: opacity 0.1s ease-in 0.1s;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .fullscreen-menu.open {
            display: flex;
            opacity: 1;
            z-index: 1200;
        }


        .fullscreen-menu ul {
            list-style-type: none;
            padding: 0;
        }

        .fullscreen-menu li {
            margin: 20px 0;
        }

        .fullscreen-menu a {
            color: white;
            text-decoration: none;
            font-weight: 700;
            font-size: 36px;
            display: block;
            padding: 10px 0;
        }

        .close-menu {
            position: absolute;
            top: 20px;
            right: 20px;
            background: none;
            display: flex;
            z-index: 1200;
            transition: opacity 0.2s ease-in 0.2s;
            cursor: pointer;
            width: 40px;
            height: 40px;
            outline: none;
            border: none;
        }

        .close-menu .bar {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 40px;
            height: 6px;
            background-color: white;
            border-radius: 3px;
        }

 
        .close-menu .bar:nth-child(1) {
            transform: translate(-50%, -50%) rotate(45deg);
        }

        .close-menu .bar:nth-child(2) {
            transform: translate(-50%, -50%) rotate(-45deg);
        }

        .fade {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.47);
            z-index: 1000;

        }

        .fade.show {
            display: inline;
        }}
    `;

    style.innerHTML = css;

    document.head.appendChild(style);

    const menuButton = document.createElement('div');
    menuButton.id = 'menu-button';
    menuButton.classList.add('hamburger-menu');

    for (let i = 0; i < 3; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        menuButton.appendChild(bar);
    }

    document.body.appendChild(menuButton);

    const smallScreenMenu = document.createElement('div');
    smallScreenMenu.classList.add('fullscreen-menu');

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-menu');
    closeButton.style.visibility = 'hidden';

    for (let i = 0; i < 2; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        closeButton.appendChild(bar);
    }

    smallScreenMenu.appendChild(closeButton);

    const navMenu = document.createElement('ul');
    const listItems = document.querySelectorAll('.navigation-menu li');
    listItems.forEach(item => {
        const clonedItem = item.cloneNode(true);
        navMenu.appendChild(clonedItem);
    });

    smallScreenMenu.appendChild(navMenu);
    document.body.appendChild(smallScreenMenu);

    const fadeEffect = document.createElement('div');
    fadeEffect.classList.add('fade');
    document.body.appendChild(fadeEffect);

    menuButton.addEventListener('click', () => {
        if (closeButton.style.visibility === 'hidden') {
            closeButton.style.visibility = 'visible';
        }
        smallScreenMenu.classList.add('open');
        fadeEffect.classList.add('show');
    });

    closeButton.addEventListener('click', () => {
        smallScreenMenu.classList.remove('open');
        fadeEffect.classList.remove('show');
        closeButton.style.visibility = 'hidden';
    });
});
