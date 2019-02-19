
// ORIGINAL CODE DOWNLOADED FROM
// https://github.com/aristus/accent-folding/blob/master/accent-fold.js

//accent-folding function
var accent_map = {
'ẚ':'a',
'Á':'a',
'á':'a',
'À':'a',
'à':'a',
'Ă':'a',
'ă':'a',
'Ắ':'a',
'ắ':'a',
'Ằ':'a',
'ằ':'a',
'Ẵ':'a',
'ẵ':'a',
'Ẳ':'a',
'ẳ':'a',
'Â':'a',
'â':'a',
'Ấ':'a',
'ấ':'a',
'Ầ':'a',
'ầ':'a',
'Ẫ':'a',
'ẫ':'a',
'Ẩ':'a',
'ẩ':'a',
'Ǎ':'a',
'ǎ':'a',
'Å':'a',
'å':'a',
'Ǻ':'a',
'ǻ':'a',
'Ä':'a',
'ä':'a',
'Ǟ':'a',
'ǟ':'a',
'Ã':'a',
'ã':'a',
'Ȧ':'a',
'ȧ':'a',
'Ǡ':'a',
'ǡ':'a',
'Ą':'a',
'ą':'a',
'Ā':'a',
'ā':'a',
'Ả':'a',
'ả':'a',
'Ȁ':'a',
'ȁ':'a',
'Ȃ':'a',
'ȃ':'a',
'Ạ':'a',
'ạ':'a',
'Ặ':'a',
'ặ':'a',
'Ậ':'a',
'ậ':'a',
'Ḁ':'a',
'ḁ':'a',
'Ⱥ':'a',
'ⱥ':'a',
'Ǽ':'a',
'ǽ':'a',
'Ǣ':'a',
'ǣ':'a',
'Ḃ':'b',
'ḃ':'b',
'Ḅ':'b',
'ḅ':'b',
'Ḇ':'b',
'ḇ':'b',
'Ƀ':'b',
'ƀ':'b',
'ᵬ':'b',
'Ɓ':'b',
'ɓ':'b',
'Ƃ':'b',
'ƃ':'b',
'Ć':'c',
'ć':'c',
'Ĉ':'c',
'ĉ':'c',
'Č':'c',
'č':'c',
'Ċ':'c',
'ċ':'c',
'Ç':'c',
'ç':'c',
'Ḉ':'c',
'ḉ':'c',
'Ȼ':'c',
'ȼ':'c',
'Ƈ':'c',
'ƈ':'c',
'ɕ':'c',
'Ď':'d',
'ď':'d',
'Ḋ':'d',
'ḋ':'d',
'Ḑ':'d',
'ḑ':'d',
'Ḍ':'d',
'ḍ':'d',
'Ḓ':'d',
'ḓ':'d',
'Ḏ':'d',
'ḏ':'d',
'Đ':'d',
'đ':'d',
'ᵭ':'d',
'Ɖ':'d',
'ɖ':'d',
'Ɗ':'d',
'ɗ':'d',
'Ƌ':'d',
'ƌ':'d',
'ȡ':'d',
'ð':'d',
'É':'e',
'Ə':'e',
'Ǝ':'e',
'ǝ':'e',
'é':'e',
'È':'e',
'è':'e',
'Ĕ':'e',
'ĕ':'e',
'Ê':'e',
'ê':'e',
'Ế':'e',
'ế':'e',
'Ề':'e',
'ề':'e',
'Ễ':'e',
'ễ':'e',
'Ể':'e',
'ể':'e',
'Ě':'e',
'ě':'e',
'Ë':'e',
'ë':'e',
'Ẽ':'e',
'ẽ':'e',
'Ė':'e',
'ė':'e',
'Ȩ':'e',
'ȩ':'e',
'Ḝ':'e',
'ḝ':'e',
'Ę':'e',
'ę':'e',
'Ē':'e',
'ē':'e',
'Ḗ':'e',
'ḗ':'e',
'Ḕ':'e',
'ḕ':'e',
'Ẻ':'e',
'ẻ':'e',
'Ȅ':'e',
'ȅ':'e',
'Ȇ':'e',
'ȇ':'e',
'Ẹ':'e',
'ẹ':'e',
'Ệ':'e',
'ệ':'e',
'Ḙ':'e',
'ḙ':'e',
'Ḛ':'e',
'ḛ':'e',
'Ɇ':'e',
'ɇ':'e',
'ɚ':'e',
'ɝ':'e',
'Ḟ':'f',
'ḟ':'f',
'ᵮ':'f',
'Ƒ':'f',
'ƒ':'f',
'Ǵ':'g',
'ǵ':'g',
'Ğ':'g',
'ğ':'g',
'Ĝ':'g',
'ĝ':'g',
'Ǧ':'g',
'ǧ':'g',
'Ġ':'g',
'ġ':'g',
'Ģ':'g',
'ģ':'g',
'Ḡ':'g',
'ḡ':'g',
'Ǥ':'g',
'ǥ':'g',
'Ɠ':'g',
'ɠ':'g',
'Ĥ':'h',
'ĥ':'h',
'Ȟ':'h',
'ȟ':'h',
'Ḧ':'h',
'ḧ':'h',
'Ḣ':'h',
'ḣ':'h',
'Ḩ':'h',
'ḩ':'h',
'Ḥ':'h',
'ḥ':'h',
'Ḫ':'h',
'ḫ':'h',
'H':'h',
'̱':'h',
'ẖ':'h',
'Ħ':'h',
'ħ':'h',
'Ⱨ':'h',
'ⱨ':'h',
'Í':'i',
'í':'i',
'Ì':'i',
'ì':'i',
'Ĭ':'i',
'ĭ':'i',
'Î':'i',
'î':'i',
'Ǐ':'i',
'ǐ':'i',
'Ï':'i',
'ï':'i',
'Ḯ':'i',
'ḯ':'i',
'Ĩ':'i',
'ĩ':'i',
'İ':'i',
'i':'i',
'Į':'i',
'į':'i',
'Ī':'i',
'ī':'i',
'Ỉ':'i',
'ỉ':'i',
'Ȉ':'i',
'ȉ':'i',
'Ȋ':'i',
'ȋ':'i',
'Ị':'i',
'ị':'i',
'Ḭ':'i',
'ḭ':'i',
'I':'i',
'ı':'i',
'Ɨ':'i',
'ɨ':'i',
'Ĵ':'j',
'ĵ':'j',
'J':'j',
'̌':'j',
'ǰ':'j',
'ȷ':'j',
'Ɉ':'j',
'ɉ':'j',
'ʝ':'j',
'ɟ':'j',
'ʄ':'j',
'Ḱ':'k',
'ḱ':'k',
'Ǩ':'k',
'ǩ':'k',
'Ķ':'k',
'ķ':'k',
'Ḳ':'k',
'ḳ':'k',
'Ḵ':'k',
'ḵ':'k',
'Ƙ':'k',
'ƙ':'k',
'Ⱪ':'k',
'ⱪ':'k',
'Ĺ':'a',
'ĺ':'l',
'Ľ':'l',
'ľ':'l',
'Ļ':'l',
'ļ':'l',
'Ḷ':'l',
'ḷ':'l',
'Ḹ':'l',
'ḹ':'l',
'Ḽ':'l',
'ḽ':'l',
'Ḻ':'l',
'ḻ':'l',
'Ł':'l',
'ł':'l',
'Ł':'l',
'̣':'l',
'ł':'l',
'̣':'l',
'Ŀ':'l',
'ŀ':'l',
'Ƚ':'l',
'ƚ':'l',
'Ⱡ':'l',
'ⱡ':'l',
'Ɫ':'l',
'ɫ':'l',
'ɬ':'l',
'ɭ':'l',
'ȴ':'l',
'Ḿ':'m',
'ḿ':'m',
'Ṁ':'m',
'ṁ':'m',
'Ṃ':'m',
'ṃ':'m',
'ɱ':'m',
'Ń':'n',
'ń':'n',
'Ǹ':'n',
'ǹ':'n',
'Ň':'n',
'ň':'n',
'Ñ':'n',
'ñ':'n',
'Ṅ':'n',
'ṅ':'n',
'Ņ':'n',
'ņ':'n',
'Ṇ':'n',
'ṇ':'n',
'Ṋ':'n',
'ṋ':'n',
'Ṉ':'n',
'ṉ':'n',
'Ɲ':'n',
'ɲ':'n',
'Ƞ':'n',
'ƞ':'n',
'ɳ':'n',
'ȵ':'n',
'N':'n',
'̈':'n',
'n':'n',
'̈':'n',
'Ó':'o',
'ó':'o',
'Ò':'o',
'ò':'o',
'Ŏ':'o',
'ŏ':'o',
'Ô':'o',
'ô':'o',
'Ố':'o',
'ố':'o',
'Ồ':'o',
'ồ':'o',
'Ỗ':'o',
'ỗ':'o',
'Ổ':'o',
'ổ':'o',
'Ǒ':'o',
'ǒ':'o',
'Ö':'o',
'ö':'o',
'Ȫ':'o',
'ȫ':'o',
'Ő':'o',
'ő':'o',
'Õ':'o',
'õ':'o',
'Ṍ':'o',
'ṍ':'o',
'Ṏ':'o',
'ṏ':'o',
'Ȭ':'o',
'ȭ':'o',
'Ȯ':'o',
'ȯ':'o',
'Ȱ':'o',
'ȱ':'o',
'Ø':'o',
'ø':'o',
'Ǿ':'o',
'ǿ':'o',
'Ǫ':'o',
'ǫ':'o',
'Ǭ':'o',
'ǭ':'o',
'Ō':'o',
'ō':'o',
'Ṓ':'o',
'ṓ':'o',
'Ṑ':'o',
'ṑ':'o',
'Ỏ':'o',
'ỏ':'o',
'Ȍ':'o',
'ȍ':'o',
'Ȏ':'o',
'ȏ':'o',
'Ơ':'o',
'ơ':'o',
'Ớ':'o',
'ớ':'o',
'Ờ':'o',
'ờ':'o',
'Ỡ':'o',
'ỡ':'o',
'Ở':'o',
'ở':'o',
'Ợ':'o',
'ợ':'o',
'Ọ':'o',
'ọ':'o',
'Ộ':'o',
'ộ':'o',
'Ɵ':'o',
'ɵ':'o',
'Ṕ':'p',
'ṕ':'p',
'Ṗ':'p',
'ṗ':'p',
'Ᵽ':'p',
'Ƥ':'p',
'ƥ':'p',
'P':'p',
'̃':'p',
'p':'p',
'̃':'p',
'ʠ':'q',
'Ɋ':'q',
'ɋ':'q',
'Ŕ':'r',
'ŕ':'r',
'Ř':'r',
'ř':'r',
'Ṙ':'r',
'ṙ':'r',
'Ŗ':'r',
'ŗ':'r',
'Ȑ':'r',
'ȑ':'r',
'Ȓ':'r',
'ȓ':'r',
'Ṛ':'r',
'ṛ':'r',
'Ṝ':'r',
'ṝ':'r',
'Ṟ':'r',
'ṟ':'r',
'Ɍ':'r',
'ɍ':'r',
'ᵲ':'r',
'ɼ':'r',
'Ɽ':'r',
'ɽ':'r',
'ɾ':'r',
'ᵳ':'r',
'ß':'s',
'Ś':'s',
'ś':'s',
'Ṥ':'s',
'ṥ':'s',
'Ŝ':'s',
'ŝ':'s',
'Š':'s',
'š':'s',
'Ṧ':'s',
'ṧ':'s',
'Ṡ':'s',
'ṡ':'s',
'ẛ':'s',
'Ş':'s',
'ş':'s',
'Ṣ':'s',
'ṣ':'s',
'Ṩ':'s',
'ṩ':'s',
'Ș':'s',
'ș':'s',
'ʂ':'s',
'S':'s',
'̩':'s',
's':'s',
'̩':'s',
'Þ':'t',
'þ':'t',
'Ť':'t',
'ť':'t',
'T':'t',
'̈':'t',
'ẗ':'t',
'Ṫ':'t',
'ṫ':'t',
'Ţ':'t',
'ţ':'t',
'Ṭ':'t',
'ṭ':'t',
'Ț':'t',
'ț':'t',
'Ṱ':'t',
'ṱ':'t',
'Ṯ':'t',
'ṯ':'t',
'Ŧ':'t',
'ŧ':'t',
'Ⱦ':'t',
'ⱦ':'t',
'ᵵ':'t',
'ƫ':'t',
'Ƭ':'t',
'ƭ':'t',
'Ʈ':'t',
'ʈ':'t',
'ȶ':'t',
'Ú':'u',
'ú':'u',
'Ù':'u',
'ù':'u',
'Ŭ':'u',
'ŭ':'u',
'Û':'u',
'û':'u',
'Ǔ':'u',
'ǔ':'u',
'Ů':'u',
'ů':'u',
'Ü':'u',
'ü':'u',
'Ǘ':'u',
'ǘ':'u',
'Ǜ':'u',
'ǜ':'u',
'Ǚ':'u',
'ǚ':'u',
'Ǖ':'u',
'ǖ':'u',
'Ű':'u',
'ű':'u',
'Ũ':'u',
'ũ':'u',
'Ṹ':'u',
'ṹ':'u',
'Ų':'u',
'ų':'u',
'Ū':'u',
'ū':'u',
'Ṻ':'u',
'ṻ':'u',
'Ủ':'u',
'ủ':'u',
'Ȕ':'u',
'ȕ':'u',
'Ȗ':'u',
'ȗ':'u',
'Ư':'u',
'ư':'u',
'Ứ':'u',
'ứ':'u',
'Ừ':'u',
'ừ':'u',
'Ữ':'u',
'ữ':'u',
'Ử':'u',
'ử':'u',
'Ự':'u',
'ự':'u',
'Ụ':'u',
'ụ':'u',
'Ṳ':'u',
'ṳ':'u',
'Ṷ':'u',
'ṷ':'u',
'Ṵ':'u',
'ṵ':'u',
'Ʉ':'u',
'ʉ':'u',
'Ṽ':'v',
'ṽ':'v',
'Ṿ':'v',
'ṿ':'v',
'Ʋ':'v',
'ʋ':'v',
'Ẃ':'w',
'ẃ':'w',
'Ẁ':'w',
'ẁ':'w',
'Ŵ':'w',
'ŵ':'w',
'W':'w',
'̊':'w',
'ẘ':'w',
'Ẅ':'w',
'ẅ':'w',
'Ẇ':'w',
'ẇ':'w',
'Ẉ':'w',
'ẉ':'w',
'Ẍ':'x',
'ẍ':'x',
'Ẋ':'x',
'ẋ':'x',
'Ý':'y',
'ý':'y',
'Ỳ':'y',
'ỳ':'y',
'Ŷ':'y',
'ŷ':'y',
'Y':'y',
'̊':'y',
'ẙ':'y',
'Ÿ':'y',
'ÿ':'y',
'Ỹ':'y',
'ỹ':'y',
'Ẏ':'y',
'ẏ':'y',
'Ȳ':'y',
'ȳ':'y',
'Ỷ':'y',
'ỷ':'y',
'Ỵ':'y',
'ỵ':'y',
'ʏ':'y',
'Ɏ':'y',
'ɏ':'y',
'Ƴ':'y',
'ƴ':'y',
'Ź':'z',
'ź':'z',
'Ẑ':'z',
'ẑ':'z',
'Ž':'z',
'ž':'z',
'Ż':'z',
'ż':'z',
'Ẓ':'z',
'ẓ':'z',
'Ẕ':'z',
'ẕ':'z',
'Ƶ':'z',
'ƶ':'z',
'Ȥ':'z',
'ȥ':'z',
'ʐ':'z',
'ʑ':'z',
'Ⱬ':'z',
'ⱬ':'z',
'Ǯ':'z',
'ǯ':'z',
'ƺ':'z',

// Roman fullwidth ascii equivalents: 0xff00 to 0xff5e
'２':'2',
'６':'6',
'Ｂ':'B',
'Ｆ':'F',
'Ｊ':'J',
'Ｎ':'N',
'Ｒ':'R',
'Ｖ':'V',
'Ｚ':'Z',
'ｂ':'b',
'ｆ':'f',
'ｊ':'j',
'ｎ':'n',
'ｒ':'r',
'ｖ':'v',
'ｚ':'z',
'１':'1',
'５':'5',
'９':'9',
'Ａ':'A',
'Ｅ':'E',
'Ｉ':'I',
'Ｍ':'M',
'Ｑ':'Q',
'Ｕ':'U',
'Ｙ':'Y',
'ａ':'a',
'ｅ':'e',
'ｉ':'i',
'ｍ':'m',
'ｑ':'q',
'ｕ':'u',
'ｙ':'y',
'０':'0',
'４':'4',
'８':'8',
'Ｄ':'D',
'Ｈ':'H',
'Ｌ':'L',
'Ｐ':'P',
'Ｔ':'T',
'Ｘ':'X',
'ｄ':'d',
'ｈ':'h',
'ｌ':'l',
'ｐ':'p',
'ｔ':'t',
'ｘ':'x',
'３':'3',
'７':'7',
'Ｃ':'C',
'Ｇ':'G',
'Ｋ':'K',
'Ｏ':'O',
'Ｓ':'S',
'Ｗ':'W',
'ｃ':'c',
'ｇ':'g',
'ｋ':'k',
'ｏ':'o',
'ｓ':'s',
'ｗ':'w'};

var accentMap = {
		'á':'a', 'é':'e', 'í':'i','ó':'o','ú':'u'
};

function accent_fold (s) {
	if (!s) { return ''; }
		var ret = '';
		for (var i=0; i<s.length; i++) {
		ret += accent_map[s.charAt(i)] || s.charAt(i);
		}
		return ret;
};

// accent_folded_hilite("Fulanilo López", 'lo')
//	 --> "Fulani<b>lo</b> <b>Ló</b>pez"
//
function accent_folded_hilite(str, q) {
	var str_folded = accent_fold(str).toLowerCase().replace(/[<>]+/g, '');
	// ORIGINAL CODE THAT ONLY ALLOW A STRING
	// var q_folded = accent_fold(q).toLowerCase().replace(/[<>]+/g, '');
	// MODIFIED CODE TO ALLOW AN ARRAY INSTEAD OF A STRING
	var q_folded=[];
	for(var i in q) {
		q_folded[i]=accent_fold(q[i]).toLowerCase().replace(/[<>]+/g, '');
	}

	// create an intermediary string with hilite hints
	// example: fulani<lo> <lo>pez
	// ORIGINAL CODE THAT ONLY ALLOW A STRING
	// var re = new RegExp(q_folded, 'g');
	// var hilite_hints = str_folded.replace(re, '<'+q_folded+'>');
	// MODIFIED CODE TO ALLOW AN ARRAY INSTEAD OF A STRING
	var hilite_hints = str_folded;
	var re = null;
	for(var i in q) {
		re = new RegExp(q_folded[i], 'g');
		hilite_hints=hilite_hints.replace(re, '<'+q_folded[i]+'>');
	}

	// index pointer for the original string
	var spos = 0;
	// accumulator for our final string
	var highlighted = '';

	// walk down the original string and the hilite hint
	// string in parallel. when you encounter a < or > hint,
	// append the opening / closing tag in our final string.
	// if the current char is not a hint, append the corresponding
	// char from the *original* string to our final string and
	// advance the original string's pointer.
	for (var i=0; i<hilite_hints.length; i++) {
		var c = str.charAt(spos);
		var h = hilite_hints.charAt(i);
		if (h === '<') {
			 highlighted += '<b>';
		} else if (h === '>') {
			 highlighted += '</b>';
		} else {
			spos += 1;
			highlighted += c;
		}
	}
	return highlighted;
}

// AND OUR CODE
function get_keycode(e) {
	if(e.keyCode) return e.keyCode;
	else if(e.which) return e.which;
	else return e.charCode;
}

function get_language() {
	var lang=navigator.language || navigator.systemLanguage;
	lang=lang.toLowerCase();
	lang=lang.substr(0,2);
	return lang;
}

function set_language(lang) {
	if(lang=="ca") {
		$(".languages .active").removeClass("active");
		$(".languages .catala").addClass("active");
		$(".first p").html("Troba el teu espanyol fatxa i compara<br/>les hòsties dels diferents policies");
		$(".search2").attr("placeholder","Ex. sant antoni");
		$(".search3").html("Cercar");
		$(".search4.void0").html("No s'ha entrat cap criteri de cerca");
		$(".search4.type0").html("No s'han trobat resultats amb aquests criteris");
		$(".search4.type1").html("S'estan mostrant els resultats que contenen tots els termes entrats");
		$(".search4.type2").html("S'estan mostrant els resultats que contenen algun dels termes entrats");
	}
	if(lang=="es") {
		$(".languages .active").removeClass("active");
		$(".languages .castellano").addClass("active");
		$(".first p").html("Encuentra tu español facha y compara<br/>las hostias de los diferentes policías");
		$(".search2").attr("placeholder","Ej. patada voladora");
		$(".search3").html("Buscar");
		$(".search4.void0").html("No se ha entrado ningún criterio de búsqueda");
		$(".search4.type0").html("No se han encontrado resultados con estos criterios");
		$(".search4.type1").html("Se están mostrando los resultados que contienen todos los términos entrados");
		$(".search4.type2").html("Se están mostrando los resultados que contienen alguno de los términos entrados");
	}
	if(lang=="en") {
		$(".languages .active").removeClass("active");
		$(".languages .english").addClass("active");
		$(".first p").html("Find your spanish fascist and compare<br/>the attacks of the different police");
		$(".search2").attr("placeholder","Ex. spanish police");
		$(".search3").html("Search");
		$(".search4.void0").html("No search criteria has been entered");
		$(".search4.type0").html("No results were found with these criteria");
		$(".search4.type1").html("Results are shown that contain all the entered terms");
		$(".search4.type2").html("Results are shown that contain any of the terms entered");
	}
}

var cache=[{
	src:"https://trifacho.github.io",
	url:"https://www.youtube.com/watch?v=228Xg1lf_Hc",
	img:"images/img-228Xg1lf_Hc.jpg",
	txt:"TV3 - Polònia - Trifacho - A conseqüència de la proliferació de partits amb una mateixa ideologia, neix 'Trifacho', l'eina que compara les diferents promeses electorals per ajudar-te a trobar la teva extrema dreta ideal.",
},{
	src:"https://trifacho.github.io",
	url:"https://spanishgurtelcase.github.io",
	img:"images/img-spanishgurt.jpg",
	txt:"El Cas Gürtel - El Major Cas de Corrupció del PP, les Estranyes Morts Associades i tot tapat amb la Independència de Catalunya",
},{
	src:"https://trifacho.github.io",
	url:"https://spanishmanada.github.io",
	img:"images/img-spanishmana.jpg",
	txt:"Spanish Manada - The Authorized Rapists by the Spanish Government - Los Violadores Autorizados por el Gobierno Español",
},{
	src:"https://trifacho.github.io",
	url:"https://www.youtube.com/watch?v=aQJ3FTPZrW8",
	img:"images/img-aQJ3FTPZrW8.jpg",
	txt:"TV3 - Polònia - Les preses falses del Rei - Hem accedit al brut de la gravació del dinar entre Felip i Letícia i les seves filles",
}];

function init_cache() {
	var urls=[
		"https://spanishpolice.github.io",
		"https://spanishradicals.github.io",
		"https://catalanpolice.github.io",
		"https://spanishbadking.github.io",
		"https://spanishcleaners.github.io",
		"https://spanishfakenews.github.io",
		"https://spanishindoctrination.github.io",
	];
	for(var i in urls) {
		$.ajax({
			url:urls[i],
			async:false,
			type:"get",
			success:function(response) {
				response=response.replace(new RegExp("<img ","g"),"<img2 ");
				$(".thumbnail",response).each(function() {
					cache.push({
						src:urls[i],
						url:$("a",this).attr("href"),
						img:$("img2",this).attr("src"),
						txt:$(".caption p",this).text(),
					});
				});
			},
			error:function(XMLHttpRequest,textStatus,errorThrown) {
				console.log("error status: "+XMLHttpRequest.status);
				console.log("error text: "+XMLHttpRequest.statusText);
			},
		});
	}
	for(var i in cache) {
		cache[i].all=accent_fold([cache[i].src,cache[i].txt].join(" "));
	}
}

function real_search(text) {
	var num=0;
	var type=0
	text=text.trim().split(" ");
	if(text.length==1 && text[0]=="") {
		$(".second").hide();
		$(".first").show();
		$(".search4").hide();
		$(".search4.void0").show();
		$(".tz-gallery").hide();
		return;
	}
	$(".tz-gallery .row").html("");
	for(var i in cache) {
		found=0;
		for(var j in text) {
			if(cache[i].all.search(new RegExp(text[j],"i"))!=-1) found++;
		}
		if(found==text.length && num<30) {
			var template=$(".template").html();
			template=$(template);
			$("a",template).attr("href",cache[i].url);
			$("img",template).attr("src",cache[i].src+"/"+cache[i].img);
			$(".caption p",template).html(accent_folded_hilite(cache[i].txt,text));
			$(".tz-gallery .row").append(template);
			num++;
			type=1;
		}
	}
	if(num==0) {
		for(var i in cache) {
			found=0;
			for(var j in text) {
				if(cache[i].all.search(new RegExp(text[j],"i"))!=-1) found++;
			}
			if(found>0 && num<30) {
				var template=$(".template").html();
				template=$(template);
				$("a",template).attr("href",cache[i].url);
				$("img",template).attr("src",cache[i].src+"/"+cache[i].img);
				$(".caption p",template).html(accent_folded_hilite(cache[i].txt,text));
				$(".tz-gallery .row").append(template);
				num++;
				type=2;
			}
		}
	}
	if(type==0) {
		$(".second").hide();
		$(".first").show();
		$(".search4").hide();
		$(".search4.type0").show();
		$(".tz-gallery").hide();
	}
	if(type==1) {
		$(".first").hide();
		$(".second").show();
		$(".search4").hide();
		$(".search4.type1").show();
		$(".tz-gallery").show();
	}
	if(type==2) {
		$(".first").hide();
		$(".second").show();
		$(".search4").hide();
		$(".search4.type2").show();
		$(".tz-gallery").show();
	}
}

function init_search() {
	var params=new URLSearchParams(window.location.search);
	var lang=params.get("lang");
	var q=params.get("q");
	if(lang) {
		set_language(lang);
	}
	if(q) {
		$(".search2").val(q);
		real_search(q);
	}
}

function set_param(key,val) {
	history.pushState(null,"","?"+key+"="+val.replace(new RegExp(" ","g"),"+"))
}

$(document).ready(function() {
	set_language(get_language());
	init_cache();
	init_search();
	$(".search3").on("click",function() {
		set_param("q",$(".search2").val());
		real_search($(".search2").val());
	});
	$(".search2").on("keypress",function(e) {
		if(get_keycode(e)!=13) return;
		$(".search3").trigger("click");
	});
	$(".search2").focus();
	$(".languages a").on("click",function() {
		set_param("lang",$(this).attr("lang"));
		set_language($(this).attr("lang"));
	});
	$("h1 a,h2 a").on("click",function() {
		$(".search2").val($(this).attr("q"));
		set_param("q",$(this).attr("q"));
		real_search($(this).attr("q"));
	});
});
