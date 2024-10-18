"use strict";
const db = (() => {
    const $ = document.querySelector.bind(document);      
    //Data-Base
    const sliders = [
        {
            name: 'slide-1',
            image: 'https://cdn.save.moe/b/i6kuQp.png-webp',
            path: '#'
        },
        {
            name: 'slide-2',
            image: 'https://cdn.save.moe/b/PEtXNa0O.png-webp',
            path: '#'

        },
        {        
            name: 'slide-3',
            image: 'https://cdn.save.moe/b/zZ6KUl.png-webp',
            path: '#'
        }
    ]    
    const banners = [
        {
            name: 'Side Banner-1',
            image: 'https://cdn.save.moe/b/J8dfv5Q9.png-webp',
            type: 'small',
            path: '#'            
        },
        {
            name: 'Side Banner-2',
            image: 'https://cdn.save.moe/b/h0HedF.png-webp',
            type: 'small',
            path: '#'            
        },
        {
            name: 'Content Banner-1',
            image: 'https://cdn.save.moe/b/qc4V7b.png-webp',
            type: 'larg-1',            
            path: '#'
        },
        {            
            name: 'Content Banner-2',
            image: 'https://cdn.save.moe/b/SqqjNVG5.png-webp',            
            type: 'larg-2',            
            path: '#'
        }
    ];
    const sales = [
        {
            id: 1,
            name: 'Samsung Galaxy S23 Plus 5G 256GB',
            image: 'https://cdn.anh.moe/c/rxZre.webp?wp=1',
            brand: 'Samsung',
            type: 'phones',
            curPrice: '17.990.000 đ',
            oldPrice: '26.990.000 đ',
            sale: '9.000.000 đ',
            path: '#'
        },
        {
            id: 2,
            name: 'iPhone 15 Pro Max 256GB',
            image: 'https://cdn.anh.moe/c/rNwFJ.webp?wp=1',
            brand: 'Apple',
            type: 'phones',
            curPrice: '32.990.000 đ',
            oldPrice: '34.990.000 đ',
            sale: '2.000.000 đ' ,
            path: '#'
        },
        {
            id: 3,
            name: 'Asus TUF Gaming FX506HF-HN017W i5 11400H',
            image: 'https://cdn.anh.moe/c/rNj3T.webp?wp=1',
            brand: 'Asus',
            type: 'laptops',
            curPrice: '17.990.000 đ',
            oldPrice: '20.990.000 đ',
            sale: '3.000.000 đ',
            path: '#'
        },
        {
            id: 4,
            name: 'TV Xiaomi A2 43 inch',
            image: 'https://cdn.anh.moe/c/rd2Yk.webp?wp=1',
            brand: 'XIaomi',
            type: 'devices',
            curPrice: '4.990.000 đ',
            oldPrice: '7.990.000 đ',
            sale: '3.000.000 đ',
            path: '#'
        },
        {
            id: 5,
            name: 'iPad Pro 11 2022 M2 WiFi 128GB',
            image: 'https://cdn.anh.moe/c/rdDXh.webp?wp=1',
            brand: 'Apple',
            type: 'phones',
            curPrice: '20.190.000 đ',
            oldPrice: '23.990.000 đ',
            sale: '3.800.000 đ',
            path: '#'
        }
    ];
    const phones = [
        {
            id: 1,                    
            name: 'iPhone 14 Pro Max 128GB',
            image: 'https://cdn.save.moe/b/JrvaiT7l.webp-webp',
            brand: 'Apple',
            curPrice: '27.190.000 đ',
            oldPrice: '29.990.000 đ',
            cpu: 'Apple A16 Bionic',
            lcd: '6.7 inch',
            ram: '6 GB',
            rom: '128 GB',
            path: '#'
        },
        {
            id: 2,                    
            name: 'Samsung Galaxy A15 128GB',
            image: 'https://cdn.save.moe/b/DbhBxSA.webp-webp',
            brand: 'Samsung',
            curPrice: '4.790.000 đ',
            oldPrice: '4.990.000 đ',
            cpu: 'MediaTek G99',
            lcd: '6.5 inch',
            ram: '8 GB',
            rom: '128 GB',
            path: '#'
        },
        {
            id: 3,                    
            name: 'OPPO A18 4GB 128GB',
            image: 'https://cdn.save.moe/b/zyHq7A.webp-webp',
            brand: 'Oppo',
            curPrice: '3.990.000 đ',
            oldPrice: '',
            cpu: 'Helio G85',
            lcd: '6.56 inch',
            ram: '4 GB',
            rom: '128 GB',
            path: '#'
        },
        {
            id: 4,
            name: 'Xiaomi Redmi Note 12 4GB-128GB',
            image: 'https://cdn.save.moe/b/R2jCGHnp.webp-webp',
            brand: 'Xiaomi',
            curPrice: '3.790.000 đ',
            oldPrice: '4.990.000 đ',
            cpu: 'Snapdragon 685',
            lcd: '6.67 inch',
            ram: '4 GB',
            rom: '128 GB',
            path: '#'
        },
        {
            id: 5,
            name: 'Honor X9b 5G 12GB - 256GB',
            image: 'https://cdn.save.moe/b/ICLN1MK.webp-webp',
            brand: 'Honor',
            curPrice: '8.990.000 đ',
            oldPrice: '',
            cpu: 'Snapdragon 6 Gen 1',
            lcd: '6.78 inch',
            ram: '12 GB',
            rom: '256 GB',
            path: '#'
        }            
    ];
    const laptops = [
        {
            id: 1,
            name: 'MacBook Air 13 inch M2 2022 8CPU 8GPU 8GB/256GB',
            image: 'https://cdn.save.moe/b/Q4AP458.webp-webp',
            brand: 'Apple',
            curPrice: '26.990.000 đ',
            oldPrice: '29.990.000 đ',
            lcd: '13.6 inch',
            cpu: 'Apple M2',
            ram: '8 GB',
            rom: 'SSD 256 GB',
            gpu: 'Apple M2',
            path: '#'
        },
        {
            id: 2,
            name: 'Laptop Asus Vivobook E1404FA-NK186W R5 7520U 16GB/512GB',
            image: 'https://cdn.save.moe/b/Jt4cHkI.webp-webp',
            brand: 'Asus',
            curPrice: '12.990.000 đ',
            oldPrice: '14.990.000 đ',
            lcd: '14.0 inch',
            cpu: 'Ryzen 5',
            ram: '16 GB',
            rom: 'SSD 512 GB',
            gpu: 'AMD Radeon Graphics',
            path: '#'
        },
        {
            id: 3,
            name: 'Laptop Lenovo IdeaPad 1 15ALC7 R5 5500U 16GB/512GB',
            image: 'https://cdn.save.moe/b/4PgS4pqz.webp-webp',
            brand: 'Lenovo',
            curPrice: '10.790.000 đ',
            oldPrice: '12.990.000 đ',
            lcd: '15.6 inch',
            cpu: 'Ryzen 5',
            ram: '16 GB',
            rom: 'SSD 512 GB',
            gpu: 'AMD Radeon Graphics',
            path: '#'
        },
        {
            id: 4,
            name: 'Laptop Acer Aspire 7 Gaming A715-76-57CY i5 12450H 8GB/512GB',
            image: 'https://cdn.save.moe/b/TtTefvq.webp-webp',
            brand: 'Acer',
            curPrice: '12.990.000 đ',
            oldPrice: '16.990.000 đ',
            lcd: '15.6 inch',
            cpu: 'Core i5',
            ram: '8 GB',
            rom: 'SSD 512 GB',
            gpu: 'Intel UHD Graphics',
            path: '#'
        },
        {
            id: 5,
            name: 'Laptop MSI Gaming GF63 Thin 12UC-1006VN i5 12450H 16GB/512GB',
            image: 'https://cdn.save.moe/b/AerOxVaI.webp-webp',
            brand: 'Acer',
            curPrice: '17.990.000 đ',
            oldPrice: '19.990.000 đ',
            lcd: '15.6 inch',
            cpu: 'Core i5',
            ram: '16 GB',
            rom: 'SSD 512 GB',
            gpu: 'NVIDIA RTX 3050 4GB',
            path: '#'
        }
    ];
    const historySearch = [
        {
            id: '1',
            text:'Vga GT 1030 2gb ddr5',
            path : '#'
        },
    ];

    const searchList = $('#sarch-list');
    const slideList = $('#slide-list');
    const slideBanner = $('#slide-banner');
    const banner1 = $('#banner-1');
    const banner2 = $('#banner-2');
    const productSale = $('#product-sale');
    const productPhone = $('#product-phone');
    const productLaptop = $('#product-laptop');
    const searchBox = $('#search__box');

    return {
        //Add-Result-Search
        addSearch() {
            const searchBoxVals = searchBox.value.trim();
            if(searchBox !== '') {
                const newSearchVal = {
                    id: String(historySearch.length + 1),
                    text: searchBoxVals,
                    path: '#'
                }
                historySearch.push(newSearchVal);
                this.render();
            }            
            searchBox.value = '';
        },
        //Event-Data-Base
        eventDb() {
            //Enter-Search
            searchBox.addEventListener('keypress', (e) => {
                if(searchBox.value !== '') {
                    if(e.key === 'Enter') {                                         
                        this.addSearch();                                     
                    }
                }
            });            
        },

        //Render-UI
        render() {
            //Search-History
            const searchHtml = historySearch.slice(0, 5).map((searchItem) => `
                <li class="search-history__items" data-id="${searchItem.id}">
                    <a href="${searchItem.path}" class="search-history__links">${searchItem.text}</a>
                </li>
            `);
            searchList.innerHTML = searchHtml.join('');
            //Slider-Left
            const slideHtml = sliders.map((slide,index) => `
                <a href="${slide.path}" class="slider__links ${index === 0 ? 'active' : ''}">
                    <img src="${slide.image}"
                    alt="${slide.name}" class="slider-img">
                </a>                
            `);
            slideList.innerHTML = slideHtml.join(''); 
            //Slider-Right
            const slideBannerHtml = banners.filter(banner => banner.type === 'small').map((sBanner) => `
                <a href="${sBanner.path}" class="slider__banner">
                    <img src="${sBanner.image}"                                          
                    alt="${sBanner.name}" class="sbanner-img">
                </a>
            `);
            slideBanner.innerHTML = slideBannerHtml.join('');
            //Banner
            const banner1Html = banners.filter(banner => banner.type === 'larg-1').map((lBanner) => `
                <a href="${lBanner.path}" class="banner">
                    <img src="${lBanner.image}" 
                    alt="${lBanner.name}" class="c-banner__img">                        
                </a>
            `);
            banner1.innerHTML = banner1Html.join('');
            const banner2Html = banners.filter(banner => banner.type === 'larg-2').map((lBanner) => `
                <a href="${lBanner.path}" class="banner">
                    <img src="${lBanner.image}" 
                    alt="${lBanner.name}" class="c-banner__img">                        
                </a>
            `);
            banner2.innerHTML = banner2Html.join('');
            //Sales
            const saleHtml = sales.slice(0, 5).map((saleItem) => `
                <div class="col l-2-4 m-4 c-6">
                    <a href="${saleItem.path}" class="product-items">
                        <div class="product-item__img" style="background-image: url(${saleItem.image});"></div>
                        <h3 class="product-item__name">${saleItem.name}</h3>
                        <div class="product-item__price">
                            <span class="product-item__cur">${saleItem.curPrice}</span>
                            <span class="product-item__old">${saleItem.oldPrice}</span>
                        </div>
                        <div class="product-item__lable">
                            <h3>Giảm ${saleItem.sale}đ</h3>
                        </div>
                    </a>
                </div>
            `);
            productSale.innerHTML = saleHtml.join('');
            //Phone
            const phoneHtml = phones.slice(0, 5).map((phone) => `
                <div class="col l-2-4 m-4 c-6">
                    <a href="${phone.path}" class="product-items">
                        <div class="product-item__img" 
                        style="background-image: url(${phone.image});">
                        </div>
                        <h3 class="product-item__name">${phone.name}</h3>
                        <div class="product-item__price">
                            <span class="product-item__cur">${phone.curPrice}</span>
                            <span class="product-item__old">${phone.oldPrice}</span>
                        </div> 
                        <div class="product-item__info">
                            <span title="CPU">
                                <i class="fa-solid fa-microchip"></i>
                                ${phone.cpu}
                            </span>
                            <span title="Màn hình">
                                <i class="fa-solid fa-mobile-screen"></i>
                                ${phone.lcd}
                            </span>
                            <span title="Ram">
                                <i class="fa-solid fa-memory"></i>
                                ${phone.ram}
                            </span>
                            <span title="Bộ nhớ trong">
                                <i class="fa-solid fa-hard-drive"></i>
                                ${phone.rom}
                            </span>
                        </div>  
                        <div class="product-item__btn">
                            <button class="btn btn--primary product-item__buy">Mua</button>
                        </div>                                     
                    </a>
                </div>
            `);
            productPhone.innerHTML = phoneHtml.join('');
            //Laptop
            const laptopHtml = laptops.slice(0, 5).map((laptop) => `
                <div class="col l-2-4 m-4 c-6">
                    <a href="${laptop.path}" class="product-items">
                        <div class="product-item__img" 
                        style="background-image: url(${laptop.image});">
                        </div>
                        <h3 class="product-item__name">${laptop.name}</h3>
                        <div class="product-item__price">
                            <span class="product-item__cur">${laptop.curPrice}</span>
                            <span class="product-item__old">${laptop.oldPrice}</span>
                        </div> 
                        <div class="product-item__info">
                            <span title="Màn hình">
                                <i class="fa-solid fa-laptop"></i>
                                ${laptop.lcd}
                            </span>
                            <span title="CPU">
                                <i class="fa-solid fa-microchip"></i>
                                ${laptop.cpu}
                            </span>
                            <span title="Ram">
                                <i class="fa-solid fa-memory"></i>
                                ${laptop.ram}
                            </span>
                            <span title="Bộ nhớ trong">
                                <i class="fa-solid fa-hard-drive"></i>
                                ${laptop.rom}
                            </span>
                            <span title="Đồ Hoạ">
                                <i class="fa-solid fa-microchip"></i>
                                ${laptop.gpu}
                            </span>
                        </div>  
                        <div class="product-item__btn">
                            <button class="btn btn--primary product-item__buy">Mua</button>
                        </div>                                     
                    </a>
                </div>
            `);
            productLaptop.innerHTML = laptopHtml.join('');
        },        
        //Starting
        init() {
            this.render();
            this.eventDb();
        }
    }
})();
db.init();