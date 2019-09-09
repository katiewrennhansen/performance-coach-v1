const toggleBtn = document.querySelector('.toggle-button');
const collapse = document.querySelector('.collapse-content');
const navLinks = document.querySelectorAll('.nav-link');

toggleBtn.addEventListener('click', function(){
    toggleBtn.classList.toggle('cross');
    collapse.classList.toggle('toggle');
});

navLinks.forEach(link => {
    link.addEventListener('click', function(){
        collapse.classList.remove('toggle');
        toggleBtn.classList.remove('cross');
    });
});
