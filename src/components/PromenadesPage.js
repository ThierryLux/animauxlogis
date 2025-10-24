import Image from "next/image"
import Link from "next/link"
import TarifsSorties from "./TarifsSorties"

export default function Promenades() {
  return (
    <section>
        <p>Les promenades sont <span className="">individuelles</span> ou avec les chiens du même foyer *</p>

        <div>
            <article className="">

                <div className="">
                    <ul>Vous pouvez choisir leurs durées:
                        <li className="">30 minutes,</li>
                        <li className="">45 minutes,</li>
                        <li className="">1 heure.</li>
                    </ul>
                        <p>
                            L&apos;objectif est de garantir un exercice adapté aux besoins de chaque chien pour qu&apos;il en profite pleinement.<br />
                            Votre animal sera muni d’un traceur GPS afin que vous puissiez suivre ses activités.
                        </p><p>
                            Anim&apos;aux Logis fournit: laisses, longes et sacs à déjections ainsi que friandises si vous l&apos;autorisez.<br/>
                            De l&apos;eau est distribuée en cas de chaleur.
                    </p>
                </div>

                <div className="p-3">
                    <Image
                    src="/img/chiens-en-laisse.jpg"
                    alt="www.animauxlogis.fr | deux chiens en ballade"
                    className=""
                    width={256}
                    height={341}
                    property
                    />
                </div>

            </article>        

            <article className="">

                <div className="">
                    <p>
                        Les promenades sont réalisées quel que soit le temps.<br />
                        Cependant, si les conditions météorologiques sont dangereuses (orage, tempête, forte chaleur…), l’horaire prévu pourra être modifié ou des mesures seront prises afin de permettre à votre chien de faire ses besoins à l’extérieur. <br />
                        Ensuite il sera ramené en sécurité à votre domicile pour profiter d&apos;un instant de jeux, de câlins et éventuellement procéder à son brossage.
                    </p>
                </div>

                <div className="">
                    <Image
                    src="/img/chien-laisse1.jpg"
                    alt="www.animauxlogis.fr | Un chien en laisse"
                    className=""
                    width={658}
                    height={516}
                    property
                    />
                </div>

            </article> 

            <article className="">
                <div className="">
                    <p>
                        Habilité pour les chiens de catégorie 1 et 2, qui sont les bienvenus (poids maximum 35kg).
                    </p>
                    <p>
                        Des messages photos/vidéos vous seront envoyés pendant les promenades.
                    </p>
                    <p>
                        Avant de commencer les prestations, une <span className="">pré-visite gratuite</span> est indispensable dans le but de faire connaissance avec vous et votre animal, ou vos animaux.
                    </p>
                    <p>
                        Sur demande un devis peut vous être adressé.<br />
                        Avant le début des prestations, un contrat sera formulé et un acompte de 50 % sera demandé pour la réservation.
                    </p>
                </div>

                <div className="p-3">
                    <Image
                        src="/img/poncho.jpg"
                        alt="www.animauxlogis.fr | Poncho"
                        className=""
                        width={354}
                        height={533}
                        property
                    />
                </div>

            </article> 

        </div>

    </section>
  )
}