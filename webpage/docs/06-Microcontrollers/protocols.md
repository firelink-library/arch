---
title: Protocolos de microcontroladores
sidebar_position: 4
slug: /protocols
---

import Atmega8UART from '@site/static/img/atmega8-uart-blocks.png';
import ArduinosComSerial from '@site/static/img/comunicacao-entre-arduinos-uart.png';

## 1. Elementos de Comunicação

Vamos voltar aos primórdios aqui e depois chegar na comunicação entre nossos dispositivos. Para isso, vamos primeiro pensar em um problema: ***como dois elementos conseguem se comunicar?***

Vamos analisar a imagem a seguir.

<img 
  src="https://www.thoughtco.com/thmb/zWRQSKqnDXW5YRUGdjgC__diEnE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-communication-process-1689767_FINAL-069d65e4e1414e5c917379c42a537a66.png"
  alt="Elementos se Comunicando"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://www.thoughtco.com/thmb/zWRQSKqnDXW5YRUGdjgC__diEnE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-communication-process-1689767_FINAL-069d65e4e1414e5c917379c42a537a66.png</p>
<br/>

Aqui podemos observar quatro elementos principais nessa imagem:
- *Transmissor*: elemento que vai realizar o envio da mensagem;
- *Meio*: canal por onde a mensagem vai ser enviada;
- *Receptor*: quem vai receber a mensagem enviada;
- *Protocolo*: conjunto de regras que o emissor e o receptor utilizam para que ambos possam compreender a mensagem. No caso da figura, representada pela mensagem.  

Este mesmo conjunto de elementos é necessário no processo de comunicação entre quaisquer dispositivos. O que acontece é que muitas vezes esses elementos ficam implícitos ou ainda abstraídos do usuário.

:::tip[Quero saber mais sobre esse negócio de protocolo]

Vamos estudar mais isso ao longo deste artigo, mas recomendo muito verificar esse vídeo:

<iframe width="560" height="315" src="https://www.youtube.com/embed/d-zn-wv4Di8?si=mmGD-7R6j_C9AF5Z" title="Video que aprofunda o conceito de protocolos" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{display:"block", width: "100%",  aspectRatio: "16/9", margin: "0 auto 8px auto"}}></iframe>

:::

Um conceito importante para conhecermos enquanto estamos falando de comunicação, são os modos como ela pode acontecer. O modo como uma comunicação funciona, descreve como ela pode enviar e receber dados. Podemos descrever eles como:

- ***Simplex***: A comunicação acontece em um sentindo apenas. Como uma estação de rádio transmitindo as informações para um sentindo apenas. Outro exemplo é o sinal de TV aberta, onde a emissora envia o sinal e o receptor (televisor) apenas recebe.

<img 
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YT135AClrXaTWX5HDNonFnYhcTZ0UOArxg&s"
  alt="Ilustração de comunicação simplex"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YT135AClrXaTWX5HDNonFnYhcTZ0UOArxg&s</p>
<br/>

- ***Half-Duplex***: A comunicação pode acontecer em ambos os sentidos, do emissor para o receptor e vice-versa. Contudo, ela não acontece de forma simultânea. Para que o receptor comece a receber os dados, ele precisa para de enviar. Um exemplo deste funcionamento são rádios comunicadores. Isso acontece pois o mesmo canal é utilizado.

<img 
  src="https://www.cdt21.com/wp/wp-content/uploads/design_guide/HalfDuplex.gif"
  alt="Ilustração de comunicação half duplex"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://www.cdt21.com/wp/wp-content/uploads/design_guide/HalfDuplex.gif</p>
<br/>

- ***Full-Duplex***: A comunicação pode acontecer em ambos os sentidos ao mesmo tempo. Isso acontece pois diferentes canais são utilizados na comunicação. Um exemplo é a telefonia celular.

<img 
  src="https://blog.nuovoteam.com/wp-content/uploads/2022/07/Full-Duplex-Communication@1x-2-1024x538.jpg"
  alt="Ilustração de comunicação full duplex"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://blog.nuovoteam.com/wp-content/uploads/2022/07/Full-Duplex-Communication@1x-2-1024x538.jpg</p>
<br/>

:::tip[Para ver mais exemplos de tipos de comunicação]

<iframe width="560" height="315" src="https://www.youtube.com/embed/RzAXEQ4XsSI?si=ZH-BjrakTYsHPjmf" title="Video que apresenta mais detalhes do modo de comunicação" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{display:"block", width: "100%",  aspectRatio: "16/9", margin: "0 auto 8px auto"}}></iframe>

:::

## 2. Revisão de Programação C em Microcontroladores

Aqui vai vir um conjunto de revisão de programação de microcontroladores utilizando a ISA do Arduino. Está implementação traz um conjunto bastante grande de validações e simplificações que podemos utilizar. Para saber mais sobre ela:



Logo menos vou adicionar um pouco sobre ele aqui! Só um momento!!⌨️👓👌


:::tip[Links com material de referência]

- [Como colocar a Raspberry Pi Pico dentro do Arduino IDE](https://www.robocore.net/tutoriais/programacao-raspberry-pi-pico-arduino-ide?psafe_param=1&gad_source=1&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zgJfS8ro9DuzgTiMkNQpsxLVbFuP7ECi9ZDyrJpzbkjpZ0g5JHh3LhoCMO8QAvD_BwE)
- [Utilizando o SDK em C da Raspberry Pi Pico para Comunicação Serial](https://deepbluembedded.com/raspberry-pi-pico-serial-usb-c-sdk-serial-print-monitor/)
- [Primeiros passos com a Raspberry Pi Pico usando a IDE Arduino](https://www.makerhero.com/blog/primeiros-passos-com-a-raspberry-pi-pico-usando-a-ide-arduino/)
- [Documentação Rasberry Pi Pico](https://www.raspberrypi.com/documentation/microcontrollers/pico-series.html)
- [Documentação Arduino](https://docs.arduino.cc/)

:::

## 3. Protocolos de Comunicação

Vamos lá, existem diversos protocolos de comunicação que podem ser implementados. Cada um deles possui um conjunto de características que vamos estudar a seguir. Os tipos de comunicação que vamos ver:

- Comunicação Serial;
- Comunicação SPI;
- Comunicação I2C.

Cabe destacar aqui que existem outras formas de comunicação, estas são algumas das mais comuns para utilizarmos.

:::tip[Resumo]

<iframe width="560" height="315" src="https://www.youtube.com/embed/IyGwvGzrqp8?si=4D8DsNwUVfGwhw0v" title="Video que resume os protocolos de comunicação serial, I2C e SPI" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{display:"block", width: "100%",  aspectRatio: "16/9", margin: "0 auto 8px auto"}}></iframe>

:::

### 3.1 Comunicação Serial

Pessoal, vamos pensar em algumas formas como dois elementos podem trocar informações. Existe um forma que a troca de mensagens pode acontecer com uma via dedicada para cada um dos bits de informação. Este tipo de comunicação é chamada de `Comunicação Parelela`. O que acontece aqui, quando um sinal de clock (CLK) é enviado do transmissor para o receptor, o elemento receptor faz a leitura de todos os bits de uma vez.

Este tipo de comunicação apresenta algumas restrições, como:
- Distância de transmissão;
- Velocidade de transferência limitada;
- Grande quantidade de vias para transmitir os dados.

<img 
  src="https://cdn.sparkfun.com/r/700-700/assets/c/a/c/3/a/50e1cca6ce395fbc27000000.png"
  alt="Comunicação Paralela"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://cdn.sparkfun.com/r/700-700/assets/c/a/c/3/a/50e1cca6ce395fbc27000000.png</p>
<br/>

Uma outra forma de trocar dados é utilizar uma única via para transferir os dados. Aqui cabe destacar um ponto em relação a algumas literaturas, quando dizemos uma única via para troca de informações é para o envio de dados. Ainda é necessário utilizar mais algumas vias, como um canal para clock, um canal de referência para terra. Estes são os elementos mínimos para a comunicação.

<img 
  src="https://cdn.sparkfun.com/r/700-700/assets/e/5/4/2/a/50e1ccf1ce395f962b000000.png"
  alt="Comunicação Serial"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://cdn.sparkfun.com/r/700-700/assets/e/5/4/2/a/50e1ccf1ce395f962b000000.png</p>
<br/>

Aqui cabe um ponto interessante para verificarmos: pinos de controle. Estes pinos não são necessariamente necessários para a comunicação, eles estão mais ligados ao tipo de padrão que utilizamos. Alguns padrões de comunicação são:
- `RS-232`: RS-232 é um padrão de comunicação serial assíncrona que utiliza tensões entre ±3V e ±25V (com nível lógico “1” em tensões negativas e “0” em tensões positivas), podendo alcançar distâncias de até 15 metros e taxas de transmissão comuns entre 9600 e 115200 bps. Normalmente emprega conectores DB-9 ou DB-25 e inclui linhas de controle de fluxo (como RTS e CTS) para handshakes por hardware, operando em modo full-duplex. Embora seja um padrão antigo e desbalanceado (mais suscetível a ruídos), ainda é muito utilizado em aplicações industriais e legadas.
- `RS-422`: RS-422 é um padrão de comunicação serial diferencial que permite transmitir dados em longas distâncias (até cerca de 1200 metros) a taxas de transferência elevadas e com maior imunidade a ruídos em comparação ao RS-232. Ele utiliza duas linhas para cada sinal (A/B) na transmissão e recepção, reduzindo interferências eletromagnéticas e melhorando a integridade do sinal. Embora não especifique um conector padrão, costuma empregar conectores DB-9 ou bornes de parafuso em ambientes industriais. Além disso, o RS-422 pode operar em modos simplex ou full-duplex, dependendo de como as linhas de transmissão e recepção são configuradas.
- `RS-485`: RS-485 é um padrão de comunicação serial diferencial que suporta múltiplos dispositivos na mesma linha (até 32 transmissores e 32 receptores), permitindo comunicação em longas distâncias (até 1200 metros) e maiores taxas de transmissão com boa imunidade a ruídos. Diferentemente do RS-422, é normalmente configurado para comunicação half-duplex, compartilhando as linhas para transmissão e recepção em momentos distintos, embora também possa operar em full-duplex com cabeamento adicional. Por ser um padrão físico, não define conector específico, mas comumente utiliza conectores DB-9 ou bornes de parafuso no ambiente industrial, onde sua robustez e flexibilidade são especialmente valorizadas.

Estes são alguns dos padrões mais conhecidos e utilizados. Vamos focar agora no `RS-232`. Em geral, este padrão elétrico é ligado utilizando um conector do tipo DB-9:

<img 
  src="https://www.usconverters.com/images/rs232-pinout.webp"
  alt="Conector DB9"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://www.usconverters.com/images/rs232-pinout.webp</p>
<br/>

Destes pinos, vamos compreender o funcionamento de alguns deles:

- `Data Carrier Detect`: sinaliza que há uma portadora ativa no modem, indicando uma conexão estabelecida;
- `Received Data`: recebe dados do dispositivo remoto;
- `Transmit Data`: envia dados para o dispositivo remoto;
- `Data Terminal Ready`: indica que o terminal (computador) está pronto para se comunicar;
- `Ground`: serve como referência de terra do sinal;
- `Data Set Ready`: informa que o modem ou dispositivo de comunicação está pronto;
- `Request to Send`: indica que o dispositivo deseja transmitir dados;
- `Clear to Send`: confirma que o outro dispositivo está pronto para receber;
- `Ring Indicator`: avisa que há uma chamada telefônica chegando.

Pessoal todos estes pinos eram utilizados quando os dispositivos faziam o controle de fluxo de dados utilizando os pinos físicos. Ela é um tipo de comunicação ponto a ponto, em que apenas dois dispositivos trocam informações.

<img 
  src="https://www.firewall.cx/images/stories/networking/cabling_dcc5.gif"
  alt="Conectando cabo RS232"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://www.firewall.cx/images/stories/networking/cabling_dcc5.gif</p>
<br/>

Atualmente, utilizamos uma quantidade menor de pinos para realizar a comunicação. Os pinos que utilizamos nesta configuração são os pinos GND (ground), TX e RX. Vale a pena chamar a atenção para a configuração destes elementos. Para que um dispositivo possam receber os dados do outro, ligamos o `TX` de um elemento no pino `RX` do outro.

<img 
  src="https://www.virtual-serial-port.org/images/upload/products/vspd/articles/serial/cable.jpg"
  alt="Comunicação Serial Básica"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://www.virtual-serial-port.org/images/upload/products/vspd/articles/serial/cable.jpg</p>
<br/>

> Murilo mas eu vejo algumas ligações que não ligam o TX com o RX de todos os elementos, só ligamos o TX no nosso RX por exemplo ou o contrário. Por que isso?

O que acontece pessoal, muitos dispositivos, eme especial sensores, mandam os dados para o controlador quando um evento acontece. Muitos microcontroladores e processadores possuem rotinas de interrupção para detectar quando um conjunto de dados está chegando. Assim, quando o dispositivo envia os dados, o controlador consegue fazer a sua leitura. Como em diversos destes casos, a comunicação é simplex, não é necessário fazer a outra ligação.

Mas agora vamos avaliar um pouco mais sobre a configuração destes dispositivos. O protocolo de comunicação serial pode ser implementado de forma síncrona, como no caso do SPI e do I2C, onde o sinal do clock é enviado além dos sinais de dados. Ou ainda pode ser implementado de forma assíncrona. No caso da implementação assíncrona, não existe sinal de sincronização de dados, portanto tanto o transmissor quando o receptor são responsáveis por gerar este sinal. Ambos os dispositivos precisam estar com a mesma configuração para que a comunicação possa acontecer.

Para a ***Comunicação Serial Assíncrona*** acontecer, é necessário configurar:
- `Data bits`: quantidade de bits que são enviados em cada mensagem;
- `Bits de Sincronização`: quantos bits são utilizados para iniciar e terminar a mensagem;
- `Bits de Paridade`: quantos bits de paridade são utilizados nas mensagens;
- `Baud Rate`: qual a velocidade no envio de dados.

<img 
  src="https://cdn.sparkfun.com/r/700-700/assets/f/9/c/0/2/50d2066fce395fc43b000000.png"
  alt="Frame de mensagem Serial"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://cdn.sparkfun.com/r/700-700/assets/f/9/c/0/2/50d2066fce395fc43b000000.png</p>
<br/>

:::tip[Bit de Paridade]

Bits de paridade são bits adicionais inseridos no fim ou no início do quadro de dados em comunicações seriais para auxiliar na detecção de erros de transmissão. Em geral, o transmissor calcula se o número de bits “1” do pacote de dados é par ou ímpar e define o bit de paridade para manter o total coerente com a configuração (paridade par ou ímpar). Ao receber os dados, o dispositivo de destino faz a mesma contagem e, se houver discrepância, conclui que ocorreu um erro no envio. Para saber mais:

<iframe width="560" height="315" src="https://www.youtube.com/embed/ehPOaV066VU?si=u5y4Q9HxwE17c5z8" title="Video que traz mais detalhes sobre a utilização de bits de paridade" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{display:"block", width: "100%",  aspectRatio: "16/9", margin: "0 auto 8px auto"}}></iframe>


:::

Agora vamos verificar o seguinte cenário: desejamos transmitir a letra "S", em ASCII pela porta serial. Vamos utilizar como configuração 9600 bits por segundo de velocidade, paridade par e um stop bit. Primeiro, vamos verificar como fica a letra "S", em binário. Consultando uma tabela ASCII (https://www.ascii-code.com/), que é uma forma de representar os símbolos e caracteres, podemos ver que a letra "S", pode ser representada por: "	01010011". Quando formos transmitir esse caractere, deve estar configurado entre o transmissor e o receptor a quantidade de bits que serão enviados, para o nosso exemplo, vamos considerar que serão enviados 8 bits por mensagem.

<img 
  src="https://www.robocore.net/upload/tutoriais/50_img_10_H.png?526"
  alt="Frame de mensagem Serial"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://www.robocore.net/upload/tutoriais/50_img_10_H.png?526</p>
<br/>

Por que a velocidade e a quantidade de bits são importantes? Pois elas que permitem que o receptor consiga determinar qual o intervalo de tempo necessário para realizar a leitura de cada um dos bits de dados. Na imagem, podemos ver que os dados são transmitidos em ordem inversa, enviando primeiro o LSB (Least Significant Bit) para o MSB (More Significant Bit). Para iniciar a transmissão, pelo intervalo de 1 bit, o canal é colocado em nível baixo. Esse comportamento é chamado de envio de start bit. Depois do envio dos dados, se existir paridade configurada, estes bits são enviados e por fim, os bits de parada são anexados a mensagem.

Algumas das velocidade mais comuns para a comunicação serial são: 9600, 19200, 115200. Não se pode utilizar qualquer velocidade, pois esse intervalo é calculado por hardware, então é preciso verificar no dispositivo que será utilizado quais são as velocidades que ele consegue operar. Vale destacar aqui que quanto maior a velocidade utilizada, mais suscetível a ruídos e interferências a comunicação está. Em situações que os dispositivos não estão se comunicando, uma possibilidade é reduzir a taxa de transferência entre eles.

<img 
  src="https://www.firewall.cx/images/stories/networking/cabling_dcc-4v2.gif"
  alt="Frame de mensagem Serial"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://www.firewall.cx/images/stories/networking/cabling_dcc-4v2.gif</p>
<br/>

Outro ponto importante é referente aos níveis de tensão utilizados por estes dispositivos. Quando o dispositivo utiliza lógica TTL, ele representa os níveis altos (uns 1), com 5V. Já quando o dispositivo utiliza interface RS-232, os níveis alto são representados por um sinal entre -3 e -25V e os níveis baixos por sinais de +3 e +25V.

<img 
  src="https://cdn.sparkfun.com/r/600-600/assets/1/8/d/c/1/51142c09ce395f0e7e000002.png"
  alt="Nível de Tensão TTL"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://cdn.sparkfun.com/r/600-600/assets/1/8/d/c/1/51142c09ce395f0e7e000002.png</p>
<br/>

<img 
  src="https://cdn.sparkfun.com/r/600-600/assets/b/d/a/1/3/51142cacce395f877e000006.png"
  alt="Nível de Tensão RS-232"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://cdn.sparkfun.com/r/600-600/assets/b/d/a/1/3/51142cacce395f877e000006.png</p>
<br/>

:::danger[Mas meu notebook não tem essa interface serial! Como eu ligo na porta USB?💻]

Quando utilizamos um dispositivo de comunicação serial por uma porta USB, em geral este dispositivo instala um Driver no computador que diz ao sistema operacional que ali existe um elemento serial. Este dispositivo interpreta os sinais enviados pelo físico USB e converte eles para o padrão serial da porta UART e vice-versa. Este vídeo apresenta um pouco mais de detalhes de como estes dispositivos funcionam:

<iframe width="560" height="315" src="https://www.youtube.com/embed/-NdmjdaMY3E?si=RHrJOxh5Sq0WDePy" title="Video explica os conversores USB para Serial" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{display:"block", width: "100%",  aspectRatio: "16/9", margin: "0 auto 8px auto"}}></iframe>

:::

O diagrama proposto pelo pessoal da SparkFun abaixo ilustra muito bem e de forma simplificado, como este dispositivo funciona dentro do microcontrolador. Os dados são carregados pelo controlador para o registrador serial. Este registrador, em geral, possui associado a ele uma fila que funciona como um buffer para receber estes dados. Cada vez que está fila não está fazia, é possível transmitir os dados dela para outros dispositivo serialmente. Assim como a fila de saída, os controladores possuem uma fila de entrada, assim quando os dados são recebidos na porta serial, eles são colocados dentro desta fila para serem consumidos posteriormente.

<img 
  src="https://cdn.sparkfun.com/r/700-700/assets/d/1/f/5/b/50e1cf30ce395fb227000000.png"
  alt="Hardware Serial no Microcontrolador"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://cdn.sparkfun.com/r/700-700/assets/d/1/f/5/b/50e1cf30ce395fb227000000.png</p>
<br/>

Abaixo o diagrama do controlador ST16C550.

<img 
  src="https://cdn.sparkfun.com/r/500-500/assets/e/9/7/5/4/50d24680ce395f7172000000.png"
  alt="Hardware Serial no Microcontrolador"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://cdn.sparkfun.com/r/500-500/assets/e/9/7/5/4/50d24680ce395f7172000000.png</p>
<br/>

Como comparação, o Arduino utiliza como microcontrolador, o Atmega8. Este microcontrolador possui em seu [manual](https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-2486-8-bit-AVR-microcontroller-ATmega8_L_datasheet.pdf), o diagrama de comunicação serial a seguir. Podemos observar no diagrama que ele é dividido em três grandes blocos:
- `Gerador de Clock`: No ATmega8, o gerador de clock interno para a interface de comunicação serial (USART) é responsável por definir a taxa de transmissão (baud rate) dos dados. Ele divide a frequência principal do microcontrolador (ou de um cristal externo) por um fator configurável, resultando no sinal de clock que sincroniza a transmissão e recepção dos bits. Ajustando registradores específicos, o desenvolvedor seleciona a frequência de baud desejada, garantindo que transmissor e receptor operem de forma estável e confiável na velocidade estabelecida;
- `Transmissor`: O transmissor do ATmega8 converte dados paralelos (vindos dos registradores internos) em um fluxo serial de bits, adicionando bits de start, paridade (caso habilitada) e stop conforme configurado. Ele utiliza o gerador de clock para temporizar a saída dos bits, e escreve cada bit de forma sequencial no pino TXD. Durante o envio, o firmware pode monitorar flags de status para saber quando o transmissor está pronto para enviar o próximo byte ou quando a transmissão foi concluída;
- `Receptor`: O receptor do ATmega8 faz o caminho inverso, ou seja, converte um fluxo de bits recebidos em dados paralelos prontos para uso interno. Ele lê cada bit na entrada RXD em sincronismo com o clock gerado, valida a presença de bits de start e stop, e verifica a paridade, caso configurada. Ao finalizar a recepção de um quadro (pacote) de dados, o receptor armazena o byte em um registrador interno, sinalizando via flags que um novo dado está disponível para leitura pelo software.

<img 
  src={Atmega8UART}
  alt="Hardware Serial no Microcontrolador"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-2486-8-bit-AVR-microcontroller-ATmega8_L_datasheet.pdf</p>
<br/>

Vamos cobrir outros dois tipos de comunicação serial, SPI e I2C.

:::tip[Mais Material de Referencia]

- [Serial Communication](https://learn.sparkfun.com/tutorials/serial-communication/all)

:::

:::danger[Implementando o Timming da comunicação RS-232]

<iframe width="560" height="315" src="https://www.youtube.com/embed/AHYNxpqKqwo?si=txItvmYXmPvxF-5d" title="Video implementa os frames de tempo da comunicação serial" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{display:"block", width: "100%",  aspectRatio: "16/9", margin: "0 auto 8px auto"}}></iframe>

:::

### 3.2 Comunicação SPI - Serial Peripheral Interface

Por mais incrível que possam ser as aplicações que podemos fazer com a comunicação serial, ainda temos algumas limitações como:
- **Número de dispositivo conectados**: mesmo que possam fazer broadcast da nossa mensagem, não foi um protocolo projetado para essa finalidade, quando pensamos no padrão RS-232. Outros padrões como o RS-422 e RS-485 até suportam este tipo de ligação;
- Possui **velocidades limitadas**. 
- Em geral, a comunicação implementada é ***ASSÍNCRONA***.

Quando vamos colocar diversos dispositivos para comunicar-se, a garantia do sincronismo da informação entre eles é importante. Isso também é relevante pois não torna necessário que cada dispositivo fique responsável por gerar uma fonte de clock. Com a comunicação SPI, o sinal de clock é enviado em um canal dedicado para ele, fazendo com que todos os dispositivos possam compartilha-lo. Outro ponto muito importante: a comunicação pode ser implementada utilizando um registrador de deslocamento, o que é muito mais barato e simples que implementar todo o hardware para a comunicação serial, como a UART.

<img 
  src="https://cdn.sparkfun.com/assets/d/6/b/f/9/52ddb2d8ce395fad638b4567.png"
  alt="Frame de Dados SPI"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://cdn.sparkfun.com/assets/d/6/b/f/9/52ddb2d8ce395fad638b4567.png</p>
<br/>

Os elementos e pinos mais relevantes para a comunicação SPI são:
- `Controlador (antigo Master)`: elemento que controla a comunicação. Responsável pela geração do sinal de clock para os demais elementos;
- `Periférico (antigo Slave)`: elemento que recebe os dados e comandos do dispositivo controlador, respondendo quando é acionado;
- `SDO – Serial Data Out`: O sinal de saída de um dispositivo, onde os dados SPI são enviados para os demais;
- `SDI – Serial Data In`: O sinal de entrada de um dispositivo, por onde ele recebe os dados SPI de outros elementos;
- `CS – Chip Select`: Sinal ativado pelo controlador para comunicar com o periférico selecionado;
- `PICO (peripheral in/controller out)`: Para dispositivos que podem ser controladores ou periféricos. o sinal de saída quando estão como controladores e de entrada quando são periféricos;
- `POCI (peripheral out/controller in)`: Idem ao anterior, mas sinal de entrada quando o elemento for controlador e de saída quando ele for um periférico;
- `SDIO – Serial Data In/Out`: Um sinal bidirecional.

:::tip[Para Conhecer: OSHWA]

Existe um movimento para ajustar os nomes dos pinos e convenções utilizadas. Este trabalho é relevante pois a terminologia Mestre/Escravo tem sido utilizada por muito tempo por diversos fabricantes, não tratando o assunto com o cuidado que lhe é devidos. Diversos fabricantes estão aderindo a movimentação de corrigir e ajustar os elementos utilizados para utilizar uma nova terminologia.

<img 
  src="https://lh5.googleusercontent.com/rMexAEcBJufGAmpLbeLUlVAFHeKI-11kC3XW6coITfdRsZaihdSh9Oo7nwah6lJYCRltiP_yUivyeFMYo9-_YrTB7s2MUjkJwb93D3UNyLRgO2_xgToedVekkXUjtPnYPfozWxFa"
  alt="Nome dos Pinos da Comunicação SPI"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://lh5.googleusercontent.com/rMexAEcBJufGAmpLbeLUlVAFHeKI-11kC3XW6coITfdRsZaihdSh9Oo7nwah6lJYCRltiP_yUivyeFMYo9-_YrTB7s2MUjkJwb93D3UNyLRgO2_xgToedVekkXUjtPnYPfozWxFa</p>
<br/>


Recomendo fortemente a leitura do artigo: [A Resolution to Redefine SPI Signal Names](https://www.oshwa.org/a-resolution-to-redefine-spi-signal-names/)

:::

Vamos avaliar como os dados são trocados entre os dispositivos. O elemento responsável pela geração do clock é o controlador, os demais elementos são os periféricos da comunicação. Quando o controlador deseja mandar dados, ele envia os dados e os pulsos de clock suficientes para que estes dados possam ser enviados. Se for necessário receber dados do periférico, ele envia a quantidade de pulsos necessária para receber aquela informação.

<img 
  src="https://cdn.sparkfun.com/assets/learn_tutorials/1/6/BasicSPI_Updated2.png"
  alt="Envio e Recebimento de Dados SPI"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://cdn.sparkfun.com/assets/learn_tutorials/1/6/BasicSPI_Updated2.png</p>
<br/>

Para utilizar mais dispositivos, é necessário utilizar o sinal de Chip-Select. Desta forma, o controlador aciona o elemento que deve receber a mensagem que será enviada. É importante notar que a comunicação SPI precisa de um protocolo fixo quanto a quantidade de dados que serão enviados/recebidos na troca de mensagens. Para cada dispositivo periférico adicionado na rede, é necessário um novo sinal de Chip-Select no elemento controlador.

<img 
  src="https://cdn.sparkfun.com/assets/learn_tutorials/1/6/MultipleCS_Updated2.png"
  alt="Rede SPI"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://cdn.sparkfun.com/assets/learn_tutorials/1/6/MultipleCS_Updated2.png</p>
<br/>

:::tip[Mais Material de Referencia]

- [Serial Peripheral Interface (SPI)](https://learn.sparkfun.com/tutorials/serial-peripheral-interface-spi/all)

<iframe width="560" height="315" src="https://www.youtube.com/embed/MCi7dCBhVpQ?si=as_t3KqQ7nAq8Q3d" title="Video explica a comunicação SPI" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{display:"block", width: "100%",  aspectRatio: "16/9", margin: "0 auto 8px auto"}}></iframe>

:::

### 3.3 Comunicação I2C - Inter-Integrated Circuit

Ótimo, agora temos uma forma de nos comunicarmos que é assíncrona e outra que é síncrona. Não precisamos de mais nada! Pronto!


<img 
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShKVTG4R617R4putDaUqG2Yg7806L8pKVsfQ&s"
  alt="Meme Chotto Matte"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShKVTG4R617R4putDaUqG2Yg7806L8pKVsfQ&s</p>
<br/>

Calma ai amigas e amigos! Existem diversos outros tipos e interfaces que podemos utilizar. Vamos verificar mais um interface síncrona de comunicação, o I2C. 

Com o I2C, podemos ligar quantos controladores e periféricos forem necessários em um mesmo par de fios. Isso é possível pois, al';em de cada elemento possuir um endereço único na rede, ele são do tipo ***dreno aberto (open-drain)***. O que isso significa? Estes dispositivos podem enviar o nível zero (0) no barramento, mas não o nível alto. Por isso este tipo de barramento precisa de resistores de pull-up. Em geral, resistores de 4k7 ohms são capazes de lidar com redes de até 2 metros. Para maiores distâncias, utilizar resistências menores.

<img 
  src="https://cdn.sparkfun.com/r/600-600/assets/learn_tutorials/8/2/I2C_Schematic.jpg"
  alt="Exemplo de Rede I2C com PullUp"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://cdn.sparkfun.com/r/600-600/assets/learn_tutorials/8/2/I2C_Schematic.jpg</p>
<br/>

O protocolo de comunicação I2C é mais complexo que o serial e o SPI. Aqui eu vou fazer uma descrição macro e básica do frame de mensagens que transitam no protocolo. As mensagens são divididas em 2 partes: um endereço e o conteúdo da mensagem. O endereço indica para a rede quem deve receber a mensagem enviada. ***IMPORTANTE:*** acho que jamais é um problema deixar claro, todos os elementos na rede I2C recebem todas as mensagens, eles simplesmente não respondem quando as mensagens não são para eles. Os dados são os bytes de dados enviados do controlador para o periférico endereçado ou a resposta de um periférico para o controlador. Os dados são enviados pela linha `SDA` depois que a linha `SCL` vai para nível baixo e lidos quando a linha `SCL` vai para nível alto.

Alguns pontos que valem a pena para verificarmos:

- `Condição de Início`: O primeiro passo para enviar uma mensagem no barramento I²C é gerar a condição de início, que acontece quando a linha SDA (Serial Data) é puxada para nível baixo enquanto a linha SCL (Serial Clock) ainda está em nível alto. Esse sinal indica a todos os dispositivos no barramento que uma transmissão será iniciada, estabelecendo o controlador como gerador do clock (SCL) e dando início ao envio de dados.
- `Envio de Endereço`: Em seguida, o controlador coloca no barramento o endereço de 7 ou 10 bits do periférico com o qual deseja se comunicar, seguido de um bit que indica se a operação será de escrita (0) ou leitura (1). Como o I²C permite múltiplos periféricos conectados, esse endereço identifica qual dispositivo deve responder. Durante esse tempo, o controlador ajusta o sinal SCL, avançando um bit de cada vez.
- `Recebimento do ACK`: Após o envio do endereço e do bit de leitura/escrita, o controlador libera a linha SDA por um ciclo de clock e verifica se o periférico selecionado puxa a linha para baixo, enviando o bit de ACK (Acknowledge). Se o periférico reconhecer corretamente o endereço, ele emite ACK; caso contrário, o controlador pode encerrar a transmissão ou tentar novamente. Esse processo de confirmação (ACK) ocorre após cada byte transmitido, servindo como verificação de erro básica.
- `Transmissão dos Dados`: Com o periférico selecionado e pronto para receber (ou enviar, no caso de leitura), o controlador envia cada byte de dados sequencialmente, um bit por ciclo de clock. A cada byte concluído, o periférico novamente sinaliza ACK, confirmando o recebimento correto. Se for uma operação de leitura, o papel se inverte: o periférico passa a enviar os bits no mesmo barramento SDA, enquanto o controlador ainda controla o clock pela linha SCL.
- `Condição de Parada`: Quando o controlador termina de enviar ou receber todos os bytes desejados, ele gera a condição de parada, liberando o barramento. Isso ocorre quando a linha SDA volta ao nível alto enquanto a linha SCL permanece em nível alto. Esse sinal indica a todos os dispositivos no barramento que a operação de comunicação terminou, permitindo que outro controlador possa iniciar uma nova transação ou que o mesmo retome o controle em outro momento.

<img 
  src="https://cdn.sparkfun.com/r/600-600/assets/learn_tutorials/8/2/I2C_Basic_Address_and_Data_Frames.jpg"
  alt="Exemplo de Frame I2C"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://cdn.sparkfun.com/r/600-600/assets/learn_tutorials/8/2/I2C_Basic_Address_and_Data_Frames.jpg</p>
<br/>



:::tip[Mais Material de Referencia]

- [I2C](https://learn.sparkfun.com/tutorials/i2c#why-use-i2c)

<iframe width="560" height="315" src="https://www.youtube.com/embed/CAvawEcxoPU?si=CO96xVeY2bbX8Ilh" title="Video explica a comunicação I2C" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{display:"block", width: "100%",  aspectRatio: "16/9", margin: "0 auto 8px auto"}}></iframe>

:::

## 4. Hands-on

Agora vamos estudar algumas implementações até que enfim! Claro que a teoria e compreender como os elementos funcionam é muito importante, mas conseguir colocar eles para funcionar também é uma etapa muito relevante do processo.

### 4.1 Serial (UART)

Vamos trabalhar com algumas configurações. A primeira delas vai ser apenas um Arduino enviando alguns comandos na nossa porta serial. Esses elementos podem ser vistos pelo próprio monitor serial, ou utilizando algum programa que permita conectar com ela, como o [Termite](https://www.compuphase.com/software_termite.htm) ou o [PuTTY](https://www.putty.org/).

Vamos para primeira implementação, para isso, vamos utilizar apenas um Arduino conectado ao computador.

<img 
  src="https://images.prismic.io/circuito/8e3a980f0f964cc539b4cbbba2654bb660db6f52_arduino-uno-pinout-diagram.png?auto=compress,format"
  alt="Placa Arduino e suas conexões"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: https://images.prismic.io/circuito/8e3a980f0f964cc539b4cbbba2654bb660db6f52_arduino-uno-pinout-diagram.png?auto=compress,format</p>
<br/>


Quando olhamos para a placa, temos alguns pontos interessantes para observar. O primeiro deles está nos pinos zero (RX) e um (TX). Estes pinos tem algumas características especiais na placa que estamos utilizando. Eles são os responsáveis por fazer a comunicação entre os dispositivos, utilizando o hardware da comunicação serial. No caso da placa Arduino, eles também são utilizados quando enviamos uma nova versão do código para o controlador. 

Vamos agora avaliar o primeiro código serial de comunicação:

```c
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(13, OUTPUT);
  digitalWrite(13, LOW);
}

void loop() {
  // put your main code here, to run repeatedly:
  if (Serial.available()){
    char dado = char(Serial.read());
    if (dado == 'L')
      digitalWrite(13, HIGH);
    else if(dado == 'D')
      digitalWrite(13, LOW);
  }
}
```

Agora, com um programa para o terminal, conectar na porta para realizar a comunicação. Importante observar: não é necessário pressionar a tecla enter para enviar os dados, todos eles são transmitidos.

Agora vamos incrementar nosso desenvolvimento. Vamos colocar dois dispositivos conectados, trocando informações entre eles. O que está acontecendo aqui, um microcontrolador vai receber os dados pela porta serial de um computador, enviar eles na porta serial virtual. Quando ele realizar este envio, o outro microcontrolador vai replicar esses dados para o PC. 

Nesta configuração tem algumas coisas interessantes para verificarmos. A primeira delas é que estamos utilizando duas portas Seriais para cada microcontrolador, uma física e outra virtual. A porta virtual é implementada em dois (2) pinos de entrada e saída digital, utilizando outros registradores e periféricos do microcontrolador. Para saber mais sobre a porta serial virtual, verificar a [documentação](https://docs.arduino.cc/learn/built-in-libraries/software-serial/#begin). O código que cada controlador utiliza é igual e está a seguir.

<img 
  src={ArduinosComSerial}
  alt="Placa Arduino e suas conexões"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de: Desenvolvido pelo Autor</p>
<br/>

```c
#include <SoftwareSerial.h>

SoftwareSerial portaVirtual (5,4);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);  
  portaVirtual.begin(9600);

}

void loop() {
  // put your main code here, to run repeatedly:
  if(Serial.available()){
    char buffer = char(Serial.read());
    portaVirtual.print(buffer);
  }
  if(portaVirtual.available()){
    char buffer = char(portaVirtual.read());
    Serial.print(buffer);
    // Poderia ter vampetado
  }
}

```

ATENÇÃO: se essa comunicação não estiver rodando diretamente, verificar se os cabos RX e TX estão ligados corretamente.

Agora vamos verificar mais algumas formas de comunicação.

### 4.2 SPI

Agora vamos fazer a configuração para escrever o estado recebido pela porta serial de um Arduino para o outro, utilizando SPI. Claramente essa configuração é um `Overkill` para a aplicação, mas vai nos permitir estudar como essa troca de mensagens acontece. Vamos avaliar um circuito similar ao que vamos utilizar, mas com algumas modificações.

<img 
  src="https://www.robocore.net/upload/tutoriais/61_fritz_H.png?935"
  alt="Placa Arduino e suas conexões"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de:https://www.robocore.net/upload/tutoriais/61_fritz_H.png?935</p>
<br/>

Aqui, o que mais interessa para nós é verificar quais pinos estão sendo utilizados pelo controlador e pelo periférico. 


<img 
  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaasVKNgEC6ciUBjjI9mPxiSjwi2kO9UeoD08vceDEupKhERfXj85DHZkovdtyjFQnHE4pIblL5bF3Run5GwzyOmAr7yGKsrPaJ1z4q71bDxGMkWd2erSjjNVEGxV5Ev1ek3iIgp4Yd55oC3ihOevfdd-zhF2caIGK57zyp528iuAhxDdNuoCB9TbUog/s492/SPI-Ad.png"
  alt="Placa Arduino e suas conexões"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de:https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaasVKNgEC6ciUBjjI9mPxiSjwi2kO9UeoD08vceDEupKhERfXj85DHZkovdtyjFQnHE4pIblL5bF3Run5GwzyOmAr7yGKsrPaJ1z4q71bDxGMkWd2erSjjNVEGxV5Ev1ek3iIgp4Yd55oC3ihOevfdd-zhF2caIGK57zyp528iuAhxDdNuoCB9TbUog/s492/SPI-Ad.png</p>
<br/>

Agora vamos conectar os pinos para realizar a troca de informação. Vamos primeiro verificar o código do controlador.

```c
#include "SPI.h"

#define ssPin 10 // pino seletor do periférico


void setup() {
  Serial.begin(9600);
  Serial.println("Iniciando comunicação:");
  SPI.begin();  // ingressa ao barramento SPI
  
  pinMode(ssPin, OUTPUT);  // configura o pino seletor do slave como saida
  digitalWrite(ssPin, HIGH);  // coloca o pino seletor do slave em nivel alto
}

void loop() {
  if (Serial.available()){
    char dado = char(Serial.read());
    // coloca o pino seletor do slave em nivel baixo iniciando a transmissao
    digitalWrite(ssPin, LOW);
    SPI.transfer(dado); 
    digitalWrite(ssPin, HIGH); 
    Serial.println("Dado Enviado!");
  }
}

```
Pontos interessantes para avaliarmos deste código:
- Definimos qual o pino vai ser o Chip-Select. Enquanto o periférico não estiver recebendo dados, ele deve ficar em nível alto;
- Quando alguma informação chega da porta serial, este dado é recebido e enviado para o barramento SPI;
- Para realizar o envio, o periférico que deve receber o dado é acionado, o byte transmitido e então o CS é acionado novamente.

Agora o código do periférico:

```c
#include "SPI.h"

#define ledPin 13 // numero do pino onde o LED esta conectado

char received_data; // armazena o dado recebidos
volatile boolean received_flag; // flag de recebimento de dado

void setup() {
  // inicia a SPI no modo periférico
  SPCR |= bit (SPE);
  
  // configura o pino MISO como saida
  pinMode(MISO, OUTPUT);
  
  // prepara o flag de recebimento para interrupcao
  received_flag = false;
  
  // liga as interrupcoes
  SPI.attachInterrupt();

  pinMode(ledPin, OUTPUT);  // configura o pino do LED como saida
}

void loop() {
  // se o flag de recebimento for verdadeiro:
  if (received_flag){
    // se o byte recebido for igual a 0, apaga o LED
    if (received_data == 'D') {
      digitalWrite(ledPin, LOW);
    }

    // se o byte recebido for igual a 1 acende o LED
    if (received_data == 'L') {
      digitalWrite(ledPin, HIGH);
    }

    // limpa o flag de recebimento
    received_flag = false;
  }
}

// Rotina de interrupcao do SPI
ISR (SPI_STC_vect) {
  // le e salva o byte do Registrador de dados da SPI
  received_data = SPDR; 

  // seta o flag de recebimento para que o dado recebido 
  // seja processado no proximo loop
  received_flag = true;
}

```

O código do periférico tem algumas finalidades a mais:
- Setamos o dispositivo para ele se comportar como um periférico;
- Iniciamos uma interrupção para quando alguma mensagem SPI for enviada. A interrupção tem a função de para a execução atual do programa e executar a sua rotina quando ela for acionada;
- Quando a interrupção acontece, o bit que sinaliza de dados foram recebidos é acionado. O valor do registrados do SPI é carregado para a variável `received_flag`.
- Na rotina principal, quando algum dado é recebido, ele é processado para verificar qual informação foi recebida. O flag utilizado para sinalizar a interrupção é zerado depois deste processamento.

### 4.3 I2C

Para estudarmos a comunicação I2C, vamos utilizar o exemplo do próprio site do [Arduino.cc](https://docs.arduino.cc/learn/communication/wire/). Aqui, diferente do que aconteceu com nosso exemplo de comunicação serial, vamos precisar de um código diferente para cada controlador, pois um vai fazer o papel de controlador da comunicação e o outro de periférico.

<img 
  src="https://docs.arduino.cc/static/069030eceac90efce7d31e05109464ad/29114/I2Cb2b.png"
  alt="Placa Arduino e suas conexões"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<p align="center">Retirado de:https://docs.arduino.cc/static/069030eceac90efce7d31e05109464ad/29114/I2Cb2b.png</p>
<br/>

No circuito, os pinos de `SDA` e `SCL` dos controladores são interligados, assim como a referência de `ground`. Agora vamos analisar o código necessário para realizar está comunicação.

```c
// Wire Controller Reader
// by Nicholas Zambetti [http://www.zambetti.com](http://www.zambetti.com)

// Demonstrates use of the Wire library
// Reads data from an I2C/TWI peripheral device
// Refer to the "Wire Peripheral Sender" example for use with this

// Created 29 March 2006

// This example code is in the public domain.


#include <Wire.h>

void setup() {
  Wire.begin();        // join i2c bus (address optional for master)
  Serial.begin(9600);  // start serial for output
}

void loop() {
  Wire.requestFrom(8, 6);    // request 6 bytes from peripheral device #8

  while (Wire.available()) { // peripheral may send less than requested
    char c = Wire.read(); // receive a byte as character
    Serial.print(c);         // print the character
  }

  delay(500);
}
```

Uma vez mais, o exemplo que estamos analisando é da própria biblioteca do Arduino. A comunicação I2C é implementada pela biblioteca `Wire.h`. Quando iniciamos a comunicação, estamos utilizando os pinos padrões de `SDA` e `SCL`. A documentação completa da biblioteca pode ser acessada neste [link](https://docs.arduino.cc/language-reference/en/functions/communication/wire/).

Quando nenhum endereço é fornecido ao método `Wire.begin()`, ele assume o papel de controlador. Quando um endereço é enviado para ele, ele assume o papel de um periférico. No `loop`, fazemos uma requisição de 6 bytes do endereço 8. É importante lembrar, que devemos informar a quantidade de bytes que desejamos ler, pois precisamos enviar os pulsos de clock para realizar está operação.

Agora vamos analisar o código do periférico:

```c
// Wire Peripheral Sender
// by Nicholas Zambetti [http://www.zambetti.com](http://www.zambetti.com)

// Demonstrates use of the Wire library
// Sends data as an I2C/TWI peripheral device
// Refer to the "Wire Master Reader" example for use with this

// Created 29 March 2006

// This example code is in the public domain.


#include <Wire.h>

void setup() {
  Wire.begin(8);                // join i2c bus with address #8
  Wire.onRequest(requestEvent); // register event
}

void loop() {
  delay(100);
}

// function that executes whenever data is requested by master
// this function is registered as an event, see setup()
void requestEvent() {
  Wire.write("hello "); // respond with message of 6 bytes
  // as expected by master
}
```

Aqui os pontos que mais fazem sentindo observarmos:
- Existe um endereço atribuído ao dispositivo na rede, portanto ele é um periférico;
- Registramos uma função que é executada quando alguma requisição para o dispositivo é enviada.

## 5. Sugestão de Exercícios


1. Desenvolver um programa que permita enviar e receber o estado do LED de saída quando solicitado pelo programa controlador. Construir o protocolo de comunicação. Acionar e desacionar o LED a cada 1 segundo. Utilizar o controlador que desejar.

2. Implementar a mesma situação da comunicação anterior, mas agora, com 4 dispositivos. Cada dispositivo deve possuir um endereço específico e deve estar previsto no protocolo. Utilizar para a comunicação entre os dispositivos, comunicação SPI.

3. Realizar o mesmo procedimento que no caso anterior, mas agora, utilizar comunicação I2C entre os dispositivos.