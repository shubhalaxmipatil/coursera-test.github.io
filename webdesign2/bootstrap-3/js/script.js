$(function()
{
	$("#navbarToggle").blur(function(event){
		var screenWidth = window.innerWidth;
		if(screenWidth < 768) {
			$("#bs-example-navbar-collapse-1").collapse('hide');
		}
	});
});

(function (global) {
	var dc = {};
	var homeHtml = "snippets/home-snippet.html";


	//convinince function for inserting innerHTML for 'select' 

	var insertHtml = function(selector, html){
		var targetElem = document.querySelector("selector");
		targetElem.innerHTML = html;
	};


	//show loading icon inside element identified by 'selector'
	var showLoading = function (selector){
		var html = "<div class='text-center'>";
		html += "<img src = 'images/ajax-loader.gif'></div>";
		insertHtml(selector,html);
		};
		//on page load (before images or css)
		document.addEventListener("DOMContentLoaded", function(event){
			//on first load show home view
			showLoading("#main-containt");
			$ajaxUtils.sendGetRequest(
				homeHtml,
				function(responseText){
					document.querySelector("#main-containt")
					.innerHTML = responseText;
				},
				false);
				});


		global.$dc = dc;

		})(window);