document.addEventListener("DOMContentLoaded", () => {
    
    // 1. إدارة الشاشة الترحيبية (تختفي تلقائياً بعد ثانيتين بنعومة)
    const welcomeScreen = document.getElementById('welcome-screen');
    const planManagerScreen = document.getElementById('plan-manager-screen');
    const tableDashboardScreen = document.getElementById('table-dashboard-screen');

    setTimeout(() => {
        if(welcomeScreen) {
            welcomeScreen.style.opacity = '0';
            welcomeScreen.style.visibility = 'hidden';
            setTimeout(() => {
                welcomeScreen.classList.add('hidden');
                planManagerScreen.classList.remove('hidden');
            }, 500);
        }
    }, 2000);

    // 2. قاعدة بيانات الأسماء الرسمية للمسارات الستة الخاصة بكم
    const officialPlans = {
        "1": "مسار عنيزه والمذنب ⚪️✅",
        "2": "مسار حائل ⚪️✅",
        "3": "مسار ام سدرة 🚨",
        "4": "مسار البكيريه والبدايع 🚨", // تم تعديل المسمى المكتوب بالصفحة الأولى ليظهر "البكيرية والبدائع"
        "5": "مسار قبه 🚨",
        "6": "مسار شري والبطين (طريق حايل) 🚨"
    };

    // عناصر واجهة الموظف والبحث في الصفحة الأولى
    const planInput = document.getElementById('plan-input');
    const searchBtn = document.getElementById('search-btn');
    const errorMsg = document.getElementById('error-msg');
    const routeOptionsArea = document.getElementById('route-options-area');
    const dynamicRouteName = document.getElementById('dynamic-route-name');
    const backRouteBtn = document.getElementById('back-route-btn');

    // 3. تفعيل عملية البحث وعرض الاسم الصحيح للمسار
    searchBtn.addEventListener('click', () => {
        const inputVal = planInput.value.trim();

        if (officialPlans[inputVal]) {
            // إذا كان الرقم من 1 إلى 6، اخفِ رسالة الخطأ واعرض اسم المسار والأزرار الثلاثة
            errorMsg.classList.add('hidden');
            dynamicRouteName.innerText = officialPlans[inputVal];
            routeOptionsArea.classList.remove('hidden');
        } else {
            // إذا أدخل رقم آخر، اخفِ الخيارات واظهر رسالة التنبيه
            routeOptionsArea.classList.add('hidden');
            errorMsg.classList.remove('hidden');
        }
    });

    // 4. زر "رجوع للخلف" لتنظيف الحقول وإتاحة البحث من جديد
    backRouteBtn.addEventListener('click', () => {
        planInput.value = "";
        routeOptionsArea.classList.add('hidden');
        errorMsg.classList.add('hidden');
    });

    // 5. زر "سجلات المسار السابقة"
    document.getElementById('logs-route-btn').addEventListener('click', () => {
        alert('📜 جاري تحميل سجلات الجولات الميدانية السابقة لهذا المسار من النظام...');
    });
});
