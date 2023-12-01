<script>
    export let cart
    export let total
</script>
<div class="cart-dropdown" id="cart-dropdown">
    <div class="cart-content-wrap">
        <div class="cart-header">
            <h2 class="header-title">Cart review</h2>
            <button class="cart-close sidebar-close"><i class="fas fa-times"></i></button>
        </div>
        <div class="cart-body">
            <ul class="cart-item-list">
                {#each cart as item }
                <li class="cart-item">
                    <div class="item-img">
                        <a href="single-product"><img src="{item.images[0].src}" alt="{item.name}"></a>
                        <button class="close-btn" click on:click={() => minusItem(item)}><i class="fas fa-times"></i></button>
                    </div>
                    <div class="item-content">
                        <div class="product-rating">
                            <span class="icon">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </span>
                            <!-- <span class="rating-number">(64)</span> -->
                        </div>
                        <h3 class="item-title"><a href="single-product-3">{item.name}</a></h3>
                        <div class="item-price"><span class="currency-symbol">MRF</span>{item.prices.price}</div>
                        <div class="pro-qty item-quantity">
                            <span class="dec qtybtn" click on:click={() => minusItem(item)}>-</span>
                            <input type="number" class="quantity-input" value="{item.quantity}">
                            <span class="inc qtybtn" on:click={() => plusItem(item)}>+</span>
                        </div>
                    </div>
                </li>
                {/each}
                
            </ul>
        </div>
        <div class="cart-footer">
            <h3 class="cart-subtotal">
                <span class="subtotal-title">Subtotal:</span>
                <span class="subtotal-amount">{total ?? total}</span>
            </h3>
            <div class="group-btn">
                <a href="#" class="axil-btn btn-bg-primary viewcart-btn">View Cart</a>
                <a href="#" class="axil-btn btn-bg-secondary checkout-btn">Checkout</a>
            </div>
        </div>
    </div>
</div>