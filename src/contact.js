import maderoMap from './images/madero.png';


const contact = () => {
    const loc = new Image();
    loc.src = maderoMap;
    const c = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const img = document.createElement('img');
    c.classList.add('contact');
    img.classList.add('contact-img');
    p1.textContent = 'Esperanza Villegas       #52-123-1234-567';
    p2.textContent = 'Madero, Tamalipas, Mexico';
    img.src = loc.src;
    c.appendChild(p1);
    c.appendChild(p2);
    c.appendChild(img);

    return c;
} 
export default contact;