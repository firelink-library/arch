---
title: Protocolos de microcontroladores
sidebar_position: 4
slug: /protocols
---

# 1. Elementos de Comunicação

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

<iframe width="560" height="315" src="https://www.youtube.com/embed/d-zn-wv4Di8?si=mmGD-7R6j_C9AF5Z" title="Video que aprofunda o conceito de protocolos" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{display:"block", marginLeft:"auto", marginRight:"auto", marginBottom:"8px"}}></iframe>

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

<iframe width="560" height="315" src="https://www.youtube.com/embed/RzAXEQ4XsSI?si=ZH-BjrakTYsHPjmf" title="Video que apresenta mais detalhes do modo de comunicação" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{display:"block", marginLeft:"auto", marginRight:"auto", marginBottom:"8px"}}></iframe>

:::

# 2. Revisão de Programação C em Microcontroladores

Aqui vai vir um conjunto de revisão de programação de microcontroladores utilizando a ISA do Arduino. Está implementação traz um conjunto bastante grande de validações e simplificações que podemos utilizar. Para saber mais sobre ela:



Logo menos vou adicionar um pouco sobre ele aqui! Só um momento!!⌨️👓👌


:::tip[Links com material de referência]

- [Como colocar a Raspberry Pi Pico dentro do Arduino IDE](https://www.robocore.net/tutoriais/programacao-raspberry-pi-pico-arduino-ide?psafe_param=1&gad_source=1&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zgJfS8ro9DuzgTiMkNQpsxLVbFuP7ECi9ZDyrJpzbkjpZ0g5JHh3LhoCMO8QAvD_BwE)
- [Utilizando o SDK em C da Raspberry Pi Pico para Comunicação Serial](https://deepbluembedded.com/raspberry-pi-pico-serial-usb-c-sdk-serial-print-monitor/)
- [Primeiros passos com a Raspberry Pi Pico usando a IDE Arduino](https://www.makerhero.com/blog/primeiros-passos-com-a-raspberry-pi-pico-usando-a-ide-arduino/)
- [Documentação Rasberry Pi Pico](https://www.raspberrypi.com/documentation/microcontrollers/pico-series.html)
- [Documentação Arduino](https://docs.arduino.cc/)

:::

# 3. Protocolos de Comunicação

Vamos lá, existem diversos protocolos de comunicação que podem ser implementados. Cada um deles possui um conjunto de características que vamos estudar a seguir. Os tipos de comunicação que vamos ver:

- Comunicação Serial;
- Comunicação SPI;
- Comunicação I2C.

Cabe destacar aqui que existem outras formas de comunicação, estas são algumas das mais comuns para utilizarmos.

:::tip[Resumo]

<iframe width="560" height="315" src="https://www.youtube.com/embed/IyGwvGzrqp8?si=4D8DsNwUVfGwhw0v" title="Video que resume os protocolos de comunicação serial, I2C e SPI" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{display:"block", marginLeft:"auto", marginRight:"auto", marginBottom:"8px"}}></iframe>

:::

## 3.1 Comunicação Serial

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

<iframe width="560" height="315" src="https://www.youtube.com/embed/ehPOaV066VU?si=u5y4Q9HxwE17c5z8" title="Video que traz mais detalhes sobre a utilização de bits de paridade" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{display:"block", marginLeft:"auto", marginRight:"auto", marginBottom:"8px"}}></iframe>


:::

:::tip[Mais Material de Referencia]

- [Serial Communication](https://learn.sparkfun.com/tutorials/serial-communication/all)

:::

## 3.2 Comunicação SPI - Serial Peripheral Interface

:::tip[Mais Material de Referencia]

- [Serial Peripheral Interface (SPI)](https://learn.sparkfun.com/tutorials/serial-peripheral-interface-spi/all)

:::

## 3.3 Comunicação I2C - Inter-Integrated Circuit

:::tip[Mais Material de Referencia]

- [A Basic Guide to I2C](https://www.ti.com/lit/an/sbaa565/sbaa565.pdf)

:::

# 4. Hands-on



# 5. Sugestão de Exercícios
