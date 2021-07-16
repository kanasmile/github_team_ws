(function(){
	var cont = "";
	var midNumKey = 0;
	var mid1NumFlag = false;
	var mid2NumFlag = false;
	var eqlFlag = false;
	var flag = 0;
	var midNum = [];
	var ope;
	var eqlNum;
	var elems;
	var ari;

	window.onload = function init(){
		midNum[0] = document.getElementById("mid1num");
		midNum[1] = document.getElementById("mid2num");
		ope = document.getElementById("ope");
		eqlNum = document.getElementById("eqlnum");
		elems = document.getElementsByClassName("button");
		ari = document.getElementsByClassName("symbol");

		// 数字キーのイベントハンドラ
		for(var i = 0;i < elems.length;i++){
			elems[i].addEventListener("click",function(e){
				pushNumber(e.target.dataset.number);
			},false);
		}

		// 四則演算キーのイベントハンドラ
		for(var i = 0;i < ari.length;i++){
			ari[i].addEventListener("click",function(e){
				pushSymbol(e.target.dataset.number);
			},false);
		}

		// ?���?�イベントハンドラ
		document.getElementById("eqlbtn").addEventListener("click",equal,false);

		// ac のイベントハンドラ
		document.getElementById("clr").addEventListener("click",allClear,false);
	}

	// 数字キーが押された際の処�?
	function pushNumber(new_num){

		if( eqlFlag || eqlNum.value == "ERROR" || midNum[0].value == "NaN" ){
			allClear();
		}

		if(new_num != "." && midNum[midNumKey].value == "0"){
			midNum[midNumKey].value = new_num;
		}else if(midNum[midNumKey] == ""){
			midNum[midNumKey].value = "0.";
		}else{
			midNum[midNumKey].value += new_num;
		}

		mid1NumFlag = true;
	}

	// 演算子が押された際の処�?
	function pushSymbol(new_cont){

		if(midNumKey == 0){
			midNumKey = 1;
		}else if( midNum[0].value == "NaN" || eqlNum.value == "ERROR"){
			allClear();
		}else if( mid1NumFlag || eqlFlag ){
			equal();
			console.log(parseFloat(eqlNum.value));
			var num = parseFloat(eqlNum.value);
			allClear();
			pushNumber(num);
			midNumKey = 1;		
		}

		cont = new_cont;

		if(midNum[1].value == ""){
			midNum[1].value = "0";
		}

		switch(cont){
			case "add":
				ope.textContent = ("+");
				break;
			case "sub":
				ope.textContent = ("-");
				break;
			case "mul":
				ope.textContent = ("�?");
				break;
			case "div":
				ope.textContent = ("÷");
				break;
		}

		mid1NumFlag = false;
	}

	//?��を押したとき�?�処�?
	function equal() {

		//四則演算ごとの関数を呼び出�?
		switch(cont){
			case "add":
				// add関数で足し算�?�処�?
				add();
				break;
			case "sub":
				// sub関数で引き算�?�処�?
				sub();
				break;
			case "mul":
				// mul関数で掛け算�?�処�?
				mul();
				break;
			case "div":
				// div関数で割り算�?�処�?
				div();
				break;
		}

		eqlFlag = true;

	}
	
	/* 演習�?�編�?�?囲 はじめ */

	/* 演�?1 ここから */
	function add () {
		eqlNum.value = parseFloat(midNum[0].value) + parseFloat(midNum[1].value);
	}
	function sub () {
		eqlNum.value = parseFloat(midNum[0].value) - parseFloat(midNum[1].value);
	}
	// TODO: こ�?�コメントアウトを削除して書�?
	/* 演�?1 ここまで */

	/* TODO: 演�?2 以降�?�下記に自由に記�?� */

	/* 演習�?�編�?�?囲 おわ�? */

	// ac を押したとき�?�処�?
	function allClear(){
		midNum[0].value = "0";
		ope.textContent = " ";
		midNum[1].value = "";
		eqlNum.value = "";
		mid1NumFlag = false;
		eqlFlag = false;
		midNumKey = 0;
	}

}());