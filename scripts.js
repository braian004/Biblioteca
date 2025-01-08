// Lista de libros
const libros = [

    {   name:'Una Forma Màs Inteligente de Aprender Python Aprenda más rápido y recuerda más',
        imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/e7af24a475a9a4de82238ebbdd7db6967ac120fb16cba0aabb8af49d9018cdb8.jpg ',
        enlace:'https://raw.githubusercontent.com/braian004/BIBLIOTECA-GRATIS/master/Libro/Una%20Forma%20M%C3%A0s%20Inteligente%20de%20Aprender%20Python%20Aprenda%20m%C3%A1s%20r%C3%A1pido%20y%20recuerda%20m%C3%A1s%20(Spanish%20Edition)%20(LANDRY%2C%20FABIEN)%20(Z-Library).pdf',
        formato:'pdf 2.25 MB'
    },
    {   name:'Ciencia de datos : técnicas analíticas y aprendizaje estadístico. Un enfoque práctico',
        imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/genesis/4126d8edc0f17959cf4f11b4829c034806cddd79f891abddb1e9f2114f816fbb.jpg',
        enlace:'https://raw.githubusercontent.com/braian004/BIBLIOTECA-GRATIS/master/Libro/Ciencia%20de%20datos%20%20t%C3%A9cnicas%20anal%C3%ADticas%20y%20aprendizaje%20estad%C3%ADstico.%20Un%20enfoque%20pr%C3%A1ctico%20(%20etc.)%20(Z-Library).pdf',
        formato:'pdf 8.23 MB'
    }, 
    {   name:'Fundamentos de SQL',
        imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/f21c130a2ca1b526369f22168995bd576298c16bf1eaac40986334c09bc8f030.jpg',
        enlace:'https://raw.githubusercontent.com/braian004/BIBLIOTECA-GRATIS/master/Libro/Fundamentos%20de%20SQL%20(Robert%20Sheldon%2C%20Andrew%20Oppel)%20(Z-Library).pdf',
        formato:'pdf 2.61 MB'
    },
    {
        name: 'Node.js Javascript del lado del servidor',
        imagen: 'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/72aaa264e6d6a61882d3743d4e27b7d6beeab37283553f0e427194cf4fcd1afd.jpg',
        enlace: 'https://raw.githubusercontent.com/braian004/BIBLIOTECA-GRATIS/master/Libro/Node.js%20Javascript%20del%20lado%20del%20servidor%20(Ismael%20L%C3%B3pez%20Quintero)%20(Z-Library).pdf',
        formato: 'PDF, 3.5 MB'
    },
    {
        name: 'Node.js Javascript del lado del servidor',
        imagen: 'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/72aaa264e6d6a61882d3743d4e27b7d6beeab37283553f0e427194cf4fcd1afd.jpg',
        enlace: 'https://raw.githubusercontent.com/braian004/BIBLIOTECA-GRATIS/master/Libro/Node.js%20Javascript%20del%20lado%20del%20servidor%20(Ismael%20L%C3%B3pez%20Quintero)%20(Z-Library).pdf',
        formato: 'PDF, 3.5 MB'
    },
    {
        name: 'La biblia del mysql',
        imagen: 'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/72aaa264e6d6a61882d3743d4e27b7d6beeab37283553f0e427194cf4fcd1afd.jpg',
        enlace: 'https://raw.githubusercontent.com/braian004/BIBLIOTECA-GRATIS/master/Libro/Node.js%20Javascript%20del%20lado%20del%20servidor%20(Ismael%20L%C3%B3pez%20Quintero)%20(Z-Library).pdf',
        formato: 'PDF, 3.5 MB'
    }
    
    // https://github.com/braian004/Biblioteca.git
    // https://raw.githubusercontent.com/ --> para descarga directa 
];

// Contenedor de libros
const librosContainer = document.querySelector('.libros-container');

// Generar dinámicamente los libros
libros.forEach(libro => {
    const libroItem = document.createElement('div');
    libroItem.classList.add('libro-item');
    
    libroItem.innerHTML = `
        <img src="${libro.imagen}" alt="Portada de ${libro.name}">
        <a href="${libro.enlace}" download>Descargar (${libro.formato})</a>
    `;
    librosContainer.appendChild(libroItem);
});
