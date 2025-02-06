---
title: Circuitos sequênciais
sidebar_position: 5
slug: /sequential
---

import PresetResetCircuit from '@site/static/img/preset-reset-flip-flop-circuit.png';
import PresetResetTable from '@site/static/img/preset-reset-flip-flop-table.jpg';
import ContadorUpAsync from '@site/static/img/contador-up-async.png'

## 1. Para começarmos - De onde vem os elementos sequenciais?

Pessoal vamos analisar agora como podemos utilizar os circuitos eletrônicos de forma sequencial. Como assim sequencia? Vamos lá! Até aqui, podemos avaliar alguns circuitos utilizando as funções combinacionais. 


<img 
  src="https://computerengineeringforbabies.com/cdn/shop/articles/Logic_Gate_reference_sheet.jpg"
  alt="Circuitos Digitais"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>

<p style={{textAlign:'center'}}>Retirado de (https://computerengineeringforbabies.com/)</p>


Essas funções lógicas podem ser combinadas para executar comportamentos sequenciais, formando os `flip-flops`.

<img 
  src="https://www.hackatronic.com/wp-content/uploads/2021/11/Types-of-flip-flop-and-their-working.webp"
  alt="Elementos discretos combinacionais e sua composição como flip-flops"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>

<p style={{textAlign:'center'}}>Retirado de (https://www.hackatronic.com/)</p>

:::tip[Para saber mais sobre o funcionamento de Flip-Flops]

Pessoal, sugiro fortemente ver esse vídeo para saber mais sobre o funcionamento dos flip-flops e ler esse [artigo](https://firelink-library.github.io/arch/flipflop) também.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Hi7rK0hZnfc?si=hHMUTedJFZcBhiE9" title="Video de descrição do funcionamento de flipflops" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{display:"block", marginLeft:"auto", marginRight:"auto", marginBottom:"8px"}}></iframe>

:::


Legal, agora temos quase tudo que precisamos para iniciar o estudo dos nossos circuitos sequenciais. Precisamos apenas de mais um elemento, o `gerador de clock`. Por que o clock é importante? Essa é um pergunta muito válida e muito boa!

Os geradores de clock são responsáveis por gerar uma onda quadrada em uma frequência conhecida e pré-determinada. Essa onda quadrada é utilizada para marcar um sinal de sincronização e operação para os dispositivos. Ele pode ser gerado de algumas formas, vamos avaliar algumas delas.

<img 
  src="https://lh4.googleusercontent.com/proxy/0iHnsgJsIIBXA5qjH9QosFOy6kINz1ouC1jNkOdsTvPxQhsmnuG_VUf-_AAlLomkfdHtjZ53xaqMOCztrQDs7TbKLFjW"
  alt="Onda quadrada gerada por um circuito de clock"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>

Um sinal de clock possui algumas características:
- `tcyc`: é o intervalo de um período de clock. A frequência de clock é calculada invertendo esse valor (1/tcyc).
- `Falling Edge`: é a borda de descida do sinal. Ela caracteriza o instante que o sinal de clock vai do nível alto para o nível baixo. É importante conhecer essa característica do sinal, pois alguns circuitos são sensíveis a ele (respondem a esse comportamento do sistema).
- `Rising Edge`: é a borda de subida do clock. Quando o sinal vai de nível baixo para alto.

Mas porque as bordas são importante? Pois elas trazem a informações do momento de transição apenas e não do estado que o sinal se encontra. Pode ser bastante útil quando esta informação pode ser utilizada no sistema.

Mas como podemos gerar este tipo de sinal? É uma ótima pergunta! Vamos verificar um circuito gerador de clock.

<img 
  src="https://4.bp.blogspot.com/-gY1NLHuD038/V_crudEEKPI/AAAAAAAAOzo/5xWJUfqQYlUs95R5WusxHoBKwVS6usMVACLcB/s640/output_WAI0Ba.gif"
  alt="Oscilador astável"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<br/>

Este circuito é um dos mais simples para geração do sinal de uma onda quadrada, o oscilador astável. Ele funciona da seguinte maneira: enquanto um dos transistores está conduzindo, o outro está bloqueando. Está configuração permite que o capacitor ligado ao transistor que está bloqueado carregue-se e faça com que o estado dos transistores mude. Então, o outro capacitor começa a se carregar e todo o ciclo se repete.

Uma outra forma de gerar esse o sinal de clock pode ser utilizando uma porta NAND.

<img 
  src="https://www.incbtech.com/images/sampledata/artigo2020/art0537e_0001.jpg"
  alt="Oscilador monoestável"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<br/>

Este circuito tem um funcionamento similar. Quando é iniciado o sistema, todos estão desenergizados. O capacitor começa a se carregar por R. Pessoal, aqui acho que já conseguimos ver como estes circuitos geram nossas ondas quadradas. Agora vamos utilizar elas! 


:::tip[Para conhecer como gerar uma onda quadrada]

Pessoal, além do formato que vimos para gerar uma onda quadrada, um circuito bastante comum para sua geração é o [CI 555](https://www.ti.com/lit/ds/symlink/lm555.pdf?ts=1738616909851&ref_url=https%253A%252F%252Fwww.google.com%252F). O vídeo abaixo apresenta o funcionamento do circuito.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VWKbQE5k89Y?si=CZipBVx7uyqbPvUW" title="Video de descrição do 555 como oscilador" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{display:"block", marginLeft:"auto", marginRight:"auto", marginBottom:"8px"}}></iframe>

:::

## 2. Sistemas Digitais

Agora vamos falar um pouco dos sistemas digitais. Eles são a junção do funcionamento dos elementos combinacionais (circuitos que tem o valor de sua saída dependente diretamente apenas dos valores das entradas) com elementos de memória.

> `Murilo como assim elementos de memória?`

Quando estamos falando de memória aqui, estamos sinalizando que os nossos circuitos digitais, dependem também do valor de um estado anterior do sistema. Assim, essas informações precisam ficar armazenadas de alguma forma.

> `Uhhhh, então vamos ter um banco de dados para guardar essas informações?`

Vamos guardar elas em um nível mais simples aqui, vamos utilizar elementos que conseguem armazenar `1 bit` de informação por vez, os Flip-flops.

<img 
  src="https://ranger.uta.edu/~carroll/cse2341/fall98/chapter0/img007.GIF"
  alt="Representação de Sistema Digital"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<br/>

Como vimos anteriormente, os Flipflops são implementados utilizando alguns circuitos combinacionais, mas daqui para frente, vamos considerar eles como um elemento de construção no nosso sistema.

<img 
  src="https://lh3.googleusercontent.com/proxy/c9MfT1SfqvXku-8zAiIaHPPkVTYIilX8Bs2DMfyuvN-VXZ4wqGm_Gpz_djHE34ELl4o17Iw1tb6bMDnvMcZROhKKoca6KzYPI-qxsLs6zGVZuB0wJvugwyi9SG0"
  alt="Representação de Sistema Digital"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<br/>

Vamos avaliar seu comportamento e depois avançamos com sua utilização. Como estes elementos trazem a capacidade de guardar informação de estado, é importante considerar qual o estado anterior que eles estavam, suas entradas, a presença do sinal do clock e então analisar qual será o valor da saída futura.

No caso do Flip-flop RS, quando suas entradas `R` e `S` são mantidas em `Zero (0)`, o valor de suas saídas não se altera. Uma outra característica importante de se observar nas saídas do flip-flop, `Q`e `Q'` é que elas são complementares. Portanto quando a saída `Q` estiver em nível alto (1), a saída `Q'` estará necessariamente em nível baixo (0). ***SPOILER:*** Guardem essa informação, pois ela vai ser importante para compreender um estado deste flip-flop em especial.

<img 
  src="https://hackatronic.com/wp-content/uploads/2024/10/SR-Flip-Flop-1210x642.webp"
  alt="Representação de Sistema Digital"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<br/>

Quando a entrada `R` é colocada em `Um (1)` e a entrada `S` é colocada em nível `Zero(0)`, a saída `Q` é forçada para o nível `Zero(0)`. Aqui é importante levar um comportamento em consideração. Se ela já estiver em nível `Zero(0)`, ela vai manter esse nível. Agora, quando temos o comportamento contrário, a entrada `S` é colocada em nível `Um(1)` e a entrada `R` em nível `Um(1)`, o valor da saída `Q` vai para `Um(1)`. 

Agora chegamos a uma situação complexa: as entrada `R` e `S` são colocada em nível `Um(1)`. Neste momento, nosso flip-flop assume um estado indeterminado. O que isso significa? A suas saídas não se estabilizam em um nível lógico, elas ficam trocando de valor enquanto este estado permanecer.

Agora vamos verificar o comportamento do flip-flop JK.

<img 
  src="https://de-iitr.vlabs.ac.in/exp/truth-tables-flip-flops/images/jktruth.png"
  alt="Representação de Sistema Digital"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<br/>

Observando está tabela verdade podemos observar alguns comportamentos semelhantes ao do flip-flop RS. Se as entradas `J` e `K` são mantidas em nível `Zero(0)` as saídas são mantidas em seus estados anteriores, elas não sofrem mudança. Quando a entrada `J` é acionada e a entrada `K` não, a saída `Q` vai para o nível alto. Agora quando temos uma inversão, a entrada `J` é mantida em nível baixo e a entrada `K` é mantida em nível alto, a saída `Q` vai para nível baixo.

Pessoal, temos aqui três (3) operações que nosso elemento de memória já consegue fazer:
- `Latched`: mantém o estado atual da informação;
- `Set`: coloca a informação em nível alto (1);
- `Reset`: coloca a informação em nível baixo (0).

Aqui vem um ponto interessante: o que acontece na situação de indeterminação do flip-flop RS? Qual o comportamento quando ambas as entradas `J` e `K` são enviadas para nível alto? Aqui temos a implementação do nossa quarta operação: o `Toggle`. O estado atual da saída `Q` é invertido.

:::tip[Carregamento de Informações]

Aqui cabe destacar uma informação interessante. O valor prévio dos flip-flops pode ser definido por um circuito chamado de `Preset/Clear`. A função destes circuitos é carregar o valor desejado na saída do flip-flop independente do valor do estado anterior. Em geral, eles são sinais ativos em nível baixo, ligado sem `Zero`.

<img 
  src={PresetResetCircuit}
  alt="Circuito de Preset e Reset"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '40vh',
    marginRight: 'auto'
  }} 
/>
<br/>

<img 
  src={PresetResetTable}
  alt="Tabela Verdade de Preset e Reset"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '40vh',
    marginRight: 'auto'
  }} 
/>
<br/>

:::


:::tip[FlipFlop Tipo D]

Existe um tipo especial de flipflop chamado de `Tipo D`. Este flipflop é muito utilizado por ser capaz de armazenar um bit de informação. Ele pode ser implementado utilizando um flipflop JK, utilizando seu comportamento de `Set` e `Reset`.

<img 
  src="data:image/png;base64,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"
  alt="FlipFlop Tipo D"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '40vh',
    marginRight: 'auto'
  }} 
/>
<br/>

<img 
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQVDGWXGoZ1AUIvHe9G5jKtMbKJpJ0VUJPQ&s"
  alt="FlipFlop Tipo D Tabela Verdade"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<br/>

:::
Bom agora temos nossos quatro comportamentos para implementar nossos sistemas digitais. 

## 3. Transferência de Dados

A operação mais comum realizada com os Flipflop, ou também chamados muitas vezes de registradores, é a transferência de dados. Nela, informações são transmitidas de um ou mais flipflops para outros. Desta forma, conseguimos armazenar e deslocar dados em nossos circuitos.

<img 
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw8yG5m0bJpDSQ8SBWNFZc0EBidMOfVnhMgw&s"
  alt="FlipFlop Tipo D Tabela Verdade"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<br/>

Vamos ver como podemos realizar estas operações?

### 3.1 Transferência Paralela de Dados

A transferência paralela de dados acontece quando os dados são carregados diretamente nos registrados, com uma via dedicada para cada bit de informação. Quando o sinal de clock é enviado, os dados são carregados para os registradores. Este tipo de comunicação é bastante rápida por possuir uma via de comunicação para cada bit de informação e por toda ela ser transmitida de uma única vez. Contudo, este também é o seu maior problema, em situações que precisamos enviar grandes quantidades de dados, utilizar a comunicação paralela pode não ser a melhor opção.

<img 
  src="https://www.expertsmind.com/CMSImages/105_Parallel%20Data%20Storage.png"
  alt="Transferência paralela de dados"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<br/>

### 3.2 Transferência Serial de Dados: Registradores de Deslocamento

Os registradores de deslocamento são um conjunto de flipflops organizados de mode que os números binários, as informações, armazenadas neles possam ser deslocados de para o próximo flipflop a cada pulso de clock. Essa operação acontece em diversos outros elementos, como quando estamos utilizando um calculadora, ao digitar um novo número, os números anteriores são deslocados para o lado para que ele possa ser inserido no display.

Analisando o circuito abaixo, temos um registrador de dados serial de 4 bits. Cada um dos flipflops do sistema é responsável por armazenar um bit de informação. Este circuito tem uma característica interessante: sua saída pode ser recebida de forma serial (no último registrador - `QD`), ou de forma paralela, pegando a saída de cada um dos flipflops do sistema. Todos os sinais de clock e clear estão ligados em uma fonte comum, portanto, quando um destes sinais for enviado, ele vai ser percebido por todos os dispositivos do sistema.

Observando a carta de tempos da figura abaixo, temos que todos os flipflops estão em nível zero (0) no instante inicial da análise. Quando o sinal na entrada `Serial Data In/ Data Input` é colocado para um (1), este é enviado para o primeiro flipflop do conjunto FFA no próximo sinal de clock (momento 1 do sinal de clock). No momento 2 do sinal de clock, este nível um (1) em `QA` é enviado para o FFB. Como o sinal de entrada está em zero (0), este é enviado para FFA. Os dados são transmitidos sequencialmente a cada pulso de clock no sistema.

<img 
  src="https://preview.redd.it/eb9qn4gte0x71.gif?width=505&auto=webp&s=63c686cd113150e88c5f33bc3b0442c61bf0333e"
  alt="Circuito de flipflops para transferência serial de dados"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<br/>

<img 
  src="https://www.electronics-tutorials.ws/wp-content/uploads/2018/05/sequential-seq34.gif"
  alt="Tabela Verdade do Registrador de Deslocamento Serial"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<br/>

## 4. Contadores

Os contadores são um tipo de sistema digital que utiliza os elementos que discutimos até aqui para implementar uma contagem. Ele pode ser representado de algumas formas que vamos estudar. Primeiro, é necessário compreender um ponto bastante relevante: até que valor é possível contar. Essa informação é determinada pelo número de flipflops utilizados no sistema. O valor total que pode ser contado é igual a 2 elevado ao número de flipflops no sistema. Portanto, para um sistema como o da figura, onde temos 4 flipflops, conseguimos contar 16 números (0 até 15).

<img 
  src="https://web.njit.edu/~gilhc/COE394/Images/lab7/4brcount.gif"
  alt="Tabela Verdade do Registrador de Deslocamento Serial"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<br/>

### 4.1 Contadores Assíncronos

Vamos avaliar este circuito. Ambas as entradas, `J` e `K` estão em nível alto, portanto todos estão com o comportamento de `Toggle`. Um sinal de limpar todos é enviado ao `Clear` dos flipflops antes de iniciarmos a contagem, assim garantimos que todos eles estão em nível baixo.

<img 
  src={ContadorUpAsync}
  alt="Tabela Verdade de Preset e Reset"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '40vh',
    marginRight: 'auto'
  }} 
/>
<br/>

Como o clock dos flipflops apresenta detecção de borda (esse triangulo de lado), sendo ativado em bordas de decida (quando o sinal vai de um (1) para zero (0), indicado por esse circulo na frente do triangulo), cada vez que o clock muda, em uma borda de descida, o sinal de `L1` muda também. O sinal de `L1` é também o sinal de clock para o flipflop 2, portanto, quando ele muda com uma borda de decida, o sinal de `L2` muda também. 

Aqui podemos observar algumas coisas, o sinal `L1` tem metade da frequência do sinal do clock. Já o sinal de `L2` tem metade da frequência do sinal de `L1`. Não apenas isso, podemos observar mais um comportamento interessante, quando todos os flipflops estão em nível alto, com mais um sinal de clock, todo o sistema é reiniciado e a contagem é iniciada do valor zero (0) novamente.

Este é um contador assíncrono, os sinais de clock não estão sincronizados, para cima. É possível montar outros tipos de contadores.

:::tip[Exercício]

Como você poderia mudar este contador para contar para baixo (decrescente)?

:::

Os contadores podem ser utilizados em diferentes aplicações, como:

- `Contagem de eventos`: contando quantos elementos acionaram um determinado sensor, por exemplo.
- `Medida de tempo`: com um sinal de clock conhecido, a contagem pode ser utilizada para gerar intervalos de tempo para o sistema.
- `Conversor Analógico para Digital`: uma das formas de realizar está conversão é fazendo aproximações com contadores e comparadores.
- `Divisores de Frequência`: como a frequência do sinal de clock é dividida no contador, este comportamento pode ser utilizado parar gerar sinais em diferentes frequências no sistema.

Agora vamos avaliar outro tipo de contador: os síncronos.

### 4.2 Contadores Síncronos

Os contadores síncronos assim são chamados pois o sinal de clock entre todos os seus elementos está ligado em conjunto. Portanto, eventuais delays que possam surgir da propagação do sinal, mesmo que da ordem de alguns nano ou milissegundos, não serão tão perceptíveis neste tipo de contador.

