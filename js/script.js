document.addEventListener('DOMContentLoaded', function () {
    // Add smooth scroll behavior when a collapse section is opened
    var collapseButtons = document.querySelectorAll('[data-bs-toggle="collapse"]');
    collapseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var targetCollapse = document.querySelector(this.getAttribute('data-bs-target'));
            if (targetCollapse) {
                targetCollapse.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});