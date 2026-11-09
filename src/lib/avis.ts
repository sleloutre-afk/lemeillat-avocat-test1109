// Avis Google mis en avant sur la home (sélection de 8 avis sur 17, tous 5/5)
export const GOOGLE = {
  note: 5,
  nombre: 17,
  url: 'https://www.google.com/search?num=10&sca_esv=120584e00eec63ee&rlz=1C5CHFA_enFR1032FR1035&sxsrf=AKL5yDjgRePnu4G-kquOrQShKGqBJOFZJQ:1794231403184&q=le+meillat+avicat&si=AE1YtOqiKPb2pdLXAi8quZ9vbH4aVq_aX8-3H9iFBLpRNK95c0777FyF9MlF9JfH9syxjrSk7fckSd7wlB-sOzTtZ4AL8SB5xAmQIFvBoyBahHDz9n-5mdc%3D&uds=AE2AFgaDNcEbMjNEyfMKBLP7bk3Ge56jSFAMnDUfEzO-DZN4xROyThnSWTGh_cuNwLmOFhldwLRUsCJU9ss5j7uQ19EyDGIA5nbi7eOdrqyKgqryIPwMJ6E&sa=X&ved=2ahUKEwiEr7nrgPuXAxWdTaQEHZfXLLQQ3PALegQIHBAF&biw=1470&bih=732&dpr=2#sv=CAESzQEKuQEStgEKd0FERGJXZWIwTl9tY3VtbmVKUC0xRnNGZ2ZXMGtiQ2o3Z096aDVKT3ZBbGJfRVNCZk9tY2ZoTmxhUWhtZ3dXQnRDczVLVmxncHRBLXpYUjEzNUpoZkVSTUpLWlF4Rll6aWNzSHJpT25GSDFaVF9uVTFQRUtPZ0FVEhdBdEh4YXNHOUpzbWhrZFVQNl8yNmdRTRoiQUhOMEU3RUJNb1JoR0kxYld5U0VnbENKZFVFSksxN3BMZxIEODA1MRoBMyoAMAA4AUAAGAAgtfqr8AFKAhAB',
}

export type Avis = { auteur: string; date: string; titre?: string; texte: string }

export const AVIS: Avis[] = [
  {
    auteur: 'Philippe C.',
    date: '2026',
    titre: 'Très grande professionnelle — Avocate de confiance',
    texte: "[…] Elle maîtrise parfaitement les dossiers, s'implique pleinement, suit l'affaire avec rigueur et me tient informé à chaque étape, en m'expliquant clairement les enjeux et les décisions. Sa rémunération est transparente, définie à l'avance, sans aucune surprise, ce qui est particulièrement appréciable dans un dossier long et technique.",
  },
  {
    auteur: 'Béatrice P.',
    date: '2025',
    texte: "Je recommande vivement Maître Alix Le Meillat pour ses compétences et son professionnalisme. Elle se distingue par ses conseils avisés, son accompagnement rigoureux et personnalisé, ainsi que sa capacité à proposer des solutions juridiques adaptées et pertinentes. […] Maître Le Meillat sait établir une relation de confiance avec ses clients, en offrant un soutien précis et rassurant.",
  },
  {
    auteur: 'Elodie L.',
    date: '2025',
    texte: "Nous avons été accompagnés par Maître Le Meillat dans le cadre d'une ouverture de restaurant. Elle est extrêmement professionnelle, toujours disponible et surtout prend le temps d'expliquer chaque étape avec une grande clarté. Nous ne pouvons que la recommander les yeux fermés.",
  },
  {
    auteur: 'Myriam M.',
    date: '2025',
    texte: "Avocate hyper compétente avec une approche humaine de mon dossier. Pugnace, claire et concise, j'apprécie chacun de nos échanges très constructifs et j'apprends énormément avec Me Le Meillat à mes côtés. Je n'hésite pas à lui demander ses conseils sur diverses situations. Avocate passionnée par son métier.",
  },
  {
    auteur: 'Benoît D.',
    date: '2024',
    texte: "Avocate de confiance, très professionnelle, Maître Le Meillat saura vous accompagner en toutes circonstances et prendra toujours le temps d'étudier en profondeur vos questions pour y répondre de manière très exhaustive.",
  },
  {
    auteur: 'Lily L.',
    date: '2021',
    texte: "Très satisfaite du travail de Maître Le Meillat. Elle répond toujours à mes attentes et fait preuve d'un professionnalisme et d'une efficacité hors pair. C'est simple, je passe par elle à chaque fois que j'ai besoin d'un conseil juridique.",
  },
  {
    auteur: 'Constance L.',
    date: '2023',
    texte: "Je vous remercie Maître Le Meillat pour votre gentillesse, votre efficacité, réactivité et patience dans des projets qui n'ont pas été forcément simples à gérer et pour lesquels vous m'avez beaucoup aidée. Je ne manquerai pas de revenir vers vous dès que j'en aurai besoin !",
  },
  {
    auteur: 'Marion C.',
    date: '2023',
    texte: 'Avocate très professionnelle et très réactive. Je recommande.',
  },
]
