document.getElementById('mostrarRecomendaciones').addEventListener('click', function() {
    const cliente = document.getElementById('cliente').value;
    const productosComprados = document.getElementById('productosComprados');
    const listaRecomendaciones = document.getElementById('listaRecomendaciones');

    // Limpiar listas anteriores
    productosComprados.innerHTML = '';
    listaRecomendaciones.innerHTML = '';

    // Base de datos simulada
    const clientes = {
        'Jose': {
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
        'Natalia': {
            productos: ['Laptop Gamer', 'Mouse Ergonómico'],
            recomendaciones: [
                'Teclado Mecánico - Mejora tu experiencia de escritura y gaming.',
                'Monitor 4K - Disfruta de imágenes nítidas y colores vibrantes.',
                'Silla Gaming - Asegura comodidad durante largas sesiones de uso.',
                'Sistema de Enfriamiento - Mantén tu laptop a la temperatura óptima durante el uso intensivo.'
            ]
        }
    };

    if (clientes[cliente]) {
        clientes[cliente].productos.forEach(producto => {
            const li = document.createElement('li');
            li.textContent = producto;
            productosComprados.appendChild(li);
        });

        clientes[cliente].recomendaciones.forEach(recomendacion => {
            const li = document.createElement('li');
            li.textContent = recomendacion;
            listaRecomendaciones.appendChild(li);
        });
    } else {
        alert('Cliente no encontrado');
    }
});