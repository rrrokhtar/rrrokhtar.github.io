function switchSection(section){
    let active = document.getElementsByClassName("active-content");
    if (active.length != 0){
        active[0].className = "hidden-content";
    }
    document.getElementById(section).className = "active-content";
    return;
}