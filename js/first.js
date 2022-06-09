'use strict';

class Slider {
    constructor() {
        this.ul = document.querySelector('.slider ul');
        this.li = this.ul.querySelectorAll('li');
        this.i = 0;

    }

    hideAll() {
        this.li.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('animate__animated');
            item.classList.remove('animate__fadeOutLeft');
        })
    }

    check() {
        if (this.i == 5) { this.i = 0 }
    }

    play() {
        setInterval(() => {
            this.hideAll();
            this.check();
            this.li[this.i].classList.remove('hide');
            setTimeout(() => {
                this.li[this.i].classList.add('animate__animated');
                this.li[this.i].classList.add('animate__fadeOutLeft');
                this.i += 1;
            }, 1000);
        }, 2000);
    }

    init() {
        this.hideAll();
        this.li[0].classList.remove('hide');
        this.play();
    }
}


