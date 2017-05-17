// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready", function(){
	$('#beep').tap(function(){
	     navigator.notification.beep(1);
	});//TAP DEL BEEP
	$('#vibrar').tap(function(){
	     navigator.notification.vibrate(1000);
	});//tap del beep
	},false);//device ready
});//ready
	
		 