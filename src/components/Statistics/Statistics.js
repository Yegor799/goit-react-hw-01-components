import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ stats }) => {
    return (
        <section className={s.statistics}>       

            <ul className= {s.list}>
                {stats.map(stat => (
                    <li className={s.item} key={stat.id}>
                        <span className={s.label}>{stat.label } </span>
                        <span className={s.percentage}>{stat.percentage }%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
};

Statistics.propTypes = {
        stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            lable: PropTypes.string,
            percentage: PropTypes.number.isRequired,
        })
    )
};



export default Statistics;