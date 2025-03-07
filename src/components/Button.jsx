function Button({ text, onClick, className, icon, href, ariaLabel }) {
  const content = (
    <>
      {icon && <span>{icon}</span>}
      {text}
    </>
  );

  if (href) {
    return (
      <a href={href} className={className} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className} aria-label={ariaLabel}>
      {content}
    </button>
  );
}

export default Button;
