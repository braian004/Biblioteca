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
        name: 'Estadística Práctica para Ciencia de Datos con R y Python',
        imagen: 'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/62f90066265f19b7ab9c68109ad31eb2c1bea1818a986e100be490ba0318036a.jpg',
        enlace: 'https://drive.google.com/uc?id=1YsbS82YTBDOOlnUMo6JSW_ogZUtnyuWU&export=download',
        formato: 'PDF, 20.17 MB'
    },
    {
        name: 'La biblia del mysql',
        imagen: 'https://s3proxy.cdn-zlib.sk/covers400/collections/genesis/e7b274ed2c4422cf3c3a4475380f0b9277655d16214dd048f688263021910aa8.jpg',
        enlace: 'https://drive.google.com/uc?id=1rNoOxprukY-brlOBwPctMu4YDqS-x4Xg&export=download',
        formato: 'PDF, 42.91 MB'
    },
    {
        name: 'Ofertas de 100 M$',
        imagen: 'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/b608266a78f468a018f0ecef81d5e36a541a5ad867840fcb0486972d57f8f850.jpg',
        enlace: 'https://drive.google.com/uc?id=1lRGkJwhyog7va6aNOv_RVqcVxgjQmOn7&export=download',
        formato: 'PDF, 1.73 MB'
    },
    {
        name: 'CEM_guia_nuevas_tendencias_en_ventas_w.pdf',
        imagen: 'https://raw.githubusercontent.com/braian004/Biblioteca/main/img/Captura%20de%20pantalla%202025-01-09%20044556.jpg',
        enlace: "https://raw.githubusercontent.com/braian004/book/main/4-01-2'24/CEM_guia_nuevas_tendencias_en_ventas_w.pdf",
        formato: 'PDF, 1.73 MB'
    },
    {
        name: 'Como Ganar Amigos E Influir Sobre Las Personas',
        imagen: 'https://s3proxy.cdn-zlib.sk/covers300/collections/genesis/3467b1dd558fb003de7998f920632301b43e7588ad8a8c56efea79c09573f46a.jpg',
        enlace: " https://raw.githubusercontent.com/braian004/book/main/4-01-2'24/Como%20Ganar%20Amigos%20E%20Influir%20Sobre%20Las%20Personas%20-%20Dale%20Carnegie.pdf",
        formato: 'PDF, 1.40 MB'
    },
    {
        name: 'aprende SQL en un fin de semana',
        imagen: 'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/b0fcf0e94d3918706e12a25af0e51f08ebe7af994c661e06d8698825d59611ac.jpg',
        enlace: "https://raw.githubusercontent.com/braian004/book/main/27-12-24/Aprende%20SQL%20en%20un%20Fin%20de%20Semana.pdf",
        formato: 'PDF, 8.40 MB'
    },
    {
        name: 'aprende SQL en un fin de semana',
        imagen: 'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/b0fcf0e94d3918706e12a25af0e51f08ebe7af994c661e06d8698825d59611ac.jpg',
        enlace: "https://raw.githubusercontent.com/braian004/book/main/27-12-24/Aprende%20SQL%20en%20un%20Fin%20de%20Semana.pdf",
        formato: 'PDF, 8.40 MB'
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
