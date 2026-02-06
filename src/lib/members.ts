/**
 * Team members data
 * This file will be used in the "/sobre" page (currently under development)
 * Do not remove - the page is linked in header and footer navigation
 */
import { ROLE_ID } from "./constants";
import type { Member } from "./types";

export const memberList: Member[] = [
  {
    name: "Hélder Almeida",
    roleId: ROLE_ID.Coordenador,
    role: "Coordenador",
    img: "helder.png",
    links: [
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/hélder-almeida-75407a34",
      },
    ],
  },
  {
    name: "Igor Rocha",
    roleId: ROLE_ID.Conselheiro,
    role: "Conselheiro",
    img: "igor_rocha.png",
    links: [
      {
        icon: "globe",
        url: "https://ilrocha.com/",
      },
      {
        icon: "github",
        url: "https://github.com/igorroc/",
      },
      {
        icon: "envelope",
        url: "mailto:ilrocha.cic@uesc.br",
      },
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/igorroc",
      },
    ],
  },
  {
    name: "Daniel Oliveira",
    roleId: ROLE_ID.Conselheiro,
    role: "Conselheiro",
    img: "daniel_oliveira.png",
    links: [
      {
        icon: "lattes",
        url: "http://lattes.cnpq.br/8179726948969845",
      },
      {
        icon: "instagram",
        url: "https://www.instagram.com/oliveira4552/",
      },
      {
        icon: "github",
        url: "https://github.com/DanielOliveiradaSilva",
      },
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/daniel-oliveira-da-silva-436276238/",
      },
    ],
  },
  {
    name: "Joabe Ferreira",
    roleId: ROLE_ID.Diretor,
    role: "Diretor Presidente",
    img: "joabe_ferreira.png",
    links: [
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/joabe-ferreira-156b07215/",
      },
      {
        icon: "github",
        url: "https://github.com/GannJobs",
      },
      {
        icon: "instagram",
        url: "https://www.instagram.com/jobs.017/",
      },
      {
        icon: "envelope",
        url: "mailto:linksyamato@gmail.com",
      },
    ],
  },
  {
    name: "Joabe Andrade",
    roleId: ROLE_ID.Diretor,
    role: "Diretor de Projetos",
    img: "joabe_andrade.png",
    links: [
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/joabeandrade/",
      },
      {
        icon: "github",
        url: "https://www.github.com/JoabeAndrade/",
      },
      {
        icon: "instagram",
        url: "https://www.instagram.com/j0abeandrade/",
      },
      {
        icon: "envelope",
        url: "mailto:joabeandrade2k01@gmail.com",
      },
    ],
  },
  {
    name: "Bruno Felipe",
    roleId: ROLE_ID.Diretor,
    role: "Diretor de RH",
    img: "bruno_felipe.png",
    links: [
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/brunofelipecoder",
      },
      {
        icon: "github",
        url: "https://github.com/BrunoFelipeCoder",
      },
      {
        icon: "instagram",
        url: "https://www.instagram.com/bruno.cic/",
      },
      {
        icon: "envelope",
        url: "mailto:bfspereira.cic@uesc.br",
      },
    ],
  },
  {
    name: "Gabriella Oliveira",
    roleId: ROLE_ID.Diretor,
    role: "Diretoria de Vendas",
    img: "gabriella_oliveira.png",
    links: [
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/gabriella-oliveira-00832a183",
      },
      {
        icon: "github",
        url: "https://github.com/Gabriella0Oliveira",
      },
      {
        icon: "envelope",
        url: "mailto:maria0gabriella@gmail.com",
      },
    ],
  },
  {
    name: "Luiz Rosário",
    roleId: ROLE_ID.Diretor,
    role: "Diretor de Marketing",
    img: "luiz_rosario.png",
    links: [
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/luizzrosario/",
      },
      {
        icon: "github",
        url: "https://github.com/luizzrosario/",
      },
      {
        icon: "instagram",
        url: "https://www.instagram.com/luizzrosario/",
      },
      {
        icon: "envelope",
        url: "mailto:luizfeliper57@gmail.com",
      },
    ],
  },
  {
    name: "Matheus Santos Silva",
    roleId: ROLE_ID.Diretor,
    role: "Diretor Financeiro",
    img: "matheus_silva.png",
    links: [
      {
        icon: "envelope",
        url: "mailto:mssilva.cic@uesc.br",
      },
      {
        icon: "github",
        url: "https://github.com/matheusssilva991",
      },
    ],
  },
  {
    name: "Thalles Cerqueira",
    roleId: ROLE_ID.Membro,
    role: "Membro",
    img: "thalles_cerqueira.png",
    links: [
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/thalles-cerqueira-b43a571a1/",
      },
    ],
  },
  {
    name: "João P. Norberto",
    roleId: ROLE_ID.Membro,
    role: "Membro",
    img: "joão_pedro_noberto.png",
    links: [
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/joão-pedro-correia-da-silva-noberto-028940236/",
      },
      {
        icon: "github",
        url: "https://github.com/oJorta",
      },
      {
        icon: "instagram",
        url: "https://www.instagram.com/jorta___/",
      },
      {
        icon: "envelope",
        url: "mailto:jpcsnoberto@gmail.com",
      },
    ],
  },
  {
    name: "Larissa de Brito",
    roleId: ROLE_ID.Membro,
    role: "Membro",
    img: "larissa_brito.png",
    links: [
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/larissa-brit0/",
      },
      {
        icon: "github",
        url: "https://github.com/laribrito",
      },
      {
        icon: "instagram",
        url: "https://www.instagram.com/tnlaris/",
      },
      {
        icon: "envelope",
        url: "mailto:lary.29.ds@gmail.com",
      },
    ],
  },
  {
    name: "Davi Roriz",
    roleId: ROLE_ID.Membro,
    role: "Membro",
    img: "davi.png",
    links: [
      {
        icon: "envelope",
        url: "mailto:droliveira1.cic@uesc.br",
      },
      {
        icon: "github",
        url: "https://github.com/DaviRorizOliveira",
      },
      {
        icon: "instagram",
        url: "https://www.instagram.com/rorizdavioliveira/",
      },
    ],
  },
  {
    name: "Gabriel Prado",
    roleId: ROLE_ID.Membro,
    role: "Membro",
    img: "gabriel.png",
    links: [
      {
        icon: "envelope",
        url: "mailto:gabrielpradomartinsgbi@gmail.com",
      },
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/gabrielprd/",
      },
    ],
  },
  {
    name: "Igor Campos",
    roleId: ROLE_ID.Membro,
    role: "Membro",
    img: "igor_campos.png",
    links: [
      {
        icon: "envelope",
        url: "mailto:igoruser07@gmail.com",
      },
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/igorcamposm/",
      },
      {
        icon: "github",
        url: "https://github.com/IgorCamps",
      },
      {
        icon: "instagram",
        url: "https://www.instagram.com/igu.cm/",
      },
    ],
  },
  {
    name: "Isabela Madureira",
    roleId: ROLE_ID.Membro,
    role: "Membro",
    img: "isabela_madureira.png",
    links: [
      {
        icon: "envelope",
        url: "mailto:isabelaargolo3110@gmail.com",
      },
      {
        icon: "github",
        url: "https://github.com/bela-mad",
      },
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/isabelamad/",
      },
    ],
  },
];

// Role statistics
export const roles = {
  coordenadores: memberList.filter(
    (member) => member.roleId === ROLE_ID.Coordenador,
  ).length,
  conselheiros: memberList.filter(
    (member) => member.roleId === ROLE_ID.Conselheiro,
  ).length,
  diretores: memberList.filter((member) => member.roleId === ROLE_ID.Diretor)
    .length,
  assessores: memberList.filter((member) => member.roleId === ROLE_ID.Assessor)
    .length,
  membros: memberList.filter((member) => member.roleId === ROLE_ID.Membro)
    .length,
  trainee: memberList.filter((member) => member.roleId === ROLE_ID.Trainee)
    .length,
  total: memberList.length,
};

// Helper functions
export function getMembersByRole(roleId: ROLE_ID): Member[] {
  return memberList.filter((member) => member.roleId === roleId);
}

export function getAllRoles(): ROLE_ID[] {
  return [
    ROLE_ID.Coordenador,
    ROLE_ID.Conselheiro,
    ROLE_ID.Diretor,
    ROLE_ID.Assessor,
    ROLE_ID.Membro,
    ROLE_ID.Trainee,
  ];
}
