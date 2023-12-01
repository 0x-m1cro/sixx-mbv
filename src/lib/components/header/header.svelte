 <script>
     export let cart
 </script>
 <style>
    @media (max-width: 768px){
        .hidemb {
            display: none !important;
        }
    }
 </style>
<a href="#top" class="back-to-top" id="backto-top"><i class="fal fa-arrow-up"></i></a>
<header class="header axil-header header-style-1">
    <!-- <div class="header-top-campaign">
        <div class="container position-relative">
            <div class="campaign-content">
                <p>Open Doors To A World Of Fashion <a href="#">Discover More</a></p>
            </div>
        </div>
        <button class="remove-campaign"><i class="fal fa-times"></i></button>
    </div> -->
    <div class="axil-header-top hidemb">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-sm-6">
                    <div class="header-top-dropdown">
                        <div class="dropdown">
                            <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                English
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">English</a></li>
                                <li><a class="dropdown-item" href="#">Arabic</a></li>
                                <li><a class="dropdown-item" href="#">Spanish</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                USD
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">USD</a></li>
                                <li><a class="dropdown-item" href="#">AUD</a></li>
                                <li><a class="dropdown-item" href="#">EUR</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="header-top-link">
                        <ul class="quick-link">
                            <li><a href="#">Help</a></li>
                            <li><a href="sign-up">Join Us</a></li>
                            <li><a href="sign-in">Sign In</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Start Mainmenu Area  -->
    <div id="axil-sticky-placeholder"></div>
    <div class="axil-mainmenu">
        <div class="container">
            <div class="header-navbar">
                <div class="header-brand">
                    <a href="index" class="logo logo-dark">
                        <img src="https://six-x.shop/wp-content/uploads/2020/06/logo-6x-final.png" height="100px" width="100px" alt="Site Logo">
                    </a>
                    <a href="index" class="logo logo-light">
                        <img src="https://six-x.shop/wp-content/uploads/2020/06/logo-6x-final.png" height="100px" width="100px" alt="Site Logo">
                    </a>
                </div>
                <div class="header-main-nav">
                    <!-- Start Mainmanu Nav -->
                    <nav class="mainmenu-nav">
                        <button class="mobile-close-btn mobile-nav-toggler"><i class="fas fa-times"></i></button>
                        <div class="mobile-nav-brand">
                            <a href="index" class="logo">
                                <img src="https://six-x.shop/wp-content/uploads/2020/06/logo-6x-final.png" height="100px" width="100px" alt="Site Logo">
                            </a>
                        </div>
                        <ul class="mainmenu">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/shop">Shop</a>
                            </li>
                            <!-- <li class="menu-item-has-children">
                                <a href="#">Pages</a>
                                <ul class="axil-submenu">
                                    <li><a href="wishlist">Wishlist</a></li>
                                    <li><a href="cart">Cart</a></li>
                                    <li><a href="checkout">Checkout</a></li>
                                    <li><a href="my-account">Account</a></li>
                                    <li><a href="sign-up">Sign Up</a></li>
                                    <li><a href="sign-in">Sign In</a></li>
                                    <li><a href="forgot-password">Forgot Password</a></li>
                                    <li><a href="reset-password">Reset Password</a></li>
                                    <li><a href="privacy-policy">Privacy Policy</a></li>
                                    <li><a href="coming-soon">Coming Soon</a></li>
                                    <li><a href="404">404 Error</a></li>
                                    <li><a href="typography">Typography</a></li>
                                </ul>
                            </li> -->
                            <li><a href="#">About</a></li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <!-- End Mainmanu Nav -->
                </div>
                <div class="header-action">
                    <ul class="action-list">
                        <li class="axil-search">
                            <a href="javascript:void(0)" class="header-search-icon" title="Search">
                                <i class="flaticon-magnifying-glass"></i>
                            </a>
                        </li>
                        <li class="wishlist">
                            <a href="wishlist">
                                <i class="flaticon-heart"></i>
                            </a>
                        </li>
                        <li class="shopping-cart">
                            <a href="#" class="cart-dropdown-btn">
                                <span class="cart-count">{cart ? cart.length : '0'}</span>
                                <i class="flaticon-shopping-cart"></i>
                            </a>
                        </li>
                        <li class="my-account">
                            <a href="javascript:void(0)">
                                <i class="flaticon-person"></i>
                            </a>
                            <div class="my-account-dropdown">
                                <span class="title">QUICKLINKS</span>
                                <ul>
                                    <li>
                                        <a href="#">My Account</a>
                                    </li>
                                    <li>
                                        <a href="#">Initiate return</a>
                                    </li>
                                    <li>
                                        <a href="#">Support</a>
                                    </li>
                                    <li>
                                        <a href="#">Language</a>
                                    </li>
                                </ul>
                                <div class="login-btn">
                                    <a href="#" class="axil-btn btn-bg-primary">Login</a>
                                </div>
                                <div class="reg-footer text-center">No account yet? <a href="#" class="btn-link">REGISTER HERE.</a></div>
                            </div>
                        </li>
                        <li class="axil-mobile-toggle">
                            <button class="menu-btn mobile-nav-toggler">
                                <i class="flaticon-menu-2"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- End Mainmenu Area -->
</header>