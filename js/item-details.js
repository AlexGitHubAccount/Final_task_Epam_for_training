//Add information from the catalog.js to the block of the page item-details-page
(function () {
    const itemProduct = document.getElementById("itemProduct");

    const getOptionsList = (option, data) => {
        const wrapper = document.querySelector(`[data-option=${data}]`);
        for (let i = 0; i < option.length; i++) {
            wrapper.insertAdjacentHTML('afterbegin',`<li>${option[i]}</li>`);
        }
    };

    const getCatalog = () => {
        const catalogArray = window.catalog;
        const id = itemProduct.getAttribute("data-id");

        let currentItem = catalogArray.filter(item => item.id === id);
        getOptionsList(currentItem[0].colors,'color');
        getOptionsList(currentItem[0].sizes,'size');

        return function () {
            document.getElementById("title").innerText = currentItem[0].title;
            document.getElementsByClassName("descProduct")[0].innerText = currentItem[0].description;
            document.getElementsByClassName("descProduct")[1].innerText = currentItem[0].description;
            document.getElementById("price").innerText = currentItem[0].discountedPrice;
        }
    };
    if (itemProduct) getCatalog()();
})();

