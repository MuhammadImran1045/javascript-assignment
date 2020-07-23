var myArray = [{ "name": "aaa", "level": "A" }, { "name": "bbb", "level": "B" }, { "name": "ccc", "level": "C" }];

    function display() {
        var length = myArray.length;
        var htmltext = "";

        for (var i = 0; i < length; i++) {
            console.log(myArray[i]);
            htmltext += "<tr id='table"+i+"'><td>"
            +myArray[i].name+
            "</td><td>"
            +myArray[i].level+
            "</td><td><button onclick='edit("+i+")'>Edit</button><button onclick='remove("+i+")'>Remove</button></td></tr>";
        }
        document.getElementById("tbody").innerHTML = htmltext;
    }

    function edit(indice) {
        var htmltext = "<tr><td><input id='inputname"+indice+"' type='text' value='"
            +myArray[indice].name+
            "'></td><td><input id='inputlevel"+indice+"' type='text' value='"
            +myArray[indice].level+
            "'></td><td><button onclick='save("+indice+")'>Save</button><button onclick='remove("+indice+")'>Remove</button></td></tr>";
        document.getElementById("table"+indice).innerHTML = htmltext; 
    }


    function save(indice) {
        myArray[indice].name = document.getElementById("inputname"+indice).value;
        myArray[indice].level = document.getElementById("inputlevel"+indice).value;
        var htmltext = "<tr id='table"+indice+"'><td>"
            +myArray[indice].name+
            "</td><td>"
            +myArray[indice].level+
            "</td><td><button onclick='edit("
            +indice+")'>Edit</button><button onclick='remove("
            +indice+")'>Remove</button></td></tr>";
        document.getElementById("table"+indice).innerHTML = htmltext;
    }

    function remove(indice) {
        console.log(myArray);
        myArray.splice(indice, 1);
        display();
    }