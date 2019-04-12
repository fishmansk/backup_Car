//==================================================
//Окно управления платформой
//==================================================
var textMan1 = document.getElementById('textMan1');
var rangeMan1 = document.getElementById('rangeMan1');

var textMan2 = document.getElementById('textMan2');
var rangeMan2 = document.getElementById('rangeMan2');

var textMan3 = document.getElementById('textMan3');
var rangeMan3 = document.getElementById('rangeMan3');

var textMan4 = document.getElementById('textMan4');
var rangeMan4 = document.getElementById('rangeMan4');

var textMan5 = document.getElementById('textMan5');
var rangeMan5 = document.getElementById('rangeMan5');

var textMan6 = document.getElementById('textMan6');
var rangeMan6 = document.getElementById('rangeMan6');

var flagKeyUD = true;
var flagKeyLR = true;

//==================================================
//Управление движением
//==================================================
function sendManage(w) {
	$.ajax({
		type:'POST',
		url:'/manage/go/',
		data:{
			way:w,
			csrfmiddlewaretoken:$("[name=csrfmiddlewaretoken]").val()
		},
		sucess:function(){}
	});
}

function sendManageStop(w) {
	$.ajax({
		type:'POST',
		url:'/manage/stop/',
		data:{
			stop:w,
			csrfmiddlewaretoken:$("[name=csrfmiddlewaretoken]").val()
		},
		sucess:function(){}
	});
}
	
function sendAuto(w,v) {
	$.ajax({
		type:'POST',
		url:'/manage/autoMotion/',
		data:{
			what:w,
			val:v,
			csrfmiddlewaretoken:$("[name=csrfmiddlewaretoken]").val()
		},
		sucess:function(){}
	});
}
//==================================================
//Работа с клавишами
//==================================================
$(document).ready(function() {
	$.ajaxSetup({
		cache: false
	});
	
 	$("#recogBut").click(function(){
		document.location.href = "test";
	});

	$("#go").click(function(){
		sendAuto('Go', 10);
	});
	
	$("#turn").click(function(){
		sendAuto('Turn', 10);
	});
	
	$("#stop").click(function(){
		$.ajax({
			type:'POST',
			url:'/manage/emerStop/',
			data:{
				csrfmiddlewaretoken:$("[name=csrfmiddlewaretoken]").val()
			},
			sucess:function(){}
		});
	});
	
	$(document).keydown(function(e){
		key = e.keyCode;
		if(((key==87) || (key==119) || (key==1094) || (key==1062))) {
			sendManage('up');
			flagKeyUD = false;
		}
		//Кнопка влево
		if(((key==65) || (key==97) || (key==1092) || (key==1060))) {
			//sendManage('left');
			sendAuto('Turn', -1)
			flagKeyLR = false;

		}
		//Кнопка назад
		if(((key==83) || (key==115) || (key==1099) || (key==1067))) {
			sendManage('down');
			flagKeyUD = false;
		}
		//Кнопка вправо
		if(((key==68) || (key==100) || (key==1074) || (key==1042))) {
			//sendManage('right');
			sendAuto('Turn', 1)
			flagKeyLR = false;
		}
	});
	
	$(document).keyup(function(e){
		key = e.keyCode;
		if(((key==87) || (key==119) || (key==1094) || (key==1062))) {
			//sendManageStop('up');
			flagKeyUD = true;
		}
		//Кнопка влево
		if((key==65) || (key==97) || (key==1092) || (key==1060)) {
			//sendManageStop('left');
			flagKeyLR = true;
		}
		//Кнопка назад
		if((key==83) || (key==115) || (key==1099) || (key==1067)) {
			//sendManageStop('down');
			flagKeyUD = true;
		}
		//Кнопка вправо
		if((key==68) || (key==100) || (key==1074) || (key==1042)) {
			//sendManageStop('right');
			flagKeyLR = true;
		}
	});
//===========================================
//кнопки для ПК
//===========================================
	$('#buttonUp').mousedown(function(){
		sendManage('up');
	});
	$('#buttonUp').mouseup(function(){
		sendManageStop('up');
	});
	
	$('#buttonDown').mousedown(function(){
		sendManage('down');
	});
	$('#buttonDown').mouseup(function(){
		sendManageStop('down');
	});
	
	$('#buttonLeft').mousedown(function(){
		sendManage('left');
	});
	$('#buttonLeft').mouseup(function(){
		sendManageStop('left');
	});
	
	$('#buttonRight').mousedown(function(){
		sendManage('right');
	});
	$('#buttonRight').mouseup(function(){
		sendManageStop('right');
	});
//===========================================
//кнопки для смартфона
//===========================================	
	$('#buttonUpPhone').bind('touchstart', function(){
		sendManage('up');
	});
	$('#buttonUpPhone').bind('touchend', function(){
		sendManageStop('up');
	});
	
	$('#buttonDownPhone').bind('touchstart', function(){
		sendManage('down');
	});
	$('#buttonDownPhone').bind('touchend', function(){
		sendManageStop('down');
	});
	
	$('#buttonLeftPhone').bind('touchstart', function(){
		sendManage('left');
	});
	$('#buttonLeftPhone').bind('touchend', function(){
		sendManageStop('left');
	});

	$('#buttonRightPhone').bind('touchstart', function(){
		sendManage('right');
	});
	$('#buttonRightPhone').bind('touchend', function(){
		sendManageStop('right');
	});
});



function update_camera(){

  var camera = document.getElementById('camera')
  if (camera.complete){
    camera.src = '/manage/camera/?time=' + new Date().getTime();
  }	
  
  

}

//setInterval(update_camera, 1);
