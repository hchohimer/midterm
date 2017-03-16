// List of variables
var stuff1 = {item:"Yellow Cup", lPhoto:"icon2-Lyellowcup", sPhoto:"icon3-Syellowcup", xLPhoto:"icon1-XLyellowcup", disc:"Yellow Plastic Hungry Buffs Cup", price:20, collection:"cheap"};

var stuff2 = {item:"Watch", lPhoto:" icon2-Lwatch", sPhoto:"icon3-Swatch", xLPhoto:"icon1-XLwatch", disc:"A most excelent time keeping device", price:310, collection:"expensive"};

var stuff3 = {item:"Lazer Pointer(w/pen)", lPhoto:"icon2-Llazerpen", sPhoto:"icon3-Slazerpen", xLPhoto:"icon1-XLlazerpen", disc:"Awesome lazer pointer that can double as a pen at a moments notice", price:70, collection:"fun"};

var stuff4 = {item:"Butane Lighter", lPhoto:"icon2-Llighter", sPhoto:"icon3-Slighter", xLPhoto:"icon1-XLlighter", disc:"A flip top butane lighter that works most of the time", price:15, collection:"cheap"};

var stuff5 = {item:"HD-Vision Sunglasses", lPhoto:"icon2-Lglasses", sPhoto:"icon3-Sglasses", xLPhoto:"icon1-XLglasses", disc:"As Seen On TV: HD-Vision Sunglasses are actually as good as the ads say they are", price:45, collection:"fun"};

var stuff6 = {item:"Benadryl", lPhoto:"icon2-Lbenedryl", sPhoto:"icon3-Sbenedryl", xLPhoto:"icon1-XLbenedryl", disc:"uhhh... I'm pretty sure Benadryl is ok to sell online", price:70, collection:"expensive"};

var stuff7 = {item:"Cupon Booklet", lPhoto:"icon2-Lcuponbook", sPhoto:"icon3-Scuponbook", xLPhoto:"icon1-XLcuponbook", disc:"This book can actually save you way more money than the price listed here", price:35, collection:"cheap"};

var stuff8 = {item:"Ramen Combo Pack", lPhoto:"icon2-Lramen", sPhoto:"icon3-Sramen", xLPhoto:"icon1-XLramen", disc:"My Ramen comes in every shape and color, as long as that shape is square and the color is off-yellow", price:8, collection:"cheap"};

var stuff9 = {item:"007 Shirt", lPhoto:"icon2-Lshirt", sPhoto:"icon3-Sshirt", xLPhoto:"icon1-XLshirt", disc:"Rumors say that this shirt may be an original poster converted into a cool cotton shirt", price:92, collection:"expensive"};

var stuff10 = {item:"A Photo Of Grandad", lPhoto:"icon2-Loldphoto", sPhoto:"icon3-Soldphoto", xLPhoto:"icon1-XLoldphoto", disc:"Grandad left this to me to remember him by, now I leave it to you, for a price", price:102, collection:"fun"};

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
