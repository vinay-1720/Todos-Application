let inputelement=document.createElement('input');
inputelement.type="checkbox";
inputelement.id="mycheckbox";
document.body.appendChild(inputelement)

let label=document.createElement('label');
label.setAttribute('for','mycheckbox')
label.textContent='Graduated';
document.body.appendChild(label)