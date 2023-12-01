<script>
// @ts-nocheck 
import Header from "$lib/components/header/header.svelte"
import Footer from "$lib/components/footer/footer.svelte"
import Cart from "$lib/components/misc/cart.svelte"
import {onMount} from "svelte"
import bassukulele from "$lib/images/bass-ukulele.png"

import { browser } from '$app/environment';

let productsPromise
const getProducts = async () => {
        const req = await fetch(`https://six-x.shop/wp-json/wc/store/products?_embed&per_page=25`)
        const res = await req.json()
        return res 
        
}
productsPromise =  getProducts()
 
$: cart = [];
	
const addToCart = (product) => {
        product.quantity = '1'
		for(let item of cart) {
				if(item.id === product.id) {
					product.quantity += 1
					cart = cart;
					return;
				}
		}
		cart = [...cart, product]
        console.log(cart)
	}

const minusItem = (product) => {
		for(let item of cart) {
				if(item.id === product.id) {
					if(product.quantity > 1 ) {
							product.quantity -= 1
							cart = cart
					} else {
							cart = cart.filter((cartItem) => cartItem != product)
					}
					return;
				}
		}
	}
	
const plusItem = (product) => {
    for(let item of cart) {
        if(item.id === product.id) {
            item.quantity += 1
            cart = cart;
            return;
        }
    }
}

$: total = cart.reduce((sum, item) => sum + item.prices.price * item.quantity, 0)
 

onMount(() => {
    
    function initTheme() {
        var axilInit = {
            i: function(e) {
                axilInit.s();
                axilInit.methods();
            },

            s: function(e) {
                this._window = jQuery(window),
                    this._document = jQuery(document),
                    this._body = jQuery('body'),
                    this._html = jQuery('html')
            },

            methods: function(e) {
                axilInit.w();
                axilInit.contactForm();
                axilInit.axilBackToTop();
                axilInit.shopFilterWidget();
                axilInit.mobileMenuActivation();
                axilInit.menuLinkActive();
                axilInit.headerIconToggle();
                axilInit.priceRangeSlider();
                axilInit.quantityRanger();
                axilInit.axilSlickActivation();
                // axilInit.countdownInit('.coming-countdown', '2023/10/01');
                // axilInit.campaignCountdown('.campaign-countdown', '2023/10/01');
                // axilInit.countdownInit('.poster-countdown', '2023/06/01');
                // axilInit.countdownInit('.sale-countdown', '2023/10/31');
                axilInit.sideOffcanvasToggle('.cart-dropdown-btn', '#cart-dropdown');
                axilInit.sideOffcanvasToggle('.mobile-nav-toggler', '.header-main-nav');
                axilInit.sideOffcanvasToggle('.department-side-menu', '.department-nav-menu');
                axilInit.sideOffcanvasToggle('.filter-toggle', '.axil-shop-sidebar');
                axilInit.sideOffcanvasToggle('.axil-search', '#header-search-modal');
                axilInit.sideOffcanvasToggle('.popup-close, .closeMask', "#offer-popup-modal");
                axilInit.stickyHeaderMenu();
                axilInit.salActivation();
                axilInit.magnificPopupActivation();
                axilInit.colorVariantActive();
                axilInit.headerCampaignRemove();
                //axilInit.offerPopupActivation();
                axilInit.axilMasonary();
                axilInit.counterUpActivation();
                axilInit.scrollSmoth();
                axilInit.onLoadClassAdd();
                axilInit.dropdownMenuSlide();
            
            
            },

            w: function(e) {
                this._window.on('load', axilInit.l).on('scroll', axilInit.res)
            },

            contactForm: function() {
                jQuery('.axil-contact-form').on('submit', function(e) {
                    e.preventDefault();
                    var _self = jQuery(this);
                    var _selector = _self.closest('input,textarea');
                    _self.closest('div').find('input,textarea').removeAttr('style');
                    _self.find('.error-msg').remove();
                    _self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');
                    var data = jQuery(this).serialize();
                    jQuery.ajax({
                        url: 'mail.php',
                        type: "post",
                        dataType: 'json',
                        data: data,
                        success: function(data) {
                            _self.closest('div').find('button[type="submit"]').removeAttr('disabled');
                            if (data.code == false) {
                                _self.closest('div').find('[name="' + data.field + '"]');
                                _self.find('.axil-btn').after('<div class="error-msg"><p>*' + data.err + '</p></div>');
                            } else {
                                jQuery('.error-msg').hide();
                                jQuery('.form-group').removeClass('focused');
                                _self.find('.axil-btn').after('<div class="success-msg"><p>' + data.success + '</p></div>');
                                _self.closest('div').find('input,textarea').val('');

                                setTimeout(function() {
                                    jQuery('.success-msg').fadeOut('slow');
                                }, 5000);
                            }
                        }
                    });
                });
            },

            counterUpActivation: function () {
                var _counter = jQuery('.count');
                if (_counter.length) {
                    _counter.counterUp({
                        delay: 10,
                        time: 1000,
                        triggerOnce: true
                    });
                }
            },

            scrollSmoth: function (e) {
                jQuery(document).on('click', '.smoth-animation', function (event) {
                    event.preventDefault();
                    jQuery('html, body').animate({
                        scrollTop: jQuery(jQuery.attr(this, 'href')).offset().top
                    }, 200);
                });
            },

            axilBackToTop: function() {
                var btn = jQuery('#backto-top');
                jQuery(window).scroll(function() {
                    if (jQuery(window).scrollTop() > 300) {
                        btn.addClass('show');
                    } else {
                        btn.removeClass('show');
                    }
                });
                btn.on('click', function(e) {
                    e.preventDefault();
                    jQuery('html, body').animate({
                        scrollTop: 0
                    }, '300');
                });
            },

            shopFilterWidget: function() {
                jQuery('.toggle-list > .title').on('click', function(e) {

                    var target = jQuery(this).parent().children('.shop-submenu');
                    var target2 = jQuery(this).parent();
                    jQuery(target).slideToggle();
                    jQuery(target2).toggleClass('active');
                });

                jQuery('.toggle-btn').on('click', function(e) {

                    var target = jQuery(this).parent().siblings('.toggle-open');
                    var target2 = jQuery(this).parent();
                    jQuery(target).slideToggle();
                    jQuery(target2).toggleClass('active');
                });
            },

            mobileMenuActivation: function(e) {
                
                jQuery('.menu-item-has-children > a').on('click', function(e) {

                    var targetParent = jQuery(this).parents('.header-main-nav');
                    var target = jQuery(this).siblings('.axil-submenu');

                    if (targetParent.hasClass('open')) {
                        jQuery(target).slideToggle(400);
                        jQuery(this).parent('.menu-item-has-children').toggleClass('open');
                    }

                });

                jQuery('.nav-link.has-megamenu').on('click', function(e) {

                    var jQuerythis = jQuery(this),
                    targetElm = jQuerythis.siblings('.megamenu-mobile-toggle');
                    targetElm.slideToggle(500);
                });

                // Mobile Sidemenu Class Add
                function resizeClassAdd() {
                    if (window.matchMedia('(max-width: 1199px)').matches) {
                        jQuery('.department-title').addClass('department-side-menu');
                        jQuery('.department-megamenu').addClass('megamenu-mobile-toggle');
                    } else {
                        jQuery('.department-title').removeClass('department-side-menuu');
                        jQuery('.department-megamenu').removeClass('megamenu-mobile-toggle').removeAttr('style');
                    }
                }

                jQuery(window).resize(function() {
                    resizeClassAdd();
                });

                resizeClassAdd();
            },

            menuLinkActive: function () {
                var currentPage = location.pathname.split("/"),
                    current = currentPage[currentPage.length-1];
                jQuery('.mainmenu li a, .main-navigation li a').each(function(){
                    var jQuerythis = jQuery(this);
                    if(jQuerythis.attr('href') === current){
                        jQuerythis.addClass('active');
                        jQuerythis.parents('.menu-item-has-children').addClass('menu-item-open')
                    }
                });
            },

            headerIconToggle: function() {

                jQuery('.my-account > a').on('click', function(e) {
                    jQuery(this).toggleClass('open').siblings().toggleClass('open');
                })
            },

            priceRangeSlider: function(e) {
                jQuery('#slider-range').slider({
                    range: true,
                    min: 0,
                    max: 5000,
                    values: [0, 3000],
                    slide: function(event, ui) {
                        jQuery('#amount').val('jQuery' + ui.values[0] + '  jQuery' + ui.values[1]);
                    }
                });
                jQuery('#amount').val('jQuery' + jQuery('#slider-range').slider('values', 0) +
                    '  jQuery' + jQuery('#slider-range').slider('values', 1));

            },

            quantityRanger: function() {
               // jQuery('.pro-qty').prepend('<span class="dec qtybtn" on:click={() => minusItem(item)}>-</span>');
               // jQuery('.pro-qty').append('<span class="inc qtybtn" on:click={() => plusItem(item)}>+</span>');
                jQuery('.qtybtn').on('click', function() {
                    var jQuerybutton = jQuery(this);
                    var oldValue = jQuerybutton.parent().find('input').val();
                    if (jQuerybutton.hasClass('inc')) {
                        var newVal = parseFloat(oldValue) + 1;
                    } else {
                        // Don't allow decrementing below zero
                        if (oldValue > 0) {
                            var newVal = parseFloat(oldValue) - 1;
                        } else {
                            newVal = 0;
                        }
                    }
                    jQuerybutton.parent().find('input').val(newVal);
                });
            },

            axilSlickActivation: function(e) {
                jQuery('.categrie-product-activation').slick({
                    infinite: true,
                    slidesToShow: 7,
                    slidesToScroll: 7,
                    arrows: true,
                    dots: false,
                    autoplay: false,
                    speed: 1000,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
                    responsive: [
                        {
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 6,
                                slidesToScroll: 6
                            }
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        },
                        {
                            breakpoint: 479,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 400,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        },

                    ]
                });

                jQuery('.categrie-product-activation-3').slick({
                    infinite: true,
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    arrows: true,
                    dots: false,
                    autoplay: false,
                    speed: 1000,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
                    responsive: [
                        {
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 5
                            }
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        },
                        {
                            breakpoint: 479,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 400,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        },

                    ]
                });

                jQuery('.categrie-product-activation-4').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    autoplay: false,
                    speed: 1000,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-angle-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-angle-right"></i></button>',
                });

                jQuery('.categrie-product-activation-2').slick({
                    infinite: true,
                    slidesToShow: 7,
                    slidesToScroll: 7,
                    arrows: true,
                    dots: false,
                    autoplay: true,
                    speed: 1000,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
                    responsive: [
                        {
                            breakpoint: 1399,
                            settings: {
                                slidesToShow: 6,
                                slidesToScroll: 6
                            }
                        },
                        {
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 5
                            }
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 479,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });

                jQuery('.explore-product-activation').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
                    
                });

                jQuery('.popular-product-activation').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-angle-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-angle-right"></i></button>',
                    
                });

                jQuery('.new-arrivals-product-activation').slick({
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: true,
                    dots: false,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
                    responsive: [{
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });

                jQuery('.new-arrivals-product-activation-2').slick({
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: true,
                    dots: false,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
                    responsive: [{
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                variableWidth: true,
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });

                jQuery('.recently-viwed-activation').slick({
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: true,
                    dots: false,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-angle-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-angle-right"></i></button>',
                    responsive: [{
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });

                jQuery('.recent-product-activation').slick({
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: true,
                    dots: false,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
                    responsive: [{
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 479,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });

                jQuery('.header-campaign-activation').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    autoplay: true,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>'
                });

                jQuery('.testimonial-slick-activation-two').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>'
                });

                jQuery('.testimonial-slick-activation').slick({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    speed: 500,
                    draggable: true,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
                    responsive: [{
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 1,
                            }
                        }
                    ]
                });

                var jQueryslideStatus = jQuery('.slick-slide-count');
                
                jQuery('.testimonial-slick-activation-three').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                    var i = (currentSlide ? currentSlide : 0) + 1;
                    jQueryslideStatus.text(i + '/' + slick.slideCount);
                });

                jQuery('.testimonial-slick-activation-three').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    speed: 500,
                    draggable: true,
                    prevArrow: jQuery('.prev-custom-nav'),
                    nextArrow: jQuery('.next-custom-nav'),
                    responsive: [{
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 1,
                            }
                        }
                    ]
                });

                jQuery('.product-small-thumb').slick({
                    infinite: false,
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    focusOnSelect: true,
                    vertical: true,
                    speed: 800,
                    asNavFor: '.product-large-thumbnail',
                    responsive: [{
                            breakpoint: 992,
                            settings: {
                                vertical: false,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                vertical: false,
                                slidesToShow: 4,
                            }
                        }
                    ]

                });

                jQuery('.product-large-thumbnail').slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    speed: 800,
                    draggable: false,
                    asNavFor: '.product-small-thumb'
                });

                jQuery('.product-small-thumb-2').slick({
                    infinite: true,
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    focusOnSelect: true,
                    speed: 800,
                    asNavFor: '.product-large-thumbnail-2',
                    responsive: [{
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 5,
                            }
                        },
                        {
                            breakpoint: 479,
                            settings: {
                                slidesToShow: 4,
                            }
                        }
                    ]

                });

                jQuery('.product-large-thumbnail-2').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    speed: 800,
                    draggable: false,
                    asNavFor: '.product-small-thumb-2',
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>'
                });

                jQuery('.product-small-thumb-3').slick({
                    infinite: false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    focusOnSelect: true,
                    vertical: true,
                    speed: 800,
                    draggable: false,
                    swipe: false,
                    asNavFor: '.product-large-thumbnail-3',
                    responsive: [{
                            breakpoint: 992,
                            settings: {
                                vertical: false,
                            }
                        }
                    ]

                });

                jQuery('.product-large-thumbnail-3').slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    speed: 800,
                    draggable: false,
                    swipe: false,
                    asNavFor: '.product-small-thumb-3'
                });

                // New Page
                jQuery('.product-small-thumb-4').slick({
                    infinite: true,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    focusOnSelect: true,
                    speed: 800,
                    asNavFor: '.product-large-thumbnail-4',
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-angle-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-angle-right"></i></button>',
                    responsive: [{
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 5,
                            }
                        },
                        {
                            breakpoint: 479,
                            settings: {
                                slidesToShow: 4,
                            }
                        }
                    ]

                });

                jQuery('.product-large-thumbnail-4').slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    speed: 800,
                    draggable: false,
                    swipe: false,
                    asNavFor: '.product-small-thumb-4'
                });

                //

                jQuery('.related-blog-activation').slick({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    speed: 500,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
                    responsive: [{
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 2,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                            }
                        }

                    ]
                });

                jQuery('.blog-gallery-activation').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    speed: 500,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
                });

                jQuery('#quick-view-modal').on('shown.bs.modal', function (event) {
                    jQuery('.slick-slider').slick('setPosition');
                });

                jQuery('.slider-thumb-activation-one').slick({
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    focusOnSelect: false,
                    speed: 1000,
                    autoplay: false,
                    asNavFor: '.slider-content-activation-one',
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
                    responsive: [{
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 1,
                            }
                        }
                    ]

                });

                jQuery('.slider-thumb-activation-two').slick({
                    infinite: true,
                    slidesToShow: 3,
                    centerPadding: '0',
                    arrows: false,
                    dots: true,
                    speed: 1500,
                    autoplay: false,
                    centerMode: true,
                    responsive: [{
                            breakpoint: 575,
                            settings: {
                                slidesToShow: 1,
                            }
                        }
                    ]
                });

                jQuery('.slider-thumb-activation-three').slick({
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    focusOnSelect: false,
                    speed: 1500,
                    autoplay: true,
                    responsive: [{
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 1,
                            }
                        }
                    ]

                });

                jQuery('.slider-content-activation-one').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    focusOnSelect: false,
                    speed: 500,
                    fade: true,
                    autoplay: false,
                    asNavFor: '.slider-thumb-activation-one',
                });

                jQuery('.slider-activation-one').slick({
                    infinite: true,
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    fade: true,
                    focusOnSelect: false,
                    speed: 400

                });

                jQuery('.slider-activation-two').slick({
                    infinite: true,
                    autoplay: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    fade: true,
                    adaptiveHeight: true,
                    cssEase: 'linear',
                    speed: 400
                });

                jQuery('.team-slide-activation').slick({
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: true,
                    dots: false,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
                    responsive: [{
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            },

            countdownInit: function(countdownSelector, countdownTime) {
                var eventCounter = jQuery(countdownSelector);
                if (eventCounter.length) {
                    eventCounter.countdown(countdownTime, function(e) {
                        jQuery(this)(
                            e.strftime(
                                "<div class='countdown-section'><div><div class='countdown-number'>%-D</div> <div class='countdown-unit'>Day</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%H</div> <div class='countdown-unit'>Hrs</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%M</div> <div class='countdown-unit'>Min</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%S</div> <div class='countdown-unit'>Sec</div> </div></div>"
                            )
                        );
                    });
                }
            },

            campaignCountdown: function(countdownSelector, countdownTime) {
                var eventCounter = jQuery(countdownSelector);
                if (eventCounter.length) {
                    eventCounter.countdown(countdownTime, function(e) {
                        jQuery(this)(
                            e.strftime(
                                "<div class='countdown-section'><div><div class='countdown-number'>%-D</div> <div class='countdown-unit'>D</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%H</div> <div class='countdown-unit'>H</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%M</div> <div class='countdown-unit'>M</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%S</div> <div class='countdown-unit'>S</div> </div></div>"
                            )
                        );
                    });
                }
            },

            sideOffcanvasToggle: function(selectbtn, openElement) {

                jQuery('body').on('click', selectbtn, function(e) {
                    e.preventDefault();

                    var jQuerythis = jQuery(this),
                        wrapp = jQuerythis.parents('body'),
                        wrapMask = jQuery('<div / >').addClass('closeMask'),
                        cartDropdown = jQuery(openElement);

                    if (!(cartDropdown).hasClass('open')) {
                        wrapp.addClass('open');
                        cartDropdown.addClass('open');
                        cartDropdown.parent().append(wrapMask);
                        wrapp.css({
                            'overflow': 'hidden'

                        });

                    } else {
                        removeSideMenu();
                    }

                    function removeSideMenu() {
                        wrapp.removeAttr('style');
                        wrapp.removeClass('open').find('.closeMask').remove();
                        cartDropdown.removeClass('open');
                    }

                    jQuery('.sidebar-close, .closeMask').on('click', function() {
                        removeSideMenu();
                    });

                });
            },

            stickyHeaderMenu: function() {

                jQuery(window).on('scroll', function() {
                    // Sticky Class Add
                    if (jQuery('body').hasClass('sticky-header')) {
                        var stickyPlaceHolder = jQuery('#axil-sticky-placeholder'),
                            menu = jQuery('.axil-mainmenu'),
                            menuH = menu.outerHeight(),
                            topHeaderH = jQuery('.axil-header-top').outerHeight() || 0,
                            headerCampaign = jQuery('.header-top-campaign').outerHeight() || 0,
                            targrtScroll = topHeaderH + headerCampaign;
                        if (jQuery(window).scrollTop() > targrtScroll) {
                            menu.addClass('axil-sticky');
                            stickyPlaceHolder.height(menuH);
                        } else {
                            menu.removeClass('axil-sticky');
                            stickyPlaceHolder.height(0);
                        }
                    }
                });
            },

            salActivation: function() {
                sal({
                    threshold: 0.3,
                    once: true
                });
            },

            magnificPopupActivation: function() {

                var yPopup = jQuery('.popup-youtube');
                if (yPopup.length) {
                    yPopup.magnificPopup({
                        disableOn: 300,
                        type: 'iframe',
                        mainClass: 'mfp-fade',
                        removalDelay: 160,
                        preloader: false,
                        fixedContentPos: false
                    });
                }

                if (jQuery('.zoom-gallery').length) {
                    jQuery('.zoom-gallery').each(function() {
                        jQuery(this).magnificPopup({
                            delegate: 'a.popup-zoom',
                            type: 'image',
                            gallery: {
                                enabled: true
                            }
                        });
                    });
                }
            },

            colorVariantActive: function() {
                jQuery('.color-variant > li').on('click', function(e) {
                    jQuery(this).addClass('active').siblings().removeClass('active');
                })
            },

            headerCampaignRemove: function() {
            jQuery('.remove-campaign').on('click', function() {
                    var targetElem = jQuery('.header-top-campaign');
                    targetElem.slideUp(function() {
                        jQuery(this).remove();
                    });
            });
            },

            offerPopupActivation: function() {
                if (jQuery('body').hasClass('newsletter-popup-modal')) {
                    setTimeout(function(){ 
                        jQuery('body').addClass('open');
                        jQuery('#offer-popup-modal').addClass('open');
                    }, 1000);
                }
            },

            axilMasonary: function () {
                jQuery('.axil-isotope-wrapper').imagesLoaded(function () {
                    // filter items on button click
                    jQuery('.isotope-button').on('click', 'button', function () {
                        var filterValue = jQuery(this).attr('data-filter');
                        jQuerygrid.isotope({
                            filter: filterValue
                        });
                    });
                    
                    // init Isotope
                    var jQuerygrid = jQuery('.isotope-list').isotope({
                        itemSelector: '.product',
                        percentPosition: true,
                        transitionDuration: '0.7s',
                        layoutMode: 'fitRows',
                        masonry: {
                            // use outer width of grid-sizer for columnWidth
                            columnWidth: 1,
                        }
                    });
                });
            
                jQuery('.isotope-button button').on('click', function (event) {
                    jQuery(this).siblings('.is-checked').removeClass('is-checked');
                    jQuery(this).addClass('is-checked');
                    event.preventDefault();
                });
            },

            onLoadClassAdd: function () {
                this._window.on( "load", function() {
                    setTimeout(function() {
                        jQuery('.main-slider-style-4').addClass('animation-init');
                    }, 500);
                });

            },

            dropdownMenuSlide: function () {
                if (window.matchMedia('(max-width: 991px)').matches) {
                    jQuery('#dropdown-header-menu').removeAttr('data-bs-toggle');
                    jQuery('#dropdown-header-menu').on('click', function() {
                    jQuery(this).siblings('.dropdown-menu').slideToggle();
                        // console.log(this)
                    })
                }

            },

        }
        axilInit.i();
    }
    initTheme()

})


</script>
 

<Header {cart} />
<main class="main-wrapper">
    <div class="axil-main-slider-area main-slider-style-1">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 col-sm-6">
                    <div class="main-slider-content">
                        <div class="slider-content-activation-one">
                          
                            <div class="single-slide slick-slide" data-sal="slide-up" data-sal-delay="400" data-sal-duration="800">
                                <span class="subtitle"><i class="fas fa-fire"></i> Hot Deal In This Week</span>
                                <h1 class="title">Bass Ukulele</h1>
                                <div class="slide-action">
                                    <div class="shop-btn">
                                        <a href="#" class="axil-btn btn-bg-white"><i class="fal fa-shopping-cart"></i>Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            
                           
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 col-sm-6">
                    <div class="main-slider-large-thumb">
                        <div class="slider-thumb-activation-one axil-slick-dots">
 
                            
                            <div class="single-slide slick-slide" data-sal="slide-up" data-sal-delay="300" data-sal-duration="1500">
                                <img src={bassukulele} alt="bass ukulele">
                                <div class="product-price">
                                    <span class="text">From</span>
                                    <span class="price-amount">MRF 3,995</span>
                                </div>
                            </div>
                              
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ul class="shape-group">
            <li class="shape-1"><img src="assets/images/others/shape-1.png" alt="Shape"></li>
            <li class="shape-2"><img src="assets/images/others/shape-2.png" alt="Shape"></li>
        </ul>
    </div>

    <!-- Start Categorie Area  -->
    <div class="axil-categorie-area bg-color-white axil-section-gapcommon">
        <div class="container">
            <div class="section-title-wrapper">
                <span class="title-highlighter highlighter-secondary"> <i class="far fa-tags"></i> Categories</span>
                <h2 class="title">Browse by Category</h2>
            </div>
            
            <div class="categrie-product-activation slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide" > 
                <div class="slick-single-layout">
                    <div class="categrie-product" data-sal="zoom-out" data-sal-delay="200" data-sal-duration="500">
                        <a href="#">
                            <img class="img-fluid" src="assets/images/product/categories/elec-4.png" alt="product categorie">
                            <h6 class="cat-title">Phones</h6>
                        </a>
                    </div>
                    <!-- End .categrie-product -->
                </div>
                <!-- End .slick-single-layout -->
                <div class="slick-single-layout">
                    <div class="categrie-product" data-sal="zoom-out" data-sal-delay="300" data-sal-duration="500">
                        <a href="#">
                            <img class="img-fluid" src="assets/images/product/categories/elec-5.png" alt="product categorie">
                            <h6 class="cat-title">Computers</h6>
                        </a>
                    </div>
                    <!-- End .categrie-product -->
                </div>
                <!-- End .slick-single-layout -->
                <div class="slick-single-layout">
                    <div class="categrie-product" data-sal="zoom-out" data-sal-delay="400" data-sal-duration="500">
                        <a href="#">
                            <img class="img-fluid" src="assets/images/product/categories/elec-11.png" alt="product categorie">
                            <h6 class="cat-title">Accessories</h6>
                        </a>
                    </div>
                    <!-- End .categrie-product -->
                </div>
                <!-- End .slick-single-layout -->
                <div class="slick-single-layout">
                    <div class="categrie-product" data-sal="zoom-out" data-sal-delay="500" data-sal-duration="500">
                        <a href="#">
                            <img class="img-fluid" src="assets/images/product/categories/elec-6.png" alt="product categorie">
                            <h6 class="cat-title">Laptops</h6>
                        </a>
                    </div>
                    <!-- End .categrie-product -->
                </div>
                <!-- End .slick-single-layout -->
                <div class="slick-single-layout">
                    <div class="categrie-product" data-sal="zoom-out" data-sal-delay="600" data-sal-duration="500">
                        <a href="#">
                            <img class="img-fluid" src="assets/images/product/categories/elec-2.png" alt="product categorie">
                            <h6 class="cat-title">Monitors</h6>
                        </a>
                    </div>
                    <!-- End .categrie-product -->
                </div>
                <!-- End .slick-single-layout -->
                <div class="slick-single-layout">
                    <div class="categrie-product" data-sal="zoom-out" data-sal-delay="700" data-sal-duration="500">
                        <a href="#">
                            <img class="img-fluid" src="assets/images/product/categories/elec-7.png" alt="product categorie">
                            <h6 class="cat-title">Networking</h6>
                        </a>
                    </div>
                    <!-- End .categrie-product -->
                </div>
                <!-- End .slick-single-layout -->
                <div class="slick-single-layout">
                    <div class="categrie-product" data-sal="zoom-out" data-sal-delay="800" data-sal-duration="500">
                        <a href="#">
                            <img class="img-fluid" src="assets/images/product/categories/elec-8.png" alt="product categorie">
                            <h6 class="cat-title">PC Gaming</h6>
                        </a>
                    </div>
                    <!-- End .categrie-product -->
                </div>
                <!-- End .slick-single-layout -->
                <div class="slick-single-layout">
                    <div class="categrie-product">
                        <a href="#">
                            <img class="img-fluid" src="assets/images/product/categories/elec-1.png" alt="product categorie">
                            <h6 class="cat-title">Smartwatches</h6>
                        </a>
                    </div>
                    <!-- End .categrie-product -->
                </div>
                <!-- End .slick-single-layout -->
                <div class="slick-single-layout">
                    <div class="categrie-product">
                        <a href="#">
                            <img class="img-fluid" src="assets/images/product/categories/elec-9.png" alt="product categorie">
                            <h6 class="cat-title">Headphones</h6>
                        </a>
                    </div>
                    <!-- End .categrie-product -->
                </div>
                <!-- End .slick-single-layout -->
                <div class="slick-single-layout">
                    <div class="categrie-product">
                        <a href="#">
                            <img class="img-fluid" src="assets/images/product/categories/elec-10.png" alt="product categorie">
                            <h6 class="cat-title">Camera & Photo</h6>
                        </a>
                    </div>
                    <!-- End .categrie-product -->
                </div>
                <!-- End .slick-single-layout -->
                <div class="slick-single-layout">
                    <div class="categrie-product">
                        <a href="#">
                            <img class="img-fluid" src="assets/images/product/categories/elec-8.png" alt="product categorie">
                            <h6 class="cat-title">Video Games</h6>
                        </a>
                    </div>
                    <!-- End .categrie-product -->
                </div>
                <!-- End .slick-single-layout -->
                <div class="slick-single-layout">
                    <div class="categrie-product">
                        <a href="#">
                            <img class="img-fluid" src="assets/images/product/categories/elec-1.png" alt="product categorie">
                            <h6 class="cat-title">Sports</h6>
                        </a>
                    </div>
                    <!-- End .categrie-product -->
                </div>
            
            </div>
    
    </div>
    <!-- End Categorie Area  -->

    <!-- Poster Countdown Area  -->
    <div class="axil-poster-countdown hidemb">
        <div class="container">
            <div class="poster-countdown-wrap bg-lighter">
                <div class="row">
                    <div class="col-xl-5 col-lg-6">
                        <div class="poster-countdown-content">
                            <div class="section-title-wrapper">
                                <span class="title-highlighter highlighter-secondary"> <i class="fal fa-headphones-alt"></i> Don’t Miss!!</span>
                                <h2 class="title">Enhance Your Music Experience</h2>
                            </div>
                            <div class="poster-countdown countdown mb--40"></div>
                            <a href="#" class="axil-btn btn-bg-primary">Check it Out!</a>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-6">
                        <div class="poster-countdown-thumbnail">
                            <img src="./assets/images/product/poster/poster-03.png" alt="Poster Product">
                            <div class="music-singnal">
                                <div class="item-circle circle-1"></div>
                                <div class="item-circle circle-2"></div>
                                <div class="item-circle circle-3"></div>
                                <div class="item-circle circle-4"></div>
                                <div class="item-circle circle-5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Poster Countdown Area  -->

    <!-- Start Expolre Product Area  -->
    <div class="axil-product-area bg-color-white axil-section-gap">
        <div class="container">
            <div class="section-title-wrapper">
                <span class="title-highlighter highlighter-primary"> <i class="far fa-shopping-basket"></i> Our Products</span>
                <h2 class="title">Explore our Products</h2>
            </div>
            <div class="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
                <div class="slick-single-layout">
                    <div class="row row--15">
                        {#await productsPromise }
                            {@html 'loading..'}
                        {:then data} 
                        {#each data.slice(0,8) as p }
                        <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                            <div class="axil-product product-style-one">
                                <div class="thumbnail">
                                    <a href="/shop/product/{p.id}">
                                        {#each p.images as img}
                                        <img  class="main-img" src={img.src} alt={img.name}>
                                        <img class="hover-img" src={img.src} alt={img.name}>
                                        {/each}
                                    </a>
                                    <!-- <div class="label-block label-right">
                                        <div class="product-badget">20% Off</div>
                                    </div> -->
                                    <div class="product-hover-action">
                                        <ul class="cart-action">
                                            <!-- <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li> -->
                                            <li class="select-option">
                                                <a href="#" on:click={() => addToCart(p)}>
                                                    Add to Cart
                                                </a>
                                            </li>
                                            <li class="wishlist"><a href="#"><i class="far fa-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <div class="inner">
                                        <div class="product-rating">
                                            <span class="icon">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </span>
                                            <span class="rating-number">(64)</span>
                                        </div>
                                        <h5 class="title"><a href="/shop/product/{p.id}">{@html p.name}</a></h5>
                                        <div class="product-price-variant">
                                            <span class="price current-price">MRF {p.prices.price}</span>
                                            <!-- <span class="price old-price">MRF {p.prices.sales_price}</span> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        {/each}
                        {/await}
                    </div>
                </div>
             
                <div class="slick-single-layout">
                    <div class="row row--15">
                        {#await productsPromise }
                            {@html 'loading..'}
                        {:then data} 
                        {#each data.slice(8,16) as p }
                        <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                            <div class="axil-product product-style-one">
                                <div class="thumbnail">
                                    <a href="single-product.html">
                                        {#each p.images as img}
                                        <img  class="main-img" src={img.src} alt={img.name}>
                                        <img class="hover-img" src={img.src} alt={img.name}>
                                        {/each}
                                    </a>
                                    <div class="label-block label-right">
                                        <div class="product-badget">20% Off</div>
                                    </div>
                                    <div class="product-hover-action">
                                        <ul class="cart-action">
                                            <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                                            <li class="select-option">
                                                <a href="#" on:click={() => addToCart(p)}>
                                                    Add to Cart
                                                </a>
                                            </li>
                                            <li class="wishlist"><a href="#"><i class="far fa-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <div class="inner">
                                        <div class="product-rating">
                                            <span class="icon">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </span>
                                            <span class="rating-number">(64)</span>
                                        </div>
                                        <h5 class="title"><a href="#">{@html p.name}</a></h5>
                                        <div class="product-price-variant">
                                            <span class="price current-price">MRF {p.prices.price}</span>
                                            <!-- <span class="price old-price">MRF {p.prices.sales_price}</span> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        {/each}
                        {/await}
                    </div>
                </div>
             
            </div>
            <div class="row">
                <div class="col-lg-12 text-center mt--20 mt_sm--0">
                    <a href="/shop" class="axil-btn btn-bg-lighter btn-load-more">View All Products</a>
                </div>
            </div>

        </div>
    </div>
    <!-- End Expolre Product Area  -->

    <!-- Start Testimonila Area  -->
    <!-- <div class="axil-testimoial-area axil-section-gap bg-vista-white">
        <div class="container">
            <div class="section-title-wrapper">
                <span class="title-highlighter highlighter-secondary"> <i class="fal fa-quote-left"></i>Testimonials</span>
                <h2 class="title">Users Feedback</h2>
            </div>
            
            <div class="testimonial-slick-activation testimonial-style-one-wrapper slick-layout-wrapper--20 axil-slick-arrow arrow-top-slide">
                <div class="slick-single-layout testimonial-style-one">
                    <div class="review-speech">
                        <p>“ It’s amazing how much easier it has been to
                            meet new people and create instantly non
                            connections. I have the exact same personal
                            the only thing that has changed is my mind
                            set and a few behaviors. “</p>
                    </div>
                    <div class="media">
                        <div class="thumbnail">
                            <img src="./assets/images/testimonial/image-1.png" alt="testimonial image">
                        </div>
                        <div class="media-body">
                            <span class="designation">Head Of Idea</span>
                            <h6 class="title">James C. Anderson</h6>
                        </div>
                    </div>
                    
                </div>
             
                <div class="slick-single-layout testimonial-style-one">
                    <div class="review-speech">
                        <p>“ It’s amazing how much easier it has been to
                            meet new people and create instantly non
                            connections. I have the exact same personal
                            the only thing that has changed is my mind
                            set and a few behaviors. “</p>
                    </div>
                    <div class="media">
                        <div class="thumbnail">
                            <img src="./assets/images/testimonial/image-2.png" alt="testimonial image">
                        </div>
                        <div class="media-body">
                            <span class="designation">Head Of Idea</span>
                            <h6 class="title">James C. Anderson</h6>
                        </div>
                    </div>
                    
                </div>
             
                <div class="slick-single-layout testimonial-style-one">
                    <div class="review-speech">
                        <p>“ It’s amazing how much easier it has been to
                            meet new people and create instantly non
                            connections. I have the exact same personal
                            the only thing that has changed is my mind
                            set and a few behaviors. “</p>
                    </div>
                    <div class="media">
                        <div class="thumbnail">
                            <img src="./assets/images/testimonial/image-3.png" alt="testimonial image">
                        </div>
                        <div class="media-body">
                            <span class="designation">Head Of Idea</span>
                            <h6 class="title">James C. Anderson</h6>
                        </div>
                    </div>
                    
                </div>
             
                <div class="slick-single-layout testimonial-style-one">
                    <div class="review-speech">
                        <p>“ It’s amazing how much easier it has been to
                            meet new people and create instantly non
                            connections. I have the exact same personal
                            the only thing that has changed is my mind
                            set and a few behaviors. “</p>
                    </div>
                    <div class="media">
                        <div class="thumbnail">
                            <img src="./assets/images/testimonial/image-2.png" alt="testimonial image">
                        </div>
                        <div class="media-body">
                            <span class="designation">Head Of Idea</span>
                            <h6 class="title">James C. Anderson</h6>
                        </div>
                    </div>
                    
                </div>
             

            </div>
        </div>
    </div> -->
    <!-- End Testimonila Area  -->

    <!-- Start New Arrivals Product Area  -->
    <!-- <div class="axil-new-arrivals-product-area bg-color-white axil-section-gap pb--0">
        <div class="container">
            <div class="product-area pb--50">
                <div class="section-title-wrapper">
                    <span class="title-highlighter highlighter-primary"><i class="far fa-shopping-basket"></i>This Week’s</span>
                    <h2 class="title">New Arrivals</h2>
                </div>
                <div class="new-arrivals-product-activation slick-layout-wrapper--30 axil-slick-arrow  arrow-top-slide">
                    <div class="slick-single-layout">
                        <div class="axil-product product-style-two">
                            <div class="thumbnail">
                                <a href="single-product.html">
                                    <img data-sal="zoom-out" data-sal-delay="200" data-sal-duration="500" src="assets/images/product/electric/product-05.png" alt="Product Images">
                                </a>
                                <div class="label-block label-right">
                                    <div class="product-badget">10% OFF</div>
                                </div>
                            </div>
                            <div class="product-content">
                                <div class="inner">
                                    <div class="color-variant-wrapper">
                                        <ul class="color-variant">
                                            <li class="color-extra-01 active"><span><span class="color"></span></span>
                                            </li>
                                            <li class="color-extra-02"><span><span class="color"></span></span>
                                            </li>
                                            <li class="color-extra-03"><span><span class="color"></span></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 class="title"><a href="single-product.html">Demon's Souls</a></h5>
                                    <div class="product-price-variant">
                                        <span class="price old-price">$40</span>
                                        <span class="price current-price">$30</span>
                                    </div>
                                    <div class="product-hover-action">
                                        <ul class="cart-action">
                                            <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                                            <li class="select-option"><a href="single-product.html">Add to Cart</a></li>
                                            <li class="wishlist"><a href="wishlist.html"><i class="far fa-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                    <div class="slick-single-layout">
                        <div class="axil-product product-style-two">
                            <div class="thumbnail">
                                <a href="single-product.html">
                                    <img data-sal="zoom-out" data-sal-delay="300" data-sal-duration="500" src="assets/images/product/electric/product-06.png" alt="Product Images">
                                </a>
                            </div>
                            <div class="product-content">
                                <div class="inner">
                                    <div class="color-variant-wrapper">
                                        <ul class="color-variant">
                                            <li class="color-extra-01 active"><span><span class="color"></span></span>
                                            </li>
                                            <li class="color-extra-02"><span><span class="color"></span></span>
                                            </li>
                                            <li class="color-extra-03"><span><span class="color"></span></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 class="title"><a href="single-product.html">Google Home</a></h5>
                                    <div class="product-price-variant">
                                        <span class="price old-price">$50</span>
                                        <span class="price current-price">$40</span>
                                    </div>
                                </div>
                                <div class="product-hover-action">
                                    <ul class="cart-action">
                                        <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                                        <li class="select-option"><a href="single-product.html">Select Option</a></li>
                                        <li class="wishlist"><a href="wishlist.html"><i class="far fa-heart"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                    <div class="slick-single-layout">
                        <div class="axil-product product-style-two">
                            <div class="thumbnail">
                                <a href="single-product.html">
                                    <img data-sal="zoom-out" data-sal-delay="400" data-sal-duration="500" src="assets/images/product/electric/product-07.png" alt="Product Images">
                                </a>
                                <div class="label-block label-right">
                                    <div class="product-badget">15% OFF</div>
                                </div>

                            </div>
                            <div class="product-content">
                                <div class="inner">
                                    <div class="color-variant-wrapper">
                                        <ul class="color-variant">
                                            <li class="color-extra-01 active"><span><span class="color"></span></span>
                                            </li>
                                            <li class="color-extra-02"><span><span class="color"></span></span>
                                            </li>
                                            <li class="color-extra-03"><span><span class="color"></span></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 class="title"><a href="single-product.html">Netfilx Remot</a></h5>
                                    <div class="product-price-variant">
                                        <span class="price old-price">$60</span>
                                        <span class="price current-price">$45</span>
                                    </div>
                                    <div class="product-hover-action">
                                        <ul class="cart-action">
                                            <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                                            <li class="select-option"><a href="single-product.html">Add to Cart</a></li>
                                            <li class="wishlist"><a href="wishlist.html"><i class="far fa-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                    <div class="slick-single-layout">
                        <div class="axil-product product-style-two">
                            <div class="thumbnail">
                                <a href="single-product.html">
                                    <img data-sal="zoom-out" data-sal-delay="500" data-sal-duration="500" src="assets/images/product/electric/product-08.png" alt="Product Images">
                                </a>
                                <div class="label-block label-right">
                                    <div class="product-badget">30% OFF</div>
                                </div>

                            </div>
                            <div class="product-content">
                                <div class="inner">
                                    <div class="color-variant-wrapper">
                                        <ul class="color-variant">
                                            <li class="color-extra-01 active"><span><span class="color"></span></span>
                                            </li>
                                            <li class="color-extra-02"><span><span class="color"></span></span>
                                            </li>
                                            <li class="color-extra-03"><span><span class="color"></span></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 class="title"><a href="single-product.html">Digital Accessories</a></h5>
                                    <div class="product-price-variant">
                                        <span class="price old-price">$30</span>
                                        <span class="price current-price">$20</span>
                                    </div>
                                    <div class="product-hover-action">
                                        <ul class="cart-action">
                                            <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                                            <li class="select-option"><a href="single-product.html">Add to Cart</a></li>
                                            <li class="wishlist"><a href="wishlist.html"><i class="far fa-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                    <div class="slick-single-layout">
                        <div class="axil-product product-style-two">
                            <div class="thumbnail">
                                <a href="single-product.html">
                                    <img data-sal="zoom-out" data-sal-delay="100" data-sal-duration="500" src="assets/images/product/electric/product-04.png" alt="Product Images">
                                </a>
                                <div class="label-block label-right">
                                    <div class="product-badget">50% OFF</div>
                                </div>
                            </div>
                            <div class="product-content">
                                <div class="inner">
                                    <div class="color-variant-wrapper">
                                        <ul class="color-variant">
                                            <li class="color-extra-01 active"><span><span class="color"></span></span>
                                            </li>
                                            <li class="color-extra-02"><span><span class="color"></span></span>
                                            </li>
                                            <li class="color-extra-03"><span><span class="color"></span></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 class="title"><a href="single-product.html">PS5 Smart Remote</a></h5>
                                    <div class="product-price-variant">
                                        <span class="price old-price">$50</span>
                                        <span class="price current-price">$25</span>
                                    </div>
                                    <div class="product-hover-action">
                                        <ul class="cart-action">
                                            <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                                            <li class="select-option"><a href="single-product.html">Add to Cart</a></li>
                                            <li class="wishlist"><a href="wishlist.html"><i class="far fa-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
    </div> -->
    <!-- End New Arrivals Product Area  -->

    <!-- Start Most Sold Product Area  -->
    <!-- <div class="axil-most-sold-product axil-section-gap">
        <div class="container">
            <div class="product-area pb--50">
                <div class="section-title-wrapper section-title-center">
                    <span class="title-highlighter highlighter-primary"><i class="fas fa-star"></i> Most Sold</span>
                    <h2 class="title">Most Sold in eTrade Store</h2>
                </div>
                <div class="row row-cols-xl-2 row-cols-1 row--15">
                    <div class="col">
                        <div class="axil-product-list">
                            <div class="thumbnail">
                                <a href="single-product.html">
                                    <img data-sal="zoom-in" data-sal-delay="100" data-sal-duration="1500" src="./assets/images/product/electric/product-09.png" alt="Yantiti Leather Bags">
                                </a>
                            </div>
                            <div class="product-content">
                                <div class="product-rating">
                                    <span class="rating-icon">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fal fa-star"></i>
                            </span>
                                    <span class="rating-number"><span>100+</span> Reviews</span>
                                </div>
                                <h6 class="product-title"><a href="single-product.html">Media Remote</a></h6>
                                <div class="product-price-variant">
                                    <span class="price current-price">$29.99</span>
                                    <span class="price old-price">$49.99</span>
                                </div>
                                <div class="product-cart">
                                    <a href="cart.html" class="cart-btn"><i class="fal fa-shopping-cart"></i></a>
                                    <a href="wishlist.html" class="cart-btn"><i class="fal fa-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="axil-product-list">
                            <div class="thumbnail">
                                <a href="single-product.html">
                                    <img data-sal="zoom-in" data-sal-delay="200" data-sal-duration="1500" src="./assets/images/product/electric/product-10.png" alt="Yantiti Leather Bags">
                                </a>
                            </div>
                            <div class="product-content">
                                <div class="product-rating">
                                    <span class="rating-icon">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fal fa-star"></i>
                            </span>
                                    <span class="rating-number"><span>50+</span> Reviews</span>
                                </div>
                                <h6 class="product-title"><a href="single-product.html">HD Camera</a></h6>
                                <div class="product-price-variant">
                                    <span class="price current-price">$49.99</span>
                                </div>
                                <div class="product-cart">
                                    <a href="cart.html" class="cart-btn"><i class="fal fa-shopping-cart"></i></a>
                                    <a href="wishlist.html" class="cart-btn"><i class="fal fa-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="axil-product-list">
                            <div class="thumbnail">
                                <a href="single-product.html">
                                    <img data-sal="zoom-in" data-sal-delay="300" data-sal-duration="1500" src="./assets/images/product/electric/product-11.png" alt="Yantiti Leather Bags">
                                </a>
                            </div>
                            <div class="product-content">
                                <div class="product-rating">
                                    <span class="rating-icon">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fal fa-star"></i>
                            </span>
                                    <span class="rating-number"><span>120+</span> Reviews</span>
                                </div>
                                <h6 class="product-title"><a href="single-product.html">Gaming Controller</a></h6>
                                <div class="product-price-variant">
                                    <span class="price current-price">$50.00</span>
                                </div>
                                <div class="product-cart">
                                    <a href="cart.html" class="cart-btn"><i class="fal fa-shopping-cart"></i></a>
                                    <a href="wishlist.html" class="cart-btn"><i class="fal fa-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="axil-product-list">
                            <div class="thumbnail">
                                <a href="single-product.html">
                                    <img data-sal="zoom-in" data-sal-delay="400" data-sal-duration="1500" src="./assets/images/product/electric/product-12.png" alt="Yantiti Leather Bags">
                                </a>
                            </div>
                            <div class="product-content">
                                <div class="product-rating">
                                    <span class="rating-icon">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fal fa-star"></i>
                            </span>
                                    <span class="rating-number"><span>30+</span> Reviews</span>
                                </div>
                                <h6 class="product-title"><a href="single-product.html">Wall Mount </a></h6>
                                <div class="product-price-variant">
                                    <span class="price current-price">$19.00</span>
                                </div>
                                <div class="product-cart">
                                    <a href="cart.html" class="cart-btn"><i class="fal fa-shopping-cart"></i></a>
                                    <a href="wishlist.html" class="cart-btn"><i class="fal fa-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="axil-product-list">
                            <div class="thumbnail">
                                <a href="single-product.html">
                                    <img data-sal="zoom-in" data-sal-delay="500" data-sal-duration="1500" src="./assets/images/product/electric/product-13.png" alt="Yantiti Leather Bags">
                                </a>
                            </div>
                            <div class="product-content">
                                <div class="product-rating">
                                    <span class="rating-icon">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fal fa-star"></i>
                            </span>
                                    <span class="rating-number"><span>700+</span> Reviews</span>
                                </div>
                                <h6 class="product-title"><a href="single-product.html">Lenevo Laptop</a></h6>
                                <div class="product-price-variant">
                                    <span class="price current-price">$999.99</span>
                                </div>
                                <div class="product-cart">
                                    <a href="cart.html" class="cart-btn"><i class="fal fa-shopping-cart"></i></a>
                                    <a href="wishlist.html" class="cart-btn"><i class="fal fa-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="axil-product-list">
                            <div class="thumbnail">
                                <a href="single-product.html">
                                    <img data-sal="zoom-in" data-sal-delay="600" data-sal-duration="1500" src="./assets/images/product/electric/product-14.png" alt="Yantiti Leather Bags">
                                </a>
                            </div>
                            <div class="product-content">
                                <div class="product-rating">
                                    <span class="rating-icon">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fal fa-star"></i>
                            </span>
                                    <span class="rating-number"><span>300+</span> Reviews</span>
                                </div>
                                <h6 class="product-title"><a href="single-product.html">Juice Grinder Machine</a></h6>
                                <div class="product-price-variant">
                                    <span class="price current-price">$99.00</span>
                                </div>
                                <div class="product-cart">
                                    <a href="cart.html" class="cart-btn"><i class="fal fa-shopping-cart"></i></a>
                                    <a href="wishlist.html" class="cart-btn"><i class="fal fa-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="axil-product-list">
                            <div class="thumbnail">
                                <a href="single-product.html">
                                    <img data-sal="zoom-in" data-sal-delay="400" data-sal-duration="1500" src="./assets/images/product/electric/product-15.png" alt="Yantiti Leather Bags">
                                </a>
                            </div>
                            <div class="product-content">
                                <div class="product-rating">
                                    <span class="rating-icon">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fal fa-star"></i>
                            </span>
                                    <span class="rating-number"><span>100+</span> Reviews</span>
                                </div>
                                <h6 class="product-title"><a href="single-product.html">Wireless Headphone</a></h6>
                                <div class="product-price-variant">
                                    <span class="price current-price">$59.99</span>
                                </div>
                                <div class="product-cart">
                                    <a href="cart.html" class="cart-btn"><i class="fal fa-shopping-cart"></i></a>
                                    <a href="wishlist.html" class="cart-btn"><i class="fal fa-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="axil-product-list">
                            <div class="thumbnail">
                                <a href="single-product.html">
                                    <img data-sal="zoom-in" data-sal-delay="500" data-sal-duration="1500" src="./assets/images/product/electric/product-16.png" alt="Yantiti Leather Bags">
                                </a>
                            </div>
                            <div class="product-content">
                                <div class="product-rating">
                                    <span class="rating-icon">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fal fa-star"></i>
                            </span>
                                    <span class="rating-number"><span>100+</span> Reviews</span>
                                </div>
                                <h6 class="product-title"><a href="single-product.html">Asus Zenbook Laptop</a></h6>
                                <div class="product-price-variant">
                                    <span class="price current-price">$899.00</span>
                                </div>
                                <div class="product-cart">
                                    <a href="cart.html" class="cart-btn"><i class="fal fa-shopping-cart"></i></a>
                                    <a href="wishlist.html" class="cart-btn"><i class="fal fa-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <!-- End Most Sold Product Area  -->

    <!-- Start Why Choose Area  -->
    <div class="axil-why-choose-area pb--50 pb_sm--30">
        <div class="container">
            <div class="section-title-wrapper section-title-center">
                <span class="title-highlighter highlighter-secondary"><i class="fal fa-thumbs-up"></i>Why Us</span>
                <h2 class="title">Why People Choose Us</h2>
            </div>
            <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 row--20">
                <div class="col">
                    <div class="service-box">
                        <div class="icon">
                            <img src="./assets/images/icons/service6.png" alt="Service">
                        </div>
                        <h6 class="title">Fast &amp; Secure Delivery</h6>
                    </div>
                </div>
                <div class="col">
                    <div class="service-box">
                        <div class="icon">
                            <img src="./assets/images/icons/service7.png" alt="Service">
                        </div>
                        <h6 class="title">100% Guarantee On Product</h6>
                    </div>
                </div>
                <div class="col">
                    <div class="service-box">
                        <div class="icon">
                            <img src="./assets/images/icons/service8.png" alt="Service">
                        </div>
                        <h6 class="title">24 Hour Return Policy</h6>
                    </div>
                </div>
                <div class="col">
                    <div class="service-box">
                        <div class="icon">
                            <img src="./assets/images/icons/service9.png" alt="Service">
                        </div>
                        <h6 class="title">24 Hour Return Policy</h6>
                    </div>
                </div>
                <div class="col">
                    <div class="service-box">
                        <div class="icon">
                            <img src="./assets/images/icons/service10.png" alt="Service">
                        </div>
                        <h6 class="title">Next Level Pro Quality</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Why Choose Area  -->


    <!-- Start Axil Product Poster Area  -->
    <div class="axil-poster">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mb--30">
                    <div class="single-poster">
                        <a href="shop.html">
                            <img src="./assets/images/product/poster/poster-01.png" alt="eTrade promotion poster">
                            <div class="poster-content">
                                <div class="inner">
                                    <h3 class="title">Rich sound, <br> for less.</h3>
                                    <span class="sub-title">Collections <i class="fal fa-long-arrow-right"></i></span>
                                </div>
                            </div>
                            <!-- End .poster-content -->
                        </a>
                    </div>
                    <!-- End .single-poster -->
                </div>
                <div class="col-lg-6 mb--30">
                    <div class="single-poster">
                        <a href="shop-sidebar.html">
                            <img src="./assets/images/product/poster/poster-02.png" alt="eTrade promotion poster">
                            <div class="poster-content content-left">
                                <div class="inner">
                                    <span class="sub-title">50% Offer In Winter</span>
                                    <h3 class="title">Get VR <br> Reality Glass</h3>
                                </div>
                            </div>
                            <!-- End .poster-content -->
                        </a>
                    </div>
                    <!-- End .single-poster -->
                </div>
            </div>
        </div>
    </div>
    <!-- End Axil Product Poster Area  -->

    <!-- Start Axil Newsletter Area  -->
    <div class="axil-newsletter-area axil-section-gap pt--0">
        <div class="container">
            <div class="etrade-newsletter-wrapper bg_image bg_image--5">
                <div class="newsletter-content">
                    <span class="title-highlighter highlighter-primary2"><i class="fas fa-envelope-open"></i>Newsletter</span>
                    <h2 class="title mb--40 mb_sm--30">Get weekly update</h2>
                    <div class="input-group newsletter-form">
                        <div class="position-relative newsletter-inner mb--15">
                            <input placeholder="example@gmail.com" type="text">
                        </div>
                        <button type="submit" class="axil-btn mb--15">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- End .container -->
    </div>
    <!-- End Axil Newsletter Area  -->

</main>


<div class="service-area">
    <div class="container">
        <div class="row row-cols-xl-4 row-cols-sm-2 row-cols-1 row--20">
            <div class="col">
                <div class="service-box service-style-2">
                    <div class="icon">
                        <img src="/assets/images/icons/service1.png" alt="Service">
                    </div>
                    <div class="content">
                        <h6 class="title">Fast &amp; Secure Delivery</h6>
                        <p>Tell about your service.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="service-box service-style-2">
                    <div class="icon">
                        <img src="/assets/images/icons/service2.png" alt="Service">
                    </div>
                    <div class="content">
                        <h6 class="title">Money Back Guarantee</h6>
                        <p>Within 10 days.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="service-box service-style-2">
                    <div class="icon">
                        <img src="/assets/images/icons/service3.png" alt="Service">
                    </div>
                    <div class="content">
                        <h6 class="title">24 Hour Return Policy</h6>
                        <p>No question ask.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="service-box service-style-2">
                    <div class="icon">
                        <img src="/assets/images/icons/service4.png" alt="Service">
                    </div>
                    <div class="content">
                        <h6 class="title">Pro Quality Support</h6>
                        <p>24/7 Live support.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer />

   <!-- Product Quick View Modal Start -->
   <div class="modal fade quick-view-product" id="quick-view-modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="far fa-times"></i></button>
            </div>
            <div class="modal-body">
                <div class="single-product-thumb">
                    <div class="row">
                        <div class="col-lg-7 mb--40">
                            <div class="row">
                                <div class="col-lg-10 order-lg-2">
                                    <div class="single-product-thumbnail product-large-thumbnail axil-product thumbnail-badge zoom-gallery">
                                        <div class="thumbnail">
                                            <img src="/assets/images/product/product-big-01.png" alt="Product Images">
                                            <div class="label-block label-right">
                                                <div class="product-badget">20% OFF</div>
                                            </div>
                                            <div class="product-quick-view position-view">
                                                <a href="/assets/images/product/product-big-01.png" class="popup-zoom">
                                                    <i class="far fa-search-plus"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="thumbnail">
                                            <img src="/assets/images/product/product-big-02.png" alt="Product Images">
                                            <div class="label-block label-right">
                                                <div class="product-badget">20% OFF</div>
                                            </div>
                                            <div class="product-quick-view position-view">
                                                <a href="/assets/images/product/product-big-02.png" class="popup-zoom">
                                                    <i class="far fa-search-plus"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="thumbnail">
                                            <img src="/assets/images/product/product-big-03.png" alt="Product Images">
                                            <div class="label-block label-right">
                                                <div class="product-badget">20% OFF</div>
                                            </div>
                                            <div class="product-quick-view position-view">
                                                <a href="/assets/images/product/product-big-03.png" class="popup-zoom">
                                                    <i class="far fa-search-plus"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 order-lg-1">
                                    <div class="product-small-thumb small-thumb-wrapper">
                                        <div class="small-thumb-img">
                                            <img src="/assets/images/product/product-thumb/thumb-08.png" alt="thumb image">
                                        </div>
                                        <div class="small-thumb-img">
                                            <img src="/assets/images/product/product-thumb/thumb-07.png" alt="thumb image">
                                        </div>
                                        <div class="small-thumb-img">
                                            <img src="/assets/images/product/product-thumb/thumb-09.png" alt="thumb image">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 mb--40">
                            <div class="single-product-content">
                                <div class="inner">
                                    <div class="product-rating">
                                        <div class="star-rating">
                                            <img src="/assets/images/icons/rate.png" alt="Rate Images">
                                        </div>
                                        <div class="review-link">
                                            <a href="#">(<span>1</span> customer reviews)</a>
                                        </div>
                                    </div>
                                    <h3 class="product-title">Serif Coffee Table</h3>
                                    <span class="price-amount">$155.00 - $255.00</span>
                                    <ul class="product-meta">
                                        <li><i class="fal fa-check"></i>In stock</li>
                                        <li><i class="fal fa-check"></i>Free delivery available</li>
                                        <li><i class="fal fa-check"></i>Sales 30% Off Use Code: MOTIVE30</li>
                                    </ul>
                                    <p class="description">In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante est, elementum eget magna. Pellentesque sagittis dictum libero, eu dignissim tellus.</p>

                                    <div class="product-variations-wrapper">

                                        <!-- Start Product Variation  -->
                                        <div class="product-variation">
                                            <h6 class="title">Colors:</h6>
                                            <div class="color-variant-wrapper">
                                                <ul class="color-variant mt--0">
                                                    <li class="color-extra-01 active"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-02"><span><span class="color"></span></span>
                                                    </li>
                                                    <li class="color-extra-03"><span><span class="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <!-- End Product Variation  -->

                                        <!-- Start Product Variation  -->
                                        <div class="product-variation">
                                            <h6 class="title">Size:</h6>
                                            <ul class="range-variant">
                                                <li>xs</li>
                                                <li>s</li>
                                                <li>m</li>
                                                <li>l</li>
                                                <li>xl</li>
                                            </ul>
                                        </div>
                                        <!-- End Product Variation  -->

                                    </div>

                                    <!-- Start Product Action Wrapper  -->
                                    <div class="product-action-wrapper d-flex-center">
                                        <!-- Start Quentity Action  -->
                                        <div class="pro-qty"><input type="text" value="1"></div>
                                        <!-- End Quentity Action  -->

                                        <!-- Start Product Action  -->
                                        <ul class="product-action d-flex-center mb--0">
                                            <li class="add-to-cart"><a href="cart" class="axil-btn btn-bg-primary">Add to Cart</a></li>
                                            <li class="wishlist"><a href="wishlist" class="axil-btn wishlist-btn"><i class="far fa-heart"></i></a></li>
                                        </ul>
                                        <!-- End Product Action  -->

                                    </div>
                                    <!-- End Product Action Wrapper  -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Product Quick View Modal End -->

<!-- Header Search Modal End -->
<div class="header-search-modal" id="header-search-modal">
    <button class="card-close sidebar-close"><i class="fas fa-times"></i></button>
    <div class="header-search-wrap">
        <div class="card-header">
            <form action="#">
                <div class="input-group">
                    <input type="search" class="form-control" name="prod-search" id="prod-search" placeholder="Write Something....">
                    <button type="submit" class="axil-btn btn-bg-primary"><i class="far fa-search"></i></button>
                </div>
            </form>
        </div>
        <div class="card-body">
            <div class="search-result-header">
                <h6 class="title">24 Result Found</h6>
                <a href="shop" class="view-all">View All</a>
            </div>
            <div class="psearch-results">
                <div class="axil-product-list">
                    <div class="thumbnail">
                        <a href="single-product">
                            <img src="/assets/images/product/electric/product-09.png" alt="Yantiti Leather Bags">
                        </a>
                    </div>
                    <div class="product-content">
                        <div class="product-rating">
                            <span class="rating-icon">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fal fa-star"></i>
                        </span>
                            <span class="rating-number"><span>100+</span> Reviews</span>
                        </div>
                        <h6 class="product-title"><a href="single-product">Media Remote</a></h6>
                        <div class="product-price-variant">
                            <span class="price current-price">$29.99</span>
                            <span class="price old-price">$49.99</span>
                        </div>
                        <div class="product-cart">
                            <a href="cart" class="cart-btn"><i class="fal fa-shopping-cart"></i></a>
                            <a href="wishlist" class="cart-btn"><i class="fal fa-heart"></i></a>
                        </div>
                    </div>
                </div>
                <div class="axil-product-list">
                    <div class="thumbnail">
                        <a href="single-product">
                            <img src="/assets/images/product/electric/product-09.png" alt="Yantiti Leather Bags">
                        </a>
                    </div>
                    <div class="product-content">
                        <div class="product-rating">
                            <span class="rating-icon">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fal fa-star"></i>
                        </span>
                            <span class="rating-number"><span>100+</span> Reviews</span>
                        </div>
                        <h6 class="product-title"><a href="single-product">Media Remote</a></h6>
                        <div class="product-price-variant">
                            <span class="price current-price">$29.99</span>
                            <span class="price old-price">$49.99</span>
                        </div>
                        <div class="product-cart">
                            <a href="cart" class="cart-btn"><i class="fal fa-shopping-cart"></i></a>
                            <a href="wishlist" class="cart-btn"><i class="fal fa-heart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Header Search Modal End -->
<Cart {cart} {total} />



<!-- Offer Modal Start -->
<div class="offer-popup-modal" id="offer-popup-modal">
    <div class="offer-popup-wrap">
        <div class="card-body">
            <button class="popup-close"><i class="fas fa-times"></i></button>
            <div class="content">
                <div class="section-title-wrapper">
                    <span class="title-highlighter highlighter-primary"> <i class="far fa-shopping-basket"></i> Don’t Miss!!</span>
                    <h3 class="title">Best Sales Offer<br> Grab Yours</h3>
                </div>
                <div class="poster-countdown countdown"></div>
                <a href="shop" class="axil-btn btn-bg-primary">Shop Now <i class="fal fa-long-arrow-right"></i></a>
            </div>
        </div>
    </div>
</div>
<div class="closeMask"></div>