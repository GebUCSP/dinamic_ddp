var formulario = document.querySelector('#formulario');

document.documentElement.scrollTop = 0;
document.body.style.overflow = 'hidden';

formulario.addEventListener('submit', function(event) {
    document.body.style.overflow = 'auto';
    document.documentElement.scrollTop = document.documentElement.scrollHeight;

    event.preventDefault();

    var datosFormulario = new FormData(formulario);

    var contenedor = document.querySelector('#name');
    contenedor.innerHTML = datosFormulario.get('name');
    
    contenedor = document.querySelector('#born');
    contenedor.innerHTML = datosFormulario.get('born');
    

    contenedor = document.querySelector('#nationality');
    contenedor.innerHTML = datosFormulario.get('nationality');
    
    contenedor = document.querySelector('#description');
    contenedor.innerHTML = datosFormulario.get('description');

    contenedor = document.querySelector('#ocupation');
    contenedor.innerHTML = 'Soy ' + datosFormulario.get('ocupation');

    contenedor = document.querySelector('div.item-1 ul li h4');
    contenedor.innerHTML = 'Ingles: ' + datosFormulario.get('ingles');

    contenedor = document.querySelector('#main-container div.item-2 ul');
    contenedor.innerHTML = '<h4>Lenguaje: ' + datosFormulario.getAll('lenguajes[]').join('</h4><br><h4>Lenguaje: ');

    contenedor = document.querySelector('div.item-3 ul:nth-of-type(2)');
    let temp = document.createElement('h4');
    temp.textContent = datosFormulario.get('aptitudes');
    contenedor.append(temp);

    contenedor = document.querySelector('div.item-3 ul');
    contenedor.innerHTML = '<h4>Aptitud: ' + datosFormulario.getAll('hab[]').join('</h4><br><h4>Aptitud: ');

    contenedor = document.querySelector('footer ul li:nth-of-type(1) span');
    contenedor.innerHTML = datosFormulario.get('email');

    contenedor = document.querySelector('footer ul li:nth-of-type(2) span');
    contenedor.innerHTML = datosFormulario.get('phone');
});