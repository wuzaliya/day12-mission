// script.js
document.addEventListener('DOMContentLoaded', function () {
    // 讀取localStorage中的狗狗年齡和人類年齡
    const savedDogAge = localStorage.getItem('dogAge');
    const savedHumanAge = localStorage.getItem('humanAge');

    if (savedDogAge && savedHumanAge) {
        document.getElementById("dogAge").textContent = savedDogAge;
        document.getElementById("humanAge").textContent = savedHumanAge;
    }

    document.getElementById("calcBtn").addEventListener("click", function () {
        const birthDate = document.getElementById("birthDate").value;

        if (!birthDate) {
            alert("請先輸入狗狗的出生日期！");
            return;
        }

        // 取得當前日期
        const today = new Date();
        const birth = new Date(birthDate);

        // 計算狗狗年齡 (以年為單位)
        let dogAge = (today - birth) / (1000 * 60 * 60 * 24 * 365.25);
        dogAge = dogAge.toFixed(2);

        // 套用公式：人類年齡 = 16 * ln(狗狗年齡) + 31
        let humanAge = 16 * Math.log(dogAge) + 31;
        humanAge = humanAge.toFixed(2);

        // 輸出結果
        document.getElementById("dogAge").textContent = dogAge + " 歲";
        document.getElementById("humanAge").textContent = humanAge + " 歲（人類歲數）";

        // 儲存狗狗年齡和人類年齡到localStorage
        localStorage.setItem('dogAge', dogAge + " 歲");
        localStorage.setItem('humanAge', humanAge + " 歲（人類歲數）");
    });
});
