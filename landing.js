document.querySelector(".grid").addEventListener("click", (e) => {
    let el = e.target;
    const setActive = (el) => {
        [...el.parentElement.children].forEach((sibling) =>
            sibling.classList.remove("active")
        );
        el.classList.add("active");
        
    };

    let columns = [...document.body.querySelectorAll(".grid > .column")];
    columns.forEach((el) =>
        el.addEventListener("click", (e) => setActive(el))
    );


    const textOrientation = () => {

        const portfolio = document.querySelector('.column-4')
        const title = portfolio.getElementsByClassName('title')
        if(portfolio.matches('.active')) {
            title[0].classList.add('horizontal');
        } else if (!portfolio.matches('.active')) (
            title[0].classList.remove('horizontal')
        )
        const rect = portfolio.getBoundingClientRect();
    
        const w = window.innerWidth
        const halfWay = (w / 2)
        console.log(rect, w, halfWay)
        if (rect.right < halfWay) {
            console.log('Left')
        } else {
            console.log('Right')
        }
    }
    
    textOrientation();

});







