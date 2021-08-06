var fields = ["Big data",
    "Data science",
    "Deep learning",
    "Computer Vision",
    "NLP",
    "Cryptography",
    "Cryptocurrency",
    "Blockchain"
]
var lastindex = fields.length - 1;
var str = [fields.slice(0,lastindex-1).join(", "), fields[lastindex]].join(" and ");
var p = document.createElement('p');
p.innerHTML = str;
document.getElementById("interests").appendChild(p);
