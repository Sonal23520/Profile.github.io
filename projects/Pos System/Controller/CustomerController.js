$("#save").on("click", function () {
  let nameval = /^[A-z]{1,}$/;
  let salaryval = /^[0-9]{1,}.[0-9]{2}$/;
  if (
    $("#CustomerName").val() == "" ||
    $("#CustomerAddress").val() == "" ||
    $("#CustomerSalary").val() == ""
  ) {
    $("#alertheader").css("color", "#d9534f");
    $("#AlertText").text("Please Fill Required Fields");
  } else {
    if (nameval.test($("#CustomerName").val())) {
      if (salaryval.test($("#CustomerSalary").val())) {
        let boolean = saveCustomer(
          $("#CustomerID").text(),
          $("#CustomerName").val(),
          $("#CustomerAddress").val(),
          $("#CustomerSalary").val()
        );
        if (boolean) {
          clearText();
          genarateCustomerID();
          $("#dashboardCustomer").text(customerTable.length);
        }
        textFillAction();
        $("#alertheader").css("color", "#5cb85c");
        $("#AlertText").text("Customer Added");
      } else {
        $("#alertheader").css("color", "#d9534f");
        $("#AlertText").text("Please Fill Valid Salary");
      }
    } else {
      $("#alertheader").css("color", "#d9534f");
      $("#AlertText").text("Please Fill Valid Name");
    }
  }
});

$("#update").on("click", function () {
  updateCustomer(
    $("#CustomerID").text(),
    $("#CustomerName").val(),
    $("#CustomerAddress").val(),
    $("#CustomerSalary").val()
  );
  textFillAction();
  $("#alertheader").css("color", "#5cb85c");
  $("#AlertText").text("Customer Updated ");
  clearText();
  genarateCustomerID();
  $("#delete").attr("disabled", true);
  $("#update").attr("disabled", true);
  $("#save").attr("disabled", false);
  $("#dashboardCustomer").text(customerTable.length);
});

$("#delete").on("click", function () {
  $("#yesButton").css("display", "block");
  $("#alertheader").css("color", "#d9534f");
  $("#AlertText").text("Are You Sure Delete Cutomer?");
  $("#yesButton").on("click", function () {
    deleteCustomer($("#CustomerID").text());
    $("#dashboardCustomer").text(customerTable.length);
    $("#yesButton").css("display", "none");
  });
});
//CRUD
function deleteCustomer(id) {
  for (const key in customerTable) {
    if (customerTable[key].getID == id) {
      delete customerTable[key];
      customerTable.splice(key, 1);
      loadTable();
      textFillAction();
      clearText();
      genarateCustomerID();
      $("#delete").attr("disabled", true);
      $("#update").attr("disabled", true);
      $("#save").attr("disabled", false);
      $("#dashboardCustomer").text(customerTable.length);
    }
  }
}

function saveCustomer(id, name, address, salary) {
  let customer = new CustomerDTO(id, name, address, salary);
  customerTable.push(customer);
  loadTable();
  return true;
}
function updateCustomer(id, name, address, salary) {
  for (const key in customerTable) {
    if (customerTable[key].getID == id) {
      customerTable[key].setName = name;
      customerTable[key].setAddress = address;
      customerTable[key].setSalary = salary;
    }
  }
  loadTable();
  return true;
}

//////TextFill/////
function textFillAction() {
  $("#CustomerBody >tr").off("click");
  $("#CustomerBody >tr").on("click", function () {
    $("#CustomerID").text($($(this).children().get(0)).text());
    $("#CustomerName").val($($(this).children().get(1)).text());
    $("#CustomerAddress").val($($(this).children().get(2)).text());
    $("#CustomerSalary").val($($(this).children().get(3)).text());
    $("#save").attr("disabled", true);
    $("#update").attr("disabled", false);
    $("#delete").attr("disabled", false);
  });
}

//TableLoad
function loadTable() {
  $("#CustomerBody").empty();
  for (const i in customerTable) {
    $("#CustomerBody").append(`<tr>
    <td>${customerTable[i].getID}</td>
    <td>${customerTable[i].getName}</td>
    <td>${customerTable[i].getAddress}</td>
    <td>${customerTable[i].getSalary}</td>
    </tr>`);
  }
}

// New Customer
$("#newCustomer").on("click", function () {
  $("#save").attr("disabled", false);
  genarateCustomerID();
  $("#CustomerName,#CustomerAddress,#CustomerSalary").val("");
  $("#CustomerName,#CustomerAddress,#CustomerSalary").attr("disabled", false);
  $("#CustomerName").focus();
});

function clearText() {
  $("#CustomerName").val(null);
  $("#CustomerAddress").val(null);
  $("#CustomerSalary").val(null);
}
