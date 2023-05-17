var darkMode = "False"
function load() {
    // ageCalc
    var datum = new Date();
    document.getElementById("alter").innerHTML = datum.getFullYear()-2007;
}
function toggleLightMode() {
    if (darkMode == "False") {
        document.getElementById("body").style.backgroundColor = "#333333";
        document.getElementById("aboutMe").style.backgroundColor = "#555555";
        document.getElementById("aboutMe").style.color = "#FFFFFF";
        document.getElementById("myProj").style.backgroundColor = "#555555";
        document.getElementById("myProj").style.color = "#FFFFFF";
        document.getElementById("contact").style.backgroundColor = "#555555";
        document.getElementById("contact").style.color = "#FFFFFF";
        darkMode = "True";
    }
    else {
        document.getElementById("body").style.backgroundColor = "#FFFFFF";
        document.getElementById("aboutMe").style.backgroundColor = "#cccccc";
        document.getElementById("aboutMe").style.color = "#000000";
        document.getElementById("myProj").style.backgroundColor = "#cccccc";
        document.getElementById("myProj").style.color = "#000000";
        document.getElementById("contact").style.backgroundColor = "#cccccc";
        document.getElementById("contact").style.color = "#000000";
        darkMode = "False";
    }
}
