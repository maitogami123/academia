const counters = document.querySelectorAll('.counter__number');
const speed = 500;
counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = Math.ceil(target / speed);
        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCounter, speed/100);
        } else {
            count.innerText = target;
        }
    }
    updateCounter();
})