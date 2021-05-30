hideall();
function hideall() {
  $(
    "#dashboard,#customer,#items,#order,#orderdetail,#yesButton,#yesButtonItem"
  ).css("display", " none");
}
$("#dashboardCustomer").text(customerTable.length);
$("#dashboardItem").text(itemTable.length);

$("#dashboard").css("display", "block");
$("#dashboardlink").on("click", function () {
  hideall();
  $("#dashboardCustomer").text(customerTable.length);
  $("#dashboardItem").text(itemTable.length);
  $("#dashboard").css("display", "block");
});
$("#customerlink").on("click", function () {
  hideall();
  $("#customer").css("display", "block");
  genarateCustomerID();
  disableFields();
});
$("#itemlink").on("click", function () {
  hideall();
  $("#items").css("display", "block");
  genarateItemID();
  disableItemFields();
});
$("#orderlink").on("click", function () {
  hideall();
  $("#order").css("display", "block");
  loadCustomerID();
  customerIdAction();
});
$("#orderdetaillink").on("click", function () {
  hideall();
  $("#orderdetail").css("display", "block");
});
// ---------------------------------------------------
function genarateCustomerID() {
  let lastID = $(
    $($("#CustomerBody").children().last()).children().get(0)
  ).text();
  //
  let oldID = lastID.split("C");
  let newID = parseInt(oldID[1]) + 1;
  //

  if (lastID == "") {
    $("#CustomerID").empty();
    $("#CustomerID").append("C001");
  } else if (newID <= 9) {
    $("#CustomerID").empty();
    $("#CustomerID").append("C00" + newID);
  } else if (newID <= 99) {
    $("#CustomerID").empty();
    $("#CustomerID").append("C0" + newID);
  } else {
    $("#CustomerID").empty();
    $("#CustomerID").append("C" + newID);
  }
}

function genarateItemID() {
  let lastID = $($($("#ItemBody").children().last()).children().get(0)).text();
  //
  let oldID = lastID.split("I");
  let newID = parseInt(oldID[1]) + 1;
  //

  if (lastID == "") {
    $("#ItemID").empty();
    $("#ItemID").append("I001");
  } else if (newID <= 9) {
    $("#ItemID").empty();
    $("#ItemID").append("I00" + newID);
  } else if (newID <= 99) {
    $("#ItemID").empty();
    $("#ItemID").append("I0" + newID);
  } else {
    $("#ItemID").empty();
    $("#ItemID").append("I" + newID);
  }
}

// --------------------------------
function disableFields() {
  $(
    "#CustomerName,#CustomerAddress,#CustomerSalary,#update,#save,#delete"
  ).attr("disabled", true);
}
function disableItemFields() {
  $("#ItemName,#ItemQty,#ItemPrice,#updateitem,#saveitem,#deleteitem").attr(
    "disabled",
    true
  );
}
