requirejs.config({
    paths: { "angular-timer": webjars.path("angular-timer", "angular-timer") },
    shim: { "angular-timer": [ "angular" ] }
});
