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
if (localStorage.getItem("role") == 4) {
    $("#akune").append(localStorage.getItem("nama"));
}
if (localStorage.getItem("role") == 5) {
    $("#akune").append('Pemasaran');
}
function hapusProduk(id) {
    var result1 = confirm("Apakah anda yakin untuk menghapus data ini ?");
    if (result1) {
        event.preventDefault();
        $.ajax({
            type: "DELETE",
            datatype: "json",
            contentType: "application/json; charset=utf-8",
            url: "https://hd7w3ziuif.execute-api.us-east-1.amazonaws.com/produk/deleteproduk",
            data: JSON.stringify({
                id: id
            }),
            success: function (result) {
                if (result) {
                    console.log(result);
                    window.location.href = "stock_produk.html";
                }
                else {
                    alert("Hapus Gagal");
                }
            }
        });
        return false;
    }
}
function hapusKeuangan(id) {
    var result1 = confirm("Apakah anda yakin untuk menghapus data ini ?");
    if (result1) {
        event.preventDefault();
        $.ajax({
            type: "DELETE",
            datatype: "json",
            contentType: "application/json; charset=utf-8",
            url: "https://hd7w3ziuif.execute-api.us-east-1.amazonaws.com/produk/deleteproduk",
            data: JSON.stringify({
                id: id
            }),
            success: function (result) {
                if (result) {
                    console.log(result);
                    window.location.href = "pemasaran_pembiayaan_produksi.html";
                }
                else {
                    alert("Hapus Gagal");
                }
            }
        });
        return false;
    }
}
function hapusBahan(id) {
    var result1 = confirm("Apakah anda yakin untuk menghapus data ini ?");
    if (result1) {
        event.preventDefault();
        $.ajax({
            type: "DELETE",
            datatype: "json",
            contentType: "application/json; charset=utf-8",
            url: "https://qzh0y1d0ej.execute-api.us-east-1.amazonaws.com/bahan/deletebahan",
            data: JSON.stringify({
                id: id
            }),
            success: function (result) {
                if (result) {
                    console.log(result);
                    window.location.href = "stock_bahan_baku.html";
                }
                else {
                    alert("Hapus Gagal");
                }
            }
        });
        return false;
    }
}
function editProduk1(id, namae, jml, harga) {
    $('#idnya').val(function () {
        return id;
    });
    $('#namaproduk').val(function () {
        return namae;
    });
    $('#jml').val(function () {
        return jml;
    });
    $('#hargae').val(function () {
        return harga;
    });
}
function editKeuangan1(id, harga) {
    $('#idnya').val(function () {
        return id;
    });
    $('#hargae').val(function () {
        return harga;
    });
}
function editBahan1(id, namae, jml, satuan) {
    $('#idnya').val(function () {
        return id;
    });
    $('#namaproduk').val(function () {
        return namae;
    });
    $('#jml').val(function () {
        return jml;
    });
    $('#satuan').val(function () {
        return satuan;
    });
}
function editStockToko1(id, jml) {
    $('#id').val(function () {
        return id;
    });
    $('#jml').val(function () {
        return jml;
    });
}
{/* <script>
        $("#addAkun").submit(function (event) {
            event.preventDefault();
            $.ajax({
                type: "POST",
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                url: "https://uzmff5g4v1.execute-api.us-east-1.amazonaws.com/toko/addtoko",
                data: JSON.stringify({
                    nama: $('#toko').val(),
                    username: $('#username').val(),
                    password: $('#password').val()
                }),
                success: function (result) {
                    if (result) // you should do your checking here
                    {
                        console.log(result.affectedRows == 1);
                        alert("Berhasil Menambahkan User Toko");
                        window.location.href = "dashboard.html";
                    }
                    else {
                        alert("Password atau Username Salah");
                    }
                }
            });
            return false;
        })
    </script> */}
