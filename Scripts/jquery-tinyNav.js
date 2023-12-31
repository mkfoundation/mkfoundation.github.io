/*! http://tinynav.viljamis.com v1.05 by @viljamis */
(function(a, i, g) {
    a.fn.tinyNav = function(j) {
        var d = a.extend({
            active: "selected",
            header: ""
        }, j);
        return this.each(function() {
            g++;
            var h = a(this)
              , e = "tinynav" + g
              , f = ".l_" + e
              , b = a("<select/>").addClass("tinynav " + e);
            if (h.is("ul,ol")) {
                "" !== d.header && b.append(a("<option/>").text(d.header));
                var c = "";
                h.addClass("l_" + e).find("a").each(function() {
                    c += '<option value="' + a(this).attr("href") + '">';
                    var b;
                    for (b = 0; b < a(this).parents("ul, ol").length - 1; b++)
                        c += "- ";
                    c += a(this).text() + "</option>"
                });
                b.append(c);
                d.header || b.find(":eq(" + a(f + " li").index(a(f + " li." + d.active)) + ")").attr("selected", !0);
                b.change(function() {
                    i.location.href = a(this).val()
                });
                a(f).after(b)
            }
        })
    }
}
)(jQuery, this, 0);
