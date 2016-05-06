        //-------- calculate -------
        var input = $("#main input"); //所有.input到input

        $(document).ready(function () {
            input.focus(function () {
                $("#main input").removeClass("inputting");
                $("#main input").addClass("result");
                $(this).removeClass("result");
                $(this).addClass("inputting"); //只给正在输入的加.inptting

                // get base
                var base = $(this).attr('name');
                //                console.log("Get base: " + base);

                // API from fixer.io
                var _url = 'http://api.fixer.io/latest?base=' + base;
                $.ajax({
                    url: _url
                    , dataType: 'jsonp'
                    , success: function (json) {
                            // console.log(json); 
                            // console.log("CNY: " + json.rates.CNY);
                            //  jQuery not work
                            //  document.getElementsByClassName(".result").value = result;

                            var location = document.getElementsByClassName('location');
                            //                            var selection = $('.selection').find('.select-input').css('color','red');
                            var selection = document.getElementsByClassName('select_input');
                            //                            console.log("selection: " + selection.value);
                            location[0].oninput = function () {
                                for (i = 0; i < 31; i++) {
                                    var selection_name = selection[i].getAttribute('name');
                                    //                                    console.log(selection_name);

                                    switch (selection_name) {
                                    case "AUD":
                                        selection[i].value = input.val() * json.rates.AUD;
                                        break;
                                    case "BGN":
                                        selection[i].value = input.val() * json.rates.BGN;
                                        break;
                                    case "BRL":
                                        selection[i].value = input.val() * json.rates.BRL;
                                        break;
                                    case "CAD":
                                        selection[i].value = input.val() * json.rates.CAD;
                                        break;
                                    case "CHF":
                                        selection[i].value = input.val() * json.rates.CHF;
                                        break;
                                    case "CNY":
                                        selection[i].value = input.val() * json.rates.CNY;
                                        break;
                                    case "CZK":
                                        selection[i].value = input.val() * json.rates.CZK;
                                        break;
                                    case "DKK":
                                        selection[i].value = input.val() * json.rates.DKK;
                                        break;
                                    case "EUR":
                                        selection[i].value = input.val() * json.rates.EUR;
                                        break;
                                    case "GBP":
                                        selection[i].value = input.val() * json.rates.GBP;
                                        break;
                                    case "HKD":
                                        selection[i].value = input.val() * json.rates.HKD;
                                        break;
                                    case "HRK":
                                        selection[i].value = input.val() * json.rates.HRK;
                                        break;
                                    case "HUF":
                                        selection[i].value = input.val() * json.rates.HUF;
                                        break;
                                    case "IDR":
                                        selection[i].value = input.val() * json.rates.IDR;
                                        break;
                                    case "ILS":
                                        selection[i].value = input.val() * json.rates.ILS;
                                        break;
                                    case "INR":
                                        selection[i].value = input.val() * json.rates.INR;
                                        break;
                                    case "JPY":
                                        selection[i].value = input.val() * json.rates.JPY;
                                        break;
                                    case "KRW":
                                        selection[i].value = input.val() * json.rates.KRW;
                                        break;
                                    case "MXN":
                                        selection[i].value = input.val() * json.rates.MXN;
                                        break;
                                    case "MYR":
                                        selection[i].value = input.val() * json.rates.MYR;
                                        break;
                                    case "NOK":
                                        selection[i].value = input.val() * json.rates.NOK;
                                        break;
                                    case "NZD":
                                        selection[i].value = input.val() * json.rates.NZD;
                                        break;
                                    case "PHP":
                                        selection[i].value = input.val() * json.rates.PHP;
                                        break;
                                    case "PLN":
                                        selection[i].value = input.val() * json.rates.PLN;
                                        break;
                                    case "RON":
                                        selection[i].value = input.val() * json.rates.RON;
                                        break;
                                    case "RUB":
                                        selection[i].value = input.val() * json.rates.RUB;
                                        break;
                                    case "SEK":
                                        selection[i].value = input.val() * json.rates.SEK;
                                        break;
                                    case "SGD":
                                        selection[i].value = input.val() * json.rates.SGD;
                                        break;
                                    case "THB":
                                        selection[i].value = input.val() * json.rates.THB;
                                        break;
                                    case "TRY":
                                        selection[i].value = input.val() * json.rates.TRY;
                                        break;
                                    case "ZAR":
                                        selection[i].value = input.val() * json.rates.ZAR;
                                        break;
                                    }

                                }
                            }

                        } //end json
                }); // end ajax


            });
        });