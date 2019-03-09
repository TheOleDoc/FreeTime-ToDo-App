

    listnum = 0;

    function addlist(myval, event) {
        switch (event.keyCode) {
            case 13:
                //do something amazing
                console.log(myval);
                listnum++;
                $(".boxoflists").append("<div contenteditable='true' id='list" + listnum + "'>" +
                    myval +
                    "<button onclick='deletelist(" + listnum + ")'>Delete List</button>" +
                    "<input contenteditable='true' type='text' placeholder='add item' onkeyup='additem(" + listnum + ", this.value, event)'> " +
                    "</div>");
                $("#addlistbox").val("");
                break;

        }
    }
    function addlistClick() {
            let click = $("#addlistbox").val();
            listnum++;
            $(".boxoflists").append("<div contenteditable='true' id='list" + listnum + "'>" +
                click +
            "<button onclick='deletelist(" + listnum + ")'>Delete List</button>" +
            "<input contenteditable='true' type='text' placeholder='add item' onkeyup='additem(" + listnum + ", this.value, event)'> " +
            "</div>");
            $("#addlistbox").val("");
    }

    function additem(listid, myval, event) {
        switch (event.keyCode){
            case 13:
                $("#list" + listid).append("<div class='item'>"+ myval +"</div>");
                break
        }
    }

    function deletelist(listid) {
        console.log(listid);
        $("#list" + listid).remove();
    }

    function findChilds() {
        let mychildren = $(".boxoflists").children();
        console.log(mychildren);
    }




// //Mario's Example
//     if(retrieveNextID() != null) {
//         //if retrieveNextID functoin is not equal to null, then
//         nextId = retrieveNextId();
//             //
//     }
//     else {
//         nextId = 0;
//     }
//     // You need to save ID and Retrieve it from Local Storage. So write code that does that.
//
//
// //I want to create a way of making unique id's for lists and tasks that persist
//     let nextIdList = retrieveNextIdList() || 0;
//         //to create unique id's for lists
//
//     function retrieveNextIdList() {
//         //to help create unique id's for lists
//     }
//
//     let nextIdTask = retrieveNextIdTask() || 0;
//     //to create unique id's for tasks
//
//     function retrieveNextIdTask() {
//         //to help create unique id's for tasks
//     }