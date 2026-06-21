/* -------------------------------------------------------------
   نظام التتبع الميداني المتكامل - قسم التشغيل CCTV (الألوان الرسمية)
   ------------------------------------------------------------- */
:root {
    --navy-blue: #0f172a;       /* الكحلي الداكن الفخم */
    --royal-blue: #1e3c96;      /* الأزرق الملكي للهيدر والأزرار */
    --sky-blue: #00bcd4;        /* التركواز / السماوي للإشارات */
    --accent-green: #10b981;    /* الأخضر لإرسال التقارير */
    --bg-light: #f1f5f9;        /* خلفية مريحة للعين */
    --card-white: #ffffff;
}

/* إعدادات عامة وتصفير الهوامش */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--bg-light);
    margin: 0; padding: 0; box-sizing: border-box;
    direction: rtl; text-align: right;
    color: #334155;
}

/* [1] واجهة شاشة الجدول الفخمة (Dashboard Header) */
.dashboard-header-blue {
    background: linear-gradient(135deg, var(--navy-blue) 0%, var(--royal-blue) 100%);
    color: white;
    padding: 25px 20px;
    border-radius: 0 0 25px 25px;
    box-shadow: 0 8px 25px rgba(15, 23, 42, 0.15);
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.route-info-title h2 {
    margin: 0 0 5px 0;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;
}

.current-route-badge {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 6px 14px;
    border-radius: 50px;
    font-size: 0.95rem;
    display: inline-block;
    font-weight: 500;
}

.user-meta-data {
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
    opacity: 0.9;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 10px;
}

/* [2] الحاوية المتجاوبة للجدول (Responsive Table Container) */
.table-container-responsive {
    width: 95%;
    margin: 0 auto;
    background: var(--card-white);
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
    overflow-x: auto;
    border: 1px solid #e2e8f0;
}

/* [3] تنسيق الجدول الفعلي (The Field Checklist Table) */
.field-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.95rem;
}

.field-table th {
    background-color: #f8fafc;
    color: #475569;
    font-weight: bold;
    padding: 14px 10px;
    border-bottom: 2px solid #e2e8f0;
    text-align: center;
}

.field-table td {
    padding: 12px 10px;
    border-bottom: 1px solid #f1f5f9;
    vertical-align: middle;
}

/* تلوين السطور الفردية لراحة الموظف أثناء القراءة */
.field-table tbody tr:nth-child(even) {
    background-color: #f8fafc;
}

.field-table tbody tr:hover {
    background-color: #f0fdf4; /* تلميح أخضر خفيف عند الوقوف على السطر */
}

/* مسمى الموقع والخلية */
.location-text-cell {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
}

.location-text-cell strong {
    color: #1e293b;
    font-size: 1rem;
    line-height: 1.4;
}

/* [4] ألوان وسوم تصنيف الأنظمة الميدانية (Tags) */
.type-tag {
    font-size: 0.75rem;
    font-weight: bold;
    padding: 3px 8px;
    border-radius: 6px;
    display: inline-block;
}
.tag-flash { background-color: #e0f2fe; color: #0369a1; }     /* فلاشات - أزرق سماوي */
.tag-disk { background-color: #fef3c7; color: #b45309; }      /* هاردسك - برتقالي */
.tag-turn { background-color: #f3e8ff; color: #6b21a8; }      /* مديور وانعطاف - بنفسجي */
.tag-general { background-color: #f1f5f9; color: #475569; }   /* موقع عام - رمادي */

/* [5] زر رابط خرائط جوجل الجغرافي */
.map-link-btn {
    background-color: var(--royal-blue);
    color: white;
    text-decoration: none;
    padding: 8px 14px;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: bold;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: all 0.2s ease;
}

.map-link-btn:hover {
    background-color: var(--navy-blue);
    transform: scale(1.05);
}

/* [6] عناصر التحكم وحالة فحص الموقع */
.table-status-controls {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}

.field-select {
    width: 100%;
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #cbd5e1;
    font-family: inherit;
    font-size: 0.9rem;
    background-color: white;
    outline: none;
    cursor: pointer;
}

.field-select:focus {
    border-color: var(--royal-blue);
}

.table-notes-input {
    width: 90%;
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    font-family: inherit;
    font-size: 0.85rem;
    outline: none;
    background-color: #f8fafc;
}

.table-notes-input:focus {
    background-color: white;
    border-color: var(--royal-blue);
}

/* [7] أزرار الفوتر لإرسال وحفظ المسودة */
.form-actions-footer {
    width: 95%;
    margin: 25px auto;
    display: flex;
    gap: 12px;
}

.btn-footer-save, .btn-footer-submit {
    flex: 1;
    padding: 14px;
    border: none;
    border-radius: 12px;
    font-size: 1.05rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s ease;
}

.btn-footer-save {
    background-color: #64748b;
    color: white;
}
.btn-footer-save:hover { background-color: #475569; }

.btn-footer-submit {
    background-color: var(--accent-green);
    color: white;
}
.btn-footer-submit:hover { background-color: #059669; }

/* أدوات التنسيق المساعدة */
.text-center { text-align: center !important; }
.font-bold { font-weight: bold; }
