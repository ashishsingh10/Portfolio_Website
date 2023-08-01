const tabButtons = document.querySelectorAll(".btn");
const tabPanles = document.querySelectorAll(".tabPanel");


tabButtons.forEach((tab, index)=>{
    tab.addEventListener('click', (e)=>{
        tabButtons.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');

        tabPanles.forEach(content=>{content.classList.remove('active')});
        tabPanles[index].classList.add('active');
    });   
});