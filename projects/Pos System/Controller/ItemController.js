$("#saveitem").on("click", function () {
  let nameval = /^[A-z]{1,}$/;
  let qtyval = /^[0-9]{1,}$/;
  let priceval = /^[0-9]{1,}.[0-9]{2}$/;
  if (
    $("#ItemName").val() == "" ||
    $("#ItemQty").val() == "" ||
    $("#ItemPrice").val() == ""
  ) {
    $("#alertheaderitem").css("color", "#d9534f");
    $("#AlertTextItem").text("Please Fill Required Fields");
  } else {
    if (nameval.test($("#ItemName").val())) {
      if (qtyval.test($("#ItemQty").val())) {
        if (priceval.test($("#ItemPrice").val())) {
          let boolean = saveItem(
            $("#ItemID").text(),
            $("#ItemName").val(),
            $("#ItemQty").val(),
            $("#ItemPrice").val()
          );
          if (boolean) {
            clearTextItem();
            genarateItemID();
            $("#dashboardItem").text(itemTable.length);
          }
          textFillActionItem();
          $("#alertheaderitem").css("color", "#5cb85c");
          $("#AlertTextItem").text("Item Added");
        } else {
          $("#alertheaderitem").css("color", "#d9534f");
          $("#AlertTextItem").text("Please Fill Valid Price");
        }
      } else {
        $("#alertheaderitem").css("color", "#d9534f");
        $("#AlertTextItem").text("Please Fill Valid Qty");
      }
    } else {
      $("#alertheaderitem").css("color", "#d9534f");
      $("#AlertTextItem").text("Please Fill Valid Name");
    }
  }
});

$("#updateitem").on("click", function () {
  updateItem(
    $("#ItemID").text(),
    $("#ItemName").val(),
    $("#ItemQty").val(),
    $("#ItemPrice").val()
  );
  textFillActionItem();
  $("#alertheaderitem").css("color", "#5cb85c");
  $("#AlertTextItem").text("Item Updated ");
  clearTextItem();
  genarateItemID();
  $("#deleteitem").attr("disabled", true);
  $("#updateitem").attr("disabled", true);
  $("#saveitem").attr("disabled", false);
  $("#dashboardItem").text(itemTable.length);
});

$("#deleteitem").on("click", function () {
  $("#yesButtonItem").css("display", "block");
  $("#alertheaderitem").css("color", "#d9534f");
  $("#AlertTextItem").text("Are You Sure Delete Item?");
  $("#yesButtonItem").on("click", function () {
    deleteItem($("#ItemID").text());
    $("#dashboardItem").text(itemTable.length);
    $("#yesButtonItem").css("display", "none");
  });
});
//CRUD
function deleteItem(id) {
  for (const key in itemTable) {
    if (itemTable[key].getID == id) {
      delete itemTable[key];
      itemTable.splice(key, 1);
      loadTableItem();
      textFillActionItem();
      clearTextItem();
      genarateItemID();
      $("#deleteitem").attr("disabled", true);
      $("#updateitem").attr("disabled", true);
      $("#saveitem").attr("disabled", false);
      $("#dashboardItem").text(itemTable.length);
    }
  }
}

function saveItem(id, name, qty, price) {
  let item = new ItemDTO(id, name, qty, price);
  itemTable.push(item);
  loadTableItem();
  return true;
}
function updateItem(id, name, qty, price) {
  for (const key in itemTable) {
    if (itemTable[key].getID == id) {
      itemTable[key].setName = name;
      itemTable[key].setQty = qty;
      itemTable[key].setPrice = price;
    }
  }
  loadTableItem();
  return true;
}

//////TextFill/////
function textFillActionItem() {
  $("#ItemBody >tr").off("click");
  $("#ItemBody >tr").on("click", function () {
    $("#ItemID").text($($(this).children().get(0)).text());
    $("#ItemName").val($($(this).children().get(1)).text());
    $("#ItemQty").val($($(this).children().get(2)).text());
    $("#ItemPrice").val($($(this).children().get(3)).text());
    $("#saveitem").attr("disabled", true);
    $("#updateitem").attr("disabled", false);
    $("#deleteitem").attr("disabled", false);
  });
}

//TableLoad
function loadTableItem() {
  $("#ItemBody").empty();
  for (const i in itemTable) {
    $("#ItemBody").append(`<tr>
      <td>${itemTable[i].getID}</td>
      <td>${itemTable[i].getName}</td>
      <td>${itemTable[i].getQty}</td>
      <td>${itemTable[i].getPrice}</td>
      </tr>`);
  }
}

// New Customer
$("#newItem").on("click", function () {
  $("#saveitem").attr("disabled", false);
  genarateItemID();
  $("#ItemName,#ItemQty,#ItemPrice").val("");
  $("#ItemName,#ItemQty,#ItemPrice").attr("disabled", false);
  $("#ItemName").focus();
});

function clearTextItem() {
  $("#ItemName").val(null);
  $("#ItemQty").val(null);
  $("#ItemPrice").val(null);
}
