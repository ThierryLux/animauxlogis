import { GiPositionMarker } from "react-icons/gi"

export default function ZoneArea() {
  return (
    <div className="zone-container">
      <p className="intro">Anim&apos;aux Logis intervient dans les localités de:</p>

      <div className="zone-grid">
        {/* Colonne 1 */}
        <ul>
          <li className="blue"><GiPositionMarker className="icon" />Bertrange,</li>
          <li className="blue"><GiPositionMarker className="icon" />Bousse,</li>
          <li className="blue"><GiPositionMarker className="icon" />Buding,</li>
          <li className="green"><GiPositionMarker className="icon" />Elzange,</li>
          <li className="green">
            <GiPositionMarker className="icon" />Gué
            <span className="blue">nange,</span>
          </li>
        </ul>

        {/* Colonne 2 */}
        <ul>
          <li className="blue"><GiPositionMarker className="icon" />Hombourg-Budange,</li>
          <li className="blue"><GiPositionMarker className="icon" />Illange,</li>
          <li className="blue"><GiPositionMarker className="icon" />Inglange,</li>
          <li className="blue"><GiPositionMarker className="icon" />Kédange-sur-Canner,</li>
          <li className="green">
            <GiPositionMarker className="icon" />Kun
            <span className="blue">tzig</span>,
          </li>
          <li className="blue"><GiPositionMarker className="icon" />Luttange,</li>
        </ul>

        {/* Colonne 3 */}
        <ul>
          <li className="green"><GiPositionMarker className="icon" />Metzeresche,</li>
          <li className="green"><GiPositionMarker className="icon" />Metzervisse,</li>
          <li className="blue"><GiPositionMarker className="icon" />Rurange-lès-Thionville,</li>
          <li className="green"><GiPositionMarker className="icon" />Stuckange,</li>
          <li className="blue"><GiPositionMarker className="icon" />Valmestroff,</li>
          <li className="green"><GiPositionMarker className="icon" />Volstroff,</li>
        </ul>
      </div>

      {/* Texte explicatif */}
      <p className="legend">
        <span className="green">Localités (de couleur verte), sans surplus kilométrique.</span><br />
        <span className="blue">Localités (en bleu), avec surplus kilométrique de 0,60€/km pour un trajet aller/retour. Les 10 premiers km offerts sur le trajet aller/retour.</span><br />
        <span className="blue italic">(calculé entre le siège d&apos;Anim&apos;aux Logis et le lieu de prise en charge des animaux)</span>
      </p>
    </div>
  )
}
