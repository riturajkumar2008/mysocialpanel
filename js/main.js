var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(g) {
	var l = 0;
	return function() {
		return l < g.length ? {
			done: !1,
			value: g[l++]
		} : {
			done: !0
		}
	}
};
$jscomp.arrayIterator = function(g) {
	return {
		next: $jscomp.arrayIteratorImpl(g)
	}
};
$jscomp.makeIterator = function(g) {
	var l = "undefined" != typeof Symbol && Symbol.iterator && g[Symbol.iterator];
	if (l) return l.call(g);
	if ("number" == typeof g.length) return $jscomp.arrayIterator(g);
	throw Error(String(g) + " is not an iterable or ArrayLike");
};
$(document).ready(function() {
	function g(a, c) {
		var d = document.createElement(a);
		Object.entries(c).map(function(e) {
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
				containerCssClass: "form-control",
				dropdownCssClass: "select2-scrollable",
				dropdownPosition: 'below',
				minimumResultsForSearch: Infinity,
				templateSelection: function(b, f) {
					if (b.element && b.element.dataset.icon) {
						var h = b.element.dataset.iconType,
							k = b.element.dataset.icon;
						if ("emoji" === h) return $("<span>" + k + " " + b.text + "</span>");
						if ("icon" === h) return $('<span><i class="fab ' + k + '"></i> ' + b.text + "</span>");
						if ("image" === h) return $('<span><img src="' + k + '" alt="' + b.text + '" width="25" height="25"> ' + b.text + "</span>")
					}
					return b.text
				},
				templateResult: function(b, f) {
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
                    "box-shadow" : "none",
                    "color": "#0e310f",
                    "padding-left": "12px",
                   "padding-right": "12px",
                    "outline": "none",
                    "border-bottom-width":"2px",
                    "line-height":"33px",
                    "font-size": "16px",
                    "height":"48px",
                    "border-radius": "8px"
				},
				d = $(".body .form-control"),
				e = $(".select2-container--bootstrap .select2-selection--single");
			d.length && (d = $(d).css("background-color"), c["background-color"] = d, c["border-color"] = d, $(e).css(c));
			a.on("select2:open", function() {
				setTimeout(function() {
					n();
					$(".select2-results__option").each(function(b,
						f) {
						$(f).css("margin-top", "4px")
					})
				}, 10)
			})
		}
	}

	function p(a) {
		var c = $("link[href$='.https://cdn.mypanel.link/css/font-awesome/css/all.min.css']"),
			d = document.createElement("script");
		d.src = "https://kit.fontawesome.com/c28b5df4df.js";
		d.crossOrigin = "anonymous";
		Object.keys(c).length || (linkTagsAttr = {
			href: "https://cdn.mypanel.link/css/font-awesome/css/all.min.css",
			rel: "stylesheet",
			type: "text/css"
		}, g("link", linkTagsAttr));
		a = a.toLowerCase();
		return 0 <= a.indexOf("instagram") ? "fab fa-instagram" : 0 <= a.indexOf("youtube") ||
			0 <= a.indexOf("adwords") || 0 <= a.indexOf("adword") ? "fab fa-youtube" : 0 <= a.indexOf("facebook") ? "fab fa-facebook-square" : 0 <= a.indexOf("twitter") ? "fab fa-twitter" : 0 <= a.indexOf("google") ? "fab fa-google-plus" : 0 <= a.indexOf("swarm") ? "fab fa-forumbee" : 0 <= a.indexOf("dailymotion") ? "fab fa-dailymotion" : 0 <= a.indexOf("periscope") ? "fab fa-map-marker" : 0 <= a.indexOf("soundcloud") ? "fab fa-soundcloud" : 0 <= a.indexOf("vine") ? "fab fa-vine" : 0 <= a.indexOf("spotify") ? "fab fa-spotify" : 0 <= a.indexOf("snapchat") ? "fab fa-snapchat-square" :
			0 <= a.indexOf("pinterest") ? "fab fa-pinterest-p" : 0 <= a.indexOf("itunes") ? "fab fa-apple" : 0 <= a.indexOf("m\u00fczik") ? "fab fa-music" : 0 <= a.indexOf("vimeo") ? "fab fa-vimeo" : 0 <= a.indexOf("ek\u015fi") ? "fab fa-tint" : 0 <= a.indexOf("telegram") ? "fab fa-telegram" : 0 <= a.indexOf("twitch") ? "fab fa-twitch" : 0 <= a.indexOf("zomato") ? "fab fa-cutlery" : 0 <= a.indexOf("amazon") ? "fab fa-amazon" : 0 <= a.indexOf("tumblr") ? "fab fa-tumblr-square" : 0 <= a.indexOf("yandex") ? "fab fa-yoast" : 0 <= a.indexOf("linkedin") ? "fab fa-linkedin" : 0 <= a.indexOf("yahoo") ?
			"fab fa-yahoo" : 0 <= a.indexOf("tiktok") ? "fab fa-tiktok" : 0 <= a.indexOf("reddit") ? "fab fa-reddit" : 0 <= a.indexOf("shopee") ? "fab fa-shopee" : 0 <= a.indexOf("imdb") ? "fab fa-imdb" : 0 <= a.indexOf("dribbble") ? "fab fa-dribbble" : 0 <= a.indexOf("discord") ? "fab fa-discord" : 0 <= a.indexOf("trovo") ? "fab fa-trovo" : 0 <= a.indexOf("quora") ? "fab fa-quora" : 0 <= a.indexOf("trustpilot") ? "fab fa-trustpilot" : 0 <= a.indexOf("kwai") ? "fab fa-kwai" : 0 <= a.indexOf("audiomack") ? "fab fa-audiomack" : 0 <= a.indexOf("shazam") ? "fab fa-shazam" : 0 <= a.indexOf("rumble") ?
			"fab fa-rumble" : 0 <= a.indexOf("crypto") || 0 <= a.indexOf("bitcoin") || 0 <= a.indexOf("usdt") ? "fab fa-bitcoin" : 0 <= a.indexOf("vkontakte") ? "fab fa-vk" : 0 <= a.indexOf("mentimeter") ? "fab fa-mentimeter" : 0 <= a.indexOf("coub") ? "fab fa-coub" : 0 <= a.indexOf("kick") ? "fab fa-kickstarter" : 0 <= a.indexOf("thriller") ? "fab fa-avianex" : 0 <= a.indexOf("rumble") ? "fab fa-rumble" : 0 <= a.indexOf("datpiff") ? "fab fa-dataporten" : 0 <= a.indexOf("kwai") ? "fab fa-kwai" : 0 <= a.indexOf("seo") ? "fab fa-searchengin" : 0 <= a.indexOf("discord") ? "fab fa-discord" :
			0 <= a.indexOf("clubhouse") ? "fab fa-earlybirds" : 0 <= a.indexOf("only fans") ? "fab fa-rocketchat" : 0 <= a.indexOf("boomplay") ? "fab fa-grav" : 0 <= a.indexOf("medium") ? "fab fa-medium" : 0 <= a.indexOf("googlebusiness") ? "fab fa-google" : 0 <= a.indexOf("tidal") ? "fab fa-tidal" : 0 <= a.indexOf("daily motion") ? "fab fa-dailymotion" : 0 <= a.indexOf("odnoklassniki") ? "fab fa-odnoklassniki" : 0 <= a.indexOf("whatsapp") ? "fab fa-whatsapp" : 0 <= a.indexOf("porn hub") ? "fab fa-pornhub" : 0 <= a.indexOf("trovo") ? "fab fa-trovo" : 0 <= a.indexOf("line") ? "fab fa-line" :
			0 <= a.indexOf("rtube") ? "fab fa-r-project" : 0 <= a.indexOf("apple music") ? "fab fa-apple" : 0 <= a.indexOf("trustpilot") ? "fab fa-trustpilot" : 0 <= a.indexOf("sitejabber") ? "fab fa-sitejabber" : 0 <= a.indexOf("mixcloud") ? "fab fa-mixcloud" : 0 <= a.indexOf("spreaker") ? "fab fa-spreaker" : 0 <= a.indexOf("deezer") ? "fab fa-deezer" : 0 <= a.indexOf("napster") ? "fab fa-napster" : 0 <= a.indexOf("ipodcast") ? "fab fa-itunes-note" : 0 <= a.indexOf("500 px") ? "fab fa-500px" : 0 <= a.indexOf("kick") ? "fab fa-kickstarter" : 0 <= a.indexOf("thriller") ? "fab fa-avianex" :
			0 <= a.indexOf("rumble") ? "fab fa-rumble" : 0 <= a.indexOf("datpiff") ? "fab fa-dataporten" : 0 <= a.indexOf("kwai") ? "fab fa-kwai" : 0 <= a.indexOf("seo") ? "fab fa-searchengin" : 0 <= a.indexOf("discord") ? "fab fa-discord" : 0 <= a.indexOf("clubhouse") ? "fab fa-earlybirds" : 0 <= a.indexOf("only fans") ? "fab fa-rocketchat" : 0 <= a.indexOf("boomplay") ? "fab fa-grav" : 0 <= a.indexOf("medium") ? "fab fa-medium" : 0 <= a.indexOf("tidal") ? "fab fa-tidal" : 0 <= a.indexOf("daily motion") ? "fab fa-dailymotion" : 0 <= a.indexOf("odnoklassniki") ? "fab fa-odnoklassniki" :
			0 <= a.indexOf("whatsapp") ? "fab fa-whatsapp" : 0 <= a.indexOf("porn hub") ? "fab fa-pornhub" : 0 <= a.indexOf("line") ? "fab fa-line" : 0 <= a.indexOf("rtube") ? "fab fa-r-project" : 0 <= a.indexOf("apple music") ? "fab fa-apple" : 0 <= a.indexOf("trustpilot") ? "fab fa-trustpilot" : 0 <= a.indexOf("sitejabber") ? "fab fa-sitejabber" : 0 <= a.indexOf("mixcloud") ? "fab fa-mixcloud" : 0 <= a.indexOf("spreaker") ? "fab fa-spreaker" : 0 <= a.indexOf("deezer") ? "fab fa-deezer" : 0 <= a.indexOf("napster") ? "fab fa-napster" : 0 <= a.indexOf("ipodcast") ? "fab fa-itunes-note" :
			0 <= a.indexOf("thread") || 0 <= a.indexOf("threads") ? "fa fa-solid fa-at" : 0 <= a.indexOf("website") || 0 <= a.indexOf("web") ? "fa fa-globe" : "fa fa-star"
	}

	function m() {
		var a = $("#neworder_category").val();
		$.post("ajax_data", {
			action: "services_list",
			category: a
		}, function(c) {
			var d = c.result.services,
				e = c.result.service_ids;
			if (0 < d.length) {
				var b = c.result.selected,
					f = "";
				Object.keys(d).forEach(function(h, k) {
					h = e[h];
					f += '<option value="' + h + '" ';
					h == b && (f += ' selected="selected" ');
					f += '>';
					
					f += d[k];
					f+= '</option>';
		
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
				containerCssClass: "form-control",
				dropdownCssClass: "select2-scrollable",
				dropdownPosition: 'below',
				minimumResultsForSearch: Infinity,
				templateSelection: function(b, f) {
					return  $('<span class="badge badge-primary">'+b.element.value+'</span>' + '<span> ' + b.text + "</span>")
				},
				templateResult: function(b, f) {
					return  $('<span class="badge badge-primary">'+$(b.element).attr("value")+'</span>' + '<span> ' + b.text + "</span>")
					
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
			a.on("select2:open", function() {
				setTimeout(function() {
					n();
					$(".select2-results__option").each(function(b, f) {
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
		}, function(c) {
			1 == c.empty ? $("#charge_div").hide() : ($("#charge_div").show(), $("#neworder_fields").html(c.details), $("#charge").val(c.price));
			$(".datetime").datepicker({
				format: "yyyy/mm/dd",
				language: "en",
				startDate: new Date
			}).on("change", function(d) {
				$(".datetime").datepicker("hide")
			});
			$("#clearExpiry").click(function() {
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
		}, function(d) {
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
		}, function(b) {
			$("#charge").val(b.price)
		}, "json")
	}
	$(".fav-service").click(function(a) {
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
			beforeSend: function() {
				c.replaceWith(d)
			},
			success: function(e) {
				e = JSON.parse(e);
				d.replaceWith(c);
				"remove" === e.data ? c.removeClass("fas").addClass("far") : c.removeClass("far").addClass("fas")
			}
		})
	});
	(function() {
	/*	$("#neworder_category").find("option").each(function(a, c) {
			isCatIconAlreadyThere = "" !== $(c).attr("data-icon") && "" !== $(c).attr("data-icon-type") ? !0 : !1;
			isCatIconAlreadyThere || (cat_name = $(c).text().toLowerCase().trim(), icon = p(cat_name), $(c).attr("data-icon",
				icon), $(c).attr("data-icon-type", "icon"))
		});*/
		l()
	})();
	m();
	$("#neworder_category").change(function() {
		m()
	});
	$("#neworder_services").change(function() {
		q();
		r()
	});
	$(document).on("keyup", "#order_quantity", function() {
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
			}, function(b) {
				$("#charge").val(b.price);
				$("#dripfeed-totalquantity").val(b.totalQuantity)
			},
			"json")
	});
	$(document).on("keyup", "#dripfeed-runs", function() {
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
		}, function(b) {
			$("#charge").val(b.price);
			$("#dripfeed-totalquantity").val(b.totalQuantity)
		}, "json")
	});
	$(document).on("keyup", "#neworder_comment", function() {
		t()
	});
	$(document).on("change", "#dripfeedcheckbox", function() {
		$(this).prop("checked") ?
			$("#dripfeed-options").removeClass() : $("#dripfeed-options").addClass("hidden");
		u()
	});
	$(".brand-category").click(function(a) {
		a.preventDefault();
		a = $(this).data("id");
		$.ajax({
			url: "ajax_data",
			data: {
				service: a,
				action: "specific_data"
			},
			type: "post",
			success: function(c) {
				c = JSON.parse(c);
				if (200 === c.status) {
					c = c.categories;
					var d = "";
					void 0 === c || 0 == c.length ? (d += "<option value='3337777'>No Categories Found!</option>", $("#description").hide()) : c.map(function(e, b) {
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
});