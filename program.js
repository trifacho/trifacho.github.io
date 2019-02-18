
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
		$(".first p").html("Troba el teu policia fatxa i compara les<br/>hòsties dels diferents col·legis");
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
		$(".first p").html("Encuentra tu policía facha y compara las<br/>hostias de los diferentes colegios");
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
		$(".first p").html("Find your spanish police and compare the<br/>attacks of the different schools");
		$(".search2").attr("placeholder","Ex. spanish police");
		$(".search3").html("Search");
		$(".search4.void0").html("No search criteria has been entered");
		$(".search4.type0").html("No results were found with these criteria");
		$(".search4.type1").html("Results are shown that contain all the entered terms");
		$(".search4.type2").html("Results are shown that contain any of the terms entered");
	}
}

var cache=[];

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
						source:urls[i],
						url:$("a",this).attr("href"),
						img:$("img2",this).attr("src"),
						text:$(".caption p",this).text(),
					});
				});
			},
			error:function(XMLHttpRequest,textStatus,errorThrown) {
				console.log("error status: "+XMLHttpRequest.status);
				console.log("error text: "+XMLHttpRequest.statusText);
			}
		});
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
			if(cache[i].source.search(new RegExp(text[j],"i"))!=-1) found++;
			else if(cache[i].url.search(new RegExp(text[j],"i"))!=-1) found++;
			else if(cache[i].img.search(new RegExp(text[j],"i"))!=-1) found++;
			else if(cache[i].text.search(new RegExp(text[j],"i"))!=-1) found++;
		}
		if(found==text.length && num<30) {
			var template=$(".template").html();
			template=$(template);
			$("a",template).attr("href",cache[i].url);
			$("img",template).attr("src",cache[i].source+"/"+cache[i].img);
			$(".caption p",template).html(cache[i].text);
			$(".tz-gallery .row").append(template);
			num++;
			type=1;
		}
	}
	if(num==0) {
		for(var i in cache) {
			found=0;
			for(var j in text) {
				if(cache[i].source.search(new RegExp(text[j],"i"))!=-1) found++;
				else if(cache[i].url.search(new RegExp(text[j],"i"))!=-1) found++;
				else if(cache[i].img.search(new RegExp(text[j],"i"))!=-1) found++;
				else if(cache[i].text.search(new RegExp(text[j],"i"))!=-1) found++;
			}
			if(found>0 && num<30) {
				var template=$(".template").html();
				template=$(template);
				$("a",template).attr("href",cache[i].url);
				$("img",template).attr("src",cache[i].source+"/"+cache[i].img);
				$(".caption p",template).html(cache[i].text);
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
});
