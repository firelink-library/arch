---
title: Dispositivos de I/O
sidebar_position: 2
slug: /io
---

import Perifericos from '@site/static/img/perifericos.jpg';
import ModuloIO from '@site/static/img/moduloio.jpg';
import Interrupt from '@site/static/img/interrupt.png';

# Dispositivos de Input/Output

A principal característica de um microcontrolador é o fato de que ele conta com
*periféricos* para input/output direto no chip, junto com o microprocessador.
Note que, para um microprocessador convencional, é costumeiro que esse tipo de
interface fique em uma placa que comumente chamamos de **placa mãe** Note que,
para um microprocessador convencional, é costumeiro que esse tipo de interface
fique em uma placa que comumente chamamos de **placa mãe**. A figura 20.01
mostra um diagrama de blocos de uma placa mão típica.

<img 
  src="https://blogger.googleusercontent.com/img/a/AVvXsEiKlmNUDNJ1ARLwpcddwOAR-7XnCwN85D1YgLXHPf82fHDtslRuFMhV46Np8frt-49NFvybPwOULiXa22nyDC5ermYXmwFk67jz78ZzUFGlBLdhwiO_1qzzBSAL0uHHeqCIBpf5GN7qZju4zPXg7N0cGeEzYT54Dnc15-KdIVFo9DiNZJYiSOHxcuVJ=s16000"
  alt="Mobo"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '60vh',
    marginRight: 'auto'
  }} 
/>
<br/>
<p><center>Fig 20.01 - Diagrama de blocos de uma *motherboard*
típica.</center></p>

Note que a CPU está separada dos dispositivos *periféricos* por dois
componentes. Um deles, chamado de *North Bridge* é responsável pela interface
com componentes de alta performance (GPU, Memória). Já a *South Bridge* é
responsável pela interface com componentes de baixo *throughput*, como
dispositivos SATA, IDE, USB e Ethernet. Essa divisão já não é mais tão comum,
visto que parte do que faz a north bridge foi incorporada nas CPUs modernas
para que fosse possível utilizar estratégias como *Direct Memory Access*. Hoje
em dia fala-se apenas no *chipset* da placa mãe, que é uma junção de algumas
das tarefas da *north bridge* e todas as tarefas da *south bridge*.

Como um ponto de comparação, a figura 20.02 apresenta um diagrama de blocos do
microcontrolador *ESP32*.

<img 
  src="https://www.researchgate.net/publication/341446512/figure/fig5/AS:892219187789825@1589733039149/ESP32-functional-block-diagram.ppm"
  alt="ESP32"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '60vh',
    marginRight: 'auto'
  }} 
/>
<br/>
<p><center>Fig 20.02 - Diagrama de blocos do microcontrolador ESP32. Trata-se
de um dispositivo com dois núcleos com arquitetura RISC e acesso direto a
diversos periféricos.</center></p>

Note que a memória ROM do dispositivo assim como todos os periféricos que o
chip usa estão diretamente no microcircuito. Essa é **a diferença entre
microcontroladores e microprocessadores**. O motivo dessa diferença é que, para
microcontroladores, faz sentido tentar entregar o processador e todos os seus
periféricos *no menor espaço possível*. Essa restrição não é tão comum nos
computadores pessoais, que tipicamente optam por um sistema maior, porém
expansível e mais customizável.

:::tip Exercício 20.01

Vamos começar a série de exercícios dessa seção? Na figura 20.02 aparecem
alguns blocos que seriam interessantes você conhecer um pouco melhor. Sendo
assim, pesquise e descreva sucintamente os seguintes periféricos:

1. RTC and low power system
2. SPI
3. I2C
4. UART
5. CAN
6. PWM
7. DAC
8. SAR ADC

:::

A seguir, vamos olhar com mais carinho para os dispositivos externos em si.

## 1. Dispositivos externos e sua interface

Os dispositivos externos de um processador não costumam ter acesso direto ao
barramento. O motivo disso? A diversidade dos dispositivos. Tem dispositivos
que se comunicam de formas completamente distintas e com protocolos diferentes.
A solução? Utilizar dispositivos de controle intermediários para interface com
dispositivos externos. Esses dispositivos são conhecidos como **periféricos**
ou **módulos de I/O**. A figura 20.03 mostra a interface entre a CPU e os
dispositivos externos.

<img 
  src={Perifericos}
  alt="Perifericos"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '60vh',
    marginRight: 'auto'
  }} 
/>
<br/>
<p><center>Fig 20.03 - Interface entre a CPU e dispositivos
externos.</center></p>

Não é particularmente interessante, portanto, olhar para o processador ou para
os dispositivos em si. Para nosso estudo, é justo olhar de maneira mais
detalhada para os **módulos de I/O**. A figura 20.04 mostra um diagrama de
blocos de um módulo típico.

<img 
  src={ModuloIO}
  alt="ModuloIO"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '60vh',
    marginRight: 'auto'
  }} 
/>
<br/>
<p><center>Fig 20.04 - Diagrama de blocos de um módulo de I/O
típico.</center></p>

Aqui é interessante notar que esses módulos se comunicam diretamente com os
barramentos da CPU e possuem registradores que se comunicam internamente com um
circuito de lógica. Qual a lógica desse circuito? Varia completamente de acordo
com o protocolo utilizado pelo tipo de dispositivo para o qual este módulo faz
a interface.

:::tip Exercício 20.02

Para entender melhor as peculiaridades de cada tipo de periférico, pesquise
sobre os seguintes protocolos, todos muito comuns para computadores modernos:

1. SATA
2. PCI
3. PCI-Express

:::

A seguir, vamos falar sobre o assunto que talvez tenha a maior importância no
trato de periféricos; **as formas de interação entre módulo de I/O e CPU**.

## 2. Tipos de acesso a periféricos

A diversidade de periféricos disponíveis para processadores é imensa. Com eles,
há uma variação da maneira como a CPU interage com este tipo de dispositivo. A
seguir, vamos falar sobre as três principais maneiras como a CPU pode interagir
com o dispositivo de I/O.

### 2.1. I/O Programada

A primeira forma é a mais simples, porém também a mais limitada. A CPU é
responsável por enviar um pedido de informação ao periférico, que deve coletar
a informação e entregá-la no barramento de dados da CPU.

Por quê esse tipo de acesso é limitado? *Tempo perdido*. A CPU tipicamente é
**muito** mais rápida que os periféricos com os quais interage. O efeito disso
é que a CPU faz um pedido ao dispositivo e tem que ficar esperando, sem fazer
operação alguma, até que a informação esteja disponível no seu barramento.

:::tip Exercício 20.03

Pesquise três protocolos de periféricos para microprocessadores ou
microcontroladores que utilizem essa forma de comunicação.

:::

### 2.2. Interrupção

A interrupção é a inversão do processo descrito na seção anterior. A CPU não
precisa enviar um pedido para o módulo de I/O. Ao invés, o módulo utiliza um
sinal especial para alertar à CPU a disponibilidade de uma nova mensagem para
ser consumida. Esse sinal especial é chamado de **interrupção**.

A figura 20.05 exibe um fluxograma de execução de uma CPU com a adição de um
fluxo de interrupção, que *é verificado sempre ao final de cada ciclo de
execução*.

<img 
  src={Interrupt}
  alt="Interrupt"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '60vh',
    marginRight: 'auto'
  }} 
/>
<br/>
<p><center>Fig 20.05 - Fluxograma de um ciclo de CPU com inclusão de ciclo de
interrupção.</center></p>

Quando uma interrupção é chamada, tipicamente as seguintes ações são
executadas:

1. O módulo de I/O envia um sinal de interrupção ao processador.
2. O processador finaliza a instrução atual e verifica a existência do flag de
   interrupção.
3. O processador envia um sinal de **Acknowledgment** da interrupção, o que
   permite o módulo de I/O resetar o flag.
4. O processador guarda em seu **stack de controle** o valor atual do **program
   counter** e o valor de um registrador chamado de **program status word**,
   que guarda o estado de todos os componentes internos da CPU.
5. O processador atualiza o **program counter** com o endereço relacionado à
   **rotina de interrupção** que precisa ser executada.
6. O processador salva *toda a informação de contexto* da instrução atual.
7. O processador executa até o fim as instruções descritas na **rotina de
   interrupção**.
8. O processador restaura a informação de contexto da instrução que estava
   executando.
9. São restaurados os valores dos registradores **PC** e **PSW**.
10. Por fim, o processador continua a executar as instruções de onde estava
    antes da interrupção.

Note que os itens de **6 a 8** acontecem em nível de *software* e não de
*hardware*.

Apesar de ser bem melhor que o acesso direto por I/O programada, o acesso por
interrupção *também não é ideal*. Esse processo de troca de contexto do
processador é **lento** ainda há um **gargalo de processamento** por conta da
velocidade do periférico.

:::tip Exercício 20.04

Pesquise ao menos dois protocolos de periféricos que utilizam **interrupção**

:::

#### 2.2.1. Lidando com múltiplas interrupções

A figura 20.06 mostra os pinos de um ESP-WROOM-32 que podem ser utilizados em
modo de interrupção.

<img 
  src="https://microcontrollerslab.com/wp-content/uploads/2021/04/ESP32-Interrupt-pins.jpg"
  alt="ESP32-interrupt"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '60vh',
    marginRight: 'auto'
  }} 
/>
<br/>
<p><center>Fig. 20.06 - Pinos de interrupção de um ESP-WROOM-32.</center></p>

Notou algo? São **muitos pinos**. O que isso significa? Que existe a
possibilidade de um processador receber *vários* sinais de interrupt ao mesmo
tempo. A primeira coisa que posso dizer a respeito disso é **evite deixar
acontecer esse tipo de situação**. A segunda é: existem formas de tratar isso.

**Forma 1 - Múltiplas linhas de interrupção**

Essa é a forma mais simples de lidar com o problema. Muitas interrupções?
Aumente a quantidade de linhas de interrupção. Simples, né? Mas limitado. A
figura 20.06 mostra uma situação onde há mais de 10 interrupções. É inviável
para um processador ter tantas linhas de interrupção. Entra então a *forma 2*.

**Forma 2 - Verificação por software**

Aqui, o processador recebe o flag de interrupção e usa o barramento de dados
para *questionar* cada periférico se foi ele que gerou o sinal de interrupção.
Essa forma é **obviamente** mais lenta, mas não depende de múltiplas linhas de
barramento e tem uma escalabilidade decente.

**Forma 3 - Daisy chain**

Similar à verificação por software, a verificação por daisy chain envolve o
processador receber um sinal de interrupção e questionar os periféricos com a
finalidade de encontrar a origem do sinal. A diferença? Em vez de mandar *n*
sinais, endereçando um dispositivo de cada vez, o processador manda apenas um
sinal, diretamente para um *dispositivo mestre*. Este dispositivo é responsável
por encaminhar esse sinal para os outros periféricos em série. Quando o
periférico responsável pelo sinal de interrupção é alcançado, ele envia seu
endereço no barramento de dados da CPU. A figura 20.07 mostra a configuração de
periféricos necessária para utilizar essa forma.

<img 
  src="https://upscfever.com/upsc-fever/en/gatecse/images/daisy-chain-priority-interrupt.png"
  alt="Daisy Chain"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '60vh',
    marginRight: 'auto'
  }} 
/>
<br/>
<p><center>Fig 20.07 - Arranjo de periféricos em *daisy chain*.</center></p>

**Forma 4 - Arbitração de barramento**

O método de arbitração de barramento envolve conceder ao dispositivo periférico
o *controle do barramento*. Sendo assim, não é mais papel da CPU descobrir a
origem do sinal, mas apenas consumir os dados no barramento, agora monopolizado
pelo dispositivo que requisitou controle. Esse é o melhor método no sentido de
velocidade de acesso, porém ele necessita de um circuito especializado para
*arbitrar* essa requisição de controle dos periféricos. A figura 20.08 mostra
um exemplo da interação entre os dispositivos periféricos e o circuito de
controle de arbitração.

<img 
  src="https://media.geeksforgeeks.org/wp-content/uploads/bus3.png"
  alt="Arbitration"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '60vh',
    marginRight: 'auto'
  }} 
/>
<br/>
<p><center>Fig. 20.08 - Circuito de controle de arbitração de
barramento.</center></p>

:::tip Exercício 20.05

Sua tarefa agora é criar um blink *tunado*. Como? Você vai utilizar dois *push
buttons* para *aumentar ou diminuir* a taxa com a qual o led *liga ou desliga*.
Quando apertar um push button, o delay do blink aumenta. De maneira análoga, o
outro botão deve ter o efeito de diminuir o delay do blink.

Condição necessária: tanto o código para aumentar o delay quanto o código para
diminuir o delay devem ser executados em uma **ISR** - **Interrupt Service
Routine**. Isso significa que os botões serão configurados como **interrupções
externas**.

A princípio, faça essa aplicação utilizando o [Tinker
CAD](https://www.tinkercad.com/circuits) e a plataforma **Arduino**.

:::

:::tip Exercício 20.06

Repita o exercício anterior, mas dessa vez utilize o **ESP32** *sem utilizar a
plataforma Arduino*.

:::

### 2.3. Direct Memory Access

De longe a melhor forma de um periférico interagir com um sistema computacional
é **enviando diretamente as informações externas para a memória**. Essa forma
de interação é chamada de *acesso direto à memória*.

Esse acesso tipicamente ocorre com o auxílio de um circuito de controle chamado
de **DMA**. A figura 20.09 apresenta uma configuração possível para o acesso de
periféricos diretamente à memória do computador.

<img 
  src="https://media.geeksforgeeks.org/wp-content/uploads/20240109112312/screen.png"
  alt="DMA"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '60vh',
    marginRight: 'auto'
  }} 
/>
<br/>
<p><center>Fig 20.09 - Acesso direto à memória.</center></p>

Um exemplo interessante de DMA é o [GPU Direct, uma tecnologia para interação direta da GPU com a memória de
   sistema](https://developer.nvidia.com/gpudirect)


### 2.4. Direct Cache Access

:::tip Exercício 20.07

Pesquise sobre o processador *Xeon E5 2600* e sobre a maneira como ele
disponibiliza acesso direto para o *cache L3* para alguns dispositivos
periféricos específicos.

:::

## 3. Timer - um tipo particular de periférico

O timer é um tipo de periférico bastante particular e **comumente utilizado em
microcontroladores**. Considere a figura 20.10, que apresenta um contador de 4
bits assíncrono.

<img 
  src="https://www.researchgate.net/publication/343361612/figure/fig2/AS:919601118466048@1596261400557/Fig-8-10-4-bit-synchronous-binary-counter.jpg"
  alt="Contador assíncrono"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '60vh',
    marginRight: 'auto'
  }} 
/>
<br/>
<p><center>Fig 20.10 - Contador assíncrono de 4 bits.</center></p>

Este contador é capaz de contar de 0 até 15. Imagine que utilizamos ele com um
sistema cujo clock é de exatamente *1Hz*. O que isso significa? Que o contador
demora *15 segundos* para terminar a sua contagem. Imagine, agora, que fosse
possível *pré-carregar* esse contador com o valor *12*. Isso significa que o
contador passaria a demorar apenas *3 segundos* para chegar ao final da
contagem. Imagine, agora, que equipamos esse contador com um *flag de estouro
de contagem*. Pronto, esse é o principio de funcionamento de um **timer
simples**.

A figura 20.11 mostra de forma resumida o contador que descrevi acima.

<img 
  src="https://infocenter.nordicsemi.com/topic/ps_nrf52840/ip/timer/doc/image/block.svg"
  alt="Timer"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '90vh',
    marginRight: 'auto'
  }} 
/>
<br/>
<p><center>Fig 20.11 - Diagrama de blocos de um timer simples baseado em
contador.</center></p>

Para que serve o timer? Simples: imagine, agora, que esse sinal de estouro do
timer **aciona um flag de interrupção**. Pronto, temos um periférico que
conseguimos configurar para acionar uma interrupção com um intervalo fixo de
tempo. Se você já usou a função **delay**, você já usou um timer.

Microcontroladores tipicamente contam com *alguns* circuitos de timer. A figura
20.12 mostra a quantidade de timers de 64 bits disponíveis em um ESP32.


<img 
  src="https://circuitdigest.com/sites/default/files/inlineimages/u5/ESP32-Timers.png"
  alt="ESP32 Timers"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '60vh',
    marginRight: 'auto'
  }} 
/>
<br/>
<p><center>Fig 20.12 - Timers de um ESP32.</center></p>

:::tip Exercício 20.08

Utilizando um ESP32, configure um dos seus timers para disparar a cada 100ms.
Quando esse disparo ocorrer, utilize uma subrotina que envia uma mensagem
através da porta serial, a ser lida utilizando um cabo USB.

:::





