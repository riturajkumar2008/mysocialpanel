function copyTextToClipboard(text) {
	var textArea = document.createElement("textarea");
	textArea.style.position = 'fixed';
	textArea.style.top = 0;
	textArea.style.left = 0;
	textArea.style.width = '2em';
	textArea.style.height = '2em';
	textArea.style.padding = 0;
	textArea.style.border = 'none';
	textArea.style.outline = 'none';
	textArea.style.boxShadow = 'none';
	textArea.style.background = 'transparent';
	textArea.value = text;
	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();
	try {
		var successful = document.execCommand('copy');
		var msg = successful ? 'successful' : 'unsuccessful';
		console.log('Copying text command was ' + msg);
	} catch (err) {
		console.log('Oops, unable to copy');
	}
	document.body.removeChild(textArea);
}


function round(num, dec){
	var num_sign = num >= 0 ? 1 : -1;
	return parseFloat((Math.round((num * Math.pow(10, dec)) + (num_sign * 0.0001)) / Math.pow(10, dec)).toFixed(dec));
  }


$(document).ready(function () {
	function g(a, c) {
		var d = document.createElement(a);
		Object.entries(c).map(function (e) {
			var b = $jscomp.makeIterator(e);
			e = b.next().value;
			b = b.next().value;
			d.setAttribute(e, b)
		});
		document.head.appendChild(d);
		return d
	}

	function l() {
		if ("undefined" === typeof custom_options || "undefined" === typeof custom_options.disable_cat_select || !0 !== custom_options.disable_cat_select) {
			$("#neworder_category").select2({
				theme: "bootstrap",
				width: "100%",
				dropdownParent: $('.body'),
				containerCssClass: "form-control",
				dropdownCssClass: "select2-scrollable",
				dropdownPosition: 'below',
				minimumResultsForSearch: Infinity,
				templateSelection: function (b, f) {
					if (b.element && b.element.dataset.icon) {
						var h = b.element.dataset.iconType,
							k = b.element.dataset.icon;
						if ("emoji" === h) return $("<span>" + k + " " + b.text + "</span>");
						if ("icon" === h) return $('<span><i class="fab ' + k + '"></i> ' + b.text + "</span>");
						if ("image" === h) return $('<span><img src="' + k + '" alt="' + b.text + '" width="25" height="25"> ' + b.text + "</span>")
					}
					return b.text
				},
				templateResult: function (b, f) {
					if (b.element && b.element.dataset.icon) {
						var h = b.element.dataset.iconType,
							k = b.element.dataset.icon;
						if ("emoji" === h) return $("<span>" + k + " " + b.text + "</span>");
						if ("icon" === h) return $('<span><i class="fab ' + k + '"></i> ' + b.text + "</span>");
						if ("image" === h) return $('<span><img src="' + k + '" alt="' + b.text + '" width="25" height="25"> ' + b.text + "</span>")
					}
					return b.text
				}
			});
			var a = $("#neworder_category"),
				c = {
					"border": "none",
					"box-shadow": "none",
					"color": "#0e310f",
					"padding-left": "12px",
					"padding-right": "12px",
					"outline": "none",
					"border-bottom-width": "2px",
					"line-height": "33px",
					"font-size": "16px",
					"height": "48px",
					"border-radius": "8px"
				},
				d = $(".body .form-control"),
				e = $(".select2-container--bootstrap .select2-selection--single");
			d.length && (d = $(d).css("background-color"), c["background-color"] = d, c["border-color"] = d, $(e).css(c));
			a.on("select2:open", function () {
				setTimeout(function () {
					n();
					$(".select2-results__option").each(function (b,
						f) {
						$(f).css("margin-top", "4px")
					})
				}, 10)
			})
		}
	}

	function m() {
		var a = $("#neworder_category").val();
		$.post("ajax_data", {
			action: "services_list",
			category: a
		}, function (c) {
			var d = c.result.services,
				e = c.result.service_ids;
			if (0 < d.length) {
				var b = c.result.selected,
					f = "";
				Object.keys(d).forEach(function (h, k) {
					h = e[h];
					f += '<option value="' + h + '" ';
					h == b && (f += ' selected="selected" ');
					f += '>';

					f += d[k];
					f += '</option>';

				})
			} else f += '<option selected value="0">No Services Found!</option>', $("#neworder_fields").html("");
			$("#neworder_services").html(f);
			q();
			r()
		}, "json")
	}

	function n() {
		document.getElementById($(".select2-results__options").attr("id")).scrollTop = $(".select2-results__option[aria-selected=true]").outerHeight() * $(".select2-results__option[aria-selected=true]").index() - 50
	}

	function r() {
		if ("undefined" === typeof custom_options || "undefined" === typeof custom_options.disable_select || !0 !== custom_options.disable_select) {
			$("#neworder_services").select2({
				theme: "bootstrap",
				width: "100%",
				dropdownParent: $('.body'),
				containerCssClass: "form-control",
				dropdownCssClass: "select2-scrollable",
				dropdownPosition: 'below',
				minimumResultsForSearch: Infinity,
				templateSelection: function (b, f) {
					return $('<span class="badge badge-primary">' + b.element.value + '</span>' + '<span> ' + b.text + "</span>")
				},
				templateResult: function (b, f) {
					return $('<span class="badge badge-primary">' + $(b.element).attr("value") + '</span>' + '<span> ' + b.text + "</span>")

				}
			});
			var a = $("#neworder_services"),
				c = {
					"line-height": "33px",
					"background-color": "#eff7f0",
					"border-color": "#daeadc",
					color: "#0e310f",
					"font-size": "16px",
					height: "48px",
					"border-top-left-radius": "8px",
					"border-top-right-radius": "8px",
					"border-bottom-left-radius": "8px",
					"border-bottom-right-radius": "8px",
					"border-left-width": "0",
					"border-right-width": "0",
					"border-top-width": "0",
					"border-bottom-width": "2px",
					"padding-left": "12px",
					"padding-right": "12px",
					"box-shadow": "none",
					outline: "none"
				},
				d = $(".body .form-control"),
				e = $(".select2-container--bootstrap .select2-selection--single");
			d.length && (d = $(d).css("background-color"),
				c["background-color"] = d, c["border-color"] = d, $(e).css(c));
			a.on("select2:open", function () {
				setTimeout(function () {
					n();
					$(".select2-results__option").each(function (b, f) {
						$(f).css("margin-top", "4px")
					})
				}, 10)
			})
		}
	}

	function q() {
		var a = $("#neworder_services").val();
		0 == a ? $("#charge").val("-") : $.post("ajax_data", {
			action: "service_detail",
			service: a
		}, function (c) {
			1 == c.empty ? $("#charge_div").hide() : ($("#charge_div").show(), $("#neworder_fields").html(c.details), $("#charge").val(c.price), $("#charge").attr("data-rate",c.service_price));
			$(".datetime").datepicker({
				format: "yyyy/mm/dd",
				language: "en",
				startDate: new Date
			}).on("change", function (d) {
				$(".datetime").datepicker("hide")
			});
			$("#clearExpiry").click(function () {
				$("#expiryDate").val("")
			});
			$("#dripfeedcheckbox").prop("checked") && $("#dripfeed-options").removeClass();
			t();
			$("#dripfeedcheckbox").prop("checked") && u();
			c.sub ? $("#charge_div").hide() : $("#charge_div").show()
		}, "json")
	}

	function t() {
		var a = $("#neworder_services").val(),
			c = $("#neworder_comment").val();
		c && $.post("ajax_data", {
			action: "service_price",
			service: a,
			comments: c
		}, function (d) {
			$("#neworder_quantity").val(d.commentsCount);
			$("#charge").val(d.price)
		}, "json")
	}

	function u() {
		var a = $("#neworder_services").val(),
			c = $("#neworder_quantity").val(),
			d = $("#dripfeed-runs").val(),
			e = $("#dripfeedcheckbox").prop("checked") ? "var" : "bos";
		$.post("ajax_data", {
			action: "service_detail",
			service: a,
			quantity: c,
			dripfeed: e,
			runs: d
		}, function (b) {
			$("#charge").val(b.price)
		}, "json")
	}
	$(".fav-service").click(function (a) {
		a.preventDefault();
		a = $(this).attr("data-id");
		var c = $(this).find("i"),
			d = $('<i class="fas fa-spinner fa-spin"></i>');
		$.ajax({
			url: "ajax_data",
			type: "POST",
			data: {
				action: "add_favorite",
				service_id: a
			},
			beforeSend: function () {
				c.replaceWith(d)
			},
			success: function (e) {
				e = JSON.parse(e);
				d.replaceWith(c);
				"remove" === e.data ? c.removeClass("fas").addClass("far") : c.removeClass("far").addClass("fas")
			}
		})
	});
	(function () {
		/*	$("#neworder_category").find("option").each(function(a, c) {
				isCatIconAlreadyThere = "" !== $(c).attr("data-icon") && "" !== $(c).attr("data-icon-type") ? !0 : !1;
				isCatIconAlreadyThere || (cat_name = $(c).text().toLowerCase().trim(), icon = p(cat_name), $(c).attr("data-icon",
					icon), $(c).attr("data-icon-type", "icon"))
			});*/
		l()
	})();
	m();
	$("#neworder_category").change(function () {
		m()
	});
	$("#neworder_services").change(function () {
		q();
		r()
	});
	// $(document).on("keyup", "#order_quantity", function () {
	// 	var a = $("#neworder_services").val(),
	// 		c = $("#neworder_quantity").val(),
	// 		d = $("#dripfeed-runs").val(),
	// 		e = $("#dripfeedcheckbox").prop("checked") ? "var" : "bos";
	// 	var serviceRate = $("#charge").data("rate") / 1000;
	// 	var charge = c * serviceRate;
	// 	charge = bestDecimal(charge);
	// 	console.log(charge);
	// 	$.post("ajax_data", {
	// 		action: "service_price",
	// 		service: a,
	// 		quantity: c,
	// 		dripfeed: e,
	// 		runs: d
	// 	}, function (b) {
	// 		$("#charge").val(b.price);
	// 		$("#dripfeed-totalquantity").val(b.totalQuantity);
			
	// 	},
	// 		"json")
	// });

	$(document).on("keyup", "#order_quantity", function () {
		var a = $("#neworder_services").val(),
			c = $("#neworder_quantity").val(),
			d = $("#dripfeed-runs").val(),
			e = $("#dripfeedcheckbox").prop("checked") ? "var" : "bos";
		var serviceRate = $("#charge").data("rate") / 1000;
		var charge = c * serviceRate;

		charge = round(charge, 2);
		var curr_symbol = JSON.parse(window.userData).currency.symbol;
		$("#charge").val(`${curr_symbol} ${charge}`);
			$("#dripfeed-totalquantity").val(c);
			
	});
	
	$(document).on("keyup", "#dripfeed-runs", function () {
		var a = $("#neworder_services").val(),
			c = $("#neworder_quantity").val(),
			d = $("#dripfeed-runs").val(),
			e = $("#dripfeedcheckbox").prop("checked") ? "var" : "bos";
		$.post("ajax_data", {
			action: "service_price",
			service: a,
			quantity: c,
			dripfeed: e,
			runs: d
		}, function (b) {
			$("#charge").val(b.price);
			$("#dripfeed-totalquantity").val(b.totalQuantity)
		}, "json")
	});
	$(document).on("keyup", "#neworder_comment", function () {
		t()
	});
	$(document).on("change", "#dripfeedcheckbox", function () {
		$(this).prop("checked") ?
			$("#dripfeed-options").removeClass() : $("#dripfeed-options").addClass("hidden");
		u()
	});
	$(".brand-category").click(function (a) {
		a.preventDefault();
		a = $(this).data("id");
		$.ajax({
			url: "ajax_data",
			data: {
				service: a,
				action: "specific_data"
			},
			type: "post",
			success: function (c) {
				c = JSON.parse(c);
				if (200 === c.status) {
					c = c.categories;
					var d = "";
					void 0 === c || 0 == c.length ? (d += "<option value='3337777'>No Categories Found!</option>", $("#description").hide()) : c.map(function (e, b) {
						d += "<option ";
						0 === b && (d += " selected ");
						d += " value=" +
							e.category_id + ">" + e.category_name + "</option>"
					});
					$("#neworder_category").html(d);
					m()
				}
			}
		})
	})


	var searchServicesInputField = $("#searchServicesInputField");
	var searchServicesButtonIcon = $("#searchServicesButtonIcon");
	var searchServicesInputClearButton = $("#searchServicesInputClearButton");
	var searchServicesResultsDropdown = $("#searchServicesResultsDropdown");
	var searchQuery = searchServicesInputField.val();

	searchServicesButtonIcon.click(() => {
		searchServicesInputField.focus();
	});

	searchServicesInputField.focus(() => {
		searchServicesInputField.attr("placeholder", "");
		var a = searchServicesInputField.val();
		a = a.trim();
		if (a.length > 0) {
			searchServicesResultsDropdown.show();
			searchServicesInputClearButton.show();
		}
	});

	searchServicesInputField.blur((e) => {

		var a = searchServicesInputField.val();
		a = a.trim();
		if (a.length == 0) {
			searchServicesInputField.attr("placeholder", "Search Services...");
			searchServicesInputClearButton.hide();
			searchServicesInputField.val("");
		}
	});

	$(document).on("click", (e) => {

		t = $(e.target);

		if (t.is(searchServicesInputField) || t.is(searchServicesResultsDropdown)) {

		} else {
			searchServicesResultsDropdown.hide();
		}
	});


	searchServicesInputClearButton.click(() => {
		searchServicesInputField.val("");
		searchServicesInputField.blur();
	});

	searchServicesInputField.on("input", () => {
		var searchQuery = searchServicesInputField.val();
		searchQuery = searchQuery.trim();
		if (searchQuery.length > 0) {
			searchServicesInputClearButton.show();
			searchServicesResultsDropdown.show();
			searchServicesResultsDropdown.html('<div style="padding:4px;text-align:center;">Searching...</div>');
		} else {
			searchServicesResultsDropdown.hide();
			searchServicesInputClearButton.hide();
		}

		if (searchQuery.length > 0) {
			$.post("ajax_data", `action=search_services&query=${searchQuery}`, (json) => {
				var resultServices = json;
				var dropdownContent = "";
				dropdownContent += `<ul class="resultServicesList select2-results__options">`;
				resultServices.forEach((serviceInfo, index, resultServices) => {
					dropdownContent += `<li class="resultService select2-results__option" data-service-id="${serviceInfo["service_id"]}" data-category-id="${serviceInfo["category_id"]}"><a href="#" onclick="event.preventDefault();"><span class="badge badge-primary">${serviceInfo["service_id"]}</span> ${serviceInfo["service_name"]}</a></li>`;
				});
				dropdownContent += `</ul>`;
				searchServicesResultsDropdown.html(dropdownContent);
			});

		}
	});

	$(document).on("click", "ul.resultServicesList > li.resultService", function () {
		var service = $(this);
		searchServicesResultsDropdown.hide();
		$("body").focus();
		var category_id = service.data("category-id");
		var service_id = service.data("service-id");
		var category_select = $("#neworder_category");
		var service_select = $("#neworder_services");
		$.post("ajax_data", `action=set_selected_service&service_id=${service_id}`, () => {
			category_select.val(category_id);
			category_select.trigger("change");
		});


	});

	$(".favouriteServiceToggle").click(function () {
		var el = $(this);
		var service_id = $(this).data("service-id");
		var spinner = '<div class="spinner-border spinner-border-sm"></div>';
		var star = '<i class="far fa-star"></i>';
		var starFilled = '<i class="fas fa-star"></i>';
		$(this).html(spinner);
		$.post("ajax_data", `action=favorite_service&service_id=${service_id}`, (json) => {
			if (json.action == "add") {
				el.html(starFilled);
			} else {
				el.html(star);
			}
		});
	});

});

