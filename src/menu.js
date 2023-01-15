function Menu (i, it, d, p) {
    this._img = i;
    this._item = it;
    this._description = d;
    this._price = p;
}
  
let menuObject;

const one = {
    pi : './images/volteado_de_pina.jpg',
    it : 'Chocolate Cake',
    de : 'Tasty inside treat',
    pr : '2.50'
}
  
const two = {
    pi : './images/volteado_de_pina.jpg',
    it : 'Vanilla Pudding',
    de : 'Pure genius dessert',
    pr : '1.99'
}

const three = {
    pi : './images/volteado_de_pina.jpg',
    it : 'Dallas Apple Pie',
    de : 'The best tasty pie in the nation',
    pr : '2.75'
}
  
const four = {
      
    pi : './images/volteado_de_pina.jpg',
    it : 'Buttercup Cakes',
    de : 'Made with pure love',
    pr : '1.45'
  
}

const five = {
      
    pi : './images/volteado_de_pina.jpg',
    it : 'Fruity Cakes',
    de : 'Using real fruits',
    pr : '.99'
  
}
  
const six = {
      
    pi : './images/volteado_de_pina.jpg',
    it : 'Coco Puff Treats',
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
    // console.log(body_content + ' ll')
    
}
  
const body_content = document.createElement('div');
body_content.classList.add('body-content');
const addMenu = (m) => {
    let x;
    // const c = document.querySelector('.body-content');
    
    const fetch = body_content.innerHTML
    
    x = `<div class="item-container">
        <img src="./images/choco_flan.jpg" alt="Choco Flan">
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