// Units 9–12 · Months 9–12

export const unitsC = [
  // ───────────────────────────── 9
  {
    id: 'u9', month: 9, milestone: 'm3', icon: 'cross', hue: 'sage',
    title: { it: 'Salute', fr: 'Santé et pharmacie', ar: 'الصحة والصيدلية' },
    canDo: {
      fr: 'Dire où j’ai mal, décrire un symptôme et comprendre une posologie.',
      ar: 'أقول إيه اللي بيوجعني، أوصف الأعراض، وأفهم الجرعة.',
    },
    lessons: [
      {
        id: 'u9l1', title: { it: 'Il corpo', fr: 'Le corps', ar: 'الجسم' },
        goal: { fr: 'Dire où j’ai mal.', ar: 'أقول فين اللي بيوجعني.' },
        note: {
          fr: [
            'Deux façons de dire « j’ai mal » : *ho mal di* + partie du corps (*ho mal di testa*), ou *mi fa male* + la partie (*mi fa male la gamba*).',
            'Au pluriel : *mi fanno male i piedi*.',
            'Pluriels irréguliers : *la mano → le mani*, *il braccio → le braccia*, *l’orecchio → le orecchie*.',
          ],
          ar: [
            'طريقتين لـ«بيوجعني»: *ho mal di* + العضو (*ho mal di testa* = عندي صداع)، أو *mi fa male* + العضو (*mi fa male la gamba* = رجلي بتوجعني).',
            'للجمع: *mi fanno male i piedi* (رجليا بيوجعوني).',
            'جمع شاذ: *la mano ← le mani*، *il braccio ← le braccia*.',
          ],
        },
        compare: { fr: '*Mi fa male* ≈ « ça me fait mal » : la partie du corps est le sujet.', ar: '*Mi fa male la testa* زي «راسي بتوجعني» بالظبط.' },
        words: [
          ['la testa', 'la tête', 'الراس'],
          ['la gola', 'la gorge', 'الزور'],
          ['la pancia', 'le ventre', 'البطن'],
          ['lo stomaco', 'l’estomac', 'المعدة'],
          ['la schiena', 'le dos', 'الضهر (في الجسم)'],
          ['il dente', 'la dent', 'السنّة'],
          ['l’occhio', 'l’œil', 'العين'],
          ['l’orecchio', 'l’oreille', 'الودن'],
          ['il braccio', 'le bras', 'الدراع'],
          ['la gamba', 'la jambe', 'الرجل'],
          ['la mano', 'la main', 'الإيد'],
          ['il piede', 'le pied', 'القدم'],
        ],
        phrases: [
          ['Mi fa male la testa.', 'J’ai mal à la tête.', 'راسي بتوجعني.'],
          ['Mi fanno male i piedi.', 'J’ai mal aux pieds.', 'رجليا بيوجعوني.'],
          ['Ho mal di denti.', 'J’ai mal aux dents.', 'سناني بتوجعني.'],
          ['Ho mal di schiena da una settimana.', 'J’ai mal au dos depuis une semaine.', 'ضهري بيوجعني من أسبوع.'],
          ['Ho le mani fredde.', 'J’ai les mains froides.', 'إيديا ساقعة.'],
        ],
      },
      {
        id: 'u9l2', title: { it: 'Come si sente?', fr: 'Les symptômes', ar: 'الأعراض' },
        goal: { fr: 'Décrire un symptôme et depuis quand.', ar: 'أوصف العَرَض ومن إمتى.' },
        note: {
          fr: [
            'Les symptômes se disent avec *avere* : *ho la febbre*, *ho la tosse*, *ho il raffreddore*.',
            '*dal medico* = chez le médecin (*da* = chez).',
            '*sto meglio* = je vais mieux. *sto male* = je ne vais pas bien.',
          ],
          ar: [
            'الأعراض بتتقال بـ *avere* (عندي): *ho la febbre* (عندي سخونية)، *ho la tosse* (عندي كحة).',
            '*dal medico* = عند الدكتور.',
            '*sto meglio* = أحسن. *sto male* = مش كويسة.',
          ],
        },
        culture: {
          fr: 'Une fois inscrite au service de santé national (SSN), tu choisis un médecin traitant (*medico di base*). La nuit et le week-end, il existe un service médical de garde (*guardia medica*). Urgence : 112.',
          ar: 'لما تتسجلي في نظام الصحة القومي (SSN) بتختاري دكتور عيلة (*medico di base*). بالليل وفي الأجازات فيه دكتور نوبتجي (*guardia medica*). الطوارئ: ١١٢.',
        },
        words: [
          ['la febbre', 'la fièvre', 'السخونية'],
          ['la tosse', 'la toux', 'الكحة'],
          ['il raffreddore', 'le rhume', 'البرد (الزكام)'],
          ['la nausea', 'la nausée', 'الغتيان'],
          ['allergica a', 'allergique à', 'عندي حساسية من'],
          ['il medico', 'le médecin', 'الدكتور'],
          ['sto meglio', 'je vais mieux', 'أنا أحسن'],
          ['la pressione', 'la tension', 'الضغط'],
          ['la visita', 'la consultation', 'الكشف'],
          ['da due giorni', 'depuis deux jours', 'من يومين'],
        ],
        phrases: [
          ['Ho la febbre e la tosse.', 'J’ai de la fièvre et je tousse.', 'عندي سخونية وكحة.'],
          ['Ho il raffreddore da tre giorni.', 'J’ai un rhume depuis trois jours.', 'عندي برد من تلات أيام.'],
          ['Sono allergica alla penicillina.', 'Je suis allergique à la pénicilline.', 'عندي حساسية من البنسلين.'],
          ['Oggi sto meglio, grazie.', 'Aujourd’hui je vais mieux, merci.', 'النهارده أحسن، شكراً.'],
          ['Vorrei prenotare una visita dal medico.', 'Je voudrais prendre rendez-vous chez le médecin.', 'عايزة أحجز كشف عند الدكتور.'],
        ],
      },
      {
        id: 'u9l3', title: { it: 'In farmacia', fr: 'À la pharmacie', ar: 'في الصيدلية' },
        goal: { fr: 'Demander un médicament et comprendre comment le prendre.', ar: 'أطلب دوا وأفهم آخده إزاي.' },
        note: {
          fr: [
            '*Vorrei qualcosa per…* = je voudrais quelque chose pour… (*il mal di gola*, *la tosse*).',
            'Le pharmacien te parlera à l’impératif poli : *prenda* (prenez).',
            '*due volte al giorno* = deux fois par jour.',
          ],
          ar: [
            '*Vorrei qualcosa per…* = عايزة حاجة لـ… (*il mal di gola*، *la tosse*).',
            'الصيدلي هيقولك *prenda* (خدي).',
            '*due volte al giorno* = مرتين في اليوم.',
          ],
        },
        culture: {
          fr: 'La pharmacie se reconnaît à sa croix verte. Il y a toujours une pharmacie de garde (*farmacia di turno*) : la liste est affichée sur la porte de chaque pharmacie.',
          ar: 'الصيدلية عليها صليب أخضر. ودايماً فيه صيدلية نوبتجية (*farmacia di turno*): الليستة متعلقة على باب كل صيدلية.',
        },
        words: [
          ['la ricetta', 'l’ordonnance', 'الروشتة'],
          ['la compressa', 'le comprimé', 'القرص'],
          ['lo sciroppo', 'le sirop', 'الشراب (دوا)'],
          ['la pomata', 'la pommade', 'المرهم'],
          ['due volte al giorno', 'deux fois par jour', 'مرتين في اليوم'],
          ['prima dei pasti', 'avant les repas', 'قبل الأكل'],
          ['dopo i pasti', 'après les repas', 'بعد الأكل'],
          ['il cucchiaio', 'la cuillère', 'المعلقة'],
          ['il pronto soccorso', 'les urgences', 'الطوارئ'],
          ['qualcosa per…', 'quelque chose pour…', 'حاجة لـ…'],
        ],
        phrases: [
          ['Vorrei qualcosa per il mal di gola.', 'Je voudrais quelque chose pour le mal de gorge.', 'عايزة حاجة لوجع الزور.'],
          ['Serve la ricetta?', 'Il faut une ordonnance ?', 'محتاج روشتة؟'],
          ['Prenda una compressa due volte al giorno.', 'Prenez un comprimé deux fois par jour.', 'خدي قرص مرتين في اليوم.'],
          ['Prima o dopo i pasti?', 'Avant ou après les repas ?', 'قبل الأكل ولا بعده؟'],
          ['Dov’è il pronto soccorso?', 'Où sont les urgences ?', 'الطوارئ فين؟'],
        ],
      },
      {
        id: 'u9s', kind: 'scene',
        title: { it: 'In farmacia', fr: 'Scène : à la pharmacie', ar: 'مشهد: في الصيدلية' },
        goal: { fr: 'Expliquer tes symptômes et comprendre la posologie.', ar: 'تشرحي الأعراض وتفهمي الجرعة.' },
        setting: { fr: 'Tu as mal à la gorge depuis deux jours. Tu entres dans une pharmacie.', ar: 'زورك بيوجعك من يومين. دخلتي صيدلية.' },
        npc: { name: 'Dott.ssa Zanin', role: { fr: 'pharmacienne', ar: 'الصيدلانية' } },
        turns: [
          {
            npc: ['Buongiorno, mi dica.', 'Bonjour, je vous écoute.', 'صباح الخير، اتفضلي.'],
            options: [
              { t: ['Buongiorno. Ho mal di gola e un po’ di tosse.', 'Bonjour. J’ai mal à la gorge et je tousse un peu.', 'صباح الخير. زوري بيوجعني وعندي كحة خفيفة.'], ok: true },
              { t: ['Buongiorno. Mi fa male la gamba.', 'Bonjour. J’ai mal à la jambe.', 'صباح الخير. رجلي بتوجعني.'], fb: { fr: 'Tu as mal à la gorge : *la gola*, pas *la gamba* (la jambe) !', ar: 'اللي بيوجعك الزور: *la gola*، مش *la gamba* (الرجل)!' } },
            ],
          },
          {
            npc: ['Ha la febbre?', 'Vous avez de la fièvre ?', 'عندك سخونية؟'],
            options: [
              { t: ['No, non ho la febbre.', 'Non, je n’ai pas de fièvre.', 'لأ، معنديش سخونية.'], ok: true },
              { t: ['Sì, un po’: trentotto.', 'Oui, un peu : trente-huit.', 'أيوه، شوية: ٣٨.'], ok: true, reply: ['Se la febbre continua, chiami il medico.', 'Si la fièvre continue, appelez le médecin.', 'لو السخونية فضلت، كلّمي الدكتور.'] },
            ],
          },
          {
            npc: ['Da quanto tempo ha mal di gola?', 'Depuis combien de temps avez-vous mal à la gorge ?', 'زورك بيوجعك من إمتى؟'],
            options: [
              { t: ['Da due giorni.', 'Depuis deux jours.', 'من يومين.'], ok: true },
              { t: ['Alle due.', 'À deux heures.', 'الساعة اتنين.'], fb: { fr: '*Da quanto tempo?* = depuis combien de temps ? Réponds avec *da* : *da due giorni*.', ar: '*Da quanto tempo?* = من إمتى؟ ردّي بـ *da*: *da due giorni*.' } },
            ],
          },
          {
            npc: ['Le do questo sciroppo. Ne prenda un cucchiaio tre volte al giorno, dopo i pasti.', 'Je vous donne ce sirop. Prenez-en une cuillère trois fois par jour, après les repas.', 'هديكي الشراب ده. خدي منه معلقة تلات مرات في اليوم، بعد الأكل.'],
            options: [
              { t: ['Un cucchiaio tre volte al giorno, dopo i pasti. Serve la ricetta?', 'Une cuillère trois fois par jour, après les repas. Il faut une ordonnance ?', 'معلقة تلات مرات في اليوم بعد الأكل. محتاج روشتة؟'], ok: true, reply: ['No, non serve.', 'Non, ce n’est pas nécessaire.', 'لأ، مش محتاج.'] },
              { t: ['Tre cucchiai una volta al giorno?', 'Trois cuillères une fois par jour ?', 'تلات معالق مرة في اليوم؟'], fb: { fr: 'Non : *un cucchiaio* (une cuillère), *tre volte* (trois fois) par jour.', ar: 'لأ: *un cucchiaio* (معلقة واحدة)، *tre volte* (تلات مرات) في اليوم.' } },
            ],
          },
          {
            npc: ['Sono otto euro e cinquanta.', 'Ça fait huit euros cinquante.', 'تمانية يورو وخمسين سنت.'],
            options: [
              { t: ['Ecco a Lei. Grazie mille!', 'Voilà. Merci beaucoup !', 'اتفضلي. ألف شكر!'], ok: true },
              { t: ['Diciotto euro?', 'Dix-huit euros ?', 'تمنتاشر يورو؟'], fb: { fr: '*otto* = 8, *diciotto* = 18. Ici : 8,50 €.', ar: '*otto* = ٨، *diciotto* = ١٨. يعني ٨٫٥٠ يورو.' } },
            ],
          },
        ],
        end: ['Si riguardi! Buona guarigione.', 'Prenez soin de vous ! Bon rétablissement.', 'خلي بالك من نفسك! ألف سلامة.'],
      },
    ],
  },

  // ───────────────────────────── 10
  {
    id: 'u10', month: 10, milestone: 'm4', icon: 'stamp', hue: 'blue',
    title: { it: 'Uffici e servizi', fr: 'Démarches et services', ar: 'المصالح والخدمات' },
    canDo: {
      fr: 'Faire la queue, comprendre ce qu’on me demande au guichet, envoyer un colis, ouvrir un compte.',
      ar: 'أقف في الطابور، أفهم الموظف عايز إيه، أبعت طرد، وأفتح حساب.',
    },
    lessons: [
      {
        id: 'u10l1', title: { it: 'I documenti', fr: 'Les documents', ar: 'الورق' },
        goal: { fr: 'Comprendre les mots des papiers administratifs.', ar: 'أفهم كلمات الورق الرسمي.' },
        note: {
          fr: [
            '*servire* = être nécessaire : *serve* + singulier (*serve il passaporto*), *servono* + pluriel (*servono due foto*).',
            '*Ho bisogno di…* = j’ai besoin de…',
            '*questo / questa* = ce / cette : *questo modulo*, *questa firma*.',
          ],
          ar: [
            '*servire* = يلزم: *serve* + مفرد (*serve il passaporto* = محتاجين الباسبور)، *servono* + جمع.',
            '*Ho bisogno di…* = محتاجة…',
            '*questo / questa* = ده / دي: *questo modulo* (الاستمارة دي).',
          ],
        },
        culture: {
          fr: 'Le *codice fiscale* (identifiant fiscal) est demandé presque partout : médecin, contrat de téléphone, location. Il est aussi imprimé sur la carte sanitaire.',
          ar: 'الـ *codice fiscale* (الرقم الضريبي) بيطلبوه في كل حتة تقريباً: الدكتور، خط الموبايل، الإيجار. وبيبقى مكتوب على كارت التأمين الصحي.',
        },
        words: [
          ['il documento', 'la pièce d’identité', 'إثبات الشخصية'],
          ['il passaporto', 'le passeport', 'الباسبور'],
          ['la carta d’identità', 'la carte d’identité', 'البطاقة الشخصية'],
          ['il codice fiscale', 'le code fiscal', 'الرقم الضريبي'],
          ['il permesso di soggiorno', 'le titre de séjour', 'الإقامة'],
          ['la residenza', 'la résidence officielle', 'محل الإقامة الرسمي'],
          ['il modulo', 'le formulaire', 'الاستمارة'],
          ['compilare', 'remplir (un formulaire)', 'يملا'],
          ['la firma', 'la signature', 'الإمضا'],
          ['firmare', 'signer', 'يمضي'],
          ['la fotocopia', 'la photocopie', 'صورة (فوتوكوبي)'],
        ],
        phrases: [
          ['Ecco il mio passaporto.', 'Voici mon passeport.', 'اتفضل الباسبور بتاعي.'],
          ['Devo compilare questo modulo?', 'Je dois remplir ce formulaire ?', 'لازم أملا الاستمارة دي؟'],
          ['Dove devo firmare?', 'Où dois-je signer ?', 'أمضي فين؟'],
          ['Che documenti servono?', 'Quels documents faut-il ?', 'محتاجين ورق إيه؟'],
          ['Ho bisogno di una fotocopia del passaporto.', 'J’ai besoin d’une photocopie du passeport.', 'محتاجة صورة من الباسبور.'],
        ],
      },
      {
        id: 'u10l2', title: { it: 'Allo sportello', fr: 'Au guichet', ar: 'عند الشباك' },
        goal: { fr: 'Faire la queue et parler à un employé.', ar: 'أقف في الطابور وأتكلم مع الموظف.' },
        note: {
          fr: [
            '*Chi è l’ultimo?* = qui est le dernier ? La question magique dans une file sans ticket.',
            '*Tocca a me?* = c’est mon tour ?',
            '*aperto* (ouvert) / *chiuso* (fermé) : regarde toujours *l’orario di apertura*.',
          ],
          ar: [
            '*Chi è l’ultimo?* = مين آخر واحد؟ السؤال السحري في أي طابور من غير أرقام.',
            '*Tocca a me?* = دوري؟',
            '*aperto* (فاتح) / *chiuso* (قافل): بصّي دايماً على *l’orario di apertura* (مواعيد الفتح).',
          ],
        },
        culture: {
          fr: 'Dans beaucoup de bureaux, on prend un ticket numéroté (*prendere il numero*) et on attend son numéro sur l’écran. Beaucoup de services demandent aussi de réserver en ligne.',
          ar: 'في مكاتب كتير بتاخدي رقم (*prendere il numero*) وتستني رقمك يظهر على الشاشة. وخدمات كتير لازم تحجزي لها أونلاين.',
        },
        words: [
          ['lo sportello', 'le guichet', 'الشباك'],
          ['la fila', 'la file d’attente', 'الطابور'],
          ['il numero', 'le numéro / ticket', 'الرقم'],
          ['il turno', 'le tour', 'الدور'],
          ['l’orario di apertura', 'les horaires d’ouverture', 'مواعيد الفتح'],
          ['aperto', 'ouvert', 'فاتح'],
          ['chiuso', 'fermé', 'قافل'],
          ['l’ufficio', 'le bureau', 'المكتب'],
          ['l’impiegata', 'l’employée', 'الموظفة'],
          ['prenotare', 'réserver', 'يحجز'],
        ],
        phrases: [
          ['Scusi, chi è l’ultimo?', 'Excusez-moi, qui est le dernier ?', 'لو سمحت، مين آخر واحد؟'],
          ['Tocca a me?', 'C’est mon tour ?', 'دوري؟'],
          ['A che ora apre l’ufficio?', 'À quelle heure ouvre le bureau ?', 'المكتب بيفتح الساعة كام؟'],
          ['Bisogna prenotare online?', 'Il faut réserver en ligne ?', 'لازم أحجز أونلاين؟'],
          ['Il mio numero è il trentadue.', 'Mon numéro est le trente-deux.', 'رقمي اتنين وتلاتين.'],
          ['Oggi l’ufficio è chiuso.', 'Aujourd’hui, le bureau est fermé.', 'المكتب قافل النهارده.'],
        ],
      },
      {
        id: 'u10l3', title: { it: 'Posta e banca', fr: 'Poste et banque', ar: 'البوسطة والبنك' },
        goal: { fr: 'Envoyer un colis en Égypte et gérer l’essentiel à la banque.', ar: 'أبعت طرد لمصر وأخلّص الأساسيات في البنك.' },
        note: {
          fr: [
            '*in* + pays : *in Egitto, in Italia, in Francia*. *a* + ville : *a Udine*, *al Cairo*.',
            '*Quanto ci vuole?* = combien de temps faut-il ?',
            '*il più vicino* = le plus proche.',
          ],
          ar: [
            '*in* + بلد: *in Egitto* (في/لـ مصر). *a* + مدينة: *a Udine*، *al Cairo*.',
            '*Quanto ci vuole?* = بياخد قد إيه؟',
            '*il più vicino* = الأقرب.',
          ],
        },
        words: [
          ['spedire', 'envoyer (par la poste)', 'يبعت'],
          ['il pacco', 'le colis', 'الطرد'],
          ['la lettera', 'la lettre', 'الجواب'],
          ['il francobollo', 'le timbre', 'طابع البوستة'],
          ['il conto corrente', 'le compte courant', 'الحساب البنكي'],
          ['il bancomat', 'le distributeur de billets', 'ماكينة الصرف'],
          ['prelevare', 'retirer (de l’argent)', 'يسحب فلوس'],
          ['il bonifico', 'le virement', 'التحويل'],
          ['l’indirizzo', 'l’adresse', 'العنوان'],
          ['quanto ci vuole?', 'combien de temps ça prend ?', 'بياخد قد إيه؟'],
        ],
        phrases: [
          ['Vorrei spedire questo pacco in Egitto.', 'Je voudrais envoyer ce colis en Égypte.', 'عايزة أبعت الطرد ده لمصر.'],
          ['Quanto ci vuole per arrivare?', 'Combien de temps pour qu’il arrive ?', 'بياخد قد إيه عشان يوصل؟'],
          ['Vorrei aprire un conto corrente.', 'Je voudrais ouvrir un compte courant.', 'عايزة أفتح حساب في البنك.'],
          ['Dov’è il bancomat più vicino?', 'Où est le distributeur le plus proche ?', 'فين أقرب ماكينة صرف؟'],
          ['Devo fare un bonifico.', 'Je dois faire un virement.', 'لازم أعمل تحويل.'],
          ['Mi scrive l’indirizzo, per favore?', 'Vous m’écrivez l’adresse, s’il vous plaît ?', 'ممكن تكتبلي العنوان لو سمحت؟'],
        ],
      },
      {
        id: 'u10s', kind: 'scene',
        title: { it: 'Allo sportello del Comune', fr: 'Scène : à la mairie', ar: 'مشهد: في البلدية' },
        goal: { fr: 'Passer au guichet, comprendre les documents demandés, remplir et signer.', ar: 'تعدّي على الشباك، تفهمي الورق المطلوب، تملي وتمضي.' },
        setting: { fr: 'Un bureau de la mairie de Udine. Ton numéro vient de s’afficher.', ar: 'مكتب في بلدية أوديني. رقمك لسه ظهر على الشاشة.' },
        npc: { name: 'Sig.ra Rizzi', role: { fr: 'employée', ar: 'الموظفة' } },
        turns: [
          {
            npc: ['Buongiorno. Ha il numero?', 'Bonjour. Vous avez votre ticket ?', 'صباح الخير. معاكي رقم؟'],
            options: [
              { t: ['Sì, ecco: B27.', 'Oui, voilà : B27.', 'أيوه، اتفضلي: B27.'], ok: true },
              { t: ['Sì, ho ventisette anni.', 'Oui, j’ai vingt-sept ans.', 'أيوه، عندي ٢٧ سنة.'], fb: { fr: '*il numero* = ton ticket dans la file, pas ton âge !', ar: '*il numero* = رقمك في الطابور، مش سنك!' } },
            ],
          },
          {
            npc: ['Bene. Come posso aiutarla?', 'Bien. Comment puis-je vous aider ?', 'تمام. أقدر أساعدك إزاي؟'],
            options: [
              { t: ['Vorrei informazioni per la residenza.', 'Je voudrais des informations pour la résidence.', 'كنت عايزة معلومات عن تسجيل محل الإقامة.'], ok: true },
              { t: ['Vorrei un caffè.', 'Je voudrais un café.', 'كنت عايزة قهوة.'], fb: { fr: 'On est à la mairie ! Demande *informazioni per la residenza*.', ar: 'إحنا في البلدية! اطلبي *informazioni per la residenza*.' } },
            ],
          },
          {
            npc: ['Ha con sé il passaporto e il codice fiscale?', 'Vous avez votre passeport et votre code fiscal ?', 'معاكي الباسبور والرقم الضريبي؟'],
            options: [
              { t: ['Sì, ecco il passaporto e il codice fiscale.', 'Oui, voici le passeport et le code fiscal.', 'أيوه، اتفضلي الباسبور والرقم الضريبي.'], ok: true },
              { t: ['Scusi, non ho capito. Può ripetere?', 'Pardon, je n’ai pas compris. Vous pouvez répéter ?', 'لا مؤاخذة، مفهمتش. ممكن تعيدي؟'], ok: true, reply: ['Certo: il passaporto… e il codice fiscale.', 'Bien sûr : le passeport… et le code fiscal.', 'أكيد: الباسبور… والرقم الضريبي.'] },
            ],
          },
          {
            npc: ['Perfetto. Compili questo modulo e firmi qui in basso.', 'Parfait. Remplissez ce formulaire et signez ici en bas.', 'تمام. املي الاستمارة دي وامضي هنا تحت.'],
            options: [
              { t: ['Va bene. Dove devo firmare, qui?', 'D’accord. Où dois-je signer, ici ?', 'ماشي. أمضي فين، هنا؟'], ok: true, reply: ['Sì, qui in basso a destra.', 'Oui, ici en bas à droite.', 'أيوه، هنا تحت على اليمين.'] },
              { t: ['Va bene, compilo subito.', 'D’accord, je le remplis tout de suite.', 'ماشي، هملاها حالاً.'], ok: true },
              { t: ['No, grazie, basta così.', 'Non merci, ce sera tout.', 'لأ شكراً، كده كفاية.'], fb: { fr: 'Elle te demande de remplir (*compili*) et signer (*firmi*). Réponds *va bene*.', ar: 'هي بتطلب منك تملي (*compili*) وتمضي (*firmi*). قولي *va bene*.' } },
            ],
          },
        ],
        end: ['Grazie, è tutto per oggi. Buona giornata!', 'Merci, c’est tout pour aujourd’hui. Bonne journée !', 'شكراً، كده خلصنا النهارده. يومك سعيد!'],
      },
    ],
  },

  // ───────────────────────────── 11
  {
    id: 'u11', month: 11, milestone: 'm4', icon: 'book', hue: 'rose',
    title: { it: 'Raccontare', fr: 'Raconter', ar: 'أحكي' },
    canDo: {
      fr: 'Raconter mon week-end au passé et parler de mes projets.',
      ar: 'أحكي عن الويك إند بالماضي وأتكلم عن خططي.',
    },
    lessons: [
      {
        id: 'u11l1', title: { it: 'Ieri ho…', fr: 'Le passé avec « avere »', ar: 'الماضي مع «avere»' },
        goal: { fr: 'Dire ce que j’ai fait hier.', ar: 'أقول عملت إيه امبارح.' },
        note: {
          fr: [
            'Le *passato prossimo* = le passé composé : *avere* + participe. *Ho mangiato* = j’ai mangé.',
            'Participes réguliers : *-are → -ato* (*parlato*), *-ere → -uto* (*venduto*), *-ire → -ito* (*dormito*).',
            'Irréguliers fréquents : *fatto* (fait), *visto* (vu), *preso* (pris), *detto* (dit).',
          ],
          ar: [
            'الماضي (*passato prossimo*) = *avere* + اسم المفعول. *Ho mangiato* = كلت.',
            'القاعدة: *-are ← -ato* (*parlato*)، *-ere ← -uto*، *-ire ← -ito* (*dormito*).',
            'شاذ ومهم: *fatto* (عملت)، *visto* (شفت)، *preso* (خدت).',
          ],
        },
        compare: { fr: 'C’est exactement la logique du passé composé français : « j’ai mangé » = *ho mangiato*.', ar: 'ده نفس الـ passé composé في الفرنساوي: «j’ai mangé» = *ho mangiato*.' },
        words: [
          ['ho mangiato', 'j’ai mangé', 'كلت'],
          ['ho visto', 'j’ai vu', 'شفت'],
          ['ho fatto', 'j’ai fait', 'عملت'],
          ['ho comprato', 'j’ai acheté', 'اشتريت'],
          ['ho parlato', 'j’ai parlé', 'اتكلمت'],
          ['ho lavorato', 'j’ai travaillé', 'اشتغلت'],
          ['ho dormito', 'j’ai dormi', 'نمت'],
          ['ho preso', 'j’ai pris', 'خدت'],
          ['ieri', 'hier', 'امبارح'],
          ['stamattina', 'ce matin', 'النهارده الصبح'],
          ['la settimana scorsa', 'la semaine dernière', 'الأسبوع اللي فات'],
        ],
        phrases: [
          ['Ieri ho mangiato il frico.', 'Hier, j’ai mangé du frico.', 'امبارح كلت فريكو.'],
          ['Cosa hai fatto ieri sera?', 'Qu’est-ce que tu as fait hier soir ?', 'عملت إيه امبارح بالليل؟'],
          ['Ho visto un film con {partner}.', 'J’ai vu un film avec {partner}.', 'شفت فيلم مع {partner}.'],
          ['Stamattina ho preso l’autobus.', 'Ce matin, j’ai pris le bus.', 'النهارده الصبح خدت الأتوبيس.'],
          ['La settimana scorsa ho lavorato molto.', 'La semaine dernière, j’ai beaucoup travaillé.', 'الأسبوع اللي فات اشتغلت كتير.'],
          ['Hai parlato con tua madre?', 'Tu as parlé avec ta mère ?', 'اتكلمت مع مامتك؟'],
        ],
      },
      {
        id: 'u11l2', title: { it: 'Sono andata…', fr: 'Le passé avec « essere »', ar: 'الماضي مع «essere»' },
        goal: { fr: 'Raconter où je suis allée.', ar: 'أحكي رحت فين.' },
        note: {
          fr: [
            'Les verbes de mouvement et de changement prennent *essere*, comme en français : *sono andata* (je suis allée).',
            'Avec *essere*, le participe s’accorde : toi → *-a* (*sono andata*), un groupe → *-i* (*siamo andati*).',
            '*stata* sert pour *essere* et *stare* : *sono stata a Venezia* = je suis allée à Venise.',
            '*fa* = il y a (dans le temps) : *un anno fa* = il y a un an.',
          ],
          ar: [
            'أفعال الحركة والتغيير بتاخد *essere*: *sono andata* (رحت).',
            'مع *essere* اسم المفعول بيتغير: إنتي ← *-a* (*sono andata*)، مجموعة ← *-i* (*siamo andati*).',
            '*sono stata a Venezia* = رحت فينيسيا / كنت في فينيسيا.',
            '*fa* = من (زمن فات): *un anno fa* = من سنة.',
          ],
        },
        compare: { fr: 'Mêmes verbes qu’en français (aller, arriver, sortir, rester…) et même accord : « je suis allée » = *sono andata*.', ar: 'الفعل بيتغير للمؤنث زي العربي: «رحت» للبنت = *sono andata*، للولد = *sono andato*.' },
        words: [
          ['sono andata', 'je suis allée', 'رحت'],
          ['sono stata', 'j’ai été / je suis allée', 'كنت'],
          ['sono arrivata', 'je suis arrivée', 'وصلت'],
          ['sono tornata', 'je suis rentrée', 'رجعت'],
          ['sono uscita', 'je suis sortie', 'خرجت'],
          ['sono rimasta', 'je suis restée', 'فضلت'],
          ['siamo andati', 'nous sommes allés', 'رحنا'],
          ['è venuto', 'il est venu', 'جه'],
          ['un anno fa', 'il y a un an', 'من سنة'],
          ['mai', 'jamais / déjà (question)', 'أبداً / قبل كده'],
        ],
        phrases: [
          ['Sabato sono andata a Cividale.', 'Samedi, je suis allée à Cividale.', 'السبت رحت شيفيدالي.'],
          ['Sono arrivata a Udine un mese fa.', 'Je suis arrivée à Udine il y a un mois.', 'وصلت أوديني من شهر.'],
          ['Ieri sera siamo usciti con gli amici.', 'Hier soir, nous sommes sortis avec les amis.', 'امبارح بالليل خرجنا مع الصحاب.'],
          ['Sei mai stata a Venezia?', 'Tu es déjà allée à Venise ?', 'رحتي فينيسيا قبل كده؟'],
          ['Domenica sono rimasta a casa.', 'Dimanche, je suis restée à la maison.', 'يوم الحد فضلت في البيت.'],
          ['Sono tornata a casa tardi.', 'Je suis rentrée tard à la maison.', 'رجعت البيت متأخر.'],
        ],
      },
      {
        id: 'u11l3', title: { it: 'Progetti', fr: 'Mes projets', ar: 'خططي' },
        goal: { fr: 'Parler de ce que je veux ou dois faire.', ar: 'أتكلم عن اللي عايزة أو لازم أعمله.' },
        note: {
          fr: [
            'Pour le futur proche, les Italiens utilisent souvent le présent : *domani vado a Trieste*.',
            '*voglio* (je veux), *devo* (je dois), *possiamo* (nous pouvons) + infinitif.',
            '*mi piacerebbe* = j’aimerais. Très doux et très poli.',
          ],
          ar: [
            'للمستقبل القريب الإيطاليين بيستعملوا المضارع: *domani vado a Trieste* (بكرة رايحة تريستي).',
            '*voglio* (عايزة)، *devo* (لازم)، *possiamo* (نقدر) + المصدر.',
            '*mi piacerebbe* = نفسي. رقيقة ومؤدبة جداً.',
          ],
        },
        culture: {
          fr: 'Depuis Udine, les montagnes (Alpes carniques, Tarvisio) et la mer (Lignano, Grado) sont à environ une heure. Cividale del Friuli, avec son *Ponte del Diavolo*, est à 20 minutes.',
          ar: 'من أوديني، الجبال (تارفيزيو) والبحر (لينيانو، جرادو) على بعد حوالي ساعة. وشيفيدالي بكوبري *Ponte del Diavolo* على بعد ٢٠ دقيقة.',
        },
        words: [
          ['voglio', 'je veux', 'عايزة'],
          ['devo', 'je dois', 'لازم'],
          ['possiamo', 'nous pouvons', 'نقدر'],
          ['mi piacerebbe', 'j’aimerais', 'نفسي'],
          ['stasera', 'ce soir', 'النهارده بالليل'],
          ['questo fine settimana', 'ce week-end', 'الويك إند ده'],
          ['l’anno prossimo', 'l’année prochaine', 'السنة الجاية'],
          ['insieme', 'ensemble', 'مع بعض'],
          ['la montagna', 'la montagne', 'الجبل'],
          ['il mare', 'la mer', 'البحر'],
        ],
        phrases: [
          ['Questo fine settimana vogliamo andare in montagna.', 'Ce week-end, nous voulons aller à la montagne.', 'الويك إند ده عايزين نروح الجبل.'],
          ['Stasera devo studiare un po’.', 'Ce soir, je dois étudier un peu.', 'النهارده بالليل لازم أذاكر شوية.'],
          ['Mi piacerebbe visitare Trieste.', 'J’aimerais visiter Trieste.', 'نفسي أزور تريستي.'],
          ['Possiamo andare al mare insieme?', 'On peut aller à la mer ensemble ?', 'ممكن نروح البحر مع بعض؟'],
          ['L’anno prossimo voglio lavorare in Italia.', 'L’année prochaine, je veux travailler en Italie.', 'السنة الجاية عايزة أشتغل في إيطاليا.'],
        ],
      },
      {
        id: 'u11s', kind: 'scene',
        title: { it: 'Com’è andato il weekend?', fr: 'Scène : lundi matin', ar: 'مشهد: صباح الاتنين' },
        goal: { fr: 'Raconter ton week-end et parler du suivant.', ar: 'تحكي عن الويك إند وتتكلمي عن اللي جاي.' },
        setting: { fr: 'Lundi matin. Tu croises Chiara, une amie, devant le café.', ar: 'الاتنين الصبح. قابلتي كيارا صاحبتك قدام الكافيه.' },
        npc: { name: 'Chiara', role: { fr: 'une amie', ar: 'صاحبتك' } },
        turns: [
          {
            npc: ['Ciao {name}! Com’è andato il fine settimana?', 'Salut {name} ! Comment s’est passé ton week-end ?', 'أهلاً يا {name}! الويك إند كان عامل إيه؟'],
            options: [
              { t: ['Benissimo! Sabato sono andata a Cividale.', 'Très bien ! Samedi, je suis allée à Cividale.', 'حلو جداً! السبت رحت شيفيدالي.'], ok: true, reply: ['Che bello! Cividale è stupenda.', 'Super ! Cividale est magnifique.', 'حلو أوي! شيفيدالي تحفة.'] },
              { t: ['Bene! Domenica ho dormito tanto.', 'Bien ! Dimanche, j’ai beaucoup dormi.', 'كويس! يوم الحد نمت كتير.'], ok: true, reply: ['Hai fatto bene!', 'Tu as bien fait !', 'أحسن حاجة عملتيها!'] },
              { t: ['Sabato vado a Cividale.', 'Samedi je vais à Cividale.', 'السبت رايحة شيفيدالي.'], fb: { fr: 'C’est du présent (je vais). Pour raconter le week-end passé : *sono andata*.', ar: 'ده مضارع (رايحة). عشان تحكي عن اللي فات: *sono andata*.' } },
            ],
          },
          {
            npc: ['E cosa hai fatto di bello?', 'Et qu’est-ce que tu as fait de beau ?', 'وعملتي إيه حلو؟'],
            options: [
              { t: ['Ho visto il Ponte del Diavolo e ho mangiato il frico.', 'J’ai vu le Ponte del Diavolo et j’ai mangé du frico.', 'شفت كوبري الشيطان وكلت فريكو.'], ok: true },
              { t: ['Ho visto un film e ho cucinato con {partner}.', 'J’ai vu un film et j’ai cuisiné avec {partner}.', 'شفت فيلم وطبخت مع {partner}.'], ok: true },
              { t: ['Mangio il frico.', 'Je mange du frico.', 'باكل فريكو.'], fb: { fr: 'Présent encore ! Au passé : *ho mangiato*.', ar: 'مضارع تاني! الماضي: *ho mangiato*.' } },
            ],
          },
          {
            npc: ['Brava! Il tuo italiano migliora ogni settimana.', 'Bravo ! Ton italien s’améliore chaque semaine.', 'شاطرة! الإيطالي بتاعك بيتحسن كل أسبوع.'],
            options: [
              { t: ['Grazie! Studio un po’ ogni giorno.', 'Merci ! J’étudie un peu chaque jour.', 'شكراً! بذاكر شوية كل يوم.'], ok: true },
              { t: ['Prego!', 'De rien !', 'العفو!'], fb: { fr: 'On répond à un compliment par *grazie*. *Prego* répond à un merci.', ar: 'الرد على المجاملة *grazie*. و *prego* رد على الشكر.' } },
            ],
          },
          {
            npc: ['E questo fine settimana che fai?', 'Et ce week-end, tu fais quoi ?', 'والويك إند ده هتعملي إيه؟'],
            options: [
              { t: ['Voglio andare in montagna con {partner}.', 'Je veux aller à la montagne avec {partner}.', 'عايزة أروح الجبل مع {partner}.'], ok: true },
              { t: ['Mi piacerebbe andare al mare.', 'J’aimerais aller à la mer.', 'نفسي أروح البحر.'], ok: true, reply: ['Lignano è bellissima in primavera!', 'Lignano est très belle au printemps !', 'لينيانو حلوة أوي في الربيع!'] },
              { t: ['Sono andata in montagna.', 'Je suis allée à la montagne.', 'رحت الجبل.'], fb: { fr: '*Questo fine settimana* = ce week-end à venir → *voglio andare* ou *vado*.', ar: '*Questo fine settimana* = الويك إند الجاي ← *voglio andare* أو *vado*.' } },
            ],
          },
        ],
        end: ['Che bello! Allora buon fine settimana in anticipo!', 'Super ! Alors bon week-end en avance !', 'حلو أوي! ويك إند سعيد من دلوقتي!'],
      },
    ],
  },

  // ───────────────────────────── 12
  {
    id: 'u12', month: 12, milestone: 'm4', icon: 'castle', hue: 'gold',
    title: { it: 'Vita a Udine', fr: 'La vie à Udine', ar: 'الحياة في أوديني' },
    canDo: {
      fr: 'Parler de mes goûts, de la météo et participer à une soirée entre amis.',
      ar: 'أتكلم عن اللي بحبه، عن الجو، وأشارك في سهرة مع الصحاب.',
    },
    lessons: [
      {
        id: 'u12l1', title: { it: 'Mi piace!', fr: 'Ce que j’aime', ar: 'اللي بحبه' },
        goal: { fr: 'Dire ce que j’aime et ce que je n’aime pas.', ar: 'أقول بحب إيه ومبحبش إيه.' },
        note: {
          fr: [
            '*piacere* fonctionne comme « plaire » : *mi piace* = ça me plaît.',
            'Le verbe s’accorde avec la chose aimée : *mi piace il caffè*, *mi piacciono i dolci*.',
            'Avec un verbe : *mi piace* + infinitif : *mi piace cucinare*.',
          ],
          ar: [
            '*piacere* زي «يعجب» بالظبط: *mi piace* = يعجبني.',
            'الفعل بيتغير حسب الحاجة: *mi piace il caffè* (القهوة تعجبني)، *mi piacciono i dolci* (الحلويات يعجبوني).',
            'مع فعل: *mi piace* + المصدر: *mi piace cucinare* (بحب أطبخ).',
          ],
        },
        compare: { fr: '« Le café me plaît » → *mi piace il caffè*. Pense « plaire », pas « aimer ».', ar: 'نفس تركيب «يعجبني / يعجبوني» في العربي!' },
        words: [
          ['mi piace', 'j’aime (ça me plaît)', 'بحب / يعجبني'],
          ['non mi piace', 'je n’aime pas', 'مبحبش'],
          ['mi piacciono', 'j’aime (+ pluriel)', 'يعجبوني'],
          ['ti piace?', 'tu aimes ?', 'بتحب…؟'],
          ['preferisco', 'je préfère', 'بفضّل'],
          ['adoro', 'j’adore', 'بموت في'],
          ['cucinare', 'cuisiner', 'يطبخ'],
          ['leggere', 'lire', 'يقرا'],
          ['camminare', 'marcher', 'يتمشى'],
          ['la musica', 'la musique', 'المزيكا'],
          ['il tempo libero', 'le temps libre', 'وقت الفراغ'],
        ],
        phrases: [
          ['Mi piace molto Udine.', 'J’aime beaucoup Udine.', 'بحب أوديني أوي.'],
          ['Mi piacciono i dolci italiani.', 'J’aime les desserts italiens.', 'بحب الحلويات الإيطالي.'],
          ['Ti piace cucinare?', 'Tu aimes cuisiner ?', 'بتحب تطبخ؟'],
          ['Non mi piace il freddo.', 'Je n’aime pas le froid.', 'مبحبش البرد.'],
          ['Nel tempo libero leggo e cammino.', 'Pendant mon temps libre, je lis et je marche.', 'في وقت فراغي بقرا وبتمشى.'],
          ['Preferisco il tè al caffè.', 'Je préfère le thé au café.', 'بفضّل الشاي عن القهوة.'],
        ],
      },
      {
        id: 'u12l2', title: { it: 'Che tempo fa?', fr: 'La météo et les saisons', ar: 'الجو والفصول' },
        goal: { fr: 'Parler du temps qu’il fait (le sujet préféré des voisins !).', ar: 'أتكلم عن الجو (موضوع الجيران المفضل!).' },
        note: {
          fr: [
            'Avec *fare* : *fa caldo*, *fa freddo* (comme « il fait »).',
            'Verbes seuls, sans « il » : *piove* (il pleut), *nevica* (il neige).',
            '*Mi manca…* = … me manque.',
          ],
          ar: [
            'مع *fare*: *fa caldo* (الجو حر)، *fa freddo* (الجو برد).',
            'أفعال لوحدها: *piove* (بتمطر)، *nevica* (بتتلج).',
            '*Mi manca…* = … وحشني.',
          ],
        },
        culture: {
          fr: 'Le Frioul est l’une des régions les plus pluvieuses d’Italie : un bon *ombrello* sera ton meilleur ami ! Mais par temps clair, on voit les Alpes depuis le château.',
          ar: 'فريولي من أكتر المناطق اللي بتمطر في إيطاليا: الشمسية هتبقى أعز صاحبة ليكي! بس لما الجو يصفى بتشوفي جبال الألب من القلعة.',
        },
        words: [
          ['che tempo fa?', 'quel temps fait-il ?', 'الجو عامل إيه؟'],
          ['fa caldo', 'il fait chaud', 'الجو حر'],
          ['fa freddo', 'il fait froid', 'الجو برد'],
          ['piove', 'il pleut', 'بتمطر'],
          ['nevica', 'il neige', 'بتتلج'],
          ['c’è il sole', 'il y a du soleil', 'فيه شمس'],
          ['l’ombrello', 'le parapluie', 'الشمسية'],
          ['la primavera', 'le printemps', 'الربيع'],
          ['l’estate', 'l’été', 'الصيف'],
          ['l’autunno', 'l’automne', 'الخريف'],
          ['l’inverno', 'l’hiver', 'الشتا'],
        ],
        phrases: [
          ['Oggi piove: prendi l’ombrello!', 'Aujourd’hui il pleut : prends le parapluie !', 'النهارده بتمطر: خد الشمسية!'],
          ['In inverno fa freddo, ma in montagna c’è la neve.', 'En hiver il fait froid, mais il y a de la neige à la montagne.', 'في الشتا الجو برد، بس فيه تلج في الجبل.'],
          ['D’estate fa molto caldo.', 'En été, il fait très chaud.', 'في الصيف الجو حر أوي.'],
          ['Che bella giornata!', 'Quelle belle journée !', 'إيه اليوم الحلو ده!'],
          ['Mi manca il sole del Cairo.', 'Le soleil du Caire me manque.', 'وحشتني شمس القاهرة.'],
        ],
      },
      {
        id: 'u12l3', title: { it: 'Mandi!', fr: 'Fêtes et expressions locales', ar: 'المناسبات والتعبيرات المحلية' },
        goal: { fr: 'Utiliser les petites phrases qui font plaisir.', ar: 'أستعمل الجمل الصغيرة اللي بتفرّح الناس.' },
        note: {
          fr: [
            'À Udine, tu entendras souvent *Mandi!* : « salut / au revoir » en frioulan, la langue régionale. L’utiliser fera sourire tout le monde.',
            '*In bocca al lupo!* (« dans la gueule du loup ») = bonne chance. On répond *Crepi!* — jamais *grazie*.',
            '*Auguri!* sert pour presque toutes les fêtes : anniversaire, Noël, mariage.',
          ],
          ar: [
            'في أوديني هتسمعي *Mandi!* كتير: «سلام» باللغة الفريولية، لغة المنطقة. لما تقوليها الناس هتبتسم.',
            '*In bocca al lupo!* («في بُق الديب») = ربنا معاك. والرد *Crepi!* — مش *grazie*.',
            '*Auguri!* بتنفع لكل المناسبات تقريباً: عيد ميلاد، كريسماس، فرح.',
          ],
        },
        culture: {
          fr: 'Les *sagre* sont des fêtes de village autour d’un plat local, surtout en été et en automne. En septembre, *Friuli Doc* fête la cuisine frioulane dans les rues de Udine.',
          ar: 'الـ *sagre* مهرجانات في القرى حوالين أكلة محلية، خصوصاً في الصيف والخريف. وفي سبتمبر مهرجان *Friuli Doc* بيحتفل بأكل فريولي في شوارع أوديني.',
        },
        words: [
          ['mandi!', 'salut ! (frioulan)', 'سلام! (فريولي)'],
          ['la festa', 'la fête', 'الحفلة'],
          ['la sagra', 'la fête de village', 'مهرجان أكل شعبي'],
          ['il compleanno', 'l’anniversaire', 'عيد الميلاد'],
          ['auguri!', 'meilleurs vœux !', 'كل سنة وإنت طيب!'],
          ['buon appetito!', 'bon appétit !', 'بالهنا والشفا!'],
          ['salute!', 'à tes souhaits !', 'يرحمكم الله! (بعد العطسة)'],
          ['cin cin!', 'santé ! (en trinquant)', 'في صحتك!'],
          ['in bocca al lupo!', 'bonne chance !', 'ربنا معاك!'],
          ['complimenti!', 'félicitations !', 'برافو عليك!'],
        ],
        phrases: [
          ['Mandi! A domani!', 'Salut ! À demain !', 'سلام! أشوفك بكرة!'],
          ['Tanti auguri di buon compleanno!', 'Joyeux anniversaire !', 'كل سنة وإنت طيب، عيد ميلاد سعيد!'],
          ['Andiamo alla sagra questo fine settimana?', 'On va à la fête du village ce week-end ?', 'نروح المهرجان الويك إند ده؟'],
          ['In bocca al lupo per l’esame!', 'Bonne chance pour l’examen !', 'ربنا معاك في الامتحان!'],
          ['Complimenti, il tuo italiano è migliorato tanto!', 'Félicitations, ton italien a beaucoup progressé !', 'برافو، الإيطالي بتاعك اتحسن أوي!'],
        ],
      },
      {
        id: 'u12s', kind: 'scene',
        title: { it: 'Cena da amici', fr: 'Scène : dîner chez des amis', ar: 'مشهد: عشا عند الصحاب' },
        goal: { fr: 'Discuter pendant un dîner : goûts, vie à Udine, compliments.', ar: 'تتكلمي على العشا: الأكل، الحياة في أوديني، والمجاملات.' },
        setting: { fr: 'Un an plus tard. Chiara et Luca vous invitent à dîner, toi et {partner}.', ar: 'بعد سنة. كيارا ولوكا عازمينك إنتي و{partner} على العشا.' },
        npc: { name: 'Chiara', role: { fr: 'ton amie', ar: 'صاحبتك' } },
        turns: [
          {
            npc: ['Benvenuti! Accomodatevi. Vuoi qualcosa da bere?', 'Bienvenue ! Installez-vous. Tu veux boire quelque chose ?', 'أهلاً بيكم! اتفضلوا. تشربي حاجة؟'],
            options: [
              { t: ['Sì, grazie. Un bicchiere d’acqua, per favore.', 'Oui, merci. Un verre d’eau, s’il te plaît.', 'أيوه، شكراً. كوباية مية لو سمحتي.'], ok: true },
              { t: ['Volentieri, un succo di mela.', 'Avec plaisir, un jus de pomme.', 'بكل سرور، عصير تفاح.'], ok: true, reply: ['Ecco qua!', 'Et voilà !', 'اتفضلي!'] },
              { t: ['Buon appetito!', 'Bon appétit !', 'بالهنا والشفا!'], fb: { fr: '*Buon appetito* se dit quand on commence à manger. Ici, on te propose à boire.', ar: '*Buon appetito* بتتقال لما نبدأ ناكل. هنا هي بتعرض عليكي تشربي.' } },
            ],
          },
          {
            npc: ['Ti piace la cucina friulana?', 'Tu aimes la cuisine frioulane ?', 'بتحبي الأكل الفريولي؟'],
            options: [
              { t: ['Sì, mi piace molto il frico!', 'Oui, j’aime beaucoup le frico !', 'أيوه، بحب الفريكو أوي!'], ok: true, reply: ['Allora stasera sei fortunata!', 'Alors ce soir, tu as de la chance !', 'يبقى النهارده حظك حلو!'] },
              { t: ['Sì, mi piacciono molto il frico.', 'Oui, j’aime beaucoup le frico (pluriel).', 'أيوه، يعجبوني الفريكو.'], fb: { fr: '*frico* est singulier → *mi piace il frico*. *Mi piacciono* va avec un pluriel : *mi piacciono i cjarsons* (raviolis frioulans).', ar: '*frico* مفرد ← *mi piace il frico*. *mi piacciono* مع الجمع.' } },
            ],
          },
          {
            npc: ['E come ti trovi a Udine?', 'Et tu te plais à Udine ?', 'ومبسوطة في أوديني؟'],
            options: [
              { t: ['Mi trovo bene. Piove tanto, ma la gente è gentile!', 'Je m’y plais. Il pleut beaucoup, mais les gens sont gentils !', 'مبسوطة. بتمطر كتير، بس الناس ذوق!'], ok: true, reply: ['Ah sì, qui piove sempre!', 'Ah oui, ici il pleut tout le temps !', 'آه صح، هنا دايماً بتمطر!'] },
              { t: ['Mi trovo bene, ma mi manca il sole del Cairo.', 'Je m’y plais, mais le soleil du Caire me manque.', 'مبسوطة، بس شمس القاهرة وحشاني.'], ok: true, reply: ['Ti capisco! Ma l’estate qui è bellissima.', 'Je te comprends ! Mais l’été ici est magnifique.', 'فاهماكي! بس الصيف هنا تحفة.'] },
            ],
          },
          {
            npc: ['Il tuo italiano è migliorato tantissimo!', 'Ton italien a énormément progressé !', 'الإيطالي بتاعك اتحسن جداً!'],
            options: [
              { t: ['Grazie, sei molto gentile!', 'Merci, tu es très gentille !', 'شكراً، إنتي ذوق أوي!'], ok: true },
              { t: ['Crepi!', 'Crepi !', 'كريبي!'], fb: { fr: '*Crepi* répond seulement à *in bocca al lupo*. Pour un compliment : *grazie*!', ar: '*Crepi* رد على *in bocca al lupo* بس. للمجاملة: *grazie*!' } },
            ],
          },
        ],
        end: ['Allora… alla tua nuova vita a Udine! Cin cin! Mandi!', 'Alors… à ta nouvelle vie à Udine ! Santé ! Mandi !', 'يلا… لحياتك الجديدة في أوديني! في صحتك! ماندي!'],
      },
    ],
  },
];
