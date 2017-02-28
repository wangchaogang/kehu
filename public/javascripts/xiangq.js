//$('#box>a').click(function(){
	     localStorage.b = 0
	var a = localStorage.a
	if( a == 0){
		setTimeout(function(){
	$('#box>a').eq(0).attr('style','transform:skewX(45deg) translate(0,-200px);opacity: 0;transition:all 0.3s;')
	$('#box>a').eq(1).attr('style','transform:skewX(45deg) translate(-900px,0px);opacity: 0;transition:all 0.3s;')
	$('#box>a').eq(2).attr('style','transform:skewX(45deg) translate(1500px,0px);opacity:0;transition:all 0.3s;')
	$('#box>a').eq(3).attr('style','transform:skewX(45deg) translate(-900px,200px);opacity: 0;transition:all 0.3s;')
	$('#box>a').eq(4).attr('style','transform:skewX(45deg) translate(0,400px);opacity: 0;transition:all 0.3s;')
	$('#box>a').eq(5).attr('style','transform:skewX(45deg) translate(600px,200px);opacity: 0;transition:all 0.3s;')
	var inx = $(this).index()

	$('#box2>div').attr('style','transform: scale(0);transition:all 0.3s 0.3s')
	$('#box2>div').eq(inx).attr('style','transform: scale(1);transition:all 0.3s 0.3s')
	},0)
		localStorage.a++
	}else{
		$('#box>a').eq(0).attr('style','transform:skewX(45deg) translate(0,-200px);opacity: 0;')
	$('#box>a').eq(1).attr('style','transform:skewX(45deg) translate(-900px,0px);opacity: 0;')
	$('#box>a').eq(2).attr('style','transform:skewX(45deg) translate(1500px,0px);opacity:0;')
	$('#box>a').eq(3).attr('style','transform:skewX(45deg) translate(-900px,200px);opacity: 0;')
	$('#box>a').eq(4).attr('style','transform:skewX(45deg) translate(0,400px);opacity: 0;')
	$('#box>a').eq(5).attr('style','transform:skewX(45deg) translate(600px,200px);opacity: 0;')
	$('#box2>div').attr('style','transform: scale(1)')
	}
	
//})



//$('#box2 span').click(function(){
//	
//	
//	$('#box>a').attr('style','transform:skewX(45deg) translate(0px,0px); transition:all 0.3s 0.3s;opacity: 1;')
//	$('#box2>div').attr('style','transform: scale(0);transition:all 0.3s;')
// 
//  
//})
