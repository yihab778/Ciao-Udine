// Interface strings. French is the main support language; Egyptian Arabic optional.
const S = {
  fr: {
    'nav.today': 'Aujourd’hui', 'nav.path': 'Parcours', 'nav.review': 'Révisions', 'nav.words': 'Mots', 'nav.progress': 'Progrès',
    start: 'Commencer', continue: 'Continuer', check: 'Vérifier', next: 'Suivant', close: 'Fermer', back: 'Retour',
    listen: 'Écouter', slow: 'Lentement', retry: 'Réessayer', done: 'Terminé', cancel: 'Annuler', save: 'Enregistrer',
    help: 'Aide', showTr: 'Voir la traduction', hideTr: 'Masquer', loading: 'Chargement…', yes: 'Oui', no: 'Non',
    settings: 'Réglages', partner: 'Espace partenaire',

    'greet.morning': 'Buongiorno', 'greet.afternoon': 'Buon pomeriggio', 'greet.evening': 'Buonasera',
    'today.countdown': '{n} jours avant Udine', 'today.countdownMonths': 'Environ {n} mois avant Udine',
    'today.arrived': 'Tu es à Udine — benvenuta a casa !',
    'today.goal': '{m} / {g} min aujourd’hui', 'today.goalDone': 'Objectif du jour atteint. Brava !',
    'today.next': 'Leçon du jour', 'today.scene': 'Scène du jour', 'today.minutes': '≈ {n} min',
    'today.review': 'Révisions', 'today.reviewCount': '{n} à revoir aujourd’hui', 'today.reviewNone': 'Rien à revoir pour l’instant. Les mots reviennent au bon moment.',
    'today.reviewStart': 'Réviser', 'today.phrase': 'Phrase du jour', 'today.week': 'Ton rythme cette semaine',
    'today.weekNote': 'Jours actifs : {n} / 7. Les jours de repos font aussi partie du voyage.',
    'today.allDone': 'Tu as terminé tout le parcours ! Continue les révisions pour garder tes mots bien vivants.',
    'today.extra': 'Encore un peu ?', 'today.practiceUnit': 'Pratique : {u}', 'today.cheers': 'Un mot de {p}',

    'path.title': 'Ton voyage vers Udine', 'path.plan': 'Plan sur {n} mois · arrivée {d}',
    'path.pace.ahead': 'Tu es en avance sur ton plan. Magnifique !', 'path.pace.ontrack': 'Tu avances au bon rythme.',
    'path.pace.behind': 'Ton rythme est plus calme que prévu — c’est normal. Environ {n} leçons par semaine suffisent pour arriver prête.',
    'path.adjust': 'Ajuster le plan', 'path.month': 'Mois {n}', 'path.target': 'objectif ≈ {d}', 'path.youCan': 'Ce que tu sauras faire',
    'path.lesson': 'Leçon', 'path.scene': 'Scène', 'path.done': 'Fait', 'path.next': 'Suggérée', 'path.practice': 'Pratiquer cette étape',
    'path.milestone': 'Étape clé', 'path.level': 'Niveau visé : {l}',

    'lesson.goal': 'Objectif', 'lesson.situation': 'La situation', 'lesson.discover': 'Découvre les mots',
    'lesson.discoverHint': 'Touche un mot pour l’entendre.', 'lesson.compare': 'Comme en français', 'lesson.compareAr': 'Pour toi',
    'lesson.culture': 'À Udine', 'lesson.quit': 'Quitter la leçon ?', 'lesson.quitText': 'Ta progression dans cette leçon ne sera pas enregistrée.',
    'lesson.quitYes': 'Quitter', 'lesson.quitNo': 'Continuer la leçon',
    'ex.choose': 'Que veut dire… ?', 'ex.reverse': 'Comment dit-on en italien… ?', 'ex.listen': 'Écoute et choisis ce que tu entends',
    'ex.match': 'Associe les paires', 'ex.build': 'Construis la phrase en italien', 'ex.listenBuild': 'Écoute et construis la phrase',
    'ex.type': 'Écris en italien', 'ex.typePh': 'Ta réponse en italien…', 'ex.tapToHear': 'Touche pour écouter',
    'ex.noAudio': 'Audio indisponible sur cet appareil — on lit à la place.',
    'fb.right': ['Brava !', 'Esatto !', 'Perfetto !', 'Bene !', 'Giusto !'], 'fb.almost': 'Presque !', 'fb.wrong': 'Pas tout à fait',
    'fb.answer': 'Réponse :', 'fb.again': 'On la revoit à la fin de la leçon.',
    'scene.with': 'avec {n}, {r}', 'scene.yourTurn': 'À toi : choisis ta réponse', 'scene.coach': 'Conseil',
    'scene.helpOn': 'Traductions affichées', 'scene.helpOff': 'Afficher les traductions',

    'end.title': 'Leçon terminée !', 'end.sceneTitle': 'Scène réussie !', 'end.canNow': 'Maintenant, tu sais :',
    'end.firstTry': '{a} / {b} du premier coup', 'end.words': '{n} mots et phrases ajoutés à tes révisions',
    'end.time': '{n} min de pratique', 'end.unitDone': 'Étape « {u} » terminée !', 'end.milestone': 'Étape clé atteinte : {m}',
    'end.reviewTitle': 'Révision terminée !', 'end.reviewText': '{a} / {b} justes. Chaque mot revient au bon moment.',

    'review.title': 'Révisions', 'review.empty': 'Tout est révisé !', 'review.emptyText': 'Les mots reviennent quand ils commencent à s’effacer. Fais une nouvelle leçon ou reviens demain.',
    'review.noWords': 'Tes révisions apparaîtront après ta première leçon.', 'review.start': 'Commencer ({n})', 'review.extra': 'Réviser quand même ({n} mots)',

    'words.title': 'Tes mots', 'words.search': 'Chercher un mot…', 'words.empty': 'Ton carnet est vide pour l’instant.',
    'words.emptyText': 'Chaque leçon terminée ajoute ses mots ici, avec leur prononciation.', 'words.count': '{n} mots et phrases',
    'words.noMatch': 'Aucun mot ne correspond.', 'words.strength': ['Fragile', 'En route', 'Bien', 'Solide', 'Acquis'], 'words.all': 'Tout',

    'prog.title': 'Tes progrès', 'prog.lessons': 'leçons', 'prog.words': 'mots', 'prog.minutes': 'min ce mois-ci', 'prog.week': 'Cette semaine (minutes)',
    'prog.calendar': 'Les 12 dernières semaines', 'prog.milestones': 'Étapes clés', 'prog.cando': 'Tu sais déjà…', 'prog.candoEmpty': 'Termine ta première étape pour voir apparaître ce que tu sais faire.',
    'prog.share': 'Partager avec {p}', 'prog.honest': 'Les chiffres viennent uniquement de ce que tu as vraiment fait dans l’app.',

    'share.title': 'Partager tes progrès', 'share.intro': 'Tu décides. Le partage permet à {p} de suivre ton voyage et de pratiquer avec toi — sans surveiller.',
    'share.toggle': 'Partager mes progrès avec {p}', 'share.focus': 'Inclure des idées pour pratiquer ensemble (scène en cours, mots difficiles)',
    'share.what': 'Ce qui est partagé', 'share.whatList': ['Leçons et étapes terminées', 'Minutes d’étude par jour (sans heure précise)', 'Nombre de mots appris', 'Idées pour pratiquer ensemble (si tu le choisis)'],
    'share.never': 'Jamais partagé', 'share.neverList': ['Tes réponses et tes erreurs détaillées', 'Ta position', 'L’heure exacte où tu étudies'],
    'share.preview': 'Aperçu de ce que voit {p}', 'share.send': 'Envoyer une mise à jour', 'share.copy': 'Copier le lien', 'share.copied': 'Lien copié !',
    'share.linkNote': 'Le lien contient un instantané de ton résumé. Envoie-le à {p} (WhatsApp, e-mail…). Chaque nouveau lien remplace l’ancien.',
    'share.liveOn': 'Synchronisation en direct active : {p} voit toujours la dernière version.', 'share.liveLink': 'Lien permanent pour {p}',
    'share.liveEnable': 'Activer la synchronisation en direct', 'share.liveOff': 'Mode instantané (sans serveur). Pour une synchronisation automatique entre appareils, voir le README.',
    'share.disabled': 'Le partage est désactivé. Rien ne quitte ton appareil.', 'share.stop': 'Arrêter le partage',
    'share.updated': 'Mis à jour', 'share.error': 'Impossible de joindre le serveur. Ton résumé reste sur ton appareil ; réessaie plus tard.',

    'pv.title': 'Le voyage de {n}', 'pv.sub': 'Résumé partagé par {n} · {d}', 'pv.lessons': 'leçons terminées', 'pv.words': 'mots appris',
    'pv.days': 'jours actifs (4 sem.)', 'pv.rhythm': 'Rythme sur 4 semaines', 'pv.now': 'En ce moment', 'pv.milestones': 'Étapes franchies',
    'pv.together': 'Pratiquer ensemble', 'pv.sceneIdea': 'Jouez la scène « {s} » : tu fais {r}, {n} répond en italien.',
    'pv.wordsIdea': 'Utilise ces mots dans la conversation, naturellement :', 'pv.recent': 'Dernières leçons',
    'pv.tips': ['Parle-lui lentement, avec des phrases courtes.', 'Félicite l’effort plus que la perfection.', 'Laisse-la finir sa phrase avant de corriger.'],
    'pv.privacy': 'Ce résumé ne contient ni réponses, ni position, ni horaires précis.', 'pv.invalid': 'Ce lien de partage n’est pas valide ou a été coupé.',
    'pv.notFound': 'Ce partage n’existe plus. Il a peut-être été arrêté.', 'pv.cheer': 'Envoyer un encouragement', 'pv.cheerPh': 'Brava amore, continua così !',
    'pv.cheerSent': 'Encouragement envoyé !', 'pv.openApp': 'Ouvrir l’app', 'pv.demo': 'Données de démonstration',
    'pv.previewBadge': 'Aperçu', 'pv.empty': 'Le voyage commence à peine. Les premières leçons apparaîtront ici.',

    'set.title': 'Réglages', 'set.name': 'Ton prénom', 'set.partner': 'Prénom de ton partenaire', 'set.lang': 'Langue d’aide',
    'set.goal': 'Objectif quotidien', 'set.min': '{n} min', 'set.move': 'Mois d’arrivée à Udine', 'set.audio': 'Audio italien',
    'set.rate': 'Vitesse de la voix', 'set.rateSlow': 'Lente', 'set.rateNormal': 'Normale', 'set.autoplay': 'Lire automatiquement les dialogues',
    'set.test': 'Tester la voix', 'set.data': 'Tes données', 'set.export': 'Exporter une sauvegarde', 'set.import': 'Importer une sauvegarde',
    'set.reset': 'Tout effacer', 'set.resetConfirm': 'Effacer toute ta progression sur cet appareil ? (Exporte une sauvegarde avant.)',
    'set.saved': 'Enregistré', 'set.imported': 'Sauvegarde importée !', 'set.importError': 'Ce fichier n’est pas une sauvegarde valide.',
    'set.storage': 'Ta progression est enregistrée sur cet appareil.', 'set.about': 'À propos',
    'audio.ok': 'Voix italienne : {v}', 'audio.none': 'Pas de voix italienne sur cet appareil. Les exercices d’écoute sont remplacés par la lecture. (Sur Android/iPhone, installe la voix italienne dans les réglages de synthèse vocale.)', 'audio.checking': 'Recherche d’une voix italienne…',

    'ob.welcome': 'Benvenuta !', 'ob.welcomeText': 'Dans environ un an, une nouvelle vie commence à Udine. Préparons-la ensemble, quelques minutes par jour.',
    'ob.lang': 'Dans quelle langue veux-tu les explications ?', 'ob.name': 'Comment t’appelles-tu ?', 'ob.namePh': 'Ton prénom',
    'ob.nameHint': 'On l’utilisera dans les dialogues : « Piacere, sono … »', 'ob.partner': 'Et ton partenaire ?',
    'ob.move': 'Quand arrives-tu à Udine ?', 'ob.moveHint': 'Ton parcours de 12 étapes sera réparti jusqu’à cette date. Tu pourras le changer.',
    'ob.goal': 'Combien de temps par jour ?', 'ob.goalHint': 'Choisis un rythme confortable. Mieux vaut 10 minutes régulières que 1 heure une fois.',
    'ob.goal10': 'Tranquille', 'ob.goal15': 'Régulier', 'ob.goal20': 'Motivé',
    'ob.audio': 'Écoute ta première phrase', 'ob.audioBtn': 'Écouter « Ciao! Benvenuta a Udine! »',
    'ob.ready': 'Tout est prêt !', 'ob.readyText': 'Ta première étape : apprendre les sons de l’italien. 8 minutes environ.',
    'ob.go': 'Commencer la première leçon', 'ob.step': 'Étape {a} sur {b}', 'ob.skip': 'Passer',
    'ob.privacy': 'Tout reste sur ton appareil. Le partage avec ton partenaire est désactivé, tu pourras l’activer quand tu veux.',

    'err.save': 'Attention : la progression ne peut pas être enregistrée (stockage du navigateur bloqué ou plein). Exporte une sauvegarde dans les réglages.',
    'err.generic': 'Oups, quelque chose s’est mal passé. Recharge la page — ta progression est conservée.',
    'err.notFound': 'Cette page n’existe pas.', 'offline': 'Hors ligne — l’app fonctionne quand même.',
    'install': 'Installer l’app', 'installHint': 'Ajoute « {a} » à ton écran d’accueil.',
  },

  ar: {
    'nav.today': 'النهارده', 'nav.path': 'المشوار', 'nav.review': 'مراجعة', 'nav.words': 'الكلمات', 'nav.progress': 'التقدّم',
    start: 'يلا نبدأ', continue: 'كمّلي', check: 'اتأكدي', next: 'اللي بعده', close: 'اقفلي', back: 'رجوع',
    listen: 'اسمعي', slow: 'براحة', retry: 'جرّبي تاني', done: 'خلصت', cancel: 'إلغاء', save: 'حفظ',
    help: 'مساعدة', showTr: 'وريني الترجمة', hideTr: 'اخفي', loading: 'بيحمّل…', yes: 'أيوه', no: 'لأ',
    settings: 'الإعدادات', partner: 'مساحة الشريك',

    'greet.morning': 'Buongiorno', 'greet.afternoon': 'Buon pomeriggio', 'greet.evening': 'Buonasera',
    'today.countdown': 'فاضل {n} يوم على أوديني', 'today.countdownMonths': 'فاضل حوالي {n} شهور على أوديني',
    'today.arrived': 'إنتي في أوديني — benvenuta a casa!',
    'today.goal': '{m} / {g} دقيقة النهارده', 'today.goalDone': 'خلّصتي هدف النهارده. شاطرة!',
    'today.next': 'درس النهارده', 'today.scene': 'مشهد النهارده', 'today.minutes': '≈ {n} دقيقة',
    'today.review': 'المراجعة', 'today.reviewCount': '{n} محتاجين مراجعة النهارده', 'today.reviewNone': 'مفيش مراجعة دلوقتي. الكلمات هترجعلك في الوقت المناسب.',
    'today.reviewStart': 'راجعي', 'today.phrase': 'جملة النهارده', 'today.week': 'إيقاعك الأسبوع ده',
    'today.weekNote': 'أيام المذاكرة: {n} / ٧. أيام الراحة كمان جزء من المشوار.',
    'today.allDone': 'خلّصتي المشوار كله! كمّلي مراجعة عشان الكلمات تفضل معاكي.',
    'today.extra': 'شوية كمان؟', 'today.practiceUnit': 'تمرين: {u}', 'today.cheers': 'كلمة من {p}',

    'path.title': 'مشوارك لأوديني', 'path.plan': 'خطة على {n} شهور · الوصول {d}',
    'path.pace.ahead': 'إنتي سابقة الخطة. تحفة!', 'path.pace.ontrack': 'ماشية بالإيقاع الصح.',
    'path.pace.behind': 'إيقاعك أهدى من المتوقع — وده عادي. حوالي {n} دروس في الأسبوع كفاية عشان توصلي جاهزة.',
    'path.adjust': 'عدّلي الخطة', 'path.month': 'شهر {n}', 'path.target': 'الهدف ≈ {d}', 'path.youCan': 'هتعرفي تعملي إيه',
    'path.lesson': 'درس', 'path.scene': 'مشهد', 'path.done': 'خلص', 'path.next': 'المقترح', 'path.practice': 'اتمرّني على المرحلة دي',
    'path.milestone': 'محطة مهمة', 'path.level': 'المستوى المستهدف: {l}',

    'lesson.goal': 'الهدف', 'lesson.situation': 'الموقف', 'lesson.discover': 'اتعرّفي على الكلمات',
    'lesson.discoverHint': 'دوسي على الكلمة عشان تسمعيها.', 'lesson.compare': 'مقارنة', 'lesson.compareAr': 'ليكي إنتي',
    'lesson.culture': 'في أوديني', 'lesson.quit': 'تخرجي من الدرس؟', 'lesson.quitText': 'التقدم في الدرس ده مش هيتحفظ.',
    'lesson.quitYes': 'اخرجي', 'lesson.quitNo': 'كمّلي الدرس',
    'ex.choose': 'يعني إيه…؟', 'ex.reverse': 'بالإيطالي نقول إزاي…؟', 'ex.listen': 'اسمعي واختاري اللي سمعتيه',
    'ex.match': 'وصّلي كل كلمة بمعناها', 'ex.build': 'ركّبي الجملة بالإيطالي', 'ex.listenBuild': 'اسمعي وركّبي الجملة',
    'ex.type': 'اكتبي بالإيطالي', 'ex.typePh': 'إجابتك بالإيطالي…', 'ex.tapToHear': 'دوسي عشان تسمعي',
    'ex.noAudio': 'الصوت مش متاح على الجهاز ده — هنقرا بدل ما نسمع.',
    'fb.right': ['Brava!', 'Esatto!', 'Perfetto!', 'Bene!', 'Giusto!'], 'fb.almost': 'قرّبتي!', 'fb.wrong': 'مش بالظبط',
    'fb.answer': 'الإجابة:', 'fb.again': 'هنرجعلها تاني في آخر الدرس.',
    'scene.with': 'مع {n}، {r}', 'scene.yourTurn': 'دورك: اختاري ردّك', 'scene.coach': 'نصيحة',
    'scene.helpOn': 'الترجمة ظاهرة', 'scene.helpOff': 'وريني الترجمة',

    'end.title': 'خلّصتي الدرس!', 'end.sceneTitle': 'عدّيتي المشهد!', 'end.canNow': 'دلوقتي إنتي تعرفي:',
    'end.firstTry': '{a} / {b} صح من أول مرة', 'end.words': '{n} كلمة وجملة اتضافوا للمراجعة',
    'end.time': '{n} دقيقة تمرين', 'end.unitDone': 'خلّصتي مرحلة «{u}»!', 'end.milestone': 'وصلتي لمحطة: {m}',
    'end.reviewTitle': 'خلّصتي المراجعة!', 'end.reviewText': '{a} / {b} صح. كل كلمة هترجعلك في الوقت المناسب.',

    'review.title': 'المراجعة', 'review.empty': 'راجعتي كل حاجة!', 'review.emptyText': 'الكلمات بترجع لما تبدأ تتنسي. اعملي درس جديد أو تعالي بكرة.',
    'review.noWords': 'المراجعة هتظهر بعد أول درس.', 'review.start': 'ابدأي ({n})', 'review.extra': 'راجعي برضه ({n} كلمة)',

    'words.title': 'كلماتك', 'words.search': 'دوّري على كلمة…', 'words.empty': 'الكشكول لسه فاضي.',
    'words.emptyText': 'كل درس بتخلّصيه بيضيف كلماته هنا بالنطق بتاعها.', 'words.count': '{n} كلمة وجملة',
    'words.noMatch': 'مفيش كلمة زي كده.', 'words.strength': ['ضعيفة', 'في السكة', 'كويسة', 'قوية', 'محفوظة'], 'words.all': 'الكل',

    'prog.title': 'تقدّمك', 'prog.lessons': 'دروس', 'prog.words': 'كلمة', 'prog.minutes': 'دقيقة الشهر ده', 'prog.week': 'الأسبوع ده (دقايق)',
    'prog.calendar': 'آخر ١٢ أسبوع', 'prog.milestones': 'المحطات', 'prog.cando': 'إنتي بقيتي تعرفي…', 'prog.candoEmpty': 'خلّصي أول مرحلة عشان يظهر اللي بقيتي تعرفيه.',
    'prog.share': 'شاركي مع {p}', 'prog.honest': 'الأرقام دي من اللي عملتيه فعلاً في الأبلكيشن بس.',

    'share.title': 'شاركي تقدّمك', 'share.intro': 'القرار ليكي. المشاركة بتخلّي {p} يتابع مشوارك ويتمرّن معاكي — مش يراقبك.',
    'share.toggle': 'شاركي تقدّمي مع {p}', 'share.focus': 'ضيفي أفكار نتمرّن عليها سوا (المشهد الحالي، الكلمات الصعبة)',
    'share.what': 'اللي بيتشارك', 'share.whatList': ['الدروس والمراحل اللي خلصت', 'دقايق المذاكرة كل يوم (من غير الساعة)', 'عدد الكلمات', 'أفكار للتمرين سوا (لو اخترتي)'],
    'share.never': 'مش بيتشارك أبداً', 'share.neverList': ['إجاباتك وغلطاتك بالتفصيل', 'مكانك', 'الساعة اللي بتذاكري فيها'],
    'share.preview': 'ده اللي {p} هيشوفه', 'share.send': 'ابعتي تحديث', 'share.copy': 'انسخي اللينك', 'share.copied': 'اللينك اتنسخ!',
    'share.linkNote': 'اللينك فيه صورة من ملخصك دلوقتي. ابعتيه لـ{p} (واتساب، إيميل…). كل لينك جديد بيحل محل القديم.',
    'share.liveOn': 'المزامنة المباشرة شغالة: {p} بيشوف آخر نسخة دايماً.', 'share.liveLink': 'لينك ثابت لـ{p}',
    'share.liveEnable': 'شغّلي المزامنة المباشرة', 'share.liveOff': 'وضع اللينك (من غير سيرفر). للمزامنة التلقائية بين الأجهزة شوفي الـ README.',
    'share.disabled': 'المشاركة مقفولة. ولا حاجة بتخرج من جهازك.', 'share.stop': 'وقّفي المشاركة',
    'share.updated': 'اتحدّث', 'share.error': 'مش قادرين نوصل للسيرفر. ملخصك فاضل على جهازك؛ جرّبي تاني بعدين.',

    'pv.title': 'مشوار {n}', 'pv.sub': 'ملخص شاركته {n} · {d}', 'pv.lessons': 'درس خلص', 'pv.words': 'كلمة اتعلمتها',
    'pv.days': 'يوم مذاكرة (٤ أسابيع)', 'pv.rhythm': 'الإيقاع في ٤ أسابيع', 'pv.now': 'دلوقتي', 'pv.milestones': 'المحطات اللي عدّتها',
    'pv.together': 'اتمرّنوا سوا', 'pv.sceneIdea': 'مثّلوا مشهد «{s}»: إنت تبقى {r}، و{n} ترد بالإيطالي.',
    'pv.wordsIdea': 'استعمل الكلمات دي في الكلام بشكل طبيعي:', 'pv.recent': 'آخر الدروس',
    'pv.tips': ['اتكلم معاها براحة وبجمل قصيرة.', 'شجّع المجهود أكتر من الكمال.', 'سيبها تكمّل الجملة قبل ما تصحّح.'],
    'pv.privacy': 'الملخص ده مفيهوش إجابات ولا مكان ولا مواعيد بالظبط.', 'pv.invalid': 'لينك المشاركة ده مش صحيح أو اتقطع.',
    'pv.notFound': 'المشاركة دي مش موجودة. يمكن اتوقفت.', 'pv.cheer': 'ابعت تشجيع', 'pv.cheerPh': 'Brava amore, continua così!',
    'pv.cheerSent': 'التشجيع وصل!', 'pv.openApp': 'افتح الأبلكيشن', 'pv.demo': 'بيانات تجريبية',
    'pv.previewBadge': 'معاينة', 'pv.empty': 'المشوار لسه بادئ. أول الدروس هتظهر هنا.',

    'set.title': 'الإعدادات', 'set.name': 'اسمك', 'set.partner': 'اسم شريكك', 'set.lang': 'لغة الشرح',
    'set.goal': 'الهدف اليومي', 'set.min': '{n} دقيقة', 'set.move': 'شهر الوصول لأوديني', 'set.audio': 'الصوت الإيطالي',
    'set.rate': 'سرعة الصوت', 'set.rateSlow': 'بطيئة', 'set.rateNormal': 'عادية', 'set.autoplay': 'شغّلي الحوارات أوتوماتيك',
    'set.test': 'جرّبي الصوت', 'set.data': 'بياناتك', 'set.export': 'صدّري نسخة احتياطية', 'set.import': 'استوردي نسخة احتياطية',
    'set.reset': 'امسحي كل حاجة', 'set.resetConfirm': 'تمسحي كل تقدّمك على الجهاز ده؟ (صدّري نسخة الأول.)',
    'set.saved': 'اتحفظ', 'set.imported': 'النسخة اتستوردت!', 'set.importError': 'الملف ده مش نسخة احتياطية صحيحة.',
    'set.storage': 'تقدّمك متسجّل على الجهاز ده.', 'set.about': 'عن الأبلكيشن',
    'audio.ok': 'صوت إيطالي: {v}', 'audio.none': 'مفيش صوت إيطالي على الجهاز ده. تمارين السمع هتتحول لقراية. (على أندرويد أو آيفون نزّلي الصوت الإيطالي من إعدادات تحويل النص لكلام.)', 'audio.checking': 'بندوّر على صوت إيطالي…',

    'ob.welcome': 'Benvenuta!', 'ob.welcomeText': 'كمان سنة تقريباً حياة جديدة هتبدأ في أوديني. يلا نجهّز لها سوا، كام دقيقة كل يوم.',
    'ob.lang': 'عايزة الشرح بأنهي لغة؟', 'ob.name': 'اسمك إيه؟', 'ob.namePh': 'اسمك',
    'ob.nameHint': 'هنستعمله في الحوارات: «Piacere, sono …»', 'ob.partner': 'واسم شريكك؟',
    'ob.move': 'هتوصلي أوديني إمتى؟', 'ob.moveHint': 'الـ١٢ مرحلة هيتوزعوا لحد التاريخ ده. تقدري تغيّريه بعدين.',
    'ob.goal': 'قد إيه كل يوم؟', 'ob.goalHint': 'اختاري إيقاع مريح. ١٠ دقايق كل يوم أحسن من ساعة مرة واحدة.',
    'ob.goal10': 'على رواقة', 'ob.goal15': 'منتظم', 'ob.goal20': 'متحمّسة',
    'ob.audio': 'اسمعي أول جملة', 'ob.audioBtn': 'اسمعي «Ciao! Benvenuta a Udine!»',
    'ob.ready': 'كله جاهز!', 'ob.readyText': 'أول خطوة: أصوات الإيطالي. حوالي ٨ دقايق.',
    'ob.go': 'ابدأي أول درس', 'ob.step': 'خطوة {a} من {b}', 'ob.skip': 'تخطّي',
    'ob.privacy': 'كل حاجة فاضلة على جهازك. المشاركة مع شريكك مقفولة، وتقدري تفتحيها وقت ما تحبي.',

    'err.save': 'خلي بالك: التقدّم مش بيتحفظ (تخزين المتصفح مقفول أو مليان). صدّري نسخة احتياطية من الإعدادات.',
    'err.generic': 'حصلت مشكلة. اعملي ريفريش للصفحة — تقدّمك محفوظ.',
    'err.notFound': 'الصفحة دي مش موجودة.', 'offline': 'مفيش نت — الأبلكيشن شغال برضه.',
    'install': 'نزّلي الأبلكيشن', 'installHint': 'ضيفي «{a}» على الشاشة الرئيسية.',
  },
};

let current = 'fr';
export const setLang = (l) => { current = S[l] ? l : 'fr'; };
export const getLang = () => current;

export function t(key, vars = {}, lang = current) {
  let v = S[lang]?.[key] ?? S.fr[key] ?? key;
  if (typeof v === 'string') {
    for (const [k, val] of Object.entries(vars)) v = v.replaceAll(`{${k}}`, String(val));
  }
  return v;
}

const nf = { fr: new Intl.NumberFormat('fr-FR'), ar: new Intl.NumberFormat('ar-EG') };
export const num = (n, lang = current) => nf[lang]?.format(n) ?? String(n);

export function fmtMonth(ym, lang = current) {
  const [y, m] = String(ym).split('-').map(Number);
  if (!y) return '';
  return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-EG' : 'fr-FR', { month: 'long', year: 'numeric' }).format(new Date(y, m - 1, 1));
}
export function fmtDate(key, lang = current, opts = { day: 'numeric', month: 'long' }) {
  const [y, m, d] = String(key).split('-').map(Number);
  if (!y) return '';
  return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-EG' : 'fr-FR', opts).format(new Date(y, m - 1, d || 1));
}
