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


// //////////////////////////////////
// create move in  intro website  
count = 0;
words = "Welcome, WE ARE CONSTRUCTED, This's our website for <b> EXCELLENCE PALACE COMPANY </b> ,  we are  nice to meet you and we hope to have s a good futuer with us "
    // to have set with loop ----> setTimeout 
setInterval(function() {
    dif = document.getElementById("text_dif");
    dif.innerHTML = words.substring(0, count);
    count++;
    /* set with loop--->   
    if (count > words.length) {
        count = 0;
    }
    */
}, 50)