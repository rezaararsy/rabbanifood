function myFunction() {
    localStorage.clear();
    window.location.href = "index.html";
}
if (localStorage.getItem("role") == 1) {
    $("#akune").append('Owner');
}
if (localStorage.getItem("role") == 2) {
    $("#akune").append('Produksi');
}
if (localStorage.getItem("role") == 3) {
    $("#akune").append('Logistik');
}
if (localStorage.getItem("role") == 5) {
    $("#akune").append('Pemasaran');
}
