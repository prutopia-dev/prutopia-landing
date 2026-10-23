/* ============================================================
   Pr'Utopia — bascule FR / EN de la landing (démos comprises)
   ------------------------------------------------------------
   La page est écrite en français. En anglais, ce script remplace
   chaque texte français par sa traduction, y compris les textes
   que les démos créent après coup (panier, messages, popups).

   ➜ Pour traduire un nouveau texte : ajouter une ligne
     ["texte français exact", "English text"] dans PAIRS.
     Les espaces multiples et retours à la ligne sont ignorés.
   ➜ Un texte coupé par une balise (<em>, <br>…) se traduit
     morceau par morceau.
   ============================================================ */
(function () {
  'use strict';
  var KEY = 'prutopia-lang';

  var PAIRS = [
    /* ── <title> ── */
    ["Pr'Utopia — Conseil numérique", "Pr'Utopia — Digital consulting"],

    /* ── LANDING : nav & hero ── */
    ["Réalisations", "Our work"],
    ["Notre approche", "Our approach"],
    ["Parlons de votre projet ↗", "Start a project ↗"],
    ["Conseil & solutions numériques", "Digital consulting & solutions"],
    ["Le numérique", "Digital,"],
    ["pensé", "designed"],
    ["depuis vos besoins", "around your needs"],
    ["Nous ne vendons pas de technologie. Nous partons de ce que vous vivez, de ce qui vous freine, pour construire les solutions qui vous ressemblent vraiment.",
     "We don't sell technology. We start from what you live day to day and what holds you back, to build solutions that truly fit you."],
    ["Voir nos réalisations", "See our work"],

    /* ── LANDING : services ── */
    ["Ce que nous faisons", "What we do"],
    ["Des solutions construites avec vous, pour vous", "Solutions built with you, for you"],
    ["Conseil & stratégie IA", "AI consulting & strategy"],
    ["Nous identifions ensemble les leviers où l'intelligence artificielle crée une vraie valeur dans votre quotidien professionnel — sans jargon ni promesses creuses.",
     "Together, we pinpoint where artificial intelligence creates real value in your day-to-day work — no jargon, no empty promises."],
    ["Audit IA", "AI audit"],
    ["Stratégie", "Strategy"],
    ["Formation", "Training"],
    ["Applications web & mobile", "Web & mobile apps"],
    ["Du site vitrine à l'application Android, nous concevons des outils numériques pensés pour leurs utilisateurs — légers, robustes, et vraiment utiles.",
     "From showcase websites to Android apps, we design digital tools built around the people who use them — lightweight, robust and genuinely useful."],
    ["Transformation numérique", "Digital transformation"],
    ["Nous accompagnons les équipes dans le changement, à leur rythme. Pas une migration précipitée — une transition qui fait sens et qui dure.",
     "We support teams through change, at their own pace. Not a rushed migration — a transition that makes sense and lasts."],
    ["Conduite du changement", "Change management"],
    ["Outils métiers", "Business tools"],

    /* ── LANDING : approche ── */
    ["Notre manière de travailler", "How we work"],
    ["D'abord", "First"],
    ["écouter", "listen"],
    ["ensuite construire", "then build"],
    ["Chaque projet commence par une conversation, pas par un devis. Nous prenons le temps de comprendre votre contexte, vos contraintes, et ce qui compte vraiment pour vous avant de proposer quoi que ce soit.",
     "Every project starts with a conversation, not a quote. We take the time to understand your context, your constraints and what really matters to you before proposing anything."],
    ["Comprendre votre réalité", "Understand your reality"],
    ["Écoute active, cartographie des besoins, identification des vrais blocages.", "Active listening, needs mapping, pinpointing the real blockers."],
    ["Co-concevoir la solution", "Co-design the solution"],
    ["Prototypes rapides, allers-retours, rien de figé jusqu'à ce que ce soit juste.", "Quick prototypes, back-and-forth, nothing set in stone until it's right."],
    ["Construire & livrer", "Build & deliver"],
    ["Développement itératif, livraisons régulières, zéro surprise en fin de projet.", "Iterative development, regular releases, zero surprises at the end."],
    ["Accompagner dans la durée", "Stay by your side"],
    ["On reste disponibles après la livraison. Votre succès, c'est le nôtre aussi.", "We're still here after launch. Your success is ours too."],
    ["« La meilleure technologie est celle qu'on n'a pas besoin de remarquer, parce qu'elle fait exactement ce qu'on attendait d'elle. »",
     "“The best technology is the kind you don't need to notice, because it does exactly what you expected of it.”"],
    ["— Philosophie Pr'Utopia", "— The Pr'Utopia philosophy"],

    /* ── LANDING : réalisations ── */
    ["Nos réalisations", "Our work"],
    ["Ce que l'on a", "What we've"],
    ["construit", "built"],
    ["ensemble", "together"],
    ["Boulangerie", "Bakery"],
    ["à Votre Porte", "at Your Door"],
    ["App de commande client + dashboard admin pour un service de livraison de viennoiseries à domicile.",
     "Customer ordering app + admin dashboard for a home pastry delivery service."],
    ["App web", "Web app"],
    ["Voir la démo", "View the demo"],
    ["Club", "Martial Arts"],
    ["Arts Martiaux", "Club"],
    ["Site vitrine pour un dojo — disciplines, planning filtrable, équipe, galerie et pré-inscription en ligne.",
     "Showcase website for a dojo — disciplines, filterable schedule, team, gallery and online pre-registration."],
    ["Site vitrine", "Showcase site"],
    ["Planning", "Scheduling"],
    ["Votre projet", "Your project"],
    ["La prochaine réalisation pourrait être la vôtre.", "The next one could be yours."],

    /* ── LANDING : contact & footer ── */
    ["Votre projet mérite", "Your project deserves"],
    ["une vraie conversation", "a real conversation"],
    ["Laissez-nous une brève description de votre projet, vos coordonnées et nous vous répondons en personne.",
     "Send us a short description of your project and your contact details — we'll get back to you personally."],
    ["06 58 33 97 51", "+33 6 58 33 97 51"],
    ["© 2025 Pr'Utopia — Tous droits réservés", "© 2025 Pr'Utopia — All rights reserved"],

    /* ── Cadre des démos ── */
    ["Démo interactive", "Interactive demo"],
    ["👁 Démo interactive", "👁 Interactive demo"],
    ["👁 Démo interactive — Contenu anonymisé 👁", "👁 Interactive demo — Anonymized content 👁"],

    /* ── DÉMO BOULANGERIE ── */
    ["Vue Client active", "Customer view active"],
    ["Vue Admin active", "Admin view active"],
    ["Basculer vue Admin →", "Switch to Admin view →"],
    ["Basculer vue Client →", "Switch to Customer view →"],
    ["Votre Boulangerie", "Your Bakery"],
    ["Choisissez votre profil", "Choose your profile"],
    ["Client", "Customer"],
    ["Passer une commande", "Place an order"],
    ["Gérer les commandes", "Manage orders"],
    ["Entrer →", "Enter →"],
    ["Service de livraison 🚲", "Delivery service 🚲"],
    ["8h30 – 10h", "8:30 – 10:00"],
    ["🔐 Admin · Retour", "🔐 Admin · Back"],
    ["🥐 Commander", "🥐 Order"],
    ["📋 Récap", "📋 Summary"],
    ["⚙️ Produits", "⚙️ Products"],
    ["🚫 Indispos", "🚫 Unavailable"],
    ["Commander", "Order"],
    ["Récap", "Summary"],
    ["Indispos", "Unavailable"],
    ["Votre Boulangerie à Votre Porte", "Your Bakery at Your Door"],
    ["Vos viennoiseries fraîches de la boulangerie locale, livrées directement chez vous chaque matin.",
     "Fresh pastries from your local bakery, delivered straight to your door every morning."],
    ["💶 Espèces à la livraison", "💶 Cash on delivery"],
    ["🚲 2 € de livraison", "🚲 €2 delivery"],
    ["Nos viennoiseries", "Our pastries"],
    ["article(s)", "item(s)"],
    ["🚲 Vos informations de livraison", "🚲 Your delivery details"],
    ["Prénom *", "First name *"],
    ["Nom", "Last name"],
    ["Téléphone *", "Phone *"],
    ["Adresse *", "Address *"],
    ["Créneau *", "Time slot *"],
    ["-- Choisir --", "-- Choose --"],
    ["Note (optionnel)", "Note (optional)"],
    ["Code d'entrée...", "Door code..."],
    ["12 rue des Fleurs", "12 Flower Street"],
    ["📅 Disponible les", "📅 Available on"],
    ["samedis & dimanches", "Saturdays & Sundays"],
    [", et pendant les", ", and during"],
    ["vacances scolaires", "school holidays"],
    [". Livraison entre", ". Delivery between"],
    ["8h30 et 10h", "8:30 and 10:00"],
    ["✉️ Envoyer la commande", "✉️ Send order"],
    ["✅ Commande envoyée ! Loane ou Lloris vous confirmera bientôt.", "✅ Order sent! We'll confirm it shortly."],
    ["Commandes", "Orders"],
    ["CA du jour", "Today's revenue"],
    ["À préparer", "To prepare"],
    ["🛒 Ce qu'il faut aller chercher", "🛒 What to pick up"],
    ["Liste de courses — boulangerie", "Shopping list — bakery"],
    ["Samedi 7 juin 2025 · 3 commandes", "Saturday, June 7, 2025 · 3 orders"],
    ["Produit", "Product"],
    ["Qté", "Qty"],
    ["Montant", "Amount"],
    ["🍫 Chocolatine", "🍫 Pain au chocolat"],
    ["Chocolatine", "Pain au chocolat"],
    ["🍇 Pain aux raisins", "🍇 Raisin swirl"],
    ["Pain aux raisins", "Raisin swirl"],
    ["🥖 Baguette tradition", "🥖 Traditional baguette"],
    ["Baguette tradition", "Traditional baguette"],
    ["Total produits", "Products total"],
    ["Détail par commande", "Order details"],
    ["Samedi 7 juin · 8h30", "Saturday, June 7 · 8:30"],
    ["Samedi 7 juin · 9h00", "Saturday, June 7 · 9:00"],
    ["Samedi 7 juin · 9h30", "Saturday, June 7 · 9:30"],
    ["Produits", "Products"],
    ["Livraison", "Delivery"],
    ["Total espèces", "Cash total"],
    ["Adresse", "Address"],
    ["Téléphone", "Phone"],
    ["Code : 1234", "Code: 1234"],
    ["Catalogue actuel", "Current catalog"],
    ["Gestion des produits disponible dans l'app complète", "Product management available in the full app"],
    ["Jours bloqués", "Blocked days"],
    ["Dimanche 15 juin 2025", "Sunday, June 15, 2025"],
    ["Vacances", "Holidays"],
    ["Samedi 28 juin 2025", "Saturday, June 28, 2025"],
    ["Absent", "Away"],
    ["Bloquer une date", "Block a date"],
    ["Bloquer", "Block"],
    ["Gestion des indisponibilités en temps réel dans l'app complète", "Real-time availability management in the full app"],

    /* ── DÉMO CLUB ARTS MARTIAUX : nav & hero ── */
    ["Valeurs", "Values"],
    ["L'équipe", "The team"],
    ["Le club", "The club"],
    ["Horaires", "Schedule"],
    ["Pré-inscription", "Pre-registration"],
    ["Menu", "Menu"],
    ["Dojo fondé en 1981", "Dojo founded in 1981"],
    ["L'art", "The art"],
    ["de la", "of"],
    ["maîtrise", "mastery"],
    ["Judo, Ju-Jitsu, MMA, self-défense et Taïso sous un même toit. Un dojo où la technique, le respect et le dépassement de soi se transmettent depuis plus de quarante ans.",
     "Judo, Ju-Jitsu, MMA, self-defense and Taïso under one roof. A dojo where technique, respect and pushing your limits have been passed on for more than forty years."],
    ["Pré-inscrivez-vous", "Pre-register"],
    ["Découvrir le club", "Discover the club"],
    ["Self-Défense", "Self-Defense"],
    ["Self-défense", "Self-defense"],

    /* disciplines */
    ["Nos disciplines", "Our disciplines"],
    ["Cinq pratiques,", "Five disciplines,"],
    ["une exigence", "one standard"],
    ["Du tatami à la cage, du renforcement à la self-défense : chaque discipline a sa logique propre. On vous accompagne là où vous êtes, débutant ou compétiteur.",
     "From the mat to the cage, from conditioning to self-defense: each discipline has its own logic. We meet you where you are, beginner or competitor."],
    ["La voie de la souplesse. Projections, déséquilibres et travail au sol dans le respect du code moral du judo. Cours enfants, ados et adultes, de l'initiation à la ceinture noire.",
     "The gentle way. Throws, off-balancing and groundwork, guided by judo's moral code. Classes for kids, teens and adults, from first steps to black belt."],
    ["Dès 4 ans · Compétition · Loisir", "From age 4 · Competition · Recreational"],
    ["Matériel nécessaire", "Required gear"],
    ["L'art martial originel des samouraïs. Atemis, clés et étranglements dans une approche traditionnelle. Une discipline complète qui forge le corps et la vigilance.",
     "The original martial art of the samurai. Strikes, joint locks and chokes in a traditional approach. A complete discipline that builds body and awareness."],
    ["Dès 14 ans · Adultes · Self-contrôle", "From age 14 · Adults · Self-control"],
    ["La synthèse moderne du combat. Pieds-poings, lutte et sol encadrés par des coachs diplômés. Préparation physique intense, sparring progressif et esprit d'équipe.",
     "The modern synthesis of combat. Striking, wrestling and groundwork led by certified coaches. Intense conditioning, progressive sparring and team spirit."],
    ["Dès 14 ans · Tous niveaux · Cage", "From age 14 · All levels · Cage"],
    ["Apprendre à se protéger pour de vrai. Gestes simples et efficaces face aux agressions du quotidien, gestion de la distance et du stress. Aucun prérequis, accessible à toutes et tous.",
     "Learn to protect yourself for real. Simple, effective moves against everyday aggression, managing distance and stress. No prerequisites, open to everyone."],
    ["Dès 14 ans · Adultes · Femmes", "From age 14 · Adults · Women"],
    ["La « préparation du corps » des arts martiaux. Renforcement, gainage, mobilité et cardio pour progresser sur le tatami comme au quotidien. Le complément idéal de toutes les disciplines.",
     "The “body preparation” of martial arts. Strength, core, mobility and cardio to progress on the mat and in everyday life. The ideal complement to every discipline."],
    ["Tous niveaux · Sans opposition · Fitness", "All levels · Non-contact · Fitness"],

    /* valeurs */
    ["Notre état d'esprit", "Our mindset"],
    ["Le code moral,", "The moral code,"],
    ["huit valeurs", "eight values"],
    ["Avant la technique, il y a le code moral du judo. Ses huit valeurs guident le pratiquant sur le tatami comme dans la vie, et dépassent largement le cadre du dojo.",
     "Before technique comes judo's moral code. Its eight values guide students on the mat and in life, far beyond the walls of the dojo."],
    ["Politesse", "Courtesy"],
    ["Le respect d'autrui, sur le tatami comme à la ville. La première chose qu'apprend le pratiquant.", "Respect for others, on the mat and off it. The first thing a student learns."],
    ["Faire ce qui est juste, affronter l'adversaire comme ses propres limites sans reculer devant l'effort.", "Doing what is right, facing your opponent and your own limits without shying away from effort."],
    ["Sincérité", "Sincerity"],
    ["S'exprimer sans déguiser sa pensée. Être honnête avec les autres et avec soi-même.", "Speaking without disguising your thoughts. Being honest with others and with yourself."],
    ["Honneur", "Honor"],
    ["Être fidèle à la parole donnée. Garder une attitude digne dans la victoire comme dans la défaite.", "Keeping your word. Staying dignified in victory and in defeat."],
    ["Modestie", "Modesty"],
    ["Parler de soi-même sans orgueil. Rester humble : on apprend de chaque partenaire, quel que soit son niveau.", "Speaking of yourself without pride. Staying humble: you learn from every partner, whatever their level."],
    ["Du partenaire, du professeur et de soi-même. Sans respect, aucune confiance ne peut naître.", "For your partner, your teacher and yourself. Without respect, no trust can grow."],
    ["Contrôle de soi", "Self-control"],
    ["Savoir se taire lorsque monte la colère. Maîtriser ses gestes, ses paroles et ses émotions.", "Knowing when to stay silent as anger rises. Mastering your actions, your words and your emotions."],
    ["Amitié", "Friendship"],
    ["Le plus pur des sentiments humains. Partager, s'entraider, tisser des liens au sein du dojo.", "The purest of human feelings. Sharing, helping each other, building bonds within the dojo."],

    /* équipe */
    ["L'encadrement", "Our instructors"],
    ["Des professeurs", "Professional,"],
    ["professionnels et diplômés", "certified instructors"],
    ["Nos cours sont assurés par des enseignants professionnels, diplômés d'État et ceintures noires, formés à la pédagogie comme à la compétition. Un encadrement qualifié qui garantit un apprentissage sûr, progressif et adapté à chacun.",
     "Our classes are taught by professional, state-certified black belts, trained in teaching as well as competition. Qualified coaching that ensures safe, progressive learning tailored to each person."],
    ["Professeur diplômé", "Certified instructor"],
    ["Presque quarante ans à transmettre le judo traditionnel et son code moral à plusieurs générations, avec l'exigence et la rigueur d'un enseignant qualifié.",
     "Nearly forty years passing on traditional judo and its moral code to several generations, with the high standards and rigor of a qualified teacher."],
    ["Judo · Ju-Jitsu · MMA · Taïso · Self-défense", "Judo · Ju-Jitsu · MMA · Taïso · Self-defense"],
    ["Professeur diplômé d'État", "State-certified instructor"],
    ["Professeur diplômé, il enseigne les sports de combat et les arts martiaux de manière professionnelle depuis bientôt dix ans, avec un apprentissage progressif et adapté à chacun.",
     "A certified instructor, he has been teaching combat sports and martial arts professionally for almost ten years, with progressive learning tailored to each person."],

    /* histoire & galerie */
    ["Notre histoire, en", "Our story, in"],
    ["images", "pictures"],
    ["Quatre décennies de tatami, de générations et de moments partagés à Club Arts Martiaux.", "Four decades of mats, generations and shared moments at Martial Arts Club."],
    ["Fondée en 1981, Club Arts Martiaux transmet le judo traditionnel et son code moral à des centaines d'élèves, des plus jeunes aux compétiteurs confirmés.",
     "Founded in 1981, Martial Arts Club has passed on traditional judo and its moral code to hundreds of students, from the youngest to seasoned competitors."],
    ["Au fil des saisons, le dojo s'est ouvert au ju-jitsu, au MMA, à la self-défense et au taïso, tout en gardant le même esprit : le respect, l'effort et le plaisir de pratiquer ensemble.",
     "Season after season, the dojo has opened up to ju-jitsu, MMA, self-defense and taïso, while keeping the same spirit: respect, effort and the joy of training together."],
    ["Aujourd'hui, c'est un lieu de vie où familles, enfants et adultes se retrouvent autour des arts martiaux.", "Today, it's a place where families, kids and adults come together around martial arts."],
    ["Année de fondation", "Year founded"],
    ["Années de transmission", "Years of teaching"],
    ["Disciplines enseignées", "Disciplines taught"],
    ["4 ans", "Age 4"],
    ["Âge d'accueil minimum", "Minimum age"],
    ["La galerie", "Gallery"],
    ["Octobre Rose", "Pink October"],
    ["Compétition", "Competition"],
    ["Compétition jeunes", "Youth competition"],
    ["Travail à deux", "Partner work"],
    ["Agrandir la photo", "Enlarge photo"],
    ["Le groupe du club lors d'Octobre Rose", "The club group during Pink October"],
    ["Le groupe du club pour Movember", "The club group for Movember"],
    ["Le groupe MMA en garde", "The MMA group on guard"],
    ["Podium de judo", "Judo podium"],
    ["Podium des plus jeunes", "Youngest competitors' podium"],
    ["Atelier de self-défense", "Self-defense workshop"],
    ["Travail à deux en self-défense", "Partner work in self-defense"],

    /* actualités & événements */
    ["Actualités & événements", "News & events"],
    ["Cours hebdomadaire", "Weekly class"],
    ["Self-défense 100% féminin", "Women-only self-defense"],
    ["Chaque jeudi de 18h15 à 19h15, encadré par Chuck Norris, ouvert dès 14 ans, quel que soit le niveau. Une vraie prise de conscience autour de la sécurité personnelle.",
     "Every Thursday from 6:15 to 7:15 pm, led by Chuck Norris, open from age 14, whatever your level. A real eye-opener on personal safety."],
    ["Lire l'article", "Read the article"],
    ["Janvier 2026", "January 2026"],
    ["Nos athlètes s'illustrent", "Our athletes shine"],
    ["Lors d'un tournoi régional, nos jeunes compétiteurs ont brillé : une médaille d'or, plusieurs médailles d'argent et de bronze, des poussins aux cadets.",
     "At a regional tournament, our young competitors shone: one gold medal and several silver and bronze medals, from under-10s to under-18s."],
    ["Décembre 2025", "December 2025"],
    ["Des médailles à Savenay", "Medals in Savenay"],
    ["Au Tournoi et Challenge Judo Espoir de Savenay, le contingent plesséen repart avec quatre belles médailles, dont l'or décroché par Marius et Yolan.",
     "At the Savenay Judo Espoir Tournament and Challenge, the club's team came home with four fine medals, including gold for Marius and Yolan."],
    ["Voir la coupure de presse", "View the press clipping"],
    ["Coupure de presse", "Press clipping"],
    ["Cours de self-défense 100% féminin", "Women-only self-defense class"],
    ["Podium des jeunes judokas", "Young judokas' podium"],
    ["Podium au Tournoi Judo Espoir de Savenay", "Podium at the Savenay Judo Espoir Tournament"],
    ["Article : self-défense 100% féminin", "Article: women-only self-defense"],
    ["Article : les athlètes s'illustrent en compétition", "Article: our athletes shine in competition"],
    ["Article : des médailles à Savenay", "Article: medals in Savenay"],
    ["Événements à venir", "Upcoming events"],
    ["Tous", "All"],
    ["Sportif", "Sports"],
    ["Août 2027", "August 2027"],
    ["Événement sportif local", "Local sports event"],
    ["À l'hippodrome de Fresnay, du 24 au 27 août 2027.", "At the Fresnay racecourse, August 24–27, 2027."],

    /* planning */
    ["Planning hebdomadaire", "Weekly schedule"],
    ["Trouvez votre", "Find your"],
    ["créneau", "class"],
    ["Saison 2026 – 2027. Les cours d'essai sont gratuits sur réservation, à n'importe quel créneau adapté à votre niveau.",
     "2026 – 2027 season. Trial classes are free with a booking, in any slot that suits your level."],
    ["Toutes disciplines", "All disciplines"],
    ["Faites glisser pour voir toute la semaine →", "Swipe to see the whole week →"],
    ["Lun", "Mon"], ["Mar", "Tue"], ["Mer", "Wed"], ["Jeu", "Thu"], ["Ven", "Fri"], ["Sam", "Sat"],
    ["Judo — Poussins", "Judo — Under-10s"],
    ["Judo — Benjamins & Minimes", "Judo — Under-12s & Under-14s"],
    ["Judo — Minimes et +", "Judo — Under-14s & older"],
    ["Éveil Judo", "Judo for little ones"],
    ["Mini-poussins", "Under-8s"],
    ["Entraînements libres", "Open training"],
    ["Self-défense féminin", "Women's self-defense"],
    ["Module 2h · 1×/mois", "2-hour module · once a month"],

    /* inscription */
    ["Rejoindre le dojo", "Join the dojo"],
    ["Pré-inscription &", "Pre-registration &"],
    ["cours d'essai", "trial class"],
    ["Vous vous pré-inscrivez sur Kalisport", "Pre-register on Kalisport"],
    ["Notre plateforme partenaire pour toutes les démarches d'inscription.", "Our partner platform for every registration step."],
    ["Vous montez sur le tatami", "Step onto the mat"],
    ["Premier cours offert. Gi prêté pour l'essai.", "First class free. A gi is lent for the trial."],
    ["Les pré-inscriptions et inscriptions au club se font désormais exclusivement via notre plateforme partenaire",
     "Pre-registration and registration for the club now go exclusively through our partner platform"],
    [". Vous y retrouverez le formulaire et les tarifs.", ", where you'll find the form and the fees."],
    ["Pré-inscription sur Kalisport", "Pre-register on Kalisport"],
    ["Le paiement de la cotisation peut se faire en ligne via", "Membership fees can be paid online via"],
    ["Payer via HelloAsso", "Pay via HelloAsso"],
    ["Certificat médical obligatoire (pratiquant majeur)", "Medical certificate required (adult members)"],
    ["Le certificat médical de non contre-indication à la pratique sportive est obligatoire chaque saison pour le MMA. Pour le Judo, le Ju-Jitsu et la Self-Défense, il est obligatoire tous les 5 ans, mais une attestation de réponses négatives à l'ensemble du questionnaire médical annuel (QMA) est nécessaire chaque saison. Si votre rendez-vous médical ne peut pas avoir lieu avant la reprise, une décharge de responsabilité — non renouvelable, valable 2 mois — peut être signée en attendant.",
     "A medical certificate confirming you are fit to practice sport is required every season for MMA. For Judo, Ju-Jitsu and Self-Defense, it is required every 5 years, but a signed statement answering “no” to every question of the annual health questionnaire is needed each season. If your medical appointment can't take place before classes resume, a liability waiver — non-renewable, valid for 2 months — can be signed in the meantime."],
    ["Décharge adulte", "Adult waiver"],
    ["Attention", "Important"],
    ["Fermer", "Close"],

    /* popup matériel (généré par le JS de la démo) */
    ["Judogi (kimono blanc)", "Judogi (white uniform)"],
    ["Ceinture correspondant au grade", "Belt matching your grade"],
    ["Gourde", "Water bottle"],
    ["Claquettes", "Flip-flops"],
    ["Pas de bijoux", "No jewelry"],
    ["Ongles des pieds et des mains coupés courts", "Fingernails and toenails cut short"],
    ["Gants mitaines boules (demi-sphère au-dessus des phalanges)", "Padded fingerless gloves (dome over the knuckles)"],
    ["Protège-tibias couvrant les pieds", "Shin guards covering the feet"],
    ["Protège-dents", "Mouthguard"],
    ["Coquille pour les hommes et brassière de sport sans armatures pour les femmes", "Groin guard for men and an underwire-free sports bra for women"],
    ["Short souple sans aucune partie métallique", "Flexible shorts with no metal parts"],
    ["Rashguard (tee-shirt de compression) ou tee-shirt coton", "Rashguard (compression top) or cotton T-shirt"],
    ["Tenue de sport souple (jogging, tee-shirt)", "Comfortable sportswear (joggers, T-shirt)"],
    ["Brassière de sport sans armatures", "Underwire-free sports bra"],

    /* alertes de la démo */
    ["🎯 Démo — ouvre la plateforme d'inscription dans la vraie app", "🎯 Demo — opens the registration platform in the real app"],
    ["🎯 Démo — ouvre la plateforme de paiement dans la vraie app", "🎯 Demo — opens the payment platform in the real app"],
    ["🎯 Démo — télécharge le PDF dans la vraie app", "🎯 Demo — downloads the PDF in the real app"],

    /* pied de page de la démo */
    ["CLUB ARTS MARTIAUX", "MARTIAL ARTS CLUB"],
    ["Logo Club Arts Martiaux", "Martial Arts Club logo"],
    ["Logo Club Arts Martiaux — Judo, Ju-Jitsu, MMA, fondé en 1981", "Martial Arts Club logo — Judo, Ju-Jitsu, MMA, founded in 1981"],
    ["Dojo d'arts martiaux fondé en 1981. Judo, Ju-Jitsu, MMA, Self-Défense et Taïso pour tous les âges, du loisir à la compétition.",
     "Martial arts dojo founded in 1981. Judo, Ju-Jitsu, MMA, Self-Defense and Taïso for all ages, from recreational to competitive."],
    ["Nos valeurs", "Our values"],
    ["Complexe sportif", "Sports complex"],
    ["44000 Ville", "44000 Town"],
    ["© 2026 Club Arts Martiaux — Est. 1981", "© 2026 Martial Arts Club — Est. 1981"],
    ["Mentions légales · Politique de confidentialité", "Legal notice · Privacy policy"],
    ["Site conçu par Pr'Utopia", "Site designed by Pr'Utopia"]
  ];

  /* Textes construits à partir de nombres : prix, horaires */
  function pad(n) { return n.length === 1 ? n : n; }
  var RULES = [
    // 1,15 €  →  €1.15
    [/^(\d+),(\d{2}) €$/, function (m, a, b) { return '€' + a + '.' + b; }],
    // 19h00 – 20h30 · 8h30 · 09h30 – 11h00  →  19:00 – 20:30 …
    [/^(\d{1,2})h(\d{2})?(?:\s*–\s*(\d{1,2})h(\d{2})?)?$/, function (m, h1, m1, h2, m2) {
      var s = pad(h1) + ':' + (m1 || '00');
      if (h2) s += ' – ' + pad(h2) + ':' + (m2 || '00');
      return s;
    }]
  ];

  /* ── moteur ── */
  var norm = function (s) { return String(s).replace(/[’]/g, "'").replace(/\s+/g, ' ').trim(); };
  var DICT = new Map();
  PAIRS.forEach(function (p) { DICT.set(norm(p[0]), p[1]); });

  function toEN(s) {
    var k = norm(s);
    if (!k) return null;
    if (DICT.has(k)) return DICT.get(k);
    for (var i = 0; i < RULES.length; i++) {
      var r = RULES[i];
      if (r[0].test(k)) return k.replace(r[0], r[1]);
    }
    return null;
  }

  var ATTRS = ['placeholder', 'title', 'alt', 'aria-label'];
  var SKIP = 'script,style,svg,textarea,#binary-bg,.lang-switch';
  var SKIP_ATTR = 'script,style,svg,#binary-bg,.lang-switch';   // un textarea garde son contenu mais son placeholder se traduit
  var lang = 'fr';
  var textDone = new Map();   // nœud texte → [original, traduction]
  var attrDone = new Map();   // élément → { attr: [original, traduction] }

  function translateText(n) {
    if (lang !== 'en' || n.nodeType !== 3) return;
    var p = n.parentElement;
    if (!p || p.closest(SKIP)) return;
    var v = n.nodeValue;
    var rec = textDone.get(n);
    if (rec && rec[1] === v) return;            // déjà traduit par nous
    var t = toEN(v);
    if (t == null || t === norm(v)) return;
    var out = v.match(/^\s*/)[0] + t + v.match(/\s*$/)[0];
    textDone.set(n, [v, out]);
    n.nodeValue = out;
  }

  function translateAttr(el, a) {
    if (lang !== 'en' || !el.getAttribute || el.closest(SKIP_ATTR)) return;
    var v = el.getAttribute(a);
    if (!v) return;
    var rec = attrDone.get(el) || {};
    if (rec[a] && rec[a][1] === v) return;
    var t = toEN(v);
    if (t == null || t === norm(v)) return;
    rec[a] = [v, t];
    attrDone.set(el, rec);
    el.setAttribute(a, t);
  }

  function translateTree(root) {
    if (lang !== 'en' || !root) return;
    if (root.nodeType === 3) { translateText(root); return; }
    if (root.nodeType !== 1) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var n, list = [];
    while ((n = w.nextNode())) list.push(n);
    list.forEach(translateText);
    var els = [root].concat(Array.prototype.slice.call(root.querySelectorAll('[' + ATTRS.join('],[') + ']')));
    els.forEach(function (el) { ATTRS.forEach(function (a) { if (el.hasAttribute && el.hasAttribute(a)) translateAttr(el, a); }); });
  }

  function restoreFR() {
    textDone.forEach(function (rec, n) { if (n.nodeValue === rec[1]) n.nodeValue = rec[0]; });
    attrDone.forEach(function (rec, el) {
      Object.keys(rec).forEach(function (a) { if (el.getAttribute(a) === rec[a][1]) el.setAttribute(a, rec[a][0]); });
    });
    textDone.clear(); attrDone.clear();
  }

  var FR_TITLE = document.title;
  function setLang(l, save) {
    lang = l === 'en' ? 'en' : 'fr';
    if (save) { try { localStorage.setItem(KEY, lang); } catch (e) {} }
    document.documentElement.lang = lang;
    if (lang === 'en') { translateTree(document.body); document.title = toEN(FR_TITLE) || FR_TITLE; }
    else { restoreFR(); document.title = FR_TITLE; }
    var btns = document.querySelectorAll('.lang-switch [data-lang]');
    for (var i = 0; i < btns.length; i++) {
      var on = btns[i].getAttribute('data-lang') === lang;
      btns[i].classList.toggle('active', on);
      btns[i].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    document.documentElement.classList.remove('i18n-pending');
  }

  // Textes ajoutés ou modifiés plus tard par les démos
  new MutationObserver(function (muts) {
    if (lang !== 'en') return;
    muts.forEach(function (m) {
      if (m.type === 'childList') m.addedNodes.forEach(translateTree);
      else if (m.type === 'characterData') translateText(m.target);
      else if (m.type === 'attributes') translateAttr(m.target, m.attributeName);
    });
  }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });

  // Les alertes des démos
  var nativeAlert = window.alert;
  window.alert = function (msg) { return nativeAlert.call(window, lang === 'en' ? (toEN(msg) || msg) : msg); };

  // Sélecteur FR / EN
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.lang-switch [data-lang]');
    if (b) setLang(b.getAttribute('data-lang'), true);
  });

  // Langue de départ : ?lang=  →  choix mémorisé  →  langue du navigateur
  var start = null;
  try { start = new URLSearchParams(location.search).get('lang'); } catch (e) {}
  if (start === 'en' || start === 'fr') { try { localStorage.setItem(KEY, start); } catch (e) {} }
  else {
    try { start = localStorage.getItem(KEY); } catch (e) {}
    if (start !== 'en' && start !== 'fr') {
      var nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'fr';
      start = /^fr\b/i.test(nav) ? 'fr' : 'en';
    }
  }
  setLang(start, false);
  window.prutopiaSetLang = function (l) { setLang(l, true); };
})();
