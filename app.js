/* Interface mobile-first sem dependências externas; progresso apenas neste navegador. */
(function(){
"use strict";
const banco=Array.isArray(window.BANCO_QUESTOES)?window.BANCO_QUESTOES:[];
const root=document.getElementById("app");
const home=document.getElementById("homeBtn");
const chave="prova-keity-dados-v1";
const safe=(s)=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function load(){try{const d=JSON.parse(localStorage.getItem(chave));return d&&typeof d==="object"?d:{tentativas:{},favoritos:[],simulados:[]};}catch(e){return {tentativas:{},favoritos:[],simulados:[]};}}
let store=load();store.tentativas=store.tentativas||{};store.favoritos=store.favoritos||[];store.simulados=store.simulados||[];
let tela="inicio",tipoSetup="Português",sessao=null,resultado=null;
const list=(arr)=>arr.map(x=>x.id);
const byId=(id)=>banco.find(q=>q.id===id);
const count=(fn)=>banco.filter(fn).length;
const shuffle=(arr)=>{const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const save=()=>{try{localStorage.setItem(chave,JSON.stringify(store));}catch(e){}};
const h=(s)=>safe(s);
function stats(){const tent=Object.entries(store.tentativas);return {feitas:tent.length,certas:tent.filter(([id,v])=>v.correta).length,erradas:tent.filter(([id,v])=>!v.correta).length};}
function button(text,action,cls,extra){return '<button type="button" class="btn '+(cls||"")+'" data-action="'+h(action)+'" '+(extra||"")+'>'+h(text)+'</button>';}
function cabeca(title,sub){return '<section class="section-title"><h2>'+h(title)+'</h2></section>'+(sub?'<p class="muted small">'+h(sub)+'</p>':"");}
function miniCard(ico,title,sub,acao){return '<button class="card action" data-action="'+h(acao)+'"><span class="sym">'+ico+'</span><div><h3>'+h(title)+'</h3><p>'+h(sub)+'</p></div><span class="arrow">Começar →</span></button>';}
function voltar(){tela="inicio";sessao=null;resultado=null;render();}
function renderInicio(){
const s=stats(),pct=Math.round(s.feitas/banco.length*100),taxa=s.feitas?Math.round(s.certas/s.feitas*100):0;
root.innerHTML='<div class="hero"><span class="eyebrow">Sua preparação começa aqui</span><h1>Rumo à sua aprovação.</h1><p>Questões inéditas com explicação, treino por assunto e simulado no formato do edital de Tapiraí.</p><div class="hero-stat"><div><strong>100</strong><br><span>Português</span></div><div><strong>100</strong><br><span>Matemática e Lógica</span></div><div><strong>40</strong><br><span>questões no simulado</span></div></div></div>'
+cabeca("Escolha como estudar")
+'<div class="grid2">'+miniCard("📖","Português","Interpretação, gramática e redação.","setupPort")+miniCard("🔢","Matemática e Lógica","Contas, geometria, funções e problemas.","setupMat")+miniCard("⏱️","Simulado de prova","40 questões: 20 de cada disciplina.","simulado")+miniCard("🔁","Revisar erros","Repetir o que você errou.","erros")+'</div>'
+cabeca("Seu progresso")
+'<div class="card"><div class="summary-row"><span>Questões já respondidas</span><strong>'+s.feitas+' / '+banco.length+'</strong></div><div class="bar"><span style="width:'+pct+'%"></span></div><div class="grid2"><div><div class="kpi">'+taxa+'%</div><div class="kpi-sub">acerto nas últimas respostas</div></div><div><div class="kpi">'+s.erradas+'</div><div class="kpi-sub">questões para revisar</div></div></div></div>'
+cabeca("Mais opções")
+'<div class="stack">'+button("Explorar as 200 questões","biblioteca","secondary")+button("Estudar favoritas ("+store.favoritos.length+")","favoritas")+button("Ver último simulado","ultimo","")+'</div>'
+'<p class="note" style="margin-top:16px">Seu progresso é salvo somente neste navegador. Se trocar de celular ou limpar os dados do navegador, o histórico não será transferido. Nenhum cadastro é necessário.</p>';
}
function renderSetup(){
const temaList=[...new Set(banco.filter(q=>q.area===tipoSetup).map(q=>q.tema))].sort((a,b)=>a.localeCompare(b,"pt-BR"));
root.innerHTML=cabeca(tipoSetup==="Português"?"Treinar Português":"Treinar Matemática e Lógica","Escolha um assunto ou estude uma seleção variada de questões.")
+'<div class="card"><div class="selectrow"><div><label for="tema">Assunto</label><select id="tema"><option value="">Todos os assuntos</option>'+temaList.map(t=>'<option value="'+h(t)+'">'+h(t)+'</option>').join("")+'</select></div><div><label for="quant">Número de questões</label><select id="quant"><option value="10">10 questões</option><option value="20" selected>20 questões</option><option value="40">40 questões</option><option value="0">Todas as disponíveis</option></select></div></div><div class="controls">'+button("Iniciar treinamento","iniciar","primary")+button("Voltar ao início","inicio")+'</div></div>'
+'<p class="note" style="margin-top:12px">No treino, você vê a explicação logo após responder. O sistema sorteia questões do assunto escolhido. Para percorrer o banco completo, use “Explorar as 200 questões” na tela inicial.</p>';
}
function iniciaTreino(lista,nome,limite){if(!lista.length){root.innerHTML='<div class="card"><h2>Sem questões disponíveis</h2><p class="muted">Responda algumas perguntas primeiro ou escolha outro assunto.</p>'+button("Voltar","inicio","primary")+'</div>';return;}
  const ids=shuffle(list(lista)).slice(0,limite&&limite>0?limite:lista.length);sessao={tipo:"treino",nome,ids,pos:0,respostas:{},iniciada:Date.now()};tela="questao";render();
}
function iniciaSimulado(){
  const p=shuffle(banco.filter(q=>q.area==="Português")).slice(0,20),m=shuffle(banco.filter(q=>q.area==="Matemática")).slice(0,20);
  sessao={tipo:"simulado",nome:"Simulado completo",ids:shuffle(list(p.concat(m))),pos:0,respostas:{},iniciada:Date.now(),duracao:180*60*1000};tela="questao";render();
}
function ordem(){return sessao&&sessao.ids?sessao.ids.map(id=>byId(id)).filter(Boolean):[];}
function tempo(){if(!sessao||sessao.tipo!=="simulado")return "";const restante=Math.max(0,sessao.iniciada+sessao.duracao-Date.now());const min=Math.floor(restante/60000),sec=Math.floor(restante/1000)%60;return String(Math.floor(min/60)).padStart(2,"0")+":"+String(min%60).padStart(2,"0")+":"+String(sec).padStart(2,"0");}
function renderQuestao(){
  if(!sessao)return voltar();const q=byId(sessao.ids[sessao.pos]);if(!q)return voltar();
  const respondida=sessao.respostas[q.id],isExam=sessao.tipo==="simulado",has=typeof respondida==="number",fav=store.favoritos.includes(q.id);
  const progress=(sessao.pos+1)/sessao.ids.length*100;
  const op=q.alternativas.map((a,i)=>{const selected=has&&respondida===i;
    const correct=!isExam&&has&&i===q.correta,wrong=!isExam&&selected&&i!==q.correta;
    const cls=[selected?"selected":"",correct?"correct":"",wrong?"wrong":""].join(" ");
    return '<button class="option '+cls+'" data-action="escolher" data-choice="'+i+'" '+(!isExam&&has?"disabled":"")+' aria-pressed="'+(selected?"true":"false")+'"><span class="letter">'+["A","B","C","D"][i]+'</span><span>'+h(a)+'</span></button>';}).join("");
  root.innerHTML='<div class="quiz-head"><div><span class="pill">'+h(q.area)+'</span> <small>'+h(q.tema)+'</small></div><small>'+(isExam?'Tempo <strong id="cronometro">'+tempo()+'</strong>':'Treino comentado')+'</small></div>'
  +'<div class="bar"><span style="width:'+progress+'%"></span></div>'
  +'<div class="row between"><span class="meta">Questão '+(sessao.pos+1)+' de '+sessao.ids.length+' · '+h(q.id)+'</span><span class="meta">'+Object.keys(sessao.respostas).length+' respondidas</span></div>'
  +'<div class="card" style="margin-top:12px">'+(q.texto?'<div class="passage">'+h(q.texto)+'</div>':"")
  +'<div class="question">'+h(q.enunciado)+'</div><div class="options">'+op+'</div>'
  +(!isExam&&has?'<div class="feedback '+(respondida===q.correta?"ok":"bad")+'"><strong>'+(respondida===q.correta?"✓ Você acertou!":"Resposta correta: "+["A","B","C","D"][q.correta]+") "+h(q.alternativas[q.correta]))+'</strong><p>'+h(q.explicacao)+'</p></div>':"")
  +'<div class="controls">'+button(fav?"★ Favorita":"☆ Favoritar","favoritar","")+button("← Anterior","anterior","",sessao.pos===0?"disabled":"")+
  button(sessao.pos===sessao.ids.length-1?(isExam?"Entregar simulado":"Ver resultado"):"Próxima →","proxima","primary")+'</div>'
  +(isExam?'<p class="muted small">O gabarito e as explicações aparecem apenas depois de entregar o simulado.</p>':'<p class="muted small">No treino, selecione uma resposta para receber a explicação; depois avance.</p>')
  +'</div><div class="controls">'+button("Sair para o início","inicio","ghost")+'</div>';
}
function marcaResposta(n){
 if(!sessao||tela!=="questao")return;
 const id=sessao.ids[sessao.pos],q=byId(id);
 if(sessao.tipo==="treino"&&typeof sessao.respostas[id]==="number")return;
 sessao.respostas[id]=n;
 if(sessao.tipo==="treino"){store.tentativas[id]={correta:n===q.correta,escolha:n,em:Date.now()};save();}
 renderQuestao();
}
function termina(){
 if(!sessao)return;
 const qs=ordem(),res=sessao.respostas,feitas=qs.filter(q=>typeof res[q.id]==="number"),certas=feitas.filter(q=>res[q.id]===q.correta),erros=feitas.filter(q=>res[q.id]!==q.correta),vazias=qs.filter(q=>typeof res[q.id]!=="number");
 if(sessao.tipo==="simulado"){for(const q of feitas)store.tentativas[q.id]={correta:res[q.id]===q.correta,escolha:res[q.id],em:Date.now()};store.simulados.unshift({em:Date.now(),certas:certas.length,total:qs.length});store.simulados=store.simulados.slice(0,15);save();}
 resultado={tipo:sessao.tipo,questoes:qs,respostas:{...res},certas,erros,vazias};tela="resultado";sessao=null;render();
}
function renderResultado(){
 const r=resultado;if(!r)return voltar();const isExam=r.tipo==="simulado",n=r.questoes.length,certas=r.certas.length;
 const percent=n?Math.round(certas/n*100):0;const math=r.questoes.filter(q=>q.area==="Matemática"),port=r.questoes.filter(q=>q.area==="Português");
 const cp=port.filter(q=>r.respostas[q.id]===q.correta).length,cm=math.filter(q=>r.respostas[q.id]===q.correta).length;
 let out='<div class="card result"><span class="eyebrow" style="color:#426b97">Treinamento concluído</span><h2>'+ (isExam?"Resultado do simulado":"Resultado do treino")+'</h2><div class="kpi">'+(isExam?(certas*2.5).toLocaleString("pt-BR",{maximumFractionDigits:1})+" / 100":certas+" / "+n)+'</div><p>'+percent+'% de acertos • '+r.vazias.length+' sem resposta</p>'
  +'<div class="grid2"><div class="panel">Português<br><strong>'+cp+' / '+port.length+'</strong></div><div class="panel">Matemática<br><strong>'+cm+' / '+math.length+'</strong></div></div>'
  +'<div class="controls" style="justify-content:center">'+button("Voltar ao início","inicio","primary")+button("Revisar os erros","verErrosSessao","secondary")+'</div></div>';
 const revisar=r.erros.concat(r.vazias);
 out+=cabeca("Correção comentada","Erros e questões em branco: "+revisar.length+".");
 if(!revisar.length)out+='<div class="note">Parabéns! Nenhuma questão incorreta neste treino.</div>';
 out+='<div class="card">'+revisar.map(q=>{const esc=r.respostas[q.id],resp=typeof esc==="number"?["A","B","C","D"][esc]+") "+q.alternativas[esc]:"Não respondida";return '<div class="reviewItem"><span class="pill">'+h(q.id)+' · '+h(q.tema)+'</span><p><strong>'+h(q.enunciado)+'</strong></p><p>Sua resposta: '+h(resp)+'</p><p><strong>Correta: '+["A","B","C","D"][q.correta]+") "+h(q.alternativas[q.correta])+'</strong></p><p>'+h(q.explicacao)+'</p></div>';}).join("")+'</div>';
 root.innerHTML=out;
}
function renderBiblioteca(){
 const t=stats();root.innerHTML=cabeca("Banco completo","200 questões de estudo, sem cobrança de conhecimentos específicos.")+
 '<div class="card"><p>Você pode percorrer as <strong>100 questões de Português</strong> e as <strong>100 de Matemática e Lógica</strong>. O progresso fica guardado no celular.</p><div class="controls">'+button("Português — 100","bibliotecaPort","primary")+button("Matemática — 100","bibliotecaMat","secondary")+'</div><p class="muted small">A ordem é sorteada para variar a prática. Respondidas até agora: '+t.feitas+'.</p>'+button("Voltar","inicio")+'</div>';
}
function render(){
 if(!banco.length){root.innerHTML='<div class="card"><h2>Erro ao carregar questões</h2><p>Verifique a conexão e atualize a página. Se persistir, informe o mantenedor.</p></div>';return;}
 if(tela==="inicio")renderInicio();
 else if(tela==="setup")renderSetup();
 else if(tela==="questao")renderQuestao();
 else if(tela==="resultado")renderResultado();
 else if(tela==="biblioteca")renderBiblioteca();
}
root.addEventListener("click",function(ev){
 const el=ev.target.closest("button[data-action]");if(!el||el.disabled)return;
 const action=el.dataset.action;
 if(action==="inicio"){voltar();return;}
 if(action==="setupPort"||action==="setupMat"){tipoSetup=action==="setupPort"?"Português":"Matemática";tela="setup";render();}
 else if(action==="iniciar"){const tema=document.getElementById("tema").value,lim=Number(document.getElementById("quant").value);iniciaTreino(banco.filter(q=>q.area===tipoSetup&&(!tema||q.tema===tema)),tipoSetup,lim);}
 else if(action==="simulado"){iniciaSimulado();}
 else if(action==="biblioteca"){tela="biblioteca";render();}
 else if(action==="bibliotecaPort"||action==="bibliotecaMat"){const a=action==="bibliotecaPort"?"Português":"Matemática";iniciaTreino(banco.filter(q=>q.area===a),a,0);}
 else if(action==="escolher"){marcaResposta(Number(el.dataset.choice));}
 else if(action==="proxima"){if(!sessao)return;if(sessao.pos<sessao.ids.length-1){sessao.pos++;renderQuestao();window.scrollTo({top:0,behavior:"instant"});}else if(sessao.tipo==="simulado"&&Object.keys(sessao.respostas).length<sessao.ids.length){if(window.confirm("Ainda há questões sem resposta. Deseja entregar o simulado mesmo assim?"))termina();}else termina();}
 else if(action==="anterior"){if(sessao&&sessao.pos>0){sessao.pos--;renderQuestao();window.scrollTo(0,0);}}
 else if(action==="favoritar"){if(!sessao)return;const id=sessao.ids[sessao.pos];store.favoritos=store.favoritos.includes(id)?store.favoritos.filter(x=>x!==id):store.favoritos.concat(id);save();renderQuestao();}
 else if(action==="erros"){iniciaTreino(banco.filter(q=>store.tentativas[q.id]&&!store.tentativas[q.id].correta),"Revisar erros",0);}
 else if(action==="favoritas"){iniciaTreino(banco.filter(q=>store.favoritos.includes(q.id)),"Favoritas",0);}
 else if(action==="ultimo"){const v=store.simulados[0];root.innerHTML=v?'<div class="card"><h2>Último simulado</h2><div class="kpi">'+(v.certas*2.5).toLocaleString("pt-BR")+' pontos</div><p>'+v.certas+' de '+v.total+' questões acertadas em '+new Date(v.em).toLocaleDateString("pt-BR")+'.</p>'+button("Voltar","inicio","primary")+'</div>':'<div class="card"><h2>Você ainda não concluiu um simulado.</h2>'+button("Começar um simulado","simulado","primary")+' '+button("Voltar","inicio")+'</div>';}
 else if(action==="verErrosSessao"){if(!resultado)return;iniciaTreino(resultado.erros.concat(resultado.vazias),"Revisão do simulado",0);}
});
home.addEventListener("click",voltar);
setInterval(function(){if(sessao&&sessao.tipo==="simulado"&&tela==="questao"){const el=document.getElementById("cronometro");if(el)el.textContent=tempo();if(Date.now()>=sessao.iniciada+sessao.duracao)termina();}},1000);
render();
})();