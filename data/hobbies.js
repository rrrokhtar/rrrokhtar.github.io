var fields = ["I like Reading", "Learning", "Illustration", "Design","Calligraphy"]
var lastindex = fields.length - 1;
var str = [fields.slice(0,lastindex-1).join(", "), fields[lastindex]].join(" and ");
var p = document.createElement('p');
p.innerHTML = str;
document.getElementById("hobbies").appendChild(p);
