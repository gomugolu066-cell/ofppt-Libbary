export type InstitutionType = 'ISTA' | 'CMC'

export type Institution = {
  id: string
  name: string
  type: InstitutionType
  city: string
  mapsQuery: string
  coursesAvailable: boolean
}

export type InstitutionCity = {
  id: string
  nameAr: string
  nameFr: string
  institutions: Institution[]
}

export type InstitutionRegion = {
  id: string
  nameAr: string
  nameFr: string
  cities: InstitutionCity[]
}

export const institutionRegions: InstitutionRegion[] = [
  {
    id: 'tanger-tetouan-al-hoceima',
    nameAr: 'طنجة تطوان الحسيمة',
    nameFr: 'Tanger-Tétouan-Al Hoceïma',
    cities: [
      {
        id: 'tanger',
        nameAr: 'طنجة',
        nameFr: 'Tanger',
        institutions: [
          {
            id: 'cmc-tanger',
            name: 'Cité des Métiers et des Compétences Tanger-Tétouan-Al Hoceima',
            type: 'CMC',
            city: 'Tanger',
            mapsQuery: 'CMC Tanger Morocco',
            coursesAvailable: false
          }
        ]
      },
      {
        id: 'tetouan',
        nameAr: 'تطوان',
        nameFr: 'Tétouan',
        institutions: []
      }
    ]
  },
  {
    id: 'oriental',
    nameAr: 'الشرق',
    nameFr: "L'Oriental",
    cities: [
      {
        id: 'nador',
        nameAr: 'الناظور',
        nameFr: 'Nador',
        institutions: [
          {
            id: 'cmc-nador',
            name: 'Cité des Métiers et des Compétences Nador',
            type: 'CMC',
            city: 'Nador',
            mapsQuery: 'CMC Nador Morocco',
            coursesAvailable: false
          },
          {
            id: 'ista-nador',
            name: 'Institut Spécialisé de Technologie Appliquée Nador',
            type: 'ISTA',
            city: 'Nador',
            mapsQuery: 'ISTA Nador Morocco',
            coursesAvailable: false
          }
        ]
      },
      {
        id: 'oujda',
        nameAr: 'وجدة',
        nameFr: 'Oujda',
        institutions: []
      }
    ]
  },
  {
    id: 'fes-meknes',
    nameAr: 'فاس مكناس',
    nameFr: 'Fès-Meknès',
    cities: [
      {
        id: 'fes',
        nameAr: 'فاس',
        nameFr: 'Fès',
        institutions: [
          {
            id: 'cmc-fes',
            name: 'Cités des Métiers et des Compétences Fès-Meknès',
            type: 'CMC',
            city: 'Fès',
            mapsQuery: 'CMC Fes Morocco',
            coursesAvailable: false
          }
        ]
      },
      {
        id: 'meknes',
        nameAr: 'مكناس',
        nameFr: 'Meknès',
        institutions: [
          {
            id: 'ista-gestion-meknes',
            name: 'Institut Spécialisé de Technologie Appliquée de Gestion Bab Tizimi',
            type: 'ISTA',
            city: 'Meknès',
            mapsQuery: 'ISTA Gestion Bab Tizimi Meknes Morocco',
            coursesAvailable: false
          }
        ]
      }
    ]
  },
  {
    id: 'rabat-sale-kenitra',
    nameAr: 'الرباط سلا القنيطرة',
    nameFr: 'Rabat-Salé-Kénitra',
    cities: [
      {
        id: 'rabat',
        nameAr: 'الرباط',
        nameFr: 'Rabat',
        institutions: [
          {
            id: 'cmc-rabat',
            name: 'Cité des Métiers et des Compétences Rabat',
            type: 'CMC',
            city: 'Rabat',
            mapsQuery: 'CMC Rabat Morocco',
            coursesAvailable: false
          },
          {
            id: 'ista-hay-riad-rabat',
            name: 'Institut Spécialisé de Technologie Appliquée Hay Riad',
            type: 'ISTA',
            city: 'Rabat',
            mapsQuery: 'ISTA Hay Riad Rabat Morocco',
            coursesAvailable: false
          }
        ]
      },
      {
        id: 'kenitra',
        nameAr: 'القنيطرة',
        nameFr: 'Kénitra',
        institutions: []
      },
      {
        id: 'sale',
        nameAr: 'سلا',
        nameFr: 'Salé',
        institutions: []
      }
    ]
  },
  {
    id: 'beni-mellal-khenifra',
    nameAr: 'بني ملال خنيفرة',
    nameFr: 'Béni Mellal-Khénifra',
    cities: [
      {
        id: 'beni-mellal',
        nameAr: 'بني ملال',
        nameFr: 'Béni Mellal',
        institutions: [
          {
            id: 'cmc-beni-mellal',
            name: 'Cité des Métiers et des Compétences Béni Mellal-Khénifra',
            type: 'CMC',
            city: 'Béni Mellal',
            mapsQuery: 'CMC Beni Mellal Morocco',
            coursesAvailable: false
          }
        ]
      }
    ]
  },
  {
    id: 'casablanca-settat',
    nameAr: 'الدار البيضاء سطات',
    nameFr: 'Casablanca-Settat',
    cities: [
      {
        id: 'nouaceur',
        nameAr: 'النواصر',
        nameFr: 'Nouaceur',
        institutions: [
          {
            id: 'cmc-casablanca-settat',
            name: 'Cité des Métiers et des Compétences Casablanca-Settat',
            type: 'CMC',
            city: 'Nouaceur',
            mapsQuery: 'CMC Casablanca Settat Nouaceur Morocco',
            coursesAvailable: false
          }
        ]
      },
      {
        id: 'had-soualem',
        nameAr: 'حد السوالم',
        nameFr: 'Had Soualem',
        institutions: [
          {
            id: 'ista-had-soualem',
            name: 'ISTA Had Soualem',
            type: 'ISTA',
            city: 'Had Soualem',
            mapsQuery: 'ISTA Had Soualem Morocco',
            coursesAvailable: true
          }
        ]
      },
      {
        id: 'casablanca',
        nameAr: 'الدار البيضاء',
        nameFr: 'Casablanca',
        institutions: [
          {
            id: 'ista-ben-msik',
            name: 'Institut Spécialisé de Technologie Appliquée Industriel Ben M’Sik',
            type: 'ISTA',
            city: 'Casablanca',
            mapsQuery: 'ISTA Industriel Ben M Sik Casablanca Morocco',
            coursesAvailable: false
          },
          {
            id: 'ista-sidi-bernouissi',
            name: 'Institut Spécialisé de Technologie Appliquée Sidi Bernoussi',
            type: 'ISTA',
            city: 'Casablanca',
            mapsQuery: 'ISTA Sidi Bernoussi Casablanca Morocco',
            coursesAvailable: false
          },
          {
            id: 'ista-sidi-moumen',
            name: 'Institut Spécialisé de Technologie Appliquée Sidi Moumen',
            type: 'ISTA',
            city: 'Casablanca',
            mapsQuery: 'ISTA Sidi Moumen Casablanca Morocco',
            coursesAvailable: false
          },
          {
            id: 'ista-hay-hassani-2',
            name: 'Institut Spécialisé de Technologie Appliquée Hay Hassani 2',
            type: 'ISTA',
            city: 'Casablanca',
            mapsQuery: 'ISTA Hay Hassani 2 Casablanca Morocco',
            coursesAvailable: false
          },
          {
            id: 'ista-ntic-sidi-maarouf',
            name: 'Institut Spécialisé de Technologie Appliquée NTIC Sidi Maarouf',
            type: 'ISTA',
            city: 'Casablanca',
            mapsQuery: 'ISTA NTIC Sidi Maarouf Casablanca Morocco',
            coursesAvailable: false
          }
        ]
      },
      {
        id: 'mohammedia',
        nameAr: 'المحمدية',
        nameFr: 'Mohammedia',
        institutions: [
          {
            id: 'ista-port-mohammedia',
            name: 'Institut de Technologie Appliquée Port Mohammedia',
            type: 'ISTA',
            city: 'Mohammedia',
            mapsQuery: 'Institut de Technologie Appliquee Port Mohammedia Morocco',
            coursesAvailable: false
          }
        ]
      },
      {
        id: 'berrechid',
        nameAr: 'برشيد',
        nameFr: 'Berrechid',
        institutions: [
          {
            id: 'ista-berrechid',
            name: 'Institut Spécialisé de Technologie Appliquée Berrechid',
            type: 'ISTA',
            city: 'Berrechid',
            mapsQuery: 'ISTA Berrechid Morocco',
            coursesAvailable: false
          }
        ]
      },
      {
        id: 'settat',
        nameAr: 'سطات',
        nameFr: 'Settat',
        institutions: [
          {
            id: 'ista-settat',
            name: 'ISTA 1 Settat',
            type: 'ISTA',
            city: 'Settat',
            mapsQuery: 'ISTA 1 Settat Morocco',
            coursesAvailable: false
          }
        ]
      },
      {
        id: 'ben-slimane',
        nameAr: 'بن سليمان',
        nameFr: 'Ben Slimane',
        institutions: [
          {
            id: 'ista-ben-slimane',
            name: 'Institut Spécialisé de Technologie Appliquée Ben Slimane',
            type: 'ISTA',
            city: 'Ben Slimane',
            mapsQuery: 'ISTA Ben Slimane Morocco',
            coursesAvailable: false
          }
        ]
      },
      {
        id: 'el-jadida',
        nameAr: 'الجديدة',
        nameFr: 'El Jadida',
        institutions: [
          {
            id: 'ista-jorf-lasfar',
            name: 'Institut Spécialisé de Technologie Appliquée Jorf Lasfar',
            type: 'ISTA',
            city: 'Jorf Lasfar',
            mapsQuery: 'ISTA Jorf Lasfar Morocco',
            coursesAvailable: false
          }
        ]
      }
    ]
  },
  {
    id: 'marrakech-safi',
    nameAr: 'مراكش آسفي',
    nameFr: 'Marrakech-Safi',
    cities: [
      {
        id: 'marrakech',
        nameAr: 'مراكش',
        nameFr: 'Marrakech',
        institutions: [
          {
            id: 'cmc-marrakech',
            name: 'Cité des Métiers et des Compétences Marrakech-Safi',
            type: 'CMC',
            city: 'Marrakech',
            mapsQuery: 'CMC Marrakech Morocco',
            coursesAvailable: false
          }
        ]
      },
      {
        id: 'safi',
        nameAr: 'آسفي',
        nameFr: 'Safi',
        institutions: [
          {
            id: 'ista-hotellerie-safi',
            name: 'Institut Spécialisé de Technologie en Hôtellerie et de Tourisme Safi',
            type: 'ISTA',
            city: 'Safi',
            mapsQuery: 'ISTA Hotellerie Tourisme Safi Morocco',
            coursesAvailable: false
          }
        ]
      }
    ]
  },
  {
    id: 'draa-tafilalet',
    nameAr: 'درعة تافيلالت',
    nameFr: 'Drâa-Tafilalet',
    cities: []
  },
  {
    id: 'souss-massa',
    nameAr: 'سوس ماسة',
    nameFr: 'Souss-Massa',
    cities: [
      {
        id: 'agadir',
        nameAr: 'أكادير',
        nameFr: 'Agadir',
        institutions: [
          {
            id: 'cmc-agadir',
            name: 'Cité des Métiers et des Compétences Agadir',
            type: 'CMC',
            city: 'Agadir',
            mapsQuery: 'CMC Agadir Morocco',
            coursesAvailable: false
          },
          {
            id: 'ista-agadir',
            name: 'Institut Spécialisé de Technologie Appliquée Agadir',
            type: 'ISTA',
            city: 'Agadir',
            mapsQuery: 'ISTA Agadir Morocco',
            coursesAvailable: false
          }
        ]
      }
    ]
  },
  {
    id: 'guelmim-oued-noun',
    nameAr: 'كلميم واد نون',
    nameFr: 'Guelmim-Oued Noun',
    cities: [
      {
        id: 'guelmim',
        nameAr: 'كلميم',
        nameFr: 'Guelmim',
        institutions: [
          {
            id: 'ista-hotellerie-guelmim',
            name: 'Institut Spécialisé de l’Hôtellerie et de Tourisme Guelmim',
            type: 'ISTA',
            city: 'Guelmim',
            mapsQuery: 'Institut Specialise Hotellerie Tourisme Guelmim Morocco',
            coursesAvailable: false
          }
        ]
      }
    ]
  },
  {
    id: 'laayoune-sakia-el-hamra',
    nameAr: 'العيون الساقية الحمراء',
    nameFr: 'Laâyoune-Sakia El Hamra',
    cities: [
      {
        id: 'laayoune',
        nameAr: 'العيون',
        nameFr: 'Laâyoune',
        institutions: [
          {
            id: 'cmc-laayoune',
            name: 'Cité des Métiers et des Compétences Laayoune',
            type: 'CMC',
            city: 'Laâyoune',
            mapsQuery: 'CMC Laayoune Morocco',
            coursesAvailable: false
          }
        ]
      }
    ]
  },
  {
    id: 'dakhla-oued-ed-dahab',
    nameAr: 'الداخلة وادي الذهب',
    nameFr: 'Dakhla-Oued Ed-Dahab',
    cities: []
  }
]
