$(document).ready(function(){
    $(".choose-log-in").on("click" , function(){
        $(".choose-log-in").removeClass("hide2")
        $(".choose-creat").addClass("hide2")
        $(".log-in").removeClass("hide")
        $(".create-new-account").addClass("hide")

    })
    $(".choose-creat").on("click" , function(){
        $(".choose-creat").removeClass("hide2")
        $(".choose-log-in").addClass("hide2")
        $(".create-new-account").removeClass("hide")
        $(".log-in").addClass("hide")

    })
})