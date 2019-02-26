

    function createNewList() {
        let newList = document.createElement("div");
        newList.setAttribute("id","listAlpha");
        let node = document.createTextNode("List Alpha");
        newList.appendChild(node);
        let element = document.getElementById("myLists");
        element.appendChild(newList);
    }