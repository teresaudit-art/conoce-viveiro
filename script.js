// comprobamos que se esta cargando a la vez jquery y mi propio script

$(document).ready(function(){

    AOS.init({
        duration:1600
    })

    let currentIndex = 1;
    const slides = $(".slide");
    const prevButton = $(".prev");
    const nextButton = $(".next");
    const dots = $(".dot");
    let slidesCont = $(".slides");
    let autoSlide;
    

     
     // LÓGICA MENÚ RESPONSIVE 
    // Analizamos HTML y el CSS que afectan al menú 
    // 1) Seleccionamos el elemento (icono hamburguesa)
    // 2) Asociamos un evento click al icono 
    // Añadimos al menú la clase manu-show 
    // Cambiamo le icono hamburguesa por el icono (fa-times)
        

        // 1)
        const btn_menu = document.querySelector(".burger i");

        // 2)
        btn_menu.addEventListener("click", function() {


            const menu = document.querySelector(".menu");
            menu.classList.toggle("menu-show");
            
            btn_menu.classList.toggle("fa-bars");
            btn_menu.classList.toggle("fa-times");
        
            
    });

    
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menu li");

    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            menu.classList.remove("menu-show");
            btn_menu.classList.remove("fa-times");
            btn_menu.classList.add("fa-bars");
        });
    });


    
    // funcion que mostrara el slide correspondiente a un índice (muestra la imagen que indican las otras funciones)
    
    function showSlide(indexSlide) {
    
        let realIndex = indexSlide -1;
    
        let percTranslateX = -realIndex * 100;
    
        slidesCont.css("transform", "translateX(" + percTranslateX + "%)");
    
        dots.removeClass("active").eq(realIndex).addClass("active");
    
    }
    
    
    
    
    // funcion para mostrar la anteiror slide
    
    function prevSlide() {
        currentIndex = currentIndex - 1;
        // currentIndex - = 1
    
    
    
        if (currentIndex < 1) {
    
        currentIndex = slides.length;
    
        }
    
        showSlide(currentIndex);
    
    }
    
    
    
    // funcion para mostrar la siguiente slide
    
    function nextSlide() {
        currentIndex = currentIndex + 1;
        // currentIndex + = 1
    
    
        if (currentIndex > slides.length) {
            currentIndex = 1;
        }
    
        showSlide(currentIndex);
    }
    
    
    
    prevButton.click(function () {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    })
    
    nextButton.click(function () {
        stopAutoSlide()
        nextSlide()
        startAutoSlide();
    })
    
    
    
    // click navegacion punbtos
    
    dots.click(function() {
        stopAutoSlide()
        currentIndex = $(this).data("slide");
        showSlide(currentIndex);
        startAutoSlide();
    });
    
    // funcion para activar el slide sohw automatico. esta funcion propia va a usar a su vez una funcion bilt in setInterval()
    
    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 3000);
    }
    
    
    // funcion para detener el slide automatico
    // la llamaeremos cuando el usuario interactue con el slide show
    // clearInterval();
    
    function stopAutoSlide() {
    
        clearInterval(autoSlide);
    
    }
    
    startAutoSlide();
    
    
    });

    
    /**
     * Función para generar el gráfico de línea
     */
    function cargaGraficoLinea() {
        var datos = {
            labels: ["00am-5am", "5am-10am", "10am-15pm", "15pm-20pm", "20pm-00am"],
            datasets: [
                {
                    label: "%",
                    backgroundColor: "rgb(172, 244, 221)",
                    data: [4, 2, 1, 3, 4],
                },
            ],
        };
        var grafico = $("#linea");
        new Chart(grafico, {
            type: "line",
            data: datos,
        });
    }
    
    $(document).ready(function () {
        "use strict";
        cargaGraficoLinea();
    });
    
    