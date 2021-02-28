$(function () {
    // $(".navbar").affix({
    //     offset: {
    //         top: $(".navbar").position().top
    //     }
    // });

    $("[data-toggle='popover']").popover();

    lastKillId = 0;
    if ($(".newsfeed[data-feed='kills']").size() > 0) {
        fkills = function () {
            jQuery.ajax("/ajax/recentkills.php", {
                complete: function (data) {
                    thisKillId = parseInt(data.getResponseHeader("lastKillId"));
                    lastKillId = thisKillId;
                    $(".newsfeed[data-feed='kills']").html(data.responseText);
                }
            });
        };
        setInterval(fkills, 10000);
        fkills();
    }
    if ($(".newsfeed[data-feed='main']").size() > 0) {
        f = function () {
            jQuery.ajax("/ajax/recentupdates.php", {
                complete: function (data) {
                    $(".newsfeed[data-feed='main']").html(data.responseText);
                }
            });
        };
        setInterval(f, 10000);
        f();
    }

    as = document.querySelectorAll('audio')
    for (var i = 0; i < as.length; i++) {
        as[i].play();
    }
});
