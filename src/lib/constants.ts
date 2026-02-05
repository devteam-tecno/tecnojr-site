// Role IDs for team members
export enum ROLE_ID {
  Trainee = 0,
  Membro = 1,
  Assessor = 2,
  Diretor = 3,
  Conselheiro = 4,
  Coordenador = 5,
}

// Role labels mapping
export const ROLE_LABELS: Record<ROLE_ID, string> = {
  [ROLE_ID.Trainee]: "Trainee",
  [ROLE_ID.Membro]: "Membro",
  [ROLE_ID.Assessor]: "Assessor",
  [ROLE_ID.Diretor]: "Diretor",
  [ROLE_ID.Conselheiro]: "Conselheiro",
  [ROLE_ID.Coordenador]: "Coordenador",
};

// Social media icon types
export type SocialIconType =
  | "linkedin"
  | "github"
  | "instagram"
  | "globe"
  | "envelope"
  | "lattes";
