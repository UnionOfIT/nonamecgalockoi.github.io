function showTab(tab) {
    document.querySelectorAll('.tab-content').forEach(e => e.style.display = 'none');
    document.getElementById(tab).style.display = 'block';
    document.querySelectorAll('nav a').forEach(e => e.classList.remove('active'));
    document.getElementById('nav-' + tab).classList.add('active');
    const content = document.getElementById(tab);
    content.style.opacity = 0;
    setTimeout(() => { content.style.opacity = 1; }, 60);
}
window.onload = function() { showTab('about'); };
function initAccordion() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.onclick = function() {
            const content = this.nextElementSibling;
            content.classList.toggle('open');
        };
    });
}
initAccordion();
function openModal(id) {
    document.getElementById(id).classList.add('open');
}
function closeModal(id) {
    document.getElementById(id).classList.remove('open');
}
document.querySelectorAll('.modal-close').forEach(btn => {
    btn.onclick = function() {
        closeModal(this.closest('.modal').id);
    };
});
function showToast(msg, timeout = 3000) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), timeout);
}
function animateProgressBar(id, percent) {
    const bar = document.getElementById(id);
    if (bar) {
        bar.style.width = '0';
        setTimeout(() => { bar.style.width = percent + '%'; }, 200);
    }
}
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Скопировано!');
    });
}
function showLoader() {
    let loader = document.getElementById('loader');
    if (!loader) {
        loader = document.createElement('div');
        loader.id = 'loader';
        loader.className = 'loader';
        document.body.appendChild(loader);
    }
    loader.style.display = 'block';
}
function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';
}
function highlight(selector) {
    document.querySelectorAll(selector).forEach(el => {
        el.classList.add('highlight');
        setTimeout(() => el.classList.remove('highlight'), 2000);
    });
}
document.querySelectorAll('form').forEach(form => {
    form.onsubmit = function(e) {
        e.preventDefault();
        showLoader();
        setTimeout(() => {
            hideLoader();
            showToast('Форма отправлена!');
        }, 1200);
    };
});
window.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        const focusable = Array.from(document.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'));
        const index = focusable.indexOf(document.activeElement);
        let next = e.shiftKey ? index - 1 : index + 1;
        if (next >= focusable.length) next = 0;
        if (next < 0) next = focusable.length - 1;
        focusable[next].focus();
        e.preventDefault();
    }
});
function cardHoverEffect() {
    document.querySelectorAll('.card').forEach(card => {
        card.onmouseenter = () => card.classList.add('highlight');
        card.onmouseleave = () => card.classList.remove('highlight');
    });
}
cardHoverEffect();
function initTooltips() {
    document.querySelectorAll('.tooltip').forEach(el => {
        el.onmouseenter = function() {
            const tip = this.querySelector('.tooltiptext');
            if (tip) tip.style.visibility = 'visible';
        };
        el.onmouseleave = function() {
            const tip = this.querySelector('.tooltiptext');
            if (tip) tip.style.visibility = 'hidden';
        };
    });
}
initTooltips();
function fadeInElements(selector) {
    document.querySelectorAll(selector).forEach(el => {
        el.classList.add('fade-in');
        setTimeout(() => el.classList.remove('fade-in'), 800);
    });
}
