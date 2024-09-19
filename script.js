document.addEventListener('DOMContentLoaded', function() {
    const slideshowContainer = document.querySelector('.slideshow-container');

    slideshowContainer.addEventListener('mousedown', function(e) {
        e.preventDefault(); // Prevents default selection behavior
    });

    slideshowContainer.addEventListener('touchstart', function(e) {
        e.preventDefault(); // Prevents default selection behavior
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Select the text and button elements in the slideshow
    const textElements = document.querySelectorAll('.slideshow-container .product-info h2');
    const buttonElements = document.querySelectorAll('.slideshow-container .comic-button');

    // Prevent text selection for the product info text
    textElements.forEach(function(element) {
        element.style.userSelect = 'none'; // Prevent text selection

        element.addEventListener('mouseover', function() {
            element.style.cursor = 'default'; // Use default cursor for text
        });

        element.addEventListener('mouseout', function() {
            element.style.cursor = ''; // Reset cursor to default state
        });
    });

    // Set the cursor to pointer for buttons (hand icon)
    buttonElements.forEach(function(button) {
        button.style.userSelect = 'none'; // Prevent text selection

        button.addEventListener('mouseover', function() {
            button.style.cursor = 'pointer'; // Change to pointer (clickable) cursor
        });

        button.addEventListener('mouseout', function() {
            button.style.cursor = ''; // Reset cursor to default state
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 1;
    showSlides(slideIndex);

    let startX, endX;

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");

        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "flex";
        dots[slideIndex - 1].className += " active";
    }

    // Automatic Slideshow
    setInterval(function() {
        plusSlides(1);
    }, 5000); // Change slide every 5 seconds

    // Add event listeners for next/prev buttons
    document.querySelector(".prev").addEventListener("click", function() {
        plusSlides(-1);
    });

    document.querySelector(".next").addEventListener("click", function() {
        plusSlides(1);
    });

    // Add event listeners for dots
    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function() {
            currentSlide(i + 1);
        });
    }

    // Swipe detection for mobile
    const slideshowContainer = document.querySelector('.slideshow-container');

    slideshowContainer.addEventListener('touchstart', function(event) {
        startX = event.touches[0].clientX;
    });

    slideshowContainer.addEventListener('touchmove', function(event) {
        endX = event.touches[0].clientX;
    });

    slideshowContainer.addEventListener('touchend', function() {
        handleSwipe();
    });

    // Swipe detection for desktop
    slideshowContainer.addEventListener('mousedown', function(event) {
        startX = event.clientX;
    });

    slideshowContainer.addEventListener('mousemove', function(event) {
        endX = event.clientX;
    });

    slideshowContainer.addEventListener('mouseup', function() {
        handleSwipe();
    });

    function handleSwipe() {
        if (startX > endX + 50) { // Swipe left
            plusSlides(1);
        } else if (startX < endX - 50) { // Swipe right
            plusSlides(-1);
        }
    }
});




document.addEventListener("DOMContentLoaded", function() {

    // Function to get the URL parameters
    function getURLParameter(name) {
        return new URLSearchParams(window.location.search).get(name);
    }

    // Search Functionality (only if search elements are present)
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    if (searchInput && searchButton) {
        const brand = getURLParameter('brand');
        if (brand) {
            searchInput.value = brand;
            performSearch(); // Automatically perform the search with the brand name
        }

        searchInput.addEventListener("input", performSearch);
        searchButton.addEventListener("click", performSearch);
        searchInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                performSearch();
            }
        });

        function performSearch() {
            let query = searchInput.value.toLowerCase();
            let products = document.querySelectorAll(".product-item");

            products.forEach(product => {
                let productName = product.querySelector("h3").textContent.toLowerCase();
                if (productName.includes(query) || query === "") {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        }
    }

    // Hamburger Menu Functionality (only if hamburger elements are present)
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const mobileNav = document.getElementById("mobileNav");
    const closeMenu = document.getElementById("closeMenu");

    if (hamburgerMenu && mobileNav && closeMenu) {
        hamburgerMenu.addEventListener("click", function() {
            mobileNav.classList.toggle("show");
        });

        closeMenu.addEventListener("click", function() {
            mobileNav.classList.remove("show");
        });

        document.querySelectorAll(".mobile-nav a").forEach(link => {
            link.addEventListener("click", function() {
                mobileNav.classList.remove("show");
            });
        });
    }

    // Slideshow and Modal Functionality
    const modal = document.getElementById("quickViewModal");
    const modalClose = document.querySelector(".close");

    if (modal && modalClose) {
        document.querySelectorAll('.quick-view').forEach(button => {
            button.addEventListener('click', function() {
                const productItem = this.closest('.product-item');
                const productName = productItem.querySelector('h3').textContent;
                const productImage = productItem.querySelector('img').src;
                const productPrice = productItem.querySelector('.price').textContent;

                modal.querySelector('.modal-body').innerHTML = `
                    <h3>${productName}</h3>
                    <img src="${productImage}" alt="${productName}">
                    <p>${productPrice}</p>
                `;

                modal.style.display = "block";
            });
        });

        modalClose.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Animate service items on page load
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        item.style.transition = `transform 0.5s ease ${index * 0.1}s, opacity 0.5s ease ${index * 0.1}s`;
        item.style.transform = 'translateY(20px)';
        item.style.opacity = 0;
        setTimeout(() => {
            item.style.transform = 'translateY(0)';
            item.style.opacity = 1;
        }, index * 100);
    });
});


