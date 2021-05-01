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
$(document).ready(function() {
	readFromServer();
});


function readFromServer(){
	var parameter = {};
    urlary.map((url,index)=>{
        console.log(url)
    $.get(url, function(data) {
		console.log(data);
	
       
		init(data,index);
       
	});
    })
// $.get(serverURL1, function(data) {
// 		console.log(data);
// 		console.log("11");
// 		init(data);
       
// 	});
}

function init(data,index){
    console.log(index)
	
        var htmlCode = '<a href="detail.html?id='+index+'"><div class="eachcont"><img class="imgs"src="'+data.imgurl+'"><div class="shadow"><p class="ph_num">'+data.photoNum+'張相片</p><p class="author">'+data.author+'</p></div></div></a>';
	$('section .container').append(htmlCode)
   
    // data.images.map((da)=>{
    //     var htmlCode = '<a href="detail.html"><img class="imgs"src="'+da.imgurl+'"></a>';
	// $('section .container').append(htmlCode)
    // })
	
}
// let $template = $('#template01');
//   let $node = $template.html();
//   $node = $node.replace('IMG_HERE',img1);
//   $node = $node.replace('TEXT_HERE',text1);
//   $('body').append($node);
 
//   $node = $template.html();
//   $node = $node.replace('IMG_HERE',img2);
//   $node = $node.replace('TEXT_HERE',text2);
//   $('body').append($node);
//   var url = document.location.toString()