import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export default function Statistics(props) {
  const { title, stats } = props;

  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.list}>
        {stats.map(stat => (
          <li className={css.item} key={stat.id}>
            
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stat: PropTypes.object,
    
}