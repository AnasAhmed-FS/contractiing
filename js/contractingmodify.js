// NavPar Sticky and NavPar Fixed 
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});


// // //////////////////////////////////
// // create move in  intro website  
// count = 0;
// words = "Welcome, WE ARE CONSTRUCTED, This's our website for <b> EXCELLENCE PALACE COMPANY </b> ,  we are  nice to meet you and we hope to have s a good futuer with us "
//     // to have set with loop ----> setTimeout 
// setInterval(function() {
//     dif = document.getElementById("text_dif");
//     dif.innerHTML = words.substring(0, count);
//     count++;
//     /* set with loop--->   
//     if (count > words.length) {
//         count = 0;
//     }
//     */
// }, 50);

// //  company video   comp_vid_explination
// counts = 0;
// comp_vid = "Here you will find our Video Excplination and youl will a good idaes from it . Enjoy Waching ^-^  ";
// // to have set with loop ----> setTimeout 
// setInterval(function() {
//     vid = document.getElementById("comp_vid_explination");
//     vid.innerHTML = comp_vid.substring(0, counts);
//     counts++;
//     if (counts > comp_vid.length) {
//         counts = 0;
//     }

// }, 100);

// services
var myCarousel = document.querySelector('#carouselProject')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: false,
    touch: true
})

// clients

var myCarousel = document.querySelector('#carouselclients')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: false,
    touch: true
})


var myCarousel = document.querySelector('#carouselExampleCaptions')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: false,
    touch: true
})