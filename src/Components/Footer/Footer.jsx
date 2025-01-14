import s from './footer.module.scss';
import linkedin from '../../assets/logoLinkedin.png';
import facebook from '../../assets/logoFacebook.png';
import instagram from '../../assets/logoInstagram.png';

export default function Footer() {
    return (
        <footer>
            <nav className={s.redeSocial}>
                <a href="https://www.linkedin.com/"><img src={linkedin} alt="Logo do LinkedIn." /></a>
                <a href="https://pt-br.facebook.com/"><img src={facebook} alt="Logo do Facebook." /></a>
                <a href="https://www.instagram.com/"><img src={instagram} alt="Logo do Instagram." /></a>
            </nav>
        </footer>
    )
}