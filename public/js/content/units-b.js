// Units 5–8 · Months 5–8

export const unitsB = [
  // ───────────────────────────── 5
  {
    id: 'u5', month: 5, milestone: 'm2', icon: 'train', hue: 'blue',
    title: { it: 'In autobus e in treno', fr: 'Bus et train', ar: 'الأتوبيس والقطر' },
    canDo: {
      fr: 'Acheter un billet, lire l’heure et comprendre un départ.',
      ar: 'أشتري تذكرة، أقرا الساعة، وأفهم مواعيد القطر.',
    },
    lessons: [
      {
        id: 'u5l1', title: { it: 'Il biglietto', fr: 'Le billet', ar: 'التذكرة' },
        goal: { fr: 'Acheter un billet et trouver le bon quai.', ar: 'أشتري تذكرة وألاقي الرصيف الصح.' },
        note: {
          fr: [
            'Pour acheter : *un biglietto per* + ville. Puis on te demandera : *solo andata o andata e ritorno?*',
            '*il prossimo treno* = le prochain train. *Da quale binario?* = de quel quai ?',
            '*l’autobus* ne change pas au pluriel : *gli autobus*.',
          ],
          ar: [
            'عشان تشتري: *un biglietto per* + اسم المدينة. وهيسألوكي: *solo andata o andata e ritorno?* (رايح بس ولا رايح جاي؟)',
            '*il prossimo treno* = القطر الجاي. *Da quale binario?* = من أنهي رصيف؟',
          ],
        },
        culture: {
          fr: 'Les tickets de bus s’achètent souvent au bureau de tabac (*tabaccheria*, panneau « T ») ou sur une appli. Pense à valider le ticket en montant. De Udine, Trieste est à environ 1 h de train, Venise à environ 2 h.',
          ar: 'تذاكر الأتوبيس بتتباع غالباً في محل السجاير (*tabaccheria*، عليه حرف «T») أو من أبلكيشن. ولازم تختمي التذكرة أول ما تركبي. من أوديني لتريستي حوالي ساعة بالقطر، ولفينيسيا حوالي ساعتين.',
        },
        words: [
          ['l’autobus', 'le bus', 'الأتوبيس'],
          ['la fermata', 'l’arrêt (de bus)', 'محطة الأتوبيس'],
          ['il biglietto', 'le billet / ticket', 'التذكرة'],
          ['il treno', 'le train', 'القطر'],
          ['la stazione', 'la gare', 'محطة القطر'],
          ['il binario', 'le quai / la voie', 'الرصيف'],
          ['l’orario', 'l’horaire', 'المواعيد'],
          ['andata e ritorno', 'aller-retour', 'رايح جاي'],
          ['solo andata', 'aller simple', 'رايح بس'],
          ['il prossimo', 'le prochain', 'الجاي'],
          ['convalidare', 'valider (un ticket)', 'يختم التذكرة'],
        ],
        phrases: [
          ['Un biglietto per Trieste, per favore.', 'Un billet pour Trieste, s’il vous plaît.', 'تذكرة لتريستي لو سمحت.'],
          ['Quando parte il prossimo treno?', 'Quand part le prochain train ?', 'القطر الجاي هيقوم إمتى؟'],
          ['Da quale binario parte?', 'Il part de quel quai ?', 'هيقوم من أنهي رصيف؟'],
          ['Dove si compra il biglietto dell’autobus?', 'Où achète-t-on le ticket de bus ?', 'تذكرة الأتوبيس بتتشري منين؟'],
          ['Questo autobus va in centro?', 'Ce bus va au centre-ville ?', 'الأتوبيس ده رايح وسط البلد؟'],
          ['Ricordati di convalidare il biglietto!', 'N’oublie pas de valider ton ticket !', 'متنسيش تختمي التذكرة!'],
        ],
      },
      {
        id: 'u5l2', title: { it: 'Che ore sono?', fr: 'Quelle heure est-il ?', ar: 'الساعة كام؟' },
        goal: { fr: 'Dire et comprendre l’heure.', ar: 'أقول وأفهم الساعة.' },
        note: {
          fr: [
            '*Sono le* + heure (au pluriel) : *sono le tre*. Sauf : *è l’una*, *è mezzogiorno*, *è mezzanotte*.',
            '« À » telle heure : *alle* (*alle otto*), mais *all’una*.',
            'Dans les gares, on utilise 24 h : *17:45* = *diciassette e quarantacinque*.',
          ],
          ar: [
            '*Sono le* + الساعة (جمع): *sono le tre* (الساعة تلاتة). ما عدا: *è l’una* (الساعة واحدة)، *è mezzogiorno*.',
            '«الساعة كذا» كميعاد: *alle* (*alle otto* = الساعة تمانية)، بس *all’una*.',
            'في المحطات بيستعملوا نظام ٢٤ ساعة: *17:45* = *diciassette e quarantacinque*.',
          ],
        },
        compare: { fr: '*e mezza* = et demie, *e un quarto* = et quart, *meno un quarto* = moins le quart. Presque mot à mot !', ar: '*e mezza* = ونص، *e un quarto* = وربع، *meno un quarto* = إلا ربع — نفس طريقة العربي!' },
        words: [
          ['che ore sono?', 'quelle heure est-il ?', 'الساعة كام دلوقتي؟'],
          ['è l’una', 'il est une heure', 'الساعة واحدة'],
          ['sono le due', 'il est deux heures', 'الساعة اتنين'],
          ['e mezza', 'et demie', 'ونص'],
          ['e un quarto', 'et quart', 'وربع'],
          ['meno un quarto', 'moins le quart', 'إلا ربع'],
          ['mezzogiorno', 'midi', 'الضهر (١٢)'],
          ['mezzanotte', 'minuit', 'نص الليل'],
          ['a che ora?', 'à quelle heure ?', 'في أنهي ساعة؟'],
          ['presto', 'tôt', 'بدري'],
          ['tardi', 'tard', 'متأخر'],
          ['in ritardo', 'en retard', 'متأخر (عن الميعاد)'],
        ],
        phrases: [
          ['Sono le tre e mezza.', 'Il est trois heures et demie.', 'الساعة تلاتة ونص.'],
          ['A che ora parte il treno?', 'À quelle heure part le train ?', 'القطر بيقوم الساعة كام؟'],
          ['Il treno parte alle nove e un quarto.', 'Le train part à neuf heures et quart.', 'القطر بيقوم الساعة تسعة وربع.'],
          ['Sono le otto meno un quarto.', 'Il est huit heures moins le quart.', 'الساعة تمانية إلا ربع.'],
          ['Ci vediamo a mezzogiorno.', 'On se voit à midi.', 'نتقابل الساعة ١٢ الضهر.'],
          ['Scusa, sono in ritardo!', 'Désolée, je suis en retard !', 'آسفة، أنا متأخرة!'],
        ],
      },
      {
        id: 'u5l3', title: { it: 'I giorni', fr: 'Les jours de la semaine', ar: 'أيام الأسبوع' },
        goal: { fr: 'Parler de ma semaine et de mes déplacements.', ar: 'أتكلم عن أسبوعي ومشاويري.' },
        note: {
          fr: [
            'Pas de majuscule aux jours, comme en français. De lundi à vendredi, ils finissent par *-dì* : on appuie sur la fin (*lu-ne-DÌ*).',
            '*la domenica* (avec article) = tous les dimanches. *domenica* (sans article) = ce dimanche.',
            'Pour le futur proche, le présent suffit : *domani vado a Trieste*.',
          ],
          ar: [
            'أيام الأسبوع بتتكتب بحرف صغير. من الاتنين للجمعة آخرهم *-dì* والضغط على الآخر.',
            '*la domenica* (بالأداة) = كل يوم حد. *domenica* (من غير أداة) = الحد الجاي ده.',
            'للمستقبل القريب بيستعملوا المضارع: *domani vado a Trieste* (بكرة رايحة تريستي).',
          ],
        },
        compare: { fr: 'Exactement comme « le dimanche » (chaque semaine) et « dimanche » (ce dimanche-là).', ar: 'الأسبوع في إيطاليا بيبدأ يوم الاتنين، والحد أجازة: محلات كتير بتقفل.' },
        words: [
          ['lunedì', 'lundi', 'الاتنين'], ['martedì', 'mardi', 'التلات'], ['mercoledì', 'mercredi', 'الأربع'],
          ['giovedì', 'jeudi', 'الخميس'], ['venerdì', 'vendredi', 'الجمعة'], ['sabato', 'samedi', 'السبت'],
          ['domenica', 'dimanche', 'الحد'], ['oggi', 'aujourd’hui', 'النهارده'], ['domani', 'demain', 'بكرة'],
          ['il fine settimana', 'le week-end', 'الويك إند'],
        ],
        phrases: [
          ['Oggi è lunedì.', 'Aujourd’hui, c’est lundi.', 'النهارده الاتنين.'],
          ['Domani vado a Trieste in treno.', 'Demain, je vais à Trieste en train.', 'بكرة رايحة تريستي بالقطر.'],
          ['Il negozio è chiuso la domenica.', 'Le magasin est fermé le dimanche.', 'المحل قافل يوم الحد.'],
          ['Il sabato andiamo al mercato.', 'Le samedi, nous allons au marché.', 'يوم السبت بنروح السوق.'],
          ['Ci vediamo venerdì sera?', 'On se voit vendredi soir ?', 'نتقابل الجمعة بالليل؟'],
        ],
      },
      {
        id: 'u5s', kind: 'scene',
        title: { it: 'Alla stazione di Udine', fr: 'Scène : à la gare', ar: 'مشهد: في المحطة' },
        goal: { fr: 'Acheter un billet pour Trieste au guichet.', ar: 'تشتري تذكرة لتريستي من الشباك.' },
        setting: { fr: 'La gare de Udine, un samedi matin. Tu veux passer la journée à Trieste.', ar: 'محطة أوديني، السبت الصبح. عايزة تقضي اليوم في تريستي.' },
        npc: { name: 'Roberto', role: { fr: 'guichetier', ar: 'موظف الشباك' } },
        turns: [
          {
            npc: ['Buongiorno, dica.', 'Bonjour, je vous écoute.', 'صباح الخير، اتفضلي.'],
            options: [
              { t: ['Buongiorno, un biglietto per Trieste, per favore.', 'Bonjour, un billet pour Trieste, s’il vous plaît.', 'صباح الخير، تذكرة لتريستي لو سمحت.'], ok: true },
              { t: ['Un caffè, per favore.', 'Un café, s’il vous plaît.', 'قهوة لو سمحت.'], fb: { fr: 'On n’est pas au bar ! Demande *un biglietto per Trieste*.', ar: 'إحنا مش في الكافيه! اطلبي *un biglietto per Trieste*.' } },
            ],
          },
          {
            npc: ['Solo andata?', 'Aller simple ?', 'رايح بس؟'],
            options: [
              { t: ['No, andata e ritorno.', 'Non, aller-retour.', 'لأ، رايح جاي.'], ok: true, reply: ['Andata e ritorno per Trieste, ecco.', 'Aller-retour pour Trieste, voilà.', 'رايح جاي لتريستي، اتفضلي.'] },
              { t: ['Sì, solo andata.', 'Oui, aller simple.', 'أيوه، رايح بس.'], ok: true, reply: ['Ecco il biglietto.', 'Voici le billet.', 'اتفضلي التذكرة.'] },
              { t: ['Sono le dieci.', 'Il est dix heures.', 'الساعة عشرة.'], fb: { fr: '*Solo andata?* = aller simple ? Réponds *sì* ou *andata e ritorno*.', ar: '*Solo andata?* = رايح بس؟ قولي *sì* أو *andata e ritorno*.' } },
            ],
          },
          {
            npc: ['Altro?', 'Autre chose ?', 'حاجة تانية؟'],
            options: [
              { t: ['Sì: a che ora parte il prossimo treno?', 'Oui : à quelle heure part le prochain train ?', 'أيوه: القطر الجاي بيقوم الساعة كام؟'], ok: true },
              { t: ['Che ore sono?', 'Quelle heure est-il ?', 'الساعة كام دلوقتي؟'], fb: { fr: 'Ça, c’est l’heure actuelle. Pour le départ : *A che ora parte il prossimo treno?*', ar: 'ده سؤال عن الساعة دلوقتي. عشان ميعاد القطر: *A che ora parte il prossimo treno?*' } },
            ],
          },
          {
            npc: ['Alle dieci e un quarto, dal binario tre.', 'À dix heures et quart, voie trois.', 'الساعة عشرة وربع، من رصيف تلاتة.'],
            options: [
              { t: ['Alle dieci e un quarto, binario tre. Grazie!', 'À dix heures et quart, voie trois. Merci !', 'عشرة وربع، رصيف تلاتة. شكراً!'], ok: true },
              { t: ['Binario dieci?', 'Voie dix ?', 'رصيف عشرة؟'], fb: { fr: 'Non : *binario tre* (voie 3). *Dieci e un quarto*, c’est l’heure : 10 h 15.', ar: 'لأ: *binario tre* (رصيف ٣). *dieci e un quarto* ده الميعاد: ١٠:١٥.' } },
            ],
          },
        ],
        end: ['Esatto. Buon viaggio!', 'Exactement. Bon voyage !', 'بالظبط. رحلة سعيدة!'],
      },
    ],
  },

  // ───────────────────────────── 6
  {
    id: 'u6', month: 6, milestone: 'm3', icon: 'map', hue: 'blue',
    title: { it: 'In città', fr: 'En ville', ar: 'في المدينة' },
    canDo: {
      fr: 'Demander mon chemin, comprendre une indication et trouver un lieu à Udine.',
      ar: 'أسأل على الطريق، أفهم الوصف، وألاقي أي مكان في أوديني.',
    },
    lessons: [
      {
        id: 'u6l1', title: { it: 'Dov’è…?', fr: 'Demander son chemin', ar: 'أسأل على الطريق' },
        goal: { fr: 'Demander où est un lieu et comprendre la réponse.', ar: 'أسأل مكان فين وأفهم الرد.' },
        note: {
          fr: [
            'Pour demander : *Scusi, dov’è…?* (*dove* + *è* = où est).',
            'On te répondra avec la forme polie : *vada* (allez), *giri* (tournez), *prenda* (prenez).',
            'Astuce : *sinistra* ressemble à « senestre », le vieux mot français pour « gauche ».',
          ],
          ar: [
            'عشان تسألي: *Scusi, dov’è…?* (لو سمحت، … فين؟)',
            'الرد هيكون بصيغة الاحترام: *vada* (امشي)، *giri* (لفّي)، *prenda* (خدي).',
            '*a destra* = يمين، *a sinistra* = شمال، *dritto* = على طول.',
          ],
        },
        culture: {
          fr: 'La Piazza della Libertà, avec la *Loggia del Lionello* rayée rose et blanc, est souvent appelée « la plus belle place vénitienne sur la terre ferme ».',
          ar: 'ميدان ليبرتا، بمبنى *Loggia del Lionello* المقلّم بمبي وأبيض، بيقولوا عليه أحلى ميدان على الطراز الفينيسي على البر.',
        },
        words: [
          ['dov’è…?', 'où est… ?', '… فين؟'],
          ['a destra', 'à droite', 'يمين'],
          ['a sinistra', 'à gauche', 'شمال'],
          ['dritto', 'tout droit', 'على طول'],
          ['vicino', 'près', 'قريب'],
          ['lontano', 'loin', 'بعيد'],
          ['qui', 'ici', 'هنا'],
          ['lì', 'là-bas', 'هناك'],
          ['la piazza', 'la place', 'الميدان'],
          ['la via', 'la rue', 'الشارع'],
          ['il semaforo', 'le feu (tricolore)', 'الإشارة'],
          ['l’angolo', 'le coin', 'الناصية'],
        ],
        phrases: [
          ['Scusi, dov’è Piazza della Libertà?', 'Excusez-moi, où est la Piazza della Libertà ?', 'لو سمحت، فين بياتسا ديلا ليبرتا؟'],
          ['Vada sempre dritto.', 'Allez toujours tout droit.', 'امشي على طول.'],
          ['Al semaforo giri a destra.', 'Au feu, tournez à droite.', 'عند الإشارة لفّي يمين.'],
          ['È lontano?', 'C’est loin ?', 'هو بعيد؟'],
          ['No, è qui vicino, a cinque minuti a piedi.', 'Non, c’est tout près, à cinq minutes à pied.', 'لأ، قريب من هنا، خمس دقايق مشي.'],
          ['È all’angolo, a sinistra.', 'C’est au coin, à gauche.', 'على الناصية، على الشمال.'],
        ],
      },
      {
        id: 'u6l2', title: { it: 'I luoghi', fr: 'Les lieux de la ville', ar: 'أماكن المدينة' },
        goal: { fr: 'Nommer les lieux utiles et dire ce qu’il y a.', ar: 'أسمّي الأماكن المهمة وأقول فيه إيه.' },
        note: {
          fr: [
            '*c’è* + singulier, *ci sono* + pluriel = « il y a ».',
            'Les prépositions se collent à l’article : *su + la = sulla*, *da + il = dal*, *in + la = nella* — comme « du » ou « au » en français.',
          ],
          ar: [
            '*c’è* + مفرد، *ci sono* + جمع = «فيه».',
            'حروف الجر بتلزق في الأداة: *su + la = sulla* (على الـ)، *in + la = nella* (في الـ).',
          ],
        },
        culture: {
          fr: 'Le château de Udine domine la ville depuis sa colline. Par temps clair, on y voit les Alpes.',
          ar: 'قلعة أوديني فوق تل في نص المدينة. لما الجو يبقى صافي بتشوفي جبال الألب من فوق.',
        },
        words: [
          ['la farmacia', 'la pharmacie', 'الصيدلية'],
          ['la banca', 'la banque', 'البنك'],
          ['la posta', 'la poste', 'البوسطة'],
          ['il supermercato', 'le supermarché', 'السوبر ماركت'],
          ['il mercato', 'le marché', 'السوق'],
          ['l’ospedale', 'l’hôpital', 'المستشفى'],
          ['il castello', 'le château', 'القلعة'],
          ['il duomo', 'la cathédrale', 'الكاتدرائية'],
          ['il parco', 'le parc', 'الجنينة'],
          ['il negozio', 'le magasin', 'المحل'],
          ['c’è', 'il y a (un)', 'فيه (مفرد)'],
          ['ci sono', 'il y a (plusieurs)', 'فيه (جمع)'],
        ],
        phrases: [
          ['C’è una farmacia qui vicino?', 'Il y a une pharmacie près d’ici ?', 'فيه صيدلية قريبة من هنا؟'],
          ['Il castello è sulla collina.', 'Le château est sur la colline.', 'القلعة فوق التل.'],
          ['In via Mercatovecchio ci sono tanti negozi.', 'Via Mercatovecchio, il y a beaucoup de magasins.', 'في شارع ميركاتوفيكيو فيه محلات كتير.'],
          ['La posta è chiusa il pomeriggio?', 'La poste est fermée l’après-midi ?', 'البوسطة بتقفل بعد الضهر؟'],
          ['L’ospedale è lontano dal centro?', 'L’hôpital est loin du centre ?', 'المستشفى بعيدة عن وسط البلد؟'],
        ],
      },
      {
        id: 'u6l3', title: { it: 'Andare in giro', fr: 'Se déplacer', ar: 'أتنقّل' },
        goal: { fr: 'Dire où je vais et comment.', ar: 'أقول أنا رايحة فين وإزاي.' },
        note: {
          fr: [
            '*in* pour beaucoup de lieux et de moyens de transport : *in farmacia, in banca, in centro, in treno, in bici*.',
            '*a* pour les villes et quelques expressions : *a Udine, a casa, a piedi*.',
            '*al / alla* (a + article) : *al bar, al supermercato, alla stazione*.',
            'Le meilleur conseil : apprends chaque lieu avec sa préposition, en bloc.',
          ],
          ar: [
            '*in* مع أماكن كتير ووسايل المواصلات: *in farmacia, in banca, in centro, in treno*.',
            '*a* مع المدن وكام تعبير: *a Udine, a casa, a piedi* (مشي).',
            '*al / alla*: *al bar, al supermercato, alla stazione*.',
            'أحسن نصيحة: احفظي المكان مع حرف الجر بتاعه كحتة واحدة.',
          ],
        },
        compare: { fr: 'Le français dit « à la pharmacie », l’italien *in farmacia* : pas d’article ici !', ar: 'الفعل *vado* (رايحة) مش محتاج «إلى»: *vado in farmacia* = رايحة الصيدلية.' },
        words: [
          ['vado', 'je vais', 'رايحة'],
          ['a piedi', 'à pied', 'مشي'],
          ['in bici', 'à vélo', 'بالعجلة'],
          ['in macchina', 'en voiture', 'بالعربية'],
          ['in centro', 'au centre-ville', 'في وسط البلد'],
          ['in farmacia', 'à la pharmacie', 'في الصيدلية'],
          ['a casa', 'à la maison', 'في البيت'],
          ['prendere', 'prendre', 'ياخد'],
          ['tornare', 'rentrer / revenir', 'يرجع'],
          ['poi', 'puis / ensuite', 'بعدين'],
        ],
        phrases: [
          ['Vado in farmacia e poi torno a casa.', 'Je vais à la pharmacie, puis je rentre à la maison.', 'رايحة الصيدلية وبعدين راجعة البيت.'],
          ['Andiamo in centro a piedi?', 'On va au centre à pied ?', 'نروح وسط البلد مشي؟'],
          ['Prendo l’autobus numero uno.', 'Je prends le bus numéro un.', 'هاخد أتوبيس رقم واحد.'],
          ['Vado al supermercato in bici.', 'Je vais au supermarché à vélo.', 'رايحة السوبر ماركت بالعجلة.'],
          ['Stasera torno tardi.', 'Ce soir, je rentre tard.', 'النهارده هرجع متأخر.'],
        ],
      },
      {
        id: 'u6s', kind: 'scene',
        title: { it: 'Un po’ persa', fr: 'Scène : un peu perdue', ar: 'مشهد: تايهة شوية' },
        goal: { fr: 'Demander ton chemin à un passant et comprendre la réponse.', ar: 'تسألي حد في الشارع على الطريق وتفهمي.' },
        setting: { fr: 'Tu sors du bus près de la gare. Tu cherches la Piazza della Libertà.', ar: 'نزلتي من الأتوبيس جنب المحطة. بتدوري على ميدان ليبرتا.' },
        npc: { name: 'Franco', role: { fr: 'un passant', ar: 'راجل ماشي في الشارع' } },
        turns: [
          {
            prompt: { fr: 'Arrête poliment un passant.', ar: 'وقّفي حد بأدب.' },
            options: [
              { t: ['Scusi, dov’è Piazza della Libertà?', 'Excusez-moi, où est la Piazza della Libertà ?', 'لو سمحت، فين ميدان ليبرتا؟'], ok: true },
              { t: ['Ciao, a destra!', 'Salut, à droite !', 'أهلاً، يمين!'], fb: { fr: 'Avec un inconnu : *Scusi* (excusez-moi), puis *dov’è…?*', ar: 'مع حد متعرفيهوش: *Scusi* وبعدين *dov’è…?*' } },
            ],
          },
          {
            npc: ['È vicino! Vada sempre dritto, poi giri a sinistra.', 'C’est tout près ! Allez tout droit, puis tournez à gauche.', 'قريبة! امشي على طول، وبعدين لفّي شمال.'],
            options: [
              { t: ['Dritto e poi a sinistra. Grazie!', 'Tout droit puis à gauche. Merci !', 'على طول وبعدين شمال. شكراً!'], ok: true },
              { t: ['Dritto e poi a destra?', 'Tout droit puis à droite ?', 'على طول وبعدين يمين؟'], fb: { fr: 'Il a dit *sinistra* = gauche. *destra* = droite.', ar: 'هو قال *sinistra* = شمال. *destra* = يمين.' } },
            ],
          },
          {
            npc: ['Prego! Lei non è di qui, vero?', 'Je vous en prie ! Vous n’êtes pas d’ici, n’est-ce pas ?', 'العفو! حضرتك مش من هنا، صح؟'],
            options: [
              { t: ['No, sono egiziana. Abito qui da poco.', 'Non, je suis égyptienne. J’habite ici depuis peu.', 'لأ، أنا مصرية. ساكنة هنا من قريب.'], ok: true, reply: ['Ah, l’Egitto! Che bello.', 'Ah, l’Égypte ! Super.', 'آه، مصر! حلو أوي.'] },
              { t: ['Sì, è lontano.', 'Oui, c’est loin.', 'أيوه، بعيد.'], fb: { fr: 'Il demande si tu es d’ici (*di qui*). Réponds *no, sono egiziana*.', ar: 'هو بيسأل لو إنتي من هنا (*di qui*). قولي *no, sono egiziana*.' } },
            ],
          },
        ],
        end: ['Benvenuta a Udine! Buona passeggiata!', 'Bienvenue à Udine ! Bonne promenade !', 'أهلاً بيكي في أوديني! تمشية حلوة!'],
      },
    ],
  },

  // ───────────────────────────── 7
  {
    id: 'u7', month: 7, milestone: 'm3', icon: 'key', hue: 'rose',
    title: { it: 'A casa', fr: 'À la maison', ar: 'في البيت' },
    canDo: {
      fr: 'Décrire mon appartement, signaler un problème et parler avec les voisins.',
      ar: 'أوصف شقتي، أبلّغ عن مشكلة، وأتكلم مع الجيران.',
    },
    lessons: [
      {
        id: 'u7l1', title: { it: 'La casa', fr: 'L’appartement', ar: 'الشقة' },
        goal: { fr: 'Décrire les pièces de mon logement.', ar: 'أوصف أوض الشقة.' },
        note: {
          fr: [
            'Les étages : *primo, secondo, terzo, quarto, quinto*. *Il piano terra* = le rez-de-chaussée.',
            'Faux ami : *la camera* = la chambre (pas une caméra !).',
            '*abitare* = habiter : *abito a Udine*, *abito al terzo piano*.',
          ],
          ar: [
            'الأدوار: *primo, secondo, terzo, quarto, quinto* (الأول، التاني، التالت…). *il piano terra* = الدور الأرضي.',
            'خلي بالك: *la camera* = الأوضة (مش كاميرا!).',
            '*abitare* = يسكن: *abito a Udine*.',
          ],
        },
        words: [
          ['l’appartamento', 'l’appartement', 'الشقة'],
          ['la camera da letto', 'la chambre', 'أوضة النوم'],
          ['la cucina', 'la cuisine', 'المطبخ'],
          ['il bagno', 'la salle de bain', 'الحمام'],
          ['il soggiorno', 'le salon', 'الصالة'],
          ['il balcone', 'le balcon', 'البلكونة'],
          ['la finestra', 'la fenêtre', 'الشباك'],
          ['la porta', 'la porte', 'الباب'],
          ['le chiavi', 'les clés', 'المفاتيح'],
          ['il piano', 'l’étage', 'الدور'],
          ['l’ascensore', 'l’ascenseur', 'الأسانسير'],
        ],
        phrases: [
          ['Abito al terzo piano.', 'J’habite au troisième étage.', 'أنا ساكنة في الدور التالت.'],
          ['C’è l’ascensore?', 'Il y a un ascenseur ?', 'فيه أسانسير؟'],
          ['La cucina è piccola ma luminosa.', 'La cuisine est petite mais lumineuse.', 'المطبخ صغير بس منوّر.'],
          ['Dove sono le chiavi?', 'Où sont les clés ?', 'المفاتيح فين؟'],
          ['L’appartamento ha due camere e un balcone.', 'L’appartement a deux chambres et un balcon.', 'الشقة فيها أوضتين وبلكونة.'],
        ],
      },
      {
        id: 'u7l2', title: { it: 'Qualcosa non funziona', fr: 'Un problème à la maison', ar: 'حاجة مش شغالة' },
        goal: { fr: 'Expliquer qu’une chose ne marche pas, et depuis quand.', ar: 'أشرح إن حاجة بايظة ومن إمتى.' },
        note: {
          fr: [
            'La négation est simple : *non* + verbe. *Non funziona* = ça ne marche pas. Pas de « pas » !',
            '*da* = depuis : *da ieri* (depuis hier), *da lunedì*, *da due giorni*.',
          ],
          ar: [
            'النفي سهل: *non* + الفعل. *Non funziona* = مش شغال. زي «مش» بالظبط!',
            '*da* = من (مدة): *da ieri* (من امبارح)، *da due giorni* (من يومين).',
          ],
        },
        culture: {
          fr: 'En Italie, le loyer (*affitto*) et les charges (*spese condominiali*, *bollette*) sont souvent séparés. Demande toujours si les factures sont comprises.',
          ar: 'في إيطاليا الإيجار (*affitto*) غالباً منفصل عن الفواتير. اسألي دايماً لو الفواتير محسوبة.',
        },
        words: [
          ['non funziona', 'ça ne marche pas', 'مش شغال'],
          ['il riscaldamento', 'le chauffage', 'التدفئة'],
          ['la lavatrice', 'la machine à laver', 'الغسالة'],
          ['l’acqua calda', 'l’eau chaude', 'المية السخنة'],
          ['la luce', 'la lumière / l’électricité', 'النور'],
          ['rotto', 'cassé', 'بايظ'],
          ['il padrone di casa', 'le propriétaire', 'صاحب الشقة'],
          ['l’affitto', 'le loyer', 'الإيجار'],
          ['le bollette', 'les factures', 'الفواتير'],
          ['l’idraulico', 'le plombier', 'السباك'],
        ],
        phrases: [
          ['Il riscaldamento non funziona.', 'Le chauffage ne marche pas.', 'التدفئة مش شغالة.'],
          ['La lavatrice è rotta.', 'La machine à laver est cassée.', 'الغسالة بايظة.'],
          ['Non c’è acqua calda da ieri.', 'Il n’y a pas d’eau chaude depuis hier.', 'مفيش مية سخنة من امبارح.'],
          ['Quando viene l’idraulico?', 'Quand vient le plombier ?', 'السباك هييجي إمتى؟'],
          ['L’affitto si paga il primo del mese.', 'Le loyer se paie le premier du mois.', 'الإيجار بيتدفع أول الشهر.'],
          ['Le bollette sono comprese?', 'Les factures sont comprises ?', 'الفواتير محسوبة؟'],
        ],
      },
      {
        id: 'u7l3', title: { it: 'Vicini e rifiuti', fr: 'Voisins et tri des déchets', ar: 'الجيران والزبالة' },
        goal: { fr: 'Être une voisine polie et bien trier ses déchets.', ar: 'أكون جارة ذوق وأفرز الزبالة صح.' },
        note: {
          fr: [
            '*Scusi il disturbo* = excusez-moi de vous déranger. Parfait pour frapper chez un voisin.',
            '*Dove butto…?* = où je jette… ? (*buttare* = jeter).',
          ],
          ar: [
            '*Scusi il disturbo* = آسفة على الإزعاج. مثالية لما تخبّطي على جارك.',
            '*Dove butto…?* = أرمي… فين؟ (*buttare* = يرمي).',
          ],
        },
        culture: {
          fr: 'Dans le Frioul, le tri sélectif (*raccolta differenziata*) est très suivi, souvent avec une collecte en porte-à-porte : chaque type de déchet a son jour. La mairie (*il Comune*) publie le calendrier.',
          ar: 'في فريولي فرز الزبالة (*raccolta differenziata*) مهم جداً، وغالباً بيلمّوها من قدام البيت: كل نوع ليه يوم. البلدية (*il Comune*) بتنشر الجدول.',
        },
        words: [
          ['i vicini', 'les voisins', 'الجيران'],
          ['la spazzatura', 'les ordures', 'الزبالة'],
          ['la raccolta differenziata', 'le tri sélectif', 'فرز الزبالة'],
          ['la carta', 'le papier', 'الورق'],
          ['la plastica', 'le plastique', 'البلاستيك'],
          ['il vetro', 'le verre (matière)', 'الإزاز'],
          ['l’umido', 'les déchets organiques', 'بواقي الأكل'],
          ['buttare', 'jeter', 'يرمي'],
          ['il rumore', 'le bruit', 'الدوشة'],
          ['il disturbo', 'le dérangement', 'الإزعاج'],
        ],
        phrases: [
          ['Scusi il disturbo.', 'Excusez-moi de vous déranger.', 'آسفة على الإزعاج.'],
          ['Piacere, sono la nuova vicina.', 'Enchantée, je suis la nouvelle voisine.', 'تشرفنا، أنا الجارة الجديدة.'],
          ['Dove butto la plastica?', 'Où je jette le plastique ?', 'أرمي البلاستيك فين؟'],
          ['Quando passano a prendere la carta?', 'Quand passent-ils ramasser le papier ?', 'بييجوا ياخدوا الورق إمتى؟'],
          ['Il calendario della raccolta è sul sito del Comune.', 'Le calendrier de collecte est sur le site de la mairie.', 'جدول الزبالة على موقع البلدية.'],
        ],
      },
      {
        id: 'u7s', kind: 'scene',
        title: { it: 'Pronto, signor Bassi?', fr: 'Scène : appeler le propriétaire', ar: 'مشهد: مكالمة صاحب الشقة' },
        goal: { fr: 'Signaler une panne de chauffage au téléphone.', ar: 'تبلّغي إن التدفئة بايظة في التليفون.' },
        setting: { fr: 'Janvier. Le chauffage ne marche plus. Tu appelles ton propriétaire.', ar: 'يناير. التدفئة وقفت. بتكلمي صاحب الشقة.' },
        npc: { name: 'Sig. Bassi', role: { fr: 'le propriétaire', ar: 'صاحب الشقة' } },
        turns: [
          {
            npc: ['Pronto?', 'Allô ?', 'ألو؟'],
            options: [
              { t: ['Pronto, buongiorno. Sono {name}, del terzo piano.', 'Allô, bonjour. C’est {name}, du troisième étage.', 'ألو، صباح الخير. أنا {name}، من الدور التالت.'], ok: true },
              { t: ['Ciao, come stai?', 'Salut, ça va ?', 'أهلاً، إزيك؟'], fb: { fr: 'Avec un propriétaire, reste formelle : *buongiorno* + ton nom.', ar: 'مع صاحب الشقة خليكي رسمية: *buongiorno* + اسمك.' } },
            ],
          },
          {
            npc: ['Ah, buongiorno! Mi dica.', 'Ah, bonjour ! Je vous écoute.', 'آه، صباح الخير! اتفضلي.'],
            options: [
              { t: ['Il riscaldamento non funziona.', 'Le chauffage ne marche pas.', 'التدفئة مش شغالة.'], ok: true },
              { t: ['La cucina è luminosa.', 'La cuisine est lumineuse.', 'المطبخ منوّر.'], fb: { fr: 'C’est gentil, mais tu appelles pour un problème ! *Non funziona* = ne marche pas.', ar: 'كلام حلو، بس إنتي بتتصلي عشان مشكلة! *non funziona* = مش شغال.' } },
            ],
          },
          {
            npc: ['Da quando?', 'Depuis quand ?', 'من إمتى؟'],
            options: [
              { t: ['Da ieri sera.', 'Depuis hier soir.', 'من امبارح بالليل.'], ok: true },
              { t: ['Alle tre.', 'À trois heures.', 'الساعة تلاتة.'], fb: { fr: '*Alle tre* = à trois heures. Pour « depuis », on dit *da* : *da ieri*, *da lunedì*.', ar: '*Alle tre* = الساعة تلاتة. عشان «من» نقول *da*: *da ieri*.' } },
            ],
          },
          {
            npc: ['Mi dispiace. Mando un tecnico domani mattina. Va bene alle nove?', 'Je suis désolé. J’envoie un technicien demain matin. Neuf heures, ça vous va ?', 'آسف. هبعتلك فني بكرة الصبح. الساعة تسعة ينفع؟'],
            options: [
              { t: ['Sì, perfetto. Grazie mille!', 'Oui, parfait. Merci beaucoup !', 'أيوه، تمام. ألف شكر!'], ok: true },
              { t: ['Domani mattina non posso. Va bene alle due?', 'Demain matin je ne peux pas. Deux heures, ça va ?', 'بكرة الصبح مقدرش. ينفع الساعة اتنين؟'], ok: true, reply: ['D’accordo, alle due.', 'D’accord, à deux heures.', 'ماشي، الساعة اتنين.'] },
            ],
          },
        ],
        end: ['Benissimo. A domani, arrivederci!', 'Très bien. À demain, au revoir !', 'تمام جداً. أشوفك بكرة، مع السلامة!'],
      },
    ],
  },

  // ───────────────────────────── 8
  {
    id: 'u8', month: 8, milestone: 'm3', icon: 'calendar', hue: 'gold',
    title: { it: 'Appuntamenti', fr: 'Rendez-vous', ar: 'المواعيد' },
    canDo: {
      fr: 'Donner une date, prendre ou déplacer un rendez-vous, survivre à un appel téléphonique.',
      ar: 'أقول تاريخ، آخد أو أغيّر ميعاد، وأعدّي مكالمة تليفون بسلام.',
    },
    lessons: [
      {
        id: 'u8l1', title: { it: 'I mesi', fr: 'Les mois et les dates', ar: 'الشهور والتواريخ' },
        goal: { fr: 'Dire une date et parler des mois.', ar: 'أقول تاريخ وأتكلم عن الشهور.' },
        note: {
          fr: [
            'Une date : *il* + nombre + mois : *il tre ottobre*. Seule exception : le 1er = *il primo* (*il primo maggio*).',
            'Pas de majuscule aux mois, comme en français.',
            '« En mai » = *a maggio* ou *in maggio* (les deux sont corrects).',
          ],
          ar: [
            'التاريخ: *il* + الرقم + الشهر: *il tre ottobre* (٣ أكتوبر). بس أول الشهر = *il primo*.',
            'الشهور بحرف صغير.',
            '«في مايو» = *a maggio* أو *in maggio*.',
          ],
        },
        compare: { fr: 'Les noms des mois sont très proches du français : *ottobre* / octobre, *dicembre* / décembre.', ar: 'أسامي الشهور قريبة جداً من اللي بنستعملها في مصر: *gennaio* يناير، *ottobre* أكتوبر.' },
        culture: { fr: 'En août (*agosto*), beaucoup de commerces ferment pour les vacances, surtout autour du 15 août (*Ferragosto*).', ar: 'في أغسطس محلات كتير بتقفل للأجازة، خصوصاً حوالين ١٥ أغسطس (*Ferragosto*).' },
        words: [
          ['gennaio', 'janvier', 'يناير'], ['febbraio', 'février', 'فبراير'], ['marzo', 'mars', 'مارس'],
          ['aprile', 'avril', 'أبريل'], ['maggio', 'mai', 'مايو'], ['giugno', 'juin', 'يونيو'],
          ['luglio', 'juillet', 'يوليو'], ['agosto', 'août', 'أغسطس'], ['settembre', 'septembre', 'سبتمبر'],
          ['ottobre', 'octobre', 'أكتوبر'], ['novembre', 'novembre', 'نوفمبر'], ['dicembre', 'décembre', 'ديسمبر'],
        ],
        phrases: [
          ['Che giorno è oggi?', 'On est quel jour aujourd’hui ?', 'النهارده كام في الشهر؟'],
          ['Oggi è il tre ottobre.', 'Aujourd’hui, c’est le trois octobre.', 'النهارده ٣ أكتوبر.'],
          ['Il mio compleanno è a maggio.', 'Mon anniversaire est en mai.', 'عيد ميلادي في مايو.'],
          ['Arrivo a Udine a {moveMonthIt}.', 'J’arrive à Udine en {moveMonthFr}.', 'هوصل أوديني في {moveMonthAr}.'],
          ['Ad agosto molti negozi chiudono per ferie.', 'En août, beaucoup de magasins ferment pour les vacances.', 'في أغسطس محلات كتير بتقفل للأجازة.'],
        ],
      },
      {
        id: 'u8l2', title: { it: 'Prendere un appuntamento', fr: 'Prendre rendez-vous', ar: 'آخد ميعاد' },
        goal: { fr: 'Fixer, déplacer ou annuler un rendez-vous.', ar: 'أحدد أو أغيّر أو ألغي ميعاد.' },
        note: {
          fr: [
            '*posso* (je peux), *devo* (je dois), *voglio* (je veux) + infinitif — exactement comme en français : *posso venire*, *devo andare*.',
            '*lo* = le, collé à la fin de l’infinitif : *spostarlo* = le déplacer.',
          ],
          ar: [
            '*posso* (أقدر)، *devo* (لازم)، *voglio* (عايزة) + المصدر: *posso venire* (أقدر آجي).',
            '*lo* = «ـه» وبيلزق في آخر الفعل: *spostarlo* = نأجّله.',
          ],
        },
        compare: { fr: 'L’italien colle le pronom au verbe à l’infinitif : *spostarlo*, *annullarlo*. Le français le met devant : « le déplacer ».', ar: 'زي العربي، الضمير بيلزق في آخر الفعل: *spostarlo* = نأجّله.' },
        words: [
          ['l’appuntamento', 'le rendez-vous', 'الميعاد'],
          ['libero', 'libre', 'فاضي'],
          ['la settimana prossima', 'la semaine prochaine', 'الأسبوع الجاي'],
          ['la mattina', 'le matin', 'الصبح'],
          ['il pomeriggio', 'l’après-midi', 'بعد الضهر'],
          ['la sera', 'le soir', 'بالليل'],
          ['va bene', 'd’accord / ça va', 'ماشي'],
          ['spostare', 'déplacer', 'يأجّل'],
          ['annullare', 'annuler', 'يلغي'],
          ['posso', 'je peux', 'أقدر'],
          ['non posso', 'je ne peux pas', 'مقدرش'],
        ],
        phrases: [
          ['Vorrei prendere un appuntamento.', 'Je voudrais prendre rendez-vous.', 'كنت عايزة آخد ميعاد.'],
          ['Va bene giovedì alle quattro?', 'Jeudi à quatre heures, ça va ?', 'ينفع الخميس الساعة أربعة؟'],
          ['Il pomeriggio non posso, lavoro.', 'L’après-midi je ne peux pas, je travaille.', 'بعد الضهر مقدرش، بشتغل.'],
          ['Devo annullare l’appuntamento.', 'Je dois annuler le rendez-vous.', 'لازم ألغي الميعاد.'],
          ['Possiamo spostarlo a venerdì?', 'On peut le déplacer à vendredi ?', 'ممكن نأجّله للجمعة؟'],
          ['La settimana prossima sono libera.', 'La semaine prochaine, je suis libre.', 'الأسبوع الجاي أنا فاضية.'],
        ],
      },
      {
        id: 'u8l3', title: { it: 'Al telefono', fr: 'Au téléphone', ar: 'في التليفون' },
        goal: { fr: 'Gérer un appel même quand je ne comprends pas tout.', ar: 'أعدّي مكالمة حتى لو مش فاهمة كل حاجة.' },
        note: {
          fr: [
            'Ces phrases sont tes bouées de sauvetage : *non ho capito*, *può ripetere?*, *più lentamente, per favore*.',
            'Les Italiens aiment aider quelqu’un qui fait l’effort de parler italien : n’aie pas peur de demander.',
            '*La richiamo* : *La* = vous (forme polie).',
          ],
          ar: [
            'الجمل دي هي طوق النجاة بتاعك: *non ho capito* (مفهمتش)، *può ripetere?* (ممكن تعيد؟)، *più lentamente* (براحة شوية).',
            'الإيطاليين بيحبوا يساعدوا اللي بيحاول يتكلم إيطالي: متتكسفيش تسألي.',
          ],
        },
        culture: { fr: 'Au téléphone, on répond *Pronto?* — jamais *Ciao* avec un inconnu.', ar: 'في التليفون بيردّوا *Pronto?* — مش *Ciao* مع حد متعرفيهوش.' },
        words: [
          ['pronto?', 'allô ?', 'ألو؟'],
          ['chi parla?', 'qui est à l’appareil ?', 'مين معايا؟'],
          ['un attimo', 'un instant', 'لحظة'],
          ['può ripetere?', 'vous pouvez répéter ?', 'ممكن تعيد؟'],
          ['più lentamente', 'plus lentement', 'براحة شوية'],
          ['non ho capito', 'je n’ai pas compris', 'مفهمتش'],
          ['il numero di telefono', 'le numéro de téléphone', 'رقم التليفون'],
          ['richiamare', 'rappeler', 'يكلّم تاني'],
          ['il messaggio', 'le message', 'الرسالة'],
          ['il cellulare', 'le portable', 'الموبايل'],
        ],
        phrases: [
          ['Pronto, chi parla?', 'Allô, qui est à l’appareil ?', 'ألو، مين معايا؟'],
          ['Scusi, non ho capito.', 'Pardon, je n’ai pas compris.', 'لا مؤاخذة، مفهمتش.'],
          ['Può parlare più lentamente, per favore?', 'Vous pouvez parler plus lentement, s’il vous plaît ?', 'ممكن تتكلم براحة شوية لو سمحت؟'],
          ['Un attimo, per favore.', 'Un instant, s’il vous plaît.', 'لحظة واحدة لو سمحت.'],
          ['La richiamo più tardi.', 'Je vous rappelle plus tard.', 'هكلّم حضرتك تاني بعدين.'],
          ['Posso lasciare un messaggio?', 'Je peux laisser un message ?', 'ممكن أسيب رسالة؟'],
        ],
      },
      {
        id: 'u8s', kind: 'scene',
        title: { it: 'Dal parrucchiere', fr: 'Scène : chez le coiffeur', ar: 'مشهد: عند الكوافير' },
        goal: { fr: 'Prendre rendez-vous au téléphone, même si on parle vite.', ar: 'تاخدي ميعاد في التليفون حتى لو بيتكلموا بسرعة.' },
        setting: { fr: 'Tu appelles un salon de coiffure du centre.', ar: 'بتتصلي بكوافير في وسط البلد.' },
        npc: { name: 'Elena', role: { fr: 'coiffeuse', ar: 'الكوافيرة' } },
        turns: [
          {
            npc: ['Salone Elena, buongiorno!', 'Salon Elena, bonjour !', 'صالون إيلينا، صباح الخير!'],
            options: [
              { t: ['Buongiorno, vorrei prendere un appuntamento.', 'Bonjour, je voudrais prendre rendez-vous.', 'صباح الخير، كنت عايزة آخد ميعاد.'], ok: true },
              { t: ['Pronto, chi parla?', 'Allô, qui est à l’appareil ?', 'ألو، مين معايا؟'], fb: { fr: 'Elle s’est déjà présentée : *Salone Elena*. Dis ce que tu veux : *vorrei prendere un appuntamento*.', ar: 'هي عرّفت نفسها: *Salone Elena*. قولي عايزة إيه: *vorrei prendere un appuntamento*.' } },
            ],
          },
          {
            npc: ['Certo. Per quando?', 'Bien sûr. Pour quand ?', 'أكيد. إمتى؟'],
            options: [
              { t: ['Per sabato mattina, se possibile.', 'Pour samedi matin, si possible.', 'السبت الصبح لو ينفع.'], ok: true },
              { t: ['Per sabato, a mezzanotte.', 'Pour samedi, à minuit.', 'السبت، الساعة ١٢ بالليل.'], fb: { fr: 'Minuit chez le coiffeur ? Plutôt *la mattina* ou *il pomeriggio* !', ar: 'نص الليل عند الكوافير؟ الأحسن *la mattina* أو *il pomeriggio*!' } },
            ],
          },
          {
            npc: ['Sabato mattina è tutto pieno. Le va bene venerdì alle cinque e mezza?', 'Samedi matin, c’est complet. Vendredi à cinq heures et demie, ça vous va ?', 'السبت الصبح مليان. ينفعك الجمعة الساعة خمسة ونص؟'],
            options: [
              { t: ['Scusi, può ripetere più lentamente?', 'Pardon, vous pouvez répéter plus lentement ?', 'لا مؤاخذة، ممكن تعيدي براحة؟'], ok: true, reply: ['Certo: venerdì… alle cinque… e mezza.', 'Bien sûr : vendredi… à cinq heures… et demie.', 'أكيد: الجمعة… الساعة خمسة… ونص.'] },
              { t: ['Sì, venerdì alle cinque e mezza va bene.', 'Oui, vendredi à cinq heures et demie, ça va.', 'أيوه، الجمعة خمسة ونص تمام.'], ok: true },
              { t: ['Sabato alle cinque?', 'Samedi à cinq heures ?', 'السبت الساعة خمسة؟'], fb: { fr: 'Elle a dit *venerdì* (vendredi), car samedi est complet (*tutto pieno*).', ar: 'هي قالت *venerdì* (الجمعة)، عشان السبت مليان (*tutto pieno*).' } },
            ],
          },
          {
            npc: ['Perfetto. Il suo nome?', 'Parfait. Votre nom ?', 'تمام. اسم حضرتك؟'],
            options: [
              { t: ['Mi chiamo {name}.', 'Je m’appelle {name}.', 'اسمي {name}.'], ok: true },
              { t: ['Il mio numero è venerdì.', 'Mon numéro est vendredi.', 'رقمي الجمعة.'], fb: { fr: 'Elle demande ton nom : *mi chiamo…*', ar: 'هي بتسأل على اسمك: *mi chiamo…*' } },
            ],
          },
        ],
        end: ['Grazie, {name}. A venerdì!', 'Merci, {name}. À vendredi !', 'شكراً يا {name}. أشوفك الجمعة!'],
      },
    ],
  },
];
