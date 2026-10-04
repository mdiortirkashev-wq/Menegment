/* ============================================================
   MADRASA CRM — main.js
   ============================================================ */

'use strict';

/* ── DATA STORE ──────────────────────────────────────────── */
const DB = {
  students: [
    { id:1, name:'Ali Karimov',       class:'7-A', attendance:92, status:'faol',       phone:'+998901234567', birth:'2012-03-14' },
    { id:2, name:'Bekzod Tursunov',   class:'7-A', attendance:78, status:'faol',       phone:'+998901234568', birth:'2012-07-22' },
    { id:3, name:'Hasan Yusupov',     class:'8-B', attendance:88, status:'faol',       phone:'+998901234569', birth:'2011-05-09' },
    { id:4, name:'Said Aliyev',       class:'8-B', attendance:65, status:'nazoratda',  phone:'+998901234570', birth:'2011-11-30' },
    { id:5, name:'Umar Rashidov',     class:'9-A', attendance:95, status:'faol',       phone:'+998901234571', birth:'2010-02-18' },
    { id:6, name:'Jasur Normatov',    class:'9-A', attendance:82, status:'faol',       phone:'+998901234572', birth:'2010-09-05' },
    { id:7, name:'Sherzod Qodirov',   class:'7-B', attendance:91, status:'faol',       phone:'+998901234573', birth:'2012-01-27' },
    { id:8, name:'Doniyor Hamidov',   class:'8-A', attendance:55, status:'nazoratda',  phone:'+998901234574', birth:'2011-08-14' },
  ],
  classes: [
    { id:1, name:'7-A', teacher:'Mavlonov M.',   capacity:30, count:28 },
    { id:2, name:'7-B', teacher:'Yusupova D.',   capacity:30, count:25 },
    { id:3, name:'8-A', teacher:'Karimov SH.',   capacity:30, count:30 },
    { id:4, name:'8-B', teacher:'Tashkentova N.',capacity:30, count:27 },
    { id:5, name:'9-A', teacher:"Abdullayev O'.",capacity:28, count:24 },
    { id:6, name:'9-B', teacher:'Nazarova G.',   capacity:28, count:26 },
  ],
  subjects: [
    { id:1, name:'Arab tili',   teacher:'Yusupov A.',   hours:6 },
    { id:2, name:'Tafsir',      teacher:'Karimova M.',  hours:4 },
    { id:3, name:'Hadis',       teacher:'Aliyev B.',    hours:4 },
    { id:4, name:'Fiqh',        teacher:'Rashidov S.',  hours:3 },
    { id:5, name:'Aqida',       teacher:'Tursunov N.',  hours:2 },
    { id:6, name:'Matematika',  teacher:'Nazarova D.',  hours:5 },
    { id:7, name:'Tarix',       teacher:'Hamidov K.',   hours:3 },
  ],
  schedule: [
    { id:1, time:'08:00–08:45', subject:'Tafsir',     teacher:'Karimova M.', room:'12-xona', day:'dush' },
    { id:2, time:'08:55–09:40', subject:'Arab tili',  teacher:'Yusupov A.',  room:'5-xona',  day:'dush' },
    { id:3, time:'09:50–10:35', subject:'Hadis',      teacher:'Aliyev B.',   room:'12-xona', day:'dush' },
    { id:4, time:'10:45–11:30', subject:'Matematika', teacher:'Nazarova D.', room:'3-xona',  day:'dush' },
    { id:5, time:'11:40–12:25', subject:'Fiqh',       teacher:'Rashidov S.', room:'7-xona',  day:'dush' },
    { id:6, time:'08:00–08:45', subject:'Aqida',      teacher:'Tursunov N.', room:'2-xona',  day:'sesh' },
    { id:7, time:'08:55–09:40', subject:'Tarix',      teacher:'Hamidov K.',  room:'9-xona',  day:'sesh' },
  ],
  attendance: [
    { id:1, student:'Ali Karimov',     class:'7-A', status:'keldi',   time:'07:58', date:'2026-10-04' },
    { id:2, student:'Bekzod Tursunov', class:'7-A', status:'kechikdi',time:'08:12', date:'2026-10-04' },
    { id:3, student:'Hasan Yusupov',   class:'8-B', status:'keldi',   time:'07:55', date:'2026-10-04' },
    { id:4, student:'Said Aliyev',     class:'8-B', status:'kelmadi', time:'—',     date:'2026-10-04' },
    { id:5, student:'Umar Rashidov',   class:'9-A', status:'keldi',   time:'07:50', date:'2026-10-04' },
    { id:6, student:'Jasur Normatov',  class:'9-A', status:'keldi',   time:'08:02', date:'2026-10-04' },
    { id:7, student:'Sherzod Qodirov', class:'7-B', status:'keldi',   time:'07:48', date:'2026-10-04' },
    { id:8, student:'Doniyor Hamidov', class:'8-A', status:'kelmadi', time:'—',     date:'2026-10-04' },
  ],
  grades: [
    { student:'Ali Karimov',     subject:'Tafsir',    score:9 },
    { student:'Bekzod Tursunov', subject:'Hadis',     score:6 },
    { student:'Hasan Yusupov',   subject:'Arab tili', score:8 },
    { student:'Said Aliyev',     subject:'Fiqh',      score:4 },
    { student:'Umar Rashidov',   subject:'Aqida',     score:10 },
    { student:'Jasur Normatov',  subject:'Matematika',score:7 },
    { student:'Sherzod Qodirov', subject:'Tarix',     score:9 },
    { student:'Doniyor Hamidov', subject:'Hadis',     score:3 },
  ],
  ethics: [
    { student:'Ali Karimov',     score:92 },
    { student:'Umar Rashidov',   score:95 },
    { student:'Sherzod Qodirov', score:88 },
    { student:'Jasur Normatov',  score:74 },
    { student:'Hasan Yusupov',   score:68 },
    { student:'Bekzod Tursunov', score:58 },
    { student:'Said Aliyev',     score:40 },
    { student:'Doniyor Hamidov', score:32 },
  ],
  payments: [
    { id:1, student:'Ali Karimov',     amount:"450,000",  status:"tolangan",    date:"01.06.2026", period:"2026-06" },
    { id:2, student:'Bekzod Tursunov', amount:"450,000",  status:"qisman",      date:"03.06.2026", period:"2026-06" },
    { id:3, student:'Hasan Yusupov',   amount:"450,000",  status:"tolanmagan",  date:"—",          period:"2026-06" },
    { id:4, student:'Said Aliyev',     amount:"450,000",  status:"tolangan",    date:"02.06.2026", period:"2026-06" },
    { id:5, student:'Umar Rashidov',   amount:"450,000",  status:"tolangan",    date:"01.06.2026", period:"2026-06" },
    { id:6, student:'Jasur Normatov',  amount:"450,000",  status:"tolanmagan",  date:"—",          period:"2026-06" },
  ],
  rooms: [
    { number:"101-xona", capacity:4, occupied:4 },
    { number:"102-xona", capacity:4, occupied:3 },
    { number:"103-xona", capacity:4, occupied:4 },
    { number:"104-xona", capacity:4, occupied:2 },
    { number:"105-xona", capacity:4, occupied:0 },
    { number:"106-xona", capacity:4, occupied:1 },
    { number:"201-xona", capacity:4, occupied:4 },
    { number:"202-xona", capacity:4, occupied:3 },
  ],
  notifications: [
    { id:1, type:'red',    title:"Said Aliyev darsga kelmadi",         sub:"Ota-onaga SMS yuborildi · 5 daqiqa oldin",   unread:true  },
    { id:2, type:'green',  title:"Hasan Yusupov to'lovi qabul qilindi",sub:"450,000 so'm · 1 soat oldin",                unread:true  },
    { id:3, type:'yellow', title:"Said Aliyev axloq bali tushdi",      sub:"Ball: 40/100 · 3 soat oldin",                unread:true  },
    { id:4, type:'blue',   title:"Ota-onalar yig'ilishi eslatmasi",    sub:"Ertaga soat 17:00 · Kecha",                  unread:true  },
    { id:5, type:'green',  title:"Oylik hisobot yuborildi",            sub:"Direktorga PDF yuborildi · 2 kun oldin",     unread:false },
    { id:6, type:'yellow', title:"Doniyor Hamidov davomat ogohlantiruv",sub:"Bu oy 6 ta darsni qoldirdi · 2 kun oldin", unread:false },
  ],
};

/* ── ICON SVG HELPERS ────────────────────────────────────── */
const I = {
  alert:    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
  check:    '<svg viewBox="0 0 24 24"><polyline points="20,6 9,17 4,12"/></svg>',
  cash:     '<svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
  heart:    '<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
  cal:      '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  bell:     '<svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>',
  user:     '<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  users:    '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
  file:     '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  dl:       '<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  plus:     '<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  bar:      '<svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
};

function icon(key, size=18) {
  return `<svg width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">${I[key].replace(/<svg[^>]*>/,'').replace('</svg>','')}</svg>`;
}

/* ── SHARED COMPONENTS ───────────────────────────────────── */
function badge(text, color) {
  return `<span class="badge ${color}">${text}</span>`;
}

function scoreBadge(n) {
  const cls = n >= 8 ? 'high' : n >= 5 ? 'mid' : 'low';
  return `<span class="score-chip ${cls}">${n}/10</span>`;
}

function initials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
}

function userCell(name, sub='') {
  return `<div class="cell-user">
    <div class="avatar">${initials(name)}</div>
    <div>
      <div class="cell-user-name">${name}</div>
      ${sub ? `<div class="cell-user-sub">${sub}</div>` : ''}
    </div>
  </div>`;
}

function table(cols, rows) {
  const th = cols.map(c => `<th>${c.label}</th>`).join('');
  const tr = rows.map(r => `<tr>${r.map((cell,i)=>`<td style="width:${cols[i]?.w||'auto'}">${cell}</td>`).join('')}</tr>`).join('');
  return `<div class="card-body-flush">
    <table class="data-table">
      <thead><tr>${th}</tr></thead>
      <tbody>${tr}</tbody>
    </table>
  </div>`;
}

function pageHeader(title, sub, btnLabel, btnAction) {
  return `<div class="page-header">
    <div class="page-header-left">
      <h1>${title}</h1>
      ${sub ? `<p>${sub}</p>` : ''}
    </div>
    ${btnLabel ? `<div class="btn-group">
      <button class="btn-primary" onclick="${btnAction}">
        ${icon('plus',15)} ${btnLabel}
      </button>
    </div>` : ''}
  </div>`;
}

function filterBar(selects) {
  return `<div class="filter-bar">
    ${selects.map(s =>
      s.type === 'select'
        ? `<select onchange="${s.fn||''}"><option value="">${s.placeholder}</option>${(s.opts||[]).map(o=>`<option>${o}</option>`).join('')}</select>`
        : `<input type="text" placeholder="${s.placeholder}" oninput="${s.fn||''}" />`
    ).join('')}
  </div>`;
}

function card(title, actionLabel, actionFn, bodyHtml) {
  return `<div class="card">
    <div class="card-header">
      <span class="card-title">${title}</span>
      ${actionLabel ? `<button class="card-action" onclick="${actionFn||''}">${actionLabel}</button>` : ''}
    </div>
    ${bodyHtml}
  </div>`;
}

/* ── PAGE RENDERERS ──────────────────────────────────────── */

function renderHome() {
  const total = DB.students.length;
  const present = DB.attendance.filter(a => a.status !== 'kelmadi').length;
  const pct = Math.round(present / DB.attendance.length * 100);
  const pending = DB.payments.filter(p => p.status !== 'tolangan').length;

  const activityDots = {
    kelmadi:  { color:'red',    icon:'alert' },
    tolangan: { color:'green',  icon:'cash' },
    axloq:    { color:'yellow', icon:'heart' },
    jadval:   { color:'blue',   icon:'cal' },
  };

  const activities = [
    { color:'red',    icon:'alert', msg:"Said Aliyev va Doniyor Hamidov bugun kelmadi",  time:"10 daqiqa oldin" },
    { color:'green',  icon:'cash',  msg:"Hasan Yusupov to'lov qildi — 450,000 so'm",     time:"1 soat oldin" },
    { color:'yellow', icon:'heart', msg:"Said Aliyev axloq bali 40 ga tushdi",           time:"2 soat oldin" },
    { color:'blue',   icon:'cal',   msg:"Ertaga ota-onalar yig'ilishi soat 17:00",        time:"Kecha" },
  ];

  const chartBars = [40,60,75,65,90,80,72].map((h,i) =>
    `<div class="mini-bar-col" title="Kun ${i+1}" style="height:${h}%"></div>`
  ).join('');

  return `
    <div class="gold-accent-line"></div>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon navy">${icon('users',21)}</div>
        <div class="stat-body">
          <div class="stat-label">Jami talabalar</div>
          <div class="stat-value">${total}</div>
          <div class="stat-delta up">↑ 3 bu oy</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon green">${icon('check',21)}</div>
        <div class="stat-body">
          <div class="stat-label">Bugungi davomat</div>
          <div class="stat-value">${pct}%</div>
          <div class="stat-delta">${present} / ${DB.attendance.length} talaba</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon gold">${icon('cash',21)}</div>
        <div class="stat-body">
          <div class="stat-label">Kutilayotgan to'lov</div>
          <div class="stat-value">${pending}</div>
          <div class="stat-delta down">↓ To'lovni kutayotgan</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon red">${icon('bar',21)}</div>
        <div class="stat-body">
          <div class="stat-label">O'rtacha axloq bali</div>
          <div class="stat-value">69</div>
          <div class="stat-delta down">↓ 3 ball oldingi haftadan</div>
        </div>
      </div>
    </div>

    <div class="grid-2" style="gap:18px;">
      ${card("So'nggi faoliyat", "Hammasini ko'rish", "goPage('notifications')",
        `<div class="activity-list">
          ${activities.map(a => `
            <div class="activity-item">
              <div class="activity-dot ${a.color}">${icon(a.icon,16)}</div>
              <div class="activity-text">
                <div class="activity-msg">${a.msg}</div>
                <div class="activity-time">${a.time}</div>
              </div>
            </div>`).join('')}
        </div>`
      )}
      <div style="display:flex;flex-direction:column;gap:18px;">
        ${card("Bugungi jadval", "Barchasini ko'rish", "goPage('schedule')",
          `<div>
            ${DB.schedule.filter(l => l.day==='dush').slice(0,4).map(l => `
              <div class="schedule-item">
                <div class="schedule-time">${l.time}</div>
                <div>
                  <div class="schedule-subject">${l.subject}</div>
                  <div class="schedule-meta">${l.teacher} · ${l.room}</div>
                </div>
              </div>`).join('')}
          </div>`
        )}
        ${card("Haftalik davomat", '',  '',
          `<div class="card-body">
            <div style="display:flex;align-items:flex-end;gap:6px;height:72px;">
              ${[75,88,92,68,95,80,84].map((h,i) => {
                const days = ['Du','Se','Ch','Pa','Ju','Sh','Ya'];
                return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:5px;">
                  <div style="width:100%;height:${h*0.6}px;background:var(--gold);opacity:${h>85?1:.6};border-radius:3px 3px 0 0;"></div>
                  <div style="font-size:10px;color:var(--text-3);">${days[i]}</div>
                </div>`;
              }).join('')}
            </div>
          </div>`
        )}
      </div>
    </div>`;
}

function renderStudents() {
  const rows = DB.students.map(s => [
    userCell(s.name, s.phone),
    s.class,
    `<div style="display:flex;align-items:center;gap:8px;">
      <div style="width:60px;height:5px;background:var(--border);border-radius:4px;overflow:hidden;">
        <div style="width:${s.attendance}%;height:100%;background:${s.attendance>85?'var(--green)':s.attendance>70?'var(--yellow)':'var(--red)'};"></div>
      </div>
      <span style="font-size:12px;font-weight:600;">${s.attendance}%</span>
    </div>`,
    badge(
      s.status === 'faol' ? 'Faol' : 'Nazoratda',
      s.status === 'faol' ? 'green' : 'yellow'
    ),
    `<button class="btn-secondary" style="padding:5px 12px;font-size:12px;" onclick="openStudentModal(${s.id})">Batafsil</button>`,
  ]);
  return `
    ${pageHeader('Talabalar', `Jami ${DB.students.length} talaba ro'yxatda`, "Yangi talaba", "openAddModal()")}
    ${card('',  '', '',
      filterBar([
        { placeholder:'Sinf bo\'yicha', type:'select', opts:['7-A','7-B','8-A','8-B','9-A','9-B'] },
        { placeholder:'Holat', type:'select', opts:['Faol','Nazoratda'] },
        { placeholder:'Ism bo\'yicha qidiring...', type:'text' },
      ]) +
      table(
        [
          {label:'Talaba',   w:'32%'},
          {label:'Sinf',     w:'10%'},
          {label:'Davomat',  w:'22%'},
          {label:'Holat',    w:'16%'},
          {label:'',         w:'20%'},
        ],
        rows
      )
    )}`;
}

function renderClasses() {
  const cards = DB.classes.map(c => {
    const pct = Math.round(c.count / c.capacity * 100);
    return `<div class="class-card" onclick="goPage('students')">
      <div class="class-card-name">${c.name}</div>
      <div class="class-card-count">${c.count} / ${c.capacity} talaba</div>
      <div class="class-card-bottom">
        ${icon('user',13)}
        <span class="class-card-teacher">${c.teacher}</span>
      </div>
      <div class="class-card-bar-wrap">
        <div class="class-card-bar" style="width:${pct}%;"></div>
      </div>
    </div>`;
  }).join('');
  return `
    ${pageHeader('Sinflar', `${DB.classes.length} ta sinf`, "Yangi sinf", "openAddModal()")}
    <div class="grid-3">${cards}</div>`;
}

function renderSubjects() {
  const rows = DB.subjects.map(s => [
    `<strong>${s.name}</strong>`,
    userCell(s.teacher),
    `<span style="font-weight:600;color:var(--navy);">${s.hours}</span> soat`,
    badge('Faol', 'green'),
    `<button class="btn-secondary" style="padding:5px 12px;font-size:12px;">Tahrirlash</button>`,
  ]);
  return `
    ${pageHeader('Fanlar', `${DB.subjects.length} ta fan o'qitilmoqda`, "Yangi fan", "openAddModal()")}
    ${card('',  '', '', table(
      [{label:'Fan'},{label:'Ustoz'},{label:'Haftalik soat'},{label:'Holat'},{label:''}],
      rows
    ))}`;
}

function renderSchedule() {
  const dayOrder = ['dush','sesh','chor','pay','juma','shan'];
  const dayNames = { dush:'Dushanba', sesh:'Seshanba', chor:'Chorshanba', pay:'Payshanba', juma:'Juma', shan:'Shanba' };
  const grouped = {};
  dayOrder.forEach(d => { grouped[d] = DB.schedule.filter(l => l.day === d); });

  return `
    ${pageHeader('Dars jadvali', "Haftaning dars jadvali", "Dars qo'shish", "openAddModal()")}
    <div style="display:flex;flex-direction:column;gap:16px;">
      ${dayOrder.filter(d => grouped[d].length > 0).map(d => `
        ${card(dayNames[d], '', '',
          `<div>
            ${grouped[d].map(l => `
              <div class="schedule-item">
                <div class="schedule-time">${l.time}</div>
                <div style="flex:1;">
                  <div class="schedule-subject">${l.subject}</div>
                  <div class="schedule-meta">${l.teacher} · ${l.room}</div>
                </div>
              </div>`).join('')}
          </div>`
        )}`).join('')}
    </div>`;
}

function renderAttendance() {
  const statusMap = {
    keldi:    { label:'Keldi',    color:'green' },
    kechikdi: { label:'Kechikdi', color:'yellow' },
    kelmadi:  { label:'Kelmadi',  color:'red' },
  };
  const summary = {
    keldi:    DB.attendance.filter(a => a.status==='keldi').length,
    kechikdi: DB.attendance.filter(a => a.status==='kechikdi').length,
    kelmadi:  DB.attendance.filter(a => a.status==='kelmadi').length,
  };
  const rows = DB.attendance.map(a => {
    const s = statusMap[a.status];
    return [
      userCell(a.student, a.class),
      a.class,
      badge(s.label, s.color),
      `<span style="font-family:monospace;font-size:13px;">${a.time}</span>`,
      a.date,
    ];
  });
  return `
    ${pageHeader('Davomat', "Bugungi — 4 Oktabr 2026", "Davomat belgilash", "openAddModal()")}
    <div class="stats-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:18px;">
      <div class="stat-card">
        <div class="stat-icon green">${icon('check')}</div>
        <div class="stat-body"><div class="stat-label">Keldi</div><div class="stat-value">${summary.keldi}</div></div>
      </div>
      <div class="stat-card">
        <div class="stat-icon gold">${icon('alert')}</div>
        <div class="stat-body"><div class="stat-label">Kechikdi</div><div class="stat-value">${summary.kechikdi}</div></div>
      </div>
      <div class="stat-card">
        <div class="stat-icon red">${icon('alert')}</div>
        <div class="stat-body"><div class="stat-label">Kelmadi</div><div class="stat-value">${summary.kelmadi}</div></div>
      </div>
    </div>
    ${card('Davomat ro\'yxati', '', '',
      table(
        [{label:'Talaba'},{label:'Sinf'},{label:'Holat'},{label:'Vaqt'},{label:'Sana'}],
        rows
      )
    )}`;
}

function renderGrades() {
  const rows = DB.grades.map(g => [
    userCell(g.student),
    g.subject,
    scoreBadge(g.score),
    `<span style="font-size:12px;color:var(--text-3);">Bugun</span>`,
  ]);
  return `
    ${pageHeader('Baholar', "Talabalar baholari jurnali", "Baho qo'shish", "openAddModal()")}
    ${card('Baholar jurnali', '', '',
      filterBar([
        { placeholder:'Fan bo\'yicha', type:'select', opts:DB.subjects.map(s=>s.name) },
        { placeholder:'Sinf', type:'select', opts:['7-A','7-B','8-A','8-B','9-A','9-B'] },
      ]) +
      table(
        [{label:'Talaba'},{label:'Fan'},{label:'Baho'},{label:'Sana'}],
        rows
      )
    )}`;
}

function renderEthics() {
  const avg = Math.round(DB.ethics.reduce((s,e) => s+e.score, 0) / DB.ethics.length);
  const atRisk = DB.ethics.filter(e => e.score < 50).length;

  const ethicsRows = DB.ethics.map(e => {
    const cls = e.score >= 80 ? 'green' : e.score >= 50 ? 'yellow' : 'red';
    const color = e.score >= 80 ? 'var(--green)' : e.score >= 50 ? 'var(--yellow)' : 'var(--red)';
    return `<div class="ethics-item">
      ${userCell(e.student)}
      <div class="ethics-bar-wrap">
        <div class="ethics-bar ${cls}" style="width:${e.score}%;"></div>
      </div>
      <span class="ethics-score" style="color:${color}">${e.score}</span>
    </div>`;
  });

  return `
    ${pageHeader('Axloq baholari', "Talabalar xulq-atvor ko'rsatkichlari", "Baho qo'shish", "openAddModal()")}
    <div class="stats-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:18px;">
      <div class="stat-card">
        <div class="stat-icon navy">${icon('heart')}</div>
        <div class="stat-body"><div class="stat-label">O'rtacha ball</div><div class="stat-value">${avg}</div></div>
      </div>
      <div class="stat-card">
        <div class="stat-icon green">${icon('check')}</div>
        <div class="stat-body"><div class="stat-label">A'lo (80+)</div><div class="stat-value">${DB.ethics.filter(e=>e.score>=80).length}</div></div>
      </div>
      <div class="stat-card">
        <div class="stat-icon red">${icon('alert')}</div>
        <div class="stat-body"><div class="stat-label">Xavf ostida</div><div class="stat-value">${atRisk}</div></div>
      </div>
    </div>
    ${card('Axloq ballari reytingi', '', '',
      `<div>${ethicsRows.join('')}</div>`
    )}`;
}

function renderPayments() {
  const statusMap = {
    tolandan:   { label:"To'langan",  color:'green' },
    tolangan:   { label:"To'langan",  color:'green' },
    qisman:     { label:'Qisman',     color:'yellow' },
    tolanmagan: { label:"To'lanmagan",color:'red' },
  };
  const rows = DB.payments.map(p => {
    const s = statusMap[p.status] || { label:p.status, color:'navy' };
    return [
      userCell(p.student),
      `<strong>${p.amount} so'm</strong>`,
      badge(s.label, s.color),
      `<span style="font-size:12.5px;color:var(--text-2);">${p.date}</span>`,
      p.period,
    ];
  });
  const paid    = DB.payments.filter(p=>p.status==='tolangan').length;
  const partial = DB.payments.filter(p=>p.status==='qisman').length;
  const unpaid  = DB.payments.filter(p=>p.status==='tolanmagan').length;

  return `
    ${pageHeader("To'lovlar", "2026 yil iyun oyi", "To'lov qo'shish", "openAddModal()")}
    <div class="stats-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:18px;">
      <div class="stat-card">
        <div class="stat-icon green">${icon('cash')}</div>
        <div class="stat-body"><div class="stat-label">To'langan</div><div class="stat-value">${paid}</div><div class="stat-delta">${paid*450000 .toLocaleString()} so'm</div></div>
      </div>
      <div class="stat-card">
        <div class="stat-icon gold">${icon('cash')}</div>
        <div class="stat-body"><div class="stat-label">Qisman</div><div class="stat-value">${partial}</div></div>
      </div>
      <div class="stat-card">
        <div class="stat-icon red">${icon('cash')}</div>
        <div class="stat-body"><div class="stat-label">To'lanmagan</div><div class="stat-value">${unpaid}</div></div>
      </div>
    </div>
    ${card("To'lovlar jurnali", '', '',
      filterBar([
        { placeholder:'Holat', type:'select', opts:["To'langan",'Qisman',"To'lanmagan"] },
        { placeholder:'Davr', type:'select', opts:['2026-06','2026-05','2026-04'] },
      ]) +
      table(
        [{label:'Talaba'},{label:'Summa'},{label:'Holat'},{label:'To\'langan sana'},{label:'Davr'}],
        rows
      )
    )}`;
}

function renderDormitory() {
  const roomCards = DB.rooms.map(r => {
    const ratio = r.occupied / r.capacity;
    const barClass = ratio >= 1 ? 'full' : r.occupied === 0 ? 'empty' : 'has';
    const statusLabel = ratio >= 1 ? badge('To\'liq','navy') : r.occupied === 0 ? badge('Bo\'sh','yellow') : badge('Mavjud','green');
    return `<div class="room-card">
      <div class="room-number">${r.number}</div>
      <div class="room-bar-wrap">
        <div class="room-bar ${barClass}" style="width:${ratio*100}%;"></div>
      </div>
      <div class="room-meta">
        <strong>${r.occupied}</strong>/${r.capacity} talaba &nbsp;·&nbsp; ${statusLabel}
      </div>
    </div>`;
  }).join('');

  const free = DB.rooms.filter(r => r.occupied < r.capacity).length;
  const full = DB.rooms.filter(r => r.occupied >= r.capacity).length;
  const empty = DB.rooms.filter(r => r.occupied === 0).length;

  return `
    ${pageHeader('Yotoqxona', `${DB.rooms.length} ta xona, jami ${DB.rooms.reduce((s,r)=>s+r.capacity,0)} joy`, "Xona qo'shish", "openAddModal()")}
    <div class="stats-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:18px;">
      <div class="stat-card">
        <div class="stat-icon green">${icon('check')}</div>
        <div class="stat-body"><div class="stat-label">Bo'sh joyi bor</div><div class="stat-value">${free}</div></div>
      </div>
      <div class="stat-card">
        <div class="stat-icon red">${icon('alert')}</div>
        <div class="stat-body"><div class="stat-label">To'liq xona</div><div class="stat-value">${full}</div></div>
      </div>
      <div class="stat-card">
        <div class="stat-icon gold">${icon('alert')}</div>
        <div class="stat-body"><div class="stat-label">Bo'sh xona</div><div class="stat-value">${empty}</div></div>
      </div>
    </div>
    ${card('Xonalar holati', '', '', `<div class="room-grid">${roomCards}</div>`)}`;
}

function renderNotifications() {
  const svgByType = {
    red:    'alert', green: 'check', yellow: 'heart', blue: 'cal',
  };
  const items = DB.notifications.map(n => `
    <div class="notif-item ${n.unread?'unread':''}">
      <div class="notif-dot-outer ${n.type}">${icon(svgByType[n.type]||'bell',17)}</div>
      <div class="notif-content">
        <div class="notif-title">${n.title}</div>
        <div class="notif-sub">${n.sub}</div>
      </div>
      ${n.unread ? '<div class="unread-dot"></div>' : ''}
    </div>`).join('');

  const unread = DB.notifications.filter(n=>n.unread).length;
  return `
    ${pageHeader('Bildirishnomalar', `${unread} ta o'qilmagan`, "Barchasini o'qildi deb belgilash", '')}
    ${card('Barcha bildirishnomalar', '', '',
      `<div>${items}</div>`
    )}`;
}

function renderReports() {
  const reports = [
    { icon:'check', title:'Davomat hisoboti',   desc:"Oylik davomat statistikasi, sinflar kesimida tahlil va dinamika." },
    { icon:'cash',  title:"To'lovlar hisoboti", desc:"Joriy oy to'lov holati, qarzdorlar ro'yxati va tushgan summalar." },
    { icon:'heart', title:'Axloq hisoboti',     desc:"Talabalar xulq-atvor ballari dinamikasi va pastga tushganlar." },
    { icon:'bar',   title:'Baholar hisoboti',   desc:"Fanlar va sinflar kesimida o'rtacha ball va muvaffaqiyat darajasi." },
    { icon:'users', title:'Talabalar hisoboti', desc:"Ro'yxatdagi talabalar, holatlari va kontakt ma'lumotlari." },
    { icon:'file',  title:'Umumiy hisobot',     desc:"Direktor uchun keng qamrovli umumiy ko'rsatkichlar hisoboti." },
  ];

  const cards = reports.map(r => `
    <div class="report-card">
      <div class="report-card-icon">${icon(r.icon,20)}</div>
      <div class="report-card-title">${r.title}</div>
      <div class="report-card-desc">${r.desc}</div>
      <button class="btn-dl">
        ${icon('dl',13)} PDF yuklab olish
      </button>
    </div>`).join('');

  return `
    ${pageHeader('Hisobotlar', "Tahlil va hisobotlar markazi", '', '')}
    <div class="report-cards-grid">${cards}</div>`;
}

/* ── MODAL ───────────────────────────────────────────────── */
function openModal(html) {
  document.getElementById('modal-body').innerHTML = html;
  document.getElementById('modal-overlay').classList.add('open');
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

window.openAddModal = function() {
  openModal(`
    <div class="modal-title">Yangi ma'lumot qo'shish</div>
    <div class="form-grid">
      <div class="form-field">
        <label class="form-label">Ism va familiya</label>
        <input class="form-input" type="text" placeholder="Karimov Ali" />
      </div>
      <div class="form-field">
        <label class="form-label">Sinf</label>
        <select class="form-input">
          <option>7-A</option><option>7-B</option>
          <option>8-A</option><option>8-B</option>
          <option>9-A</option><option>9-B</option>
        </select>
      </div>
      <div class="form-field">
        <label class="form-label">Telefon</label>
        <input class="form-input" type="text" placeholder="+998 90 123 45 67" />
      </div>
      <div class="form-field">
        <label class="form-label">Tug'ilgan sana</label>
        <input class="form-input" type="date" />
      </div>
      <div class="form-field full">
        <label class="form-label">Holat</label>
        <select class="form-input">
          <option value="faol">Faol</option>
          <option value="nazoratda">Nazoratda</option>
        </select>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal()">Bekor qilish</button>
      <button class="btn-primary" onclick="closeModal()">${icon('check',14)} Saqlash</button>
    </div>`);
};

window.openStudentModal = function(id) {
  const s = DB.students.find(x => x.id === id);
  if (!s) return;
  const grades = DB.grades.filter(g => g.student === s.name);
  const ethics = DB.ethics.find(e => e.student === s.name);
  openModal(`
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;">
      <div class="avatar" style="width:52px;height:52px;font-size:18px;">${initials(s.name)}</div>
      <div>
        <div style="font-size:18px;font-weight:700;">${s.name}</div>
        <div style="font-size:13px;color:var(--text-3);">${s.class} · ${badge(s.status==='faol'?'Faol':'Nazoratda', s.status==='faol'?'green':'yellow')}</div>
      </div>
    </div>
    <div class="form-grid">
      <div class="form-field">
        <label class="form-label">Telefon</label>
        <div style="font-size:14px;font-weight:500;">${s.phone}</div>
      </div>
      <div class="form-field">
        <label class="form-label">Davomat</label>
        <div style="font-size:14px;font-weight:500;color:${s.attendance>85?'var(--green)':s.attendance>70?'var(--yellow)':'var(--red)'};">${s.attendance}%</div>
      </div>
      <div class="form-field">
        <label class="form-label">Axloq bali</label>
        <div style="font-size:14px;font-weight:500;">${ethics ? ethics.score + '/100' : '—'}</div>
      </div>
      <div class="form-field">
        <label class="form-label">Tug'ilgan sana</label>
        <div style="font-size:14px;">${s.birth}</div>
      </div>
    </div>
    ${grades.length ? `
      <div style="margin-top:18px;">
        <div class="form-label" style="margin-bottom:10px;">So'nggi baholar</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;">
          ${grades.map(g => `<span style="background:var(--surface-2);border:1px solid var(--border);border-radius:var(--radius-sm);padding:5px 12px;font-size:13px;"><strong>${g.subject}</strong> · ${scoreBadge(g.score)}</span>`).join('')}
        </div>
      </div>` : ''}
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal()">Yopish</button>
      <button class="btn-primary">${icon('check',14)} Tahrirlash</button>
    </div>`);
};

/* ── ROUTING ─────────────────────────────────────────────── */
const PAGE_MAP = {
  home:          { render: renderHome,          title: 'Bosh sahifa' },
  students:      { render: renderStudents,      title: 'Talabalar' },
  classes:       { render: renderClasses,       title: 'Sinflar' },
  subjects:      { render: renderSubjects,      title: 'Fanlar' },
  schedule:      { render: renderSchedule,      title: 'Dars jadvali' },
  attendance:    { render: renderAttendance,    title: 'Davomat' },
  grades:        { render: renderGrades,        title: 'Baholar' },
  ethics:        { render: renderEthics,        title: 'Axloq baholari' },
  payments:      { render: renderPayments,      title: "To'lovlar" },
  dormitory:     { render: renderDormitory,     title: 'Yotoqxona' },
  notifications: { render: renderNotifications, title: 'Bildirishnomalar' },
  reports:       { render: renderReports,       title: 'Hisobotlar' },
};

window.goPage = function(key) {
  const page = PAGE_MAP[key];
  if (!page) return;
  document.getElementById('page-content').innerHTML = page.render();
  document.getElementById('topbar-title').textContent = page.title;
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.page === key);
  });
  // Close sidebar on mobile after navigation
  if (window.innerWidth <= 900) {
    document.getElementById('sidebar').classList.remove('open');
  }
};

window.closeModal = closeModal;

/* ── INIT ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Nav clicks
  document.querySelectorAll('.nav-item').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      goPage(el.dataset.page);
    });
  });

  // Modal overlay click to close
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });
  document.getElementById('modal-close').addEventListener('click', closeModal);

  // Sidebar toggle (mobile)
  document.getElementById('sidebar-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
  });

  // Notification bell
  document.getElementById('notif-btn').addEventListener('click', () => {
    goPage('notifications');
  });

  // Global search (filter visible table rows)
  document.getElementById('search-input').addEventListener('input', function() {
    const q = this.value.toLowerCase();
    document.querySelectorAll('.data-table tbody tr').forEach(tr => {
      tr.style.display = tr.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });

  // Default page
  goPage('home');
});
