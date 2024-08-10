// Agrega un listener al botón para ejecutar una función cuando se haga clic en él
document.getElementById('mostrarRecomendaciones').addEventListener('click', function() {
    // Obtiene el nombre del cliente ingresado en el campo de texto
    const cliente = document.getElementById('cliente').value;

    // Selecciona los elementos donde se mostrarán los productos comprados y las recomendaciones
    const productosComprados = document.getElementById('productosComprados');
    const listaRecomendaciones = document.getElementById('listaRecomendaciones');

    // Limpia las listas anteriores para evitar acumulación de elementos
    productosComprados.innerHTML = '';
    listaRecomendaciones.innerHTML = '';

    // Base de datos simulada de clientes con sus productos comprados y recomendaciones
    const clientes = {
        'Luis': {
            productos: ['Smartphone Pro', 'Tablet HD'],
            recomendaciones: [
                'Funda de Tablet - Protege tu dispositivo contra golpes y rasguños.',
                'Audífonos Bluetooth - Disfruta de música sin cables con alta calidad de sonido.',
                'Power Bank - Mantén tus dispositivos cargados durante todo el día.',
                'Smartwatch - Monitorea tu actividad diaria y recibe notificaciones en tu muñeca.'
            ]
        },
        'Ana': {
            productos: ['Laptop Ultra', 'Mouse Inalámbrico'],
            recomendaciones: [
                'Teclado Mecánico - Mejora tu experiencia de escritura y gaming.',
                'Monitor 4K - Disfruta de imágenes nítidas y colores vibrantes.',
                'Silla Ergonómica - Asegura comodidad durante largas sesiones de trabajo.',
                'Sistema de Enfriamiento - Mantén tu laptop a la temperatura óptima durante el uso intensivo.'
            ]
        },
        'Carlos': {
            productos: ['Smartphone Pro', 'Audífonos Inalámbricos'],
            recomendaciones: [
                'Power Bank - Mantén tus dispositivos cargados en todo momento.',
                'Funda de Smartphone - Protege tu dispositivo con estilo.',
                'Smartwatch - Monitorea tu actividad física y recibe notificaciones en tu muñeca.',
                'Altavoz Bluetooth - Lleva tu música a cualquier parte con sonido de alta calidad.'
            ]
        },
        'María': {
            productos: ['Laptop Gamer', 'Mouse Ergonómico'],
            recomendaciones: [
                'Teclado Mecánico - Mejora tu experiencia de escritura y gaming.',
                'Monitor 4K - Disfruta de imágenes nítidas y colores vibrantes.',
                'Silla Gaming - Asegura comodidad durante largas sesiones de uso.',
                'Sistema de Enfriamiento - Mantén tu laptop a la temperatura óptima durante el uso intensivo.'
            ]
        }
    };

    // Verifica si el cliente ingresado existe en la base de datos
    if (clientes[cliente]) {
        // Si existe, recorre los productos comprados y los agrega a la lista correspondiente
        clientes[cliente].productos.forEach(producto => {
            const li = document.createElement('li');
            li.textContent = producto;
            productosComprados.appendChild(li);
        });

        // Recorre las recomendaciones y las agrega a la lista correspondiente
        clientes[cliente].recomendaciones.forEach(recomendacion => {
            const li = document.createElement('li');
            li.textContent = recomendacion;
            listaRecomendaciones.appendChild(li);
        });
    } else {
        // Si el cliente no se encuentra, muestra una alerta
        alert('Cliente no encontrado');
    }
});
