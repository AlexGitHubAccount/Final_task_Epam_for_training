// Function for increment amount of quantity of items inside the bag
(function () {
    const data = JSON.parse(localStorage.getItem('cart'));
    let fullPrice = parseFloat(localStorage.getItem('goodsPrice'));
    const totalCost = document.querySelector('.totalCost');

    function changePrice(priceItem, attrBtn) {
        if (attrBtn === "plus") {
            fullPrice = fullPrice + priceItem;
        } else {
            fullPrice = fullPrice - priceItem;
        }
        document.querySelector('.commonPrice').innerHTML =
            `£ ${localStorage.goodsCounter ? fullPrice.toFixed(2) : '0'}<span class="countItems"> (${localStorage.goodsCounter})</span>`;
        setTimeout(function () {
            totalCost.innerHTML =  `${fullPrice ? fullPrice.toFixed(2) : '£ 0'}`;
        },0);
    }

    function removeItem(item, id) {
        item.closest('.shopOptions').querySelector('.removeItem').click();
        delete data[id];
    }

    function countChange(event) {
        let target = event && event.target || event.srcElement;
        let btn = target.getAttribute('data-count');
        let rel = target.closest('.shoppingBlock').getAttribute('data-block');
        let input = target.closest('.shoppingBlock').querySelector('.quantityBag');
        let priceItem = parseFloat(data[rel].price.slice(1));
        if (!btn) return;
        if (btn === "plus") {
            target.previousElementSibling.innerHTML++;
            changePrice(priceItem, btn);
        }
        if (btn === "minus") {
            target.nextElementSibling.innerHTML === "1" ?
                removeItem(target, rel) :
                target.nextElementSibling.innerHTML--;
            changePrice(priceItem, btn);
        }
        if (data[rel]) data[rel].qw = parseInt(input.innerHTML);
        localStorage.cart = JSON.stringify(data);
        // localStorage.goodsCounter = JSON.stringify(sumCount());
    }

    function initCount() {
        const count = document.querySelectorAll('.count');
        for (let i = 0; i < count.length; i++) {
            count[i].addEventListener('click', countChange);
        }
    }
//     function sumCount(){
//         let sum=0;
// for (let obj in data){
//     if(data.hasOwnProperty(obj)){
//     if(data[obj].qw){
//         sum = sum +data[obj].qw;
//     }
//     }
// }
//         return sum;
//     }

    setTimeout(function () { initCount(); }, 0);
})();
// ------------------------------------------------------------------
// console.dir(MainObject);
// console.dir(SearchField);
// console.dir(Gamburger);
// console.dir(CatalogBanner);
// console.dir(FilterCatalog);
// console.dir(ProductOptions);
// console.dir(Switcher);
// console.dir(Bag);
// console.dir(GoToItem);
// console.dir(Shop);
