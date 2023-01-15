import './styles.css';
import bg from './us.png';
import home from './home';
import menu from './menu';


const content = document.getElementById('content');

function loadPage () {
    console.log(menu());
    const b = new Image();
    b.src = bg;

    const banner = document.createElement('div');
    const navBar = document.createElement('div');
    const btn_home = document.createElement('button');
    const btn_menu = document.createElement('button');
    const btn_contact = document.createElement('button');
    const body_container = document.createElement('div');
    // const body_content = document.createElement('div');

    banner.classList.add('banner'); 
    navBar.classList.add('nav-bar');
    body_container.classList.add('body-container');
    // home().classList.add('body-content');


    banner.textContent = "Ary's Pastries"; 
    btn_home.textContent = 'HOME';
    btn_menu.textContent = 'MENU';
    btn_contact.textContent = 'CONTACT';

    navBar.appendChild(btn_home);
    navBar.appendChild(btn_menu);
    navBar.appendChild(btn_contact);
    body_container.appendChild(menu());

    content.appendChild(navBar);
    content.appendChild(banner);
    content.appendChild(body_container);
}
loadPage();
