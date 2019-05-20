function addToReport(checkbox, question_number) {
    return new Promise((resolve, reject) => {
        ShowPoint(question_number);
        let timer;
        const checker = () => {
            if ($('#ta' + question_number.toString()).size() != 0) {
                radio_select(document.getElementsByClassName("rb rgreen"), question_number);
                eval('DATA.s' + question_number.toString() + '=' + checkbox.toString());
                AddSectionXML(question_number, 1, false);
                doEvalScript(question_number);
                Ev(1);
                console.log('added ' + question_number);
                clearInterval(timer);
                setTimeout(()=>{resolve();},1000);
            } else {
                console.log('wait')
            }
        }
        timer = setInterval(checker, 100);

    })
}

function deleteFromReport(question_number) {
    return new Promise((resolve, reject) => {
        ShowPoint(question_number);
        let timer;
        const checker = () => {
            if ($('#ta' + question_number.toString()).size() != 0) {
                eval('DATA.s' + question_number.toString() + '=-1');
                AddSectionXML(question_number, 0, false);
                doEvalScript(question_number);
                Ev(0);
                console.log('deleted ' + question_number);
                clearInterval(timer);
                setTimeout(()=>{resolve();},1000);
            } else {
                console.log('wait')
            }
        }
        timer = setInterval(checker, 100);
    })
}

function autoCompleteQuestions() {  
        addToReport(1, 79).then(() =>
        addToReport(1, 55)).then(() =>
        addToReport(1, 4)).then(() =>
        addToReport(1, 85)).then(() =>
        addToReport(1, 12)).then(() =>
        addToReport(1, 52)).then(() =>
        addToReport(1, 14)).then(() =>
        addToReport(1, 37)).then(() =>
        addToReport(1, 28)).then(() =>
        addToReport(1, 32)).then(() =>
        addToReport(1, 56)).then(() =>
        addToReport(1, 58)).then(() =>
        addToReport(1, 33)).then(() =>
        addToReport(1, 34)).then(() =>
        addToReport(1, 43)).then(() =>
        addToReport(1, 44)).then(() =>
        addToReport(1, 45)).then(() =>
        addToReport(1, 46)).then(() =>
        addToReport(1, 47)).then(() =>
        addToReport(1, 48)).then(() =>
        addToReport(1, 76)).then(() =>
        addToReport(1, 77)).then(() =>
        deleteFromReport(62)).then(() =>
        deleteFromReport(16)).then(() =>
        deleteFromReport(17)).then(() =>
        deleteFromReport(63)).then(() =>
        deleteFromReport(29)).then(() =>
        deleteFromReport(30)).then(() =>
        deleteFromReport(31)).then(() =>
        deleteFromReport(35)).then(() =>
        deleteFromReport(36)).then(() =>
        deleteFromReport(42)).then(() =>
        deleteFromReport(64)).then(() => {
        console.log('end')
    })
}

var btn = document.createElement('button');
btn.innerHTML = 'Заполнить автоматически';
btn.onclick = autoCompleteQuestions;
btn.id = 'autofillButton';
btn.style = '  background: #7dc8fa; background-image: -webkit-linear-gradient(top, #7dc8fa, #1f648f);background-image: -moz-linear-gradient(top, #7dc8fa, #1f648f);background-image: -ms-linear-gradient(top, #7dc8fa, #1f648f);background-image: -o-linear-gradient(top, #7dc8fa, #1f648f);background-image: linear-gradient(to bottom, #7dc8fa, #1f648f);-webkit-border-radius: 60;-moz-border-radius: 60;border-radius: 60px;font-family: Arial;color: #ffffff;font-size: 14px;padding: 7px 10px 7px 10px;text-decoration: none; margin-top: -25px'

var place = document.getElementsByClassName('header');
var div_for_button = document.createElement('div');
div_for_button.appendChild(btn);
place[0].appendChild(div_for_button);

