function renderTree(root) {
    var tree = document.getElementById("tree");
   
    var rootNode = document.getElementById("root");

    var td = document.createElement("td");
    td.setAttribute("id", 0 +":"+1);
    td.innerHTML= root[0][0].value;
    rootNode.appendChild(td);

    for(var i=1; i <root.length; i++) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        renderTable(td, i, root[i]);
        tr.appendChild(td);
        tree.appendChild(tr);
    }

}

function renderTable(parent, level, arr) {
    
    var tbl = document.createElement("table");
    tbl.setAttribute("class", "tableNodes");

      tbl.setAttribute("width", "100%");

    var tr = document.createElement("tr");
    var len = Math.pow(2, level);
    var index = 0;
    for(var i=len ; i > 0; i--) {
       var td = document.createElement("td");
       td.setAttribute("id", level +":"+i);
       td.innerHTML= (arr[i] ? arr[i].value : "---");
       tr.appendChild(td);
       index++;
    }

    tbl.appendChild(tr);
    parent.appendChild(tbl);

/*setTimeout(function(){
 for(var i=0 ; i < arr.length; i++) {
       var id = level +":"+arr[i].l;
       console.log(document.getElementById(id))
       document.getElementById(id).innerHTML= (arr[i] ? arr[i].value : "---");
    }
}, 100)*/
   

}



function rendeT(root) {
    
}