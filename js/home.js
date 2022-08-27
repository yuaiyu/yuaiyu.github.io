			
	function myweb(){
	window.location.href='start.html';
}		
			
	var person=prompt("请输入你的名字","yuweb");
	if (person!=null && person=="123456")
{
 	window.location.href='index.html';
} 
else if(person=='12')
{
	window.location.href='music.html';
}
else if(person=='yuweb')
{
	window.location.href='start.html';
}
else{
	alert('号码输入错误，请重新输入');
//	window.location='home.html';
}
