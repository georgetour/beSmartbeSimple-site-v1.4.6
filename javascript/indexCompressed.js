$(document).ready(function(){function n(a,b){$(a).show(400),$(b).hide(450)}function o(a,b){$(b).hide(),$(a).show()}var a=$("#mainPage"),b=$("#services"),c=$("#portfolio"),d=$("#about"),e=$("#contactUs"),f=$("#awards"),g="#showServices,#showPortfolio,#showAwards,#showAbout,#showContactUs",h="#showMainPage,#showPortfolio,#showAwards,#showAbout,#showContactUs",i="#showMainPage,#showServices,#showAwards,#showAbout,#showContactUs",j="#showMainPage,#showPortfolio,#showAwards,#showServices,#showContactUs",k="#showMainPage,#showPortfolio,#showAwards,#showAbout,#showServices",l="#showMainPage,#showServices,#showPortfolio,#showAbout,#showContactUs";$("#showServices").hide(0),$("#showPortfolio").hide(0),$("#showAwards").hide(0),$("#showAbout").hide(0),$("#showContactUs").hide(0);var m=window.location.hash;switch(m){case"#services":o("#showServices","#showMainPage");break;case"#portfolio":o("#showPortfolio","#showMainPage");break;case"#awards":o("#showAwards","#showMainPage");break;case"#about":o("#showAbout","#showMainPage");break;case"#contactUs":o("#showContactUs","#showMainPage");break;default:o("#showMainPage")}$(b).on("click",function(){n("#showServices",h)}),$(c).on("click",function(){n("#showPortfolio",i)}),$(f).on("click",function(){n("#showAwards",l)}),$(d).on("click",function(){n("#showAbout",j)}),$(e).on("click",function(){n("#showContactUs",k)}),$(a).on("click",function(){n("#showMainPage",g)}),$(".footerAbout").on("click",function(){$(d).click()}),$(".footerContact").on("click",function(){$(e).click()}),$(".learnMore").on("click",function(){$(b).click()}),$(".nav a").click(function(){$(".navbar-collapse").collapse("hide")}),$("#error").hide();var p="",q=0;$("#contact").submit(function(a){function b(a){var b=/^\s*[a-zA-Z0-9,\s]+\s*$/;return b.test(a)}function c(a){var b=/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;return b.test(a)}b($("#gameTitle").val())&&b($("#suggestedBy").val())||(a.preventDefault(),p="Only letters and numbers please",$("#error").html(p),$("#error").show(),$("#error").fadeOut(3e3),q=1),c($("#email").val())?0==q&&$("#subscribeForm").submit():(a.preventDefault(),p="Give correct email",$("#error").html(p),$("#error").show(),$("#error").fadeOut(3e3),q=2)})});