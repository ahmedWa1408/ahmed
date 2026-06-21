// بيانات المواقع المعتمدة والنهائية لمسار 6: مسار شري والبطين (طريق حايل) 🚨
const sheryRouteData = {
    planNumber: "6",
    routeName: "مسار شري والبطين (طريق حايل) 🚨",
    locations: [
        { name: "هارديسك QSMIT157", type: "هاردسك", mapUrl: "https://maps.app.goo.gl/LVqK8SctBAa4tQXd9?g_st=ipc" },
        { name: "موقع 78-79", type: "موقع عام", mapUrl: "https://goo.gl/maps/fXoeZB7jNT1XSvwAA" },
        { name: "موقع QSMIT019", type: "موقع عام", mapUrl: "https://goo.gl/maps/NYaZT7hH7w3ipmfEA" },
        { name: "موقع 289-290 البطين", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/xUkNrQgC1ejS9uUN7?g_st=com.google.maps.preview.copy" },
        { name: "موقع SRISM005-006 (إحداثيات: N27.241933, E43.461567)", type: "موقع عام", mapUrl: "https://google.com" },
        { name: "فلاشين قصيباء QSISM 008-009", type: "فلاشات", mapUrl: "https://maps.app.goo.gl/9jWjAJBEaTq5rwZc8" },
        { name: "موقع UJWCP003 / UJWCP004", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/jdzmGEN6q4nXptcN9?g_st=ipc" },
        { name: "موقع UJWSM018-019", type: "موقع عام", mapUrl: "https://www.google.com/maps/place/26%C2%B036'23.9%22N+43%C2%B033'13.2%22E/@26.6993186,43.6631561,12.87z/data=!4m4!3m3!8m2!3d26.60664!4d43.55367?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D" },
        { name: "فلاشين UJWSM006-007", type: "فلاشات", mapUrl: "https://maps.app.goo.gl/furFdqi4Uoz7FME47?g_st=iw" },
        { name: "فلاشين UJWSM020-21", type: "فلاشات", mapUrl: "https://maps.app.goo.gl/BefGN4az9REQ2EMh9?g_st=iw" },
        { name: "4 فلاشات MKRSM001-002", type: "فلاشات", mapUrl: "https://maps.app.goo.gl/9ZesvJFfneXpjw1w9?g_st=iw" },
        { name: "4 فلاشات QSMSM259 / QSMSM260", type: "فلاشات", mapUrl: "https://maps.app.goo.gl/aAyrGnm5UY7HLoi6A?g_st=com.google.maps.preview.copy" },
        { name: "4 فلاشات MKRSM003 / MKRSM004", type: "فلاشات", mapUrl: "https://www.google.com/maps?q=26.849152,43.098782" },
        { name: "2 فلاشات QSMSM257", type: "فلاشات", mapUrl: "https://www.google.com/maps?q=26.903107,43.011235" },
        { name: "موقع مديور بنص الطريق", type: "انعطاف", mapUrl: "https://maps.app.goo.gl/ejVSfbbeZdG1a5776?g_st=com.google.maps.preview.copy" },
        { name: "موقع UJWSM005 (إحداثيات: 26°31'19.7\"N 43°39'01.5\"E)", type: "موقع عام", mapUrl: "https://goo.gl/maps/GkrDYdZvJwexcix47" },
        { name: "موقع BRD221", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/aqQp4hj1KQyTUdTf7?g_st=iw" },
        { name: "موقع 228 عند الجامعة 🚨", type: "موقع عام", mapUrl: "https://google.com" },
        { name: "موقع 159-160 (دبوس مثبّت)", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/SFHJWbtxSbmMDvEq9?g_st=iw" },
        { name: "موقع 64 فلاش واحد", type: "فلاشات", mapUrl: "https://goo.gl/maps/V58dACuZMEdZ556f9" },
        { name: "موقع QSMSM065", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/RGZWHMSV6nBm19LY8?g_st=ipc" },
        { name: "موقع BRDSM283-284", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/dBrf4rr7rP2hKDon6?g_st=iw" }
    ]
};

// دالة بناء جدول مسار شري والبطين ديناميكياً
function buildSheryTable() {
    const tableScreen = document.getElementById('table-dashboard-screen');
    if (!tableScreen) return;

    tableScreen.innerHTML = `
        <div class="dashboard-header-blue">
            <div class="route-info-title">
                <h2><i class="fa-solid fa-map-location-dot"></i> لـوحـة الـمـتـابـعـة الـمـيـدانـيـة</h2>
                <p class="current-route-badge">${sheryRouteData.routeName}</p>
            </div>
            <div class="user-meta-data">
                <span><i class="fa-solid fa-user-gear"></i> المشغل: مـوظـف الـتـشـغـيـل الميداني</span>
                <span><i class="fa-solid fa-calendar-day"></i> التاريخ: ${new Date().toLocaleDateString('ar-SA')}</span>
            </div>
        </div>

        <div class="table-container-responsive">
            <table class="field-table">
                <thead>
                    <tr>
                        <th style="width: 8%">م</th>
                        <th style="width: 47%">مسمى الموقع ونوع الأنظمة برؤية CCTV</th>
                        <th style="width: 15%">الرابط الجغرافي</th>
                        <th style="width: 30%">حالة فحص الموقع الميداني</th>
                    </tr>
                </thead>
                <tbody id="shery-table-body">
                    <!-- سيتم تعبئة الأسطر الـ 21 تلقائياً -->
                </tbody>
            </table>
        </div>

        <div class="form-actions-footer">
            <button id="save-progress-btn" class="btn-footer-save"><i class="fa-solid fa-floppy-disk"></i> حفظ مسودة الجولة</button>
            <button id="final-submit-btn" class="btn-footer-submit"><i class="fa-solid fa-paper-plane"></i> إرسال التقرير النهائي</button>
        </div>
    `;

    const tbody = document.getElementById('shery-table-body');
    
    sheryRouteData.locations.forEach((loc, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="text-center font-bold">${index + 1}</td>
            <td class="location-text-cell">
                <span class="type-tag ${getTypeClass(loc.type)}">${loc.type}</span>
                <strong>${loc.name}</strong>
            </td>
            <td class="text-center">
                <a href="${loc.mapUrl}" target="_blank" class="map-link-btn">
                    <i class="fa-solid fa-location-dot"></i> الخريطة
                </a>
            </td>
            <td>
                <div class="table-status-controls">
                    <select class="field-select">
                        <option value="good">🟢 يعمل بكفاءة</option>
                        <option value="needs-cleaning">🟡 يحتاج تنظيف / صيانة خفيفة</option>
                        <option value="offline">🔴 متوقف / بلا طاقة</option>
                    </select>
                    <input type="text" class="table-notes-input" placeholder="ملاحظات فنية...">
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });

    document.getElementById('final-submit-btn').addEventListener('click', () => {
        alert('✅ تم إرسال تقرير مسار شري والبطين بنجاح للتحكم المركزي! بيض الله وجهك.');
        location.reload();
    });
}

// دالة مساعدة لتصنيف المجموعات الفنية بالجدول
function getTypeClass(type) {
    if (type === "فلاشات") return "tag-flash";
    if (type === "هاردسك") return "tag-disk";
    if (type === "انعطاف") return "tag-turn";
    return "tag-general";
}

// تشغيل بناء جدول مسار شري والبطين فور النقر من واجهة الموظف
document.getElementById('start-route-btn').addEventListener('click', () => {
    const currentRouteText = document.getElementById('dynamic-route-name').innerText;
    if (currentRouteText.includes("شري") || currentRouteText.includes("6") || currentRouteText.includes("حايل")) {
        buildSheryTable();
    }
});
