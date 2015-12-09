

		$(document).ready(function(){
		
		
			var cc = 0;
			setInterval(function(){
				cc+=1;
				var position = cc+"px bottom";
				$(".slider_area").css("background-position",position);
				
			}, 30);
		    
		});