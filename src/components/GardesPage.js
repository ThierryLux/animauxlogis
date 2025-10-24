import Image from "next/image"
import Link from "next/link"

export default function Gardes() {
  return (
    <section>

        <article className="">

            <div className="">
                    <p>
                        Anim&apos;aux Logis propose des services animaliers &quot;Pet sitting&quot;, à votre domicile. Ces prestations conviennent parfaitement aux chats et Nac qui sont plus à l&apos;aise dans leur propre environnement.<br />
                    </p>
                    <p>
                    Ce service est comparable à du baby-sitting, mais il est destiné aux animaux domestiques, tels que chats, et NAC (nouveaux animaux de compagnie: oiseaux, poissons, hamsters, lapins, cochons d&apos;Inde, gerbilles, chinchillas, poules, lézards, chèvres, rats, souris, furets et bien d’autres encore... )
                </p>
            </div>

            <div className="">
                <Image
                src="/img/lapin.jpg"
                alt="www.animauxlogis.fr | lapin noir et blanc"
                className=""
                width={450}
                height={450}
                property
                />
            </div>

        </article>        

        <article className="">

            <div className="">
                <p>
                    Sous forme de visite(s) de 30 minutes, 45 minutes, ou 1 heure, ce service est personnalisable:<br />
                    nourrissage, abreuvement, entretien de l’environnement des animaux, gestion des sorties, câlins, jeux, administration de médicaments, brossage…<br />
                    En fonction de vos besoins, vous pouvez opter pour des services complémentaires pendant le temps déterminé pour des visites (sans supplément):<br />
                    relève du courrier, gestion des ouvrants (volets et fenêtres pour l&apos;aération du logement/simulation de présence), arrosage des plantes/potager, sortie des poubelles….<br />
                    Ce qui permet également de veiller sur votre habitation.
                </p>
            </div>

            <div className="">
                <Image
                    src="/img/chat-gris.jpg"
                    alt="www.animauxlogis.fr | un chaton gris"
                    className=""
                    width={400}
                    height={533}
                    property
                />


                </div>

        </article> 

        <article className="">
            <div className="">
                <p className="">
                    Anim&apos;aux Logis fournira des jouets pour chats pour divertir vos compagnons.
                </p>
                <p>
                    L&apos;appel à Anim&apos;aux Logis, assure non seulement le bien être de vos animaux de compagnie, mais peut également simplifier considérablement votre charge de travail avant une absence (vacances, week-end, hospitalisation, longue journée de travail…. )<br />
                    Même si vous avez une ménagerie de chats, de petits animaux à fourrure, à écailles ou à plumes, vous pouvez tous organiser auprès d&apos;un seul interlocuteur !
                </p>

            </div>

            <div className="">
                <Image
                    src="/img/octodone.jpeg"
                    alt="www.animauxlogis.fr | un octodone"
                    className=""
                    width={343}
                    height={396}
                    property
                />
            </div>

        </article> 

        <article className="">
            <div className="">
                <p>
                    Pour une bonne réalisation des services, une <span className="">pré-visite gratuite</span> est nécessaire à votre domicile. <br />
                    Elle permettra de vous rencontrer, vous et vos animaux, de définir vos besoins afin de personnaliser les prestations proposées en déterminant les tâches à réaliser, le temps à consacrer à vos animaux et le nombre de visite quotidienne.<br />
                    Sur demande un devis peut vous être adressé.<br />
                    Avant le début des prestations, un <span className="">contrat</span> sera formulé et un <span className="fw-bold">acompte</span> de 50 % sera demandé pour la <span className="fw-bold">réservation</span>.
                </p>
                <p className="">
                    Messages photos/vidéos vous seront envoyés tous les jours si vous le souhaitez, pour vous informer du bon déroulement des prestations.
                </p>
            </div>

            <div className="">
                <Image
                src="/img/poule.jpg"
                alt="www.animauxlogis.fr | Une poule"
                className=""
                width={600}
                height={400}
                property
                />
            </div>

        </article> 

    </section>
  )
}