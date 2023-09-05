const groom = ['01027709172', '농협<br/>901066-51-146288<br/>문혁준']
const groom_mom = ['01089612374', '농협은행<br/>901066-52-225071<br/>김형영']
const bride = ['01062019612', '우리은행<br/>1002-645-967586<br/>한혜진']
const bride_mom = ['01051539612', '토스뱅크<br/>100033832559<br/>강영미']
const bride_dad = ['01063329612', '신한은행<br/>110-111-740468<br/>한철영']
var number_idx = 0
var account_idx = 1

function phoneCall(who) {
    switch(who) {
        case 'groom':
            number = groom[number_idx];
            break;
        case 'groom_mom':
            number = groom_mom[number_idx];
            break;
        case 'bride':
            number = bride[number_idx];
            break;
        case 'bride_mom':
            number = bride_mom[number_idx];
            break;
        case 'bride_dad':
            number = bride_dad[number_idx];
            break;
        default:
            number = '112'
            break
    }
    
    console.log(number)
    window.location.href = 'tel:' + number
}


function copyToClipboard(text) {
    
    // Fallback for browsers that do not support the Clipboard API
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = 'fixed'; // Make it invisible
    document.body.appendChild(textArea);
    textArea.select();
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'Text copied to clipboard' : 'Unable to copy text';
        alert(msg);
    } catch (err) {
        console.error('Unable to copy text: ', err);
    }
    document.body.removeChild(textArea);
}

document.getElementById("copy_btn").addEventListener("click", function() {
    text = document.getElementById('popup-p').innerText
    copy_btn = document.getElementById('copy_btn');
    copy_svg = document.getElementById('copy_svg');

    copyToClipboard(text);

    copy_btn.innerHTML = '계좌번호 복사 완료!';
    copy_svg.style.backgroundImage = "url('docs/svg/check.svg')";
    copy_svg.style.width = '18px';
    copy_svg.style.height = '18px';

});

function popup(who) {
    switch(who) {
        case 'groom':
            number = groom[account_idx];
            break;
        case 'groom_mom':
            number = groom_mom[account_idx];
            break;
        case 'bride':
            number = bride[account_idx];
            break;
        case 'bride_mom':
            number = bride_mom[account_idx];
            break;
        case 'bride_dad':
            number = bride_dad[account_idx];
            break;
        default:
            number = '112'
            break
    }
    var copy_svn = document.getElementById('copy_svg')
    document.getElementById('popup-p').innerHTML = number
    copy_svn.style.backgroundImage = "url('docs/svg/account.svg')";
    copy_svg.style.width = '12px';
    copy_svg.style.height = '12px';
    document.getElementById('copy_btn').innerHTML = "계좌번호 복사하기";
    
    console.log('popup')
    console.log(who)
}