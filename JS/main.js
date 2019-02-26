

    function addItem(){
        let myval = $(".myinput").val();
        $(".list").append("<div class='row'>"+
            "<i onclick='deleteItem(this)' class='fas fa-trash'></i>"+
            "<span contenteditable='true'>" + myval + "</span>"+
            "</div>");
        $(".myinput").val("");
        $(".myinput").focus();
    }

    function deleteItem(element){
        $(element).parent().remove();
    }

