<?php
include "lib/config.php";

include "templates/header.php";

?>
<header class="header">
    <div class="header__logo">
        <img src="./resources/logo.png" alt="Neozink logo" title="Neoshop" />
    </div><!-- .header__logo -->
    <div class="header__shop shop">
        <a href="#" class="shop__button">
            <span class="shop__icon"><i class="fas fa-shopping-cart"></i></i></span>
            <span class="shop__text">Carrito</span>
        </a><!-- .shop__button -->
        <a href="#" class="shop__button">
            <span class="shop__icon"><i class="fas fa-user"></i></span>
            <span class="shop__text">Mi perfil</span>
        </a><!-- .shop__button -->
        <a href="#" class="shop__button">
            <span class="shop__icon"><i class="fas fa-box-open"></i></i></span>
            <span class="shop__text">Mis pedidos</span>
        </a><!-- .shop__button -->
    </div><!-- .header__shop -->
</header>
<main>
    <?php
    include "templates/components/slider.php";
    ?>
    <section class=products__wrapper>
        <h2 class="products__title">PRODUCTOS</h2>
        
        <?php
        include "templates/components/products.php";
        ?> 
    
    </section>
</main>
<footer class="footer">
    <div class="load">
        <button class="load__button button">Cargar más productos</button>
    </div>
    <p><img src="./resources/logo.png" alt="Neoshop" title="Neoshop" /></p>
    <p>Prueba técnica para candidatos</p>
</footer>
<?php
include "templates/footer.php";
