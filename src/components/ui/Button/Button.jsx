import { classNames } from '../../../utils';
import './Button.css';

function Button({ children, className = '', ...props }) {
  const classes = classNames('button', className);

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
