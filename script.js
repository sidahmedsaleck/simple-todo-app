//initializing the input field with " "
document.getElementById("addTask").value=" ";

// the action used when the button DONE is clicked
function doneItem(item){
    //getting the root of the item
    const div = item.parentElement;

    // getting the section of Done-items
    const done=document.getElementById("done-items");

    //appending the item to the done-items section
    done.appendChild(div);

    //clearing the value of the item (DONE)
    item.innerHTML="";

    //giving it the new class for styling.
    div.className="done-item";
}


//the action used whene the button X is clicked
function delet(item){
    const div = item.parentElement;
    div.remove();
}

//the action used when the ADD TASK button is clicked
function addElement(){

    //creating the new element to add
    var item=document.createElement("div");
    item.className="item"
    var content = document.getElementById("addTask").value;
    var input =document.createElement("input")
    input.value=content;
    input.className="item-content";
    input.setAttribute('readonly',"true")
    item.appendChild(input);
    var button=document.createElement("button");
    var done=document.createElement("button");
    button.className="item-delet";
    done.className="item-done";
    button.innerHTML="X";
    done.innerHTML="DONE";
    button.setAttribute('onclick','delet(this)');
    done.setAttribute('onclick','doneItem(this)');
    item.appendChild(done);
    item.appendChild(button);

    //adding the element to the to do's lists
    if (content !=" " && content != null) {
        console.log("{",content,"}")
        document.getElementById("items").appendChild(item);
    }

    //cleaning the input section 
    document.getElementById("addTask").value=" ";

}