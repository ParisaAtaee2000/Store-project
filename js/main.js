/* *************************wishlist*********************** */

$(document).ready(function () {

    $(".star1").click(function () {
        $(this).hide(1000).parents(".stars").find(".star2").show(1000);
    })

    $(".star2").click(function () {
        $(this).hide(1000).parents(".stars").find(".star1").show(1000)
    });

    $("#MoreBtn").click(function () {
        $(".products-list2").toggle()
        $("#MoreBtn1").toggle()
        $("#MoreBtn").toggle()
    })

    $("#MoreBtn1").click(function () {
        $(".products-list2").toggle()
        $("#MoreBtn1").toggle()
        $("#MoreBtn").toggle()
    })

    $("#addToCart1").click(function () {
        if (confirm("please sign in")) {
            open("check out.html")
        }

    })
    $("#addToWishlist").click(function () {
        if (confirm("please sign in")) {
            open("check out.html")
        }
    })
});






let menuItems = document.querySelectorAll('.menu-item');

const navItemClick = function (el) {
    let element = this;

    menuItems.forEach(item => {
        item.classList.remove('active');
    });

    element.classList.add('active');
}

menuItems.forEach(item => {
    item.addEventListener('click', navItemClick);
});


let productsMenuItems = document.querySelectorAll('.product-menu_items li');

const productsNavItemClick = function (el) {
    let elements = this;

    productsMenuItems.forEach(item => {
        item.classList.remove('product-active');
    });

    elements.classList.add('product-active');
}

productsMenuItems.forEach(item => {
    item.addEventListener('click', productsNavItemClick);
});

/***********************************ajax*****************************************/

$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "https://jsonplaceholder.typicode.com/comments",
        success: (data) => {
            $(".spinner-border").css({ display: "none" });
            const top = data.slice(0, 2)
            let finalfirstReview = "";
            let finalfirstemail = ""
            finalfirstReview = top[0].body;
            finalfirstemail = top[0].email;
            $(".first-review").html(finalfirstReview);
            $(".first-user_email").html(finalfirstemail);

            let finalSecondReview = "";
            let finalSecondemail = ""
            finalSecondReview = top[1].body;
            finalSecondemail = top[1].email;
            $(".second-review").html(finalSecondReview);
            $(".second-user_email").html(finalSecondemail);

        }
    })
})



$(document).ready(function () {
    $("#description").click(function () {
        $(".description-text").css({ display: "block" })
        $(".howtouse-text").css({ display: "none" })
        $(".reviews-text").css({ display: "none" })
    })
    $("#howToUse").click(function () {
        $(".howtouse-text").css({ display: "block" })
        $(".reviews-text").css({ display: "none" })
        $(".description-text").css({ display: "none" })
    })

    $("#reviews").click(function () {
        $(".reviews-text").css({ display: "block" })
        $(".description-text").css({ display: "none" })
        $(".howtouse-text").css({ display: "none" })
    })
})


/* *********************navbar menu********************** */

 $(document).ready(function () {
    $(".menu__icon").click(function () {
        $(".menu-items").css({ left: 0 });
        $(".menu__icon").css({ display: "none" })
        $(".close__icon").css({ display: "block" })
        $(".nav-top_items").css({ right: "-285px" }); 
        $(".menu_icon").css({ display: "block" })
        $(".nav-top-right ul").css({ right: "-285px" }); 
    })
})
    $(".close__icon").click(function () {
        $(".menu-items").css({ left: "-285px" });
        $(".menu__icon").css({ display: "block" })
        $(".close__icon").css({ display: "none" })
    }) 
    $(document).ready(function () {
        $(".menu_icon").click(function () {
        $(".nav-top_items").css({ right: "1px" }); 
        $(".menu-items").css({ left: "-285px" });
        $(".menu__icon").css({ display: "block" })
        $(".close__icon").css({ display: "none" })
        $(".nav-top-right ul").css({ right: "1rem" }); 
        $(".menu_icon").css({ display: "none" })
        $(".close_icon").css({ display: "block" })
    })
})
    $(".close_icon").click(function () {
        $(".nav-top_items").css({ right: "-285px" }); 
        $(".nav-top-right ul").css({ right: "-285px" }); 
        $(".menu_icon").css({ display: "block" })
        $(".close_icon").css({ display: "none" })
    }) 




    /* ****************************************wishlist************************************* */
    $('.wishlist-btn').click(function () {
        $(".wishlists").slideToggle(1000)
    })

    $(".star1").click(function () {
        let productImg = $(this).parents(".stars").siblings("a").find(".product-img").attr("src");
        let productTitle = $(this).parents(".stars").siblings(".product-info").find(".product-info_title").text();
        let productPrice = $(this).parents(".stars").siblings(".product-info").find(".product-info_price").text();

        let newWishlistItem = '<div class="wishlist"><section class="wish-list_info d-flex align-items-center justify-content-between border bg-white p-3"><img src="' + productImg + '" alt="" class="wishlist-info_img w-100"><div class="wishlist-info"><h6 class="wishlist-info_title">' + productTitle + '</h6><h6 class="wishlist-info_price">' + productPrice + '</h6></div></section></div>'

        $(".wishlists").append(newWishlistItem);
    });

    $(".star2").click(function () {
        $(".wishlist").remove()
    })

    /* *******************************************shopping cart************************************** */

    $('.cart-icon').click(function () {
        $(".shopping-cart_items").slideToggle(1000)
    })

    $(".product-btn_cart").click(function () {

        let productImg = $(this).parents(".product-info").siblings("a").find(".product-img").attr("src");
        let productTitle = $(this).siblings("a").find(".product-info_title").text();
        let productPrice = $(this).siblings("a").find(".product-info_price").text();

        let newCartItem = '<div class="shopping-cart_item"><section class=" d-flex align-items-center justify-content-between border bg-white py-3"><div class="shopping-cart_info d-flex align-items-center"><img src="' + productImg + '" alt="" class="shopping-info_img w-100"><div class="shopping-info"><h6 class="shopping-info_title">' + productTitle + '</h6><h6 class="shopping-info_price">' + productPrice + '</h6></div></div><span class="btn-close mx-4 shopping-product_close"></span></section></div>'

        $(".shopping-cart_items").append(newCartItem);

        $(".shopping-product_close").click(function () {
            $(this).parents("section").parents(".shopping-cart_item").remove()
        });

    })





/* ********************search box************************ */
const btn = document.querySelector('.search-icon');
const overlay = document.querySelector('.search-overlay');
const popup = document.querySelector('.search-popup');

btn.addEventListener('click' , function(){
    overlay.classList.add('active-search');
    popup.classList.add('active-search')

});

overlay.addEventListener('click' , function(){
    overlay.classList.remove('active-search')
    popup.classList.remove('active-search')
})

/* ******************accordion********************8 */

let accordions = document.querySelectorAll(".accordion")
accordions.forEach(accordion =>{
    Array.from(accordion.children).forEach(wrapper =>{
        if(wrapper.classList.contains("show")){
            wrapper.querySelector('div').style.maxHeight =  wrapper.querySelector('div').scrollHeight + 30 + 'px'
        }
        wrapper.querySelector("span").addEventListener("click" , e => {
            let span = e.target
            let wrapper = span.parentElement
            let div = span.nextElementSibling
            wrapper.classList.toggle("show")
            if(wrapper.classList.contains("show")){
                div.style.maxHeight = div.scrollHeight + 30 + 'px'
            }else{
                div.style.maxHeight = null
            }
            Array.from(accordion.children).forEach(w =>{
                if(w != wrapper) {
                    w.classList.remove("show")
                    w.querySelector('div').style.maxHeight = null
            
                }
            })
        })
    })
})