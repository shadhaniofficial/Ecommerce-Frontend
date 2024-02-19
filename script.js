$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });

});

// product

document.addEventListener("DOMContentLoaded", function () {
  // Define product data (you can load this dynamically from a database)
  const products = [
      {
          name: "white polo T-shirt",
          price: "₹499",
          image: "others/white polo.png",
          details: "Product details for white T-shirt.",
      },
      {
          name: "Grey Hoodies",
          price: "₹599",
          image: "others/grey hoodies.png",
          details: "Product details for Grey Hoodies.",
      },
      {
        name: "Blue Hoodies",
        price: "₹599",
        image: "others/blue.png",
        details: "Product details for Blue Hoodies.",
      },
      {
        name: "Grey Sweatshirt",
        price: "₹599",
        image: "others/grey sweetshirt.png",
        details: "Product details for Grey Sweatshirt.",
      },
      {
        name: "Red T-shirt",
        price: "₹299",
        image: "others/red.png",
        details: "Product details for Red T-shirt.",
      },
      {
        name: "Black T-shirt",
        price: "₹499",
        image: "others/black.png",
        details: "Product details for White polo T-shirt.",
      },
      {
        name: "Blue T-shirt",
        price: "₹499",
        image: "others/blue1.png",
        details: "Product details for white Polo.",
      },
      {
        name: "Full Sleeve Sports Wear",
        price: "₹599",
        image: "others/Full Sleeve.png",
        details: "Product details for Grey Hoodies.",
      },
      {
        name: "Black Hoodies",
        price: "₹599",
        image: "others/Black Hoodies.png",
        details: "Product details for Blue Hoodies.",
      },
      {
        name: "sports wear",
        price: "₹599",
        image: "others/sports wear.png",
        details: "Product details for Grey Sweatshirt.",
      },
      {
        name: "White Hoodies",
        price: "₹299",
        image: "others/White Hoodies.png",
        details: "Product details for Red T-shirt.",
      },
      {
        name: "Yellow Sweatshirt",
        price: "₹499",
        image: "others/yellow.png",
        details: "Product details for White polo T-shirt.",
      },
  ];

  // Get the product name from the URL (you can use query parameters or any other method)
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get("product");

  // Find the product that matches the selected product name
  const selectedProduct = products.find((product) => product.name === productName);

  // Update the product page with the selected product details
  if (selectedProduct) {
      const productImage = document.querySelector(".left-column img.active");
      const productTitle = document.querySelector(".product-description h1");
      const productPrice = document.querySelector(".product-price span");

      productImage.src = selectedProduct.image;
      productTitle.textContent = selectedProduct.name;
      productPrice.textContent = selectedProduct.price;

      // You can also update product details if needed
      // const productDetails = document.querySelector(".product-description p");
      // productDetails.textContent = selectedProduct.details;
  }
});
