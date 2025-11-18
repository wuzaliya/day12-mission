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
});
