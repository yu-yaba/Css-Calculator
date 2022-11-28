// クリックした文字を表示する関数
function display(val) {
    document.getElementById("result").value += val;
 }
 
 // 式を計算する関数 = ボタンを押した時の処理
 function solve() {
    let formula = document.getElementById("result").value;
    document.getElementById("result").value = eval(formula);
 }
 
 // 入力欄をクリアする関数
 function clearAll() {
    document.getElementById("result").value = "";
 }