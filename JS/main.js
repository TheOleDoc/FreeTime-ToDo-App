
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
            listitems += "<div>"+ listArray[l].collection[i].name +"</div>";
        }

        $(".allMyLists").append("<div><span contenteditable='true'>" + listArray[l].name + "</span>"+
            "<i onclick='deleteItem(this)' class='icon fas fa-trash'></i>"+
            "<input contenteditable='true' onkeyup='addItem(this, this.value, event, "+ l +")' type='text' placeholder='Add Item...' class='iteminput'>"+
            "<div contenteditable='true' class='itembox'>"+ listitems +"</div> "+
            "</div>");
    }
}

function addItem(elem, incval, event, listnumber){
    switch(event.key){
        case "Enter":
            $(elem).val("");
            mylists.collection[listnumber].add(incval, false);
            setMyData();
            break;
    }
}

function deleteItem(element) {
    $(element).parent().fadeOut();
}