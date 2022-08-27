            content = "如果你瞄准月亮<br/>即使迷失<br/>也会落在璀璨星辰之间<br/>";
            i = 0;
 
            function show() {
                str = content.substr(0, i);
                txt.innerHTML = str + "｜";
                i++;
                if (i > content.length) i = 0;	
                setTimeout("show()", 300);
				if(i==content.length)
				{
					function vv(){
						window.location="index.html";
					}
					setTimeout(vv,200);
				}
				
            }

			











//	<!--<body >
//		<!--<p class='aa'>宇的网站</p>-->
//		<!--<div id="text1">
//
//		</div>
//		<script language="JavaScript">
//			var i=0;
//			var one="呜呜呜<br/>度夺得";
//			var two="哈哈哈哈";
//			var mydiv=document.getElementById("text1");	
//			var mytwo=document.getElementById("text2");				
//			gundong(one,mydiv);
//		function gundong(str,div){
//				window.onload=function typing(){
//				div.innerHTML+=str.charAt(i);
//				i++;
//				var id=setTimeout(typing,100);
//				if(i==str.length){
//					clearTimeout(id);
//				}
//		}
//
//			}-->

//<!--//var content="啦啦啦啦啦<br/>顶顶顶顶";
////var i=0;
////function show(){
////	str=content.substr(0,i);
////	txt.innerHTML=str+"hhh";
////	i++;
////	if(i>content.length)
////	{
////		i=0;
////		setTimeout("show()",2000);
////	}
////}-->
//		<!--</script>-->
//	<!--</body>-->