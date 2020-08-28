/*-------------------------------nav code---------------------------------*/
$(".nav").mouseover(function(){
  $(".top-nav").addClass("bg-warning");
  $(".bottom-nav").addClass("bg-dark");
});
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if(height>=50){
$(".nav").mouseout(function(){
  $(".top-nav").addClass("bg-warning");
  $(".bottom-nav").addClass("bg-dark");
});
}else{
  $(".nav").mouseout(function(){
    $(".top-nav").removeClass("bg-warning");
    $(".bottom-nav").removeClass("bg-dark");
  });
}
});
$(function() {

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
          $(".top-nav").addClass("bg-warning");
          $(".bottom-nav").addClass("bg-dark");

        } else {
          $(".top-nav").removeClass("bg-warning");
          $(".bottom-nav").removeClass("bg-dark");

        }
    });
});
/*---------------------------------------------------------------------------*/
/*------------------------voucher----------------*/
$(".check-1").hide();
$(".check-2").hide();
$(".check-3").hide();
$(".check-4").hide();
$(".check-5").hide();
$(".check-6").hide();
$(".check-7").hide();
$(".check-8").hide();
$(".check-9").hide();
$(".check-10").hide();
$(".check-11").hide();
$(".check-12").hide();
$(".check-13").hide();
$(".check-14").hide();
$(".check-15").hide();
$(".check-16").hide();
$(".check-17").hide();
$(".check-18").hide();
$(".check-19").hide();
$(".check-20").hide();
$(".add-but-1").click(function(){
  var bal =parseInt($(".balance").text());
    if((bal>=20)||($(".check-1").is(':checked'))){
    $(".check-1").click();
    $(".add-but-1").toggleClass("add-but-checked");
    $(".voucher-img-1").toggleClass("voucher-img-add");
    if($(".check-1").is(':checked')){
        bal=bal-20;
    }else{
        bal=bal+20;
    }
  $(".balance").text(bal);
  }else{
    alert("Not Enough Balance!!");
}});
$(".add-but-2").click(function(){
  var bal =parseInt($(".balance").text());
    if((bal>=10)||($(".check-2").is(':checked'))){
    $(".check-2").click();
    $(".add-but-2").toggleClass("add-but-checked");
    $(".voucher-img-2").toggleClass("voucher-img-add");
    if($(".check-2").is(':checked')){
        bal=bal-10;
    }else{
      bal=bal+10;
    }
  $(".balance").text(bal);
  }else{
    alert("Not Enough Balance!!");
}});
$(".add-but-3").click(function(){
  var bal =parseInt($(".balance").text());
    if((bal>=5)||($(".check-3").is(':checked'))){
    $(".check-3").click();
    $(".add-but-3").toggleClass("add-but-checked");
    $(".voucher-img-3").toggleClass("voucher-img-add");
    if($(".check-3").is(':checked')){
        bal=bal-5;
    }else{
        bal=bal+5;
    }
  $(".balance").text(bal);
  }else{
    alert("Not Enough Balance!!");
}});
$(".add-but-4").click(function(){
  var bal =parseInt($(".balance").text());
    if((bal>=15)||($(".check-4").is(':checked'))){
    $(".check-4").click();
    $(".add-but-4").toggleClass("add-but-checked");
    $(".voucher-img-4").toggleClass("voucher-img-add");
    if($(".check-4").is(':checked')){
        bal=bal-15;
    }else{
        bal=bal+15;
    }
  $(".balance").text(bal);
  }else{
    alert("Not Enough Balance!!");
}});
$(".add-but-5").click(function(){
  var bal =parseInt($(".balance").text());
    if((bal>=5)||($(".check-5").is(':checked'))){
    $(".check-5").click();
    $(".add-but-5").toggleClass("add-but-checked");
    $(".voucher-img-5").toggleClass("voucher-img-add");
    if($(".check-5").is(':checked')){
        bal=bal-5;
    }else{
        bal=bal+5;
    }
  $(".balance").text(bal);
  }else{
    alert("Not Enough Balance!!");
}});
$(".add-but-6").click(function(){
  var bal =parseInt($(".balance").text());
    if((bal>=10)||($(".check-6").is(':checked'))){
    $(".check-6").click();
    $(".add-but-6").toggleClass("add-but-checked");
    $(".voucher-img-6").toggleClass("voucher-img-add");
    if($(".check-6").is(':checked')){
        bal=bal-10;
    }else{
        bal=bal+10;
    }
  $(".balance").text(bal);
  }else{
    alert("Not Enough Balance!!");
}});
$(".add-but-7").click(function(){
  var bal =parseInt($(".balance").text());
    if((bal>=10)||($(".check-7").is(':checked'))){
    $(".check-7").click();
    $(".add-but-7").toggleClass("add-but-checked");
    $(".voucher-img-7").toggleClass("voucher-img-add");
    if($(".check-7").is(':checked')){
        bal=bal-10;
    }else{
        bal=bal+10;
    }
  $(".balance").text(bal);
  }else{
    alert("Not Enough Balance!!");
}});
$(".add-but-8").click(function(){
  var bal =parseInt($(".balance").text());
    if((bal>=10)||($(".check-8").is(':checked'))){
    $(".check-8").click();
    $(".add-but-8").toggleClass("add-but-checked");
    $(".voucher-img-8").toggleClass("voucher-img-add");
    if($(".check-8").is(':checked')){
        bal=bal-10;
    }else{
        bal=bal+10;
    }
  $(".balance").text(bal);
  }else{
    alert("Not Enough Balance!!");
}});

$(".add-but-9").click(function(){
  var sel = document.getElementById('dd-9');
  var amt = document.getElementById('amount-voucher-9');
  var selInt = parseInt(sel.value);
  if(selInt==0){
    alert("Please Select Number Of Vouchers!");
  }else{
  var bal = parseInt($(".balance").text());
  if((bal>=(5*selInt))||($(".check-9").is(':checked'))){
    $(".check-9").click();
    $(".add-but-9").toggleClass("add-but-checked");
    $(".voucher-img-9").toggleClass("voucher-img-add");
    if($(".check-9").is(':checked')){
        bal=bal-(5*selInt);
        amt.value=sel.value;
        $('#dd-9').prop('disabled', 'disabled');
    }else{
        bal=bal+(5*selInt);
        amt.value="0";
        $('#dd-9').prop('disabled', false);
    }
  $(".balance").text(bal);
  }else{
    alert("Not Enough Balance!!");
}}});
$(".add-but-10").click(function(){
  var sel = document.getElementById('dd-10');
  var amt = document.getElementById('amount-voucher-10');
  var selInt = parseInt(sel.value);
  if(selInt==0){
    alert("Please Select Number Of Vouchers!");
  }else{
  var bal = parseInt($(".balance").text());
  if((bal>=(3*selInt))||($(".check-10").is(':checked'))){
    $(".check-10").click();
    $(".add-but-10").toggleClass("add-but-checked");
    $(".voucher-img-10").toggleClass("voucher-img-add");
    if($(".check-10").is(':checked')){
        bal=bal-(3*selInt);
        amt.value=sel.value;
        $('#dd-10').prop('disabled', 'disabled');
    }else{
        bal=bal+(3*selInt);
        amt.value="0";
        $('#dd-10').prop('disabled', false);
    }
  $(".balance").text(bal);
  }else{
    alert("Not Enough Balance!!");
}}});
$(".add-but-11").click(function(){
  var sel = document.getElementById('dd-11');
  var amt = document.getElementById('amount-voucher-11');
  var selInt = parseInt(sel.value);
  if(selInt==0){
    alert("Please Select Number Of Vouchers!");
  }else{
  var bal = parseInt($(".balance").text());
  if((bal>=(2*selInt))||($(".check-11").is(':checked'))){
    $(".check-11").click();
    $(".add-but-11").toggleClass("add-but-checked");
    $(".voucher-img-11").toggleClass("voucher-img-add");
    if($(".check-11").is(':checked')){
        bal=bal-(2*selInt);
        amt.value=sel.value;
        $('#dd-11').prop('disabled', 'disabled');
    }else{
        bal=bal+(2*selInt);
        amt.value="0";
        $('#dd-11').prop('disabled', false);
    }
  $(".balance").text(bal);
  }else{
    alert("Not Enough Balance!!");
}}});
$(".add-but-12").click(function(){
  var sel = document.getElementById('dd-12');
  var amt = document.getElementById('amount-voucher-12');
  var selInt = parseInt(sel.value);
  if(selInt==0){
    alert("Please Select Number Of Vouchers!");
  }else{
  var bal = parseInt($(".balance").text());
  if((bal>=(10*selInt))||($(".check-12").is(':checked'))){
    $(".check-12").click();
    $(".add-but-12").toggleClass("add-but-checked");
    $(".voucher-img-12").toggleClass("voucher-img-add");
    if($(".check-12").is(':checked')){
        bal=bal-(10*selInt);
        amt.value=sel.value;
        $('#dd-12').prop('disabled', 'disabled');
    }else{
        bal=bal+(10*selInt);
        amt.value="0";
        $('#dd-12').prop('disabled', false);
    }
  $(".balance").text(bal);
  }else{
    alert("Not Enough Balance!!");
}}});
$(".add-but-13").click(function(){
  var sel = document.getElementById('dd-13');
  var amt = document.getElementById('amount-voucher-13');
  var selInt = parseInt(sel.value);
  if(selInt==0){
    alert("Please Select Number Of Vouchers!");
  }else{
  var bal = parseInt($(".balance").text());
  if((bal>=(3*selInt))||($(".check-13").is(':checked'))){
    $(".check-13").click();
    $(".add-but-13").toggleClass("add-but-checked");
    $(".voucher-img-13").toggleClass("voucher-img-add");
    if($(".check-13").is(':checked')){
        bal=bal-(3*selInt);
        amt.value=sel.value;
        $('#dd-13').prop('disabled', 'disabled');
    }else{
        bal=bal+(3*selInt);
        amt.value="0";
        $('#dd-13').prop('disabled', false);
    }
  $(".balance").text(bal);
  }else{
    alert("Not Enough Balance!!");
}}});
$(".add-but-14").click(function(){
  var sel = document.getElementById('dd-14');
  var amt = document.getElementById('amount-voucher-14');
  var selInt = parseInt(sel.value);
  if(selInt==0){
    alert("Please Select Number Of Vouchers!");
  }else{
  var bal = parseInt($(".balance").text());
  if((bal>=(1*selInt))||($(".check-14").is(':checked'))){
    $(".check-14").click();
    $(".add-but-14").toggleClass("add-but-checked");
    $(".voucher-img-14").toggleClass("voucher-img-add");
    if($(".check-14").is(':checked')){
        bal=bal-(1*selInt);
        amt.value=sel.value;
        $('#dd-14').prop('disabled', 'disabled');
    }else{
        bal=bal+(1*selInt);
        amt.value="0";
        $('#dd-14').prop('disabled', false);
    }
  $(".balance").text(bal);
  }else{
    alert("Not Enough Balance!!");
}}});
$(".add-but-15").click(function(){
  var sel = document.getElementById('dd-15');
  var amt = document.getElementById('amount-voucher-15');
  var selInt = parseInt(sel.value);
  if(selInt==0){
    alert("Please Select Number Of Vouchers!");
  }else{
  var bal = parseInt($(".balance").text());
  if((bal>=(2*selInt))||($(".check-15").is(':checked'))){
    $(".check-15").click();
    $(".add-but-15").toggleClass("add-but-checked");
    $(".voucher-img-15").toggleClass("voucher-img-add");
    if($(".check-15").is(':checked')){
        bal=bal-(2*selInt);
        amt.value=sel.value;
        $('#dd-15').prop('disabled', 'disabled');
    }else{
        bal=bal+(2*selInt);
        amt.value="0";
        $('#dd-15').prop('disabled', false);
    }
  $(".balance").text(bal);
  }else{
    alert("Not Enough Balance!!");
}}});
$(".add-but-16").click(function(){
  var sel = document.getElementById('dd-16');
  var amt = document.getElementById('amount-voucher-16');
  var selInt = parseInt(sel.value);
  if(selInt==0){
    alert("Please Select Number Of Vouchers!");
  }else{
  var bal = parseInt($(".balance").text());
  if((bal>=(2*selInt))||($(".check-16").is(':checked'))){
    $(".check-16").click();
    $(".add-but-16").toggleClass("add-but-checked");
    $(".voucher-img-16").toggleClass("voucher-img-add");
    if($(".check-16").is(':checked')){
        bal=bal-(2*selInt);
        amt.value=sel.value;
        $('#dd-16').prop('disabled', 'disabled');
    }else{
        bal=bal+(2*selInt);
        amt.value="0";
        $('#dd-16').prop('disabled', false);
    }
  $(".balance").text(bal);
  }else{
    alert("Not Enough Balance!!");
}}});
$(".add-but-17").click(function(){
  var sel = document.getElementById('dd-17');
  var amt = document.getElementById('amount-voucher-17');
  var selInt = parseInt(sel.value);
  if(selInt==0){
    alert("Please Select Number Of Vouchers!");
  }else{
  var bal = parseInt($(".balance").text());
  if((bal>=(1*selInt))||($(".check-17").is(':checked'))){
    $(".check-17").click();
    $(".add-but-17").toggleClass("add-but-checked");
    $(".voucher-img-17").toggleClass("voucher-img-add");
    if($(".check-17").is(':checked')){
        bal=bal-(1*selInt);
        amt.value=sel.value;
        $('#dd-17').prop('disabled', 'disabled');
    }else{
        bal=bal+(1*selInt);
        amt.value="0";
        $('#dd-17').prop('disabled', false);
    }
  $(".balance").text(bal);
  }else{
    alert("Not Enough Balance!!");
}}});
$(".add-but-18").click(function(){
  var sel = document.getElementById('dd-18');
  var amt = document.getElementById('amount-voucher-18');
  var selInt = parseInt(sel.value);
  if(selInt==0){
    alert("Please Select Number Of Vouchers!");
  }else{
  var bal = parseInt($(".balance").text());
  if((bal>=(5*selInt))||($(".check-18").is(':checked'))){
    $(".check-18").click();
    $(".add-but-18").toggleClass("add-but-checked");
    $(".voucher-img-18").toggleClass("voucher-img-add");
    if($(".check-18").is(':checked')){
        bal=bal-(5*selInt);
        amt.value=sel.value;
        $('#dd-18').prop('disabled', 'disabled');
    }else{
        bal=bal+(5*selInt);
        amt.value="0";
        $('#dd-18').prop('disabled', false);
    }
  $(".balance").text(bal);
  }else{
    alert("Not Enough Balance!!");
}}});
$(".add-but-19").click(function(){
  var sel = document.getElementById('dd-19');
  var amt = document.getElementById('amount-voucher-19');
  var selInt = parseInt(sel.value);
  if(selInt==0){
    alert("Please Select Number Of Vouchers!");
  }else{
  var bal = parseInt($(".balance").text());
  if((bal>=(5*selInt))||($(".check-19").is(':checked'))){
    $(".check-19").click();
    $(".add-but-19").toggleClass("add-but-checked");
    $(".voucher-img-19").toggleClass("voucher-img-add");
    if($(".check-19").is(':checked')){
        bal=bal-(5*selInt);
        amt.value=sel.value;
        $('#dd-19').prop('disabled', 'disabled');
    }else{
        bal=bal+(5*selInt);
        amt.value="0";
        $('#dd-19').prop('disabled', false);
    }
  $(".balance").text(bal);
  }else{
    alert("Not Enough Balance!!");
}}});
$(".add-but-20").click(function(){
  var sel = document.getElementById('dd-20');
  var amt = document.getElementById('amount-voucher-20');
  var selInt = parseInt(sel.value);
  if(selInt==0){
    alert("Please Select Number Of Vouchers!");
  }else{
  var bal = parseInt($(".balance").text());
  if((bal>=(20*selInt))||($(".check-20").is(':checked'))){
    $(".check-20").click();
    $(".add-but-20").toggleClass("add-but-checked");
    $(".voucher-img-20").toggleClass("voucher-img-add");
    if($(".check-20").is(':checked')){
        bal=bal-(20*selInt);
        amt.value=sel.value;
        $('#dd-20').prop('disabled', 'disabled');
    }else{
        bal=bal+(20*selInt);
        amt.value="0";
        $('#dd-20').prop('disabled', false);
    }
  $(".balance").text(bal);
  }else{
    alert("Not Enough Balance!!");
}}});


/*---------------------diagon alley section-----------------------------------*/
$(".wish-sec").hide();
$(".shop-wish").click(function(){
  $(".wish-sec").fadeIn("3000");
});
$(".bake-sec").hide();
$(".shop-bake").click(function(){
  $(".bake-sec").fadeIn("3000");
});
$(".wink-sec").hide();
$(".shop-wink").click(function(){
  $(".wink-sec").fadeIn("3000");
});
$(".bank-sec").hide();
$(".shop-bank").click(function(){
  $(".bank-sec").fadeIn("3000");
});
$(".gift-sec").hide();
$(".shop-gift").click(function(){
  $(".gift-sec").fadeIn("3000");
});
/*--------------F.R.I.E.N.D.S Messages---------------------------------------*/
$(".all-charac").hide();
$(".phoebe").click(function(){
  $(".charac-c").fadeOut();
    $(".charac-m").fadeOut();
      $(".charac-j").fadeOut();
        $(".charac-ra").fadeOut();
  $(".charac-ro").fadeOut();
  $(".charac-p").fadeToggle("1000");
});
$(".ross").click(function(){
  $(".charac-c").fadeOut();
    $(".charac-m").fadeOut();
      $(".charac-j").fadeOut();
        $(".charac-ra").fadeOut();
  $(".charac-p").fadeOut();
  $(".charac-ro").fadeToggle("1000");
});
$(".joey").click(function(){
  $(".charac-c").fadeOut();
    $(".charac-m").fadeOut();
      $(".charac-p").fadeOut();
        $(".charac-ra").fadeOut();
  $(".charac-ro").fadeOut();
  $(".charac-j").fadeToggle("1000");
});
$(".rachel").click(function(){
  $(".charac-c").fadeOut();
    $(".charac-m").fadeOut();
      $(".charac-j").fadeOut();
        $(".charac-p").fadeOut();
  $(".charac-ro").fadeOut();
  $(".charac-ra").fadeToggle("1000");
});
$(".monica").click(function(){
  $(".charac-c").fadeOut();
    $(".charac-p").fadeOut();
      $(".charac-j").fadeOut();
        $(".charac-ra").fadeOut();
  $(".charac-ro").fadeOut();
  $(".charac-m").fadeToggle("1000");
});
$(".chandler").click(function(){
  $(".charac-p").fadeOut();
    $(".charac-m").fadeOut();
      $(".charac-j").fadeOut();
        $(".charac-ra").fadeOut();
  $(".charac-ro").fadeOut();
  $(".charac-c").fadeToggle("1000");
});
/*----------------------------special page------------------------------------*/
$(".special").hide();
$(".exp1").click(function(){
  $(".special-obj2").slideUp();
  $(".special-obj3").slideUp();
  $(".special-obj1").slideToggle("1000");
});
$(".exp2").click(function(){
  $(".special-obj1").slideUp();
  $(".special-obj3").slideUp();
  $(".special-obj2").slideToggle("1000");
});
$(".exp3").click(function(){
  $(".special-obj2").slideUp();
  $(".special-obj1").slideUp();
  $(".special-obj3").slideToggle("1000");
});


/*----------------------------category code-----------------------------------*/
$(".person").hide();
$(".moments").hide();
$(".gallery").hide();
$(".catg").hide();
$(".gallery0").hide();
/*----------------------*/
$(".cat1").click(function(){
  $(".category-list").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
  $(".catg").fadeIn();
})
/*--------*/
$(".cat2").click(function(){
  $(".person").fadeIn("slow");
  $(".category-list").fadeOut();
})
$(".catp1a").click(function(){
  $(".person").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
  $(".solo").fadeIn("slow");

})
$(".catp2a").click(function(){
  $(".person").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
$(".aman").fadeIn("slow");
})
$(".catp3a").click(function(){
  $(".person").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
  $(".preeti").fadeIn("slow");

})
$(".catp4a").click(function(){
  $(".person").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
  $(".panda").fadeIn("slow");

})
$(".catp1b").click(function(){
  $(".person").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
  $(".sanu").fadeIn("slow");

})
$(".catp2b").click(function(){
  $(".person").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
  $(".chini").fadeIn("slow");

})
$(".catp3b").click(function(){
  $(".person").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
  $(".amra").fadeIn("slow");

})
$(".catp4b").click(function(){
  $(".person").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
  $(".kanika").fadeIn("slow");

})
$(".catp1c").click(function(){
  $(".person").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
  $(".ankit").fadeIn("slow");

})
$(".catp2c").click(function(){
  $(".person").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
  $(".mc").fadeIn("slow");

})
$(".catp3c").click(function(){
  $(".person").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
  $(".sparsh").fadeIn("slow");

})
$(".catp4c").click(function(){
  $(".person").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
  $(".namra").fadeIn("slow");

})
/*----------*/
$(".cat3").click(function(){
  $(".moments").fadeIn("slow");
  $(".category-list").fadeOut();
})
$(".catm1a").click(function(){
  $(".moments").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
  $(".hexa").fadeIn("slow");

})
$(".catm2a").click(function(){
  $(".moments").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
  $(".cca").fadeIn("slow");

})
$(".catm3a").click(function(){
  $(".moments").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
  $(".anta").fadeIn("slow");

})
$(".catm4a").click(function(){
  $(".moments").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
  $(".gb").fadeIn("slow");

})
$(".catm1b").click(function(){
  $(".moments").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
  $(".holi").fadeIn("slow");

})
$(".catm2b").click(function(){
  $(".moments").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
  $(".fam").fadeIn("slow");

})
$(".catm3b").click(function(){
  $(".moments").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
  $(".win").fadeIn("slow");

})
$(".catm4b").click(function(){
  $(".moments").fadeOut();
  $(".box2").fadeOut();
  $(".gallery").fadeIn();
  $(".room").fadeIn("slow");

})

/*-------------*/
$(".cat4").click(function(){
  $(".category-list").fadeOut();

  $(".box2").fadeOut();
  $(".gallery").fadeIn();
})

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*---------------------------------------------------------------------------*/
  /*------------pensieve-------------------------------------------------------*/
  $(".nor-choice").click(function(){
  $(".mem-choice").fadeOut("1000");
  $(".nor-mem").fadeIn("3000");
  })
  $(".spe-choice").click(function(){
  $(".mem-choice").fadeOut("1000");
  $(".pensieve").fadeIn("3000");
  })

  /*------------pensieve-normal-------------------------------------------------------*/
$(".nor-mem-1").click(function(){
$(".nor-mem-exp-1").fadeIn("3000");
})
$(".nor-mem-2").click(function(){
$(".nor-mem-exp-2").fadeIn("3000");
})
$(".nor-mem-3").click(function(){
$(".nor-mem-exp-3").fadeIn("3000");
})
$(".nor-mem-4").click(function(){
$(".nor-mem-exp-4").fadeIn("3000");
})
$(".nor-mem-5").click(function(){
$(".nor-mem-exp-5").fadeIn("3000");
})
$(".nor-mem-6").click(function(){
$(".nor-mem-exp-6").fadeIn("3000");
})
$(".nor-mem-7").click(function(){
$(".nor-mem-exp-7").fadeIn("3000");
})
$(".nor-mem-8").click(function(){
$(".nor-mem-exp-8").fadeIn("3000");
})
$(".nor-mem-9").click(function(){
$(".nor-mem-exp-9").fadeIn("3000");
})
$(".nor-mem-10").click(function(){
$(".nor-mem-exp-10").fadeIn("3000");
})
$(".nor-mem-11").click(function(){
$(".nor-mem-exp-11").fadeIn("3000");
})
$(".nor-mem-12").click(function(){
$(".nor-mem-exp-12").fadeIn("3000");
})
/*---------------------------------------------------------------------------*/
/*--------------------------------------gallery code---------------------------*/

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
$(".inc-pass").hide();
$(".sub").click(function(){
if(document.getElementById('password').value.toLowerCase() == 'caput draconis'){
  alert("*Terms And Conditions Applied*Read On Your Own Risk");

window.location.href = "unlock.html";

}
else if(document.getElementById('password').value.toLowerCase() == 'caputdraconis'){
  alert("*Terms And Conditions Applied*Read On Your Own Risk");
    window.location.href = "unlock.html";
}
else{
    $(".inc-pass").fadeIn("slow");

    return false;

}});
/*function validatePass(){
    if(document.getElementById('password').value.toLowerCase() == 'caput draconis'){
      alert("*Terms And Conditions Applied*Read On Your Own Risk")
        return true;
    }
    else if(document.getElementById('password').value.toLowerCase() == 'caputdraconis'){
      alert("*Terms And Conditions Applied*Read On Your Own Risk")
        return true;
    }
    else{
        $(".inc-pass").fadeIn("slow");

        return false;

    }
}*/
function simple(){
    if(document.getElementById('password').value.toLowerCase() == 'alohomora'){
      alert("You're A Wizard Shruti!🧙‍♂️")
        return true;
    }

    else{
        alert('Muggles Stay Away!!')

        return false;

    }
}


/*---------------------------------------------------------------------------*/
/*-------------------------------pensieve-special*----------------------------*/
  $(".special-mem").hide();
$(".pensieve-1").click(function(){
$(".pensieve").fadeOut("1000");
  $(".special-mem-1").fadeIn("3000");
})
$(".pensieve-2").click(function(){
$(".pensieve").fadeOut("1000");
  $(".special-mem-2").fadeIn("3000");
})
$(".pensieve-3").click(function(){
$(".pensieve").fadeOut("1000");
  $(".special-mem-3").fadeIn("3000");
})
$(".pensieve-4").click(function(){
$(".pensieve").fadeOut("1000");
  $(".special-mem-4").fadeIn("3000");
})
$(".pensieve-5").click(function(){
$(".pensieve").fadeOut("1000");
  $(".special-mem-5").fadeIn("3000");
})
$(".pensieve-6").click(function(){
$(".pensieve").fadeOut("1000");
  $(".special-mem-6").fadeIn("3000");
})
$(".pensieve-7").click(function(){
$(".pensieve").fadeOut("1000");
  $(".special-mem-7").fadeIn("3000");
})
$(".pensieve-8").click(function(){
$(".pensieve").fadeOut("1000");
  $(".special-mem-8").fadeIn("3000");
})
$(".pensieve-9").click(function(){
$(".pensieve").fadeOut("1000");
  $(".special-mem-9").fadeIn("3000");
})
$(".pensieve-10").click(function(){
$(".pensieve").fadeOut("1000");
  $(".special-mem-10").fadeIn("3000");
})
$(".pensieve-11").click(function(){
$(".pensieve").fadeOut("1000");
  $(".special-mem-11").fadeIn("3000");
})
$(".pensieve-12").click(function(){
$(".pensieve").fadeOut("1000");
  $(".special-mem-12").fadeIn("3000");
})
$(".pensieve-13").click(function(){
$(".pensieve").fadeOut("1000");
  $(".special-mem-13").fadeIn("3000");
})
$(".pensieve-14").click(function(){
$(".pensieve").fadeOut("1000");
  $(".special-mem-14").fadeIn("3000");
})
$(".pensieve-15").click(function(){
$(".pensieve").fadeOut("1000");
  $(".special-mem-15").fadeIn("3000");
})
$(".pensieve-16").click(function(){
$(".pensieve").fadeOut("1000");
  $(".special-mem-16").fadeIn("3000");
})
$(".back-pen").click(function(){
  $(".special-mem").fadeOut("1000");
  $(".pensieve").fadeIn("1000");

})

/*----------------------messages code---------------------------------------*/

$(".num1-card").click(function(){
  $(".box-msg").css("z-index","1");
  $(".num1-msg").css("z-index","2");

})
$(".back").click(function(){
  $(".box-msg").css("z-index","-1");
  $(".num1-msg").css("z-index","-1");

})

$(".num2-card").click(function(){
  $(".box-msg").css("z-index","1");
  $(".num2-msg").css("z-index","2");

})
$(".back").click(function(){
  $(".box-msg").css("z-index","-1");
  $(".num2-msg").css("z-index","-1");

})

$(".num3-card").click(function(){
  $(".box-msg").css("z-index","1");
  $(".num3-msg").css("z-index","2");

})
$(".back").click(function(){
  $(".box-msg").css("z-index","-1");
  $(".num3-msg").css("z-index","-1");

})

$(".num4-card").click(function(){
  $(".box-msg").css("z-index","1");
  $(".num4-msg").css("z-index","2");

})
$(".back").click(function(){
  $(".box-msg").css("z-index","-1");
  $(".num4-msg").css("z-index","-1");

})

$(".num5-card").click(function(){
  $(".box-msg").css("z-index","1");
  $(".num5-msg").css("z-index","2");

})
$(".back").click(function(){
  $(".box-msg").css("z-index","-1");
  $(".num5-msg").css("z-index","-1");

})

$(".num6-card").click(function(){
  $(".box-msg").css("z-index","1");
  $(".num6-msg").css("z-index","2");

})
$(".back").click(function(){
  $(".box-msg").css("z-index","-1");
  $(".num6-msg").css("z-index","-1");

})

$(".num7-card").click(function(){
  $(".box-msg").css("z-index","1");
  $(".num7-msg").css("z-index","2");

})
$(".back").click(function(){
  $(".box-msg").css("z-index","-1");
  $(".num7-msg").css("z-index","-1");

})

$(".num8-card").click(function(){
  $(".box-msg").css("z-index","1");
  $(".num8-msg").css("z-index","2");

})
$(".back").click(function(){
  $(".box-msg").css("z-index","-1");
  $(".num8-msg").css("z-index","-1");

})

$(".num9-card").click(function(){
  $(".box-msg").css("z-index","1");
  $(".num9-msg").css("z-index","2");

})
$(".back").click(function(){
  $(".box-msg").css("z-index","-1");
  $(".num9-msg").css("z-index","-1");

})

$(".num10-card").click(function(){
  $(".box-msg").css("z-index","1");
  $(".num10-msg").css("z-index","2");

})
$(".back").click(function(){
  $(".box-msg").css("z-index","-1");
  $(".num10-msg").css("z-index","-1");

})

$(".num11-card").click(function(){
  $(".box-msg").css("z-index","1");
  $(".num11-msg").css("z-index","2");

})
$(".back").click(function(){
  $(".box-msg").css("z-index","-1");
  $(".num11-msg").css("z-index","-1");

})

$(".num12-card").click(function(){
  $(".box-msg").css("z-index","1");
  $(".num12-msg").css("z-index","2");

})
$(".back").click(function(){
  $(".box-msg").css("z-index","-1");
  $(".num12-msg").css("z-index","-1");

})
$(".num13-card").click(function(){
  $(".box-msg").css("z-index","1");
  $(".num13-msg").css("z-index","2");

})
$(".back").click(function(){
  $(".box-msg").css("z-index","-1");
  $(".num13-msg").css("z-index","-1");

})
$(".num14-card").click(function(){
  $(".box-msg").css("z-index","1");
  $(".num14-msg").css("z-index","2");

})
$(".back").click(function(){
  $(".box-msg").css("z-index","-1");
  $(".num14-msg").css("z-index","-1");

})
$(".num15-card").click(function(){
  $(".box-msg").css("z-index","1");
  $(".num15-msg").css("z-index","2");

})
$(".back").click(function(){
  $(".box-msg").css("z-index","-1");
  $(".num15-msg").css("z-index","-1");

})

/*---------------------------------------------------------------------------*/
