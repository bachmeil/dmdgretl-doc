var linkdata = [
	{url: "http://gretl.sourceforge.net/", desc: "Code (Bitbucket)"},
  {url: "https://lancebachmeier.com", desc: "My Website"}
];

var links = "";

linkdata.forEach(genMenu);

document.getElementById("menu-goes-here").innerHTML = links;

function genMenu(value, index, array) {
	links = links + 
'<li class="pattern">' +
'<a href="' + value.url + '" > ' +
'<svg class="bookmark-icon" aria-hidden="true" focusable="false" viewBox="0 0 40 50">' +
'<use xlink:href="#bookmark"></use>' +
'</svg>' +
'<span class="text">' + value.desc + '</span> ' +
'</a>' +
'</li>';
}
      
