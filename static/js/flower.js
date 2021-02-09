window.onload=function(){
	    	var audio = document.getElementById('a');
//	    	audio.src='huahuo.mp3';
			audio.volume=0.15;


	    	body = document.getElementsByTagName("body")[0];
	    	width = window.screen.availWidth;
	    	height = window.screen.availHeight;
	    	body.style.height=height+'px';
	    	
	    	var div = document.getElementById("showtime");
	    	
	    	var delay;
	    	var showtime = function (nowtime,endtime,lefttime) {
				leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
				lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
				leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
				lefts = Math.floor(lefttime/1000%60);  //计算秒数
				if(lefttime/1000/60<1){
			    	div.style.animation='mymove 2s infinite';
			    	return lefts;
			    }
				var result;
				if(!leftd){
					if(!lefth){
						if(!leftm){
							result=lefts +'秒';
						}else{
							result=leftm + "分钟:" + lefts +'秒';
						}
					}else{
						result=lefth + "小时:" + leftm + "分钟:" + lefts +'秒';
					}
				}else{
					result=leftd + "天" + lefth + "小时:" + leftm + "分钟:" + lefts +'秒';  //返回倒计时的字符串
				}
				return '新年倒计时：'+result;
	}
	    	
	    	var mytimer=function () {
	    		var nowtime = new Date();  //获取当前时间
	    		var endtime = new Date("2021/2/7 11:33:00");  //定义结束时间
	    		var lefttime = endtime.getTime() - nowtime.getTime(); //距离结束时间的毫秒数
			    var offset = 1000-lefttime%1000;
			    if(lefttime<=0){
			    	div.innerHTML = '新年快乐！';
			    	clearTimeout(delay);
			    	div.style.animation='';
			    	audio.autoplay='autoplay';
			    	audio.play();
			    	audio.play();
			    	$('.demo').fireworks({
			            sound: true,
			            opacity: 0.6,
			            width: '100%',
			            height: '100%'
			       });
			    }else{
			    	div.innerHTML = showtime(nowtime,endtime,lefttime);
				    if(offset>=200&&lefttime/1000/60>=0.8){
				    	delay = setTimeout(function(){
					    	mytimer();
					    },offset)
				    }else{
			    	delay = setTimeout(function(){
				    	mytimer();
				    },1000)
			    }
			    }
			};
			mytimer();
}