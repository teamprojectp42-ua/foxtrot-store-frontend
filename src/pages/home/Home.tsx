import { useContext } from 'react';
import './ui/Home.css';
import AppContext from '../../features/_context/AppContext';

export default function Home() {
    // Home тоже получает текущий locale
    const {locale}= useContext(AppContext)
     return (
        <main>
            {/* <h1>{locale.homePageTitle}</h1> */}
        </main>
    );
}