async function checkLoan() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const resultDiv = document.getElementById('result');

    if (!phoneNumber) {
        resultDiv.innerHTML = 'দয়া করে ফোন নম্বর লিখুন।';
        return;
    }

    const apiUrl = https://myblapi.banglalink.net/api/v1/emergency-balance/${phoneNumber};

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        resultDiv.innerHTML = লোনের পরিমাণ: ${data.balance} টাকা; // API এর রেসপন্স অনুযায়ী পরিবর্তন করুন
    } catch (error) {
        resultDiv.innerHTML = 'একটি ত্রুটি ঘটেছে। দয়া করে আবার চেষ্টা করুন।';
        console.error('Error fetching data:', error);
    }
}
