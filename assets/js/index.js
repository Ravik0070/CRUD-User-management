$("#add_user").submit(function (event) {
  alert("Data inserted successfully!");
});

//update user
$("#update_user").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {}
  $.map(unindexed_array,function(n,i){
    data[n['name']] = n['value'];
  })
  console.log(data);

  var request = {
    "url":`http://127.0.0.1:3000/api/users/${data.id }`,
    "method":"PUT",   
    "data":data,
  };
  $.ajax(request).done(function(response){
    alert("Data updated successfully");
  })
}
)



//delete user
if (window.location.pathname == "/") {
  $ondelete = $(".delete-item");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");
    console.log("delete working");

    var request = {
      "url":`http://127.0.0.1:3000/api/users/${id }`,
      "method":"DELETE",
      };

    if (confirm("Do yo really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("Data deleted successfully");
        location.reload();
      });
    }
  });
}
