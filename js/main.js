$(function () {
    $("#btn1").click(function () {
        var val = $("#nfact").val();
        //console.log(val);
        if (val >= 0 && val <= 15) {
            var nResul = factorialRecursivo(val);
            $("#perRes1").html("<small class='text-muted'><i>Respuesta:</i></small><br /><h3> <i>P<sub>n</sub></i> = <i>n</i>! = " + nResul + "</h3>");
            //alert(nResul);
        }
        else {
            $("#perRes1").html("<br /><h3> Escribe un valor de 1 a 15 </h3>");
            //alert("Escribe un valor de 1 a 15 ");
        }
    });
    $("#btn2").click(function () {
        var nResulOrde;
        var cadena = "";
        var valR = $("#rtotal1").val();
        var valN = $("#nfact2").val();
        var denoDor = valN - valR;

        if (denoDor >= 0) {
            if (valN >= 0 && valN <= 15) {
                nResulOrde = factorialRecursivo(valN) / factorialRecursivo(denoDor);
                cadena = "<small class='text-muted'><i>Respuesta:</i></small><br/><h3><i>O<sub>n<sup>r</sup></sub> </i>=<i>n!/(n-r)!</i> = " + nResulOrde + "</h3>";
                //console.log(nResulOrde);
            }
            else {
                cadena = "<br /><h3>Escribe un valor de 0 a 15</h3>";
            }
        }
        else {
            cadena = "<br /><h3>Total(<i>n</i>) debe ser mayor que numeros ordenados(<i>r</i>)</h3>";
        }
        $("#perRes2").html(cadena);
    });
    $("#btn3").click(function () {
        var valR1 = $("#rtotal2").val();
        var valN1 = $("#nfact3").val();

        if ((valN1 >= 0 && valN1 <= 15) && (valR1 >= 0 && valR1 <= 15)) {
            var nResulOrdeRep = Math.pow(valN1, valR1);
            $("#perRes3").html("<small class='text-muted'><i>Respuesta:</i></small><br /><h3> <i>OR<sub>n<sup>r</sup></sub></i> = <i>n<sup>r</sup></i> = " + nResulOrdeRep + "</h3>");
            console.log(nResulOrdeRep);
        } else {
            $("#perRes3").html("<br /><h3> Escribe un valor de 1 a 15 </h3>")
        }
    });
    $("#btn4").click(function () {
        var valR2 = $("#rtotal3").val();
        var valN2 = $("#nfact4").val();
        var denoDor = valN2 - valR2;
        var cadena = "";
        if (denoDor >= 0) {
            if ((valN2 >= 0 && valN2 <= 15) && (valR2 >= 0 && valR2 <= 15)) {
                var nResulComb = factorialRecursivo(valN2) /( factorialRecursivo(valR2) * factorialRecursivo(denoDor));
                cadena = "<small class='text-muted'><i>Respuesta:</i></small><br /><h3><i>C<sub>n<sup>r</sup></sub></i> = <i>n!/(r!(n-r)!)</i> = " + nResulComb + "</h3> ";
                //console.log(nResulComb);
            } else {
                cadena = "<br /><h3>Escribe un valor de 1 a 15</h3>";
            }
        } else {
            cadena = "<br /><h3>Total(<i>n</i>) debe ser mayor que numeros ordenados(<i>r</i>)</h3>";
        }
        $("#perRes4").html(cadena);
    });
    function factorialRecursivo(n) {
        //console.log(n)
        if (n == 0) {
            return 1;
        }
        return n * factorialRecursivo(n - 1);
    };
});