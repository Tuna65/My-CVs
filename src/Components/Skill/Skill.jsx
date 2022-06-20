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
                    <span>
                        Hoàn thành lộ trình học Front-End trên F8 gồm: HTML, CSS, Responsive, JavaScrip (ES6), ReactJS
                    </span>
                    <a href={CV} download>
                        <button className="button s-button">Download CV</button>
                    </a>
                </div>
                <div className="s-right col l-6 c-12">
                    <motion.div initial={{ left: '0%' }} whileInView={{ left: '15%' }} transition={transition}>
                        <Card
                            emoji={glass}
                            title={'HTML, CSS, Web Responsive'}
                            content={'Thành thạo các kỹ năng về HTML, CSS, xử lý web Responsive'}
                        />
                    </motion.div>
                    <motion.div initial={{ left: '0%' }} whileInView={{ left: '13%' }} transition={transition}>
                        <Card
                            emoji={heart}
                            title={'Javascripts'}
                            content={
                                'Thành thạo các kỹ năng về Javascripts, thao tác mảng, object, DOM, Callback, API(fetch), xử lý Website với API có sẵn'
                            }
                        />
                    </motion.div>
                    <motion.div initial={{ top: '80%' }} whileInView={{ top: '40%' }} transition={transition}>
                        <Card
                            emoji={humble}
                            title={'Frame Work: ReactJS'}
                            content={'Hiểu và sử dụng tốt Router, Hooks(useState, useContext, useEffect'}
                        />
                    </motion.div>
                    <span className="s-blur"></span>
                </div>
            </div>
        </div>
    );
}

export default Skill;
