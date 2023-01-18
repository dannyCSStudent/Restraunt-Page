import './styles.css';
import home from './home';
import menu from './menu';
import contact from './contact';


const content = document.getElementById('content');

function loadPage () {
    const banner = document.createElement('div');
    const navBar = document.createElement('div');
    const btn_home = document.createElement('button');
    const btn_menu = document.createElement('button');
    const btn_contact = document.createElement('button');
    const body_container = document.createElement('div');

    banner.classList.add('banner'); 
    navBar.classList.add('nav-bar');
    body_container.classList.add('body-container');


    banner.textContent = "Ary's Pastries"; 
    btn_home.textContent = 'HOME';
    btn_home.setAttribute('id', 'home');
    btn_menu.textContent = 'MENU';
    btn_menu.setAttribute('id', 'menu');
    btn_contact.textContent = 'CONTACT';
    btn_contact.setAttribute('id', 'contact');

    navBar.appendChild(btn_home);
    navBar.appendChild(btn_menu);
    navBar.appendChild(btn_contact);
    body_container.appendChild(home());

    content.appendChild(navBar);
    content.appendChild(banner);
    content.appendChild(body_container);
}
loadPage();
const g = document.querySelector('.body-container');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const h = document.querySelector('.body-container');
        h.removeChild(h.firstElementChild);
        switch (button.id) {
            case 'home':
                g.appendChild(home());
                break
            case 'menu':
                g.appendChild(menu());
                break
            case 'contact':
                g.appendChild(contact());
                break
        }
    });
});