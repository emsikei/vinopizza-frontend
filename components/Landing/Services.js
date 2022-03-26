import styles from "../styles/HomeInfo.module.scss";

const Services = () => {
    return (
        <div className={styles.services__wrapper}>
            <div className="container">
                <div className={styles.services__heading}>
                    <h2>Our Services</h2>
                    <p>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.
                    </p>
                </div>

                <div className={styles.services}>
                    <div className={styles.services__item}>
                        <div className={styles.services__icon__wrapper}>
                            <span className="flaticon-diet"></span>
                        </div>
                        <h3>Healthy Foods</h3>
                        <p>
                            Even the all-powerful Pointing has no control about the blind
                            texts it is an almost unorthographic.
                        </p>
                    </div>
                    <div className={styles.services__item}>
                        <div className={styles.services__icon__wrapper}>
                            <span className="flaticon-bicycle"></span>
                        </div>
                        <h3>Fastest Delivery</h3>
                        <p>
                            Even the all-powerful Pointing has no control about the blind
                            texts it is an almost unorthographic.
                        </p>
                    </div>
                    <div className={styles.services__item}>
                        <div className={styles.services__icon__wrapper}>
                            <span className="flaticon-pizza-1"></span>
                        </div>
                        <h3>Original Recipes</h3>
                        <p>
                            Even the all-powerful Pointing has no control about the blind
                            texts it is an almost unorthographic.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;