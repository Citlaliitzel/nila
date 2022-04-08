const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});

$(document).ready(function() {
    $(".toggle-btn").click(alternarMenu);
    function alternarMenu() {
        $("sidebar").toggleClass("active");
    }
});