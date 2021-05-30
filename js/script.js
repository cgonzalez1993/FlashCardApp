let url_pt1 = "https://spreadsheets.google.com/feeds/list/";
let apikey = "1-OGgRhtVb0YfJLCj1ZgZODociO_nLyi3yFSPCgDbeHg";
let url_pt2 = "/1/public/full?alt=json";

let num = 0;
let cSharpQArray = [];
let cSharpAnsArray = [];
let htmlQArray = [];
let htmlAnsArray = [];
let cssQArray = [];
let cssAnsArray = [];
let jsQArray = [];
let jsAnsArray = [];


cSharp.addEventListener("click", function () {
    loadPage("../pages/cSharpFlashCards.html");
    loadQuestions(url_pt1 + apikey + url_pt2);
});

cSharp2.addEventListener("click", function () {
    loadPage("../pages/cSharpFlashCards.html");
    loadQuestions(url_pt1 + apikey + url_pt2);
});

css.addEventListener("click", function () {
    loadPage("../pages/cssFlashCards.html");
    loadQuestions(url_pt1 + apikey + url_pt2);
});

css2.addEventListener("click", function () {
    loadPage("../pages/cssFlashCards.html");
    loadQuestions(url_pt1 + apikey + url_pt2);
});

html.addEventListener("click", function () {
    loadPage("../pages/htmlFlashCards.html");
    loadQuestions(url_pt1 + apikey + url_pt2);
});

html2.addEventListener("click", function () {
    loadPage("../pages/htmlFlashCards.html");
    loadQuestions(url_pt1 + apikey + url_pt2);
});

js.addEventListener("click", function () {
    loadPage("../pages/jsFlashCards.html");
    loadQuestions(url_pt1 + apikey + url_pt2);
});

js2.addEventListener("click", function () {
    loadPage("../pages/jsFlashCards.html");
    loadQuestions(url_pt1 + apikey + url_pt2);
});

index.addEventListener("click", function () {
    loadPage("./index.html");
});


function loadPage(inject) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (inject == "../pages/cSharpFlashCards.html") {
                num = 0;
                injectHere.innerHTML = this.responseText;
                let cSharpQuestion = document.getElementById('cSharpQuestion');
                let cSharpAnswer = document.getElementById('cSharpAnswer');
                setTimeout(function () {
                    cSharpQuestion.innerText = cSharpQArray[num];
                    cSharpAnswer.innerText = cSharpAnsArray[num];
                }, 500)
                cSharpNext = document.getElementById('cSharpNext').addEventListener("click", function () {
                    if (num == cSharpQArray.length - 1) {
                        num = 0;
                    }
                    else {
                        num++;
                    }
                    setTimeout(function () {
                        cSharpQuestion.innerText = cSharpQArray[num];
                        cSharpAnswer.innerText = cSharpAnsArray[num];
                    }, 500)
                });
                cSharpPrevious = document.getElementById('cSharpPrevious').addEventListener("click", function () {
                    if (num == 0) {
                        num = cSharpQArray.length - 1;
                    }
                    else {
                        num--;
                    }
                    setTimeout(function () {
                        cSharpQuestion.innerText = cSharpQArray[num];
                        cSharpAnswer.innerText = cSharpAnsArray[num];
                    }, 500)
                });
            }
            else if (inject == "../pages/cssFlashCards.html") {
                num = 0;
                injectHere.innerHTML = this.responseText;
                let cssQuestion = document.getElementById('cssQuestion');
                let cssAnswer = document.getElementById('cssAnswer');
                setTimeout(function () {
                    cssQuestion.innerText = cssQArray[num];
                    cssAnswer.innerText = cssAnsArray[num];
                }, 500)
                cssNext = document.getElementById('cssNext').addEventListener("click", function () {
                    if (num == cssQArray.length - 1) {
                        num = 0;
                    }
                    else {
                        num++;
                    }
                    setTimeout(function () {
                        cssQuestion.innerText = cssQArray[num];
                        cssAnswer.innerText = cssAnsArray[num];
                    }, 500)
                });
                cssPrevious = document.getElementById('cssPrevious').addEventListener("click", function () {
                    if (num == 0) {
                        num = cssQArray.length - 1;
                    }
                    else {
                        num--;
                    }
                    setTimeout(function () {
                        cssQuestion.innerText = cssQArray[num];
                        cssAnswer.innerText = cssAnsArray[num];
                    }, 500)
                });
            }
            else if (inject == "../pages/htmlFlashCards.html") {
                num = 0;
                injectHere.innerHTML = this.responseText;
                let htmlQuestion = document.getElementById('htmlQuestion');
                let htmlAnswer = document.getElementById('htmlAnswer');
                setTimeout(function () {
                    htmlQuestion.innerText = htmlQArray[num];
                    htmlAnswer.innerText = htmlAnsArray[num];
                }, 500)
                htmlNext = document.getElementById('htmlNext').addEventListener("click", function () {
                    if (num == htmlQArray.length - 1) {
                        num = 0;
                    }
                    else {
                        num++;
                    }
                    setTimeout(function () {
                        htmlQuestion.innerText = htmlQArray[num];
                        htmlAnswer.innerText = htmlAnsArray[num];
                    }, 500)
                });
                htmlPrevious = document.getElementById('htmlPrevious').addEventListener("click", function () {
                    if (num == 0) {
                        num = htmlQArray.length - 1;
                    }
                    else {
                        num--;
                    }
                    setTimeout(function () {
                        htmlQuestion.innerText = htmlQArray[num];
                        htmlAnswer.innerText = htmlAnsArray[num];
                    }, 500)
                });
            }
            else if (inject == "../pages/jsFlashCards.html") {
                num = 0;
                injectHere.innerHTML = this.responseText;
                let jsQuestion = document.getElementById('jsQuestion');
                let jsAnswer = document.getElementById('jsAnswer');
                setTimeout(function () {
                    jsQuestion.innerText = jsQArray[num];
                    jsAnswer.innerText = jsAnsArray[num];
                }, 500)

                jsNext = document.getElementById('jsNext').addEventListener("click", function () {
                    if (num == jsQArray.length - 1) {
                        num = 0;
                    }
                    else {
                        num++;
                    }
                    setTimeout(function () {
                        jsQuestion.innerText = jsQArray[num];
                        jsAnswer.innerText = jsAnsArray[num];
                    }, 500)
                });
                jsPrevious = document.getElementById('jsPrevious').addEventListener("click", function () {
                    if (num == 0) {
                        num = jsQArray.length - 1;
                    }
                    else {
                        num--;
                    }
                    setTimeout(function () {
                        jsQuestion.innerText = jsQArray[num];
                        jsAnswer.innerText = jsAnsArray[num];
                    }, 500)
                });
            }
            else if (inject == "./index.html") {
                resetInject.innerHTML = this.responseText;

                injectHere = document.getElementById('injectHere');
                resetInject = document.getElementById('resetInject');
                cSharp = document.getElementById('cSharp');
                cSharp2 = document.getElementById('cSharp2');
                cSharpReveal = document.getElementById('cSharpReveal');
                html = document.getElementById('html');
                html2 = document.getElementById('html2');
                css = document.getElementById('css');
                css2 = document.getElementById('css2');
                js = document.getElementById('js');
                js2 = document.getElementById('js2');
                index = document.getElementById('index');

                cSharp.addEventListener("click", function () {
                    loadPage("../pages/cSharpFlashCards.html");
                    loadQuestions(url_pt1 + apikey + url_pt2);
                });

                cSharp2.addEventListener("click", function () {
                    loadPage("../pages/cSharpFlashCards.html");
                    loadQuestions(url_pt1 + apikey + url_pt2);
                });

                css.addEventListener("click", function () {
                    loadPage("../pages/cssFlashCards.html");
                    loadQuestions(url_pt1 + apikey + url_pt2);
                });

                css2.addEventListener("click", function () {
                    loadPage("../pages/cssFlashCards.html");
                    loadQuestions(url_pt1 + apikey + url_pt2);
                });

                html.addEventListener("click", function () {
                    loadPage("../pages/htmlFlashCards.html");
                    loadQuestions(url_pt1 + apikey + url_pt2);
                });

                html2.addEventListener("click", function () {
                    loadPage("../pages/htmlFlashCards.html");
                    loadQuestions(url_pt1 + apikey + url_pt2);
                });

                js.addEventListener("click", function () {
                    loadPage("../pages/jsFlashCards.html");
                    loadQuestions(url_pt1 + apikey + url_pt2);
                });

                js2.addEventListener("click", function () {
                    loadPage("../pages/jsFlashCards.html");
                    loadQuestions(url_pt1 + apikey + url_pt2);
                });

                index.addEventListener("click", function () {
                    loadPage("./index.html");
                });
            }
        }
    };
    xhttp.open("GET", inject, true);
    xhttp.send();
}

//Pull from Google Sheet Url
function loadQuestions(url) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (url == url_pt1 + apikey + url_pt2) {
                // Typical action to be performed when the document is ready:
                console.log(JSON.parse(this.responseText));
                let questions = JSON.parse(this.responseText).feed.entry;
                for (let i = 0; i < questions.length; i++) {
                    cSharpQArray.push(questions[i].gsx$csharpquestion.$t);
                    cSharpAnsArray.push(questions[i].gsx$csharpanswer.$t);
                    htmlQArray.push(questions[i].gsx$htmlquestion.$t);
                    htmlAnsArray.push(questions[i].gsx$htmlanswer.$t);
                    cssQArray.push(questions[i].gsx$cssquestion.$t);
                    cssAnsArray.push(questions[i].gsx$cssanswer.$t);
                    jsQArray.push(questions[i].gsx$jsquestion.$t);
                    jsAnsArray.push(questions[i].gsx$jsanswer.$t);
                }
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}