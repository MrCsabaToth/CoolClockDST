(function (window) {
    $(document).ready(function() {
        var coolClockClassPrefix = "CoolClock:swissRail:65::";
        var budapest_dst = "+1";
        if (moment.tz("Europe/Budapest").isDST()) {
            var budapest_dst = "+2";
        }
        $("#clock_budapest").addClass(coolClockClassPrefix + budapest_dst);
        var fresno_dst = "-8";
        if (moment.tz("America/Los_Angeles").isDST()) {
            var fresno_dst = "-7";
        }
        $("#clock_fresno").addClass(coolClockClassPrefix + fresno_dst);

        CoolClock.findAndCreateClocks()
    });
} (window));
