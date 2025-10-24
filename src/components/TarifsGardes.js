import Link from "next/link";

export default function TarifsGardes() {
  return (
    <section className="">
      {/* Titre */}
      <div className="">
        <h3 className="">Tarifs visites à domicile</h3>
        <p className="">2025 *</p>
      </div>

      {/* Carte 30 min */}
      <div className="">
        <div
          className=""
          style={{ borderColor: "#f48142" }}
        >
          <div className="">
            <h4 className="">30 min</h4>
          </div>
          <div className="">
            <h5 className="">14€</h5>
            <ul className="">
              <li>19€ sam, dim & JF</li>
              <li>
                <Link href="/secteur-d-intervention#zonearea" className="">+ km</Link>
              </li>
            </ul>
            <Link href="/contact" className="" style={{ background: "#5db0b8", border: "#5db0b8" }}>Contact</Link>
          </div>
        </div>
      </div>

      {/* Carte 45 min */}
      <div className="">
        <div
          className=""
          style={{ borderColor: "#f48142" }}
        >
          <div className="">
            <h4 className="">45 min</h4>
          </div>
          <div className="">
            <h5 className="">19€</h5>
            <ul className="">
              <li>24€ sam, dim & JF</li>
              <li>
                <Link href="/secteur-d-intervention#zonearea" className="">+ km</Link>
              </li>
            </ul>
            <Link href="/contact" className="" style={{ background: "#5db0b8", border: "#5db0b8" }}>Contact</Link>
          </div>
        </div>
      </div>

      {/* Carte 1 heure */}
      <div className="">
        <div
          className=""
          style={{ borderColor: "#f48142" }}
        >
          <div className="">
            <h4 className="">1 heure</h4>
          </div>
          <div className="">
            <h5 className="">24€</h5>
            <ul className="">
              <li>29€ sam, dim & JF</li>
              <li>
                <Link href="/secteur-d-intervention#zonearea" className="">+ km </Link>
              </li>
            </ul>
            <Link href="/contact" className="" style={{ background: "#5db0b8", border: "#5db0b8" }}>Contact</Link>
          </div>
        </div>
      </div>

      {/* Note en bas */}
      <div className="">
        <p className="">
          * 5€ par chien supplémentaire si promenade.<br />
          Temps des prestations à déterminer ensemble,{" "}
          <span className="">lors de la pré-visite,</span> en fonction de vos besoins.
        </p>
      </div>
    </section>
  );
}