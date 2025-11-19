"use strict";

$(document).ready(function () {
  $("#loginButton").click(function (e) {
    e.preventDefault();
    $(".loginForm").submit();
    $(this).attr("disabled", true);
    setTimeout(function () {
      $(this).attr("disabled", false);
    }, 10000);
  });

  function onPageLoads(selectedMethod) {
    $.ajax({
      type: "POST",
      url: "addfunds",
      data: {
        selectedMethod: selectedMethod,
        action: "getFields",
      },
      success: function (data) {
        data = JSON.parse(data);

        $("#amount_field").html(data.inputs);
        $("#button_field").html(data.buttons);
      },
    });
  }
  var selectedMethod = $("#payment_method_new").val();
  onPageLoads(selectedMethod);

  $("#payment_method_new").on("change", function (e) {
    e.preventDefault();
    var selectedMethod = $(this).val();
    onPageLoads(selectedMethod);
  });

  var selectedOptionStart = $("#subject").val();
  getTicketsField(selectedOptionStart);

  $("#subject").on("change", function () {
    var selectedOptionStart = $("#subject").val();
    getTicketsField(selectedOptionStart);
  });

  function handleOrderType(el) {
    var selectedOption = $(el).val();
    getTicketsField(selectedOption);
  }

  function getTicketsField(selectedOption) {
    $.ajax({
      type: "POST",
      url: "tickets",
      data: {
        selectedOption: selectedOption,
        action: "getFields",
      },
      success: function (data) {
        data = JSON.parse(data);
        $("#ticketsData").html(data);
      },
    });
  }

  //add refill/cancel task

  $(".cancel-button").click(function (e) {
    e.preventDefault();
    var order_id = $(this).attr("data-order-id");
    $.ajax({
      url: "orders/cancel/" + order_id,
      type: "POST",
      success: function (data) {
        data = JSON.parse(data);
        $(".cancel-button[data-order-id=" + order_id + "]").replaceWith();
        var title = data.refill_res;
        var icon = data.refill_icon;
        Swal.fire(title, "", icon);
      },
    });
  });

  $(".refill-button").click(function (e) {
    e.preventDefault();
    var order_id = $(this).attr("data-order-id");
    $.ajax({
      url: "orders/refill/" + order_id,
      type: "POST",
      success: function (data) {
        data = JSON.parse(data);

        if (data.refill_icon == "success") {
          $(".refill-button[data-order-id=" + order_id + "]").replaceWith(
            "Refilling"
          );
        } else {
          var title = data.refill_res;
          var icon = data.refill_icon;
          Swal.fire(title, "", icon);
        }
      },
    });
  });

  //phonepeQRSubmit
  $("#phonepeQRSubmit").click(function (e) {
    e.preventDefault();

    $("#phonepeQRSubmit").prop("disabled", true);

    var payment_amount = $("#payment_amount").val();
    var phonepeqr_orderid = $("#phonepeqr_orderid").val();
    var payment_type = $("#payment_type").val();

    $("#loadderr").show();

    $("#phonepeForm").hide();

    $.ajax({
      url: "payment",
      type: "POST",
      data: {
        action: "phonepeQr",
        payment_amount: payment_amount,
        phonepeqr_orderid: phonepeqr_orderid,
        payment_type: payment_type,
      },
      success: function (data) {
        $("#loadderr").hide();
        $("#phonepeForm").show();
        data = JSON.parse(data);
        new swal(data.title, "", data.icon).then(function (val) {
          if (data.title == "Payment Added Succesfully!") {
            $("#phonepeForm").trigger("reset");
            window.location.href = window.location.href;
          } else {
            $("#phonepeQRSubmit").prop("disabled", false);
          }
        });
      },
    });
  });

  if ($("#payment_method option:selected").val() == 14) {
    $("#paytmQrDiv").show();
    $("#phonepeQrDiv").hide();
    $("#amountInput").hide();
    $("#submitButton").hide();
  }

  if ($("#payment_method option:selected").val() == 31) {
    $("#paytmQrDiv").hide();
    $("#phonepeQrDiv").show();
    $("#amountInput").hide();
    $("#submitButton").hide();
  }

  $("#payment_method").on("change", function () {
    if (this.value == 14) {
      $("#paytmQrDiv").show();
      $("#phonepeQrDiv").hide();
      $("#amountInput").hide();
      $("#submitButton").hide();
    } else {
      $("#phonepeQrDiv").hide();
      $("#paytmQrDiv").hide();
      $("#amountInput").show();
      $("#submitButton").show();
    }

    if (this.value == 31) {
      $("#phonepeQrDiv").show();
      $("#paytmQrDiv").hide();
      $("#amountInput").hide();
      $("#submitButton").hide();
    }
  });

  //Cancel Button

  $("#cancel_button").click(function (e) {
    e.preventDefault();

    var order_id = $("#order_id").val();

    $.ajax({
      url: "orders",
      type: "POST",
      data: {
        cancel_order: "cancel_order",
        order_id: order_id,
      },
      beforeSend: function () {
        new swal({
          title: "Adding a cancellation request......",
          text: "Please wait for 2 seconds..",
          showConfirmButton: false,
        });
      },
      success: function (data) {
        data = JSON.parse(data);

        new swal(data.title, "", data.icon).then(function (val) {
          window.location.href = window.location.href;
        });
      },
    });
  });

  //Cancel Button

  // Email Verification JS //

  $("#updateEmail").click(function (e) {
    e.preventDefault();

    var current_email = $("#current_email").val();
    var new_email = $("#new_email").val();
    var current_password = $("#current_password").val();

    $.ajax({
      url: "confirm_email",
      type: "POST",
      data: {
        action: "change_email",
        current_email: current_email,
        new_email: new_email,
        current_password: current_password,
      },
      beforeSend: function () {
        new swal({
          title: "Loading......",
          text: "Please wait for 2 seconds..",
          showConfirmButton: false,
        });
      },
      success: function (data) {
        data = JSON.parse(data);
        new swal(data.title, "", data.icon).then(function (val) {
          if (data.icon == "success") {
            $("#changeEmailModal").modal("hide");
            window.location.href = window.location.href;
          }
        });
      },
    });
  });

  $("#resend_verification_link").click(function (e) {
    e.preventDefault();

    $.ajax({
      url: "confirm_email",
      type: "POST",
      data: {
        action: "resend_verification_link",
      },
      beforeSend: function () {
        new swal({
          title: "Loading......",
          text: "Please wait for 2 seconds..",
          showConfirmButton: false,
        });
      },
      success: function (data) {
        data = JSON.parse(data);
        new swal(data.title, "", data.icon).then(function (val) {
          if (data.icon == "success") {
            window.location.href = window.location.href;
          }
        });
      },
    });
  });

  // Email Verification JS //
});

function submitPoll() {
  setTimeout(function () {
    document.getElementById("neworderbutton").disabled = true;
  }, 200);
  setTimeout(function () {
    document.getElementById("neworderbutton").disabled = false;
  }, 5000);
}

$("#neworderbutton").click(function () {
  submitPoll();
});

//Whatsapp Number

function showWhatsapp(number) {
  (function () {
    var options = {
      whatsapp: number,
      call_to_action: "Message us",
      position: "right",
    };
    var proto = document.location.protocol,
      host = "getbutton.io",
      url = proto + "//static." + host;
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = url + "/widget-send-button/js/init.js";
    s.onload = function () {
      WhWidgetSendButton.init(host, proto, options);
    };
    var x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
  })();
}
//Whatsapp Number
