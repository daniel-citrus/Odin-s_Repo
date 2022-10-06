let year = document.querySelectorAll('.current-year');

for (let y of year) {
    y.textContent = new Date().getUTCFullYear();
}