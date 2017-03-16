// List of variables
var stuff1 = {item:"Yellow Cup", lPhoto:"icon2-Lyellowcup", sPhoto:"icon3-Syellowcup", xLPhoto:"icon1-XLyellowcup", disc:"Yellow Plastic Hungry Buffs Cup", price:20, collection:"cheap"};

var stuff2 = {item:"Watch", lPhoto:" icon2-Lwatch", sPhoto:"icon3-Swatch", xLPhoto:"icon1-XLwatch", disc:"Yellow Plastic Hungry Buffs Cup", price:30, collection:"cheap"};

var stuff3 = {item:"Lazer Pointer(w/pen)", lPhoto:"icon2-Llazerpen", sPhoto:"icon3-Slazerpen", xLPhoto:"icon1-XLlazerpen", disc:"Yellow Plastic Hungry Buffs Cup", price:40, collection:"cheap"};

var stuff4 = {item:"Butane Lighter", lPhoto:"icon2-Llighter", sPhoto:"icon3-Slighter", xLPhoto:"icon1-XLlighter", disc:"Yellow Plastic Hungry Buffs Cup", price:50, collection:"cheap"};

var stuff5 = {item:"HD-Vision Sunglasses", lPhoto:"icon2-Lglasses", sPhoto:"icon3-Sglasses", xLPhoto:"icon1-XLglasses", disc:"Yellow Plastic Hungry Buffs Cup", price:25, collection:"cheap"};

var stuff6 = {item:"Benadryl", lPhoto:"icon2-Lbenedryl", sPhoto:"icon3-Sbenedryl", xLPhoto:"icon1-XLbenedryl", disc:"Yellow Plastic Hungry Buffs Cup", price:70, collection:"cheap"};

var stuff7 = {item:"Cupon Booklet", lPhoto:"icon2-Lcuponbook", sPhoto:"icon3-Scuponbook", xLPhoto:"icon1-XLcuponbook", disc:"Yellow Plastic Hungry Buffs Cup", price:45, collection:"cheap"};

var stuff8 = {item:"Ramen Combo Pack", lPhoto:"icon2-Lramen", sPhoto:"icon3-Sramen", xLPhoto:"icon1-XLramen", disc:"Yellow Plastic Hungry Buffs Cup", price:33, collection:"cheap"};

var stuff9 = {item:"Old Shirt", lPhoto:"icon2-Lshirt", sPhoto:"icon3-Sshirt", xLPhoto:"icon1-XLshirt", disc:"Yellow Plastic Hungry Buffs Cup", price:52, collection:"cheap"};

var stuff10 = {item:"A Photo Of Grandad", lPhoto:"icon2-Loldphoto", sPhoto:"icon3-Soldphoto", xLPhoto:"icon1-XLoldphoto", disc:"Yellow Plastic Hungry Buffs Cup", price:42, collection:"cheap"};

var displayStuff = [stuff1,stuff2,stuff3,stuff4,stuff5,stuff6,stuff7,stuff8,stuff9,stuff10];

console.log("java on");
function inputData(){
  console.log("function running");
  var width = $(document).width();
  console.log(width);

  // Larger screen size
if (width>750) {
    console.log("larger screen loop");
    for (var i = 0; i < 10; i++) {
      var titleHolder = "title"+(i+1)
      var imageHolder = "image"+(i+1);
      var discriptionHolder = "discription"+(i+1);
      var priceHolder = "price"+(i+1);
      console.log(titleHolder);

      document.getElementById(titleHolder).innerHTML = displayStuff[i].item;
      document.getElementById(imageHolder).className = displayStuff[i].lPhoto;
      // console.log("className was " + document.getElementById(imageHolder).className + ", className is now "+displayStuff[i].lPhoto);
      document.getElementById(discriptionHolder).innerHTML = displayStuff[i].disc;
      document.getElementById(priceHolder).innerHTML = displayStuff[i].price+"$";
    }
  }
  //XL size screen
  if (width>1700) {
    console.log("XL screen loop");
    for (var i = 0; i < 10; i++) {
      var titleHolder = "title"+(i+1)
      var imageHolder = "image"+(i+1);
      var discriptionHolder = "discription"+(i+1);
      var priceHolder = "price"+(i+1);

      document.getElementById(titleHolder).innerHTML = displayStuff[i].item;
      document.getElementById(imageHolder).className = displayStuff[i].xLPhoto;
      document.getElementById(discriptionHolder).innerHTML = displayStuff[i].disc;
      document.getElementById(priceHolder).innerHTML = displayStuff[i].price+"$";
    }
  }
  // Smaller screen size
  if (width<=750) {
    console.log('smaller screen');
    for (var i = 0; i < 10; i++) {
      var titleHolder = "title"+(i+1)
      var imageHolder = "image"+(i+1);
      var discriptionHolder = "discription"+(i+1);
      var priceHolder = "price"+(i+1);

      document.getElementById(titleHolder).innerHTML = displayStuff[i].item;
      document.getElementById(imageHolder).className = displayStuff[i].sPhoto;
      document.getElementById(discriptionHolder).innerHTML = displayStuff[i].disc;
      document.getElementById(priceHolder).innerHTML = displayStuff[i].price+"$";
  }
}

}

inputData();
$(window).resize(function() {
        inputData();
        console.log(document.getElementById(imageHolder).className);
    });
