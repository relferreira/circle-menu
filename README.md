Circle Menu
===========
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
Each <li></li> represents one child menu.

Start the plugin with

    $('#menu').circle_menu();
    
If you want, include de circle-menu.css file to style the menu in the same way as in the example

    <link rel="stylesheet" type="text/css" href="circle-menu.css">
