/**
 * JOB DONE ? — Official 60 Cards Database with Pedagogical Explanations
 * Source: Job_Done_Regles_Rules.pdf
 * Level 1 (simple): 30 cards (id 1–30, number 1–30)
 * Level 2 (difficile): 30 cards (id 31–60, number 1–30)
 */
(function (global) {
  "use strict";

  const QUESTIONS = [
    // ==========================================
    // NIVEAU 1 — SIMPLE / LEVEL 1 — EASY (1–30)
    // ==========================================
    {
      id: 1,
      number: 1,
      level: "simple",
      question: {
        fr: "Dire bonjour à ses collègues le matin aide à créer une bonne ambiance.",
        en: "Saying hello to your colleagues in the morning helps create a good atmosphere."
      },
      answer: true,
      explanation: {
        fr: "Un simple « bonjour » est une marque de politesse et de reconnaissance. Il met immédiatement les collègues à l'aise et favorise un climat de travail convivial et respectueux.",
        en: "A simple \"hello\" shows politeness and recognition. It immediately puts colleagues at ease and fosters a friendly, respectful work environment."
      }
    },
    {
      id: 2,
      number: 2,
      level: "simple",
      question: {
        fr: "Couper la parole en réunion montre qu'on est motivé.",
        en: "Interrupting someone in a meeting shows you are motivated."
      },
      answer: false,
      explanation: {
        fr: "Couper la parole est perçu comme un manque de respect et d'écoute. Pour montrer sa motivation, il vaut mieux laisser l'autre finir puis partager son idée calmement.",
        en: "Interrupting is perceived as disrespectful and shows poor listening. To show motivation, let others finish speaking and then share your idea calmly."
      }
    },
    {
      id: 3,
      number: 3,
      level: "simple",
      question: {
        fr: "Aider un collègue qui a trop de travail, c'est du travail d'équipe.",
        en: "Helping a colleague who has too much work is teamwork."
      },
      answer: true,
      explanation: {
        fr: "L'entraide renforce la cohésion et permet à toute l'équipe d'atteindre ses objectifs plus efficacement tout en réduisant le stress collectif.",
        en: "Helping each other strengthens team cohesion and helps the whole group reach its goals more effectively while reducing collective stress."
      }
    },
    {
      id: 4,
      number: 4,
      level: "simple",
      question: {
        fr: "Arriver en retard sans prévenir n'est pas grave si on finit son travail.",
        en: "Arriving late without telling anyone is fine if you finish your work."
      },
      answer: false,
      explanation: {
        fr: "Un retard non annoncé perturbe l'organisation de l'équipe et peut inquiéter les collègues. Prévenir dès que possible est une règle essentielle de fiabilité et de respect.",
        en: "Unannounced lateness disrupts team organization and can worry colleagues. Letting people know as soon as possible is essential for reliability and respect."
      }
    },
    {
      id: 5,
      number: 5,
      level: "simple",
      question: {
        fr: "On peut écouter une idée même si on n'est pas d'accord.",
        en: "You can listen to an idea even if you don't agree."
      },
      answer: true,
      explanation: {
        fr: "L'écoute active ne signifie pas être d'accord : elle permet de comprendre le point de vue de l'autre, d'enrichir le débat et de trouver des solutions constructives.",
        en: "Active listening does not mean agreeing: it helps you understand the other person's perspective, enrich the discussion, and find constructive solutions."
      }
    },
    {
      id: 6,
      number: 6,
      level: "simple",
      question: {
        fr: "Crier sur un client énervé est la bonne façon de le calmer.",
        en: "Shouting at an angry customer is the right way to calm them down."
      },
      answer: false,
      explanation: {
        fr: "Crier aggrave le conflit et nuit à l'image de l'entreprise. Rester calme, écouter et parler posément est la meilleure façon de faire redescendre la tension.",
        en: "Shouting escalates the conflict and harms the company's image. Staying calm, listening, and speaking steadily is the best way to defuse tension."
      }
    },
    {
      id: 7,
      number: 7,
      level: "simple",
      question: {
        fr: "Dire « merci » quand on nous aide est une marque de respect.",
        en: "Saying \"thank you\" when someone helps you shows respect."
      },
      answer: true,
      explanation: {
        fr: "Exprimer sa gratitude valorise l'effort de l'autre et encourage la coopération durable au sein de l'équipe.",
        en: "Expressing gratitude values the other person's effort and encourages lasting cooperation within the team."
      }
    },
    {
      id: 8,
      number: 8,
      level: "simple",
      question: {
        fr: "Regarder son téléphone en réunion ne dérange personne.",
        en: "Looking at your phone in a meeting doesn't bother anyone."
      },
      answer: false,
      explanation: {
        fr: "Consulter son téléphone en réunion donne l'impression de ne pas s'intéresser aux propos des autres et perturbe la concentration du groupe.",
        en: "Checking your phone during a meeting signals disinterest in what others are saying and distracts the group."
      }
    },
    {
      id: 9,
      number: 9,
      level: "simple",
      question: {
        fr: "Avouer son erreur à son manager est une bonne attitude.",
        en: "Admitting your mistake to your manager is a good attitude."
      },
      answer: true,
      explanation: {
        fr: "Reconnaître rapidement une erreur montre de l'honnêteté et du professionnalisme. Cela permet surtout de la corriger avant qu'elle ne prenne de l'ampleur.",
        en: "Admitting a mistake quickly shows honesty and professionalism, and most importantly allows it to be fixed before it gets worse."
      }
    },
    {
      id: 10,
      number: 10,
      level: "simple",
      question: {
        fr: "Critiquer un collègue derrière son dos renforce l'esprit d'équipe.",
        en: "Criticizing a colleague behind their back makes the team stronger."
      },
      answer: false,
      explanation: {
        fr: "Les rumeurs et critiques dans le dos détruisent la confiance et créent une ambiance toxique. Un désaccord se règle directement et respectueusement avec la personne concernée.",
        en: "Gossip and behind-the-back criticism destroy trust and create a toxic atmosphere. Disagreements should be addressed directly and respectfully."
      }
    },
    {
      id: 11,
      number: 11,
      level: "simple",
      question: {
        fr: "Demander de l'aide quand on ne comprend pas est un signe de faiblesse.",
        en: "Asking for help when you don't understand is a sign of weakness."
      },
      answer: false,
      explanation: {
        fr: "Demander de l'aide est au contraire une preuve de maturité professionnelle : cela évite les erreurs inutiles et permet d'apprendre plus vite.",
        en: "Asking for help is actually a sign of professional maturity: it prevents avoidable mistakes and helps you learn faster."
      }
    },
    {
      id: 12,
      number: 12,
      level: "simple",
      question: {
        fr: "Refuser de travailler avec un collègue parce qu'on ne l'aime pas, c'est professionnel.",
        en: "Refusing to work with a colleague because you don't like them is professional."
      },
      answer: false,
      explanation: {
        fr: "Au travail, on n'est pas obligé d'être ami avec tout le monde, mais le professionnalisme implique de savoir collaborer respectueusement avec chaque collègue.",
        en: "At work, you don't have to be friends with everyone, but professionalism means collaborating respectfully with every colleague."
      }
    },
    {
      id: 13,
      number: 13,
      level: "simple",
      question: {
        fr: "Rester calme face à un problème aide à mieux le résoudre.",
        en: "Staying calm when there is a problem helps you solve it."
      },
      answer: true,
      explanation: {
        fr: "Garder son sang-froid permet de réfléchir clairement, d'analyser la situation objectivement et de trouver des solutions efficaces sans paniquer.",
        en: "Keeping your cool helps you think clearly, analyze the situation objectively, and find effective solutions without panicking."
      }
    },
    {
      id: 14,
      number: 14,
      level: "simple",
      question: {
        fr: "Prendre le mérite du travail d'un collègue est normal si c'est nous qui le présentons.",
        en: "Taking credit for a colleague's work is normal if you are the one presenting it."
      },
      answer: false,
      explanation: {
        fr: "S'approprier le travail d'autrui est injuste et brise la confiance. Citer et valoriser la contribution de ses collègues renforce au contraire sa propre crédibilité.",
        en: "Taking credit for someone else's work is unfair and breaks trust. Acknowledging colleagues' contributions actually strengthens your own credibility."
      }
    },
    {
      id: 15,
      number: 15,
      level: "simple",
      question: {
        fr: "Féliciter un collègue pour son bon travail le motive.",
        en: "Congratulating a colleague on their good work motivates them."
      },
      answer: true,
      explanation: {
        fr: "La reconnaissance positive booste la motivation, la confiance en soi et l'engagement de toute l'équipe.",
        en: "Positive recognition boosts motivation, self-confidence, and engagement across the whole team."
      }
    },
    {
      id: 16,
      number: 16,
      level: "simple",
      question: {
        fr: "Sourire à un client fait partie de l'accueil.",
        en: "Smiling at a customer is part of welcoming them."
      },
      answer: true,
      explanation: {
        fr: "Le sourire crée immédiatement une première impression chaleureuse et met le client en confiance dès son arrivée.",
        en: "A smile immediately creates a warm first impression and makes the customer feel welcome and at ease."
      }
    },
    {
      id: 17,
      number: 17,
      level: "simple",
      question: {
        fr: "Mettre des smileys partout dans un e-mail professionnel est toujours adapté.",
        en: "Putting emojis everywhere in a work email is always OK."
      },
      answer: false,
      explanation: {
        fr: "Trop de smileys peuvent nuire au sérieux d'un message professionnel, surtout avec des clients ou des supérieurs. Il faut adapter son ton au destinataire.",
        en: "Too many emojis can undermine the professionalism of an email, especially with clients or managers. Always adapt your tone to the recipient."
      }
    },
    {
      id: 18,
      number: 18,
      level: "simple",
      question: {
        fr: "Ranger son poste de travail en partant montre du respect pour les autres.",
        en: "Tidying your workspace before you leave shows respect for others."
      },
      answer: true,
      explanation: {
        fr: "Laisser un espace propre et ordonné facilite le travail de l'équipe suivante, du personnel d'entretien et maintient un environnement agréable pour tous.",
        en: "Leaving a clean, tidy workspace makes life easier for the next shift and cleaning staff, and keeps the environment pleasant for everyone."
      }
    },
    {
      id: 19,
      number: 19,
      level: "simple",
      question: {
        fr: "Être à l'heure en réunion montre qu'on respecte le temps des autres.",
        en: "Being on time for a meeting shows you respect other people's time."
      },
      answer: true,
      explanation: {
        fr: "La ponctualité évite de faire attendre les participants et permet de démarrer et terminer la réunion efficacement.",
        en: "Punctuality avoids keeping participants waiting and helps the meeting start and finish efficiently."
      }
    },
    {
      id: 20,
      number: 20,
      level: "simple",
      question: {
        fr: "Parler fort au téléphone dans un open space ne gêne personne.",
        en: "Talking loudly on the phone in an open space doesn't bother anyone."
      },
      answer: false,
      explanation: {
        fr: "Dans un espace partagé, le bruit nuit à la concentration des collègues. Il est préférable de baisser la voix ou de s'isoler pour les appels.",
        en: "In a shared workspace, loud calls disrupt colleagues' concentration. It is better to lower your voice or step into a quiet area."
      }
    },
    {
      id: 21,
      number: 21,
      level: "simple",
      question: {
        fr: "Dire « je ne sais pas » à un client est interdit.",
        en: "Saying \"I don't know\" to a customer is forbidden."
      },
      answer: false,
      explanation: {
        fr: "Il vaut mieux dire honnêtement « je ne sais pas, mais je vais me renseigner pour vous » plutôt que d'inventer une mauvaise information.",
        en: "It is much better to honestly say \"I don't know, but I will find out for you\" than to guess or give wrong information."
      }
    },
    {
      id: 22,
      number: 22,
      level: "simple",
      question: {
        fr: "Écouter un client jusqu'au bout avant de répondre est une bonne pratique.",
        en: "Listening to a customer until they finish before you answer is good practice."
      },
      answer: true,
      explanation: {
        fr: "Laisser le client s'exprimer entièrement permet de bien comprendre son besoin réel et lui montre qu'on le prend au sérieux.",
        en: "Letting the customer finish speaking helps you understand their true need and shows them they are being taken seriously."
      }
    },
    {
      id: 23,
      number: 23,
      level: "simple",
      question: {
        fr: "Laisser la cuisine commune sale n'est pas notre problème.",
        en: "Leaving the shared kitchen dirty is not your problem."
      },
      answer: false,
      explanation: {
        fr: "Les espaces communs appartiennent à tous. Nettoyer après son passage est un geste élémentaire de savoir-vivre et de respect collectif.",
        en: "Shared spaces belong to everyone. Cleaning up after yourself is a basic gesture of courtesy and collective respect."
      }
    },
    {
      id: 24,
      number: 24,
      level: "simple",
      question: {
        fr: "Remercier un client pour sa visite fait partie du service.",
        en: "Thanking a customer for their visit is part of the service."
      },
      answer: true,
      explanation: {
        fr: "Remercier le client laisse une dernière impression positive, renforce sa satisfaction et lui donne envie de revenir.",
        en: "Thanking the customer leaves a positive final impression, boosts satisfaction, and encourages them to return."
      }
    },
    {
      id: 25,
      number: 25,
      level: "simple",
      question: {
        fr: "Se présenter aux nouveaux collègues aide à bien les accueillir.",
        en: "Introducing yourself to new colleagues helps them feel welcome."
      },
      answer: true,
      explanation: {
        fr: "Aller vers un nouvel arrivant brise la glace, réduit son appréhension et accélère son intégration dans l'équipe.",
        en: "Reaching out to a newcomer breaks the ice, eases their nerves, and speeds up their integration into the team."
      }
    },
    {
      id: 26,
      number: 26,
      level: "simple",
      question: {
        fr: "Ignorer le message d'un collègue pendant plusieurs jours est sans conséquence.",
        en: "Ignoring a colleague's message for several days has no consequences."
      },
      answer: false,
      explanation: {
        fr: "Ne pas répondre peut bloquer le travail d'un collègue et créer de la frustration. Même si l'on est occupé, un court accusé de réception suffit.",
        en: "Not replying can block a colleague's work and create frustration. Even when busy, a quick acknowledgment makes a big difference."
      }
    },
    {
      id: 27,
      number: 27,
      level: "simple",
      question: {
        fr: "Partager une information utile avec son équipe est une bonne attitude.",
        en: "Sharing useful information with your team is a good attitude."
      },
      answer: true,
      explanation: {
        fr: "La circulation de l'information évite les doublons, prévient les erreurs et permet à chacun de travailler efficacement.",
        en: "Sharing information prevents duplicate work, avoids mistakes, and helps everyone perform effectively."
      }
    },
    {
      id: 28,
      number: 28,
      level: "simple",
      question: {
        fr: "Se moquer de l'accent d'un collègue, c'est juste de l'humour.",
        en: "Making fun of a colleague's accent is just a joke."
      },
      answer: false,
      explanation: {
        fr: "Se moquer de l'accent ou des origines d'un collègue est blessant et discriminatoire. L'humour au travail ne doit jamais rabaisser quelqu'un.",
        en: "Mocking a colleague's accent or background is hurtful and discriminatory. Workplace humor should never put anyone down."
      }
    },
    {
      id: 29,
      number: 29,
      level: "simple",
      question: {
        fr: "Respecter les horaires de pause fait partie du travail d'équipe.",
        en: "Respecting break times is part of teamwork."
      },
      answer: true,
      explanation: {
        fr: "Respecter les temps de pause permet aux autres de prendre la leur à temps et assure la continuité du service sans surcharger les collègues.",
        en: "Respecting break schedules allows others to take theirs on time and keeps operations running smoothly without overloading teammates."
      }
    },
    {
      id: 30,
      number: 30,
      level: "simple",
      question: {
        fr: "Faire une remarque devant tout le monde est la meilleure façon de corriger quelqu'un.",
        en: "Correcting someone in front of everyone is the best way to do it."
      },
      answer: false,
      explanation: {
        fr: "Corriger quelqu'un en public peut l'humilier et le braquer. Un retour constructif se fait toujours en privé, avec bienveillance.",
        en: "Correcting someone in public can embarrass them and make them defensive. Constructive feedback should always be given privately and kindly."
      }
    },

    // ==============================================
    // NIVEAU 2 — DIFFICILE / LEVEL 2 — HARD (1–30)
    // ==============================================
    {
      id: 31,
      number: 1,
      level: "difficile",
      question: {
        fr: "Dire non à une nouvelle tâche quand on est débordé peut être une bonne attitude.",
        en: "Saying no to a new task when you have too much work can be a good attitude."
      },
      answer: true,
      explanation: {
        fr: "Savoir dire non poliment (en proposant une autre date ou en priorisant avec son manager) protège la qualité du travail et évite l'épuisement.",
        en: "Politely saying no (while suggesting another deadline or reprioritizing) protects work quality and prevents burnout."
      }
    },
    {
      id: 32,
      number: 2,
      level: "difficile",
      question: {
        fr: "Dire toujours oui à tout montre qu'on est un bon employé.",
        en: "Always saying yes to everything shows you are a good employee."
      },
      answer: false,
      explanation: {
        fr: "Accepter trop de tâches mène à des retards, des erreurs et du stress. Un bon professionnel sait évaluer sa capacité réelle et communiquer ses limites.",
        en: "Accepting too much leads to missed deadlines, mistakes, and stress. A good professional knows their capacity and communicates realistic limits."
      }
    },
    {
      id: 33,
      number: 3,
      level: "difficile",
      question: {
        fr: "On peut donner un avis honnête à un collègue avec des mots gentils.",
        en: "You can give a colleague your honest opinion with kind words."
      },
      answer: true,
      explanation: {
        fr: "La franchise et la bienveillance sont parfaitement compatibles : on peut être honnête sur les faits tout en restant respectueux envers la personne.",
        en: "Honesty and kindness go hand in hand: you can be truthful about the facts while remaining respectful toward the person."
      }
    },
    {
      id: 34,
      number: 4,
      level: "difficile",
      question: {
        fr: "Si on voit une erreur dans le travail de l'équipe, mieux vaut ne rien dire pour éviter un conflit.",
        en: "If you see a mistake in the team's work, it's better to say nothing to avoid conflict."
      },
      answer: false,
      explanation: {
        fr: "Taire une erreur expose toute l'équipe à des conséquences plus graves. La signaler calmement et de façon constructive aide tout le monde à réussir.",
        en: "Hiding a mistake exposes the whole team to bigger problems. Pointing it out calmly and constructively helps everyone succeed."
      }
    },
    {
      id: 35,
      number: 5,
      level: "difficile",
      question: {
        fr: "Une blague sur un collègue devant toute l'équipe est sans risque si tout le monde rit.",
        en: "A joke about a colleague in front of the team is fine if everyone laughs."
      },
      answer: false,
      explanation: {
        fr: "Même si le groupe rit, la personne visée peut se sentir gênée ou blessée sans oser le dire. Il faut éviter l'humour aux dépens d'un collègue.",
        en: "Even if everyone laughs, the targeted person may feel embarrassed or hurt without daring to speak up. Avoid humor at a colleague's expense."
      }
    },
    {
      id: 36,
      number: 6,
      level: "difficile",
      question: {
        fr: "Faire une courte pause quand on est très stressé peut améliorer son travail.",
        en: "Taking a short break when you are very stressed can improve your work."
      },
      answer: true,
      explanation: {
        fr: "Prendre quelques minutes pour respirer et prendre du recul réduit les erreurs, recharge la concentration et améliore la prise de décision.",
        en: "Taking a few minutes to breathe and step back reduces mistakes, restores focus, and improves decision-making."
      }
    },
    {
      id: 37,
      number: 7,
      level: "difficile",
      question: {
        fr: "Garder une information importante pour soi, pour être indispensable, est une bonne stratégie.",
        en: "Keeping important information to yourself, to be the only one who knows, is a good strategy."
      },
      answer: false,
      explanation: {
        fr: "La rétention d'information freine l'équipe et nuit à la confiance. Partager son savoir démontre au contraire un véritable esprit d'équipe et du leadership.",
        en: "Hoarding information slows the team down and erodes trust. Sharing knowledge shows genuine teamwork and leadership."
      }
    },
    {
      id: 38,
      number: 8,
      level: "difficile",
      question: {
        fr: "Poser des questions à un nouveau collègue aide à créer du lien.",
        en: "Asking a new colleague questions helps build a connection."
      },
      answer: true,
      explanation: {
        fr: "S'intéresser sincèrement à un nouveau collègue (son parcours, ses besoins) facilite la communication et crée rapidement un climat de confiance.",
        en: "Showing genuine interest in a new colleague's background and needs eases communication and quickly builds trust."
      }
    },
    {
      id: 39,
      number: 9,
      level: "difficile",
      question: {
        fr: "Promettre une date à un client sans demander à son équipe montre qu'on est réactif.",
        en: "Promising a date to a customer without asking your team shows you are responsive."
      },
      answer: false,
      explanation: {
        fr: "Un délai irréaliste met l'équipe sous pression et risque de décevoir le client. Il faut toujours vérifier la faisabilité avant de s'engager.",
        en: "An unrealistic deadline puts pressure on the team and risks disappointing the customer. Always check feasibility before committing."
      }
    },
    {
      id: 40,
      number: 10,
      level: "difficile",
      question: {
        fr: "On peut dire à son manager qu'on n'est pas d'accord, si on le fait en privé et calmement.",
        en: "You can tell your manager you disagree, if you do it in private and calmly."
      },
      answer: true,
      explanation: {
        fr: "Exprimer un désaccord argumenté, calmement et en privé est constructif et aide le manager à prendre de meilleures décisions.",
        en: "Expressing a well-reasoned disagreement calmly and in private is constructive and helps your manager make better decisions."
      }
    },
    {
      id: 41,
      number: 11,
      level: "difficile",
      question: {
        fr: "Refaire le travail d'un collègue sans lui demander, c'est l'aider.",
        en: "Redoing a colleague's work without asking them is helping them."
      },
      answer: false,
      explanation: {
        fr: "Refaire son travail dans son dos est dévalorisant et ne l'aide pas à progresser. Il vaut mieux en discuter ensemble et proposer son aide.",
        en: "Redoing someone's work behind their back feels undermining and doesn't help them improve. Discuss it openly and offer support instead."
      }
    },
    {
      id: 42,
      number: 12,
      level: "difficile",
      question: {
        fr: "Accepter une critique et demander comment s'améliorer est une force.",
        en: "Accepting criticism and asking how to improve is a strength."
      },
      answer: true,
      explanation: {
        fr: "Accueillir le feedback sans se braquer montre une grande maturité et permet de développer rapidement ses compétences.",
        en: "Receiving feedback without getting defensive shows maturity and helps you grow your skills quickly."
      }
    },
    {
      id: 43,
      number: 13,
      level: "difficile",
      question: {
        fr: "Être poli mais ne jamais donner son avis en réunion est la meilleure attitude.",
        en: "Being polite but never giving your opinion in meetings is the best attitude."
      },
      answer: false,
      explanation: {
        fr: "Une réunion sert à partager des points de vue. Participer activement et respectueusement apporte de la valeur au groupe.",
        en: "Meetings are meant for sharing perspectives. Participating actively and respectfully adds value to the team."
      }
    },
    {
      id: 44,
      number: 14,
      level: "difficile",
      question: {
        fr: "Prévenir son équipe qu'on ne finira pas à temps vaut mieux que se taire.",
        en: "Telling your team you won't finish on time is better than saying nothing."
      },
      answer: true,
      explanation: {
        fr: "Alerter tôt permet à l'équipe de s'organiser, d'ajuster les priorités ou de trouver du renfort avant qu'il ne soit trop tard.",
        en: "Speaking up early gives the team time to reorganize, adjust priorities, or provide backup before it's too late."
      }
    },
    {
      id: 45,
      number: 15,
      level: "difficile",
      question: {
        fr: "Écrire en MAJUSCULES à un collègue est une bonne façon d'avoir une réponse rapide.",
        en: "Writing in CAPITAL LETTERS to a colleague is a good way to get a quick answer."
      },
      answer: false,
      explanation: {
        fr: "À l'écrit, les MAJUSCULES sont perçues comme des cris et créent de la tension. Mieux vaut formuler une demande claire et polie en précisant l'échéance.",
        en: "In written messages, CAPITAL LETTERS feel like shouting and create tension. State your request clearly and politely with a deadline instead."
      }
    },
    {
      id: 46,
      number: 16,
      level: "difficile",
      question: {
        fr: "Un e-mail envoyé à 23 h oblige le collègue à répondre le soir même.",
        en: "An email sent at 11 pm means your colleague must answer that same night."
      },
      answer: false,
      explanation: {
        fr: "Le droit à la déconnexion protège le temps de repos. Sauf urgence exceptionnelle prévue, un e-mail tardif peut attendre le lendemain matin.",
        en: "The right to disconnect protects rest time. Unless there is an agreed emergency, a late-night email can wait until the next morning."
      }
    },
    {
      id: 47,
      number: 17,
      level: "difficile",
      question: {
        fr: "Reformuler ce que dit un client montre qu'on l'a bien écouté.",
        en: "Repeating what a customer said in your own words shows you listened."
      },
      answer: true,
      explanation: {
        fr: "La reformulation valide que l'on a bien compris la demande, évite les malentendus et rassure le client sur notre attention.",
        en: "Paraphrasing confirms you understood the request, prevents misunderstandings, and reassures the customer that you are paying attention."
      }
    },
    {
      id: 48,
      number: 18,
      level: "difficile",
      question: {
        fr: "Quand un client se plaint, il faut d'abord lui prouver qu'il a tort.",
        en: "When a customer complains, you must first prove them wrong."
      },
      answer: false,
      explanation: {
        fr: "Chercher à prouver qu'il a tort braque le client. Il faut d'abord l'écouter avec empathie puis chercher ensemble une solution.",
        en: "Trying to prove them wrong makes the customer defensive. Listen with empathy first, then focus on finding a solution together."
      }
    },
    {
      id: 49,
      number: 19,
      level: "difficile",
      question: {
        fr: "Demander un retour à son manager est utile même quand tout va bien.",
        en: "Asking your manager for feedback is useful even when everything is going well."
      },
      answer: true,
      explanation: {
        fr: "Le feedback régulier permet d'identifier ses points forts, de confirmer qu'on est sur la bonne voie et de progresser en continu.",
        en: "Regular feedback helps identify your strengths, confirms you are on the right track, and supports continuous growth."
      }
    },
    {
      id: 50,
      number: 20,
      level: "difficile",
      question: {
        fr: "Ne jamais s'excuser auprès d'un client évite de reconnaître une faute.",
        en: "Never apologizing to a customer is a good way to avoid admitting a mistake."
      },
      answer: false,
      explanation: {
        fr: "Des excuses sincères apaisent la situation, montrent du respect et renforcent la confiance du client bien plus qu'un déni.",
        en: "A sincere apology calms the situation, shows respect, and builds far more customer trust than denial."
      }
    },
    {
      id: 51,
      number: 21,
      level: "difficile",
      question: {
        fr: "Le ton d'un message écrit peut être mal compris, même avec des mots polis.",
        en: "The tone of a written message can be misunderstood, even with polite words."
      },
      answer: true,
      explanation: {
        fr: "Sans la voix ni les expressions du visage, un message court peut paraître sec ou froid. En cas de sujet sensible, mieux vaut privilégier l'oral.",
        en: "Without voice tone or facial expressions, a brief message can seem cold or abrupt. For sensitive topics, speaking directly is better."
      }
    },
    {
      id: 52,
      number: 22,
      level: "difficile",
      question: {
        fr: "Dans un conflit entre deux collègues, il vaut mieux choisir un camp rapidement.",
        en: "In a conflict between two colleagues, it's better to pick a side quickly."
      },
      answer: false,
      explanation: {
        fr: "Prendre parti amplifie le conflit et divise l'équipe. Rester neutre et encourager le dialogue entre les deux personnes est beaucoup plus sain.",
        en: "Taking sides escalates the conflict and divides the team. Staying neutral and encouraging open dialogue is much healthier."
      }
    },
    {
      id: 53,
      number: 23,
      level: "difficile",
      question: {
        fr: "Poser ses limites (horaires, charge de travail) fait partie d'une bonne communication.",
        en: "Setting your limits (hours, workload) is part of good communication."
      },
      answer: true,
      explanation: {
        fr: "Exprimer clairement ses disponibilités et sa charge de travail évite les malentendus, protège son équilibre et garantit un travail fiable.",
        en: "Clearly communicating your availability and workload prevents misunderstandings, protects work-life balance, and ensures reliable results."
      }
    },
    {
      id: 54,
      number: 24,
      level: "difficile",
      question: {
        fr: "Tutoyer tous les clients montre qu'on est chaleureux.",
        en: "Speaking very informally to every customer shows you are friendly."
      },
      answer: false,
      explanation: {
        fr: "Certains clients peuvent trouver le tutoiement familier ou irrespectueux. Il faut s'adapter à la culture de l'entreprise et au profil du client.",
        en: "Some customers may find overly informal language disrespectful. Always adapt to your company's culture and the customer's preferences."
      }
    },
    {
      id: 55,
      number: 25,
      level: "difficile",
      question: {
        fr: "On peut ne pas aimer un collègue et quand même bien travailler avec lui.",
        en: "You can dislike a colleague and still work well with them."
      },
      answer: true,
      explanation: {
        fr: "Le professionnalisme repose sur le respect mutuel et l'objectif commun, pas sur les affinités personnelles.",
        en: "Professionalism is built on mutual respect and shared goals, not personal friendships."
      }
    },
    {
      id: 56,
      number: 26,
      level: "difficile",
      question: {
        fr: "Répondre « ce n'est pas mon travail » à un client est une réponse professionnelle.",
        en: "Telling a customer \"it's not my job\" is a professional answer."
      },
      answer: false,
      explanation: {
        fr: "Cette formule donne une image négative. Il vaut mieux orienter le client vers la bonne personne ou le bon service avec courtoisie.",
        en: "That phrase creates a negative impression. Instead, politely guide the customer to the right person or department."
      }
    },
    {
      id: 57,
      number: 27,
      level: "difficile",
      question: {
        fr: "Face à un client, le non-verbal (posture, regard) compte autant que les mots.",
        en: "With a customer, body language (posture, eye contact) matters as much as words."
      },
      answer: true,
      explanation: {
        fr: "Une posture ouverte, un regard attentif et un sourire renforcent la crédibilité du discours et mettent immédiatement le client en confiance.",
        en: "An open posture, attentive eye contact, and a smile reinforce your words and immediately build trust with the customer."
      }
    },
    {
      id: 58,
      number: 28,
      level: "difficile",
      question: {
        fr: "Quand on est nouveau, mieux vaut ne poser aucune question pour paraître compétent.",
        en: "When you are new, it's better to ask no questions so you look competent."
      },
      answer: false,
      explanation: {
        fr: "Poser des questions pertinentes montre de la curiosité, de l'implication et évite des erreurs coûteuses dès le démarrage.",
        en: "Asking thoughtful questions shows curiosity and engagement, and prevents costly early mistakes."
      }
    },
    {
      id: 59,
      number: 29,
      level: "difficile",
      question: {
        fr: "Reconnaître devant l'équipe le travail d'un collègue renforce la cohésion.",
        en: "Praising a colleague's work in front of the team brings the team together."
      },
      answer: true,
      explanation: {
        fr: "Valoriser publiquement une réussite crée une culture positive, encourage l'entraide et motive l'ensemble du groupe.",
        en: "Publicly recognizing a success builds a positive culture, encourages teamwork, and motivates the entire group."
      }
    },
    {
      id: 60,
      number: 30,
      level: "difficile",
      question: {
        fr: "Si une consigne n'est pas claire, mieux vaut deviner que redemander.",
        en: "If an instruction is not clear, it's better to guess than to ask again."
      },
      answer: false,
      explanation: {
        fr: "Deviner expose à faire fausse route et à perdre du temps. Demander une précision garantit un travail conforme aux attentes.",
        en: "Guessing risks going in the wrong direction and wasting time. Asking for clarification ensures your work meets expectations."
      }
    }
  ];

  global.JobDone = global.JobDone || {};
  global.JobDone.QUESTIONS = QUESTIONS;
})(window);
