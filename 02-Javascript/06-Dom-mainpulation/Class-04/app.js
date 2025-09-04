// element ko select karte hain
let title = document.getElementById("title");
let para = document.getElementById("para");
let list = document.getElementById("list");

// 1. nodeType (1 = element, 3 = text)
console.log(title.nodeType + ' line 7'); // 1

// 2. nodeName (element ka tag name ya text ka #text)
console.log(title.nodeName + ' line 10'); // H1

// 3. nodeValue (sirf text nodes me hota hai)
console.log(title.firstChild.nodeValue + ' line 13'); // "Hello DOM"

// 4. childNodes (array jaisa list deta hai, text nodes bhi aate hain)
console.log(list.childNodes[1].innerHTML + ' line 16');

// 5. parentNode
console.log(para.parentNode); // <body> milega

// 6. firstChild aur lastChild
console.log(list.firstChild); // text ya <li> Apple
console.log(list.lastChild);  // text ya <li> Banana

// 7. nextSibling aur previousSibling
console.log(para.nextSibling);     // kabhi text node (line break) ya next element
console.log(list.previousSibling); // kabhi text node ya <p>

// 8. getAttribute aur setAttribute
console.log(title.getAttribute("id")); // "title"
title.setAttribute("class", "heading");

// 9. attributes (element ke sab attributes ka collection)
console.log(title.attributes);

// 10. list aur list[2].nodeValue
let items = list.getElementsByTagName("li");
console.log(items[2].firstChild.nodeValue); // "Banana"

// 11. createTextNode aur appendChild
let newItem = document.createElement("li");
let textNode = document.createTextNode("Orange");
newItem.appendChild(textNode);
list.appendChild(newItem); // last me add ho jayega

// 12. removeChild
list.removeChild(items[0]); // "Apple" hat jayega


// 13. insertBefore
let grape = document.createElement("li");
grape.appendChild(document.createTextNode("Abdul Ghaffar check"));
list.insertBefore(grape, items[3]); // Mango se pehle "Grapes"






// let newlist = document.getElementById("fruits");

// // 1. Pehle ek <li> element banao
// let newItems = document.createElement("li");

// // 2. Uske andar text daalo
// let newtextNode = document.createTextNode("Banana");
// newItems.appendChild(newtextNode);  

// // 3. Ab is <li> ko list ke end me add kar do
// newlist.appendChild(newItems);

