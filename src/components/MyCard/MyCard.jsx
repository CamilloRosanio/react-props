import styles from './MyCard.module.css';

// L'immagine DEVE essere importata come risorsa, perchè non si può utilizzare il PATH RELATIVO nel "src" a meno che la risorsa non sia un Asset PUBLIC
import defaultImage from '../../assets/img-example.jpeg'


// Il primo parametro accettato da un COMPONENT sono i PROPS, in questo caso un oggetto composto di più proprietà e valori.

function MyCard({ id, title, image, content }) {

    return (
        <>
            <div key={id} className="col-6 col-md-6">
                <div className={styles.MyCard}>
                    <div>
                        <img src={image ?? defaultImage} alt="" />
                    </div>
                    <div className={styles.contentContainer}>
                        <h3 className='h5'>{title}</h3>
                        <p>{content}</p>
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