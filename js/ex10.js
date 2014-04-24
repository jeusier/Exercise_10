// define your SideBar class here
function SideBar(design_name, design_url, designer_name, designer_url){
	this.design_name = design_name;
	this.design_url = design_url;
	this.designer_name = designer_name;
	this.designer_url = designer_url;
	this.render = function(){
		return '<li>\n\
		<a href="'+this.design_url+'" class="design-name">'+this.design_name+'</a>\n\
		by\n\
		<a href="'+this.designer_url+'" class="designer-name">'+this.designer_name+'</a>\n\
		</li>';
	};
}


// define your ButtChanger class here

function ButtChanger(){
	this.temp = null;
	this.mouseover_butt = function(e){
		
			temp = $(this).html();
			$(this).html("Butt");
			
	};
	this.mouseout_butt = function(e){
		// $(this).mouseout(function(){
			$(this).html(temp);
		
	};

	$(".actually_a_butt").mouseover(this.mouseover_butt);
	$(".actually_a_butt").mouseout(this.mouseout_butt);
}









// write your app launcher here
$(document).ready(function(){

	
	var objects = Data.sidebar_objects;

	for (var i = 0; i < objects.length; i++){
		console.log(i);
		console.log(objects[i]);
		var sideBar = new SideBar(objects[i]["design_name"],objects[i]["design_url"],objects[i]["designer_name"],objects[i]["designer_url"]);
		console.log(sideBar);
		$("#side_bar").append(sideBar.render());

		}


	var temp = "";
	var buttChanger = new ButtChanger();



});