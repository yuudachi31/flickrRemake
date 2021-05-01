let serverURL1 = 'json/110619017.json';
let serverURL2 = 'json/110719001.json';
let serverURL3 = 'json/110619018.json';
let serverURL4 = 'json/110719016.json';
let serverURL5 = 'json/110619040.json';
let serverURL6 = 'json/110619042.json';
let serverURL7 = 'json/110719007.json';
let serverURL8 = 'json/110719017.json';
let serverURL9 = 'json/110719030.json';
let serverURL10 = 'json/110719033.json';
let serverURL11 = 'json/110819015.json';
let serverURL12 = 'json/110819023.json';
let urlary=[serverURL1,serverURL2,serverURL3,serverURL4,serverURL5,serverURL6,serverURL7,serverURL8,serverURL9,serverURL10,serverURL11,serverURL12]
let url= document.location.toString();
let argumentAry2 = url.split('?');
console.log(argumentAry2);
// let argumentAry = url.split('?');
// console.log(argumentAry);
// let argumentAry2 = argumentAry[1].split('&');
// console.log(argumentAry2);
for(let i=0;i<argumentAry2.length;i++){
  argumentAry2[i] = argumentAry2[i].split('=');
}
console.log(argumentAry2[1][1]);
let id_num=argumentAry2[1][1]
$(document).ready(function() {
	readFromServer();
});
function readFromServer(){
	var parameter = {};
    urlary.map((url,index)=>{
        console.log(url)
        if(index==id_num){
    $.get(url, function(data) {
		console.log(data);
	
       
		init(data,index);
       
	});
}
    })
}
function init(data,index){
    console.log(index)
    var headerimg = '<a><img class="header_img"src="'+data.images[0].imgurl+'"></a><div class="infocont"><div class="title">'+data.name+
    '</div><div class="phAndView"><p>'+data.photoNum+'張照片</p><p class="viewnum">'+data.viewNum+'次檢視</p></div><p class="ower">相片擁有者:'+data.author+'</p></div>';
	$('.header').append(headerimg)
    //     var htmlCode = '<a href="detail.html?id='+index+'"><div class="eachcont"><img class="imgs"src="'+data.imgurl+'"><div class="shadow"><p class="ph_num">'+data.photoNum+'張相片</p><p class="author">'+data.author+'</p></div></div></a>';
	// $('section .container').append(htmlCode)
   
    data.images.map((da)=>{
        var htmlCode = '<a><img class="imgs_detail"src="'+da.imgurl+'"></a>';
	$('section .container2').append(htmlCode)
    })
	
}