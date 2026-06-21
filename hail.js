// بيانات المواقع الفعلية لمسار 2: مسار حائل ⚪️✅
const hailRouteData = {
    planNumber: "2",
    routeName: "مسار حائل ⚪️✅",
    locations: [
        { name: "موقع BRDSM283-284", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/dBrf4rr7rP2hKDon6?g_st=iw" },
        { name: "موقع 64 (فلاش واحد)", type: "فلاشات", mapUrl: "https://goo.gl/maps/V58dACuZMEdZ556f9" },
        { name: "موقع QSMSM065", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/RGZWHMSV6nBm19LY8?g_st=ipc" },
        { name: "موقع 159-160", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/SFHJWbtxSbmMDvEq9?g_st=iw" },
        { name: "موقع UJWCP003 / UJWCP004", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/jdzmGEN6q4nXptcN9?g_st=ipc" },
        { name: "موقع UJWSM018-019", type: "موقع عام", mapUrl: "https://www.google.com/maps/place/26%C2%B036'23.9%22N+43%C2%B033'13.2%22E/@26.6993186,43.6631561,12.87z/data=!4m4!3m3!8m2!3d26.60664!4d43.55367?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D" },
        { name: "فلاشين UJWSM006-007", type: "فلاشات", mapUrl: "https://maps.app.goo.gl/furFdqi4Uoz7FME47?g_st=iw" },
        { name: "فلاشين UJWSM020-21", type: "فلاشات", mapUrl: "https://maps.app.goo.gl/BefGN4az9REQ2EMh9?g_st=iw" },
        { name: "4 فلاشات MKRSM001-002", type: "فلاشات", mapUrl: "https://maps.app.goo.gl/9ZesvJFfneXpjw1w9?g_st=iw" },
        { name: "4 فلاشات QSMSM259 / QSMSM260", type: "فلاشات", mapUrl: "https://maps.app.goo.gl/aAyrGnm5UY7HLoi6A?g_st=com.google.maps.preview.copy" },
        { name: "4 فلاشات MKRSM003 / MKRSM004", type: "فلاشات", mapUrl: "https://www.google.com/maps?q=26.849152,43.098782" },
        { name: "2 فلاشات QSMSM257", type: "فلاشات", mapUrl: "https://www.google.com/maps?q=26.903107,43.011235" },
        { name: "موقع مديور بنص الطريق", type: "انعطاف", mapUrl: "https://maps.app.goo.gl/ejVSfbbeZdG1a5776?g_st=com.google.maps.preview.copy" },
        { name: "موقع UJWSM005", type: "موقع عام", mapUrl: "https://goo.gl/maps/GkrDYdZvJwexcix47" },
        { name: "موقع BRD221", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/aqQp4hj1KQyTUdTf7?g_st=iw" },
        { name: "موقع 228 عند الجامعة", type: "موقع عام", mapUrl: "https://www.google.com/maps/place/26%C2%B021'49.5%22N+43%C2%B047'35.1%22E/@26.36374,43.7956649,17z/data=!3m1!4b1!4m4!3m3!8m2!3d26.36374!4d43.79309?hl=ar&entry=ttu" }
    ]
};

// دالة بناء جدول مسار حائل ديناميكياً
function buildHailTable() {
    const tableScreen = document.getElementById('table-dashboard-screen');
    if (!tableScreen) return;

    tableScreen.innerHTML = `
        <div class="dashboard-header-blue">
            <div class="route-info-title">
                <h2><i class="fa-solid fa-map-location-dot"></i> لـوحـة الـمـتـابـعـة الـمـيـدانـيـة</h2>
                <p class="current-route-badge">${hailRouteData.routeName}</p>
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
                <tbody id="hail-table-body">
                    <!-- تعبئة أسطر مسار حائل تلقائياً -->
                </tbody>
            </table>
        </div>

        <div class="form-actions-footer">
            <button id="save-progress-btn" class="btn-footer-save"><i class="fa-solid fa-floppy-disk"></i> حفظ مسودة الجولة</button>
            <button id="final-submit-btn" class="btn-footer-submit"><i class="fa-solid fa-paper-plane"></i> إرسال التقرير النهائي</button>
        </div>
    `;

    const tbody = document.getElementById('hail-table-body');
    
    hailRouteData.locations.forEach((loc, index) => {
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
        alert('✅ تم إرسال تقرير مسار حائل لغرفة التحكم بنجاح!');
        location.reload();
    });
}

// دالة مساعدة لتصنيف الألوان حسب المسمى الميداني
function getTypeClass(type) {
    if (type === "فلاشات") return "tag-flash";
    if (type === "انعطاف") return "tag-turn";
    return "tag-general";
}

// تشغيل بناء الجدول فوراً إذا اختار الموظف "بدء المسار" وكان مسار حائل
document.getElementById('start-route-btn').addEventListener('click', () => {
    const currentRouteText = document.getElementById('dynamic-route-name').innerText;
    if (currentRouteText.includes("حائل")) {
        buildHailTable();
    }
});
