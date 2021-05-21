let cSharpPrevious = document.getElementById('cSharpPrevious');
//let cSharpNext = document.getElementById('cSharpNext');

let htmlPrevious = document.getElementById('htmlPrevious');
let htmlNext = document.getElementById('htmlNext');

let cssPrevious = document.getElementById('cssPrevious');
let cssNext = document.getElementById('cssNext');

let jsPrevious = document.getElementById('jsPrevious');
let jsNext = document.getElementById('jsNext');

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
                injectHere.innerHTML = this.responseText;
                let cSharpQuestion = document.getElementById('cSharpQuestion');
                num = 0;
                setTimeout(function () {
                    cSharpQuestion.innerText = cSharpQArray[num];
                }, 500)

                cSharpReveal = document.getElementById('cSharpReveal');
                cSharpReveal.addEventListener("click", function () {
                    loadPage("../pages/cSharpReveal.html");
                });
                cSharpNext = document.getElementById('cSharpNext').addEventListener("click", function () {
                    console.log("Pushed plus 1")
                    if (count == cSharpQArray.length - 1) {
                        count = 0;
                    }
                    else {
                        count++;
                    }
                    setTimeout(function () {
                        cSharpQuestion.innerText = cSharpQArray[num];
                    }, 500)
                });
                cSharpPrevious = document.getElementById('cSharpPrevious').addEventListener("click", function () {
                    console.log("Pushed minus 1")
                    if (count == -0) {
                        count = cSharpQArray.length -1;
                    }
                    else {
                        count--;
                    }
                });

            }
            else if (inject == "../pages/cssFlashCards.html") {
                injectHere.innerHTML = this.responseText;
                let cssQuestion = document.getElementById('cssQuestion');
                num = 0;
                setTimeout(function () {
                    cssQuestion.innerText = cssQArray[num];
                }, 500)
                
                cssReveal = document.getElementById('cssReveal');
                cssReveal.addEventListener("click", function () {
                    loadPage("../pages/cssReveal.html");
                });

            }
            else if (inject == "../pages/htmlFlashCards.html") {
                injectHere.innerHTML = this.responseText;

                let htmlQuestion = document.getElementById('htmlQuestion');
                num = 0;
                setTimeout(function () {
                    htmlQuestion.innerText = htmlQArray[num];
                }, 500)

                htmlReveal = document.getElementById('htmlReveal');
                htmlReveal.addEventListener("click", function () {
                    loadPage("../pages/htmlReveal.html");
                });

            }
            else if (inject == "../pages/jsFlashCards.html") {
                injectHere.innerHTML = this.responseText;

                let jsQuestion = document.getElementById('jsQuestion');
                num = 0;
                setTimeout(function () {
                    jsQuestion.innerText = jsQArray[num];
                }, 500)

                jsReveal = document.getElementById('jsReveal');
                jsReveal.addEventListener("click", function () {
                    loadPage("../pages/jsReveal.html");
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
            else if (inject == "../pages/cSharpReveal.html") {
                cSharpReveal.innerHTML = this.responseText;
                let cSharpAnswer = document.getElementById('cSharpAnswer');
                num = 0;
                cSharpAnswer.innerText = cSharpAnsArray[num];
            }
            else if (inject == "../pages/htmlReveal.html") {
                htmlReveal.innerHTML = this.responseText;
                let htmlAnswer = document.getElementById('htmlAnswer');
                num = 0;
                htmlAnswer.innerText = htmlAnsArray[num];
            }
            else if (inject == "../pages/cssReveal.html") {
                cssReveal.innerHTML = this.responseText;
                let cssAnswer = document.getElementById('cssAnswer');
                num = 0;
                cssAnswer.innerText = cssAnsArray[num];
            }
            else if (inject == "../pages/jsReveal.html") {
                jsReveal.innerHTML = this.responseText;
                let jsAnswer = document.getElementById('jsAnswer');
                num = 0;
                jsAnswer.innerText = jsAnsArray[num];
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