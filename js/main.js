// List of variables
var stuff1 = {item:"Yellow Cup", lPhoto:"http://fakeimg.pl/350x300/", sPhoto:"http://fakeimg.pl/150x100/", disc:"Yellow Plastic Hungry Buffs Cup", price:20, collection:"cheap"};

var stuff2 = {item:"Watch", lPhoto:"http://fakeimg.pl/350x300/", sPhoto:"http://fakeimg.pl/150x100/", disc:"Yellow Plastic Hungry Buffs Cup", price:30, collection:"cheap"};

var stuff3 = {item:"Phone", lPhoto:"http://fakeimg.pl/350x300/", sPhoto:"http://fakeimg.pl/150x100/", disc:"Yellow Plastic Hungry Buffs Cup", price:40, collection:"cheap"};

var stuff4 = {item:"TV", lPhoto:"http://fakeimg.pl/350x300/", sPhoto:"http://fakeimg.pl/150x100/", disc:"Yellow Plastic Hungry Buffs Cup", price:50, collection:"cheap"};

var stuff5 = {item:"Colored Pencils", lPhoto:"http://fakeimg.pl/350x300/", sPhoto:"http://fakeimg.pl/150x100/", disc:"Yellow Plastic Hungry Buffs Cup", price:25, collection:"cheap"};

var stuff6 = {item:"Benadryl", lPhoto:"http://fakeimg.pl/350x300/", sPhoto:"http://fakeimg.pl/150x100/", disc:"Yellow Plastic Hungry Buffs Cup", price:70, collection:"cheap"};

var stuff7 = {item:"Cupon Booklet", lPhoto:"http://fakeimg.pl/350x300/", sPhoto:"http://fakeimg.pl/150x100/", disc:"Yellow Plastic Hungry Buffs Cup", price:45, collection:"cheap"};

var stuff8 = {item:"Top Ramen", lPhoto:"http://fakeimg.pl/350x300/", sPhoto:"http://fakeimg.pl/150x100/", disc:"Yellow Plastic Hungry Buffs Cup", price:33, collection:"cheap"};

var stuff9 = {item:"Old Shirt", lPhoto:"http://fakeimg.pl/350x300/", sPhoto:"http://fakeimg.pl/150x100/", disc:"Yellow Plastic Hungry Buffs Cup", price:52, collection:"cheap"};

var stuff10 = {item:"Photo Of Grandad", lPhoto:"http://fakeimg.pl/350x300/", sPhoto:"http://fakeimg.pl/150x100/", disc:"Yellow Plastic Hungry Buffs Cup", price:42, collection:"cheap"};

var displayStuff = [stuff1,stuff2,stuff3,stuff4,stuff5,stuff6,stuff7,stuff8,stuff9,stuff10];

console.log("java on");
function inputData(){
  console.log("function running");
  if (screen.width>350) {
    console.log("in for loop");
    for (var i = 0; i < 10; i++) {
      var titleHolder = "title"+(i+1)
      console.log(titleHolder);
      var imageHolder = "image"+(i+1);
      var discriptionHolder = "discription"+(i+1);
      var priceHolder = "price"+(i+1);

      document.getElementById(titleHolder).innerHTML = displayStuff[i].item;
      document.getElementById(imageHolder).src = displayStuff[i].lPhoto;
      document.getElementById(discriptionHolder).innerHTML = displayStuff[i].disc;
      document.getElementById(priceHolder).innerHTML = displayStuff[i].price;
    }
  }
  if (screen.width<=350) {
    for (var i = 0; i < 10; i++) {
      var titleHolder = "title"+(i+1)
      var imageHolder = "image"+(i+1);
      var discriptionHolder = "discription"+(i+1);
      var priceHolder = "price"+(i+1);

      document.getElementById(titleHolder).innerHTML = displayStuff[i].item;
      document.getElementById(imageHolder).src = displayStuff[i].lPhoto;
      document.getElementById(discriptionHolder).innerHTML = displayStuff[i].disc;
      document.getElementById(priceHolder).innerHTML = displayStuff[i].price;
  }
}
}

inputData();
