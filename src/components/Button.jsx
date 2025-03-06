function Button({ text, onClick, className, icon, href }) {
  const content = (
    <>
      {icon && <span>{icon}</span>} {/* Exibe o ícone, se presente */}
      {text}
    </>
  );

  // Se href for passado, renderiza um link
  if (href) {
    return (
      <a href={href} className={`${className}`}>
        {content}
      </a>
    );
  }

  // Caso contrário, renderiza um botão
  return (
    <button onClick={onClick} className={`${className}`}>
      {content}
    </button>
  );
}

export default Button;
