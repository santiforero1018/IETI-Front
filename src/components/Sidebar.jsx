import styles from '../css/sidebar.module.css';
import { Link } from 'react-router-dom' 

const Sidebar = () =>{
    return(
        <div className={styles.Sidebar}>
            <ul>
                <li>
                    <Link to="/home">HOME</Link>
                </li>
                <li>
                    <Link to="/home/pagos">PAGOS</Link>
                </li>
                <li>
                    <Link to="">SERVICE2</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;