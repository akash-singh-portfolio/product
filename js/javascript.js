// VARIABLES
let video1 = document.getElementById("scrl-0");
let video2 = document.getElementById("scrl-1");
let video3 = document.getElementById("scrl-2");
let video4 = document.getElementById("scrl-3");
let video5 = document.getElementById("scrl-4");
var vi = document.getElementById("he-vi");
var vid = document.getElementById("hero-vid-2");
var title = document.getElementById("hero-title");
var typo = document.getElementById("hero-typo");
var sticky = document.getElementById("sticky-nav");
var gall1 = document.getElementById("gallary-1");
var gall2 = document.getElementById("gallary-2");
var gall3 = document.getElementById("gallary-3");
var vidimage = document.getElementById("vid-image");
var vid2 = document.getElementById("vid-2");
var vid3 = document.getElementById("vid-3");
var vid4 = document.getElementById("vid-4");
var vid5 = document.getElementById("vid-image-1");
var fixedvideo = document.getElementById("bg-vid");

window.addEventListener("scroll", () => {
   const scrollY = window.scrollY;

   const mediaQuery = window.matchMedia("(max-width: 912px)");
   if (mediaQuery.matches) {
      // PARALLAX VIDEO 1
      if (scrollY >= 3960 && scrollY <= 4316) {
         x = 359 - ((scrollY - 3960) * (359 / (4316 - 3960)));
         x = Math.max(0, x);
      } else if (scrollY < 3960) {
         x = 359;
      } else if (scrollY > 4316) {
         x = 0;
      }
      if (scrollY > 3960) {
         video2.style.display = "block";
         video2.style.transform = "matrix(1, 0, 0, 1, 0, " + x + ")";

      } else {
         video2.style.display = "none";
      }


      // PARALLAX VIDEO 2
      if (scrollY >= 4807 && scrollY <= 5164) {
         t = 359 - ((scrollY - 4807) * (359 / (5164 - 4807)));
         t = Math.max(0, t);
      } else if (scrollY < 4807) {
         t = 359;
      } else if (scrollY > 5164) {
         t = 0;
      }
      if (scrollY > 4807) {
         video3.style.display = "block";
         video3.style.transform = "matrix(1, 0, 0, 1, 0, " + t + ")";
      } else {
         video3.style.display = "none";
      }


      // PARALLAX VIDEO 3
      if (scrollY >= 5656 && scrollY <= 6011) {
         g = 359 - ((scrollY - 5656) * (359 / (6011 - 5656)));
         g = Math.max(0, g);
      } else if (scrollY < 5656) {
         g = 359;
      } else if (scrollY > 6011) {
         g = 0;
      }
      if (scrollY > 5656) {
         video4.style.display = "block";
         video4.style.transform = "matrix(1, 0, 0, 1, 0, " + g + ")";
      } else {
         video4.style.display = "none";
      }


      // PARALLAX VIDEO 4
      if (scrollY >= 6504 && scrollY <= 6860) {
         h = 359 - ((scrollY - 6504) * (359 / (6860 - 6504)));
         // Ensure h does not go below 0
         h = Math.max(0, h);
      } else if (scrollY < 6504) {
         h = 359;
      } else if (scrollY > 6860) {
         h = 0;
      }
      if (scrollY > 6504) {
         video5.style.display = "block";
         video5.style.transform = "matrix(1, 0, 0, 1, 0, " + h + ")";
      } else {
         video5.style.display = "none";
      }


   } else {
      // PARALLAX VIDEO 1
      if (scrollY >= 3360 && scrollY <= 3859) {
         x = 500 - ((scrollY - 3360) * (500 / (3859 - 3360)));
         x = Math.max(0, x);
      } else if (scrollY < 3360) {
         x = 500;
      } else if (scrollY > 3859) {
         x = 0;
      }
      if (scrollY > 3360) {
         video2.style.display = "block";
         video2.style.transform = "matrix(1, 0, 0, 1, 0, " + x + ")";
      } else {
         video2.style.display = "none";
      }


      // PARALLAX VIDEO 2
      if (scrollY >= 4209 && scrollY <= 4708) {
         t = 500 - ((scrollY - 4209) * (500 / (4708 - 4209)));
         t = Math.max(0, t);
      } else if (scrollY < 4209) {
         t = 500;
      } else if (scrollY > 4708) {
         t = 0;
      }
      if (scrollY > 4209) {
         video3.style.display = "block";
         video3.style.transform = "matrix(1, 0, 0, 1, 0, " + t + ")";
      } else {
         video3.style.display = "none";
      }


      // PARALLAX VIDEO 3
      if (scrollY >= 5060 && scrollY <= 5556) {
         g = 500 - ((scrollY - 5060) * (500 / (5556 - 5060)));
         g = Math.max(0, g);
      } else if (scrollY < 5060) {
         g = 500;
      } else if (scrollY > 5556) {
         g = 0;
      }
      if (scrollY > 5060) {
         video4.style.display = "block";
         video4.style.transform = "matrix(1, 0, 0, 1, 0, " + g + ")";
      } else {
         video4.style.display = "none";
      }


      // PARALLAX VIDEO 4
      if (scrollY >= 5907 && scrollY <= 6403) {
         h = 500 - ((scrollY - 5907) * (500 / (6403 - 5907)));
         // Ensure h does not go below 0
         h = Math.max(0, h);
      } else if (scrollY < 5907) {
         h = 500;
      } else if (scrollY > 6403) {
         h = 0;
      }
      if (scrollY > 5907) {
         video5.style.display = "block";
         video5.style.transform = "matrix(1, 0, 0, 1, 0, " + h + ")";
      } else {
         video5.style.display = "none";
      }

   }
});


window.addEventListener("scroll", () => {

   const scrollValue = window.scrollY;

   //HERO SECTION
   const scrollRange = [50, 280]; //245
   const mrgRange = [1.87016, 1];
   mrg = myfunction(scrollValue, scrollRange, mrgRange);
   mrg = Math.max(1, Math.min(1.87016, mrg));


   // GALLERY ONE
   const scrollRange2 = [1111, 2600];
   const slideRange = [0, -673.95];
   slide1 = myfunction(scrollValue, scrollRange2, slideRange);
   slide1 = Math.max(-673.95, Math.min(0, slide1));
   gall1.style.transform = "matrix(1, 0, 0, 1," + slide1 + " , 0)";


   // GALLERY TWO
   oneMin = -484.65;
   oneMax = 0;
   lft = myfunction(scrollValue, scrollRange2, [oneMin, oneMax]);
   lft = Math.max(oneMin, Math.min(oneMax, lft));
   gall2.style.transform = "matrix(1, 0, 0, 1," + lft + " , 0)";


   // GALLERY THREE
   threeMin = 0;
   threeMax = -523.1;
   lft3 = myfunction(scrollValue, scrollRange2, [threeMin, threeMax]);
   lft3 = Math.max(oneMin, Math.min(oneMax, lft3));
   gall3.style.transform = "matrix(1, 0, 0, 1," + lft3 + " , 0)";


   const mediaQuery = window.matchMedia("(max-width: 912px)");
   if (mediaQuery.matches) {
      const scrollRange3 = [3960, 4316];
      const slideRange2 = [-359, 0];
      v2 = myfunction(scrollValue, scrollRange3, slideRange2);
      v2 = Math.max(-500, Math.min(0, v2));
      vid2.style.transform = "matrix(1, 0, 0, 1, 0, " + v2 + ")";


      // PARALLAX VIDEO 2
      const scrollRange4 = [4807, 5164];
      const slideRange3 = [-359, 0];
      v3 = myfunction(scrollValue, scrollRange4, slideRange3);
      v3 = Math.max(-359, Math.min(0, v3));
      vid3.style.transform = "matrix(1, 0, 0, 1, 0, " + v3 + ")";


      // PARALLAX VIDEO 3
      const scrollRange5 = [5656, 6011];
      const slideRange4 = [-359, 0];
      v4 = myfunction(scrollValue, scrollRange5, slideRange4);
      v4 = Math.max(-359, Math.min(0, v4));
      vid4.style.transform = "matrix(1, 0, 0, 1, 0, " + v4 + ")";


      // PARALLAX VIDEO 4
      const scrollRange6 = [6504, 6860];
      const slideRange5 = [-359, 0];
      v5 = myfunction(scrollValue, scrollRange6, slideRange5);
      v5 = Math.max(-359, Math.min(0, v5));
      vid5.style.transform = "matrix(1, 0, 0, 1, 0, " + v5 + ")";


   } else {
      // PARALLAX VIDEO 1
      const scrollRange3 = [3360, 3859];
      const slideRange2 = [-500, 0];
      v2 = myfunction(scrollValue, scrollRange3, slideRange2);
      v2 = Math.max(-500, Math.min(0, v2));
      vid2.style.transform = "matrix(1, 0, 0, 1, 0, " + v2 + ")";


      // PARALLAX VIDEO 2
      const scrollRange4 = [4209, 4708];
      const slideRange3 = [-500, 0];
      v3 = myfunction(scrollValue, scrollRange4, slideRange3);
      v3 = Math.max(-500, Math.min(0, v3));
      vid3.style.transform = "matrix(1, 0, 0, 1, 0, " + v3 + ")";


      // PARALLAX VIDEO 3
      const scrollRange5 = [5060, 5556];
      const slideRange4 = [-500, 0];
      v4 = myfunction(scrollValue, scrollRange5, slideRange4);
      v4 = Math.max(-500, Math.min(0, v4));
      vid4.style.transform = "matrix(1, 0, 0, 1, 0, " + v4 + ")";


      // PARALLAX VIDEO 4
      const scrollRange6 = [5907, 6403];
      const slideRange5 = [-500, 0];
      v5 = myfunction(scrollValue, scrollRange6, slideRange5);
      v5 = Math.max(-500, Math.min(0, v5));
      vid5.style.transform = "matrix(1, 0, 0, 1, 0, " + v5 + ")";
   }


   vi.style.transform = "matrix(" + mrg + ", 0, 0," + mrg + ", 0, 0)";
   if (scrollY > 220) {
      vid.style.opacity = "0";
      vid.style.transition = "opacity 1s ease";
   } else {
      vid.style.opacity = "1";
   }


   if (scrollY > 10) {
      title.style.opacity = "0";
      title.style.transition = "opacity 0.3s ease";
   } else {
      title.style.opacity = "1";
   }


   if (scrollY > 470) {
      typo.style.opacity = "1";
      typo.style.transition = "opacity 0.5s ease";
   } else {
      typo.style.opacity = "0";
   }


   if (scrollY > 200) {
      sticky.style.background = "rgba(251,251,253,0.8)";
      sticky.style.backdropFilter = "saturate(180%) blur(20px)";
   } else {
      sticky.style.background = "#fcfcfd";
   }


   if (scrollY < 2900) {
      vidimage.style.opacity = "1";
      vidimage.style.transition = "opacity 0.7s ease";
   } else {
      vidimage.style.opacity = "0";
   }


   if (scrollY > 7200) {
      fixedvideo.style.display = "block";
   } else {
      fixedvideo.style.display = "none";
   }

   // console.log(scrollValue);
});


function myfunction(value, [x1, x2], [y1, y2]) {
   if (x1 === x2) {
      return y1;
   }
   return ((value - x1) * (y2 - y1)) / (x2 - x1) + y1;
}