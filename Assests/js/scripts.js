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

// Timeout function to fade out container and hide the loader

setTimeout(function(){
	$('.spin-loader').hide();
	$(".cv-container").fadeIn(600); 
}, 2000)
