// Per applicare lo stile dal proprio foglio CSS devo importare il foglio di stile.
// Importando, saranno applicate automatiamente le caratteristiche in base ai selettori scritti sul foglio.
// REACT fa differenza tra "nome.css" e "nome.module.css"
// Le regole scritte nel MODULE vengono applicate solo e unicamente al COMPONENT che lo importa.

// Se lo importo come variabile (styles) applica le caratteristiche ai TAG, ma non alle CLASS a meno che non inserisca le CLASS come variabile {}

import styles from './Header.module.css';


function Header() {

    return (
        <>
            <header className={styles.header}>
                <h1>Il mio blog</h1>
            </header>
        </>
    )
}

export default Header