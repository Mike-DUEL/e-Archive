$(document).ready(function (){
	$('#wrapper').show();
	$('#wrapper1').hide();
	$('#wrapper2').hide();
	$('#wrapper3').hide();
	$('#gameitem').hide();

});

$('#newGameBut').click(function (){
	$('#wrapper1').show();
	$('#wrapper').hide();
	$('#wrapper2').hide();
	$('#wrapper3').hide();
	$('#gameitem').hide();
});

$('#normalBut').click(function (){
	window.location.href='gameindex.html';
});

$('#hardBut').click(function (){
	window.location.href='hardgameindex.html';
});

$('#howToPlayBut').click(function (){
	$('#wrapper').hide();
	$('#wrapper1').hide();
	$('#wrapper2').show();
	$('#wrapper3').hide();
	$('#gameitem').hide();
});

$('#viewHighScoreBut').click(function (){
	$('#wrapper').hide();
	$('#wrapper1').hide();
	$('#wrapper2').hide();
	$('#wrapper3').show();
	$('#gameitem').hide();
});

$('#modeBackBut').click(function (){
	$('#wrapper').show();
	$('#wrapper1').hide();
	$('#wrapper2').hide();
	$('#wrapper3').hide();
	$('#gameitem').hide();
});

$('#backButHtPlay').click(function (){
	$('#wrapper').show();
	$('#wrapper1').hide();
	$('#wrapper2').hide();
	$('#wrapper3').hide();
	$('#gameitem').hide();
});

$('#backVHSBut').click(function (){
	$('#wrapper').show();
	$('#wrapper1').hide();
	$('#wrapper2').hide();
	$('#wrapper3').hide();
	$('#gameitem').hide();
});











