import flans from './images/choco_flan.jpg';
import empandas from './images/Empanadas_de_cajeta_y_pina.jpeg';
import roscas from './images/Rosca_de_panque.jpg';
import besitos from './images/besitos_de_nuez.jpg';
import galletas from './images/Galletas_con_glaseado.jpeg';
import pastels from './images/pastel_de_zanahoria.jpg';
import pays from './images/pay_de_queso_fresco.jpg';

const choco = new Image();
choco.src = flans;

const empanda = new Image();
empanda.src = empandas;

const rosca = new Image();
rosca.src = roscas;

const besito = new Image();
besito.src = besitos;

const galleta = new Image();
galleta.src = galletas;

const pay = new Image();
pay.src = pays;

const pastel = new Image();
pastel.src = pastels;

function Menu (i, it, d, p) {
    this._img = i;
    this._item = it;
    this._description = d;
    this._price = p;
}
  
let menuObject;

const one = {
    pi : choco.src,
    it : 'Choco Flan',
    de : 'Real chocolate and love.',
    pr : '2.50'
}
  
const two = {
    pi : rosca.src,
    it : 'Rosca de Panque',
    de : 'Pure genius dessert.',
    pr : '1.99'
}

const three = {
    pi : pay.src,
    it : 'Pay de Queso Fresco',
    de : 'The best tasty pie in the nation.',
    pr : '2.75'
}
  
const four = {
      
    pi : pastel.src,
    it : 'Pastel de Zanahoria',
    de : 'Made with pure love.',
    pr : '1.45'
  
}

const five = {
      
    pi : besito.src,
    it : 'Besitos de Nuez',
    de : 'Have a sweet kiss.',
    pr : '.99'
  
}
  
const six = {
      
    pi : empanda.src,
    it : 'Empanadas de Cajeta',
    de : 'Just try it and you will see',
    pr : '1.50'
  
}
  
let myMenu = [one, two, three, four, five, six];
  
let y = 0

const loadMenu = () => {
    for (let i = 0; i < myMenu.length; i++) {
        menuObject = new Menu(
            myMenu[i].pi,
            myMenu[i].it,
            myMenu[i].de,
            myMenu[i].pr  
        );  
        addMenu(menuObject);
    }   
}
  
const body_content = document.createElement('div');
body_content.classList.add('body-content');
const addMenu = (m) => {
    let x;
    
    const fetch = body_content.innerHTML
   
    console.log(m._img + ' jijkjk')
    x = `<div class="item-container">
        <img src="${m._img}" alt="${m._description}">
        <div class="info-container">
            <p>${m._item}</p>
            <p>${m._description}</p>
            <p>${m._price}</p>
        </div>
      
    </div>`;
    body_content.innerHTML = x + fetch  
}
loadMenu()
const h = () => {
    return body_content;
}
  
export default h;