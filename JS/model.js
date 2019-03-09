
let mylists = new ListCollection();

function ListCollection(){
    this.collection = [];
    this.add = function(lname){
        this.collection.push(new theNewLists(lname));
    };
}

function theNewLists(name){ //this would be our list
    this.name = name;
    this.collection = [];

    this.add = function(itemname, pendingflag){
        this.collection.push(new Item(itemname, pendingflag));
    }
}

function Item(name, pending){ //this could be a list item
    this.name = name;
    this.damage = pending;
}