//==================================================
//Окно настроек
//==================================================
var rangeValueTurn = document.getElementById('rangeValueTurn');
var turnRoll = document.getElementById('turnRoll');

var rangeValueKnee1 = document.getElementById('rangeValueKnee1');
var knee1Roll = document.getElementById('knee1Roll');

var rangeValueKnee2 = document.getElementById('rangeValueKnee2');
var knee2Roll = document.getElementById('knee2Roll');

var rangeValueKnee3 = document.getElementById('rangeValueKnee3');
var knee3Roll = document.getElementById('knee3Roll');

var rangeValueClaw = document.getElementById('rangeValueClaw');
var clawRoll = document.getElementById('clawRoll');

var rangeValueClawCatch = document.getElementById('rangeValueClawCatch');
var clawCatchRoll = document.getElementById('clawCatchRoll');



var swManip = document.getElementById('swManip');
var	settings_div_Manip1 = document.getElementById('settings_div_Manip1');
var	settings_div_Manip2 = document.getElementById('settings_div_Manip2');
var	settings_div_Manip3 = document.getElementById('settings_div_Manip3');
var	settings_div_Manip4 = document.getElementById('settings_div_Manip4');
var	settings_div_Manip5 = document.getElementById('settings_div_Manip5');
var	settings_div_Manip6 = document.getElementById('settings_div_Manip6');
//==================================================
//Обработка слайдера поворота манипулятора в настройках
//==================================================
turnRoll.addEventListener("input", function(){
	rangeValueTurn.value = this.value;
});
rangeValueTurn.addEventListener("keypress", function() {
    if(event.keyCode==13)
		{
			this.value = Math.ceil(this.value / 5) * 5;
			if(this.value>365){this.value=365};
			if(this.value<0){this.value=0};
			turnRoll.value = this.value;
		}
});
rangeValueTurn.addEventListener("blur", function() {
			this.value = Math.ceil(this.value / 5) * 5;
			turnRoll.value = this.value;
});
//==================================================
//Обработка слайдера поворота первого колена в настройках
//==================================================
knee1Roll.addEventListener("input", function(){
	rangeValueKnee1.value = this.value;
});
rangeValueKnee1.addEventListener("keypress", function() {
    if(event.keyCode==13)
		{
			this.value = Math.ceil(this.value / 5) * 5;
			if(this.value>365){this.value=365};
			if(this.value<0){this.value=0};
			knee1Roll.value = this.value;
		}
});
rangeValueKnee1.addEventListener("blur", function() {
			this.value = Math.ceil(this.value / 5) * 5;
			knee1Roll.value = this.value;
});
//==================================================
//Обработка слайдера поворота второго колена в настройках
//==================================================
knee2Roll.addEventListener("input", function(){
	rangeValueKnee2.value = this.value;
});
rangeValueKnee2.addEventListener("keypress", function() {
    if(event.keyCode==13)
		{
			this.value = Math.ceil(this.value / 5) * 5;
			if(this.value>365){this.value=365};
			if(this.value<0){this.value=0};
			knee2Roll.value = this.value;
		}
});
rangeValueKnee2.addEventListener("blur", function() {
			this.value = Math.ceil(this.value / 5) * 5;
			if(this.value>365){this.value=365};
			if(this.value<0){this.value=0};
			knee2Roll.value = this.value;
});
//==================================================
//Обработка слайдера поворота третьего колена в настройках
//==================================================
knee3Roll.addEventListener("input", function(){
	rangeValueKnee3.value = this.value;
});
rangeValueKnee3.addEventListener("keypress", function() {
    if(event.keyCode==13)
		{
			this.value = Math.ceil(this.value / 5) * 5;
			if(this.value>365){this.value=365};
			if(this.value<0){this.value=0};
			knee3Roll.value = this.value;
		}
});
rangeValueKnee3.addEventListener("blur", function() {
			this.value = Math.ceil(this.value / 5) * 5;
			if(this.value>365){this.value=365};
			if(this.value<0){this.value=0};
			knee3Roll.value = this.value;
});
//==================================================
//Обработка слайдера поворота клешни в настройках
//==================================================
clawRoll.addEventListener("input", function(){
	rangeValueClaw.value = this.value;
});
rangeValueClaw.addEventListener("keypress", function() {
    if(event.keyCode==13)
		{
			this.value = Math.ceil(this.value / 5) * 5;
			if(this.value>365){this.value=365};
			if(this.value<0){this.value=0};
			clawRoll.value = this.value;
		}
});
rangeValueClaw.addEventListener("blur", function() {
			this.value = Math.ceil(this.value / 5) * 5;
			if(this.value>365){this.value=365};
			if(this.value<0){this.value=0};
			clawRoll.value = this.value;
});
//==================================================
//Обработка слайдера захвата клешни в настройках
//==================================================
clawCatchRoll.addEventListener("input", function(){
	rangeValueClawCatch.value = this.value;
});
rangeValueClawCatch.addEventListener("keypress", function() {
    if(event.keyCode==13)
		{
			this.value = Math.ceil(this.value / 5) * 5;
			if(this.value>365){this.value=365};
			if(this.value<0){this.value=0};
			clawCatchRoll.value = this.value;
		}
});
rangeValueClawCatch.addEventListener("blur", function() {
			this.value = Math.ceil(this.value / 5) * 5;
			if(this.value>365){this.value=365};
			if(this.value<0){this.value=0};
			clawCatchRoll.value = this.value;
});
//==================================================
//Обработка свича манипулятора в настройках
//==================================================
function swChange() {
	if(swManip.checked==false) {
		settings_div_Manip1.style.display = "none";
		settings_div_Manip2.style.display = "none";
		settings_div_Manip3.style.display = "none";
		settings_div_Manip4.style.display = "none";
		settings_div_Manip5.style.display = "none";
		settings_div_Manip6.style.display = "none";
	} 
	else {
		settings_div_Manip1.style.display = "block";
		settings_div_Manip2.style.display = "block";
		settings_div_Manip3.style.display = "block";
		settings_div_Manip4.style.display = "block";
		settings_div_Manip5.style.display = "block";
		settings_div_Manip6.style.display = "block";
	}
};
