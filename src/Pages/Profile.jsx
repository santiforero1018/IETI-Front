import styles from '../css/profile.module.css'
import profileImage from '../img/perfil.jpg';
const Profile = () => {
    return (
        <div>
            <h1> Your Profile </h1>
            <div className= {styles.Container}>
                <img src={profileImage} alt="Profile" id={styles.profile} />
                <div className={styles.info}>
                    <h2> Name: </h2>
                    <h2>subscription: </h2>
                    <h2>Role: </h2>
                </div>
                <div className={styles.buttons}>
                    <button>Home</button>
                    <button>Sign out</button>
                </div>
            </div>
        </div>
    )
}

export default Profile