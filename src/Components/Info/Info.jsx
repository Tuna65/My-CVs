import './Info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCakeCandles, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
function Info() {
    const transiton = { duration: 2, type: 'spring' };
    return (
        <div className="i-wrapper grid">
            <div className="row">
                <div className="i-left col l-6 c-12">
                    <h2>Hy! I Am</h2>
                    <h1>Pham Anh Tuan</h1>
                    <span>Frontend Deverloper with fesher level</span>
                    <button className="button left-button">Hire Me</button>
                    <div className="left-icon">
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
                <div className="i-right col l-6 c-12">
                    <span></span>
                    <p>Contact Infomation</p>
                    <motion.div initial={{ left: '12%' }} whileInView={{ left: '30%' }} transition={transiton}>
                        <FontAwesomeIcon icon={faCakeCandles} />
                        <span>06/05/1997</span>
                    </motion.div>
                    <motion.div initial={{ right: '9%' }} whileInView={{ right: '15%' }} transition={transiton}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>patuan657@gmail.com</span>
                    </motion.div>
                    <motion.div initial={{ left: '12%' }} whileInView={{ left: '30%' }} transition={transiton}>
                        <FontAwesomeIcon icon={faPhone} />
                        <span>0387461706</span>
                    </motion.div>
                    <motion.div initial={{ right: '23%' }} whileInView={{ right: '33%' }} transition={transiton}>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Ha Noi</span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Info;
