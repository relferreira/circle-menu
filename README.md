Circle Menu
===========
[Demo](http://cdpn.io/pleoG)

![Alt text](featured_img.jpg "Optional title")


Interactive Menu in a circular shape.
The plugin is made with Jquery and should work with all browsers.

## How to use
include jQuery and the circle-menu.js file to the page you want to use the menu

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript" src="circle-menu.js"></script>

In your html, add the following code

    <ul id="menu" class="circle-menu">
      <span><img src="plus.svg"></span>
      <li></li> 
      <li></li> 	
    </ul>
Each "li" tag represents one child menu.

Start the plugin with

    $('#menu').circle_menu();
    
If you want, include de circle-menu.css file to style the menu in the same way as in the example

    <link rel="stylesheet" type="text/css" href="circle-menu.css">

## Options

You can customize the way Circle Menu looks by changing some options.

    $('#menu').circle_menu({
		angle_initial: -70,
		angle_increment:60,
		radius:90		
	});
