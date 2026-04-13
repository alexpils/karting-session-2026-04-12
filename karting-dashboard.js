const RAW = {
  Training: `Lap;K01;K02;K03;K04;K05;K06;K07;K08;K09;K10
1;81,83;75,87;85,29;78,93;78,33;74,96;71,27;72,58;84,85;83,66
2;76,07;70,72;78,39;72,92;72,94;71,6;68,81;67,8;76,24;74,48
3;76,07;71,18;76,57;74,54;71,08;70,27;67,67;70,11;75,3;73,68
4;73,07;70,51;81,74;71,3;71,39;69,77;72,88;71,64;75,96;76,45
5;72,88;70,29;79,02;71,35;71,34;69,1;74,93;67,37;74,55;72,18
6;75,49;70,08;76,61;70,59;70,7;70,8;67,76;67,6;72,37;72,72
7;71,46;69,36;76,43;70,22;71,37;69,89;68,38;66,74;71,54;70,66
8;74;70,19;81,02;70,23;74,31;69,63;67,18;66,79;71,81;72,27
9;70,43;70,11;75,04;72,7;72,22;68,88;69,27;66,92;71,07;69,55
10;70,03;69,05;73,78;69,38;69,4;68,94;67,49;66,41;70,69;68,4
11;69,9;69,15;;69,48;71,12;68,52;67,75;66,19;70,43;73,16
12;;;;;;68,94;69,12;66,92;;`,
  Qualifying: `Lap;K01;K02;K03;K04;K05;K06;K07;K08;K09;K10
1;69,41;68,12;71,08;69,72;69,8;68,01;68,15;66,2;69,96;69,51
2;96,41;73,12;83,99;74,25;73,27;73,66;73,92;75,5;79,25;71,35
3;68,47;68,97;72,47;70,53;67,99;67,99;67,74;66,07;69,14;68,39
4;68,31;67,95;70,93;71,53;69,24;67,42;66,72;65,98;68,66;69,43
5;69;68,06;72,04;68,28;68,67;67,53;66,89;66,28;68,83;69,59
6;68,71;69,15;74,89;68,99;69,93;68,02;66,78;67,53;68,89;68,75
7;68,64;68,88;71,94;68,22;68,05;67,99;66,44;65,96;69,8;68,51
8;68,46;67,99;75,16;68,45;68,73;68,67;65,98;66,47;69,03;70,55
9;68,68;67,6;72,94;68,23;68,54;67,93;67,33;65,21;69,34;68,22
10;71,05;67,05;73,63;72,02;68,49;67,65;66,01;65,85;69,29;68,19
11;68,77;68,55;72,72;67,39;68,36;67,44;69,58;66,28;69,85;69,11
12;;68,14;;67,73;69,98;68,25;65,6;65,95;;69,26`,
  Race: `Lap;K01;K02;K03;K04;K05;K06;K07;K08;K09;K10
1;80,94;81,41;79,08;81,01;80,51;80,64;81,43;82,05;80,2;80,89
2;67,46;67,17;70,52;76,88;67,64;67,88;66,64;65,45;68,07;67,85
3;68,64;67,32;71,43;69,05;69,79;66,9;65,41;65,42;68;67,55
4;68,66;67,42;69,17;67,8;70,61;67,52;66,82;68,38;69,9;68,28
5;67,11;68,25;69,69;67,42;67,19;66,75;65,94;66,67;67,06;67,2
6;66,83;67,77;69,43;68,93;67,14;67,41;67,1;66,31;67,79;67,2
7;66,85;68,31;70,64;67,37;67,05;67,03;65,94;65,6;67,03;67,3
8;68,73;66,99;72,74;68,82;66,29;67,24;65,35;65,49;67,18;67,28
9;67,11;67,15;73,81;67,97;67,1;67,3;65,09;66,06;66,75;67,39
10;67,82;66,31;72,94;67,62;67,78;67,52;65,16;65,2;68,4;69,83
11;67,84;66,84;73,78;68,03;66,42;66,44;65,21;65,73;67,27;68,93
12;66,8;66,66;77,23;66,6;66,53;66,71;68,63;67,31;67,56;67,64
13;67,1;66,35;74,05;67;66,55;66,42;65,72;65,37;68,31;68,34
14;66,94;67,03;72,92;70,54;67,12;66,9;69,25;69,14;78,6;69,31
15;66,49;67,38;73,04;67,21;66,49;67,68;65,49;65,89;67,32;66,97
16;66,84;67,11;72,04;67,01;67,18;65,87;66,49;65,96;67,88;67,78
17;66,33;67,44;;71,35;66,97;67,28;64,31;65,33;69,11;67,83`
};

const COLORS = {
  Training:'#60a5fa', Qualifying:'#34d399', Race:'#f59e0b',
  K01:'#38bdf8', K02:'#60a5fa', K03:'#818cf8', K04:'#a78bfa', K05:'#c084fc',
  K06:'#e879f9', K07:'#f472b6', K08:'#fb7185', K09:'#fb923c', K10:'#a3e635'
};

const KART_NAMES = {
  K01:'Nino',
  K02:'Bernhard',
  K03:'Marcus',
  K04:'Friedrich',
  K05:'Peter',
  K06:'Gerald',
  K07:'Stefan',
  K08:'Alex',
  K09:'Robert',
  K10:'Daniel'
};

function kartLabel(k, short=false){
  return short ? (KART_NAMES[k] || k) : `${KART_NAMES[k] || k} (${k})`;
}

function parseCsv(text){
  const lines=text.trim().split(/\r?\n/).filter(Boolean);
  const header=lines[0].split(';');
  const rows=lines.slice(1).map(line=>{
    const cells=line.split(';');
    const o={};
    header.forEach((h,i)=>o[h]=(cells[i]??'').trim());
    o.Lap=Number(o.Lap);
    for(const k of header.slice(1)) o[k]=o[k]===''?null:Number(o[k].replace(',','.'));
    return o;
  });
  return {header,rows};
}
function mean(arr){ const v=arr.filter(x=>x!=null&&!Number.isNaN(x)); return v.length?v.reduce((a,b)=>a+b,0)/v.length:null; }
function std(arr){ const v=arr.filter(x=>x!=null&&!Number.isNaN(x)); if(v.length<2) return 0; const m=mean(v); return Math.sqrt(v.reduce((s,x)=>s+(x-m)*(x-m),0)/v.length); }
function minv(arr){ const v=arr.filter(x=>x!=null&&!Number.isNaN(x)); return v.length?Math.min(...v):null; }
function fmt(v){ return v==null||Number.isNaN(v)?'—':v.toFixed(2); }
const TRACK_KM = 0.720;
function toKmh(sec){ return sec==null||Number.isNaN(sec)?null:(TRACK_KM/(sec/3600)); }
function fmtSpeed(v){ return v==null||Number.isNaN(v)?'—':v.toFixed(2)+' km/h'; }
function fmtTotalTime(sec){ if(sec==null||Number.isNaN(sec)) return '—'; const m=Math.floor(sec/60); const s=sec-m*60; return `${m}:${s.toFixed(2).padStart(5,'0')}`; }
function q(arr,p){ const v=arr.filter(x=>x!=null&&!Number.isNaN(x)).sort((a,b)=>a-b); if(!v.length) return null; const idx=(v.length-1)*p; const lo=Math.floor(idx), hi=Math.ceil(idx); if(lo===hi) return v[lo]; return v[lo]+(v[hi]-v[lo])*(idx-lo); }
function heatColor(v, lo, hi){ if(v==null) return '#111827'; const t = hi===lo?0.5:(v-lo)/(hi-lo); const hue = 130-130*t; return `hsl(${hue} 70% 25%)`; }

const DS = Object.fromEntries(Object.entries(RAW).map(([k,v])=>[k,parseCsv(v)]));
const KARTS = DS.Training.header.slice(1);
const SESSIONS = ['Training','Qualifying','Race'];
const ALL_LAP_VALUES = SESSIONS.flatMap(name => DS[name].rows.flatMap(r => KARTS.map(k => r[k]).filter(v => v != null)));
const EXPLORER_Y_MIN = Math.floor(Math.min(...ALL_LAP_VALUES) - 1);
const EXPLORER_Y_MAX = Math.ceil(Math.max(...ALL_LAP_VALUES) + 1);

function legend(names){ return `<div class="legend">${names.map(n=>`<span class="item"><span class="sw" style="background:${COLORS[n]||'#fff'}"></span>${n}</span>`).join('')}</div>`; }
function legendFromSeries(series){ return `<div class="legend">${series.map(s=>`<span class="item"><span class="sw" style="background:${s.color||'#fff'}"></span>${s.label}</span>`).join('')}</div>`; }

function lineChart(labels, series, width=760, height=280){
  const m={t:20,r:18,b:28,l:42}, iw=width-m.l-m.r, ih=height-m.t-m.b;
  const vals=series.flatMap(s=>s.data.filter(v=>v!=null));
  const y0=Math.floor(Math.min(...vals)-1), y1=Math.ceil(Math.max(...vals)+1);
  const X=i=>labels.length<=1?m.l:m.l+i*iw/(labels.length-1);
  const Y=v=>m.t+(y1-v)*ih/(y1-y0);
  let svg=`<svg viewBox="0 0 ${width} ${height}">`;
  for(let i=0;i<6;i++){
    const y=m.t+i*ih/5, val=y1-(y1-y0)*i/5;
    svg += `<line x1="${m.l}" y1="${y}" x2="${width-m.r}" y2="${y}" stroke="#334155"/>`;
    svg += `<text x="${m.l-6}" y="${y+4}" text-anchor="end" fill="#94a3b8" font-size="10">${val.toFixed(1)}</text>`;
  }
  labels.forEach((lab,i)=> svg += `<text x="${X(i)}" y="${height-8}" text-anchor="middle" fill="#94a3b8" font-size="10">${lab}</text>`);
  series.forEach(s=>{
    let d='';
    s.data.forEach((v,i)=>{ if(v==null) return; d += `${(i>0&&s.data[i-1]!=null)?'L':'M'}${X(i)},${Y(v)} `; });
    svg += `<path d="${d}" fill="none" stroke="${s.color}" stroke-width="2"/>`;
  });
  return svg + `</svg>`;
}



function singleDriverLapBar(labels, series, width=1200, height=320){
  const vals = series.flatMap(s=>s.values.filter(v=>v!=null));
  const m={t:20,r:18,b:36,l:42}, iw=width-m.l-m.r, ih=height-m.t-m.b;
  const y0=EXPLORER_Y_MIN, y1=EXPLORER_Y_MAX;
  const groups = Math.max(1, labels.length);
  const gap = iw/groups;
  const seriesCount = Math.max(1, series.length);
  const barW = Math.max(10, Math.min(28, (gap-10)/seriesCount));
  const Y=v=>m.t+(y1-v)*ih/(y1-y0);
  let svg=`<svg viewBox="0 0 ${width} ${height}">`;
  for(let i=0;i<6;i++){
    const y=m.t+i*ih/5, val=y1-(y1-y0)*i/5;
    svg += `<line x1="${m.l}" y1="${y}" x2="${width-m.r}" y2="${y}" stroke="#334155"/>`;
    svg += `<text x="${m.l-6}" y="${y+4}" text-anchor="end" fill="#94a3b8" font-size="10">${val.toFixed(1)}</text>`;
  }
  labels.forEach((lab,i)=>{
    const baseX = m.l + i*gap + (gap - (barW*seriesCount))/2;
    series.forEach((ser, si)=>{
      const v = ser.values[i];
      const x = baseX + si*barW;
      if(v!=null){
        const y = Y(v), h = m.t+ih-y;
        svg += `<rect x="${x}" y="${y}" width="${barW-2}" height="${h}" rx="4" fill="${ser.color}"/>`;
        svg += `<text x="${x+(barW-2)/2}" y="${y-6}" text-anchor="middle" fill="#e5e7eb" font-size="10">${v.toFixed(2)}</text>`;
      }
    });
    svg += `<text x="${m.l + i*gap + gap/2}" y="${height-10}" text-anchor="middle" fill="#94a3b8" font-size="10">${lab}</text>`;
  });
  return svg + `</svg>`;
}

function groupedBar(categories, series, width=980, height=320){
  const m={t:20,r:18,b:36,l:42}, iw=width-m.l-m.r, ih=height-m.t-m.b;
  const vals=series.flatMap(s=>s.data.filter(v=>v!=null));
  const y0=Math.floor(Math.min(...vals)-1), y1=Math.ceil(Math.max(...vals)+1);
  const groupW=iw/categories.length, barW=Math.min(24,(groupW-10)/series.length);
  const Y=v=>m.t+(y1-v)*ih/(y1-y0);
  let svg=`<svg viewBox="0 0 ${width} ${height}">`;
  for(let i=0;i<6;i++){
    const y=m.t+i*ih/5, val=y1-(y1-y0)*i/5;
    svg += `<line x1="${m.l}" y1="${y}" x2="${width-m.r}" y2="${y}" stroke="#334155"/>`;
    svg += `<text x="${m.l-6}" y="${y+4}" text-anchor="end" fill="#94a3b8" font-size="10">${val.toFixed(1)}</text>`;
  }
  categories.forEach((cat,gi)=>{
    const gx=m.l+gi*groupW;
    svg += `<text x="${gx+groupW/2}" y="${height-10}" text-anchor="middle" fill="#94a3b8" font-size="10">${cat}</text>`;
    series.forEach((s,si)=>{
      const v=s.data[gi]; if(v==null) return;
      const x=gx+5+si*barW, y=Y(v), h=m.t+ih-y;
      svg += `<rect x="${x}" y="${y}" width="${barW-3}" height="${h}" rx="4" fill="${s.color}"/>`;
    });
  });
  return svg + `</svg>`;
}



function horizontalGapBar(rows, width=1200, height=360){
  const m={t:20,r:80,b:20,l:180}, iw=width-m.l-m.r, ih=height-m.t-m.b;
  const vals=rows.map(r=>r.best).filter(v=>v!=null);
  const min=60, max=75;
  const barH=Math.max(16, Math.min(32, ih/Math.max(1, rows.length)-8));
  const gap=ih/Math.max(1, rows.length);
  const X=v=>m.l + (max===min?0:(v-min)*iw/(max-min));
  let svg=`<svg viewBox="0 0 ${width} ${height}">`;
  for(let i=0;i<6;i++){
    const val=min + (max-min)*i/5;
    const x=X(val);
    svg += `<line x1="${x}" y1="${m.t}" x2="${x}" y2="${height-m.b}" stroke="#334155"/>`;
    svg += `<text x="${x}" y="${height-4}" text-anchor="middle" fill="#94a3b8" font-size="10">${val.toFixed(2)}</text>`;
  }
  rows.forEach((r,i)=>{
    const y=m.t + i*gap + 4;
    const x0=m.l;
    const x1=X(r.best);
    svg += `<text x="${m.l-8}" y="${y+barH/2+4}" text-anchor="end" fill="#e5e7eb" font-size="12">${r.label}</text>`;
    svg += `<rect x="${x0}" y="${y}" width="${Math.max(2,x1-x0)}" height="${barH}" rx="5" fill="#34d399"/>`;
    svg += `<text x="${x1+8}" y="${y+barH/2+4}" fill="#e5e7eb" font-size="11">${r.best.toFixed(2)} s${i===0?'':'  (+' + (r.best-rows[0].best).toFixed(2) + ')'}</text>`;
  });
  return svg + `</svg>`;
}

function boxPlot(categories, seriesByCategory, width=980, height=300){
  const m={t:20,r:18,b:36,l:42}, iw=width-m.l-m.r, ih=height-m.t-m.b;
  const vals=seriesByCategory.flatMap(x=>x.values.filter(v=>v!=null));
  const y0=Math.floor(Math.min(...vals)-1), y1=Math.ceil(Math.max(...vals)+1);
  const groupW=iw/categories.length;
  const Y=v=>m.t+(y1-v)*ih/(y1-y0);
  let svg=`<svg viewBox="0 0 ${width} ${height}">`;
  for(let i=0;i<6;i++){
    const y=m.t+i*ih/5, val=y1-(y1-y0)*i/5;
    svg += `<line x1="${m.l}" y1="${y}" x2="${width-m.r}" y2="${y}" stroke="#334155"/>`;
    svg += `<text x="${m.l-6}" y="${y+4}" text-anchor="end" fill="#94a3b8" font-size="10">${val.toFixed(1)}</text>`;
  }
  categories.forEach((cat,i)=>{
    const cx=m.l+i*groupW+groupW/2;
    svg += `<text x="${cx}" y="${height-10}" text-anchor="middle" fill="#94a3b8" font-size="10">${cat}</text>`;
    const vals=seriesByCategory[i].values.filter(v=>v!=null).sort((a,b)=>a-b);
    if(!vals.length) return;
    const q1=q(vals,0.25), med=q(vals,0.5), q3=q(vals,0.75), lo=Math.min(...vals), hi=Math.max(...vals);
    svg += `<line x1="${cx}" y1="${Y(lo)}" x2="${cx}" y2="${Y(hi)}" stroke="${seriesByCategory[i].color}" stroke-width="2"/>`;
    svg += `<rect x="${cx-18}" y="${Y(q3)}" width="36" height="${Math.max(2,Y(q1)-Y(q3))}" fill="${seriesByCategory[i].color}" opacity="0.45" stroke="${seriesByCategory[i].color}"/>`;
    svg += `<line x1="${cx-18}" y1="${Y(med)}" x2="${cx+18}" y2="${Y(med)}" stroke="#fff" stroke-width="2"/>`;
    svg += `<line x1="${cx-10}" y1="${Y(lo)}" x2="${cx+10}" y2="${Y(lo)}" stroke="${seriesByCategory[i].color}" stroke-width="2"/>`;
    svg += `<line x1="${cx-10}" y1="${Y(hi)}" x2="${cx+10}" y2="${Y(hi)}" stroke="${seriesByCategory[i].color}" stroke-width="2"/>`;
  });
  return svg + `</svg>`;
}

const app = document.getElementById('app');

const overall = Object.fromEntries(SESSIONS.map(name=>{
  const rows=DS[name].rows;
  const vals=rows.flatMap(r=>KARTS.map(k=>r[k]).filter(v=>v!=null));
  return [name,{mean:mean(vals),best:minv(vals),std:std(vals)}];
}));
const fastest = SESSIONS.flatMap(name=>KARTS.map(k=>({name,k,v:minv(DS[name].rows.map(r=>r[k]))}))).filter(x=>x.v!=null).sort((a,b)=>a.v-b.v)[0];

app.insertAdjacentHTML('beforeend', `
  <div class="card wide"><div class="stats">
    <div class="stat"><div class="muted small">Fastest lap of the day</div><div class="big">${fmt(fastest.v)}</div><div>${fmtSpeed(toKmh(fastest.v))}</div><div>${kartLabel(fastest.k)} · ${fastest.name}</div></div>
    ${SESSIONS.map(name=>`<div class="stat"><div class="muted small">${name} (avg)</div><div class="big">${fmt(overall[name].mean)}</div><div>${fmtSpeed(toKmh(overall[name].mean))}</div><div>best ${fmt(overall[name].best)} · std ${fmt(overall[name].std)}</div></div>`).join('')}
  </div></div>
`);

// Combined performance bar chart
const bestSeries = SESSIONS.map(name=>({color:COLORS[name], data:KARTS.map(k=>minv(DS[name].rows.map(r=>r[k])))}));
const bestSpeedSeries = SESSIONS.map(name=>({color:COLORS[name], data:KARTS.map(k=>toKmh(minv(DS[name].rows.map(r=>r[k]))))}));
const avgSeries = SESSIONS.map(name=>({color:COLORS[name], data:KARTS.map(k=>mean(DS[name].rows.map(r=>r[k])))}));
const avgSpeedSeries = SESSIONS.map(name=>({color:COLORS[name], data:KARTS.map(k=>toKmh(mean(DS[name].rows.map(r=>r[k]))))}));
const consistencySeries = SESSIONS.map(name=>({color:COLORS[name], data:KARTS.map(k=>std(DS[name].rows.map(r=>r[k])))}));
app.insertAdjacentHTML('beforeend', `<div class="card wide"><h2>Performance by kart</h2><div class="toolbar"><label><input type="radio" name="perf-metric" value="best-time" checked> Best lap</label><label><input type="radio" name="perf-metric" value="best-speed"> Best speed</label><label><input type="radio" name="perf-metric" value="avg-time"> Average lap</label><label><input type="radio" name="perf-metric" value="avg-speed"> Average speed</label><label><input type="radio" name="perf-metric" value="consistency"> Consistency</label></div><div id="perf-best-time">${groupedBar(KARTS.map(k=>kartLabel(k,true)),bestSeries)}</div><div id="perf-best-speed" style="display:none"><p class="muted small">Converted from best lap on a 720 m track.</p>${groupedBar(KARTS.map(k=>kartLabel(k,true)),bestSpeedSeries)}</div><div id="perf-avg-time" style="display:none"><p class="muted small">Better measure of true pace than one hero lap.</p>${groupedBar(KARTS.map(k=>kartLabel(k,true)),avgSeries)}</div><div id="perf-avg-speed" style="display:none"><p class="muted small">Average lap speed in km/h on a 720 m track.</p>${groupedBar(KARTS.map(k=>kartLabel(k,true)),avgSpeedSeries)}</div><div id="perf-consistency" style="display:none"><p class="muted small">Lower spread = steadier laps.</p>${groupedBar(KARTS.map(k=>kartLabel(k,true)),consistencySeries)}</div>${legend(SESSIONS)}</div>`);
setTimeout(()=>{ document.querySelectorAll('input[name="perf-metric"]').forEach(el=>el.addEventListener('change', e=>{ ['best-time','best-speed','avg-time','avg-speed','consistency'].forEach(id=>{ const el=document.getElementById('perf-'+id); if(el) el.style.display = (e.target.value===id)?'block':'none'; }); })); },0);

// Boxplots grouped in one bottom row
function boxplotRow(){
  return `<div class="card wide"><h2>Session boxplots</h2><p class="muted small">All three sessions, side by side. Race excludes lap 1.</p><div class="grid">${SESSIONS.map(name=>{ const cats = KARTS.map(k=>kartLabel(k,true)); const sourceRows = name==='Race' ? DS[name].rows.filter(r=>r.Lap !== 1) : DS[name].rows; const timeData = KARTS.map(k=>({color:COLORS[name], values:sourceRows.map(r=>r[k]).filter(v=>v!=null)})); const speedData = KARTS.map(k=>({color:COLORS[name], values:sourceRows.map(r=>toKmh(r[k])).filter(v=>v!=null)})); const id = `box-${name}`; return `<div class="card"><h3>${name}</h3><div class="toolbar"><label><input type="radio" name="${id}" value="time" checked> Lap time</label><label><input type="radio" name="${id}" value="speed"> Speed</label></div><div id="${id}-time">${boxPlot(cats,timeData,760,300)}</div><div id="${id}-speed" style="display:none">${boxPlot(cats,speedData,760,300)}</div></div>`; }).join('')}</div></div>`;
}

// Ranking boards + Top-3 summary tables per session
function rankRows(name, mode, limit=null){
  const rows = KARTS.map(k=>({kart:k, label:kartLabel(k), best:minv(DS[name].rows.map(r=>r[k])), avg:mean(DS[name].rows.map(r=>r[k])), consistency:std(DS[name].rows.map(r=>r[k]))})).filter(r=>r.best!=null || r.avg!=null);
  const key = mode==='best' ? 'best' : mode==='avg' ? 'avg' : 'consistency';
  const sorted = rows.sort((a,b)=>(a[key]??999)-(b[key]??999));
  return limit ? sorted.slice(0,limit) : sorted;
}
function rankingTable(name, mode){
  const rows = rankRows(name, mode, null);
  const key = mode==='best' ? 'best' : mode==='avg' ? 'avg' : 'consistency';
  const leader = rows.length ? rows[0][key] : null;
  const valueLabel = mode==='best' ? 'Best lap' : mode==='avg' ? 'Average' : 'Std dev';
  return `<div class="card"><h3>${name}</h3><table><thead><tr><th>#</th><th>Driver</th><th>${valueLabel}</th><th>Delta to P1</th></tr></thead><tbody>${rows.map((r,i)=>{ const deltaLeader = leader!=null && r[key]!=null ? (i===0 ? '—' : '+' + fmt(r[key]-leader)) : '—'; return `<tr><td>${i+1}</td><td>${r.label}</td><td>${fmt(r[key])}</td><td>${deltaLeader}</td></tr>`; }).join('')}</tbody></table></div>`;
}
app.insertAdjacentHTML('beforeend', `<div class="card wide"><h2>Best lap ranking</h2><p class="muted small">Sorted by lap time with deltas to the session leader.</p><div class="grid">${SESSIONS.map(name=>rankingTable(name,'best')).join('')}</div></div>`);

const qualifyingRows = rankRows('Qualifying','best',null);
app.insertAdjacentHTML('beforeend', `<div class="card wide"><h2>Qualifying gaps — horizontal view</h2><p class="muted small">Same best-lap ranking, but easier to read the gaps at a glance.</p>${horizontalGapBar(qualifyingRows)}</div>`);


// Race classification by total time
function sum(arr){ const v=arr.filter(x=>x!=null&&!Number.isNaN(x)); return v.length?v.reduce((a,b)=>a+b,0):null; }
function raceClassificationTable(){
  let raceRows = KARTS.map(k=>{
    const laps = DS.Race.rows.map(r=>r[k]).filter(v=>v!=null);
    return {
      kart:k,
      label:kartLabel(k),
      laps:laps.length,
      total:sum(laps),
      avg:mean(laps),
      best:minv(laps)
    };
  }).filter(r=>r.total!=null);
  const maxLaps = raceRows.length ? Math.max(...raceRows.map(r=>r.laps)) : null;
  raceRows = raceRows.sort((a,b)=>{
    const aMismatch = maxLaps!=null && a.laps<maxLaps ? 1 : 0;
    const bMismatch = maxLaps!=null && b.laps<maxLaps ? 1 : 0;
    if (aMismatch !== bMismatch) return aMismatch - bMismatch;
    return a.total - b.total;
  });
  const winner = raceRows.find(r => maxLaps==null || r.laps===maxLaps) || raceRows[0] || null;
  const winnerTotal = winner ? winner.total : null;
  return `<div class="card wide"><h2>Race classification by total time</h2><p class="muted small">Adds up all recorded race laps per driver. Drivers with missing laps are moved to the bottom.</p><table><thead><tr><th>#</th><th>Driver</th><th>Laps</th><th>Total time</th><th>Gap to winner</th><th>Average lap</th><th>Best lap</th></tr></thead><tbody>${raceRows.map((r,i)=>`<tr><td>${i+1}</td><td>${r.label}</td><td>${r.laps}</td><td><b>${fmtTotalTime(r.total)}</b>${maxLaps!=null && r.laps<maxLaps ? ` <span class="muted small">(+${maxLaps-r.laps} lap${maxLaps-r.laps===1?'':'s'})</span>` : ''}</td><td>${(maxLaps!=null && r.laps<maxLaps) ? '—' : (winnerTotal!=null ? (r.total===winnerTotal ? '—' : '+' + fmt(r.total-winnerTotal) + ' s') : '—')}</td><td>${fmt(r.avg)}</td><td>${fmt(r.best)}</td></tr>`).join('')}</tbody></table></div>`;
}
app.insertAdjacentHTML('beforeend', raceClassificationTable());


// Race lap-by-lap analysis
function raceLapByLapTable(){
  const rows = DS.Race.rows.filter(r=>r.Lap!=null);
  const bestByKart = Object.fromEntries(KARTS.map(k=>[k, minv(rows.map(r=>r[k]))]));
  return `<div class="card wide"><h2>Race lap-by-lap analysis</h2><p class="muted small">Lap-time ranking, not actual race position. Each driver’s fastest race lap is highlighted.</p><div style="overflow:auto"><table><thead><tr><th>Lap</th><th>P1</th><th>P2</th><th>P3</th><th>P4</th><th>P5</th><th>P6</th><th>P7</th><th>P8</th><th>P9</th><th>P10</th></tr></thead><tbody>${rows.map(r=>{ const ranked = KARTS.map(k=>({kart:k,label:kartLabel(k,true),time:r[k]})).filter(x=>x.time!=null).sort((a,b)=>a.time-b.time); return `<tr><td><b>${r.Lap}</b>${r.Lap===14 ? ' <span title="Yellow flag">🟨</span>' : ''}</td>${ranked.map(x=>`<td style="${x.time===bestByKart[x.kart] ? 'background:rgba(52,211,153,.18); box-shadow: inset 0 0 0 2px rgba(52,211,153,.55);' : ''}"><div>${x.label}</div><div><b>${fmt(x.time)}s</b></div></td>`).join('')}${Array.from({length:Math.max(0,10-ranked.length)}).map(()=>'<td>—</td>').join('')}</tr>`; }).join('')}</tbody></table></div></div>`;
}
app.insertAdjacentHTML('beforeend', raceLapByLapTable());


app.insertAdjacentHTML('beforeend', boxplotRow());
document.querySelectorAll('input[name^="box-"]').forEach(el=>el.addEventListener('change', e=>{ const id = e.target.name; const t = document.getElementById(`${id}-time`); const sp = document.getElementById(`${id}-speed`); if(t&&sp){ t.style.display = e.target.value==='time'?'block':'none'; sp.style.display = e.target.value==='speed'?'block':'none'; }}));

// Session/driver lap-time explorer
function driverExplorer(){
  const sessionOptions = SESSIONS.map(s=>`<option value="${s}">${s}</option>`).join('');
  const driverOptions = KARTS.map(k=>`<option value="${k}">${kartLabel(k)}</option>`).join('');
  return `<div class="card wide"><h2>Driver lap-time explorer</h2><div class="toolbar"><label>Session <select id="explorer-session">${sessionOptions}</select></label><label>Driver 1 <select id="explorer-driver">${driverOptions}</select></label><label>Driver 2 <select id="explorer-driver-2"><option value="">None</option>${driverOptions}</select></label></div><div id="explorer-meta" class="muted small"></div><div id="explorer-chart"></div></div>`;
}
app.insertAdjacentHTML('beforeend', driverExplorer());
function renderExplorer(){
  const session = document.getElementById('explorer-session').value;
  const driver = document.getElementById('explorer-driver').value;
  const driver2 = document.getElementById('explorer-driver-2').value;
  const rows = DS[session].rows;
  const labels = rows.map(r=>`L${r.Lap}`);
  const values1 = rows.map(r=>r[driver]);
  const series = [{label:kartLabel(driver,true), values:values1, color:'#60a5fa'}];
  let meta = `${kartLabel(driver)} · best ${fmt(minv(values1))} · avg ${fmt(mean(values1))}`;
  if(driver2 && driver2 !== driver){
    const values2 = rows.map(r=>r[driver2]);
    series.push({label:kartLabel(driver2,true), values:values2, color:'#f59e0b'});
    meta += ` &nbsp; | &nbsp; ${kartLabel(driver2)} · best ${fmt(minv(values2))} · avg ${fmt(mean(values2))}`;
  }
  document.getElementById('explorer-meta').innerHTML = `${session} · ${meta} · fixed y-axis`;
  document.getElementById('explorer-chart').innerHTML = singleDriverLapBar(labels, series) + legendFromSeries(series);
}
setTimeout(()=>{
  document.getElementById('explorer-session').addEventListener('change', renderExplorer);
  document.getElementById('explorer-driver').addEventListener('change', renderExplorer);
  document.getElementById('explorer-driver-2').addEventListener('change', renderExplorer);
  renderExplorer();
},0);
