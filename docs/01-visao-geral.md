# 01 - Visão Geral do Sentinela

## 1. O que é o Sentinela

O Sentinela é um sistema de memória operacional inteligente. A ideia principal é registrar acontecimentos relevantes de um ambiente autorizado, interpretar o contexto dessas informações e transformar registros soltos em eventos organizados, tarefas, alertas, relatórios e histórico pesquisável.

O sistema não deve ser tratado apenas como um gravador ou transcritor. A proposta é criar uma camada de inteligência sobre o que acontece no dia a dia operacional.

Em vez de guardar apenas uma fala como texto, o Sentinela deve tentar entender o significado operacional daquela fala.

Exemplo simples:

```txt
Fala registrada:
João pegou duas ONU ZTE.

Interpretação esperada:
Tipo: RETIRADA
Responsável: João
Item: ONU ZTE
Quantidade: 2
Origem: Voz
Status: Aguardando confirmação
```

## 2. Propósito

O objetivo do Sentinela é reduzir perda de informação no ambiente de trabalho. Em muitos lugares, várias decisões, retiradas, pendências e avisos são falados rapidamente e acabam se perdendo.

O Sentinela existe para resolver esse problema.

Ele deve ajudar a responder perguntas como:

- Quem retirou determinado item?
- Quando alguém falou sobre uma falta de material?
- Quais pendências surgiram hoje?
- Quais itens foram mais mencionados na semana?
- Que tarefas foram criadas a partir de falas ou mensagens?
- O que aconteceu no ambiente durante o dia?
- Existe divergência entre o que foi falado e o que foi lançado em outro sistema?

## 3. Escopo inicial

O primeiro uso pensado é um ambiente de estoque operacional, mas o sistema não deve ser criado com o nome, estrutura ou regras presas ao estoque.

O estoque será apenas um módulo ou ambiente dentro do Sentinela.

Exemplos de ambientes futuros:

- Estoque
- Escritório
- Atendimento
- Sala técnica
- Reuniões
- Operação interna
- Uso pessoal

Por isso, o projeto deve ser genérico o suficiente para receber diferentes tipos de fonte, regra e vocabulário.

## 4. O que o Sentinela faz

O Sentinela deve ser capaz de:

1. Receber registros de diferentes fontes.
2. Armazenar o registro bruto quando necessário.
3. Transcrever áudio em texto.
4. Corrigir termos técnicos por vocabulário do ambiente.
5. Interpretar o significado do texto.
6. Classificar o registro como evento, tarefa, alerta, conversa comum ou observação.
7. Relacionar registros próximos dentro de um mesmo contexto.
8. Gerar uma linha do tempo operacional.
9. Criar relatórios automáticos.
10. Permitir busca por texto, item, pessoa, tipo, data e contexto.

## 5. O que o Sentinela não é

O Sentinela não deve nascer como:

- Um ERP completo.
- Um sistema de estoque tradicional.
- Um sistema de vigilância escondida.
- Um gravador bruto sem inteligência.
- Um chatbot genérico.
- Um substituto total para sistemas oficiais.

Ele deve funcionar como uma camada auxiliar de memória, organização e análise.

## 6. Princípio de transparência

Como o projeto pode envolver registros de fala, ele deve ser pensado para uso transparente e autorizado.

Regras importantes:

- As pessoas do ambiente devem saber que o sistema está ativo.
- Deve existir indicador visual de funcionamento.
- O acesso aos registros deve ser controlado.
- O sistema deve priorizar registros operacionais, não exposição desnecessária de conversas pessoais.
- Deve existir possibilidade de pausar, desligar ou limitar a captura.

Esse princípio deve acompanhar o projeto desde o início, porque evita que uma ferramenta útil vire algo invasivo.

## 7. Fontes de informação

O Sentinela deve aceitar múltiplas fontes.

Fontes iniciais:

- Voz
- Registro manual
- Telegram
- Sistema externo

Fontes futuras:

- E-mail
- Planilhas
- Sistemas internos
- APIs corporativas
- Importação de arquivos

A regra central é: independentemente da fonte, tudo que for relevante pode virar evento.

## 8. Conceito de evento

Evento é a entidade principal do Sentinela.

Um evento representa algo que aconteceu ou foi identificado.

Exemplos:

- João retirou 2 ONU.
- Chegou uma caixa de conectores APC.
- Foi mencionada falta de fita autofusão.
- Alguém pediu para conferir a prateleira 3.
- Uma mensagem no Telegram gerou uma tarefa.

Tipos iniciais de evento:

- RETIRADA
- ENTRADA
- TAREFA
- ALERTA
- OBSERVACAO
- CONVERSA
- SISTEMA

## 9. Memória operacional

Memória operacional é a capacidade de relacionar eventos próximos e entender contexto.

Exemplo:

```txt
09:10 - João pegou duas ONU.
09:12 - Acho que ele levou um roteador também.
```

Um sistema simples criaria dois registros soltos.

O Sentinela deve entender que a segunda fala provavelmente complementa a primeira.

Resultado esperado:

```txt
Contexto: Retirada do João
Itens:
- 2 ONU
- 1 roteador
```

Essa funcionalidade é uma das partes mais importantes do projeto.

## 10. Módulos principais

O sistema será dividido em módulos:

- API central
- Painel web
- Listener local
- Serviço de IA
- Serviço de transcrição
- Banco de dados
- Integrações

Cada módulo deve ter responsabilidade clara para evitar bagunça no futuro.

## 11. Prioridade do MVP

A primeira versão funcional deve permitir:

1. Criar eventos manualmente pela API.
2. Listar eventos no painel web.
3. Criar tarefas associadas a eventos.
4. Registrar fontes e ambientes.
5. Simular uma transcrição vinda do listener.
6. Processar texto com uma estrutura preparada para IA.

A captura de áudio real, Whisper e Ollama podem entrar depois da base estar firme.

## 12. Resultado esperado do projeto

Quando maduro, o Sentinela deve funcionar como uma memória viva do ambiente.

A pessoa deve conseguir abrir o painel e ver:

- O que aconteceu hoje.
- Quais pendências existem.
- Quais alertas surgiram.
- Quais pessoas foram citadas.
- Quais itens tiveram movimentação.
- Quais registros precisam de confirmação.
- Quais padrões estão aparecendo com frequência.

A ideia final é transformar acontecimentos soltos em informação útil.
