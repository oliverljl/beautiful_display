
$(document).ready(function () {
//define global varibles
var count=0;
var count_1 =0;
var count_2 =0;
var count_3 = 0;
var arr_id = new Array();
var div_whole = document.createElement('div');
//first time read json file for showing image
$.ajax({
	url:'json/tiles.json',
	dataType:'json',
	type:'get',
	cache:false,
	success : function(data)
	{   
		//filter undefined category
		var json_file = $(data.Tiles);	
		while(count_1<=json_file.length)
		{
		$.each($(json_file[count_1]),function(index,value){
		   if(typeof value.SubCategory=="undefined" ){}
	    //get all id of subcategories for filter subcategory
		  if(typeof value.SubCategory!="undefined"){
		  	for(var i=0;i<(value.SubCategory).length;i++){ 	 
						arr_id.push(value.SubCategory[i].Id);}
		 				}
		});
		count_1++;		
		}
		// delete subcategory id for filter subcategory
		while(count_2<=json_file.length)
		{
		$.each($(json_file[count_2]),function(index,value){
		 		for(var i=0;i<arr_id.length;i++){

		 		if(value.Id==arr_id[i])
		 		{
		 			delete value.Id;
		 		}
		 		else{
		 			continue;
		 		}
		 	}
		 		});
		count_2++;		
		}

	    //first time print json file to canvans 
		while(count_3<=json_file.length)
		{
		$.each($(json_file[count_3]),function(index,value){
			//Create each element when reading Json file 
			//each element can be a container to cantain image and paragraph
			if(typeof value.Id!="undefined"){
			var p = document.createElement('p');
			var img = document.createElement('img');
			var iframe = document.createElement('iframe');
			var each_div = document.createElement('div');
			if (value.TileProperties.HomeURL.substr(value.TileProperties.HomeURL.length-4,4)=="html") {
				iframe.setAttribute('src',value.TileProperties.HomeURL);
			}
			else{
			img.src = value.TileProperties.HomeURL;
			}
			var json_heading = document.createTextNode(value.Caption);
			var json_content = document.createTextNode(value.Caption);
			div_whole.setAttribute("class","img_text");
			each_div.setAttribute("class","col-xs-4");
			// each_div.setAttribute("id","div_section");
			p.setAttribute("id",count);
			if (value.TileProperties.HomeURL.substr(value.TileProperties.HomeURL.length-4,4)=="html") {
				iframe.setAttribute("id",count+"_img")
			}else{
				img.setAttribute("id",count+"_img");
			}
			p.appendChild(json_heading);
			each_div.appendChild(img);
			each_div.appendChild(p);
			each_div.appendChild(iframe);
			div_whole.appendChild(each_div);
			document.getElementById("json_img").appendChild(div_whole);


			var div_whole_page2 = document.createElement('li');
			var page2_p = document.createElement("p");
			var page2_checkboxs = document.createElement('input');
			var page2_img = document.createElement('img');
			var line = document.createElement('hr');
			var br =document.createElement('br');
			page2_img.src = "images/icons/stack.png";
			div_whole_page2.setAttribute("class","row_change");
			page2_p.setAttribute("id",count);
			page2_img.setAttribute("id",count+"_img");
			page2_checkboxs.setAttribute("type","checkbox");
			page2_p.appendChild(json_content);
			div_whole_page2.appendChild(br);
			div_whole_page2.appendChild(page2_p);
			div_whole_page2.appendChild(page2_checkboxs);
			div_whole_page2.appendChild(page2_img);
			div_whole_page2.appendChild(line);
			document.getElementById("json_page2_text").appendChild(div_whole_page2);
	  		count++;	
		}
		 });
		count_3++;
		}
			},
	error: function(data)
	{
		console.log("error");
	}
});
});
//print picture when hit done button
function return_page2(){
var show_page2 = document.getElementById("page2");
var hidden_page1 = document.getElementById("page1");
hidden_page1.style.display="none";
show_page2.style.display="block";
$(function() {
    $("#json_page2_text" ).sortable();
  });
}

function return_page1(){

	$('#json_img').empty();
	var show_page2 = document.getElementById("page2");
	var hidden_page1 = document.getElementById("page1");
	print(); 
	hidden_page1.style.display="block";
	show_page2.style.display="none";		
}

function print(){
	    var showimg_url = new Array();
		var showtext_url = new Array();
	    $.ajax({
	url:'json/tiles.json',
	dataType:'json',
	type:'get',
	cache:false,
	success : function(data)
	{   
		var i=0;
		var count_3=0;
	    var count_4 = 0;
	    var count = 0;
	    var count_2 =0;
	    var count_1 = 0;
		var json_file = $(data.Tiles);
		var arr_url = new Array();
		var arr_caption	= new Array();
		var arr2_id = new Array();
		var arr_id = new Array();
		var div_whole = document.createElement('div');
		var form_info = document.getElementsByClassName("row_change");
		for (var i=0;i<form_info.length;i++)
		{
        arr2_id.push(form_info[i].childNodes[1].id);
		}

		var json_file = $(data.Tiles);	
		while(count_3<=json_file.length)
		{
		$.each($(json_file[count_3]),function(index,value){
		   if(typeof value.SubCategory=="undefined" ){
		   }

		  if(typeof value.SubCategory!="undefined"){
		  	for(var i=0;i<(value.SubCategory).length;i++){ 	 
						arr_id.push(value.SubCategory[i].Id);}
		 				}
		});
		count_3++;		
		 	}


			while(count_2<=json_file.length)
		{
		$.each($(json_file[count_2]),function(index,value){
		 		for(var i=0;i<arr_id.length;i++){

		 		if(value.Id==arr_id[i])
		 		{
		 			delete value.Id;
		 		}
		 		else{
		 			continue;
		 		}
		 	}
		 		});
		count_2++;		
		}

			while(count_1<=json_file.length)
		{
		$.each($(json_file[count_1]),function(index,value){
		   if(typeof value.SubCategory=="undefined" ){
		   }
		  	if(typeof value.Id!="undefined"){
		  	arr_url.push(value.TileProperties.HomeURL);
        	arr_caption.push(value.Caption);
        }
        	else{

        	}
       		});
		count_1++;		
		}  

		while(count_4<=json_file.length)
		{
		$.each($(json_file[count_4]),function(index,value){
		   
		  	if(typeof value.Id!="undefined"){
			var p = document.createElement('p');
			var img = document.createElement('img');
			var iframe = document.createElement('iframe');
			var each_div = document.createElement('div');
			if(count<arr2_id.length){	
			if (value.TileProperties.HomeURL.substr(value.TileProperties.HomeURL.length-4,4)=="html") {	
				iframe.setAttribute('src',arr_url[arr2_id[count]]);
			}
			else{
			img.src = arr_url[arr2_id[count]];
			}
			var json_heading = document.createTextNode(arr_caption[Number(arr2_id[count])]);
			var json_content = document.createTextNode(arr_caption[Number(arr2_id[count])]);
			div_whole.setAttribute("class","img_text");
			each_div.setAttribute("class","col-xs-4");
			// each_div.setAttribute("id","div_section");
			p.setAttribute("id",count+"text");
			if (value.TileProperties.HomeURL.substr(value.TileProperties.HomeURL.length-4,4)=="html") {
				iframe.setAttribute("id",count+"_img")
			}else{
				img.setAttribute("id",count+"_img");
			}
			p.appendChild(json_heading);
			each_div.appendChild(img);
			each_div.appendChild(p);
			each_div.appendChild(iframe);
			div_whole.appendChild(each_div);
			document.getElementById("json_img").appendChild(div_whole);
			count++;}
			}
		});
		count_4++;		
		}
		var checkboxs = document.getElementsByTagName('input');
		var divsection = document.getElementsByClassName("col-xs-4");  		
		var count_5 =0;
		while (count_5<checkboxs.length){
		var textid = document.getElementById(count_5+"text");
		var imgid = document.getElementById(count_5+"_img");
		if(checkboxs[count_5].checked){
		textid.style.display ="none";
		imgid.style.display ="none";
		divsection[count_5].style.display="none";
		}
		else{
		textid.style.display ="inline-block";
		imgid.style.display ="inline-block";
	    divsection[count_5].style.display="inline-block";
		}
		count_5++;
		}
	},
	error: function(data)
	{
		console.log("error");
	}
});
	}

