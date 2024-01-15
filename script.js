function increase_main_head(){
    document.getElementById("main-head").style.fontSize="55px";
}
function decrease_main_head(){
    document.getElementById("main-head").style.fontSize="18px";
}
function change_z_man(){
    document.getElementById("z-man").innerHTML="MARIPOYINLE LE TENSION PADAKU";
}
function remove_z_man(){
    document.getElementById("z-man").style.display="none";
}
function display_removed_text(){
    document.getElementById("z-man").style.display="block";
}
function show_her_boyfriend(){
    document.getElementById("me1").src="./4.JPG";
}

function correct_or_incorrect() {
    let bob = document.getElementById("name").value;

    if (bob.toUpperCase() === "BOBBY" ) {
        document.getElementById("correct").style.display = "block";
        document.getElementById("incorrect").style.display = "none";
    } else {
        document.getElementById("correct").style.display = "none";
        document.getElementById("incorrect").style.display = "block";
    }
}

