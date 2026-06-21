// بيانات المواقع المعتمدة والنهائية لمسار 5: مسار قبه 🚨
const qubaRouteData = {
    planNumber: "5",
    routeName: "مسار قبه 🚨",
    locations: [
        { name: "موقع T152 (إحداثيات: 26°21'34.9\"N 43°58'04.8\"E)", type: "موقع عام", mapUrl: "https://goo.gl" },
        { name: "موقع QSMSM004", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/dhKau6a4M9iBZuQw5?g_st=iw" },
        { name: "موقع BRDSM233", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/2HrAaQmo52KtAfnBA?g_st=iw" },
        { name: "موقع 34-35", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/23BSpq8qnwM3pPvv7?g_st=ipc" },
        { name: "هارديسك 145", type: "هاردسك", mapUrl: "https://maps.app.goo.gl/zEa6yN8Fhu4pPuW38?g_st=ipc" },
        { name: "موقع QSMSM148-147", type: "موقع عام", mapUrl: "https://maps.google.com?q=26.4232345,43.9770699&entry=gps&lucs=,94284508,94224825,94227247,94227248,94231188,94280564,47071704,47069508,94218641,94282134,94203019,47084304&g_st=ipc" },
        { name: "موقع QSMSM129-130", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/F4PKgWBum3j3atVt7?g_st=ipc" },
        { name: "موقع QAMSM214", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/Pb9wbPbsu1tmx4jM9?g_st=iw" },
        { name: "موقع QSMSM212 (إحداثيات: 26°43'10.8\"N 44°08'08.5\"E)", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/9asScZWsbYoivNit5?g_st=iw" },
        { name: "موقع 141-142", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/Ah6zyUnSuFaTbihL7?g_st=iw" },
        { name: "موقع QSMSM173 (إحداثيات: 27°20'53.5\"N 44°19'51.6\"E)", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/aSajwzo62tJRco9VA?g_st=iw" },
        { name: "موقع QSMWS022-014 (إحداثيات: 27°26'05.5\"N 44°24'41.3\"E)", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/U9LvUF7yMTP2ofUU7?g_st=iw" },
        { name: "موقع QAHSM010-011", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/q2B8qipPAJTaPJMn6?g_st=iw" },
        { name: "موقع QSMSM206-207 (إحداثيات: 27°33'55.6\"N 44°35'53.8\"E)", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/pBNcfiLtrQKRQn7R9?g_st=iw" },
        { name: "موقع QAHSM008-009", type: "موقع عام", mapUrl: "https://maps.google.com?q=27.6421154,44.7082430&entry=gps&lucs=,94207362,47071704,47069508,47084304,94206604&g_st=iw" },
        { name: "موقع QSMSM59-60", type: "موقع عام", mapUrl: "https://goo.gl/maps/FenHG662qXkbfTZV7" },
        { name: "موقع QSMSM110", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/ffw9GqhTnJ5HkSgPA?g_st=iw" },
        { name: "موقع BRDIT167", type: "موقع عام", mapUrl: "https://maps.app.goo.gl/2SPeTWedJQjDAovU6?g_st=iwb" }
    ]
};

// دالة بناء جدول مسار قبه ديناميكياً
function buildQubaTable() {
    const tableScreen = document.getElementById('table-dashboard-screen');
    if (!tableScreen) return;

    tableScreen.innerHTML = `
        <div class="dashboard-header-blue">
            <div class="route-info-title">
                <h2><i class="fa-solid fa-map-location-dot"></i> لـوحـة الـمـتـابـعـة الـمـيـدانـيـة</h2>
                <p class="current-route-badge">${qubaRouteData.routeName}</p>
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
                <tbody id="quba-table-body">
                    <!-- سيتم تعبئة الأسطر الـ 18 تلقائياً -->
                </tbody>
            </table>
        </div>

        <div class="form-actions-footer">
            <button id="save-progress-btn" class="btn-footer-save"><i class="fa-solid fa-floppy-disk"></i> حفظ مسودة الجولة</button>
            <button id="final-submit-btn" class="btn-footer-submit"><i class="fa-solid fa-paper-plane"></i> إرسال التقرير النهائي</button>
        </div>
    `;

    const tbody = document.getElementById('quba-table-body');
    
    qubaRouteData.locations.forEach((loc, index) => {
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
        alert('✅ تم إرسال تقرير مسار قبة بنجاح للتحكم المركزي!');
        location.reload();
    });
}

// دالة مساعدة لتصنيف المجموعات الفنية بالجدول
function getTypeClass(type) {
    if (type === "هاردسك") return "tag-disk";
    return "tag-general";
}

// تشغيل بناء جدول قبة فور النقر من واجهة الموظف
document.getElementById('start-route-btn').addEventListener('click', () => {
    const currentRouteText = document.getElementById('dynamic-route-name').innerText;
    if (currentRouteText.includes("قبه") || currentRouteText.includes("5")) {
        buildQubaTable();
    }
});
