 //   _____           _       _       
 //  / ____|         (_)     | |      
 // | (___   ___ _ __ _ _ __ | |_ ___ 
 //  \___ \ / __| '__| | '_ \| __/ __|
 //  ____) | (__| |  | | |_) | |_\__ \
 // |_____/ \___|_|  |_| .__/ \__|___/
 //                    | |            
 //                    |_|            


// ---------------------------
// LOADER ON PAGE LOAD AND FADE CONTENT-----------
// ---------------------------

$('.cv-container').hide();

$('.spin-loader').show();

// ---------------------------
// TIMEOUT FUNCTION TO FADE OUT CONTAINER AND HIDE THE LOADER-----------
// ---------------------------

setTimeout(function(){
	$('.spin-loader').hide();
	$(".cv-container").fadeIn(600); 
}, 2000)


$(function(){

// ---------------------------
// TRIGERRING RIPPLE EFFECT FOR MATERIAL DESIGN-----------
// ---------------------------

$.material.init()

// ---------------------------
// FAB CLICK ANIMATION FOR PROFILE-----------
// ---------------------------

$('.floating-btn .is-open').click(function(){
	$('.floating-btn').toggleClass('active');
	$('.temp-content').toggleClass('temp-is-shown');
});


});



