import Card from '../Card/Card';
import './Skill.css';
import glass from '../../img/glassesimoji.png';
import heart from '../../img/heartemoji.png';
import humble from '../../img/humble.png';
import { motion } from 'framer-motion';
import CV from './CV_Pham_Anh_Tuan_Fron_End_Developer.pdf';

function Skill() {
    const transition = { duration: 2, type: 'spring' };

    return (
        <div className="s-wrapper grid" id="Skill">
            <div className="row">
                <div className="col s-left l-6 c-12">
                    <h1>My Skill</h1>
                    <h2>Certificate</h2>
                    <span>HTML, CSS, Responsive, JavaScrip (ES6), ReactJS, NodeJS(ExpressJS, MongoDB)</span>
                    <a href={CV} download>
                        <button className="button s-button">Download CV</button>
                    </a>
                </div>
                <div className="s-right col l-6 c-12">
                    <motion.div initial={{ left: '0%' }} whileInView={{ left: '15%' }} transition={transition}>
                        <Card
                            emoji={glass}
                            title={'HTML, CSS, Web Responsive'}
                            content={'Competently  HTML, CSS, SCSS web Responsive with grid system'}
                        />
                    </motion.div>
                    <motion.div initial={{ left: '0%' }} whileInView={{ left: '13%' }} transition={transition}>
                        <Card
                            emoji={heart}
                            title={'Javascripts'}
                            content={'Competently Javascripts, Array, object, DOM, Callback, call API, ES6'}
                        />
                    </motion.div>
                    <motion.div initial={{ top: '80%' }} whileInView={{ top: '40%' }} transition={transition}>
                        <Card
                            emoji={humble}
                            title={'Frame Work: ReactJS'}
                            content={
                                'Use good Hooks(useState, useContext, useEffect, useReducer, useCallback, HOC(memo))'
                            }
                        />
                    </motion.div>
                    <span className="s-blur"></span>
                </div>
            </div>
        </div>
    );
}

export default Skill;
