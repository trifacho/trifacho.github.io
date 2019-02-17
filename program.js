
var cache=[];

function keycode(e) {
	if(e.keyCode) return e.keyCode;
	else if(e.which) return e.which;
	else return e.charCode;
}

$(document).ready(function() {
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
				response=response.replace(new RegExp("<img","g"),"<img2");
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
	var fn=function() {
		$(".first").hide();
		$(".second").show();
		$(".tz-gallery .row").html("");
		var num=0;
		var type=0
		var text=$(".search2").val().split(" ");
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
			$(".search4").html("No se han encontrado resultados con estos criterios");
		}
		if(type==1) {
			$(".search4").html("Se han encontrado "+num+" resultados que contienen todos los terminos entrados");
		}
		if(type==2) {
			$(".search4").html("Se han encontrado "+num+" resultados que contienen alguno de los terminos entrados");
		}
	};
	$(".search3").on("click",fn);
	$(".search2").on("keypress",function(e) {
		if(keycode(e)==13) fn();
	});
	$(".search2").focus();
});
