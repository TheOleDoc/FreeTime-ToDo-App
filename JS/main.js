
(function(){
    if(localStorage.alldata){
        let mydata = JSON.parse(localStorage.alldata);

        for(let l = 0; l < mydata.length; l++){

            mylists.add(mydata[l].name);

            for(let i = 0; i < mydata[l].collection.length; i++){
                mylists.collection[l].add(mydata[l].collection[i].name, mydata[l].collection[i].pending);
            }

        }
        pagePrint(mylists.collection);
    }
})();


function putNewList(myval, event){
    switch(event.key){
        case "Enter":
            // console.log("enter pushed");
            mylists.add(myval);
            $(".inputbox").val("");
            setMyData();
            break;
    }
}

function setMyData(){
    localStorage.setItem("alldata", JSON.stringify(mylists.collection));
    getMyData();
}

function getMyData(){
    $(".allMyLists").html("");
    let objdata = JSON.parse(localStorage.alldata);
    console.log(objdata);
    pagePrint(objdata);
}

function pagePrint(listArray){
    for(let l = 0; l < listArray.length; l++){

        let listitems = "";

        for(let i = 0; i < listArray[l].collection.length; i++){
            listitems += "<div contenteditable='true'>" +
                "<i onclick='deleteItem(this)' class='icon fas fa-trash listItemIcon'></i>" +
                "<input type='checkbox' class='itemCheckbox'>"+ listArray[l].collection[i].name +"</div>";

        }

        $(".allMyLists").append("<div class='container newListContain'><i onclick='deleteItem(this)' class='icon fas fa-trash listTitleIcon'></i><span class='rowSpan' contenteditable='true'>" + listArray[l].name + "</span>"+

            "<span><input contenteditable='true' onkeyup='addItem(this, this.value, event, "+ l +")' type='text' placeholder='Add Item...' class='row iteminput'></span>" +

            "<div class='itembox'>"+ listitems + "</div>"+
            // "<i onclick='deleteItem(this)' class='icon fas fa-trash'></i>" +

            "</div>");
        // $(".row iteminput").focus();
    }
}

function deleteItem(element) {
    $(element).parent().fadeOut(
        function () {
            $(element).remove();
        }
    );
}

$(document).on("click", '#clearBtn', function() {
    $(".itemCheckbox:checked").each(function () {
        $(this).closest("div").fadeOut(
            function() {
                $(this).closest("div").remove()
            });
    });
});




function addItem(elem, incval, event, listnumber){
    switch(event.key){
        case "Enter":
            $(elem).val("");
            mylists.collection[listnumber].add(incval, false);
            setMyData();
            break;
    }
}

