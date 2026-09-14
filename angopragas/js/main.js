/* ============================================
   ANGOPRAGAS — main.js
   Menu, idioma, formulário WhatsApp, chat AI
   ============================================ */

(function () {
  'use strict';

  /* ---------- DOM ---------- */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const langBtns = document.querySelectorAll('.lang-btn');
  const form = document.getElementById('contact-form');
  const aiToggle = document.getElementById('ai-toggle');
  const aiChat = document.getElementById('ai-chat');
  const aiClose = document.getElementById('ai-close');
  const aiMessages = document.getElementById('ai-messages');
  const aiInput = document.getElementById('ai-input');
  const aiSend = document.getElementById('ai-send');
  const aiQuick = document.querySelectorAll('.ai-quick button');

  /* ---------- Mobile menu ---------- */
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Language toggle ---------- */
  let currentLang = 'pt';

  const translations = {
    pt: {
      nav_home: 'Início',
      nav_about: 'Sobre',
      nav_services: 'Serviços',
      nav_gallery: 'Galeria',
      nav_contact: 'Contacto',
      hero_title: 'Controlo de pragas com confiança e qualidade',
      hero_lead: 'Desde 2019 protegemos residências, empresas, hotéis e viaturas em Luanda. Métodos seguros para a saúde e o meio ambiente.',
      hero_cta1: 'Pedir orçamento',
      hero_cta2: 'Ver serviços',
      hero_stat1: 'Desde 2019',
      hero_stat2: '24/24 técnico',
      hero_stat3: 'Luanda',
      hero_badge: 'Combate & Prevenção — a ANGOPRAGAS é o melhor parceiro para o seu negócio ou lar.',
      about_label: 'Sobre nós',
      about_title: 'Confiança e qualidade desde 2019',
      about_p1: 'A ANGOPRAGAS DESINFESTAÇÃO oferece formação, consultoria, prestação de serviços e venda de produtos para controlo de pragas.',
      about_p2: 'Escolhemos métodos seguros para a saúde humana e o meio ambiente. Actuamos em condomínios, residências, empresas, escritórios, centros comerciais, hotéis e restaurantes.',
      feat1_t: 'Formação & Consultoria',
      feat1_d: 'Capacitação e aconselhamento técnico para empresas e particulares.',
      feat2_t: 'Prestação de serviços',
      feat2_d: 'Dedetização, desinfestação e controlo de pragas com equipa especializada.',
      feat3_t: 'Venda de produtos',
      feat3_d: 'Produtos profissionais para prevenção e combate a pragas.',
      services_label: 'Serviços',
      services_title: 'Soluções completas de desinfestação',
      svc1_t: 'Controlo de pragas',
      svc1_d: 'Eliminação e prevenção de ratos, baratas, formigas, mosquitos, térmitas, pulgas, moscas e outras pragas.',
      svc2_t: 'Desinfestação de viaturas',
      svc2_d: 'Conduza com conforto. Eliminamos pragas do interior da sua viatura de forma segura e eficaz.',
      svc3_t: 'Ambientes comerciais',
      svc3_d: 'Hotéis, restaurantes, escritórios e centros comerciais. Proteção contínua e discreta.',
      areas_title: 'Actuamos em',
      pests_label: 'Dedetização contra',
      pests_title: 'Pragas que combatemos',
      gallery_label: 'Galeria',
      gallery_title: 'O nosso trabalho',
      gallery_cta: 'Ver no Instagram',
      contact_label: 'Contacto',
      contact_title: 'Fale connosco',
      contact_addr: 'Rua do Partido — Benfica, Luanda',
      contact_hours: 'Escritório: Seg–Sex 09:00–17:30 · Área técnica 24/24',
      form_name: 'Nome',
      form_phone: 'Telefone / WhatsApp',
      form_service: 'Serviço de interesse',
      form_msg: 'Mensagem',
      form_submit: 'Enviar via WhatsApp',
      form_note: 'O formulário abre o WhatsApp com a mensagem já preenchida. Resposta rápida.',
      footer_tag: 'Controlo de pragas, desinfestação e consultoria em Luanda.',
      footer_nav: 'Navegação',
      footer_services: 'Serviços',
      footer_contact: 'Contacto',
      ai_title: 'Assistente ANGOPRAGAS',
      ai_placeholder: 'Escreva a sua dúvida…',
      ai_welcome: 'Olá! Sou o assistente da ANGOPRAGAS. Posso ajudar com informações sobre serviços, horários e orçamentos. Como posso ajudar?'
    },
    en: {
      nav_home: 'Home',
      nav_about: 'About',
      nav_services: 'Services',
      nav_gallery: 'Gallery',
      nav_contact: 'Contact',
      hero_title: 'Pest control with trust and quality',
      hero_lead: 'Since 2019 we protect homes, businesses, hotels and vehicles in Luanda. Safe methods for health and the environment.',
      hero_cta1: 'Request quote',
      hero_cta2: 'View services',
      hero_stat1: 'Since 2019',
      hero_stat2: '24/24 technician',
      hero_stat3: 'Luanda',
      hero_badge: 'Combat & Prevention — ANGOPRAGAS is the best partner for your business or home.',
      about_label: 'About us',
      about_title: 'Trust and quality since 2019',
      about_p1: 'ANGOPRAGAS DESINFESTAÇÃO offers training, consultancy, service delivery and product sales for pest control.',
      about_p2: 'We choose methods that are safe for human health and the environment. We work in condominiums, residences, companies, offices, shopping centres, hotels and restaurants.',
      feat1_t: 'Training & Consultancy',
      feat1_d: 'Technical training and advice for companies and individuals.',
      feat2_t: 'Service delivery',
      feat2_d: 'Pest control and disinfection with a specialised team.',
      feat3_t: 'Product sales',
      feat3_d: 'Professional products for pest prevention and control.',
      services_label: 'Services',
      services_title: 'Complete pest control solutions',
      svc1_t: 'Pest control',
      svc1_d: 'Elimination and prevention of rats, cockroaches, ants, mosquitoes, termites, fleas, flies and other pests.',
      svc2_t: 'Vehicle disinfection',
      svc2_d: 'Drive in comfort. We safely and effectively remove pests from your vehicle interior.',
      svc3_t: 'Commercial spaces',
      svc3_d: 'Hotels, restaurants, offices and shopping centres. Continuous and discreet protection.',
      areas_title: 'We work in',
      pests_label: 'Treatment against',
      pests_title: 'Pests we control',
      gallery_label: 'Gallery',
      gallery_title: 'Our work',
      gallery_cta: 'See on Instagram',
      contact_label: 'Contact',
      contact_title: 'Get in touch',
      contact_addr: 'Rua do Partido — Benfica, Luanda',
      contact_hours: 'Office: Mon–Fri 09:00–17:30 · Technical area 24/24',
      form_name: 'Name',
      form_phone: 'Phone / WhatsApp',
      form_service: 'Service of interest',
      form_msg: 'Message',
      form_submit: 'Send via WhatsApp',
      form_note: 'The form opens WhatsApp with a pre-filled message. Fast reply.',
      footer_tag: 'Pest control, disinfection and consultancy in Luanda.',
      footer_nav: 'Navigation',
      footer_services: 'Services',
      footer_contact: 'Contact',
      ai_title: 'ANGOPRAGAS Assistant',
      ai_placeholder: 'Type your question…',
      ai_welcome: 'Hello! I am the ANGOPRAGAS assistant. I can help with services, hours and quotes. How can I help?'
    }
  };

  function setLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'pt' ? 'pt' : 'en';
    langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Update select options
    const sel = document.getElementById('service');
    if (sel) {
      const opts = lang === 'pt'
        ? ['Controlo de pragas', 'Desinfestação de viatura', 'Ambiente comercial / hotel', 'Formação / Consultoria', 'Compra de produtos', 'Outro']
        : ['Pest control', 'Vehicle disinfection', 'Commercial / hotel', 'Training / Consultancy', 'Product purchase', 'Other'];
      sel.innerHTML = '<option value="">' + (lang === 'pt' ? 'Seleccione…' : 'Select…') + '</option>' +
        opts.map(o => `<option value="${o}">${o}</option>`).join('');
    }
  }

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  /* ---------- Contact form → WhatsApp ---------- */
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const service = document.getElementById('service').value;
      const msg = document.getElementById('message').value.trim();

      if (!name || !phone) {
        alert(currentLang === 'pt' ? 'Por favor preencha nome e telefone.' : 'Please fill name and phone.');
        return;
      }

      let text = currentLang === 'pt'
        ? `Olá ANGOPRAGAS!%0A%0A*Nome:* ${encodeURIComponent(name)}%0A*Telefone:* ${encodeURIComponent(phone)}%0A*Serviço:* ${encodeURIComponent(service || 'Não especificado')}%0A%0A*Mensagem:*%0A${encodeURIComponent(msg || 'Gostaria de solicitar um orçamento.')}`
        : `Hello ANGOPRAGAS!%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Service:* ${encodeURIComponent(service || 'Not specified')}%0A%0A*Message:*%0A${encodeURIComponent(msg || 'I would like to request a quote.')}`;

      window.open(`https://wa.me/244926855239?text=${text}`, '_blank');
    });
  }

  /* ---------- AI Chat (simple rule-based) ---------- */
  const knowledge = {
    pt: [
      { keys: ['preço', 'preco', 'custo', 'orçamento', 'orcamento', 'quanto'], reply: 'Os preços dependem do tipo de praga, área e frequência. Envie-nos uma mensagem no WhatsApp (+244 926 855 239) com o local e o problema — fazemos orçamento rápido e sem compromisso.' },
      { keys: ['horário', 'horario', 'aberto', 'funciona', 'hora'], reply: 'Escritório: Segunda a Sexta, 09:00–17:30. Área técnica (produção) disponível 24/24. Pode contactar-nos a qualquer hora pelo WhatsApp.' },
      { keys: ['onde', 'morada', 'endereço', 'endereco', 'localização', 'localizacao', 'benfica'], reply: 'Estamos em Rua do Partido — Benfica, Luanda (também referenciado como Benfica depois na Esplanada Palanca).' },
      { keys: ['rato', 'ratos', 'barata', 'baratas', 'formiga', 'mosquito', 'térmita', 'termita', 'pulga', 'mosca'], reply: 'Combatemos ratos, baratas, formigas, mosquitos, térmitas, pulgas, moscas, pragas de grão e outras. Métodos seguros para pessoas e ambiente. Peça orçamento pelo WhatsApp.' },
      { keys: ['viatura', 'carro', 'ambulância', 'ambulancia', 'veículo', 'veiculo'], reply: 'Sim, fazemos desinfestação de viaturas (incluindo ambulâncias e veículos comerciais). Conduza com conforto — contacte-nos para agendar.' },
      { keys: ['serviço', 'servico', 'o que fazem', 'oferecem'], reply: 'Oferecemos: controlo de pragas, desinfestação de viaturas, formação e consultoria, e venda de produtos. Actuamos em residências, empresas, hotéis, restaurantes e mais.' },
      { keys: ['pagamento', 'pagar', 'mcx', 'express'], reply: 'Aceitamos pagamentos via MCX Express e outros métodos. Confirme no momento do orçamento.' },
      { keys: ['contacto', 'contato', 'whatsapp', 'telefone', 'email'], reply: 'WhatsApp: +244 926 855 239\nEmail: angopragas@gmail.com\nInstagram: @angopragas_desinfestacao\nFacebook: angopragasoficial' },
      { keys: ['olá', 'ola', 'bom dia', 'boa tarde', 'oi', 'hey'], reply: 'Olá! Como posso ajudar? Pode perguntar sobre serviços, horários, local ou pedir orientação para orçamento.' }
    ],
    en: [
      { keys: ['price', 'cost', 'quote', 'how much'], reply: 'Prices depend on the pest type, area and frequency. Message us on WhatsApp (+244 926 855 239) with the location and problem — we provide a fast, no-obligation quote.' },
      { keys: ['hour', 'open', 'schedule', 'time'], reply: 'Office: Monday to Friday, 09:00–17:30. Technical team available 24/24. You can contact us anytime on WhatsApp.' },
      { keys: ['where', 'address', 'location', 'benfica'], reply: 'We are at Rua do Partido — Benfica, Luanda (also near Esplanada Palanca).' },
      { keys: ['rat', 'cockroach', 'ant', 'mosquito', 'termite', 'flea', 'fly'], reply: 'We control rats, cockroaches, ants, mosquitoes, termites, fleas, flies, grain pests and more. Safe methods for people and the environment. Request a quote on WhatsApp.' },
      { keys: ['vehicle', 'car', 'ambulance'], reply: 'Yes, we disinfect vehicles (including ambulances and commercial vehicles). Drive in comfort — contact us to schedule.' },
      { keys: ['service', 'what do you', 'offer'], reply: 'We offer: pest control, vehicle disinfection, training & consultancy, and product sales. We work in homes, companies, hotels, restaurants and more.' },
      { keys: ['payment', 'pay', 'mcx'], reply: 'We accept MCX Express and other methods. Confirm when you request a quote.' },
      { keys: ['contact', 'whatsapp', 'phone', 'email'], reply: 'WhatsApp: +244 926 855 239\nEmail: angopragas@gmail.com\nInstagram: @angopragas_desinfestacao\nFacebook: angopragasoficial' },
      { keys: ['hello', 'hi', 'hey', 'good morning'], reply: 'Hello! How can I help? Ask about services, hours, location or guidance for a quote.' }
    ]
  };

  function addMsg(text, type) {
    const div = document.createElement('div');
    div.className = 'ai-msg ' + type;
    div.textContent = text;
    aiMessages.appendChild(div);
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }

  function getReply(userText) {
    const t = userText.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const list = knowledge[currentLang] || knowledge.pt;
    for (const item of list) {
      if (item.keys.some(k => t.includes(k))) return item.reply;
    }
    return currentLang === 'pt'
      ? 'Obrigado pela pergunta. Para uma resposta precisa, envie mensagem no WhatsApp +244 926 855 239 ou use o formulário de contacto. A equipa responde rapidamente.'
      : 'Thanks for your question. For a precise answer, message WhatsApp +244 926 855 239 or use the contact form. The team replies quickly.';
  }

  function sendAi() {
    const text = aiInput.value.trim();
    if (!text) return;
    addMsg(text, 'user');
    aiInput.value = '';
    setTimeout(() => addMsg(getReply(text), 'bot'), 400);
  }

  if (aiToggle && aiChat) {
    aiToggle.addEventListener('click', () => {
      aiChat.classList.toggle('open');
      aiToggle.classList.toggle('active');
      if (aiChat.classList.contains('open') && aiMessages.children.length === 0) {
        addMsg(translations[currentLang].ai_welcome, 'bot');
      }
    });
  }

  if (aiClose) {
    aiClose.addEventListener('click', () => {
      aiChat.classList.remove('open');
      aiToggle.classList.remove('active');
    });
  }

  if (aiSend) aiSend.addEventListener('click', sendAi);
  if (aiInput) {
    aiInput.addEventListener('keypress', e => { if (e.key === 'Enter') sendAi(); });
  }

  aiQuick.forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.textContent;
      addMsg(q, 'user');
      setTimeout(() => addMsg(getReply(q), 'bot'), 400);
    });
  });

  /* ---------- Active nav on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a, .mobile-menu a');

  function onScroll() {
    const scrollY = window.scrollY + 100;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const h = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollY >= top && scrollY < top + h) {
        navLinks.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === '#' + id);
        });
      }
    });
  }
  window.addEventListener('scroll', onScroll);

  /* Init */
  setLang('pt');
})();
