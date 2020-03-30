// Function for increment amount of quantity of items inside the bag
(function () {

    function countChange(event) {
        let target = event && event.target || event.srcElement;
        let btn = target.getAttribute('data-count');

        if (!btn) return;

        if (btn === "plus") {
            target.previousElementSibling.innerHTML++;
        }
        if (btn === "minus") {
            target.nextElementSibling.innerHTML === "0" ?
                target.nextElementSibling.innerText = 0 :
                target.nextElementSibling.innerHTML--;
            // target.nextElementSibling.innerHTML === "0" ?
            //     this.removeItem.call(Shop.prototype) :
            //     target.nextElementSibling.innerHTML--;

        }
    }

    function initCount() {
        const count = document.querySelectorAll('.count');

        for (let i = 0; i < count.length; i++) {
            count[i].addEventListener('click', countChange);
        }
    }


   setTimeout(function () { initCount(); }, 0);
})();
// console.dir(Shop.prototype.removeItem());