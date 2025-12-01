const togglBtn = document.getElementById('cambiar-tema');
const hache1 = document.getElementById('hache1');
const general = document.getElementById('general');

togglBtn.addEventListener('click', () => {
    document.body.classList.toggle("claro");
    togglBtn.classList.toggle("claro");
    hache1.classList.toggle("claro");
    general.classList.toggle("claro");

    const esModoClaro = document.body.classList.contains("claro");
    localStorage.setItem('tema', esModoClaro ? 'claro' : 'oscuro');
});

const temaGuardado = localStorage.getItem('tema');
if (temaGuardado === 'claro') {
    document.body.classList.add("claro");
    togglBtn.classList.add("claro");
    hache1.classList.add("claro");
    general.classList.add("claro");
}