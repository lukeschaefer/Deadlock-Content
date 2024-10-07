import { abrams } from "./abrams";
import { bebop } from "./bebop";
import { bomber } from "./bomber";
import { cadence } from "./cadence";
import { calico } from "./calico";
import { dynamo } from "./dynamo";
import { fathom } from "./fathom";
import { greyTalon } from "./greyTalon";
import { gunslinger } from "./gunslinger";
import { haze } from "./haze";
import { holliday } from "./holliday";
import { infernus } from "./infernus";
import { ivy } from "./ivy";
import { kali } from "./kali";
import { kelvin } from "./kelvin";
import { ladyGeist } from "./ladyGeist";
import { lash } from "./lash";
import { mcginnis } from "./mcginnis";
import { mirage } from "./mirage";
import { moKrill } from "./moKrill";
import { paradox } from "./paradox";
import { pocket } from "./pocket";
import { rutger } from "./rutger";
import { seven } from "./seven";
import { shiv } from "./shiv";
import { thumper } from "./thumper";
import { tokamak } from "./tokamak";
import { vindicta } from "./vindicta";
import { viscous } from "./viscous";
import { warden } from "./warden";
import { wraith } from "./wraith";
import { wrecker } from "./wrecker";
import { yakuza } from "./yakuza";
import { yamato } from "./yamato";

export interface Character {
  id: number;
  class_name: string;
  name: string;
  lore?: string;
  role?: string;
  playstyle?: string;
  player_selectable: boolean;
  disabled: boolean;
  in_development: boolean;
  needs_testing: boolean;
  assigned_players_only: boolean;
  bot_selectable: boolean;
  limited_testing: boolean;
  complexity: number;
  readability: number;
  starting_stats: Record<string, number>;
  collision_radius: number;
  images: {
    portrait?: string;
    card?: string;
    top_bar?: string;
    minimap?: string;
    small?: string;
    weapon?: string;
  };
  [key: string]: any;
}

export {
  abrams,
  bebop,
  bomber,
  cadence,
  calico,
  dynamo,
  fathom,
  greyTalon,
  gunslinger,
  haze,
  holliday,
  infernus,
  ivy,
  kali,
  kelvin,
  ladyGeist,
  lash,
  mcginnis,
  mirage,
  moKrill,
  paradox,
  pocket,
  rutger,
  seven,
  shiv,
  thumper,
  tokamak,
  vindicta,
  viscous,
  warden,
  wraith,
  wrecker,
  yakuza,
  yamato
};

export const PLAYABLE_CHARACTERS = [
  abrams,
  bebop,
  dynamo,
  greyTalon,
  haze,
  infernus,
  ivy,
  kelvin,
  ladyGeist,
  lash,
  mcginnis,
  mirage,
  moKrill,
  paradox,
  pocket,
  seven,
  shiv,
  vindicta,
  viscous,
  warden,
  wraith,
  yamato
];

export const ALL_CHARACTERS = [
  abrams,
  bebop,
  bomber,
  cadence,
  calico,
  dynamo,
  fathom,
  greyTalon,
  gunslinger,
  haze,
  holliday,
  infernus,
  ivy,
  kali,
  kelvin,
  ladyGeist,
  lash,
  mcginnis,
  mirage,
  moKrill,
  paradox,
  pocket,
  rutger,
  seven,
  shiv,
  thumper,
  tokamak,
  vindicta,
  viscous,
  warden,
  wraith,
  wrecker,
  yakuza,
  yamato
];