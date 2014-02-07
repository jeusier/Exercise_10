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

// sideBar_array = ["sideBar_1",
// "sideBar_2",
// "sideBar_3",
// "sideBar_4",
// "sideBar_5",
// "sideBar_6",
// "sideBar_7",
// "sideBar_8"];
// $("#side_bar").append("<li><a href='"+design_url+"' class='design-name'>"+design_name+"</a>	by <a href='"+designer_url+"' class='designer-name'>"+designer_name+"</a></li>");


// define your ButtChanger class here

// function ButtChanger(){
// 	this.mouseover_butt = function(e){

// 	};
// 	this.mouseout_butt = function(e){

// 	};
// }







// write your app launcher here
$(document).ready(function(){

	// var sidebarArray = [];
	// for (var keys in Data.sidebar_objects){
	// 	result = Data.sidebar_objects[keys];
	// 	sidebarArray.push(result);
	// 	SideBar.render(result);
	// }

	// console.log(Data.sidebar_objects[0]["design_name", "design_url"]);

	var objects = Data.sidebar_objects;

	for (var i = 0; i < objects.length; i++){
		console.log(i);
		console.log(objects[i]);
		var sideBar = new SideBar(objects[i]["design_name"],objects[i]["design_url"],objects[i]["designer_name"],objects[i]["designer_url"]);
		console.log(sideBar);
		$("#side_bar").append(sideBar.render());

		}



	// var actually_a_butt = new ButtChanger();



});