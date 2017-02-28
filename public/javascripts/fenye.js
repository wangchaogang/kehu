localStorage.a = 0;
var ds = localStorage.b
if(ds == 0){
	$('#box>a').eq(0).attr('style','transform:skewX(45deg) translate(0,-200px);opacity: 0;')
	$('#box>a').eq(1).attr('style','transform:skewX(45deg) translate(-900px,0px);opacity: 0;')
	$('#box>a').eq(2).attr('style','transform:skewX(45deg) translate(1500px,0px);opacity:0;')
	$('#box>a').eq(3).attr('style','transform:skewX(45deg) translate(-900px,200px);opacity: 0;')
	$('#box>a').eq(4).attr('style','transform:skewX(45deg) translate(0,400px);opacity: 0;')
	$('#box>a').eq(5).attr('style','transform:skewX(45deg) translate(600px,200px);opacity: 0;')
	$('#box2>div').attr('style','transform: scale(1)')
	
		setTimeout(function(){
	   $('#box>a').attr('style','transform:skewX(45deg) translate(0,0);opacity: 1;transition:all 0.3s 0.3s;')
	$('#box2>div').attr('style','transform: scale(0);transition:all 0.3s')
	
	localStorage.b++
	},0)
}else{
	$('#box2>div').attr('style','transform: scale(0)')
	$('#box>a').attr('style','transform:skewX(45deg) translate(0,0);opacity: 1;')
}
