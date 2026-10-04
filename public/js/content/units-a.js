// Units 1–4 · Months 1–4
// Format reminders:
//  words / phrases: [italian, french, egyptianArabic, pronunciationHint?]
//  notes: arrays of short paragraphs. *text* = Italian example (rendered LTR, highlighted).
//  {name} = learner first name, {partner} = partner name.

export const unitsA = [
  // ───────────────────────────── 1
  {
    id: 'u1', month: 1, milestone: 'm1', icon: 'wave', hue: 'rose',
    title: { it: 'Primi passi', fr: 'Premiers pas', ar: 'أول خطوات' },
    canDo: {
      fr: 'Prononcer l’italien, saluer, me présenter et demander comment ça va.',
      ar: 'أنطق الإيطالي، أسلّم، أعرّف نفسي وأسأل الناس عاملين إيه.',
    },
    lessons: [
      {
        id: 'u1l1', title: { it: 'I suoni', fr: 'Les sons de l’italien', ar: 'أصوات الإيطالي' },
        goal: { fr: 'Lire un mot italien sans hésiter.', ar: 'أقرا أي كلمة إيطالي من غير ما أتلخبط.' },
        note: {
          fr: [
            'Bonne nouvelle : l’italien se lit presque comme il s’écrit. Toutes les lettres se prononcent, et les voyelles sont « pures » : *u* se dit « ou » (*uno*), *e* se dit « é » ou « è », jamais muet.',
            '*c* et *g* devant *e* / *i* font « tch » et « dj » : *ciao* (tchao), *gelato* (djé-la-to). Avec un *h*, le son devient dur : *chi* (ki), *spaghetti* (spa-ghé-tti).',
            '*gn* = comme dans « montagne » (*gnocchi*). *gli* ≈ « lli » de « million » (*famiglia*). *sc* devant *e* / *i* = « ch » (*pesce*).',
            'Les doubles consonnes s’entendent : tiens-les un peu plus longtemps. *nonna* (grand-mère) n’est pas *nona* (neuvième) !',
          ],
          ar: [
            'خبر حلو: الإيطالي بيتقري زي ما بيتكتب. كل الحروف بتتنطق، و *u* دايماً «و» (*uno*)، و *e* دايماً «إي» أو «إ».',
            '*c* و *g* قبل *e* و *i* بيبقوا «تش» و «دج»: *ciao* (تشاو)، *gelato* (دجيلاتو). ولو بعدهم *h* الصوت بيبقى «ك» و «ج» المصرية: *chi* (كي)، *spaghetti* (سباجيتي).',
            '*gn* زي «نيـ» (*gnocchi* = نيوكي). *gli* قريبة من «لْيـ» (*famiglia*). *sc* قبل *e* أو *i* = «ش» (*pesce* = بيشي).',
            'الحرف المتشدد بيتنطق أطول، زي الشدة في العربي: *nonna* (تيتة) غير *nona* (التاسعة).',
          ],
        },
        compare: {
          fr: 'Piège pour les francophones : *u* = « ou », et le *e* final se prononce toujours : *pane* = « pa-né ».',
          ar: 'الشدة اللي في العربي بتساعدك جداً في الحروف المتشددة: *pizza*، *nonna*، *latte*.',
        },
        words: [
          ['ciao', 'salut / au revoir', 'أهلاً / سلام', 'tchao'],
          ['chi?', 'qui ?', 'مين؟', 'ki'],
          ['il gelato', 'la glace', 'الآيس كريم', 'djé-la-to'],
          ['gli spaghetti', 'les spaghettis', 'الإسباجيتي', 'spa-ghé-tti'],
          ['la famiglia', 'la famille', 'العيلة', 'fa-mi-llia'],
          ['gli gnocchi', 'les gnocchis', 'النيوكي', 'gno-kki'],
          ['il pesce', 'le poisson', 'السمك', 'pé-ché'],
          ['la pizza', 'la pizza', 'البيتزا', 'pi-tsa'],
          ['la nonna', 'la grand-mère', 'تيتة', 'non-na'],
          ['la casa', 'la maison', 'البيت', 'ka-za'],
        ],
        phrases: [
          ['Ciao, nonna!', 'Salut, mamie !', 'أهلاً يا تيتة!'],
          ['Chi è?', 'Qui est-ce ?', 'مين ده؟'],
          ['Un gelato, per favore.', 'Une glace, s’il vous plaît.', 'آيس كريم، لو سمحت.'],
        ],
      },
      {
        id: 'u1l2', title: { it: 'Buongiorno!', fr: 'Saluer et remercier', ar: 'السلام والشكر' },
        goal: { fr: 'Saluer n’importe qui, à toute heure, et dire merci.', ar: 'أسلّم على أي حد في أي وقت وأقول شكراً.' },
        note: {
          fr: [
            '*Ciao* veut dire bonjour ET au revoir, mais seulement entre amis ou en famille.',
            'Avec une commerçante, une voisine ou un inconnu : *buongiorno* jusqu’au début de l’après-midi, puis *buonasera*. Pour partir : *arrivederci*.',
            '*Grazie* → on te répond *prego* (de rien). *Prego* veut aussi dire « je vous en prie, allez-y ».',
          ],
          ar: [
            '*Ciao* معناها أهلاً ومع السلامة، بس مع الصحاب والعيلة بس.',
            'مع البياع أو الجيران أو حد متعرفيهوش: *buongiorno* لحد بعد الضهر، وبعدين *buonasera*. وإنتي ماشية: *arrivederci*.',
            'لما تقولي *grazie* هيردّوا *prego* (العفو). و *prego* كمان معناها «اتفضلي».',
          ],
        },
        compare: {
          fr: 'Très proche du français : *buongiorno* = bonjour, *buonasera* = bonsoir, *signora* = madame, *signore* = monsieur.',
          ar: '*buongiorno* = صباح الخير، *buonasera* = مسا الخير. و *signora* = مدام.',
        },
        culture: {
          fr: 'En Italie, on dit *buongiorno* en entrant dans un magasin et *arrivederci* en sortant. C’est attendu, même dans un supermarché.',
          ar: 'في إيطاليا لازم تقولي *buongiorno* وإنتي داخلة أي محل و *arrivederci* وإنتي خارجة.',
        },
        words: [
          ['buongiorno', 'bonjour', 'صباح الخير'],
          ['buonasera', 'bonsoir', 'مسا الخير'],
          ['buonanotte', 'bonne nuit', 'تصبح على خير'],
          ['arrivederci', 'au revoir', 'مع السلامة'],
          ['grazie', 'merci', 'شكراً'],
          ['prego', 'de rien / je vous en prie', 'العفو / اتفضل'],
          ['per favore', 's’il vous plaît', 'لو سمحت'],
          ['scusi', 'excusez-moi', 'لا مؤاخذة'],
          ['sì', 'oui', 'أيوه'],
          ['no', 'non', 'لأ'],
        ],
        phrases: [
          ['Buongiorno, signora!', 'Bonjour, madame !', 'صباح الخير يا مدام!'],
          ['Grazie mille!', 'Merci beaucoup !', 'ألف شكر!'],
          ['Arrivederci, buona giornata!', 'Au revoir, bonne journée !', 'مع السلامة، يومك سعيد!'],
          ['Scusi, signore!', 'Excusez-moi, monsieur !', 'لو سمحت يا أستاذ!'],
          ['Buonasera a tutti!', 'Bonsoir à tous !', 'مسا الخير يا جماعة!'],
        ],
      },
      {
        id: 'u1l3', title: { it: 'Mi chiamo…', fr: 'Me présenter', ar: 'أعرّف نفسي' },
        goal: { fr: 'Dire mon prénom, d’où je viens et quelles langues je parle.', ar: 'أقول اسمي ومنين وبتكلم أنهي لغات.' },
        note: {
          fr: [
            'Pour te présenter : *mi chiamo* + prénom, ou simplement *sono* + prénom.',
            'Comme en français, il y a deux manières de s’adresser à quelqu’un : *tu* (amis, famille) et *Lei* (politesse, comme « vous »). *Di dove sei?* (tu) → *Di dove è?* (Lei).',
            'Les adjectifs s’accordent : un homme est *egiziano*, toi tu es *egiziana*.',
          ],
          ar: [
            'عشان تعرّفي نفسك: *mi chiamo* + اسمك، أو ببساطة *sono* + اسمك.',
            'زي الفرنساوي فيه *tu* للصحاب والعيلة، و *Lei* للاحترام (زي «حضرتك»). *Di dove sei?* (إنتي منين) ← *Di dove è?* (حضرتك منين).',
            'الصفة بتتغير: الراجل *egiziano*، وإنتي *egiziana*.',
          ],
        },
        compare: {
          fr: 'Les langues ne prennent pas de majuscule : *parlo francese*. Et *il Cairo* → *del Cairo* (de + le = du), exactement comme en français.',
          ar: 'أسامي اللغات بتتكتب بحرف صغير: *parlo francese*. و *il Cairo* (القاهرة) فيها «ال» زي العربي بالظبط!',
        },
        words: [
          ['mi chiamo', 'je m’appelle', 'اسمي'],
          ['sono', 'je suis', 'أنا'],
          ['piacere', 'enchanté(e)', 'تشرفنا'],
          ['come ti chiami?', 'comment tu t’appelles ?', 'اسمك إيه؟'],
          ['di dove sei?', 'tu viens d’où ?', 'إنتي منين؟'],
          ['egiziana', 'égyptienne', 'مصرية'],
          ['italiano', 'italien', 'إيطالي'],
          ['parlo', 'je parle', 'باتكلم'],
          ['il francese', 'le français', 'الفرنساوي'],
          ['l’arabo', 'l’arabe', 'العربي'],
          ['un po’', 'un peu', 'شوية'],
        ],
        phrases: [
          ['Ciao, mi chiamo {name}.', 'Salut, je m’appelle {name}.', 'أهلاً، اسمي {name}.'],
          ['Piacere, sono Luca.', 'Enchanté, je suis Luca.', 'تشرفنا، أنا لوكا.'],
          ['Sono egiziana, del Cairo.', 'Je suis égyptienne, du Caire.', 'أنا مصرية، من القاهرة.'],
          ['Parlo francese e arabo.', 'Je parle français et arabe.', 'باتكلم فرنساوي وعربي.'],
          ['Parlo un po’ di italiano.', 'Je parle un peu italien.', 'باتكلم إيطالي شوية.'],
          ['Di dove è, signora?', 'D’où êtes-vous, madame ?', 'حضرتك منين يا مدام؟'],
        ],
      },
      {
        id: 'u1l4', title: { it: 'Come stai?', fr: 'Comment ça va ?', ar: 'إزيك؟' },
        goal: { fr: 'Demander et dire comment je vais.', ar: 'أسأل وأقول أنا عاملة إيه.' },
        note: {
          fr: [
            '*Come stai?* (tu) / *Come sta?* (Lei). On répond avec *sto* : *sto bene*, *sto male*.',
            'Pour décrire ton état, on utilise aussi *sono* : *sono stanca* (je suis fatiguée), *sono contenta*.',
            'Au féminin, *-o* devient *-a* : *stanco → stanca*, *contento → contenta*.',
          ],
          ar: [
            '*Come stai?* (للصحاب) / *Come sta?* (لحضرتك). والرد بـ *sto*: *sto bene* (كويسة)، *sto male* (مش كويسة).',
            'وعشان توصفي حالك تقدري تقولي *sono*: *sono stanca* (تعبانة)، *sono contenta* (مبسوطة).',
            'للبنت *-o* بتبقى *-a*: *stanco ← stanca*.',
          ],
        },
        compare: {
          fr: '*stare* ressemble à « rester », mais sert à dire comment on va : *come stai?* ≈ « comment tu vas ? ».',
          ar: 'زي العربي: الولد «تعبان» والبنت «تعبانة» — و في الإيطالي *stanco* و *stanca*.',
        },
        words: [
          ['come stai?', 'comment ça va ? (tu)', 'إزيك؟'],
          ['come sta?', 'comment allez-vous ?', 'إزي حضرتك؟'],
          ['bene', 'bien', 'كويس'],
          ['molto bene', 'très bien', 'كويس جداً'],
          ['così così', 'comme ci, comme ça', 'نص نص'],
          ['male', 'mal', 'مش كويس'],
          ['e tu?', 'et toi ?', 'وإنت؟'],
          ['stanca', 'fatiguée', 'تعبانة'],
          ['contenta', 'contente', 'مبسوطة'],
          ['a presto', 'à bientôt', 'أشوفك قريب'],
          ['a domani', 'à demain', 'أشوفك بكرة'],
        ],
        phrases: [
          ['Ciao! Come stai?', 'Salut ! Comment ça va ?', 'أهلاً! إزيك؟'],
          ['Sto bene, grazie. E tu?', 'Je vais bien, merci. Et toi ?', 'أنا كويسة، شكراً. وإنت؟'],
          ['Buongiorno, come sta?', 'Bonjour, comment allez-vous ?', 'صباح الخير، إزي حضرتك؟'],
          ['Oggi sono un po’ stanca.', 'Aujourd’hui, je suis un peu fatiguée.', 'النهارده أنا تعبانة شوية.'],
          ['Sono molto contenta di essere qui.', 'Je suis très contente d’être ici.', 'أنا مبسوطة جداً إني هنا.'],
          ['Ci vediamo domani!', 'On se voit demain !', 'نتقابل بكرة!'],
        ],
      },
      {
        id: 'u1s', kind: 'scene',
        title: { it: 'La nuova vicina', fr: 'Scène : la voisine', ar: 'مشهد: الجارة' },
        goal: { fr: 'Faire connaissance avec ta voisine dans l’escalier.', ar: 'تتعرفي على جارتك على السلم.' },
        setting: { fr: 'Ton immeuble, un matin. Une dame t’arrête dans l’escalier.', ar: 'عمارتك، الصبح. ست بتوقفك على السلم.' },
        npc: { name: 'Giulia', role: { fr: 'ta voisine', ar: 'جارتك' } },
        turns: [
          {
            npc: ['Buongiorno! Lei è la nuova vicina?', 'Bonjour ! Vous êtes la nouvelle voisine ?', 'صباح الخير! حضرتك الجارة الجديدة؟'],
            options: [
              { t: ['Sì, buongiorno! Mi chiamo {name}.', 'Oui, bonjour ! Je m’appelle {name}.', 'أيوه، صباح الخير! اسمي {name}.'], ok: true },
              { t: ['Arrivederci!', 'Au revoir !', 'مع السلامة!'], fb: { fr: '*Arrivederci* = au revoir. Ici, la conversation commence : réponds *sì* et salue-la.', ar: '*Arrivederci* يعني مع السلامة. الكلام لسه بادئ: قولي *sì* وسلّمي عليها.' } },
              { t: ['Buonanotte!', 'Bonne nuit !', 'تصبحي على خير!'], fb: { fr: '*Buonanotte* se dit le soir, avant d’aller dormir. Le matin : *buongiorno*.', ar: '*Buonanotte* بتتقال بالليل قبل النوم. الصبح: *buongiorno*.' } },
            ],
          },
          {
            npc: ['Piacere, io sono Giulia. Di dov’è?', 'Enchantée, je suis Giulia. D’où êtes-vous ?', 'تشرفنا، أنا جوليا. حضرتك منين؟'],
            options: [
              { t: ['Piacere! Sono egiziana, del Cairo.', 'Enchantée ! Je suis égyptienne, du Caire.', 'تشرفنا! أنا مصرية، من القاهرة.'], ok: true },
              { t: ['Sono stanca.', 'Je suis fatiguée.', 'أنا تعبانة.'], fb: { fr: 'Giulia demande d’où tu viens : *di dove* = d’où. Réponds *sono egiziana*.', ar: 'جوليا بتسأل إنتي منين: *di dove* = منين. قولي *sono egiziana*.' } },
              { t: ['Mi chiamo Giulia.', 'Je m’appelle Giulia.', 'اسمي جوليا.'], fb: { fr: 'Giulia, c’est son prénom à elle ! Toi, tu dis d’où tu viens.', ar: 'جوليا ده اسمها هي! إنتي قولي إنتي منين.' } },
            ],
          },
          {
            npc: ['Che bello! E parla italiano?', 'Super ! Et vous parlez italien ?', 'حلو أوي! وبتتكلمي إيطالي؟'],
            options: [
              { t: ['Un po’. Sto imparando!', 'Un peu. J’apprends !', 'شوية. أنا بتعلم!'], ok: true, reply: ['Brava! Si sente!', 'Bravo ! Ça s’entend !', 'شاطرة! باين!'] },
              { t: ['Parlo francese e arabo, e un po’ di italiano.', 'Je parle français et arabe, et un peu italien.', 'باتكلم فرنساوي وعربي، وشوية إيطالي.'], ok: true, reply: ['Tre lingue? Complimenti!', 'Trois langues ? Félicitations !', 'تلات لغات؟ برافو!'] },
              { t: ['Sì, sono di Udine.', 'Oui, je suis de Udine.', 'أيوه، أنا من أوديني.'], fb: { fr: 'Elle demande si tu parles italien. *Un po’* (un peu) est la réponse parfaite.', ar: 'هي بتسأل لو بتتكلمي إيطالي. *Un po’* (شوية) هي الإجابة المثالية.' } },
            ],
          },
          {
            npc: ['Allora benvenuta a Udine!', 'Alors bienvenue à Udine !', 'طيب أهلاً بيكي في أوديني!'],
            options: [
              { t: ['Grazie mille! Buona giornata!', 'Merci beaucoup ! Bonne journée !', 'ألف شكر! يومك سعيد!'], ok: true },
              { t: ['Prego!', 'De rien !', 'العفو!'], fb: { fr: '*Prego* répond à un merci. Ici, c’est toi qui remercies : *grazie*!', ar: '*Prego* رد على الشكر. هنا إنتي اللي المفروض تشكري: *grazie*!' } },
            ],
          },
        ],
        end: ['Buona giornata anche a Lei! Arrivederci!', 'Bonne journée à vous aussi ! Au revoir !', 'يومك سعيد إنتي كمان! مع السلامة!'],
      },
    ],
  },

  // ───────────────────────────── 2
  {
    id: 'u2', month: 2, milestone: 'm1', icon: 'cup', hue: 'gold',
    title: { it: 'Al bar', fr: 'Au café', ar: 'في الكافيه' },
    canDo: {
      fr: 'Commander au bar, comprendre un prix et payer.',
      ar: 'أطلب في الكافيه، أفهم السعر وأدفع.',
    },
    lessons: [
      {
        id: 'u2l1', title: { it: 'Un caffè, per favore', fr: 'Commander', ar: 'أطلب' },
        goal: { fr: 'Commander une boisson et un croissant poliment.', ar: 'أطلب مشروب وكرواسون بأدب.' },
        note: {
          fr: [
            'Articles indéfinis : *un* devant un mot masculin (*un caffè*), *una* devant un mot féminin (*una brioche*), *un’* devant un mot féminin qui commence par une voyelle (*un’acqua*).',
            '*Vorrei* = « je voudrais ». C’est la formule polie parfaite pour commander. Plus direct : *per me…* (pour moi…).',
          ],
          ar: [
            'أدوات النكرة: *un* للمذكر (*un caffè*)، *una* للمؤنث (*una brioche*)، و *un’* للمؤنث اللي بيبدأ بحرف متحرك (*un’acqua*).',
            '*Vorrei* = «كنت عايزة» — دي الطريقة المؤدبة للطلب. وممكن كمان *per me…* (ليّا…).',
          ],
        },
        compare: { fr: '*un / una* = « un / une ». *vorrei* = « je voudrais » : même logique de politesse.', ar: 'في الإيطالي كل اسم ليه مذكر أو مؤنث زي العربي، بس مش دايماً نفس النوع.' },
        culture: {
          fr: '*Un caffè* = un expresso, souvent bu debout au comptoir (*al banco*). Dans le Nord-Est, le croissant s’appelle souvent *brioche* (ailleurs *cornetto*). Le soir, à Udine, les amis se retrouvent pour *un tajut*, un petit verre — mot frioulan.',
          ar: '*Un caffè* يعني إسبريسو، وغالباً بيتشرب واقف على البار. في الشمال الكرواسون اسمه *brioche*. وبالليل في أوديني الناس بتتقابل على *un tajut* (كاس صغير) — كلمة فريولي.',
        },
        words: [
          ['un caffè', 'un café (expresso)', 'قهوة إسبريسو'],
          ['un cappuccino', 'un cappuccino', 'كابتشينو'],
          ['un tè', 'un thé', 'شاي'],
          ['un’acqua', 'une eau', 'مية'],
          ['frizzante', 'gazeuse', 'فوّارة'],
          ['naturale', 'plate (eau)', 'عادية (مية)'],
          ['una brioche', 'un croissant', 'كرواسون'],
          ['un succo', 'un jus', 'عصير'],
          ['vorrei', 'je voudrais', 'كنت عايزة'],
          ['per me', 'pour moi', 'ليّا'],
          ['il bicchiere', 'le verre', 'الكوباية'],
        ],
        phrases: [
          ['Un caffè, per favore.', 'Un café, s’il vous plaît.', 'قهوة لو سمحت.'],
          ['Vorrei un cappuccino e una brioche.', 'Je voudrais un cappuccino et un croissant.', 'كنت عايزة كابتشينو وكرواسون.'],
          ['Per me un tè, grazie.', 'Pour moi un thé, merci.', 'ليّا شاي، شكراً.'],
          ['Un bicchiere d’acqua naturale, per favore.', 'Un verre d’eau plate, s’il vous plaît.', 'كوباية مية عادية لو سمحت.'],
          ['Il caffè è buonissimo!', 'Le café est délicieux !', 'القهوة حلوة جداً!'],
        ],
      },
      {
        id: 'u2l2', title: { it: 'Da zero a dieci', fr: 'Nombres 0–10 et prix', ar: 'الأرقام ٠–١٠ والأسعار' },
        goal: { fr: 'Comprendre un petit prix et demander l’addition.', ar: 'أفهم سعر صغير وأطلب الحساب.' },
        note: {
          fr: [
            'Pour un prix : *sono* + nombre + *euro*. *Euro* ne change jamais au pluriel : *tre euro*.',
            'Les centimes : *due euro e cinquanta* = 2,50 €.',
            'Attention : *sei* = six… et aussi « tu es ». Le contexte t’aidera !',
          ],
          ar: [
            'للسعر: *sono* + الرقم + *euro*. وكلمة *euro* مبتتغيرش في الجمع: *tre euro*.',
            'السنتات: *due euro e cinquanta* = ٢٫٥٠ يورو.',
            'خلي بالك: *sei* = ستة… وكمان «إنتي». السياق هيوضح.',
          ],
        },
        compare: { fr: 'Les mots qui finissent par une voyelle accentuée ne changent pas au pluriel : *un caffè, due caffè*.', ar: 'الكلمات اللي آخرها حرف عليه علامة مبتتغيرش في الجمع: *un caffè, due caffè*.' },
        words: [
          ['zero', 'zéro', 'صفر'], ['uno', 'un', 'واحد'], ['due', 'deux', 'اتنين'], ['tre', 'trois', 'تلاتة'],
          ['quattro', 'quatre', 'أربعة'], ['cinque', 'cinq', 'خمسة'], ['sei', 'six', 'ستة'], ['sette', 'sept', 'سبعة'],
          ['otto', 'huit', 'تمانية'], ['nove', 'neuf', 'تسعة'], ['dieci', 'dix', 'عشرة'],
          ['quanto costa?', 'combien ça coûte ?', 'بكام؟'],
          ['quant’è?', 'ça fait combien ?', 'الحساب كام؟'],
          ['il conto', 'l’addition', 'الحساب (الفاتورة)'],
        ],
        phrases: [
          ['Il conto, per favore.', 'L’addition, s’il vous plaît.', 'الحساب لو سمحت.'],
          ['Sono tre euro.', 'Ça fait trois euros.', 'تلاتة يورو.'],
          ['Due caffè, per favore.', 'Deux cafés, s’il vous plaît.', 'اتنين قهوة لو سمحت.'],
          ['Quanto costa una brioche?', 'Combien coûte un croissant ?', 'الكرواسون بكام؟'],
          ['Sono due euro e cinquanta.', 'Ça fait deux euros cinquante.', 'اتنين يورو وخمسين سنت.'],
        ],
      },
      {
        id: 'u2l3', title: { it: 'Da undici a venti', fr: 'Nombres 11–20 et payer', ar: 'الأرقام ١١–٢٠ والدفع' },
        goal: { fr: 'Payer par carte ou en espèces, et comprendre la monnaie.', ar: 'أدفع بالكارت أو كاش وأفهم الباقي.' },
        note: {
          fr: [
            '11 à 16 finissent par *-dici* : *undici, dodici, tredici, quattordici, quindici, sedici*.',
            '17 à 19 commencent par *dicia-* : *diciassette, diciotto, diciannove*. Comme « dix-sept », mais en un seul mot. 20 = *venti*.',
            'L’article *lo* s’utilise devant *s* + consonne et devant *z* : *lo scontrino*, *lo zucchero*.',
          ],
          ar: [
            'من ١١ لـ ١٦ آخرهم *-dici*: *undici… sedici*.',
            'من ١٧ لـ ١٩ أولهم *dicia-*: *diciassette, diciotto, diciannove*. و ٢٠ = *venti*.',
            'أداة *lo* بتيجي قبل *s* + حرف ساكن وقبل *z*: *lo scontrino*.',
          ],
        },
        culture: { fr: 'En Italie, on te donne toujours un ticket de caisse (*scontrino*). Garde-le en sortant.', ar: 'في إيطاليا دايماً هيدوكي إيصال (*scontrino*). خليه معاكي وإنتي خارجة.' },
        words: [
          ['undici', 'onze', 'حداشر'], ['dodici', 'douze', 'اتناشر'], ['tredici', 'treize', 'تلاتاشر'],
          ['quattordici', 'quatorze', 'أربعتاشر'], ['quindici', 'quinze', 'خمستاشر'], ['sedici', 'seize', 'ستاشر'],
          ['diciassette', 'dix-sept', 'سبعتاشر'], ['diciotto', 'dix-huit', 'تمنتاشر'], ['diciannove', 'dix-neuf', 'تسعتاشر'],
          ['venti', 'vingt', 'عشرين'],
          ['la carta', 'la carte (bancaire)', 'الكارت (الفيزا)'],
          ['in contanti', 'en espèces', 'كاش'],
          ['lo scontrino', 'le ticket de caisse', 'الإيصال'],
          ['il resto', 'la monnaie (rendue)', 'الباقي'],
        ],
        phrases: [
          ['Posso pagare con la carta?', 'Je peux payer par carte ?', 'ممكن أدفع بالكارت؟'],
          ['Pago in contanti.', 'Je paie en espèces.', 'هدفع كاش.'],
          ['Ecco il resto.', 'Voici votre monnaie.', 'اتفضلي الباقي.'],
          ['Sono quindici euro.', 'Ça fait quinze euros.', 'خمستاشر يورو.'],
          ['Vuole lo scontrino?', 'Vous voulez le ticket ?', 'عايزة الإيصال؟'],
        ],
      },
      {
        id: 'u2s', kind: 'scene',
        title: { it: 'Al bar in piazza', fr: 'Scène : au bar', ar: 'مشهد: في الكافيه' },
        goal: { fr: 'Commander et payer au bar de la Piazza della Libertà.', ar: 'تطلبي وتدفعي في كافيه ميدان ليبرتا.' },
        setting: { fr: 'Un bar sous les arcades, Piazza della Libertà. Le barista t’attend.', ar: 'كافيه تحت البواكي في ميدان ليبرتا. الباريستا مستنيكي.' },
        npc: { name: 'Marco', role: { fr: 'barista', ar: 'باريستا' } },
        turns: [
          {
            npc: ['Buongiorno! Cosa prende?', 'Bonjour ! Qu’est-ce que vous prenez ?', 'صباح الخير! تشربي إيه؟'],
            options: [
              { t: ['Un caffè, per favore.', 'Un café, s’il vous plaît.', 'قهوة لو سمحت.'], ok: true, reply: ['Subito!', 'Tout de suite !', 'حالاً!'] },
              { t: ['Vorrei un cappuccino e una brioche.', 'Je voudrais un cappuccino et un croissant.', 'كنت عايزة كابتشينو وكرواسون.'], ok: true, reply: ['Certo! La brioche vuota o alla crema?', 'Bien sûr ! Le croissant nature ou à la crème ?', 'أكيد! الكرواسون سادة ولا بالكريمة؟'] },
              { t: ['Il conto, per favore.', 'L’addition, s’il vous plaît.', 'الحساب لو سمحت.'], fb: { fr: '*Il conto* = l’addition. D’abord, on commande !', ar: '*Il conto* يعني الحساب. الأول اطلبي!' } },
            ],
          },
          {
            npc: ['Altro?', 'Autre chose ?', 'حاجة تانية؟'],
            options: [
              { t: ['No, grazie, basta così.', 'Non merci, ce sera tout.', 'لأ شكراً، كده كفاية.'], ok: true },
              { t: ['Sì, un bicchiere d’acqua, per favore.', 'Oui, un verre d’eau, s’il vous plaît.', 'أيوه، كوباية مية لو سمحت.'], ok: true, reply: ['Ecco l’acqua.', 'Voilà l’eau.', 'اتفضلي المية.'] },
              { t: ['Sì, sono stanca.', 'Oui, je suis fatiguée.', 'أيوه، أنا تعبانة.'], fb: { fr: '*Altro?* = autre chose ? Réponds avec ce que tu veux, ou *no, grazie*.', ar: '*Altro?* = حاجة تانية؟ قولي عايزة إيه أو *no, grazie*.' } },
            ],
          },
          {
            npc: ['Ecco a Lei.', 'Voilà pour vous.', 'اتفضلي.'],
            options: [
              { t: ['Grazie! Quant’è?', 'Merci ! Ça fait combien ?', 'شكراً! الحساب كام؟'], ok: true },
              { t: ['Come si chiama?', 'Comment vous appelez-vous ?', 'اسم حضرتك إيه؟'], fb: { fr: 'Tu demandes son nom ! Pour le prix : *Quant’è?*', ar: 'إنتي بتسألي على اسمه! للسعر قولي: *Quant’è?*' } },
            ],
          },
          {
            npc: ['Sono due euro e venti.', 'Ça fait deux euros vingt.', 'اتنين يورو وعشرين سنت.'],
            options: [
              { t: ['Posso pagare con la carta?', 'Je peux payer par carte ?', 'ممكن أدفع بالكارت؟'], ok: true, reply: ['Certo, prego.', 'Bien sûr, allez-y.', 'أكيد، اتفضلي.'] },
              { t: ['Ecco tre euro.', 'Voici trois euros.', 'اتفضل تلاتة يورو.'], ok: true, reply: ['Grazie. Ecco il resto: ottanta centesimi.', 'Merci. Voici la monnaie : quatre-vingts centimes.', 'شكراً. اتفضلي الباقي: تمانين سنت.'] },
              { t: ['Dodici euro? È tanto!', 'Douze euros ? C’est beaucoup !', 'اتناشر يورو؟ كتير!'], fb: { fr: 'Il a dit *due* (2), pas *dodici* (12) : 2,20 €.', ar: 'هو قال *due* (اتنين)، مش *dodici* (اتناشر): ٢٫٢٠ يورو.' } },
            ],
          },
        ],
        end: ['Grazie a Lei, buona giornata!', 'Merci à vous, bonne journée !', 'شكراً ليكي، يومك سعيد!'],
      },
    ],
  },

  // ───────────────────────────── 3
  {
    id: 'u3', month: 3, milestone: 'm2', icon: 'people', hue: 'sage',
    title: { it: 'Persone care', fr: 'Famille et amis', ar: 'العيلة والصحاب' },
    canDo: {
      fr: 'Parler de ma famille, décrire quelqu’un et rencontrer les amis de {partner}.',
      ar: 'أتكلم عن عيلتي، أوصف حد، وأتعرف على صحاب {partner}.',
    },
    lessons: [
      {
        id: 'u3l1', title: { it: 'La mia famiglia', fr: 'Ma famille', ar: 'عيلتي' },
        goal: { fr: 'Présenter les membres de ma famille.', ar: 'أعرّف الناس على عيلتي.' },
        note: {
          fr: [
            'Avec un membre de la famille au singulier, pas d’article : *mia madre*, *mio fratello*.',
            'Au pluriel, l’article revient : *i miei genitori*, *le mie sorelle*. Et *il mio fidanzato* garde toujours l’article.',
            '*mio / mia* s’accordent avec la personne dont on parle : *mio padre*, *mia sorella*.',
          ],
          ar: [
            'مع فرد واحد من العيلة مفيش أداة: *mia madre* (أمي)، *mio fratello* (أخويا).',
            'في الجمع الأداة بترجع: *i miei genitori* (أهلي). و *il mio fidanzato* (خطيبي) دايماً بالأداة.',
            '*mio / mia* بيتغيروا حسب الشخص: *mio padre*، *mia sorella*.',
          ],
        },
        compare: { fr: '*mio / mia* = « mon / ma ». Mais en italien, on ne dit jamais « le mon père » : *mio padre* tout court.', ar: 'في العربي الملكية في آخر الكلمة (أخويا)، في الإيطالي قبلها: *mio fratello*.' },
        words: [
          ['la famiglia', 'la famille', 'العيلة'],
          ['la madre', 'la mère', 'الأم'],
          ['il padre', 'le père', 'الأب'],
          ['la mamma', 'maman', 'ماما'],
          ['il papà', 'papa', 'بابا'],
          ['il fratello', 'le frère', 'الأخ'],
          ['la sorella', 'la sœur', 'الأخت'],
          ['i genitori', 'les parents', 'الأهل (الأب والأم)'],
          ['il nonno', 'le grand-père', 'جدو'],
          ['la zia', 'la tante', 'الخالة / العمة'],
          ['il fidanzato', 'le fiancé / le copain', 'الخطيب'],
        ],
        phrases: [
          ['Questa è mia madre.', 'Voici ma mère.', 'دي مامتي.'],
          ['Ho un fratello e due sorelle.', 'J’ai un frère et deux sœurs.', 'عندي أخ واختين.'],
          ['I miei genitori abitano al Cairo.', 'Mes parents habitent au Caire.', 'أهلي ساكنين في القاهرة.'],
          ['Il mio fidanzato si chiama {partner}.', 'Mon fiancé s’appelle {partner}.', 'خطيبي اسمه {partner}.'],
          ['Mia nonna cucina benissimo.', 'Ma grand-mère cuisine très bien.', 'تيتة بتطبخ حلو أوي.'],
        ],
      },
      {
        id: 'u3l2', title: { it: 'Essere e avere', fr: 'Être et avoir', ar: 'يكون وعنده' },
        goal: { fr: 'Utiliser les deux verbes les plus importants.', ar: 'أستعمل أهم فعلين في اللغة.' },
        note: {
          fr: [
            '*essere* (être) et *avere* (avoir) marchent presque comme en français : *ho venticinque anni* = j’ai 25 ans, *ho fame* = j’ai faim.',
            'Le *h* de *ho, hai, ha, hanno* est muet : *ho* se dit « o ».',
            'Attention : *è* (avec accent) = « est », *e* (sans accent) = « et ».',
            'Le pronom sujet est souvent omis : *sono stanca* suffit, pas besoin de *io*.',
          ],
          ar: [
            '*avere* = «عند»: *ho* (عندي)، *hai* (عندك)، *ha* (عندها)… *ho venticinque anni* = عندي ٢٥ سنة.',
            'حرف *h* في *ho, hai, ha, hanno* مبيتنطقش: *ho* = «أو».',
            'خلي بالك: *è* (بعلامة) = «يكون»، و *e* (من غير علامة) = «و».',
            'زي العربي بالظبط، الضمير ممكن يتشال: *sono stanca* = تعبانة، من غير «أنا».',
          ],
        },
        compare: { fr: 'L’âge et la faim se disent avec *avere*, comme en français : *ho fame*, *ho sete*, *ho 25 anni*.', ar: 'الإيطالي بيحذف الضمير زي العربي بالظبط — ودي ميزة ليكي!' },
        words: [
          ['io sono', 'je suis', 'أنا (أكون)'],
          ['tu sei', 'tu es', 'إنت (تكون)'],
          ['lui / lei è', 'il / elle est', 'هو / هي (يكون)'],
          ['noi siamo', 'nous sommes', 'إحنا (نكون)'],
          ['loro sono', 'ils / elles sont', 'هما (يكونوا)'],
          ['io ho', 'j’ai', 'عندي'],
          ['tu hai', 'tu as', 'عندك'],
          ['lei ha', 'elle a', 'عندها'],
          ['noi abbiamo', 'nous avons', 'عندنا'],
          ['loro hanno', 'ils / elles ont', 'عندهم'],
        ],
        phrases: [
          ['Ho venticinque anni.', 'J’ai vingt-cinq ans.', 'عندي خمسة وعشرين سنة.'],
          ['Quanti anni hai?', 'Quel âge as-tu ?', 'عندك كام سنة؟'],
          ['Luca è di Udine.', 'Luca est de Udine.', 'لوكا من أوديني.'],
          ['Abbiamo un gatto.', 'Nous avons un chat.', 'عندنا قطة.'],
          ['Siamo a casa.', 'Nous sommes à la maison.', 'إحنا في البيت.'],
          ['Hai fame?', 'Tu as faim ?', 'إنت جعان؟'],
        ],
      },
      {
        id: 'u3l3', title: { it: 'Com’è?', fr: 'Décrire quelqu’un', ar: 'أوصف حد' },
        goal: { fr: 'Dire comment est une personne.', ar: 'أقول الشخص شكله وطبعه إيه.' },
        note: {
          fr: [
            'Adjectifs en *-o* : *-o* au masculin, *-a* au féminin : *alto, alta*.',
            'Adjectifs en *-e* : pareils pour les deux : *gentile, giovane, divertente*.',
            'L’adjectif se place en général après le nom : *un ragazzo simpatico*.',
          ],
          ar: [
            'الصفات اللي آخرها *-o*: *-o* للولد و *-a* للبنت: *alto, alta*.',
            'الصفات اللي آخرها *-e*: زي بعض للاتنين: *gentile, giovane*.',
            'الصفة بتيجي بعد الاسم زي العربي: *un ragazzo simpatico* (ولد دمه خفيف).',
          ],
        },
        compare: { fr: '*Bravo / brava* = doué(e), compétent(e) ; on l’utilise aussi pour féliciter : *Brava!*', ar: 'الصفة بعد الاسم وبتتغير مع المؤنث — زي العربي تماماً.' },
        words: [
          ['simpatico', 'sympathique', 'دمه خفيف'],
          ['gentile', 'gentil(le)', 'ذوق'],
          ['bello', 'beau', 'حلو'],
          ['alto', 'grand (taille)', 'طويل'],
          ['basso', 'petit (taille)', 'قصير'],
          ['giovane', 'jeune', 'صغير في السن'],
          ['bravo', 'doué / bon', 'شاطر'],
          ['divertente', 'amusant(e)', 'بيضحّك'],
          ['timido', 'timide', 'مكسوف'],
          ['molto', 'très', 'أوي'],
        ],
        phrases: [
          ['Luca è molto simpatico.', 'Luca est très sympathique.', 'لوكا دمه خفيف أوي.'],
          ['Chiara è simpatica e divertente.', 'Chiara est sympa et drôle.', 'كيارا دمها خفيف وبتضحّك.'],
          ['{partner} è alto e gentile.', '{partner} est grand et gentil.', '{partner} طويل وذوق.'],
          ['Sono un po’ timida.', 'Je suis un peu timide.', 'أنا مكسوفة شوية.'],
          ['Brava! Parli bene.', 'Bravo ! Tu parles bien.', 'شاطرة! بتتكلمي كويس.'],
        ],
      },
      {
        id: 'u3s', kind: 'scene',
        title: { it: 'Aperitivo con gli amici', fr: 'Scène : l’apéritif', ar: 'مشهد: خروجة مع الصحاب' },
        goal: { fr: 'Faire connaissance avec Luca, un ami de {partner}.', ar: 'تتعرفي على لوكا، صاحب {partner}.' },
        setting: { fr: 'Un vendredi soir, en terrasse via Mercatovecchio. Un ami de {partner} arrive.', ar: 'الجمعة بالليل، قعدة برّه في شارع ميركاتوفيكيو. صاحب {partner} وصل.' },
        npc: { name: 'Luca', role: { fr: 'ami de {partner}', ar: 'صاحب {partner}' } },
        turns: [
          {
            npc: ['Ciao! Tu sei {name}, vero? Io sono Luca, un amico di {partner}.', 'Salut ! Tu es {name}, c’est ça ? Moi c’est Luca, un ami de {partner}.', 'أهلاً! إنتي {name}، صح؟ أنا لوكا، صاحب {partner}.'],
            options: [
              { t: ['Sì! Piacere, Luca.', 'Oui ! Enchantée, Luca.', 'أيوه! تشرفنا يا لوكا.'], ok: true },
              { t: ['No, sono Luca.', 'Non, je suis Luca.', 'لأ، أنا لوكا.'], fb: { fr: 'C’est lui, Luca ! Toi, dis *sì* et *piacere*.', ar: 'هو اللي اسمه لوكا! قولي *sì* و *piacere*.' } },
            ],
          },
          {
            npc: ['Piacere mio! Hai fratelli o sorelle?', 'Tout le plaisir est pour moi ! Tu as des frères ou des sœurs ?', 'الشرف ليّا! عندك إخوات؟'],
            options: [
              { t: ['Sì, ho un fratello e una sorella.', 'Oui, j’ai un frère et une sœur.', 'أيوه، عندي أخ وأخت.'], ok: true, reply: ['Anch’io ho una sorella!', 'Moi aussi, j’ai une sœur !', 'أنا كمان عندي أخت!'] },
              { t: ['Ho una sorella. Si chiama Mariam.', 'J’ai une sœur. Elle s’appelle Mariam.', 'عندي أخت. اسمها مريم.'], ok: true, reply: ['Che bel nome!', 'Quel joli prénom !', 'اسم حلو أوي!'] },
              { t: ['Sì, sono due euro.', 'Oui, ça fait deux euros.', 'أيوه، اتنين يورو.'], fb: { fr: 'On n’est plus au bar ! *fratelli* = frères, *sorelle* = sœurs. Utilise *ho* (j’ai).', ar: 'إحنا مش في الكافيه! *fratelli* = إخوات. استعملي *ho* (عندي).' } },
            ],
          },
          {
            npc: ['E i tuoi genitori dove abitano?', 'Et tes parents, ils habitent où ?', 'وأهلك ساكنين فين؟'],
            options: [
              { t: ['Abitano al Cairo.', 'Ils habitent au Caire.', 'ساكنين في القاهرة.'], ok: true },
              { t: ['Ho venticinque anni.', 'J’ai vingt-cinq ans.', 'عندي ٢٥ سنة.'], fb: { fr: 'Luca demande *dove* (où) habitent tes parents, pas ton âge.', ar: 'لوكا بيسأل أهلك ساكنين *dove* (فين)، مش سنك.' } },
            ],
          },
          {
            npc: ['E Udine ti piace?', 'Et Udine, ça te plaît ?', 'وأوديني عاجباكي؟'],
            options: [
              { t: ['Sì, molto! È bellissima.', 'Oui, beaucoup ! Elle est magnifique.', 'أيوه جداً! حلوة أوي.'], ok: true },
              { t: ['Sì, sono simpatico.', 'Oui, je suis sympathique (masc.).', 'أيوه، أنا دمي خفيف (مذكر).'], fb: { fr: 'Deux soucis : on parle de Udine, et pour toi ce serait *simpatica* (féminin) !', ar: 'مشكلتين: الكلام عن أوديني، وإنتي المفروض *simpatica* (مؤنث)!' } },
            ],
          },
        ],
        end: ['Allora benvenuta! Cin cin!', 'Alors bienvenue ! Santé !', 'أهلاً بيكي! في صحتك!'],
      },
    ],
  },

  // ───────────────────────────── 4
  {
    id: 'u4', month: 4, milestone: 'm2', icon: 'basket', hue: 'sage',
    title: { it: 'Al supermercato', fr: 'Faire les courses', ar: 'في السوبر ماركت' },
    canDo: {
      fr: 'Acheter des produits, demander des quantités et comprendre les prix jusqu’à 100 €.',
      ar: 'أشتري حاجات، أطلب كميات، وأفهم الأسعار لحد ١٠٠ يورو.',
    },
    lessons: [
      {
        id: 'u4l1', title: { it: 'Frutta, verdura e altro', fr: 'Les aliments', ar: 'الأكل' },
        goal: { fr: 'Nommer les produits de base et faire le pluriel.', ar: 'أسمّي الحاجات الأساسية وأجمعها.' },
        note: {
          fr: [
            'Le pluriel change la dernière voyelle : *-o → -i* (*pomodoro → pomodori*), *-a → -e* (*mela → mele*), *-e → -i* (*pane → pani*).',
            'Les articles aussi : *il → i*, *la → le*, *l’* → *gli* (masc.) ou *le* (fém.).',
            'Irrégulier très courant : *l’uovo → le uova* (les œufs).',
          ],
          ar: [
            'الجمع بيغيّر آخر حرف: *-o ← -i* (*pomodoro ← pomodori*)، *-a ← -e* (*mela ← mele*)، *-e ← -i*.',
            'الأدوات كمان: *il ← i*، *la ← le*.',
            'شاذ ومهم: *l’uovo ← le uova* (البيض).',
          ],
        },
        compare: { fr: 'En français on ajoute un *-s* qu’on n’entend pas ; en italien, on entend toujours le pluriel !', ar: 'الجمع في الإيطالي أسهل من العربي: بس بتغيّري آخر حرف.' },
        words: [
          ['la mela', 'la pomme', 'التفاحة'],
          ['l’arancia', 'l’orange', 'البرتقانة'],
          ['il pomodoro', 'la tomate', 'الطماطم'],
          ['la patata', 'la pomme de terre', 'البطاطس'],
          ['la cipolla', 'l’oignon', 'البصل'],
          ['il pane', 'le pain', 'العيش'],
          ['il latte', 'le lait', 'اللبن'],
          ['le uova', 'les œufs', 'البيض'],
          ['il formaggio', 'le fromage', 'الجبنة'],
          ['il pollo', 'le poulet', 'الفراخ'],
          ['il riso', 'le riz', 'الرز'],
        ],
        phrases: [
          ['Mi servono tre mele.', 'J’ai besoin de trois pommes.', 'محتاجة تلات تفاحات.'],
          ['Il pane è fresco?', 'Le pain est frais ?', 'العيش طازة؟'],
          ['Compro il latte e le uova.', 'J’achète le lait et les œufs.', 'هشتري اللبن والبيض.'],
          ['Questi pomodori sono buonissimi.', 'Ces tomates sont délicieuses.', 'الطماطم دي حلوة أوي.'],
          ['Stasera faccio il riso con il pollo.', 'Ce soir, je fais du riz au poulet.', 'النهارده بالليل هعمل رز بالفراخ.'],
        ],
      },
      {
        id: 'u4l2', title: { it: 'Fino a cento', fr: 'Jusqu’à 100 et quantités', ar: 'لحد ١٠٠ والكميات' },
        goal: { fr: 'Comprendre un prix au supermarché et demander une quantité.', ar: 'أفهم السعر في السوبر ماركت وأطلب كمية.' },
        note: {
          fr: [
            'Bonne nouvelle : pas de « soixante-dix » ni de « quatre-vingts » ! *settanta* = 70, *ottanta* = 80, *novanta* = 90 — comme en Belgique ou en Suisse.',
            'Pour composer : *venti + tre = ventitré*. Devant *uno* et *otto*, la voyelle tombe : *ventuno*, *ventotto*.',
            '*Di* relie la quantité et le produit : *un chilo di mele*, *due etti di formaggio*.',
          ],
          ar: [
            'الأرقام بالعشرات: *trenta* ٣٠، *quaranta* ٤٠، *cinquanta* ٥٠، *sessanta* ٦٠، *settanta* ٧٠، *ottanta* ٨٠، *novanta* ٩٠، *cento* ١٠٠.',
            'التركيب: *venti + tre = ventitré* (العشرات الأول، عكس العربي!). قبل *uno* و *otto* الحرف بيقع: *ventuno*، *ventotto*.',
            '*di* بتربط الكمية بالحاجة: *un chilo di mele* (كيلو تفاح).',
          ],
        },
        compare: { fr: 'Pas de calcul comme « quatre-vingt-dix-sept » : *novantasette* = 90 + 7. Simple !', ar: 'خلي بالك: العربي بيقول «سبعة وتسعين» والإيطالي *novantasette* (تسعين وسبعة).' },
        culture: { fr: '*Un etto* = 100 grammes. Au comptoir, on commande en *etti* : *due etti di formaggio*.', ar: '*Un etto* = ١٠٠ جرام. على الكاونتر بيطلبوا بالـ *etti*.' },
        words: [
          ['trenta', 'trente', 'تلاتين'], ['quaranta', 'quarante', 'أربعين'], ['cinquanta', 'cinquante', 'خمسين'],
          ['sessanta', 'soixante', 'ستين'], ['settanta', 'soixante-dix', 'سبعين'], ['ottanta', 'quatre-vingts', 'تمانين'],
          ['novanta', 'quatre-vingt-dix', 'تسعين'], ['cento', 'cent', 'مية'],
          ['un chilo', 'un kilo', 'كيلو'], ['mezzo chilo', 'un demi-kilo', 'نص كيلو'],
          ['un etto', '100 grammes', 'مية جرام'], ['una bottiglia', 'une bouteille', 'إزازة'],
        ],
        phrases: [
          ['Un chilo di mele, per favore.', 'Un kilo de pommes, s’il vous plaît.', 'كيلو تفاح لو سمحت.'],
          ['Mezzo chilo di pomodori.', 'Un demi-kilo de tomates.', 'نص كيلو طماطم.'],
          ['Due etti di formaggio.', 'Deux cents grammes de fromage.', 'ميتين جرام جبنة.'],
          ['Una bottiglia di acqua frizzante.', 'Une bouteille d’eau gazeuse.', 'إزازة مية فوّارة.'],
          ['Sono ventotto euro e novanta.', 'Ça fait vingt-huit euros quatre-vingt-dix.', 'تمانية وعشرين يورو وتسعين سنت.'],
        ],
      },
      {
        id: 'u4l3', title: { it: 'Al banco e alla cassa', fr: 'Au comptoir et à la caisse', ar: 'على الكاونتر والكاشير' },
        goal: { fr: 'Demander un produit, trouver un rayon et passer en caisse.', ar: 'أطلب حاجة، ألاقي القسم، وأحاسب.' },
        note: {
          fr: [
            'Pour demander poliment : *Mi dà…?* (Vous me donnez… ?) ou *Vorrei…*.',
            'Pour trouver un produit : *Scusi, dove si trova…?* ou plus simple *Dov’è…?*.',
            'Pour finir : *basta così* (ce sera tout).',
          ],
          ar: [
            'عشان تطلبي بأدب: *Mi dà…?* (ممكن تديني…؟) أو *Vorrei…*.',
            'عشان تدوري على حاجة: *Scusi, dove si trova…?* أو *Dov’è…?*.',
            'وفي الآخر: *basta così* (كده كفاية).',
          ],
        },
        culture: {
          fr: 'Le *Montasio* est un fromage du Frioul : c’est avec lui qu’on prépare le *frico*. À la caisse, les sacs sont payants : prends ton propre sac.',
          ar: 'جبنة *Montasio* من منطقة فريولي، وبيعملوا بيها أكلة *frico*. الأكياس في الكاشير بفلوس، فخدي شنطتك معاكي.',
        },
        words: [
          ['il carrello', 'le chariot', 'عربية السوبر ماركت'],
          ['la cassa', 'la caisse', 'الكاشير'],
          ['la busta', 'le sac (de caisse)', 'الكيس'],
          ['il reparto', 'le rayon', 'القسم'],
          ['lo sconto', 'la réduction', 'الخصم'],
          ['mi dà…?', 'vous me donnez… ?', 'ممكن تديني…؟'],
          ['basta così', 'ce sera tout', 'كده كفاية'],
          ['dove si trova…?', 'où se trouve… ?', 'فين…؟'],
          ['senza', 'sans', 'من غير'],
          ['in offerta', 'en promotion', 'عليه عرض'],
        ],
        phrases: [
          ['Mi dà due etti di Montasio, per favore?', 'Vous me donnez 200 g de Montasio, s’il vous plaît ?', 'ممكن تديني ميتين جرام مونتازيو لو سمحت؟'],
          ['Basta così, grazie.', 'Ce sera tout, merci.', 'كده كفاية، شكراً.'],
          ['Scusi, dove si trova il latte?', 'Excusez-moi, où se trouve le lait ?', 'لو سمحت، اللبن فين؟'],
          ['Contiene carne di maiale?', 'Ça contient du porc ?', 'فيه لحم خنزير؟'],
          ['Le serve una busta?', 'Vous avez besoin d’un sac ?', 'محتاجة كيس؟'],
          ['Questo è in offerta.', 'Ceci est en promotion.', 'ده عليه عرض.'],
        ],
      },
      {
        id: 'u4s', kind: 'scene',
        title: { it: 'Al banco formaggi', fr: 'Scène : au rayon fromage', ar: 'مشهد: عند الجبنة' },
        goal: { fr: 'Acheter du fromage au comptoir et comprendre le prix.', ar: 'تشتري جبنة من الكاونتر وتفهمي السعر.' },
        setting: { fr: 'Le comptoir fromages et charcuterie d’un supermarché de Udine.', ar: 'كاونتر الجبن في سوبر ماركت في أوديني.' },
        npc: { name: 'Paola', role: { fr: 'vendeuse', ar: 'البياعة' } },
        turns: [
          {
            npc: ['Buongiorno, signora. Mi dica!', 'Bonjour, madame. Je vous écoute !', 'صباح الخير يا مدام. اتفضلي!'],
            options: [
              { t: ['Vorrei due etti di Montasio, per favore.', 'Je voudrais 200 g de Montasio, s’il vous plaît.', 'كنت عايزة ميتين جرام مونتازيو لو سمحت.'], ok: true },
              { t: ['Vorrei due chili di Montasio.', 'Je voudrais deux kilos de Montasio.', 'كنت عايزة اتنين كيلو مونتازيو.'], fb: { fr: 'Deux kilos de fromage, c’est énorme ! Au comptoir, on compte en *etti* (100 g).', ar: 'اتنين كيلو جبنة كتير أوي! على الكاونتر بنعد بالـ *etti* (١٠٠ جرام).' } },
              { t: ['Mi chiamo Montasio.', 'Je m’appelle Montasio.', 'اسمي مونتازيو.'], fb: { fr: 'Tu viens de dire « je m’appelle Montasio » ! Pour commander : *Vorrei…*', ar: 'إنتي قولتي «اسمي مونتازيو»! عشان تطلبي: *Vorrei…*' } },
            ],
          },
          {
            npc: ['Ecco a Lei. Serve altro?', 'Voilà pour vous. Autre chose ?', 'اتفضلي. محتاجة حاجة تانية؟'],
            options: [
              { t: ['Sì, anche un etto di bresaola.', 'Oui, aussi 100 g de bresaola.', 'أيوه، وكمان مية جرام بريزاولا.'], ok: true, reply: ['Perfetto, ecco qui.', 'Parfait, voilà.', 'تمام، اتفضلي.'] },
              { t: ['No, grazie, basta così.', 'Non merci, ce sera tout.', 'لأ شكراً، كده كفاية.'], ok: true },
            ],
          },
          {
            npc: ['Allora, sono sette euro e quaranta. Paga alla cassa.', 'Alors, ça fait sept euros quarante. Vous payez à la caisse.', 'يبقى سبعة يورو وأربعين سنت. تدفعي في الكاشير.'],
            options: [
              { t: ['Va bene, grazie!', 'D’accord, merci !', 'تمام، شكراً!'], ok: true },
              { t: ['Settanta euro? È tanto!', 'Soixante-dix euros ? C’est beaucoup !', 'سبعين يورو؟ كتير!'], fb: { fr: 'Attention : *sette* (7) ≠ *settanta* (70). *Sette euro e quaranta* = 7,40 €.', ar: 'خلي بالك: *sette* (٧) غير *settanta* (٧٠). يعني ٧٫٤٠ يورو.' } },
            ],
          },
          {
            npc: ['Le serve una busta?', 'Vous avez besoin d’un sac ?', 'محتاجة كيس؟'],
            options: [
              { t: ['No, grazie, ho la mia borsa.', 'Non merci, j’ai mon sac.', 'لأ شكراً، معايا شنطتي.'], ok: true },
              { t: ['Sì, una busta, per favore.', 'Oui, un sac, s’il vous plaît.', 'أيوه، كيس لو سمحت.'], ok: true, reply: ['Sono dieci centesimi in più.', 'C’est dix centimes de plus.', 'كده عشرة سنت زيادة.'] },
            ],
          },
        ],
        end: ['Grazie e buona giornata!', 'Merci et bonne journée !', 'شكراً ويومك سعيد!'],
      },
    ],
  },
];
