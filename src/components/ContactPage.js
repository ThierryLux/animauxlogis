import { AiOutlineMail } from "react-icons/ai"
import { BsFacebook, BsFillTelephoneFill, BsInstagram, BsWhatsapp } from "react-icons/bs"
import Link from "next/link"

export default function Contact() {
  const fcbk = process.env.NEXT_PUBLIC_LINK_FACEBOOK;
  const insta = process.env.NEXT_PUBLIC_LINK_INSTAGRAM;

    return (
    <ul className="">
        <li className="">
            <BsFillTelephoneFill className=""/>
            06.62.51.04.62 
            <Link href="https://wa.me/33662510462" className=""><BsWhatsapp/></Link>
        </li>
        <li className="">
            <Link href="mailto:animauxlogis@outlook.fr"><AiOutlineMail /> animauxlogis@outlook.fr</Link>
        </li>

        <li className="">Vous pouvez également me suivre sur 
            <Link href={fcbk} className="" target="_blank" rel="noopener noreferrer nofollow"> Facebook <BsFacebook /></Link> 
            et 
            <Link href={insta} className="" target="_blank" rel="noopener noreferrer nofollow"> Instagram <BsInstagram /></Link> 
            
        </li>

        <li className="">
            Vous avez une demande particulière qui ne figure pas dans la grille tarifaire, 
            n&apos;hésitez pas à me contacter, nous pouvons en parler et un devis personnalisé sera proposé
        </li>

    </ul>
  )
}