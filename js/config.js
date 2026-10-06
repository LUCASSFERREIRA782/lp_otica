/**
 * config.js
 * -------------------------------------------------------
 * Todo conteúdo editável do site. Trocar de cliente = editar
 * só este arquivo (mais a paleta em variables.css, se quiser
 * uma identidade de cor diferente).
 * -------------------------------------------------------
 */

const CONFIG = {
  nome: "Lúmen Óptica",
  slogan: "Clareza começa no olhar certo",
  descricao: "Exame de vista, armações e lentes com precisão de verdade — tecnologia de medição digital em cada ajuste.",

  endereco: "Vila Luzita, Santo André — SP",
  whatsapp: "5511966666666",
  whatsappMensagem: "Olá! Quero agendar um horário na Lúmen Óptica.",
  instagram: "https://instagram.com/lumen.optica",
  googleMapsLink: "https://maps.google.com/?q=Vila+Luzita+Santo+Andr%C3%A9",

  horarios: [
    { dia: "Segunda a Sexta", horario: "9h às 19h" },
    { dia: "Sábado", horario: "9h às 15h" },
    { dia: "Domingo", horario: "Fechado" },
  ],

  servicos: [
    {
      nome: "Exame de vista digital",
      descricao: "Medição por scanner digital, mais precisa que o teste tradicional — identifica variações que o exame convencional costuma deixar passar.",
      preco: "a partir de R$ 80",
    },
    {
      nome: "Ajuste 3D de armação",
      descricao: "Escaneamento facial pra calibrar o encaixe da armação nos seus pontos exatos de apoio — sem marcas, sem escorregar.",
      preco: "incluso na compra",
    },
    {
      nome: "Lentes multifocais e digitais",
      descricao: "Lentes de alta tecnologia para quem usa tela o dia inteiro, com redução de fadiga visual.",
      preco: "a partir de R$ 390",
    },
    {
      nome: "Lentes de contato",
      descricao: "Adaptação acompanhada, incluindo lentes tóricas e multifocais.",
      preco: "a partir de R$ 120",
    },
    {
      nome: "Manutenção e pequenos reparos",
      descricao: "Troca de plaquetas, hastes e ajuste de armação — enquanto você espera.",
      preco: "a partir de R$ 30",
    },
  ],

  diferenciais: [
    { titulo: "Medição por scanner 3D", texto: "Mais precisa que a régua tradicional — o ajuste da armação é calibrado no seu rosto, não no modelo padrão." },
    { titulo: "Entrega expressa", texto: "Óculos de grau pronto em até 48h pra receitas simples." },
    { titulo: "Garantia real", texto: "90 dias pra ajuste de lente sem custo, se a adaptação não ficar perfeita de primeira." },
    { titulo: "Atendimento sem pressa", texto: "Cada consulta tem tempo reservado — você não divide o horário com o próximo cliente." },
  ],

  galeria: [
    { legenda: "Armações premium", alto: true },
    { legenda: "Linha solar" },
    { legenda: "Acetato artesanal" },
    { legenda: "Titânio leve", alto: true },
    { legenda: "Infantil" },
    { legenda: "Edição limitada" },
  ],

  avaliacoes: [
    { texto: "Troquei de óptica depois de anos — o ajuste 3D faz diferença real, nunca mais escorregou.", autor: "Cliente Lúmen" },
    { texto: "Exame mais completo que já fiz. Descobriram um astigmatismo leve que ninguém tinha notado antes.", autor: "Cliente Lúmen" },
    { texto: "Pedi conserto numa sexta à tarde e já saí com o óculos ajustado.", autor: "Cliente Lúmen" },
  ],

  seo: {
    titulo: "Lúmen Óptica — Exame de vista e armações em Santo André",
    descricao: "Exame de vista digital, ajuste 3D de armação e lentes de alta tecnologia em Santo André.",
  },
};