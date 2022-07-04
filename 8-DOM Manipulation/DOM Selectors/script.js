// Set element as var
var title = document.querySelector("h1");

// Sets new class, replaces original classes
title.className = "coolTitle";

// Toggles classes, usually paired with event trigger
title.classList.toggle("coolTitle");

// Remove a class from a element, leaves other classes
title.classList.remove("coolTitle");

// Add a class from a element, leaves other classes
title.classList.add("coolTitle");

//innerHTML - edit the html of element directly, DANGEROUS, innerHTML applies the HTML tag
title.innerHTML = "haha";

//innerText - edit the html of element directly, DANGEROUS, innerText just displays the tag if given as normal text
title.innerText = "<h1>haha</h1>";

//parentElement - Select direct parent of element.
title.parentElement;

//children - Select children of element, outputs html collection, can use [] to be more specific
title.children;
