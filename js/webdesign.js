$(function(){
	photoshopopen();
	mousexy();
});
 
function photoshopopen(){
	 $("#photoshop").click(function(){
	 	var l= $(this).next("div").css('display');
	 	if (l=="none") {
	 		 $(this).next("div").css('display','block');	
	 	}else
	 	{$(this).next("div").css('display','none');};
	 })

}

function mousexy(imurl,a,b){
	var x=$(".containerbig").clientX;

	$(".containerbig").css('top',y-b);
	$(".containerbig").css('left',x-a);
	$(".containerbig").css("background-image","url('../images/29812-bcss.jpg)");
	$(".containerbig").css('display','block');
	$(".containerbig").css('width',a);
	$(".containerbig").css('height',b);

alert(x);
}
