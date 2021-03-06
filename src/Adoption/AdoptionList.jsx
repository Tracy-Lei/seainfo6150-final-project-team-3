import React from 'react'
import PropTypes from 'prop-types'
import styles from './AdoptionList.module.css'

const AdoptionList = () => {
    return (
        <div className = {styles.container}>
            <a className={styles.option} href ="/adoption/Dog">
                <header className={styles.title}>Find a dog</header>
                <img className = {styles.image} src="/images/DogMain.jpg" href></img>
            </a>
            <a className={styles.option} href ="/adoption/Cat">
                <header className={styles.title}>Find a Cat</header>
                <img className = {styles.image} src="/images/CatMain.jpg" href></img>
            </a>
            <a className={styles.option} href ="/adoption/Others">
                <header className={styles.title}>Find other pets</header>
                <img className = {styles.image} src="/images/other.jpg" href></img>
            </a>
            <a className={styles.option} href ="/Records">
                <header className={styles.title}>Adoption Records</header>
                <img className = {styles.image} src="/images/records.jpg" href></img>
            </a>
        </div>
    );
};

AdoptionList.propTypes = {
    pet: PropTypes.array.isRequired
};

export default AdoptionList