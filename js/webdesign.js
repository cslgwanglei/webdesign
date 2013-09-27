$(function(){
	photoshopopen();
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