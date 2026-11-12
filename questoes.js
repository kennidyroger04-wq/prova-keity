/* 200 questões inéditas de treino baseadas nas duas disciplinas do Anexo II (Tapiraí PSPMT 003/2026). Material NÃO oficial da banca. */
(function(){
"use strict";
const banco=[];
function add(area,tema,enunciado,alternativas,correta,explicacao,texto){
  if(!Array.isArray(alternativas)||alternativas.length!==4||new Set(alternativas).size!==4||correta<0||correta>3||!explicacao)throw Error("Questão inválida: "+enunciado);
  banco.push({id:(area==="Português"?"P":"M")+String(banco.filter(x=>x.area===area).length+1).padStart(3,"0"),area,tema,enunciado,alternativas,correta,explicacao,texto:texto||""});
}
const textos=[
["Na unidade de saúde do bairro, a equipe passou a organizar palestras curtas antes da abertura dos atendimentos. A ideia não era substituir as consultas, mas orientar os moradores sobre hábitos preventivos. Depois de dois meses, a participação aumentou, sobretudo porque os encontros passaram a ocorrer também aos sábados.",[
["Qual é a ideia central do texto?",["As palestras substituíram as consultas.","A unidade ampliou ações de orientação preventiva.","A unidade deixou de atender nos sábados.","Os moradores rejeitaram as palestras."],1,"A proposta foi ampliar a orientação, não substituir consultas."],
["O que contribuiu para ampliar a participação?",["A suspensão de consultas.","A redução das palestras.","A oferta de encontros aos sábados.","A cobrança de ingresso."],2,"O texto relaciona o aumento de participação aos encontros aos sábados."],
["A expressão 'sobretudo porque' introduz:",["uma razão destacada.","uma oposição.","um exemplo sem relação.","uma hipótese impossível."],0,"'Porque' introduz causa; 'sobretudo' reforça a importância dessa causa."],
["Pode-se concluir que as palestras:",["eram exclusivas para profissionais.","tratavam apenas de medicamentos.","não eram obrigatórias para consultas.","complementavam os atendimentos."],3,"'Não era substituir as consultas' indica caráter complementar."],
["A palavra 'preventivos' refere-se a hábitos que:",["ajudam a evitar problemas.","exigem internação.","são praticados só após uma doença.","dispensam todo cuidado profissional."],0,"Prevenção é agir antes para reduzir riscos."]],
],
["Um grupo de moradores transformou um terreno vazio em horta comunitária. Em vez de comprar adubo industrial em todas as etapas, os participantes passaram a produzir composto com resíduos vegetais. A colheita é dividida entre as famílias, enquanto parte das verduras é doada a uma cozinha solidária.",[
["O texto apresenta principalmente:",["uma disputa por terrenos.","uma iniciativa coletiva de cultivo e partilha.","uma loja de fertilizantes.","o fechamento de uma cozinha."],1,"A horta envolve cultivo, compostagem, divisão e doação."],
["Qual material é utilizado na produção do composto?",["Resíduos vegetais.","Vidro triturado.","Plástico descartável.","Combustível."],0,"O texto menciona expressamente resíduos vegetais."],
["A expressão 'Em vez de' estabelece ideia de:",["finalidade.","consequência.","substituição de uma prática por outra.","condição."],2,"Os moradores trocaram parte do uso de adubo comprado pela compostagem."],
["O uso de 'enquanto' no final expressa:",["oposição absoluta.","ações que coexistem.","uma ordem de proibição.","uma dúvida sobre a doação."],1,"Parte da produção vai às famílias e outra parte à cozinha solidária."],
["Qual informação NÃO aparece no texto?",["O terreno estava vazio.","Há divisão da colheita.","Há doação de verduras.","A horta utiliza irrigação automática."],3,"Não há qualquer menção à irrigação automática."]]
],
["A biblioteca municipal criou um clube de leitura para jovens e adultos. No primeiro mês, os encontros foram pouco frequentados; por isso, a equipe passou a divulgar relatos dos participantes. Aos poucos, novos leitores começaram a aparecer, e o grupo decidiu manter reuniões quinzenais.",[
["Qual dificuldade inicial é mencionada?",["Falta de livros novos.","Pouca frequência aos encontros.","Ausência de espaço físico.","Mudança de endereço."],1,"A baixa presença no primeiro mês motivou a divulgação."],
["A expressão 'por isso' indica:",["causa.","comparação.","consequência.","dúvida."],2,"A divulgação foi consequência da baixa participação."],
["'Quinzenais' significa que as reuniões ocorrem:",["a cada quinze dias.","todos os dias.","uma vez por ano.","a cada três meses."],0,"Quinzenal equivale ao intervalo de aproximadamente quinze dias."],
["O texto permite inferir que a divulgação:",["fechou a biblioteca.","impediu reuniões.","reduziu os livros.","ajudou a atrair novos leitores."],3,"Após a divulgação, a frequência cresceu."],
["A expressão 'Aos poucos' transmite ideia de:",["mudança gradual.","transformação instantânea.","negação.","exclusão."],0,"A chegada de leitores aconteceu de modo progressivo."]]
],
["Uma cooperativa de transporte passou a divulgar horários atualizados de ônibus por meio de painéis nas paradas. Embora os veículos continuassem sujeitos ao trânsito, os passageiros puderam planejar melhor suas viagens. A medida foi bem recebida, mas algumas pessoas pediram informações também em papel.",[
["O benefício destacado é:",["eliminar todos os atrasos.","facilitar o planejamento das viagens.","reduzir a quantidade de linhas.","dispensar os motoristas."],1,"Os painéis tornaram os horários conhecidos, permitindo planejamento."],
["'Embora' introduz uma ideia de:",["adição.","causa.","concessão.","finalidade."],2,"A oração reconhece uma limitação sem anular o benefício."],
["A medida resolveu completamente os atrasos?",["Sim, o trânsito deixou de existir.","Sim, os ônibus ficaram gratuitos.","Não, porque todas as viagens foram suspensas.","Não, os ônibus ainda sofriam efeitos do trânsito."],3,"O texto afirma que veículos continuavam sujeitos ao trânsito."],
["Qual demanda adicional foi feita?",["Informação impressa.","Novas rodovias.","Passagens sem custo.","Fechamento das paradas."],0,"Alguns passageiros solicitaram informações também em papel."],
["O termo 'mas' estabelece relação de:",["explicação.","contraste.","conclusão.","tempo."],1,"A avaliação foi positiva, mas existia uma solicitação complementar."]]
],
["Durante uma campanha de economia de energia, a escola substituiu lâmpadas antigas e orientou os alunos a desligar aparelhos que não estivessem em uso. A direção observou queda no consumo nos meses seguintes. Mesmo assim, explicou que uma comparação mais longa seria necessária para avaliar os resultados.",[
["A atitude da direção revela:",["certeza absoluta sobre a causa da queda.","necessidade de avaliar dados por mais tempo.","desinteresse pela economia.","decisão de abandonar a campanha."],1,"A direção considera a queda positiva, mas pede acompanhamento mais longo."],
["Quais ações foram tomadas?",["Construção de um reservatório.","Compra de computadores para todas as salas.","Troca de lâmpadas e orientação de uso.","Suspensão das atividades."],2,"São as duas medidas citadas no primeiro período."],
["A expressão 'Mesmo assim' equivale, nesse contexto, a:",["entretanto.","portanto.","porque.","desde que."],0,"Introduz ressalva à observação da queda no consumo."],
["O verbo 'observou' está no:",["futuro do presente.","presente.","imperativo.","pretérito perfeito."],3,"'Observou' indica fato concluído no passado."],
["O texto permite afirmar que:",["a campanha reuniu medidas técnicas e educativas.","o consumo aumentou continuamente.","a escola instalou painéis solares.","o resultado foi medido por uma década."],0,"A troca de lâmpadas é técnica e a orientação dos alunos é educativa."]]
],
["A praça central recebeu rampas de acesso e bancos em locais sombreados. A reforma também incluiu placas com letras maiores. Os responsáveis afirmaram que as mudanças buscavam facilitar o uso do espaço por pessoas com diferentes necessidades, sem restringir a circulação dos demais visitantes.",[
["O objetivo principal das mudanças é:",["limitar o acesso aos bancos.","melhorar a acessibilidade e o conforto.","reduzir o espaço público.","privatizar a praça."],1,"Rampas, bancos e placas ampliam o uso por diferentes pessoas."],
["As placas foram alteradas para ter:",["letras menores.","informações em língua estrangeira.","letras maiores.","apenas desenhos."],2,"O texto diz expressamente 'placas com letras maiores'."],
["A expressão 'sem restringir' indica que a reforma:",["não deveria limitar outros visitantes.","seria temporária.","proibiria a entrada de crianças.","retiraria todos os bancos."],0,"A proposta busca inclusão sem excluir demais usuários."],
["Qual item NÃO foi mencionado?",["Rampas.","Bancos.","Placas.","Elevadores."],3,"O texto menciona três estruturas, mas não elevadores."],
["O plural de 'central', quando adjetiva 'praças', é:",["centrals.","centrais.","centraus.","centralis."],1,"Adjetivos terminados em -al geralmente fazem plural em -ais: centrais."]]
],
["Em uma trilha ambiental, novos avisos passaram a indicar a distância até a cachoeira e os cuidados necessários para caminhar com segurança. Os monitores recomendaram que os visitantes levassem água e respeitassem a sinalização. A trilha permaneceu aberta, exceto durante períodos de chuva intensa.",[
["Por que novos avisos foram instalados?",["Para proibir fotografias.","Para orientar distância e segurança.","Para vender água.","Para encerrar a trilha definitivamente."],1,"Os avisos informam distância e cuidados."],
["Em qual condição a trilha não ficava aberta?",["Durante o verão inteiro.","Quando havia poucos visitantes.","Em períodos de chuva intensa.","Às segundas-feiras."],2,"A exceção expressa é chuva intensa."],
["A palavra 'exceto' indica:",["exclusão ou ressalva.","soma.","repetição.","intensidade."],0,"Marca uma situação que não segue a regra geral."],
["Qual recomendação foi feita?",["Não levar nenhum objeto.","Ignorar os avisos.","Andar apenas à noite.","Levar água e respeitar a sinalização."],3,"São as orientações atribuídas aos monitores."],
["A finalidade predominante do texto é:",["informar sobre ações de orientação em uma trilha.","narrar uma disputa entre monitores.","explicar o custo da cachoeira.","divulgar uma competição esportiva."],0,"O texto informa mudanças e recomendações de segurança."]]
],
["Para organizar melhor as compras, uma pequena loja começou a registrar semanalmente os produtos mais procurados. O relatório revelou que a procura por certos itens aumentava antes dos feriados. Com isso, o proprietário passou a ajustar os pedidos, evitando tanto a falta quanto o excesso de mercadorias.",[
["A finalidade do registro semanal era:",["controlar o transporte público.","melhorar o planejamento das compras.","substituir todos os funcionários.","impedir a venda em feriados."],1,"Os registros serviram para ajustar os pedidos."],
["O comportamento identificado foi:",["a procura era sempre igual.","os clientes só compravam à noite.","alguns itens vendiam mais antes dos feriados.","não havia demanda por produtos."],2,"A variação antes dos feriados é expressa no texto."],
["'Com isso' introduz:",["um resultado da análise.","uma contradição sem relação.","uma pergunta.","um fato anterior às anotações."],0,"Após identificar o padrão, o proprietário ajustou os pedidos."],
["Que problemas o ajuste buscava evitar?",["Somente o aumento de salários.","Somente o atraso de entregas.","Somente o pagamento à vista.","Falta e excesso de mercadorias."],3,"A frase final menciona ambos os extremos."],
["O termo 'semanalmente' expressa:",["modo.","frequência temporal.","lugar.","negação."],1,"Indica que o registro ocorre a cada semana."]]
],
["Um curso gratuito ensinou adultos a identificar mensagens falsas na internet. Os instrutores recomendaram verificar a fonte, a data e o contexto antes de compartilhar conteúdos. Ao final, os participantes disseram que passariam a conferir informações recebidas em grupos de mensagens.",[
["O tema central é:",["segurança no trânsito.","verificação de informações digitais.","alimentação escolar.","transporte de mercadorias."],1,"O curso trata de avaliar a confiabilidade de mensagens."],
["Qual atitude foi recomendada?",["Compartilhar tudo rapidamente.","Confiar apenas em títulos.","Conferir fonte, data e contexto.","Excluir todo aplicativo de mensagens."],2,"São exatamente os três elementos apresentados."],
["A expressão 'antes de' indica:",["anterioridade temporal.","oposição.","condição impossível.","semelhança."],0,"A conferência precisa acontecer antes do compartilhamento."],
["Os participantes afirmaram que:",["deixariam de usar internet.","passariam a produzir notícias.","usariam apenas redes abertas.","verificariam conteúdos recebidos."],3,"A intenção final foi conferir informações antes de repassá-las."],
["'Gratuito' significa:",["sem custo para o participante.","necessariamente obrigatório.","pago em parcelas.","exclusivo para crianças."],0,"Gratuito é aquilo pelo qual não se cobra pagamento."]]
],
["Os moradores de uma rua organizaram pontos de coleta de materiais recicláveis. No início, parte do material era descartada incorretamente, pois faltavam orientações claras. Depois da instalação de cartazes com exemplos, os erros diminuíram, e a equipe decidiu manter a comunicação visual.",[
["Qual problema existia inicialmente?",["Ausência total de moradores.","Descarte incorreto de materiais.","Excesso de cartazes.","Falta de coleta de água."],1,"A dificuldade relatada era a separação incorreta de recicláveis."],
["O termo 'pois' introduz:",["conclusão.","oposição.","explicação causal.","comparação."],2,"A falta de orientações explica os erros de descarte."],
["O que ajudou a reduzir os erros?",["Cartazes com exemplos.","Fechamento dos pontos.","Cobrança de multas.","Redução de moradores."],0,"Os erros diminuíram depois da instalação dos cartazes."],
["Que decisão foi tomada ao final?",["Substituir todos os materiais.","Retirar as lixeiras.","Encerrar as orientações.","Manter a comunicação visual."],3,"A decisão aparece expressamente na última oração."],
["A sequência temporal do texto é:",["orientações, redução de erros, descarte inicial.","descarte incorreto, cartazes, redução de erros.","redução de erros, descarte incorreto, cartazes.","cartazes, descarte incorreto, ausência de orientação."],1,"Primeiro houve erros, depois os cartazes e finalmente a diminuição dos erros."]]
]
];
for(const t of textos)for(const v of t[1])add("Português","Interpretação de texto",v[0],v[1],v[2],v[3],t[0]);
const g=[
["Crase","Assinale a frase em que o uso da crase está correto.",["Cheguei à escola cedo.","Entreguei o livro à Pedro.","Fui à pé para casa.","Começou à chover."],0,"Há crase em 'à escola': preposição a exigida por chegar + artigo feminino a."],
["Crase","Em qual alternativa a crase é obrigatória?",["Vou a trabalhar.","Referiu-se à professora.","Entreguei a documentação a ela.","Retornarei a qualquer hora."],1,"Referir-se rege a; 'professora' admite artigo a: à professora."],
["Crase","Complete: 'A reunião ocorrerá ___ oito horas'.",["as","a","às","há"],2,"A indicação de horário determinado normalmente recebe artigo e preposição: às oito horas."],
["Crase","Assinale a opção SEM erro de crase.",["À partir de amanhã, haverá aula.","Vou à pé.","Agradeço à você.","Dirigiu-se àquela sala."],3,"Àquela resulta de preposição a + pronome demonstrativo aquela."],
["Crase","Complete: 'Ela voltou ___ cidade onde nasceu'.",["à","há","ás","a"],0,"Voltar a + a cidade: à cidade."],
["Concordância verbal","Qual frase apresenta concordância verbal correta?",["Fazem dois anos que ele saiu.","Faz dois anos que ele saiu.","Houveram mudanças ontem.","Existe muitas vagas."],1,"'Fazer' indicando tempo decorrido é impessoal: faz dois anos."],
["Concordância verbal","Assinale a frase correta.",["Os aluno chegou cedo.","A equipe chegaram cedo.","Os agentes chegaram cedo.","Nós chegou cedo."],2,"O verbo concorda com o sujeito plural 'os agentes'."],
["Concordância verbal","Marque a alternativa correta.",["Houveram dúvidas.","Haviam muitas pessoas na fila.","Existia muitos problemas.","Havia muitas pessoas na fila."],3,"'Haver' no sentido de existir é impessoal e fica no singular."],
["Concordância verbal","Qual alternativa está correta?",["Existem soluções possíveis.","Existe soluções possíveis.","As soluções existe.","Há soluções possíveis e existem problema."],0,"O verbo existir concorda com o sujeito plural: existem soluções."],
["Concordância verbal","Complete: 'Nem o diretor nem os funcionários ___ presentes'.",["estava","estavam","esteve","está"],1,"Sujeito composto anteposto, com dois núcleos, pede verbo no plural."],
["Concordância nominal","Assinale a construção correta.",["As criança pequena.","Os relatório novos.","As crianças pequenas.","Uma cartas longas."],2,"Artigo, substantivo e adjetivo concordam no feminino plural."],
["Concordância nominal","Complete: 'É ___ a entrada de pessoas não autorizadas', com artigo antes de 'entrada'.",["proibido","proibidos","proibidas","proibida"],3,"Com o artigo 'a', o predicativo concorda: é proibida a entrada."],
["Concordância nominal","Escolha a frase correta.",["Seguem anexos os documentos.","Segue anexos os documentos.","Segue anexo os documentos.","Seguem anexa os documentos."],0,"'Anexos' concorda com 'documentos'; 'seguem' também está no plural."],
["Concordância nominal","Assinale a frase correta.",["Ela estava meio cansadas.","Ela estava meio cansada.","Ela estava meia cansada.","Ela estava meios cansada."],1,"'Meio' com valor de advérbio (um pouco) é invariável."],
["Concordância nominal","Complete: 'As informações estão ___'.",["atualizado","atualizada","atualizadas","atualizados"],2,"Adjetivo concorda com 'informações', feminino plural."],
["Pontuação","Qual frase usa corretamente a vírgula no vocativo?",["Marina envie o relatório.","Marina envie, o relatório.","Marina envie o, relatório.","Marina, envie o relatório."],3,"Vocativo 'Marina' deve ser separado por vírgula."],
["Pontuação","Assinale a frase com pontuação adequada.",["Quando terminou a aula, todos saíram.","Quando, terminou a aula todos saíram.","Quando terminou, a aula todos saíram.","Quando terminou a aula todos, saíram."],0,"A oração adverbial temporal anteposta pode ser separada por vírgula."],
["Pontuação","Na frase 'Pedro, venha aqui!', a vírgula separa:",["o sujeito.","o vocativo.","o predicado.","o objeto indireto."],1,"'Pedro' é a pessoa chamada diretamente: vocativo."],
["Pontuação","Em qual frase as vírgulas isolam uma explicação?",["Ontem, choveu.","Maria, saia.","Carlos, meu vizinho, chegou.","Comprei pão, leite, café."],2,"'Meu vizinho' é aposto explicativo, isolado por vírgulas."],
["Pontuação","Assinale a pontuação adequada.",["Se chover iremos depois.","Se chover iremos, depois.","Se, chover iremos depois.","Se chover, iremos depois."],3,"A oração subordinada condicional anteposta é separada por vírgula."],
["Ortografia e acentuação","Qual palavra está corretamente acentuada?",["saúde","saude","saú de","saudê"],0,"'Saúde' tem hiato com u tônico, conforme a regra de acentuação."],
["Ortografia e acentuação","Assinale a grafia correta.",["excessão","exceção","excesssão","esceção"],1,"A grafia correta é 'exceção'."],
["Ortografia e acentuação","Qual palavra é proparoxítona?",["café","papel","médico","caju"],2,"MÉ-di-co tem tonicidade na antepenúltima sílaba."],
["Ortografia e acentuação","Assinale a forma correta no plural.",["cidadões","cidadães","cidadãoses","cidadãos"],3,"O plural consagrado é 'cidadãos'."],
["Ortografia e acentuação","Qual alternativa apresenta palavra escrita corretamente?",["privilégio","previlégio","previlêgio","privilejio"],0,"A forma correta é 'privilégio'."],
["Classes de palavras","Na frase 'Ela chegou rapidamente', a palavra 'rapidamente' é:",["adjetivo.","advérbio.","artigo.","substantivo."],1,"Modifica o verbo 'chegou', indicando modo."],
["Classes de palavras","Em 'As crianças brincaram', a palavra 'As' é:",["verbo.","pronome pessoal.","artigo definido.","preposição."],2,"'As' determina o substantivo 'crianças'."],
["Classes de palavras","Em 'um dia ensolarado', 'ensolarado' é:",["substantivo.","verbo.","advérbio.","adjetivo."],3,"A palavra caracteriza o substantivo 'dia'."],
["Classes de palavras","Na frase 'Nós estudamos', 'Nós' é:",["pronome pessoal.","artigo.","conjunção.","preposição."],0,"'Nós' é pronome pessoal do caso reto."],
["Classes de palavras","Em 'Estudou porque queria aprender', 'porque' é:",["interjeição.","conjunção causal.","artigo.","numeral."],1,"Liga orações e apresenta a causa de estudar."],
["Regência","Qual frase apresenta regência adequada no padrão formal?",["Assisti o filme ontem.","Prefiro mais chá do que café.","Assisti ao filme ontem.","Obedeci o regulamento."],2,"Assistir no sentido de ver rege preposição a: assistir ao filme."],
["Regência","Assinale a frase correta.",["Prefiro mais água do que suco.","Prefiro água do que suco.","Prefiro de água a suco.","Prefiro água a suco."],3,"Na norma-padrão, prefere-se uma coisa a outra."],
["Regência","Complete: 'Os alunos obedeceram ___ regras'.",["às","as","à","há"],0,"Obedecer rege a; 'as regras' com artigo plural: às regras."],
["Regência","Qual alternativa está correta?",["O trabalho visa o bem-estar.","O trabalho visa ao bem-estar.","O trabalho visa no bem-estar.","O trabalho visa pelo bem-estar."],1,"Visar no sentido de ter por objetivo rege preposição a na norma-padrão."],
["Regência","Complete: 'Ela se lembrou ___ compromisso'.",["o","ao","do","no"],2,"Lembrar-se, pronominal, rege preposição de: lembrou-se do compromisso."],
["Sintaxe","Na frase 'A enfermeira orientou os moradores', o sujeito é:",["orientou.","os moradores.","a enfermeira orientou.","A enfermeira."],3,"'A enfermeira' é quem pratica a ação."],
["Sintaxe","Em 'Os alunos leram o aviso', 'o aviso' é:",["objeto direto.","objeto indireto.","sujeito.","vocativo."],0,"O verbo 'ler' é transitivo direto nesse contexto."],
["Sintaxe","Em 'Choveu durante a madrugada', o sujeito é:",["a madrugada.","inexistente.","durante.","oculto: ele."],1,"'Chover' em sentido meteorológico é impessoal: oração sem sujeito."],
["Sintaxe","Qual é o predicado de 'As crianças brincaram no pátio'?",["As crianças.","crianças brincaram.","brincaram no pátio.","no pátio as."],2,"Predicado é o que se declara sobre o sujeito 'As crianças'."],
["Sintaxe","Em 'O relatório foi entregue pela equipe', 'pela equipe' é:",["sujeito.","objeto direto.","vocativo.","agente da passiva."],3,"Indica o ser que pratica a ação na voz passiva."],
["Semântica e figuras","Em 'A notícia caiu como uma bomba', há:",["comparação.","antítese.","eufemismo.","catacrese."],0,"'Como uma bomba' explicita uma comparação."],
["Semântica e figuras","O antônimo de 'escasso' é:",["raro.","abundante.","limitado.","insuficiente."],1,"'Escasso' significa pouco; seu oposto é 'abundante'."],
["Semântica e figuras","Em 'O vento sussurrou pela janela', há:",["ironia.","hipérbole.","personificação.","eufemismo."],2,"Atribui ao vento uma ação humana: sussurrar."],
["Semântica e figuras","O sinônimo mais próximo de 'prudente' é:",["impulsivo.","distraído.","imprudente.","cuidadoso."],3,"Prudência envolve cautela e cuidado."],
["Semântica e figuras","Na frase 'Estou morrendo de fome', a figura predominante é:",["hipérbole.","metonímia.","sinestesia.","elipse."],0,"A expressão exagera a intensidade da fome."],
["Formação, pronomes e porquês","Em 'infeliz', o elemento 'in-' é:",["sufixo.","prefixo.","radical independente.","desinência verbal."],1,"O prefixo 'in-' aparece antes do radical e expressa negação."],
["Formação, pronomes e porquês","Assinale o uso correto de 'por que'.",["Não sei porque ele faltou.","Ela explicou por quê chegou.","Por que você chegou cedo?","Este é o motivo porquê saí."],2,"Em pergunta direta, usa-se 'por que' separado e sem acento."],
["Formação, pronomes e porquês","Assinale a frase correta.",["Aonde está o livro?","Aonde você mora?","Aonde fica a escola?","Aonde você vai?"],3,"'Aonde' é usado com ideia de movimento para algum lugar."],
["Formação, pronomes e porquês","Qual palavra é formada por derivação sufixal?",["felizmente","refazer","passatempo","guarda-chuva"],0,"'Felizmente' acrescenta o sufixo '-mente' a 'feliz'."],
["Formação, pronomes e porquês","Complete: 'Não entendi o ___ da mudança'.",["por que","porquê","porque","por quê"],1,"Como substantivo acompanhado de artigo, escreve-se 'o porquê'."]
];
for(const v of g)add("Português",v[0],v[1],v[2],v[3],v[4]);
function f(n){return Number(n.toFixed(2)).toLocaleString("pt-BR",{maximumFractionDigits:2});}
function M(tema,enunciado,resultado,explicacao,unidade){
  const passo=Number.isInteger(resultado)?Math.max(1,Math.round(Math.abs(resultado)*0.13)):Math.max(0.1,Math.round(Math.abs(resultado)*1.3)/10);
  const n=[resultado,resultado+passo,resultado-passo,resultado+2*passo];
  const opts=n.map(x=>(unidade==="R$"?"R$ ":"")+f(x)+(unidade&&unidade!=="R$"?" "+unidade:""));
  const ix=banco.filter(x=>x.area==="Matemática").length%4;
  const order=[0,1,2,3];for(let k=0;k<ix;k++)order.push(order.shift());
  add("Matemática",tema,enunciado,order.map(j=>opts[j]),order.indexOf(0),explicacao);
}
const discounts=[[100,10],[200,15],[350,20],[480,25]];
for(const [v,p] of discounts)M("Porcentagem","Um produto custa R$ "+f(v)+" e recebeu desconto de "+p+"%. Qual é o preço após o desconto?",v*(1-p/100),"Desconto: "+f(v)+" × "+p+"/100. Valor final: R$ "+f(v*(1-p/100))+".","R$");
for(const [v,p] of [[100,5],[250,12],[400,15],[800,25]])M("Porcentagem","Um serviço de R$ "+f(v)+" sofreu reajuste de "+p+"%. Qual é o novo valor?",v*(1+p/100),"Novo valor = "+f(v)+" × (1 + "+p+"/100).","R$");
for(const [q,v,n] of [[4,60,10],[5,75,8],[6,54,12],[8,120,6]])M("Regra de três","Se "+q+" unidades custam R$ "+f(v)+", quanto custam "+n+" unidades ao mesmo preço unitário?",v*n/q,"Divida "+f(v)+" por "+q+" e multiplique por "+n+".","R$");
for(const [p,d,p2] of [[2,12,3],[3,12,4],[4,16,8],[6,18,9]])M("Regra de três","Em uma tarefa, "+p+" trabalhadores levam "+d+" dias, com a mesma produtividade. Quantos dias levariam "+p2+" trabalhadores?",p*d/p2,"Na proporção inversa, trabalhadores × dias é constante: "+p+" × "+d+" ÷ "+p2+".","dias");
for(const [cap,t,m] of [[500,2,3],[1000,3,4],[1500,4,5],[2400,5,6]])M("Juros","Qual é o JURO SIMPLES de R$ "+f(cap)+" aplicado a "+t+"% ao mês por "+m+" meses?",cap*t*m/100,"Use J = C × i × t; i = "+t+"/100 e t = "+m+".","R$");
for(const [cap,t,m] of [[1000,10,2],[2000,10,2],[1000,20,2],[2000,5,2]])M("Juros","Qual é o MONTANTE de R$ "+f(cap)+" a juros compostos de "+t+"% ao período durante "+m+" períodos?",cap*Math.pow(1+t/100,m),"Montante = C × (1 + i)^t = "+f(cap)+" × (1 + "+t+"/100)^"+m+".","R$");
for(const [a,b,n] of [[3,5,100],[2,3,90],[4,7,70],[5,8,96]])M("Frações","Quanto é "+a+"/"+b+" de "+n+"?",n*a/b,"Calcule "+n+" × "+a+" ÷ "+b+".","");
for(const [s,v] of [["2,4 + 3,75",6.15],["0,75 × 12",9],["13,5 - 8,25",5.25],["7,2 ÷ 0,6",12]])M("Operações","Calcule: "+s+".",v,"Efetue a operação decimal respeitando a posição das casas decimais.","");
for(const [h,m] of [[1,15],[2,30],[1,45],[3,5]])M("Medidas","Quantos minutos existem em "+h+" hora(s) e "+m+" minuto(s)?",60*h+m,"Cada hora contém 60 minutos: "+h+" × 60 + "+m+".","min");
for(const km of [2.5,0.75,1.2,3.05])M("Medidas","Converta "+f(km)+" quilômetros para metros.",1000*km,"Multiplique a quantidade de quilômetros por 1.000.","m");
for(const [a,b,c] of [[3,7,22],[5,-4,26],[2,9,31],[4,-6,10]])M("Equações","Resolva "+a+"x "+(b>=0?"+ "+b:"- "+(-b))+" = "+c+". Qual é x?",(c-b)/a,"Isolando x: x = ("+c+" - ("+b+")) ÷ "+a+".","");
for(const [b,c,roots] of [[-5,6,"2 e 3"],[-7,10,"2 e 5"],[-9,20,"4 e 5"],[-8,15,"3 e 5"]])M("Equações","Qual é a SOMA das raízes de x² "+(b<0?"- "+(-b):"+ "+b)+"x + "+c+" = 0?",-b,"Pela relação de Viète, a soma das raízes é -b/a. As raízes são "+roots+".","");
for(const [a,b,x] of [[2,3,4],[3,-2,5],[5,1,2],[4,-1,6]])M("Funções","Se f(x) = "+a+"x "+(b>=0?"+ "+b:"- "+(-b))+", quanto vale f("+x+")?",a*x+b,"Substitua x = "+x+": "+a+" × "+x+" + ("+b+").","");
for(const h of [2,3,4,5])M("Funções","Qual é a abscissa do vértice da parábola y = x² - "+(2*h)+"x + "+(h*h+1)+"?",h,"Para ax²+bx+c, x do vértice = -b/(2a). Aqui b = -"+(2*h)+" e a = 1.","");
for(const [a,d,n] of [[2,3,8],[5,4,7],[10,2,12],[1,5,6]])M("Progressões","Uma PA tem primeiro termo "+a+" e razão "+d+". Qual é o "+n+"º termo?",a+(n-1)*d,"Use a_n = a_1 + (n - 1) × r.","");
for(const [a,r,n] of [[2,2,6],[3,2,5],[1,3,5],[5,2,4]])M("Progressões","Uma PG começa em "+a+" e tem razão "+r+". Qual é o "+n+"º termo?",a*Math.pow(r,n-1),"Use a_n = a_1 × r^(n-1).","");
for(const [a,b] of [[7,4],[10,6],[12,8],[15,9]])M("Geometria plana","Um retângulo tem lados de "+a+" m e "+b+" m. Qual é seu perímetro?",2*(a+b),"Perímetro = 2 × (comprimento + largura).","m");
for(const [b,h] of [[10,6],[12,8],[15,4],[18,7]])M("Geometria plana","Um triângulo possui base "+b+" cm e altura "+h+" cm. Qual é a área?",b*h/2,"Área do triângulo = base × altura ÷ 2.","cm²");
for(const [a,b,c] of [[2,3,4],[4,5,3],[3,6,5],[2,7,8]])M("Geometria espacial","Uma caixa retangular mede "+a+" cm × "+b+" cm × "+c+" cm. Qual é o volume?",a*b*c,"Multiplique comprimento × largura × altura.","cm³");
for(const [a,b,c] of [[3,4,5],[5,12,13],[8,15,17],[7,24,25]])M("Geometria plana","Um triângulo retângulo tem catetos "+a+" cm e "+b+" cm. Qual é a hipotenusa?",c,"Teorema de Pitágoras: h² = "+a+"² + "+b+"².","cm");
for(const xs of [[5,7,9],[8,10,12],[6,8,10,12],[12,14,16,18]])M("Estatística","Qual é a média aritmética de "+xs.join(", ")+"?",xs.reduce((a,b)=>a+b,0)/xs.length,"Some os valores e divida pela quantidade de números.","");
for(const [a,b] of [[4,6],[3,7],[2,8],[7,3]])M("Probabilidade","Uma urna contém "+a+" bolas azuis e "+b+" vermelhas. Qual é a probabilidade percentual de retirar uma azul em um sorteio?",100*a/(a+b),"Probabilidade = quantidade de azuis ÷ total × 100.","%");
for(const [a,b] of [[3,4],[2,5],[4,6],[5,3]])M("Análise combinatória","Uma pessoa tem "+a+" camisetas e "+b+" calças. Quantas combinações diferentes de uma camiseta e uma calça são possíveis?",a*b,"Pelo princípio multiplicativo, multiplique as opções de camiseta pelas de calça.","combinações");
for(const [a,d] of [[2,3],[4,5],[7,2],[10,4]])M("Raciocínio lógico","Complete a sequência: "+[a,a+d,a+2*d,a+3*d].join(", ")+", __.",a+4*d,"É uma sequência de razão constante "+d+": some "+d+" ao último termo.","");
for(const [x,y] of [[5,3],[7,2],[9,4],[10,6]])M("Sistemas lineares","Se x + y = "+(x+y)+" e x - y = "+(x-y)+", qual é o valor de x?",x,"Some as equações: 2x = "+(2*x)+". Então x = "+x+".","");
if(banco.length!==200||banco.filter(x=>x.area==="Português").length!==100||banco.filter(x=>x.area==="Matemática").length!==100)throw Error("Contagem incorreta: "+banco.length+"; P="+banco.filter(x=>x.area==="Português").length);
if(new Set(banco.map(x=>x.id)).size!==200||new Set(banco.map(x=>x.enunciado)).size!==200)throw Error("IDs ou enunciados duplicados.");
window.BANCO_QUESTOES=Object.freeze(banco);
})();