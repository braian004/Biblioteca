// Lista de libros
const libros = [

    {   name:'Una Forma Màs Inteligente de Aprender Python Aprenda más rápido y recuerda más',
        imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/e7af24a475a9a4de82238ebbdd7db6967ac120fb16cba0aabb8af49d9018cdb8.jpg ',
        enlace:'https://drive.google.com/file/d/1P1NJB2m8UienOSZBcDnuRgR7bqdo2b2k/view?usp=sharing',
        formato:'pdf 2.25 MB'
    },
    {   name:'Ciencia de datos : técnicas analíticas y aprendizaje estadístico. Un enfoque práctico',
        imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/genesis/4126d8edc0f17959cf4f11b4829c034806cddd79f891abddb1e9f2114f816fbb.jpg',
        enlace:'https://drive.google.com/uc?id=1RMiQssNtOvtGmXSAMuc5VtVqcl8VYv5S&export=download',
        formato:'pdf 8.23 MB'
    }, 
    {   name:'Fundamentos de SQL',
        imagen:'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/f21c130a2ca1b526369f22168995bd576298c16bf1eaac40986334c09bc8f030.jpg',
        enlace:'https://drive.google.com/file/d/1OMpHrAuh1pB9I-3-Hkv6Jv13b-GEymof/view?usp=sharing',
        formato:'pdf 2.61 MB'
    },
    {
        name: 'Node.js Javascript del lado del servidor',
        imagen: 'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/72aaa264e6d6a61882d3743d4e27b7d6beeab37283553f0e427194cf4fcd1afd.jpg',
        enlace: 'https://drive.google.com/file/d/1WMrFQfEeGZYHgcq33JHWqY9PumcnS3Yt/view?usp=sharing',
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
        name: 'El arte de hacer dinero',
        imagen: 'https://s3proxy.cdn-zlib.sk/covers1000/collections/userbooks/e45c9204ba839ebb8df0e206107ce9e66549a7c8d47881c834bf764d0f9b55b5.jpg',
        enlace: "https://raw.githubusercontent.com/braian004/book/main/27-12-24/El%20arte%20de%20hacer%20dinero.pdf",
        formato: 'PDF, 751 KB'
    },
    {
        name: 'Vender sin vender Estrategias para negociar ',
        imagen: 'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/dd94364675d4a6168a0f3421bc01860ff15de5dc2e23a8fccf7212de6780176e.jpg',
        enlace: "https://drive.google.com/file/d/1BUAtj1oVfdaP18CyBtT15sQqNrSxeumb/view?usp=sharing",
        formato: 'PDF, 1002 KB'
    },
    {
        name: 'Piensa y hagase rico',
        imagen: 'https://s3proxy.cdn-zlib.sk/covers1000/collections/userbooks/f71f934cc61bdf01dcef39754310261337f1b495e593e0561bc0015234722e46.jpg',
        enlace: "https://drive.google.com/file/d/19Oj5ghfVO8slTecUCLLb7HCQx7QxBL90/view?usp=sharing",
        formato: 'PDF, 1.04 MB'
    },
    {
        name: 'Python para todos',
        imagen: 'https://s3proxy.cdn-zlib.sk/covers400/collections/genesis/faf46d67a0f1b28f10dba8e78cb0aba563295d412fee7ba95d1da2542ccd6144.jpg',
        enlace: "https://drive.google.com/file/d/12lmCf4JoPLoXWksiFFCtSvZuSySBQxhC/view?usp=sharing",
        formato: 'PDF, !.21 MB'
    },
    {
        name: 'Arduino Curso Practico de Formacion',
        imagen: 'https://s3proxy.cdn-zlib.sk/covers400/collections/genesis/e78d605334d15f7cd11240ef01f3723cba10112679beb3f7688b060e00ec6e5c.jpg',
        enlace: "https://drive.google.com/file/d/1ZLuTNe4AG_8KgC9KqLRKRqXa5dvBOETW/view?usp=sharing",
        formato: 'PDF, 7.21 MB'
    },
    {
        name: 'Python con aplicaciones a las matemáticas, ingeniería y finanzas',
        imagen: 'https://s3proxy.cdn-zlib.sk/covers1000/collections/userbooks/c56f837b407ab2e0520538e44f30d5e068e77e34c3736f4aa2a1c5c74c6da50b.jpg',
        enlace: "https://drive.google.com/file/d/1xCRlcHXBW0nwLBG5h4EcRZvli4r9_8rO/view?usp=sharing",
        formato: 'PDF, 44.26 MB'
    },
    {
        name: 'Aprende Machine Learning',
        imagen: 'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/5c3dd6991f907dbf51c46993f1178bb4c1b56b1229c23dd058c689ef50cefc18.jpg',
        enlace: "https://drive.google.com/file/d/19i2YQFmAPiwzW_pTfI_p_FhsrjFr7vs_/view?usp=sharing",
        formato: 'PDF, 15.66 MB'
    },
    {
        name: 'Python para análisis de datos',
        imagen: 'https://s3proxy.cdn-zlib.sk/covers400/collections/userbooks/5ee7233bcbcd8f216f64b01aa29b97d1e48a3bceea0fee83331c03959c8e5dc3.jpg',
        enlace: "https://drive.google.com/file/d/1OiDX_IYjQdw5vlgBNSG_wUUOdqzQVmgz/view?usp=sharing",
        formato: 'PDF, 15.99 MB'
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
