        
    var link = document.querySelector(".btn-search");
    var popup = document.querySelector(".modal-search-form");
    var overlay = document.querySelector(".overlay");
    var popupform = document.querySelector(".modal-search-form form")
        
    link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-search-form-show");            overlay.classList.add("overlay-show");
        popupform.classList.add("form-show")
        });
        
    overlay.addEventListener("click", function(event) {            event.preventDefault();
        overlay.classList.remove("overlay-show");            popup.classList.remove("modal-search-form-show");
        });
        
    var myMap;

        ymaps.ready(init);

        function init () {
        myMap = new ymaps.Map('map', {
        center: [34.88455165652444,-111.76020825634764],
        zoom: 10
        }, {
        searchControlProvider: 'yandex#search'
        });
        }