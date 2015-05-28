jQuery.fn.windowCentred = function () {
    var container = window;
    if ($(container).height() == 0)
        container = document;
    this.css("position", "absolute");
    this.css("top", Math.max(0, (($(container).height() - this.outerHeight()) / 2) + $(container).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(container).width() - this.outerWidth()) / 2) + $(container).scrollLeft()) + "px");
    return this;
}