// List of variables
var stuff1 = {item:"Yellow Cup", lPhoto:"http://lorempixel.com/350/300/fashion", sPhoto:"http://lorempixel.com/150/100/fashion", xLPhoto:"http://lorempixel.com/450/400/fashion", disc:"Yellow Plastic Hungry Buffs Cup", price:20, collection:"cheap"};

var stuff2 = {item:"Watch", lPhoto:"http://lorempixel.com/350/300/fashion", sPhoto:"http://lorempixel.com/150/100/fashion", xLPhoto:"http://lorempixel.com/450/400/fashion", disc:"Yellow Plastic Hungry Buffs Cup", price:30, collection:"cheap"};

var stuff3 = {item:"Phone", lPhoto:"http://lorempixel.com/350/300/fashion", sPhoto:"http://lorempixel.com/150/100/fashion", xLPhoto:"http://lorempixel.com/450/400/fashion", disc:"Yellow Plastic Hungry Buffs Cup", price:40, collection:"cheap"};

var stuff4 = {item:"TV", lPhoto:"http://lorempixel.com/350/300/fashion", sPhoto:"http://lorempixel.com/150/100/fashion", xLPhoto:"http://lorempixel.com/450/400/fashion", disc:"Yellow Plastic Hungry Buffs Cup", price:50, collection:"cheap"};

var stuff5 = {item:"Colored Pencils", lPhoto:"http://lorempixel.com/350/300/fashion", sPhoto:"http://lorempixel.com/150/100/fashion", xLPhoto:"http://lorempixel.com/450/400/fashion", disc:"Yellow Plastic Hungry Buffs Cup", price:25, collection:"cheap"};

var stuff6 = {item:"Benadryl", lPhoto:"http://lorempixel.com/350/300/fashion", sPhoto:"http://lorempixel.com/150/100/fashion", xLPhoto:"http://lorempixel.com/450/400/fashion", disc:"Yellow Plastic Hungry Buffs Cup", price:70, collection:"cheap"};

var stuff7 = {item:"Cupon Booklet", lPhoto:"http://lorempixel.com/350/300/fashion", sPhoto:"http://lorempixel.com/150/100/fashion", xLPhoto:"http://lorempixel.com/450/400/fashion", disc:"Yellow Plastic Hungry Buffs Cup", price:45, collection:"cheap"};

var stuff8 = {item:"Top Ramen", lPhoto:"http://lorempixel.com/350/300/fashion", sPhoto:"http://lorempixel.com/150/100/fashion", xLPhoto:"http://lorempixel.com/450/400/fashion", disc:"Yellow Plastic Hungry Buffs Cup", price:33, collection:"cheap"};

var stuff9 = {item:"Old Shirt", lPhoto:"http://lorempixel.com/350/300/fashion", sPhoto:"http://lorempixel.com/150/100/fashion", xLPhoto:"http://lorempixel.com/450/400/fashion", disc:"Yellow Plastic Hungry Buffs Cup", price:52, collection:"cheap"};

var stuff10 = {item:"Photo Of Grandad", lPhoto:"http://lorempixel.com/350/300/fashion", sPhoto:"http://lorempixel.com/150/100/fashion", xLPhoto:"http://lorempixel.com/450/400/fashion", disc:"Yellow Plastic Hungry Buffs Cup", price:42, collection:"cheap"};

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
      document.getElementById(imageHolder).src = displayStuff[i].lPhoto;
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
      document.getElementById(imageHolder).src = displayStuff[i].xLPhoto;
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
      document.getElementById(imageHolder).src = displayStuff[i].sPhoto;
      document.getElementById(discriptionHolder).innerHTML = displayStuff[i].disc;
      document.getElementById(priceHolder).innerHTML = displayStuff[i].price+"$";
  }
}

}

inputData();
$(window).resize(function() {
        inputData();
    });
