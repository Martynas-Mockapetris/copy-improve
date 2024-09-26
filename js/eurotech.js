	
	
	window.onload = function() {
		setDivHeight(
			document.getElementById("textDiv1-1"),
			document.getElementById("topDiv1-1"),
			bottomDiv = document.getElementById("bottomDiv1-1")
			);
		setDivHeight(
			document.getElementById("textDiv1-2"),
			document.getElementById("topDiv1-2"),
			bottomDiv = document.getElementById("bottomDiv1-2")
			);
		setDivHeight(
			document.getElementById("textDiv2-1"),
			document.getElementById("topDiv2-1"),
			bottomDiv = document.getElementById("bottomDiv2-1")
			);
		setDivHeight(
			document.getElementById("textDiv2-2"),
			document.getElementById("topDiv2-2"),
			bottomDiv = document.getElementById("bottomDiv2-2")
			);
		resizeMobile();
			
    }
	
	function resizeMobile() {
		setDivHeightMobile(
			document.getElementById("textDivMobile1-1"),
			document.getElementById("bottomDivMobile1-1"),
			bottomDiv = document.getElementById("bottomDivMobile1-1")
			);
		setDivHeightMobile(
			document.getElementById("textDivMobile1-2"),
			document.getElementById("bottomDivMobile1-2"),
			bottomDiv = document.getElementById("bottomDivMobile1-2")
			);
		setDivHeightMobile(
			document.getElementById("textDivMobile2-1"),
			document.getElementById("bottomDivMobile2-1"),
			bottomDiv = document.getElementById("bottomDivMobile2-1")
			);
		setDivHeightMobile(
			document.getElementById("textDivMobile2-2"),
			document.getElementById("bottomDivMobile2-2"),
			bottomDiv = document.getElementById("bottomDivMobile2-2")
			);
    }
	
	window.onresize = function() {
		resizeMobile();
	}
	
	function setDivHeight(textDiv, topDiv, bottomDiv)
	{
		if (null != textDiv)
		{
			var height = textDiv.scrollHeight;
			height = height/2 - 40;
			bottomDiv.style.height = topDiv.style.height = height + 'px';
		}
	}
	
	function setDivHeightMobile(textDiv, topDiv, bottomDiv)
	{
		if (null != textDiv)
		{
			var height = textDiv.scrollHeight;
			height = height - 80;
			bottomDiv.style.height = topDiv.style.height = height + 'px';
		}
	}
