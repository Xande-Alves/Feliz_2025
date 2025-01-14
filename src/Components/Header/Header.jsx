import logo from '../../assets/logo.png';
import s from './header.module.scss';

export default function Header() {
    return (
        <header className={s.headerContent}>
            <img src={logo} alt="logo do site" />
            <nav>
                <ul>
                    <li><a href="">Paz</a></li>
                    <li><a href="">Saúde</a></li>
                    <li><a href="">Alegria</a></li>
                </ul>
            </nav>
        </header>
    )
    
}