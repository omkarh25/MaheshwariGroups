document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('name');
    const productImage = urlParams.get('image');
    const productDescription = urlParams.get('description');

    const productImageElement = document.getElementById('product-image');
    const productNameElement = document.getElementById('product-name');
    const productDescriptionElement = document.getElementById('product-description');

    if (productName && productImage && productDescription) {
        productImageElement.src = productImage;
        productNameElement.textContent = productName;
        productDescriptionElement.textContent = productDescription;
    } else {
        console.error('Product details missing from URL parameters.');
    }
});
