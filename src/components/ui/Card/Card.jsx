import { classNames } from '../../../utils';
import './Card.css';

function Card({ title, subtitle, actions, tight = false, children }) {
  const classes = classNames('card', tight && 'tight');

  return (
    <section className={classes}>
      {(title || actions) && (
        <header className="card-header">
          <div>
            {title && <h2 className="card-title">{title}</h2>}
            {subtitle && <p className="card-subtitle">{subtitle}</p>}
          </div>
          {actions && <div className="card-actions">{actions}</div>}
        </header>
      )}
      <div className="card-body">{children}</div>
    </section>
  );
}

export default Card;
