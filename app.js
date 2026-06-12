/* ============================================================
   BanBif · PFM — Mockup demostrativo
   Datos 100% ficticios · soles (PEN) · comercios de Perú
   ============================================================ */
'use strict';

/* ---------------- CATEGORÍAS ---------------- */
const CATS = {
  alim:   { name:'Alimentación',  icon:'i-cart',   color:'var(--c-food)'  },
  rest:   { name:'Restaurantes',  icon:'i-food',   color:'var(--c-rest)'  },
  trans:  { name:'Transporte',    icon:'i-bus',    color:'var(--c-trans)' },
  serv:   { name:'Servicios',     icon:'i-bolt',   color:'var(--c-serv)'  },
  fun:    { name:'Entretenim.',   icon:'i-play',   color:'var(--c-fun)'   },
  salud:  { name:'Salud',         icon:'i-health', color:'var(--c-health)'},
  edu:    { name:'Educación',     icon:'i-book',   color:'var(--c-edu)'   },
  compras:{ name:'Compras',       icon:'i-tag',    color:'var(--c-shop)'  },
  ingreso:{ name:'Ingresos',      icon:'i-briefcase', color:'var(--pos)'  },
};
const money = n => 'S/ ' + Math.abs(n).toLocaleString('es-PE',{minimumFractionDigits:2,maximumFractionDigits:2});
const money0 = n => 'S/ ' + Math.abs(n).toLocaleString('es-PE',{maximumFractionDigits:0});

/* ---------------- CUENTAS ---------------- */
const ACCOUNTS = [
  { id:'sueldo', type:'Cuenta Sueldo',   num:'•••• 4821', bal:12180.50, icon:'i-wallet', cls:'ac-blue',   listColor:'var(--cyan)' },
  { id:'ahorro', type:'Cuenta Ahorro',   num:'•••• 7745', bal:36070.30, icon:'i-piggy',  cls:'ac-purple', listColor:'var(--purple)' },
  { id:'tc',     type:'Tarjeta Visa Signature', num:'•••• 0192', bal:-2459.00, icon:'i-card', cls:'ac-dark', listColor:'var(--surface-3)', credit:true, line:15000 },
];
/* cuentas agregadas vía open banking (otros bancos) */
const EXT_ACCOUNTS = [
  { bank:'BCP',       abbr:'B', color:'var(--bcp)', type:'Cuenta Digital', num:'•••• 5530', bal:3850.20,  icon:'i-wallet' },
  { bank:'Interbank', abbr:'I', color:'var(--ibk)', type:'Tarjeta Oro',    num:'•••• 8814', bal:-1391.20, icon:'i-card', credit:true, line:8000 },
];

/* ---------------- CONEXIONES Y CONSENTIMIENTOS ---------------- */
const CONNS = [
  { bank:'BCP', abbr:'B', color:'var(--bcp)', scope:'Cuentas y movimientos', since:'12 may 2026', renew:'12 nov 2026', on:true },
  { bank:'Interbank', abbr:'I', color:'var(--ibk)', scope:'Tarjeta de crédito', since:'03 abr 2026', renew:'03 oct 2026', on:true },
];
const CONSENTS = [
  { t:'Usar mis datos para insights y análisis', s:'Categorización, tendencias y salud financiera', on:true },
  { t:'Recomendaciones personalizadas', s:'Ofertas y productos según tu comportamiento', on:true },
  { t:'Alertas y notificaciones contextuales', s:'Presupuestos, vencimientos y metas', on:true },
];

/* ---------------- RECOMENDACIONES ("para ti") ---------------- */
const RECOS = [
  { tag:'Para ti', icon:'i-coins', t:'Depósito a plazo · 5.2% TREA', p:'Tienes S/ 9,800 sin movimiento en tu Cuenta Ahorro. En 12 meses ganarías ≈ S/ 510.', cta:'Simular' },
  { tag:'Club de beneficios', icon:'i-play', t:'50% en Cineplanet los martes', p:'Vas seguido al cine: este beneficio te ahorraría ≈ S/ 29 al mes pagando con tu Visa BanBif.', cta:'Ver beneficio' },
  { tag:'Meta sugerida', icon:'i-plane', t:'Adelanta tu viaje a Cusco', p:'Subiendo tu aporte a S/ 450/mes llegas en octubre, 2 meses antes de lo planeado.', cta:'Ajustar meta' },
];

/* ---------------- MOVIMIENTOS ---------------- */
const TXNS = [
  { day:'Hoy · 11 jun',       m:'Tottus Megaplaza',     cat:'alim',  amt:-184.60, card:'Sueldo 4821' },
  { day:'Hoy · 11 jun',       m:'Rappi · Almuerzo',     cat:'rest',  amt:-38.90,  card:'Visa 0192' },
  { day:'Hoy · 11 jun',       m:'Yape a Lucía',         cat:'trans', amt:-25.00,  card:'Sueldo 4821' },
  { day:'Ayer · 10 jun',      m:'Cineplanet Norte',     cat:'fun',   amt:-58.00,  card:'Visa 0192' },
  { day:'Ayer · 10 jun',      m:'Metro Supermercado',   cat:'alim',  amt:-96.30,  card:'Sueldo 4821' },
  { day:'Ayer · 10 jun',      m:'Plin de Carlos',       cat:'ingreso', amt:120.00, card:'Sueldo 4821' },
  { day:'9 jun',              m:'Grifo Primax',         cat:'trans', amt:-150.00, card:'Visa 0192' },
  { day:'9 jun',              m:'Starbucks Larcomar',   cat:'rest',  amt:-22.50,  card:'Visa 0192' },
  { day:'8 jun',              m:'Luz del Sur',          cat:'serv',  amt:-138.40, card:'Sueldo 4821' },
  { day:'8 jun',              m:'Netflix',              cat:'fun',   amt:-44.90,  card:'Visa 0192' },
  { day:'7 jun',              m:'Farmacia InkaFarma',   cat:'salud', amt:-67.80,  card:'Sueldo 4821' },
  { day:'7 jun',              m:'Movistar Plan',        cat:'serv',  amt:-89.90,  card:'Sueldo 4821' },
  { day:'6 jun',              m:'Plaza Vea',            cat:'alim',  amt:-211.20, card:'Sueldo 4821' },
  { day:'5 jun',              m:'Crehana · Curso UX',   cat:'edu',   amt:-79.00,  card:'Visa 0192' },
  { day:'5 jun',              m:'Saga Falabella',       cat:'compras', amt:-249.90, card:'Visa 0192' },
  { day:'1 jun',             m:'Sueldo · Minsait',      cat:'ingreso', amt:6800.00, card:'Sueldo 4821' },
  { day:'1 jun',             m:'Sodexo · Alimentación', cat:'ingreso', amt:1600.00, card:'Sueldo 4821' },
];

/* ---------------- PRESUPUESTOS ---------------- */
const BUDGETS = [
  { cat:'alim',  spent:492,  limit:700 },
  { cat:'rest',  spent:980,  limit:1200 },
  { cat:'trans', spent:325,  limit:400 },
  { cat:'serv',  spent:316,  limit:350 },
  { cat:'fun',   spent:147,  limit:250 },
  { cat:'compras', spent:250, limit:300 },
];

/* ---------------- GASTO POR CATEGORÍA (mes) ---------------- */
const SPEND = [
  { cat:'rest',  amt:980 },
  { cat:'compras', amt:1150 },
  { cat:'alim',  amt:984 },
  { cat:'serv',  amt:716 },
  { cat:'trans', amt:625 },
  { cat:'fun',   amt:380 },
  { cat:'salud', amt:185 },
  { cat:'edu',   amt:140 },
];

/* ---------------- METAS ---------------- */
const GOALS = [
  { name:'Viaje a Cusco',       sub:'Diciembre 2026', icon:'i-plane',    saved:3200, target:5000, cls:'var(--c-fun)' },
  { name:'Fondo de emergencia', sub:'6 meses de gastos', icon:'i-umbrella', saved:9800, target:15000, cls:'var(--cyan)' },
  { name:'Laptop nueva',        sub:'MacBook Air',    icon:'i-laptop',   saved:2700, target:6000, cls:'var(--c-shop)' },
];

/* ---------------- SALUD FINANCIERA ---------------- */
const FACTORS = [
  { name:'Capacidad de ahorro', val:88, color:'var(--ok)',   icon:'i-piggy', ico_bg:'var(--ok-bg)',   ico_c:'var(--ok)' },
  { name:'Nivel de deuda',      val:72, color:'var(--cyan)', icon:'i-card',  ico_bg:'var(--pos-bg)',  ico_c:'var(--cyan)' },
  { name:'Control de gasto',    val:64, color:'var(--warn)', icon:'i-coins', ico_bg:'var(--warn-bg)', ico_c:'var(--warn)' },
  { name:'Diversificación',     val:80, color:'var(--purple-2)', icon:'i-spark', ico_bg:'rgba(139,92,246,.15)', ico_c:'var(--purple-2)' },
];
const TIPS = [
  { ic:'i-flame', t:'<b>Restaurantes</b> es tu categoría que más crece. Bajarla 15% sube tu puntaje a 85.' },
  { ic:'i-piggy', t:'Activa un <b>Ahorro Programado</b> de S/ 500/mes y proyecta +S/ 6,000 al año.' },
  { ic:'i-card',  t:'Tu tarjeta usa 16% de la línea. Mantente bajo 30% para cuidar tu historial.' },
];

/* ---------------- NOTIFICACIONES ---------------- */
const NOTIFS = [
  { unread:true, ico:'i-flame', c:'var(--neg)',  t:'Presupuesto de Restaurantes al 82%', p:'Te quedan S/ 220 para junio.', time:'Hace 2 h' },
  { unread:true, ico:'i-up',    c:'var(--pos)',  t:'Ingreso recibido', p:'Plin de Carlos · S/ 120.00', time:'Ayer' },
  { unread:false, ico:'i-target', c:'var(--cyan)', t:'¡Meta al 64%!', p:'Fondo de emergencia: S/ 9,800 de S/ 15,000.', time:'9 jun' },
  { unread:false, ico:'i-receipt', c:'var(--warn)', t:'Recordatorio de pago', p:'Tarjeta Visa vence en 4 días.', time:'8 jun' },
  { unread:false, ico:'i-piggy', c:'var(--purple)', t:'Ahorro Vueltos', p:'Redondeaste S/ 86.40 este mes.', time:'7 jun' },
];

/* ---------------- MÁS ---------------- */
const MORE = [
  [ {ic:'i-user',t:'Datos personales'}, {ic:'i-shield',t:'Bancos conectados y consentimientos', go:'consents'}, {ic:'i-card',t:'Tarjetas y cuentas'} ],
  [ {ic:'i-bell',t:'Notificaciones y alertas'}, {ic:'i-coins',t:'Categorías y reglas'}, {ic:'i-spark',t:'Ahorro automático'} ],
  [ {ic:'i-help',t:'Centro de ayuda'}, {ic:'i-gear',t:'Configuración'} ],
];

/* ---------------- SERIES (6 meses) ---------------- */
const IE = [ // ingresos / gastos
  { mo:'Ene', in:8200, out:6100 }, { mo:'Feb', in:8200, out:5400 },
  { mo:'Mar', in:8900, out:6300 }, { mo:'Abr', in:8200, out:5600 },
  { mo:'May', in:8300, out:5610 }, { mo:'Jun', in:8400, out:5160 },
];
const TREND = [0,180,260,420,610,980,1340,1620,1950,2380,2760,3180,3520,3960,4310,4720,5160]; // gasto acumulado diario

/* ============================================================
   HELPERS DE RENDER
   ============================================================ */
const $  = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const icon = id => `<svg class="ic"><use href="#${id}"/></svg>`;
const el = (html)=>{ const t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstElementChild; };

/* ----- Donut chart (SVG conic via stroke arcs) ----- */
function donut(node, data, size=118, thick=20){
  const total = data.reduce((s,d)=>s+d.amt,0);
  const r = (size-thick)/2, c = size/2, circ = 2*Math.PI*r;
  let off = 0;
  const segs = data.map(d=>{
    const frac = d.amt/total, len = frac*circ;
    const s = `<circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="${d.color}" stroke-width="${thick}"
      stroke-dasharray="${len} ${circ-len}" stroke-dashoffset="${-off}" stroke-linecap="butt"/>`;
    off += len; return s;
  }).join('');
  node.innerHTML = `<svg viewBox="0 0 ${size} ${size}" width="100%" height="100%" style="transform:rotate(-90deg)">
    <circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="var(--surface-2)" stroke-width="${thick}"/>${segs}</svg>`;
}

/* ----- Sparkline / area ----- */
function sparkline(node, pts, {w=320,h=38,color='#fff',fill='rgba(255,255,255,.25)'}={}){
  const max=Math.max(...pts), min=Math.min(...pts), rng=(max-min)||1;
  const step=w/(pts.length-1);
  const xy=pts.map((p,i)=>[i*step, h-((p-min)/rng)*(h-6)-3]);
  const line=xy.map((p,i)=>`${i?'L':'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
  const area=`${line} L${w} ${h} L0 ${h} Z`;
  node.innerHTML=`<svg viewBox="0 0 ${w} ${h}" width="100%" height="100%" preserveAspectRatio="none">
    <path d="${area}" fill="${fill}"/><path d="${line}" fill="none" stroke="${color}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

/* ----- Line chart (trend) ----- */
function lineChart(node, pts, {w=300,h=120,color='var(--cyan)'}={}){
  const max=Math.max(...pts), step=w/(pts.length-1);
  const xy=pts.map((p,i)=>[i*step, h-(p/max)*(h-16)-8]);
  const d=xy.map((p,i)=>`${i?'L':'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
  const area=`${d} L${w} ${h} L0 ${h} Z`;
  const last=xy[xy.length-1];
  const grid=[0.25,0.5,0.75].map(g=>`<line x1="0" y1="${h*g}" x2="${w}" y2="${h*g}" stroke="var(--line)" stroke-width="1" stroke-dasharray="3 4"/>`).join('');
  node.innerHTML=`<svg viewBox="0 0 ${w} ${h}" width="100%" height="100%" preserveAspectRatio="none">
    <defs><linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${color}" stop-opacity=".28"/><stop offset="1" stop-color="${color}" stop-opacity="0"/></linearGradient></defs>
    ${grid}<path d="${area}" fill="url(#lg)"/><path d="${d}" fill="none" stroke="${color}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="${last[0]}" cy="${last[1]}" r="4.5" fill="#fff" stroke="${color}" stroke-width="2.6"/></svg>`;
}

/* ----- ring label + progress ----- */
function setRing(node){
  const score=+node.dataset.score;
  const col = score>=75?'var(--ok)':score>=55?'var(--warn)':'var(--neg)';
  node.style.setProperty('--p',score);
  node.style.setProperty('--col',col);
  node.setAttribute('data-label',score);
}

/* ============================================================
   RENDERERS POR PANTALLA
   ============================================================ */
function renderAccountsRail(){
  const own = ACCOUNTS.map(a=>`
    <div class="acct-card ${a.cls}" data-nav="transactions">
      <div class="ac-type">${icon(a.icon)} ${a.type}</div>
      <div class="ac-bal">${a.credit? '-'+money(a.bal) : money(a.bal)}</div>
      <div class="ac-num">${a.num}</div>
      <div class="ac-ico">${icon(a.icon)}</div>
    </div>`).join('');
  const ext = EXT_ACCOUNTS.map(a=>`
    <div class="acct-card ac-ext" data-nav="accounts">
      <span class="ext-tag">Open Banking</span>
      <div class="ac-type"><span class="ext-chip" style="background:${a.color}">${a.abbr}</span> ${a.bank} · ${a.type}</div>
      <div class="ac-bal">${a.credit? '-'+money(a.bal) : money(a.bal)}</div>
      <div class="ac-num">${a.num}</div>
    </div>`).join('');
  const add = `<button class="acct-card ac-add" data-go="consents"><span class="qi-ic">${icon('i-plus')}</span>Conectar otro banco</button>`;
  $('#accountsRail').innerHTML = own + ext + add;
}
function acctRow(a, extBank){
  const ico = extBank
    ? `<div class="acct-ico" style="background:${a.color}"><b style="font-size:16px">${a.abbr}</b></div>`
    : `<div class="acct-ico" style="background:${a.listColor}">${icon(a.icon)}</div>`;
  const name = extBank ? `${a.bank} · ${a.type}` : a.type;
  return `<div class="acct-row" data-nav="transactions">
      ${ico}
      <div class="acct-meta"><b>${name}</b><span>${a.num}${a.credit?' · Línea '+money0(a.line):''}</span></div>
      <div class="acct-amt ${a.credit?'neg':''}">${a.credit?'-'+money(a.bal):money(a.bal)}
        <small>${a.credit?'Por pagar':'Disponible'}</small></div>
    </div>`;
}
function renderAccountsList(){
  $('#accountsList').innerHTML =
    `<div class="group-lbl">BanBif</div>` +
    ACCOUNTS.map(a=>acctRow(a,false)).join('') +
    `<div class="group-lbl">Otros bancos <span class="ext-tag">Open Banking</span></div>` +
    EXT_ACCOUNTS.map(a=>acctRow(a,true)).join('') +
    `<button class="acct-row" data-go="consents" style="width:100%">
      <div class="acct-ico" style="background:var(--surface-3)">${icon('i-shield')}</div>
      <div class="acct-meta" style="text-align:left"><b>Conexiones y consentimientos</b><span>2 bancos conectados · administrar</span></div>
      <svg class="ic" style="color:var(--muted)"><use href="#i-chev"/></svg>
    </button>`;
}
function renderConsents(){
  $('#connList').innerHTML = CONNS.map(c=>`
    <div class="conn">
      <div class="conn-top">
        <div class="acct-ico" style="background:${c.color};width:42px;height:42px"><b style="font-size:15px">${c.abbr}</b></div>
        <div class="conn-meta"><b>${c.bank}</b><span>${c.scope}</span></div>
        <label class="switch"><input type="checkbox" ${c.on?'checked':''} /><span class="track"></span></label>
      </div>
      <div class="conn-foot"><span>Conectado: <b>${c.since}</b></span><span>Renueva: <b>${c.renew}</b></span></div>
    </div>`).join('');
  $('#consentList').innerHTML = CONSENTS.map(c=>`
    <div class="conn"><div class="conn-top">
      <div class="conn-meta"><b>${c.t}</b><span>${c.s}</span></div>
      <label class="switch"><input type="checkbox" ${c.on?'checked':''} /><span class="track"></span></label>
    </div></div>`).join('');
}
function recoCard(r){
  return `<div class="reco">
    <div class="reco-ic">${icon(r.icon)}</div>
    <div class="reco-body"><span class="reco-tag">${r.tag}</span><b>${r.t}</b>${r.p}
      <button class="link">${r.cta} <svg class="ic sm"><use href="#i-chev"/></svg></button></div>
  </div>`;
}
function renderRecos(){
  $('#recoList').innerHTML = RECOS.map(recoCard).join('');
  $('#homeReco').innerHTML = recoCard(RECOS[0]);
}
function renderGoalsMini(){
  $('#goalsMini').innerHTML = GOALS.map(g=>{
    const pct=Math.round(g.saved/g.target*100);
    return `<div class="gm" data-nav="goals"><b>${g.name}</b><span class="gm-pct">${pct}% · faltan ${money0(g.target-g.saved)}</span>
      <div class="goal-track"><div class="goal-fill" style="width:${pct}%"></div></div></div>`;
  }).join('');
}

function catList(node, data, total){
  node.innerHTML = data.slice(0,5).map(d=>{
    const ct=CATS[d.cat];
    return `<li><span class="cm-dot" style="background:${ct.color}"></span>
      <span class="cm-name">${ct.name}</span>
      <span class="cm-amt">${money0(d.amt)}</span>
      <span class="cm-pct">${Math.round(d.amt/total*100)}%</span></li>`;
  }).join('');
}

function renderTxns(filter='all', q=''){
  q=q.toLowerCase();
  let last=null, html='';
  const list = TXNS.filter(t=>{
    const okCat = filter==='all' || (filter==='ingreso'? t.amt>0 : t.cat===filter);
    const okQ = !q || t.m.toLowerCase().includes(q) || CATS[t.cat].name.toLowerCase().includes(q);
    return okCat && okQ;
  });
  if(!list.length){ $('#txnList').innerHTML='<p class="muted center" style="margin-top:30px">Sin movimientos para este filtro.</p>'; return; }
  list.forEach((t,i)=>{
    if(t.day!==last){ html+=`<div class="txn-day">${t.day}</div>`; last=t.day; }
    const ct=CATS[t.cat], pos=t.amt>0;
    html+=`<div class="txn" data-txn="${TXNS.indexOf(t)}">
      <div class="txn-ico" style="background:${ct.color}">${icon(ct.icon)}</div>
      <div class="txn-body"><div class="txn-name">${t.m}</div>
        <div class="txn-cat"><span class="ctag" style="background:${ct.color}1f;color:${ct.color}">${ct.name}</span> ${t.card}</div></div>
      <div class="txn-amt ${pos?'pos':''}">${pos?'+':'−'}${money(t.amt)}</div>
    </div>`;
  });
  $('#txnList').innerHTML=html;
}

function renderChips(active='all'){
  const items=[['all','Todos'],['ingreso','Ingresos'],['rest','Restaurantes'],['alim','Alimentación'],['compras','Compras'],['trans','Transporte'],['serv','Servicios'],['fun','Entreten.']];
  $('#txnChips').innerHTML=items.map(([k,l])=>`<button class="chip-f${k===active?' active':''}" data-chip="${k}">${l}</button>`).join('');
}

function renderBars(){
  const max=Math.max(...IE.flatMap(d=>[d.in,d.out]));
  $('#ieBars').innerHTML=IE.map(d=>`
    <div class="bar-grp"><div class="bar-pair">
      <div class="bar in" style="height:${d.in/max*100}%"></div>
      <div class="bar out" style="height:${d.out/max*100}%"></div>
    </div><div class="bar-lbl">${d.mo}</div></div>`).join('');
}

function renderBudgets(){
  $('#budgetList').innerHTML=BUDGETS.map(b=>{
    const ct=CATS[b.cat], pct=Math.min(b.spent/b.limit*100,100);
    const over=b.spent/b.limit; const col=over>=1?'var(--neg)':over>=.8?'var(--warn)':'var(--pos)';
    const foot=over>=1?`<span class="neg">Excedido en ${money0(b.spent-b.limit)}</span>`
      :over>=.8?`<span style="color:var(--warn)">Te queda ${money0(b.limit-b.spent)}</span>`
      :`<span class="pos">Vas bien · queda ${money0(b.limit-b.spent)}</span>`;
    return `<div class="bdg">
      <div class="bdg-top"><div class="bdg-ico" style="background:${ct.color}">${icon(ct.icon)}</div>
        <div class="bdg-name">${ct.name}</div>
        <div class="bdg-vals">${money0(b.spent)} <small>/ ${money0(b.limit)}</small></div></div>
      <div class="bdg-track"><div class="bdg-fill" style="width:${pct}%;background:${col}"></div></div>
      <div class="bdg-foot">${foot}</div></div>`;
  }).join('');
}

function renderGoals(){
  $('#goalsList').innerHTML=GOALS.map(g=>{
    const pct=Math.round(g.saved/g.target*100);
    return `<div class="goal">
      <div class="goal-top"><div class="goal-ico" style="background:${g.cls}">${icon(g.icon)}</div>
        <div class="goal-name"><b>${g.name}</b><span>${g.sub}</span></div>
        <div class="goal-pct">${pct}%</div></div>
      <div class="goal-track"><div class="goal-fill" style="width:${pct}%"></div></div>
      <div class="goal-foot"><span class="muted">${money0(g.saved)} de ${money0(g.target)}</span>
        <b>Faltan ${money0(g.target-g.saved)}</b></div></div>`;
  }).join('');
}

function renderHealth(){
  $('#healthFactors').innerHTML=FACTORS.map(f=>`
    <div class="factor"><div class="factor-ico" style="background:${f.ico_bg};color:${f.ico_c}">${icon(f.icon)}</div>
      <div class="factor-body"><b>${f.name}</b>
        <div class="factor-bar"><span style="width:${f.val}%;background:${f.color}"></span></div></div>
      <div class="factor-score" style="color:${f.color}">${f.val}</div></div>`).join('');
  $('#healthTips').innerHTML=TIPS.map(t=>`<div class="tip"><div class="tip-ico">${icon(t.ic)}</div><div>${t.t}</div></div>`).join('');
}

function renderNotifs(){
  $('#notifList').innerHTML=NOTIFS.map(n=>`
    <div class="notif${n.unread?' unread':''}"><div class="notif-ico" style="background:${n.c}">${icon(n.ico)}</div>
      <div class="notif-body"><b>${n.t}</b><p>${n.p}</p><div class="notif-time">${n.time}</div></div></div>`).join('');
}

function renderMore(){
  $('#moreList').innerHTML=MORE.map(grp=>`<div class="more-grp">${grp.map(it=>`
    <button class="more-it"${it.go?` data-go="${it.go}"`:''}><div class="more-ico">${icon(it.ic)}</div><b>${it.t}</b><svg class="ic chev"><use href="#i-chev"/></svg></button>`).join('')}</div>`).join('');
}

/* ----- txn detail sheet ----- */
function openTxn(idx){
  const t=TXNS[idx], ct=CATS[t.cat], pos=t.amt>0;
  $('#txnSheetBody').innerHTML=`
    <div class="td-head"><div class="td-ico" style="background:${ct.color}">${icon(ct.icon)}</div>
      <div class="td-amt ${pos?'pos':''}">${pos?'+':'−'}${money(t.amt)}</div>
      <div class="td-name">${t.m}</div><div class="td-date">${t.day}</div></div>
    <div class="td-rows">
      <div class="td-row"><span>Categoría</span><b style="color:${ct.color}">${ct.name}</b></div>
      <div class="td-row"><span>Cuenta</span><b>${t.card}</b></div>
      <div class="td-row"><span>Estado</span><b class="pos">Confirmado ✓</b></div>
      <div class="td-row"><span>Redondeo a meta</span><b>${pos?'—':money(Math.ceil(Math.abs(t.amt))-Math.abs(t.amt))}</b></div>
    </div>
    <div class="td-actions">
      <button class="td-act">${icon('i-tag')}Recategorizar</button>
      <button class="td-act">${icon('i-split')}Dividir</button>
      <button class="td-act">${icon('i-receipt')}Ver recibo</button>
    </div>`;
  showSheet('#txnSheet');
}

/* ============================================================
   ROUTER
   ============================================================ */
const TABS = ['home','transactions','analyze','goals','more'];
let stack=['home'];
const charts = { home:false, analyze:false };

function paintView(id){
  // lazy charts
  if(id==='home'){
    sparkline($('#heroSpark'), [30,33,31,36,34,40,38,44,42,48], {color:'#7AD0FF',fill:'rgba(65,185,255,.16)'});
    donut($('#homeDonut'), SPEND.map(s=>({amt:s.amt,color:CATS[s.cat].color})));
    catList($('#homeCatList'), SPEND, SPEND.reduce((a,b)=>a+b.amt,0));
  }
  if(id==='analyze'){
    renderBars();
    donut($('#analyzeDonut'), SPEND.map(s=>({amt:s.amt,color:CATS[s.cat].color})));
    catList($('#analyzeCatList'), SPEND, SPEND.reduce((a,b)=>a+b.amt,0));
    lineChart($('#trendLine'), TREND, {color:'var(--cyan)'});
  }
}

function go(id, push=true){
  $$('.view').forEach(v=>v.classList.toggle('is-active', v.dataset.view===id));
  // tab highlight (sub-views map to their parent tab)
  const tabFor = TABS.includes(id)?id:(id==='budgets'||id==='health'?'analyze':(id==='consents'?'more':'home'));
  $$('.tab').forEach(t=>t.classList.toggle('active', t.dataset.tab===tabFor));
  // scroll top
  const v=$(`.view[data-view="${id}"]`); if(v) v.scrollTop=0;
  paintView(id);
  if(push){ if(TABS.includes(id)) stack=[id]; else stack.push(id); }
}
function back(){
  if(stack.length>1){ stack.pop(); go(stack[stack.length-1], false); }
  else go('home', false);
}

/* ----- sheets ----- */
function showSheet(sel){ $('#scrim').classList.add('show'); $(sel).classList.add('show'); }
function hideSheets(){ $('#scrim').classList.remove('show'); $$('.sheet').forEach(s=>s.classList.remove('show')); }

/* ============================================================
   EVENTOS
   ============================================================ */
document.addEventListener('click', e=>{
  const go_=e.target.closest('[data-go]'); if(go_){ go(go_.dataset.go); return; }
  const nav=e.target.closest('[data-nav]'); if(nav){ go(nav.dataset.nav); return; }
  const tab=e.target.closest('.tab'); if(tab){ go(tab.dataset.tab); return; }
  const bk=e.target.closest('[data-back]'); if(bk){ back(); return; }
  const txn=e.target.closest('[data-txn]'); if(txn){ openTxn(+txn.dataset.txn); return; }
  const chip=e.target.closest('[data-chip]'); if(chip){ renderChips(chip.dataset.chip); renderTxns(chip.dataset.chip, $('#txnSearch').value); return; }
  if(e.target.closest('#newGoalBtn')){ showSheet('#goalSheet'); return; }
  if(e.target.closest('#createGoal')){ hideSheets(); go('goals'); return; }
  if(e.target.id==='scrim'){ hideSheets(); return; }
  const pillopt=e.target.closest('.pillopt'); if(pillopt){ $$('.pill-row .pillopt').forEach(p=>p.classList.remove('active')); pillopt.classList.add('active'); }
});

// balance eye toggle
let hidden=false;
document.addEventListener('click', e=>{
  if(!e.target.closest('#eyeToggle')) return;
  hidden=!hidden;
  $$('[data-amount]').forEach(n=>{ n.textContent = hidden ? 'S/ ••••••' : 'S/ '+(+n.dataset.amount).toLocaleString('es-PE',{minimumFractionDigits:2}); });
  $('#eyeToggle').innerHTML = `<svg class="ic"><use href="#${hidden?'i-eye-off':'i-eye'}"/></svg>`;
});

// txn search
document.addEventListener('input', e=>{
  if(e.target.id==='txnSearch'){ const active=$('.chip-f.active')?.dataset.chip||'all'; renderTxns(active, e.target.value); }
});

/* ============================================================
   INIT
   ============================================================ */
function init(){
  renderAccountsRail(); renderAccountsList();
  renderChips(); renderTxns();
  renderBudgets(); renderGoals(); renderGoalsMini(); renderRecos();
  renderHealth(); renderNotifs(); renderMore(); renderConsents();
  $$('.ring').forEach(setRing);
  go('splash', false);
}
document.addEventListener('DOMContentLoaded', init);
