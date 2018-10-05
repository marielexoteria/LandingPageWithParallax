$(document).ready(function() {
    //to give the nav menu a transition effect
    var nav = $('.navbar-fixed-top');

    //to add the class to the nav menu regardless of where in the page it shows
    var distancia = $('.navbar-fixed-top').offset();

    if (distancia.top > 0) {
        nav.removeClass('normal').addClass('efecto');
    }

    //add the class according to whether the nav menu is at the top of showing on scroll
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 300) { //300px
            nav.removeClass('normal').addClass('efecto');
        } else {
            nav.removeClass('efecto').addClass('normal');
        }
    });


    //to enable the modal windows that will show the screens and a button to close
    $('section#pantallas a').on('click', function() {
        $('#modal img').attr('src', $(this).attr('data-image-url'));
    });


    //THE ANIMATIONS SHOW ONLY ONCE!!!!
    //to animate the font awesome icons and some of the pictures
    $('section#app .animacion1').waypoint(function() {
        $('section#app .animacion1').addClass('animated fadeInUp');
      }, {
        offset: '60%'
    }); //offset = how much the element should be visible in the viewport before the animation kicks in

    $('section#app .animacion2').waypoint(function() {
        $('section#app .animacion2').addClass('animated fadeInUp');
      }, {
        offset: '60%'
    });

    $('section#app .animacion3').waypoint(function() {
        $('section#app .animacion3').addClass('animated fadeInUp');
      }, {
        offset: '60%'
    });

    $('section#caracteristicas #appCentral').waypoint(function() {
        $(this.element).addClass('animated fadeInDownBig');
      }, {
        offset: '60%'
    });

    $('section#caracteristicas .animacion1').waypoint(function() {
        $(this.element).addClass('animated fadeInLeft');
      }, {
        offset: '60%'
    });

    $('section#caracteristicas .animacion2').waypoint(function() {
        $(this.element).addClass('animated fadeInLeft');
      }, {
        offset: '60%'
    });

    $('section#pantallas .animacion1').waypoint(function() {
        $(this.element).addClass('animated fadeInRight');
      }, {
        offset: '60%'
    });

    $('section#pantallas .animacion2').waypoint(function() {
        $(this.element).addClass('animated fadeInRight');
      }, {
        offset: '60%'
    });

    $('section#pantallas .animacion3').waypoint(function() {
        $(this.element).addClass('animated fadeInRight');
      }, {
        offset: '60%'
    });

    $('section#descargar .animacion1').waypoint(function() {
        $(this.element).addClass('animated fadeInRight');
      }, {
        offset: '60%'
    });

    $('section#descargar .animacion2').waypoint(function() {
        $(this.element).addClass('animated fadeInRight');
      }, {
        offset: '60%'
    });

    $('section#descargar .animacion3').waypoint(function() {
        $(this.element).addClass('animated fadeInRight');
      }, {
        offset: '60%'
    });

    //form validation
    $('#form-soporte').bootstrapValidator({
        message: "Esto no es válido",
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nombre: {
                validators: {
                    notEmpty: {
                        message: "El nombre es obligatorio"
                    },
                }
            },
            email:{
                validators: {
                    notEmpty: {
                        message: "El e-mail es obligatorio"
                    },
                    emailAddress: {
                        message: "El e-mail no es válido"
                    }
                }
            },
            mensaje: {
                validators: {
                    notEmpty: {
                        message: "El mensaje es obligatorio"
                    }
                }
            }
        }
    }).on('success.form.bv',function(e) { //e = evento de JS, nombre que parece default
          e.preventDefault(); //https://www.w3schools.com/jquery/event_preventdefault.asp
          var $form = $(e.target);
          var bv = $form.data('bootstrapValidator');
          $.post($form.attr('action'), $form.serialize(), function(result) {
              $('#correcto').fadeIn();
              console.log(result);
              $('#form-soporte').bootstrapValidator('resetForm', true); /* agregué esta línea para limpiar el formulario después de haber mandado el mail. Fuente: http://tutsme-webdesign.info/bootstrap-validation-states-dynamically/*/
          }, 'json');
    });
});

/* to enable smooth scrolling in the nav menu links - library: vendor > smooth-scroll.js
code from https://github.com/cferdinandi/smooth-scroll/tree/v9.4.3 using an old version of
the library as recommended in https://www.udemy.com/disena-un-landing-page-con-html5-css3-bootstrap-y-parallax/learn/v4/questions/2448068 */
smoothScroll.init({
	//selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
	//selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
	speed: 700, // Integer. How fast to complete the scroll in milliseconds
	easing: 'easeInOutQuad', // Easing pattern to use
	offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
	updateURL: false, // Boolean. If true, update the URL hash on scroll
	//callback: function ( anchor, toggle ) {} // Function to run after scrolling
  callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
  callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
});
