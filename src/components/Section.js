import Contact from "@/components/ContactPage";
import CoupsDeCoeur from "@/components/CoupsDeCoeurPage";
import Presentation from "@/components/PresentationPage";
import Promenades from "@/components/PromenadesPage";
import TarifsSorties from "@/components/TarifsSorties";
import ZoneArea from "@/components/ZoneArea";
import Gardes from "@/components/GardesPage";
import TarifsGardes from "@/components/TarifsGardes";
import MapArea from "@/components/Map/MapArea";

// -----------------------------
// Mapping des pages "en dur"
// -----------------------------
export const SECTIONS = {
  "contact": <Contact />,
  "coups-de-coeur": <CoupsDeCoeur />,
  "qui-suis-je": <Presentation />,
  "sorties-promenades-canines": (
    <>
      <Promenades />
        <hr className="" />
      <TarifsSorties />
    </>
  ),
  "presentation": <Presentation />,
  "secteur-d-intervention": (
    <>
      <ZoneArea />
      <hr className="" />
      <MapArea />
    </>
  ),
  "tarifs": (
    <>
      <TarifsGardes />
      <hr className="" />
      <TarifsSorties />
    </>
  ),
  "visites-gardes-animales": (
    <>
      <Gardes />
      <hr className="" />
      <TarifsGardes />
    </>
  ),
};
