import Image from "next/image";
import { SloganBottom } from "./Slogan/Slogan";

//import Link from "next/link";

export default function Presentation() {
  return (
    <div>

      <article className="">

          <div className="">
              <p>
                Prise d’enthousiasme débordant, depuis ma plus tendre enfance, pour la compagnie animale, j’ai créé «<span className="fw-bold">ANIM’AUX LOGIS</span>».
              </p>
              <p>
                Cette entreprise, qui concilie ma passion personnelle à mon activité professionnelle, est destinée à relayer les propriétaires soucieux du bien-être de leurs animaux de compagnie.
              </p>
              <p>
                Résidente de Volstroff depuis une quarantaine d’années, j’ai parfait mon expérience par un bénévolat à l’association «LE CRÉPUSCULE DES ANIMAUX», anciennement localisée à KEMPLICH.<br />
                (Refuge composé de chiens, chats, chevaux, chèvres, un âne et un mouton)
              </p>
          </div>

          <div className="">
            <Image
              src="/img/nuttea.jpg"
              alt="www.animauxlogis.fr | Un chien en laisse"
              className=""
              width={400}
              height={500}
              property
            />
            <p className="">Nuttea</p>
          </div>

      </article>        

      <article className="">

        <div className="">
          <p>
              Actuellement quatre chats, maîtres dans mon environnement, partagent mon foyer.
          </p>
          <p>
              Auparavant, plusieurs chiens ont égayé mon quotidien, ainsi que des poules et des cochons d’Inde.
          </p>
        </div>

        <div className="">
          <Image
            src="/img/tina.jpg"
            alt="www.animauxlogis.fr | Tina"
            className="img-fluid rounded"
            width={350}
            height={320}
            property
          />
          <p className="">Tina</p>
        </div>

      </article> 

      <article className="">

        <div className="">
          <p>
              PET SITTER qualifiée: titulaire de l’ACACED (Chien, Chat, Nac), j’ai suivi la formation 1er secours Canin et Félin, l’habilitation de transport d’animaux vivants ainsi que l’aptitude pour les chiens de catégorie.
          </p>

        </div>

        <div className="">
          <Image
            src="/img/sunny.jpg"
            alt="www.animauxlogis.fr | Sunny"
            className="img-fluid rounded"
            width={384}
            height={512}
            property
          />
          <p className="">Sunny</p>
        </div>

      </article> 

      <article className="">
        <div className="">
          <p>
            Ayant l’esprit de service, je suis disponible pour prendre soin de vos deux ou quatre pattes pendant vos absences<br />
            (week-ends, vacances, hospitalisation, longues journées de travail…)
          </p>
          <p>
            Adaptant des services personnalisés et appliqués avec qualité professionnelle, basés sur une confiance réciproque, je me fais un honneur de prendre soin de vos animaux de compagnie avec un amour sans faille.
          </p>
        </div>

        <div className="">
          <Image
            src="/img/melba.jpg"
            alt="www.animauxlogis.fr | Melba"
            className=""
            width={375}
            height={539}
            property
          />
          <p className="">Melba</p>
        </div>

      </article> 

        <SloganBottom />

    </div>
  );
}