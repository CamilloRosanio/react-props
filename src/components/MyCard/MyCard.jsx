import styles from './MyCard.module.css';

// L'immagine DEVE essere importata come risorsa, perchè non si può utilizzare il PATH RELATIVO nel "src" a meno che la risorsa non sia un Asset PUBLIC
import defaultImage from '../../assets/img-example.jpeg'


// Il primo parametro accettato da un COMPONENT sono i PROPS, in questo caso un oggetto composto di più proprietà e valori.

function MyCard({ id, title, image, content, tags }) {


    return (
        <>
            <div key={id} className="col-6 col-md-6">
                <div className={styles.MyCard}>
                    <div>

                        {/* Questa condizione per l'Immagine risolve sia l'assenza totale dell'immagine nell'OBJECT
                        che la presenza dell'immagine come PROPERTY ma uguale a una stringa vuota.
                        L'alternativa iniziale era ?? che però non risolve il caso della stringa vuota */}
                        <img src={image || defaultImage} alt="" />
                    </div>
                    <div className={styles.contentContainer}>
                        <h3 className='h5'>{title}</h3>
                        <p>{content ? content : 'Description not available'}</p>
                        <div className={styles.tagContainer}>
                            {tags.map(tag => (
                                <span className={'postTag ' + tag}>{tag}</span>
                            ))}
                        </div>
                        <button className='btn btn-warning' href='#'>
                            Read more
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyCard