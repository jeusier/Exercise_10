Exercise_10
===========

## OOP Practice

###1. Define a class named SideBar  
- design_name
- design_url
- designer_name
- designer_url
- render()

The **render()** method will output html formatted like this:  

    <li>
      <a href="{{design_url}}" class="design-name">{{design_name}}</a>
      by
      <a href="{{designer_url}}" class="designer-name">{{designer_name}}</a>
    </li>
* *whitespace is important here!*

On document ready, create 8 instances of SideBar by looping through **Data.sidebar_objects**  
* *bonus: store instances in a collection of some sort!*  
* *bonus: refactor!*

---

###2. Define a class named ButtChanger
- mouseover_butt(e)
- mouseout_butt(e)

On document ready, create a single instance of ButtChanger.  
In the **constructor** method of ButtChanger, use jQuery to select all dom elements with class **actually_a_butt**  

Then add an event listener to that dom object, the event is 'mouseover' and the handler will be **ButtChanger.mouseover_butt**  

Then add a another event listener for 'mouseout' and the handler will be **ButtChanger.mouseout_butt**  

**mouseover_butt(e)** : changes the text content to "Butt"  
**mouseout_butt(e)**  : changes the text content back to it's original content 

* *bonus: fade in/out*  
* *extra bonus: bind an event to a key or a button to toggle all butt visibility*

![Butt Changer](http://images5.fanpop.com/image/photos/29200000/butt-scratcher-peter-griffin-29296463-265-200.jpg)

---

####Files
- index.html
- js/ex10.js
- js/ex10.tests.js
- js/data.js
- js/jasmine-2.0.0
- css/zengarden.css