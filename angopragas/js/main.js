/* ANGOPRAGAS — interactions */
(function () {
  'use strict';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  const header = $('.header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  const burger = $('.burger');
  const mobileNav = $('.mobile-nav');
  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      const open = burger.classList.toggle('open');
      mobileNav.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    $$('a', mobileNav).forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  let lang = 'pt';
  const T = {
    pt: {
      nav_home: 'Início', nav_about: 'Sobre', nav_services: 'Serviços',
      nav_products: 'Produtos', nav_prices: 'Preços', nav_contact: 'Contacto',
      hero_h1: 'Proteja o seu espaço com quem entende de pragas',
      hero_lead: 'Desde 2019 em Luanda. Controlo de pragas, desinfestação e consultoria com métodos seguros para pessoas e ambiente.',
      hero_cta1: 'Agendar visita', hero_cta2: 'Ver serviços',
      meta1: 'Desde 2019', meta2: 'Área técnica 24/24', meta3: 'Luanda',
      hero_cap: 'Combate e prevenção — o parceiro certo para o seu negócio ou lar.',
      about_eye: 'Sobre nós', about_h2: 'Confiança e qualidade desde 2019',
      about_p1: 'A ANGOPRAGAS DESINFESTAÇÃO combina formação, consultoria, prestação de serviços e venda de produtos para controlo de pragas.',
      about_p2: 'Não escolhemos só pelo preço: valorizamos capacidade técnica, métodos seguros e resultados que protegem a saúde e o bem-estar das pessoas.',
      p1t: 'Formação e Consultoria', p1d: 'Capacitação e aconselhamento técnico para empresas e particulares.',
      p2t: 'Prestação de serviços', p2d: 'Dedetização e desinfestação com equipa especializada e resposta rápida.',
      p3t: 'Venda de produtos', p3d: 'Produtos profissionais para prevenção e combate contínuo.',
      svc_eye: 'Serviços', svc_h2: 'Soluções completas de desinfestação',
      svc1t: 'Controlo de pragas', svc1d: 'Eliminação e prevenção de ratos, baratas, formigas, mosquitos, térmitas, pulgas, moscas e outras pragas.',
      svc2t: 'Desinfestação de viaturas', svc2d: 'Conduza com conforto. Tratamento seguro e eficaz no interior da sua viatura, ambulância ou frota.',
      svc3t: 'Espaços comerciais', svc3d: 'Hotéis, restaurantes, escritórios e centros comerciais — protecção discreta e contínua.',
      areas_t: 'Actuamos em',
      pest_eye: 'Dedetização contra', pest_h2: 'Pragas que combatemos',
      prod_eye: 'Produtos', prod_h2: 'Produtos para controlo de pragas',
      prod_lead: 'Soluções profissionais para prevenção e combate. Preços orientativos — confirme disponibilidade.',
      pd1t: 'Insecticida residual', pd1d: 'Tratamento de longa duração para baratas, formigas e insectos rastejantes. Uso profissional.',
      pd2t: 'Gel anti-baratas', pd2d: 'Aplicação discreta em cozinhas e áreas de serviço. Efeito em cadeia na colónia.',
      pd3t: 'Armadilha para roedores', pd3d: 'Estações de isco e armadilhas para ratos. Segurança para crianças e animais.',
      pd4t: 'Repelente de mosquitos', pd4d: 'Spray e soluções para áreas exteriores e interiores. Protecção prolongada.',
      pd_cta: 'Encomendar',
      price_eye: 'Preços', price_h2: 'Pacotes claros, orçamento justo',
      price_lead: 'Valores orientativos. O orçamento final depende da área, tipo de praga e frequência.',
      pr1n: 'Residencial', pr1v: 'A partir de 25.000 Kz', pr1d: 'Casas e apartamentos — tratamento pontual ou plano de manutenção.',
      pr2n: 'Comercial', pr2v: 'A partir de 45.000 Kz', pr2d: 'Escritórios, lojas, restaurantes e hotéis — contratos mensais disponíveis.',
      pr3n: 'Viaturas', pr3v: 'A partir de 15.000 Kz', pr3d: 'Carros, ambulâncias e frota — desinfestação completa do habitáculo.',
      pr_cta: 'Agendar visita',
      pr_note: 'Pagamentos via MCX Express e outros métodos. Orçamento sem compromisso.',
      gal_eye: 'Galeria', gal_h2: 'O nosso trabalho', gal_cta: 'Ver no Instagram',
      ct_eye: 'Contacto', ct_h2: 'Agende a sua visita',
      ct_addr: 'Rua do Partido — Benfica, Luanda',
      ct_hours: 'Escritório Seg–Sex 09:00–17:30 · Técnico 24/24',
      f_name: 'Nome', f_phone: 'Telefone / WhatsApp', f_svc: 'Serviço de interesse',
      f_msg: 'Mensagem', f_send: 'Enviar via WhatsApp',
      f_note: 'Abre o WhatsApp com a mensagem já preenchida. Resposta rápida.',
      foot_tag: 'Controlo de pragas, desinfestação e consultoria em Luanda.',
      foot_nav: 'Navegação', foot_svc: 'Serviços', foot_ct: 'Contacto',
      ai_title: 'Assistente ANGOPRAGAS',
      ai_ph: 'Escreva a sua dúvida…',
      ai_hi: 'Olá! Sou o assistente da ANGOPRAGAS. Posso ajudar com serviços, preços, produtos e localização. Como posso ajudar?'
    },
    en: {
      nav_home: 'Home', nav_about: 'About', nav_services: 'Services',
      nav_products: 'Products', nav_prices: 'Prices', nav_contact: 'Contact',
      hero_h1: 'Protect your space with pest control specialists',
      hero_lead: 'Since 2019 in Luanda. Pest control, disinfection and consultancy with methods safe for people and the environment.',
      hero_cta1: 'Book a visit', hero_cta2: 'View services',
      meta1: 'Since 2019', meta2: 'Technical team 24/24', meta3: 'Luanda',
      hero_cap: 'Combat and prevention — the right partner for your business or home.',
      about_eye: 'About us', about_h2: 'Trust and quality since 2019',
      about_p1: 'ANGOPRAGAS DESINFESTAÇÃO combines training, consultancy, service delivery and product sales for pest control.',
      about_p2: 'We do not choose by price alone: we value technical capacity, safe methods and results that protect people’s health and wellbeing.',
      p1t: 'Training and Consultancy', p1d: 'Technical training and advice for companies and individuals.',
      p2t: 'Service delivery', p2d: 'Pest control and disinfection with a specialised team and fast response.',
      p3t: 'Product sales', p3d: 'Professional products for continuous prevention and control.',
      svc_eye: 'Services', svc_h2: 'Complete pest control solutions',
      svc1t: 'Pest control', svc1d: 'Elimination and prevention of rats, cockroaches, ants, mosquitoes, termites, fleas, flies and other pests.',
      svc2t: 'Vehicle disinfection', svc2d: 'Drive in comfort. Safe and effective treatment of your vehicle, ambulance or fleet interior.',
      svc3t: 'Commercial spaces', svc3d: 'Hotels, restaurants, offices and shopping centres — discreet continuous protection.',
      areas_t: 'We work in',
      pest_eye: 'Treatment against', pest_h2: 'Pests we control',
      prod_eye: 'Products', prod_h2: 'Pest control products',
      prod_lead: 'Professional solutions for prevention and control. Indicative prices — confirm availability.',
      pd1t: 'Residual insecticide', pd1d: 'Long-lasting treatment for cockroaches, ants and crawling insects. Professional use.',
      pd2t: 'Anti-cockroach gel', pd2d: 'Discreet application in kitchens and service areas. Colony chain effect.',
      pd3t: 'Rodent trap', pd3d: 'Bait stations and traps for rats. Safe for children and pets.',
      pd4t: 'Mosquito repellent', pd4d: 'Spray and solutions for outdoor and indoor areas. Long protection.',
      pd_cta: 'Order',
      price_eye: 'Prices', price_h2: 'Clear packages, fair quotes',
      price_lead: 'Indicative values. Final quote depends on area, pest type and frequency.',
      pr1n: 'Residential', pr1v: 'From 25,000 Kz', pr1d: 'Homes and apartments — one-off treatment or maintenance plan.',
      pr2n: 'Commercial', pr2v: 'From 45,000 Kz', pr2d: 'Offices, shops, restaurants and hotels — monthly contracts available.',
      pr3n: 'Vehicles', pr3v: 'From 15,000 Kz', pr3d: 'Cars, ambulances and fleets — full cabin disinfection.',
      pr_cta: 'Book a visit',
      pr_note: 'Payments via MCX Express and other methods. No-obligation quote.',
      gal_eye: 'Gallery', gal_h2: 'Our work', gal_cta: 'See on Instagram',
      ct_eye: 'Contact', ct_h2: 'Schedule your appointment',
      ct_addr: 'Rua do Partido — Benfica, Luanda',
      ct_hours: 'Office Mon–Fri 09:00–17:30 · Technical 24/24',
      f_name: 'Name', f_phone: 'Phone / WhatsApp', f_svc: 'Service of interest',
      f_msg: 'Message', f_send: 'Send via WhatsApp',
      f_note: 'Opens WhatsApp with a pre-filled message. Fast reply.',
      foot_tag: 'Pest control, disinfection and consultancy in Luanda.',
      foot_nav: 'Navigation', foot_svc: 'Services', foot_ct: 'Contact',
      ai_title: 'ANGOPRAGAS Assistant',
      ai_ph: 'Type your question…',
      ai_hi: 'Hello! I am the ANGOPRAGAS assistant. I can help with services, prices, products and location. How can I help?'
    }
  };

  function setLang(l) {
    lang = l;
    document.documentElement.lang = l === 'pt' ? 'pt' : 'en';
    $$('.lang button').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
    $$('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (!T[l][k]) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = T[l][k];
      else el.textContent = T[l][k];
    });
    const sel = $('#service');
    if (sel) {
      const opts = l === 'pt'
        ? ['Controlo de pragas', 'Desinfestação de viatura', 'Espaço comercial / hotel', 'Formação / Consultoria', 'Produtos', 'Outro']
        : ['Pest control', 'Vehicle disinfection', 'Commercial / hotel', 'Training / Consultancy', 'Products', 'Other'];
      sel.innerHTML = `<option value="">${l === 'pt' ? 'Seleccione…' : 'Select…'}</option>` +
        opts.map(o => `<option value="${o}">${o}</option>`).join('');
    }
    const badge = $('.price-card.featured');
    if (badge) badge.setAttribute('data-badge', l === 'pt' ? 'Mais pedido' : 'Most requested');
  }

  $$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

  const form = $('#contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = $('#name').value.trim();
      const phone = $('#phone').value.trim();
      const service = $('#service').value;
      const msg = $('#message').value.trim();
      if (!name || !phone) {
        alert(lang === 'pt' ? 'Preencha nome e telefone.' : 'Please fill name and phone.');
        return;
      }
      const text = lang === 'pt'
        ? `Olá ANGOPRAGAS!%0A%0A*Nome:* ${encodeURIComponent(name)}%0A*Telefone:* ${encodeURIComponent(phone)}%0A*Serviço:* ${encodeURIComponent(service || 'Não especificado')}%0A%0A*Mensagem:*%0A${encodeURIComponent(msg || 'Gostaria de agendar uma visita / orçamento.')}`
        : `Hello ANGOPRAGAS!%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Service:* ${encodeURIComponent(service || 'Not specified')}%0A%0A*Message:*%0A${encodeURIComponent(msg || 'I would like to book a visit / quote.')}`;
      window.open(`https://wa.me/244926855239?text=${text}`, '_blank');
    });
  }

  const knowledge = {
    pt: [
      { k: ['preço', 'preco', 'custo', 'orçamento', 'orcamento', 'quanto', 'valor'], r: 'Orientativos: Residencial a partir de 25.000 Kz, Comercial a partir de 45.000 Kz, Viaturas a partir de 15.000 Kz. Produtos desde 4.800 Kz. Peça orçamento exacto no WhatsApp +244 926 855 239.' },
      { k: ['produto', 'insecticida', 'gel', 'armadilha', 'repelente'], r: 'Vendemos insecticida residual, gel anti-baratas, armadilhas para roedores e repelente de mosquitos. Preços orientativos na secção Produtos. Confirme disponibilidade no WhatsApp.' },
      { k: ['horário', 'horario', 'aberto', 'funciona'], r: 'Escritório: Segunda a Sexta, 09:00–17:30. Área técnica 24/24. Contacte a qualquer hora pelo WhatsApp.' },
      { k: ['onde', 'morada', 'endereço', 'endereco', 'localização', 'localizacao', 'benfica'], r: 'Rua do Partido — Benfica, Luanda.' },
      { k: ['rato', 'barata', 'formiga', 'mosquito', 'térmita', 'termita', 'pulga', 'mosca'], r: 'Combatemos ratos, baratas, formigas, mosquitos, térmitas, pulgas, moscas, pragas de grão e outras. Métodos seguros.' },
      { k: ['viatura', 'carro', 'ambulância', 'ambulancia', 'veículo', 'veiculo'], r: 'Sim — desinfestação de viaturas (particulares, frota e ambulâncias). A partir de 15.000 Kz.' },
      { k: ['serviço', 'servico', 'o que fazem', 'oferecem'], r: 'Controlo de pragas, desinfestação de viaturas, formação e consultoria, e venda de produtos.' },
      { k: ['pagamento', 'pagar', 'mcx'], r: 'Aceitamos MCX Express e outros métodos. Confirmamos no orçamento.' },
      { k: ['contacto', 'contato', 'whatsapp', 'telefone', 'email'], r: 'WhatsApp: +244 926 855 239\nEmail: angopragas@gmail.com' },
      { k: ['olá', 'ola', 'bom dia', 'boa tarde', 'oi'], r: 'Olá! Em que posso ajudar? Serviços, preços, produtos ou localização.' }
    ],
    en: [
      { k: ['price', 'cost', 'quote', 'how much'], r: 'From: Residential 25,000 Kz, Commercial 45,000 Kz, Vehicles 15,000 Kz. Products from 4,800 Kz. Exact quote on WhatsApp +244 926 855 239.' },
      { k: ['product', 'insecticide', 'gel', 'trap', 'repellent'], r: 'We sell residual insecticide, anti-cockroach gel, rodent traps and mosquito repellent. See Products section. Confirm on WhatsApp.' },
      { k: ['hour', 'open', 'schedule'], r: 'Office: Mon–Fri 09:00–17:30. Technical team 24/24.' },
      { k: ['where', 'address', 'location', 'benfica'], r: 'Rua do Partido — Benfica, Luanda.' },
      { k: ['rat', 'cockroach', 'ant', 'mosquito', 'termite', 'flea', 'fly'], r: 'We control rats, cockroaches, ants, mosquitoes, termites, fleas, flies and more.' },
      { k: ['vehicle', 'car', 'ambulance'], r: 'Yes — vehicle disinfection from 15,000 Kz.' },
      { k: ['service', 'what do you', 'offer'], r: 'Pest control, vehicle disinfection, training and consultancy, and product sales.' },
      { k: ['payment', 'pay', 'mcx'], r: 'We accept MCX Express and other methods.' },
      { k: ['contact', 'whatsapp', 'phone', 'email'], r: 'WhatsApp: +244 926 855 239\nEmail: angopragas@gmail.com' },
      { k: ['hello', 'hi', 'hey'], r: 'Hello! How can I help — services, prices, products or location?' }
    ]
  };

  const aiPanel = $('#ai-panel');
  const aiToggle = $('#ai-toggle');
  const aiMsgs = $('#ai-msgs');
  const aiInput = $('#ai-input');
  const aiSend = $('#ai-send');

  function addMsg(text, type) {
    const d = document.createElement('div');
    d.className = 'ai-bubble ' + type;
    d.textContent = text;
    aiMsgs.appendChild(d);
    aiMsgs.scrollTop = aiMsgs.scrollHeight;
  }

  function reply(q) {
    const t = q.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const list = knowledge[lang] || knowledge.pt;
    for (const item of list) {
      if (item.k.some(k => t.includes(k))) return item.r;
    }
    return lang === 'pt'
      ? 'Para uma resposta exacta, envie mensagem no WhatsApp +244 926 855 239 ou use o formulário.'
      : 'For a precise answer, message WhatsApp +244 926 855 239 or use the form.';
  }

  function send() {
    const text = aiInput.value.trim();
    if (!text) return;
    addMsg(text, 'user');
    aiInput.value = '';
    setTimeout(() => addMsg(reply(text), 'bot'), 380);
  }

  if (aiToggle && aiPanel) {
    aiToggle.addEventListener('click', () => {
      const open = aiPanel.classList.toggle('open');
      aiToggle.classList.toggle('active', open);
      if (open && !aiMsgs.children.length) addMsg(T[lang].ai_hi, 'bot');
    });
  }
  $('#ai-close')?.addEventListener('click', () => {
    aiPanel.classList.remove('open');
    aiToggle.classList.remove('active');
  });
  aiSend?.addEventListener('click', send);
  aiInput?.addEventListener('keypress', e => { if (e.key === 'Enter') send(); });
  $$('.ai-quick button').forEach(b => {
    b.addEventListener('click', () => {
      addMsg(b.textContent, 'user');
      setTimeout(() => addMsg(reply(b.textContent), 'bot'), 380);
    });
  });

  const sections = $$('section[id]');
  const links = $$('.nav a, .mobile-nav a');
  window.addEventListener('scroll', () => {
    const y = window.scrollY + 110;
    sections.forEach(s => {
      const id = s.id;
      if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
      }
    });
  }, { passive: true });

  setLang('pt');
})();
