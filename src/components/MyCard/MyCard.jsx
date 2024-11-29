import styles from './MyCard.module.css';

// L'immagine DEVE essere importata come risorsa, perchè non si può utilizzare il PATH RELATIVO nel "src" a meno che la risorsa non sia un Asset PUBLIC
import cardImage from '../../assets/img-example.jpeg'

function MyCard() {

    return (
        <>
            <div className="col">
                <div className={styles.MyCard}>
                    <div>
                        <img src={cardImage} alt="" className='img-fluid' />
                    </div>
                    <div className={styles.contentContainer}>
                        <h3 className='h5'>Post title</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus voluptate quod dolorem eius.
                        </p>
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