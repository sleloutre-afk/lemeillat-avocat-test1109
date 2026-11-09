export type Article = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export const ARTICLES: Article[] = [
  {
    slug: 'sas-sarl-quelle-forme-juridique',
    title: 'SAS ou SARL : quelle forme juridique choisir ?',
    date: '2025',
    excerpt: "SAS et SARL sont les deux formes sociales les plus choisies par les créateurs d'entreprise. Elles se ressemblent mais diffèrent sur des points décisifs : gouvernance, régime social du dirigeant, cession des titres.",
    content: `
<p>Lors de la création d'une société, le choix entre SAS (Société par Actions Simplifiée) et SARL (Société à Responsabilité Limitée) est l'une des premières décisions à prendre. Ces deux formes offrent une responsabilité limitée aux associés, mais leur fonctionnement diffère sur plusieurs points essentiels.</p>

<h2>La gouvernance</h2>
<p>La SAS est caractérisée par sa grande liberté statutaire : les associés organisent librement la gouvernance dans les statuts. Le président est le représentant légal, mais les statuts peuvent créer autant d'organes de direction que nécessaire. La SARL, elle, obéit à un cadre légal plus rigide : le gérant est nommé par les associés et ses pouvoirs sont définis par la loi.</p>

<h2>Le régime social du dirigeant</h2>
<p>C'est souvent le critère décisif. Le président de SAS est assimilé salarié : il relève du régime général de la Sécurité sociale, ce qui implique des cotisations plus élevées mais une protection sociale plus complète. Le gérant majoritaire de SARL est travailleur non salarié (TNS) : ses cotisations sont moins élevées, mais sa protection est moins étendue, notamment en matière de prévoyance et de retraite.</p>

<h2>La cession des titres</h2>
<p>En SAS, les actions sont librement cessibles sauf clause contraire dans les statuts (clause d'agrément, de préemption). En SARL, la cession de parts sociales à un tiers est soumise à l'agrément des associés représentant au moins la moitié des parts — un mécanisme de protection plus contraignant.</p>

<h2>La levée de fonds et l'entrée d'investisseurs</h2>
<p>La SAS est de loin la forme préférée des startups et des projets nécessitant des tours de table : elle permet d'émettre des actions de préférence, des BSA, des BSPCE, des obligations convertibles. La SARL est moins adaptée à ces montages.</p>

<p>Le choix entre les deux formes dépend de votre situation personnelle, de vos ambitions de développement et de votre environnement d'associés. N'hésitez pas à consulter pour analyser votre projet.</p>
`,
  },
  {
    slug: 'cession-fonds-de-commerce-etapes',
    title: 'Cession de fonds de commerce : les étapes clés',
    date: '2025',
    excerpt: "La vente d'un fonds de commerce obéit à un formalisme strict. De la promesse de vente à l'acte définitif, plusieurs étapes sont incontournables pour sécuriser l'opération, côté vendeur comme côté acquéreur.",
    content: `
<p>La cession d'un fonds de commerce est une opération juridiquement encadrée qui nécessite le respect d'un formalisme précis. Une erreur de procédure peut entraîner la nullité de la vente ou engager la responsabilité du cédant.</p>

<h2>La lettre d'intention et la promesse de vente</h2>
<p>Avant l'acte définitif, les parties signent généralement une promesse synallagmatique de cession ou un compromis. Ce document fixe le prix, les conditions suspensives (obtention d'un prêt, accord du bailleur, etc.) et la date de réitération. Il engage les deux parties.</p>

<h2>Les obligations d'information précontractuelle</h2>
<p>Le cédant doit communiquer à l'acquéreur un ensemble de documents : les trois derniers bilans, l'état des contrats en cours, le bail commercial, les éventuels privilèges et nantissements inscrits. Cette information précontractuelle est essentielle pour permettre à l'acquéreur de prendre une décision éclairée.</p>

<h2>La purge du droit de préemption de la commune</h2>
<p>La commune dispose d'un droit de préemption sur les cessions de fonds de commerce situés dans un périmètre de sauvegarde du commerce de proximité. Le vendeur doit en informer la mairie avant la signature de l'acte définitif, par déclaration préalable. La commune dispose d'un délai de deux mois pour exercer ce droit.</p>

<h2>L'acte de cession et la publicité</h2>
<p>L'acte définitif de cession doit mentionner des éléments précis : le prix de vente, l'état des inscriptions de privilèges et nantissements, les chiffres d'affaires des trois dernières années, les résultats d'exploitation. Il doit être enregistré et publié dans un journal d'annonces légales.</p>

<h2>La séquestration du prix</h2>
<p>Le prix de cession est séquestré pendant un délai de purge permettant aux créanciers du vendeur de former opposition. Ce délai est généralement de trois mois. Le séquestre est libéré une fois les oppositions levées ou traitées.</p>

<p>Chaque cession est unique. Pour sécuriser la vôtre, prenez contact dès la phase de négociation.</p>
`,
  },
  {
    slug: 'pacte-associes-pourquoi-des-la-creation',
    title: "Pacte d'associés : pourquoi le rédiger dès la création",
    date: '2026',
    excerpt: "Les statuts ne disent pas tout. Le pacte d'associés organise ce que la loi et les statuts laissent de côté : entrée et sortie des associés, gouvernance, gestion des désaccords. Mieux vaut le signer quand tout va bien.",
    content: `
<p>Au moment de créer une société, les associés sont généralement d'accord sur l'essentiel. C'est précisément le meilleur moment pour fixer, par écrit, les règles qui s'appliqueront le jour où leurs intérêts divergeront.</p>

<h2>Un document confidentiel, complémentaire des statuts</h2>
<p>Contrairement aux statuts, qui sont publiés au registre du commerce et des sociétés, le pacte d'associés reste confidentiel. Il permet d'organiser des sujets sensibles — répartition des pouvoirs, engagements personnels, conditions financières de sortie — sans les rendre accessibles aux tiers.</p>

<h2>Organiser l'entrée et la sortie des associés</h2>
<p>Le pacte prévoit les clauses qui encadrent la circulation des titres : droit de préemption, clause d'agrément, clause de sortie conjointe (tag along) ou d'entraînement (drag along). Il peut également prévoir le sort des titres d'un associé qui quitte l'entreprise, avec des conditions de prix différentes selon les circonstances de son départ.</p>

<h2>Sécuriser la gouvernance</h2>
<p>Certaines décisions importantes — investissements significatifs, recrutement de dirigeants, endettement — peuvent être soumises à une majorité renforcée ou à l'accord préalable de certains associés. Le pacte permet aussi d'organiser l'information des associés minoritaires.</p>

<h2>Anticiper les désaccords</h2>
<p>Une clause de médiation préalable, un mécanisme de sortie en cas de blocage ou une clause de non-concurrence entre associés évitent qu'un différend ne paralyse la société. Prévoir ces mécanismes en amont coûte toujours moins cher que de régler un conflit devant le juge.</p>

<p>Chaque pacte doit être adapté à la répartition du capital, au projet et aux personnalités en présence. Un modèle générique protège rarement là où c'est nécessaire.</p>
`,
  },
]

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}
