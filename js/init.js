function Scalebg(imgpath){
	this.imgpath=imgpath;
	this.scale=function(){
		//var pagehei=document.documentElement.clientHeight;
		//var pagewid=document.documentElement.clientWidth;
		var pagehei=window.innerHeight;
		var pagewid=window.innerWidth;
		var pagewhb=pagewid/pagehei;
		var bgimg=new Image();
		bgimg.src=this.imgpath;
		bgimg.onload=function(){
			var imgscale=bgimg.width/bgimg.height;
			if(imgscale>pagewhb){
				document.documentElement.style.fontSize = (pagewid/bgimg.width*100).toFixed(5)+"px";
			}else{
				document.documentElement.style.fontSize = (pagehei/bgimg.height*100).toFixed(5)+"px";
			}
			var scalebg=document.getElementById("scale_bg");
			scalebg.style.width=bgimg.width/100+"rem";
			scalebg.style.height=bgimg.height/100+"rem";
			scalebg.style.margin="0 auto";
			scalebg.style.position="relative";
			scalebg.style.top="50%";
			scalebg.style.left="0";
			scalebg.style.transform="translateY("+bgimg.height/-200+"rem)";
			scalebg.style.background="transparent url("+imgpath+") no-repeat";
			scalebg.style.backgroundSize="cover";
		}
	}
	this.scale();
}
