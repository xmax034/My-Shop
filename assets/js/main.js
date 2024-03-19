"use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const listEvents = document.addEventListener.bind(document);
const openLinks = $$('a[href="#"]');
const searchOption = $$('.search-option__items');
const searchBtn = $('.header-search__btn');
const slideDots = $$('.slide-dot');
const slideLinks = $$('.slider__links');
let slideIndex = 0;

//Handled-Events
function handledEvents() {    
    //Update-Links
    openLinks.forEach(function(openLink) {
        openLink.onclick = function() {        
            showToast();
        };
    });

    //Search-History
    listEvents('click', function (e) {
        const searchBox = $('.header-search__box');
        const historyBox = $('.search-history');
        if (!historyBox.contains(e.target) && e.target !== searchBox) {
            historyBox.classList.remove('active');
        } else {
            historyBox.classList.add('active');
        };
    });

    //Search-Option
    searchOption.forEach((option) => {
        option.addEventListener('click', function() {
            let searchlabel = option.querySelector('span').innerText;
            $('.header-search__label').innerText = searchlabel;        
            searchOption.forEach((opt) => {
                opt.classList.remove('search-option__active');
            });
            option.classList.add('search-option__active');
        });
    });
    
    //Search-Btn
    searchBtn.onclick = function() {
        showToast();
    }; 

    //Slider-Auto
    const autoSlider = setInterval(autoSlide, 3000);
    
    //Slider-Dot   
    slideDots.forEach((dots, index) => {        
        dots.onclick = function() { 
            clearInterval(autoSlider)           
            slideIndex = index;
            showSlide(slideIndex);
        }
    });
}

//Toast
function showToast() {    
    const openToast = $('.toast');
    openToast.style.display = 'block';    
    openToast.innerHTML = `<h1>Tính năng đang cập nhật ...</h1>`;    
    setTimeout(function() {
        openToast.style.display = 'none';
    }, 3000);
}

//Slider
function showSlide() {
    slideDots.forEach((dot) => {
        dot.classList.remove('active');
    });
    slideLinks.forEach((slide) => {
        slide.classList.remove('active');
    });
    slideDots[slideIndex].classList.add('active');
    slideLinks[slideIndex].classList.add('active'); 
}
function autoSlide() {
    slideIndex = (slideIndex + 1) % slideDots.length;
    showSlide(slideIndex);
}
