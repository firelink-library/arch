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
- 

:::

# 3. Protocolos de Comunicação

Vamos lá, existem diversos protocolos de comunicação que podem ser implementados. Cada um deles possui um conjunto de características que vamos estudar a seguir. Os tipos de comunicação que vamos ver:

- Comunicação Serial;
- Comunicação SPI;
- Comunicação I2C.

Cabe destacar aqui que existem outras formas de comunicação, estas são algumas das mais comuns para utilizarmos.

# 4. Hands-on



# 5. Sugestão de Exercícios
