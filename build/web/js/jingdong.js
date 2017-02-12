/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    jd.init();
});

window.jd = (function () {
    var jd = {
        init: function () {
            this.initEvent();
        }, initEvent: function () {
            $(document).on("click", ".left-nav", function () {
                var _id = $(this).attr("tag");
                var top = $("#" + _id).offset().top;
                $("body").animate({"scrollTop": top},2000);
            });
        }
    };
    return jd;
})();