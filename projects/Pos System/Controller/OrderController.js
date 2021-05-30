function loadCustomerID() {
  for (const key in customerTable) {
    $("#CustomerIdSelect").append(
      `<option>${customerTable[key].getID}</option>`
    );
  }
}

function customerIdAction() {
  //   $("#CustomerIdSelect option").off("click");
  $("#CustomerIdSelect >").on("click", function () {
    // console.log($($(this).children().get(0)).text());
    console.log("sonal");
  });
}
