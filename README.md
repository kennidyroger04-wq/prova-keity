# Prova Keity — Tapiraí/SP 2027

Site de estudo gratuito e responsivo para o processo seletivo **PSPMT 003/2026** de Agente Comunitário de Saúde (ACS) e Agente de Combate às Endemias (ACE), elaborado de acordo com o Anexo II do edital.

## Abrir pelo celular

**Endereço do site, depois de ativar o GitHub Pages:** https://kennidyroger04-wq.github.io/prova-keity/

**Ativação única pelo proprietário (necessária):**
1. Acesse https://github.com/kennidyroger04-wq/prova-keity/settings/pages
2. Em **Build and deployment → Source**, selecione **Deploy from a branch**.
3. Em **Branch**, escolha **main** e pasta **/(root)**.
4. Clique em **Save**. Aguarde o GitHub indicar que o site foi publicado.
5. Abra o endereço do site acima no celular. Pode usar a opção **Adicionar à Tela de Início** do navegador.

Essa modalidade usa a publicação tradicional por branch e **não consome GitHub Actions**. A configuração de Pages exige permissão administrativa do dono do repositório.

## O que está incluído

- **200 questões inéditas com explicação**, 100 de Língua Portuguesa e 100 de Matemática/Raciocínio Lógico. Em auditoria por ASSUNTO, 184 correspondem a tópicos documentados em provas anteriores do IGECS e 16 estão somente no edital (número relativo à classificação dos exercícios autorais, não ao número de questões históricas).
- Português: 50 questões de compreensão de 10 textos e 50 questões de gramática.
- Matemática: 100 questões com variações numéricas de 25 tipos de problemas.
- Botão **Foco IGECS** para treinar assuntos documentados; disciplina e assunto, com séries de 10, 20, 40 ou todas as questões. Inclui opção para estudar somente os assuntos com evidência histórica, ou todo o edital.
- Simulado cronometrado: **40 questões** (20 de Português e 20 de Matemática), com **3 horas**.
- Resultado de 0 a 100 pontos, gabarito e explicações ao final.
- Página de **Fontes verificadas** com links para provas reais e **20 links com minutagem** para as questões 21 a 40 de Matemática de Barueri 2024 corrigidas em vídeo.
- Revisão dos erros, favoritos, percentual de acertos e histórico do último simulado.
- Interface para telas pequenas, botões grandes e sem cadastro ou anúncios.

## Fontes históricas e critérios de inclusão

A comprovação é do **tema**, não do enunciado, da dificuldade, da chance de cair nem da distribuição. Nenhuma questão do aplicativo é cópia de concurso anterior.

| Fonte | Informação verificada | Uso no projeto |
| --- | --- | --- |
| [IGECS — Câmara de Arujá 2026, Auxiliar Administrativo](https://www.qconcursos.com/questoes-de-concursos/provas/igecs-2026-camara-de-aruja-sp-auxiliar-administrativo/questoes) | Conteúdo real de Português, Matemática e Raciocínio Lógico de nível médio: interpretação, sintaxe, morfologia, crase, regência, porcentagem, funções, geometria, análise combinatória, probabilidade, lógica e MMC | Referência para selecionar os temas do botão **Foco IGECS**. A prova de Arujá tinha cinco alternativas; a de Tapiraí prevê quatro. |
| [IGECS — Barueri 2024, Cuidador Social](https://www.youtube.com/watch?v=QAgBEJY_jyI) | Correção documentada das 20 questões de Matemática e Lógica, com marcações de tempo para cada questão | Evidência para medidas, operações, porcentagem, juros, radiciação, funções, geometria, progressões e sequências. |
| [IGECS — Pirapora do Bom Jesus 2026, ACS/ACE](https://www.igecs.org.br/concursos/publicacoes/MzM%3D/ODA%3D) | Mesmo organizador e cargos, mas edital diferente; nele havia conhecimentos específicos | **Não importamos Saúde Pública** para Tapiraí, pois esse conteúdo não integra o Anexo II da prova de Tapiraí. |
| [IGECS — Perguntas frequentes](https://www.igecs.org.br/faq) | A organizadora declara que não disponibiliza provas antigas em seu site | Utilizar cadernos e correções externos com identificação verificável. |

Exercícios complementares em tópicos sem ocorrência histórica verificada na amostra são rotulados como **"somente edital"** e não aparecem no modo padrão do Foco IGECS. O edital oficial continua sendo o limite máximo de conteúdo, não uma previsão de frequência.

## Importante sobre as fontes

O **Anexo II, páginas 27 e 28**, do edital de Tapiraí 003/2026 prevê **somente** 20 questões de Português e 20 de Matemática/Raciocínio Lógico. O edital não prevê a disciplina de Conhecimentos Específicos de Saúde para essa prova objetiva. Eventuais retificações futuras devem ser acompanhadas em https://www.igecs.org.br/.

**Estas 200 questões são exercícios autorais/inéditos de treinamento; não são cópias de provas anteriores nem são material oficial ou homologado pela banca IGECS.** A seleção de temas é didática, não uma frequência estatística oficial da banca.

## Privacidade

A aplicação não tem conta, login, servidor de dados ou coleta de informações. O histórico de respostas fica salvo **somente no navegador/dispositivo usado**, via localStorage. Limpar os dados do navegador ou trocar de celular apaga esse histórico.

## Arquivos

- `index.html`: estrutura inicial.
- `styles.css`: layout responsivo.
- `questoes.js`: 200 itens, alternativas e explicações.
- `app.js`: navegação, treinos, simulado e salvamento local.

O banco foi validado em Node.js: sintaxe correta, 200 questões, 100 por disciplina, quatro alternativas e resposta definida em todas elas. Não é necessário instalar dependências para executar o site.
