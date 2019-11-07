function myFunction() {
    localStorage.clear();
    window.location.href = "index.html";
}
if (localStorage.getItem("role") == 1) {
    $("#akune").append('O');

}
