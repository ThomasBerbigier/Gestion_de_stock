import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

export interface Menu {
  id?: string;
  titre?: string;
  icon: IconDefinition;
  url?: string;
  sousMenu?: Array<Menu>;
}
