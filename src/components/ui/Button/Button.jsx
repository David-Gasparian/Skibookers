import './Button.css';

function Button({ children, className = '', ...props }) {
  const classes = ['button', className].filter(Boolean).join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
