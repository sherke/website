$(document).ready(function(){
    // Menu Item Section


    $(".menuoptionclick").removeClass("menuoptionclick")

    $(".photosection").click(function(){
        $(".menuoption").removeClass("menuoptionclick")
    })
    
    $("#menuoption1").click(function(){
        // $(".menuoption").css("border", "2px solid transparent")
        $("#menuoption1").addClass("menuoptionclick")
        $("#menuoption2").removeClass("menuoptionclick")
        $("#menuoption3").removeClass("menuoptionclick")
        $("#menuoption4").removeClass("menuoptionclick")
        $("#menuoption5").removeClass("menuoptionclick")
        $("#menuoption6").removeClass("menuoptionclick")
        $("#menuoption7").removeClass("menuoptionclick")
        $("#menuoption8").removeClass("menuoptionclick")
    })
    $("#menuoption2").click(function(){
        // $(".menuoption").css("border", "2px solid transparent")
        $("#menuoption1").removeClass("menuoptionclick")
        $("#menuoption2").addClass("menuoptionclick")
        $("#menuoption3").removeClass("menuoptionclick")
        $("#menuoption4").removeClass("menuoptionclick")
        $("#menuoption5").removeClass("menuoptionclick")
        $("#menuoption6").removeClass("menuoptionclick")
        $("#menuoption7").removeClass("menuoptionclick")
        $("#menuoption8").removeClass("menuoptionclick")

    })
    $("#menuoption3").click(function(){
        // $(".menuoption").css("border", "2px solid transparent")
        $("#menuoption1").removeClass("menuoptionclick")
        $("#menuoption2").removeClass("menuoptionclick")
        $("#menuoption3").addClass("menuoptionclick")
        $("#menuoption4").removeClass("menuoptionclick")
        $("#menuoption5").removeClass("menuoptionclick")
        $("#menuoption6").removeClass("menuoptionclick")
        $("#menuoption7").removeClass("menuoptionclick")
        $("#menuoption8").removeClass("menuoptionclick")
    })
    $("#menuoption4").click(function(){
        // $(".menuoption").css("border", "2px solid transparent")
        $("#menuoption1").removeClass("menuoptionclick")
        $("#menuoption2").removeClass("menuoptionclick")
        $("#menuoption3").removeClass("menuoptionclick")
        $("#menuoption4").addClass("menuoptionclick")
        $("#menuoption5").removeClass("menuoptionclick")
        $("#menuoption6").removeClass("menuoptionclick")
        $("#menuoption7").removeClass("menuoptionclick")
        $("#menuoption8").removeClass("menuoptionclick")
    })
    $("#menuoption5").click(function(){
        // $(".menuoption").css("border", "2px solid transparent")
        $("#menuoption1").removeClass("menuoptionclick")
        $("#menuoption2").removeClass("menuoptionclick")
        $("#menuoption3").removeClass("menuoptionclick")
        $("#menuoption4").removeClass("menuoptionclick")
        $("#menuoption5").addClass("menuoptionclick")
        $("#menuoption6").removeClass("menuoptionclick")
        $("#menuoption7").removeClass("menuoptionclick")
        $("#menuoption8").removeClass("menuoptionclick")
    })
    $("#menuoption6").click(function(){
        // $(".menuoption").css("border", "2px solid transparent")
        $("#menuoption1").removeClass("menuoptionclick")
        $("#menuoption2").removeClass("menuoptionclick")
        $("#menuoption3").removeClass("menuoptionclick")
        $("#menuoption4").removeClass("menuoptionclick")
        $("#menuoption5").removeClass("menuoptionclick")
        $("#menuoption6").addClass("menuoptionclick")
        $("#menuoption7").removeClass("menuoptionclick")
        $("#menuoption8").removeClass("menuoptionclick")
    })
    $("#menuoption7").click(function(){
        // $(".menuoption").css("border", "2px solid transparent")
        $("#menuoption1").removeClass("menuoptionclick")
        $("#menuoption2").removeClass("menuoptionclick")
        $("#menuoption3").removeClass("menuoptionclick")
        $("#menuoption4").removeClass("menuoptionclick")
        $("#menuoption5").removeClass("menuoptionclick")
        $("#menuoption6").removeClass("menuoptionclick")
        $("#menuoption7").addClass("menuoptionclick")
        $("#menuoption8").removeClass("menuoptionclick")
    })
    $("#menuoption8").click(function(){
        // $(".menuoption").css("border", "2px solid transparent")
        $("#menuoption1").removeClass("menuoptionclick")
        $("#menuoption2").removeClass("menuoptionclick")
        $("#menuoption3").removeClass("menuoptionclick")
        $("#menuoption4").removeClass("menuoptionclick")
        $("#menuoption5").removeClass("menuoptionclick")
        $("#menuoption6").removeClass("menuoptionclick")
        $("#menuoption7").removeClass("menuoptionclick")
        $("#menuoption8").addClass("menuoptionclick")
    })
    











    // View Screen Section
    $("#viewscreenitem0").show()
    $("#viewscreenitem1").hide()
    $("#viewscreenitem2").hide()
    $("#viewscreenitem3").hide()
    $("#viewscreenitem4").hide()
    $("#viewscreenitem5").hide()
    $("#viewscreenitem6").hide()
    $("#viewscreenitem7").hide()
    $("#viewscreenitem8").hide()
    
    $(".photosection").click(function(){
        $(".viewscreenitem").hide()
        $("#viewscreenitem0").show()
    })
    $("#menuoption1").click(function(){
        $(".viewscreenitem").hide()
        $("#viewscreenitem1").show()
    })
    $("#menuoption2").click(function(){
        $(".viewscreenitem").hide()
        $("#viewscreenitem2").show()
    })
    $("#menuoption3").click(function(){
        $(".viewscreenitem").hide()
        $("#viewscreenitem3").show()
    })
    $("#menuoption4").click(function(){
        $(".viewscreenitem").hide()
        $("#viewscreenitem4").show()
    })
    $("#menuoption5").click(function(){
        $(".viewscreenitem").hide()
        $("#viewscreenitem5").show()
    })
    $("#menuoption6").click(function(){
        $(".viewscreenitem").hide()
        $("#viewscreenitem6").show()
    })
    $("#menuoption7").click(function(){
        $(".viewscreenitem").hide()
        $("#viewscreenitem7").show()
    })
    $("#menuoption8").click(function(){
        $(".viewscreenitem").hide()
        $("#viewscreenitem8").show()
    })

});