var key = null;

$(document).ready(function () {
    var url = new URL(window.location.href);
    key = url.searchParams.get("id");


    var config = {
        apiKey: "AIzaSyD2Amywjsz8FWQ52tX6R-eJDbSXmt6bDvo",
        authDomain: "shoptrack-658c5.firebaseapp.com",
        databaseURL: "https://shoptrack-658c5.firebaseio.com",
        projectId: "shoptrack-658c5",
        storageBucket: "shoptrack-658c5.appspot.com",
        messagingSenderId: "123504057587"
    };

    firebase.initializeApp(config);

    var orders = firebase.database().ref('orders');

    orders.on("value", function (snapshot) {
        var data = snapshot.val();
        loadDetails(data[key].Items);
    });
});

function loadDetails(items) {
    var i = 0;
    var lis = "";

    for (i = 0; i < items.length; i++) {

        var tmp = "<tr><td>";
        tmp += "<span class='smallText'>" + items[i].ID + "</span><br/>";
        tmp += "<i class='" + getItemStatusIcon(items[i]) + "' style='color: " + getColorFromStatus(items[i]) + ";' aria-hidden='true'></i><br/>";
        tmp += "<span class='smallText'>" + getItemStatusText(items[i]) + "</span><br/></td>";

        tmp += "<td>" + getLink(items[i]) + "<br/>";
        tmp += "<span class='normalText'>" + items[i].Details + "</span><br/>"
        tmp += "<span class='normalText'>" + items[i].SinglePrice + "€ x " + items[i].Quantity + "</span><br/></td>";

        tmp += "<td><ul class='fa-ul'>";
        tmp += "<li><i class='fa-li fa fa-tag' aria-hidden='true'></i>" + items[i].Payment.Ammount + "€</li>";
        tmp += "<li><i class='fa-li fa fa-user' aria-hidden='true'></i>" + items[i].Payment.Buyer + "</li>"
        tmp += "<li><i class='fa-li fa fa-credit-card-alt' aria-hidden='true'></i>" + items[i].Payment.Payer + "</li></ul></td>"

        tmp += "<td><div class='button black'><i class='fa fa-ellipsis-v' aria-hidden='true'></i></div></td>";

        tmp += "<td style='background: " + getColorFromStatus(items[i]) + ";'></td></tr>";

        lis += tmp;
    }

    $("#loadingTR").animate({
        opacity: 0.25,
        height: "toggle"
    }, 300, function () {
        $(this).remove();
    });

    $("#detailsTable").append(lis);
}

function getLink(item) {
    var span = "<span class='bigText'>" + item.Name + "</span>";

    if (item.Link != null && item.Link != "") {
        return "<a href='" + item.Link + "' target='_blank'>" + span + "</a>"
    }

    return span;
}

function getItemStatusIcon(item) {
    switch (item.Status) {
        case 0:
            return "fa fa-shopping-bag";
            break;
        case 1:
            return "fa fa-plane";
            break;
        case 2:
            return "fa fa-check";
            break;
        case 3:
            return "fa fa-question";
            break;
        case 4:
            return "fa fa-money";
            break;
        default:
            return "fa fa-question";
    }
}

function getColorFromStatus(item) {
    switch (item.Status) {
        case 1:
            return "#2196F3";
            break;
        case 2:
            return "#58FA13";
            break;
        case 3:
            return "#ff6232";
            break;
        case 4:
            return "#0e5900";
            break;
        default:
            return "#6b6b6b";
    }
}

function getItemStatusText(item) {
    switch (item.Status) {
        case 0:
            return "Ordinato";
            break;
        case 1:
            return "Spedito";
            break;
        case 2:
            return "Ricevuto";
            break;
        case 3:
            return "Contestato";
            break;
        case 4:
            return "Ripagato";
            break;
        default:
            return "Unknown";
    }
}

function goBack(){
    window.open('mainTable.html?id=' + key, '_self', false);
}