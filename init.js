$(document).ready(function(){
	
	// Находим блок карусели
	var carousel = $("#carousel");

	// Запускаем плагин карусели
	carousel.owlCarousel({
        // Точки под каруселью
        itemsDesktop: [1600, 1],
        itemsTablet: [768,1],
        loop: true,
        autoPlay: true,
        autoPlayTimeout: 500,
        items: 1,
        scrollPerPage: 1,
    });
});