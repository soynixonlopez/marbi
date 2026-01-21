// Datos de propiedades (simulado - en producción vendría de una API)
const allProperties = [
    {
        id: 1,
        title: "Galera Industrial Moderna",
        category: "galeras",
        operation: "venta",
        price: 350000,
        priceDisplay: "$350,000",
        image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Espacio amplio para almacenamiento y producción. Ubicación estratégica.",
        area: "2,500 m²",
        location: "Zona Industrial"
    },
    {
        id: 2,
        title: "Oficinas Ejecutivas",
        category: "oficinas",
        operation: "alquiler",
        price: 1200,
        priceDisplay: "$1,200/mes",
        image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Espacios modernos y funcionales en zona comercial premium.",
        area: "150 m²",
        location: "Zona Comercial"
    },
    {
        id: 3,
        title: "Local Comercial Premium",
        category: "locales",
        operation: "venta",
        price: 185000,
        priceDisplay: "$185,000",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Ubicación céntrica, ideal para retail o servicios profesionales.",
        area: "80 m²",
        location: "Centro Comercial"
    },
    {
        id: 4,
        title: "Terreno Industrial",
        category: "terrenos",
        operation: "venta",
        price: 420000,
        priceDisplay: "$420,000",
        image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "5,000 m² en zona industrial con fácil acceso a carreteras principales.",
        area: "5,000 m²",
        location: "Zona Industrial"
    },
    {
        id: 5,
        title: "Almacén Logístico",
        category: "galeras",
        operation: "alquiler",
        price: 2800,
        priceDisplay: "$2,800/mes",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Espacio diseñado para operaciones logísticas y distribución.",
        area: "1,800 m²",
        location: "Zona Logística"
    },
    {
        id: 6,
        title: "Casa Comercial",
        category: "oficinas",
        operation: "venta",
        price: 280000,
        priceDisplay: "$280,000",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        description: "Propiedad mixta: oficinas y local comercial en planta baja.",
        area: "200 m²",
        location: "Zona Comercial"
    },
    {
        id: 7,
        title: "Galera de Almacenamiento",
        category: "galeras",
        operation: "alquiler",
        price: 1500,
        priceDisplay: "$1,500/mes",
        image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Espacio ideal para almacenamiento de productos y mercancías.",
        area: "1,200 m²",
        location: "Zona Industrial"
    },
    {
        id: 8,
        title: "Oficina Ejecutiva Premium",
        category: "oficinas",
        operation: "alquiler",
        price: 2000,
        priceDisplay: "$2,000/mes",
        image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Oficinas de lujo con vista panorámica y todas las comodidades.",
        area: "180 m²",
        location: "Torre Ejecutiva"
    },
    {
        id: 9,
        title: "Local en Centro Comercial",
        category: "locales",
        operation: "alquiler",
        price: 800,
        priceDisplay: "$800/mes",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Local estratégico en centro comercial con alto tráfico de clientes.",
        area: "60 m²",
        location: "Centro Comercial"
    }
];

let filteredProperties = [...allProperties];

// Renderizar propiedades
function renderProperties(properties) {
    const grid = document.getElementById('propertiesGrid');
    const noResults = document.getElementById('noResults');
    const resultsCount = document.getElementById('resultsCount');
    
    if (properties.length === 0) {
        grid.classList.add('hidden');
        noResults.classList.remove('hidden');
        resultsCount.textContent = '0';
        return;
    }
    
    grid.classList.remove('hidden');
    noResults.classList.add('hidden');
    resultsCount.textContent = properties.length;
    
    grid.innerHTML = properties.map(property => `
        <div class="property-item property-card bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100" 
             data-category="${property.category}" 
             data-operation="${property.operation}"
             data-price="${property.price}">
            <div class="relative h-64 overflow-hidden">
                <img src="${property.image}" 
                     alt="${property.title}" 
                     class="w-full h-full object-cover transition transform hover:scale-110 duration-500">
                <div class="absolute top-4 right-4">
                    <span class="${property.operation === 'venta' ? 'bg-purple-600' : 'bg-green-600'} text-white px-3 py-1 rounded-full text-sm font-semibold">
                        ${property.operation === 'venta' ? 'Venta' : 'Alquiler'}
                    </span>
                </div>
            </div>
            <div class="p-6">
                <h3 class="font-display text-2xl font-semibold mb-2 text-gray-800">${property.title}</h3>
                <p class="text-gray-600 mb-3 text-sm">${property.description}</p>
                <div class="flex items-center text-gray-500 text-sm mb-4">
                    <i class="fas fa-map-marker-alt mr-2 text-purple-600"></i>
                    <span>${property.location}</span>
                    <span class="mx-2">•</span>
                    <i class="fas fa-ruler-combined mr-2 text-purple-600"></i>
                    <span>${property.area}</span>
                </div>
                <div class="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span class="text-purple-600 font-bold text-xl">${property.priceDisplay}</span>
                    <a href="propiedad.html?id=${property.id}" class="text-purple-600 hover:text-purple-800 font-semibold inline-flex items-center transition">
                        Ver detalles 
                        <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Aplicar filtros
function applyFilters() {
    const typeFilters = Array.from(document.querySelectorAll('.filter-type:checked')).map(cb => cb.value);
    const operationFilters = Array.from(document.querySelectorAll('.filter-operation:checked')).map(cb => cb.value);
    const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseInt(document.getElementById('maxPrice').value) || Infinity;
    const sortBy = document.getElementById('sortBy').value;
    
    filteredProperties = allProperties.filter(property => {
        // Filtro por tipo
        const typeMatch = typeFilters.includes('all') || typeFilters.includes(property.category);
        
        // Filtro por operación
        const operationMatch = operationFilters.includes('all') || operationFilters.includes(property.operation);
        
        // Filtro por precio
        const priceMatch = property.price >= minPrice && property.price <= maxPrice;
        
        return typeMatch && operationMatch && priceMatch;
    });
    
    // Ordenar
    switch(sortBy) {
        case 'price-asc':
            filteredProperties.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProperties.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProperties.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'recent':
        default:
            // Mantener orden original
            break;
    }
    
    renderProperties(filteredProperties);
}

// Limpiar filtros
function clearFilters() {
    document.querySelectorAll('.filter-type, .filter-operation').forEach(cb => {
        cb.checked = cb.value === 'all';
    });
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    document.getElementById('sortBy').value = 'recent';
    applyFilters();
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderProperties(allProperties);
});
