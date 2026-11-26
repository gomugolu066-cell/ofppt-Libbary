
export type InstitutionBranch = {
  id: string
  nameAr: string
  nameFr: string
  modules: string[]
}

export type InstitutionSpecialty = {
  id: string
  nameAr: string
  nameFr: string
  branches: InstitutionBranch[]
}

function makeBranch(
  id: string,
  nameAr: string,
  nameFr: string
): InstitutionBranch {
  return {
    id,
    nameAr,
    nameFr,
    modules: [],
  }
}

function makeSpecialty(
  id: string,
  nameAr: string,
  nameFr: string
): InstitutionSpecialty {
  return {
    id,
    nameAr,
    nameFr,
    branches: [
      makeBranch(`${id}_branch`, nameAr, nameFr),
    ],
  }
}

export const institutionCurricula: Record<
  string,
  InstitutionSpecialty[]
> = {
  "cmc-casablanca-settat": [
    makeSpecialty(
      "production-agricole",
      "الإنتاج الفلاحي",
      "Production Agricole"
    ),
    makeSpecialty(
      "menuiserie-art",
      "نجارة الفن",
      "Menuiserie d’art"
    ),
  ],

  "cmc-beni-mellal": [
    makeSpecialty(
      "tapis",
      "صناعة الزرابي",
      "Tapis"
    ),
  ],

  "ista-sidi-moumen": [
    makeSpecialty(
      "electricite-maintenance-industrielle",
      "كهرباء الصيانة الصناعية",
      "Électricité de Maintenance Industrielle"
    ),
    makeSpecialty(
      "fabrication-mecanique",
      "التصنيع الميكانيكي",
      "Fabrication Mécanique"
    ),
    makeSpecialty(
      "reparation-engins-automobile",
      "إصلاح محركات السيارات",
      "Réparation des Engins à Moteur - Option Automobile"
    ),
    makeSpecialty(
      "electromecanique-systemes-automatises",
      "الكهروميكانيك والأنظمة الآلية",
      "Électromécanique des Systèmes Automatisés"
    ),
  ],

  "ista-nador": [
    makeSpecialty(
      "assistant-administratif-comptabilite",
      "مساعد إداري خيار المحاسبة",
      "Assistant Administratif - Option Comptabilité"
    ),
    makeSpecialty(
      "gestion-entreprises-comptabilite-finance",
      "تسيير المقاولات خيار المحاسبة والمالية",
      "Gestion des Entreprises - Option Comptabilité et Finance"
    ),
  ],
}
