interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'accent';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean; // Добавляем пропс disabled
}

const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className = '',
  type = 'button',
  disabled = false // Значение по умолчанию
}: ButtonProps) => {
  const baseStyles =
    'inline-block px-8 py-3 text-sm font-medium transition-all duration-300 rounded-lg text-center';

  const variantStyles = {
    primary:
      'bg-brand text-white hover:bg-brand-secondary hover:shadow-lg hover:-translate-y-0.5',
    outline:
      'border-2 border-brand text-brand hover:bg-brand hover:text-white hover:shadow-lg hover:-translate-y-0.5',
    accent:
      'bg-brand-accent text-white hover:bg-brand-accent-hover hover:shadow-lg hover:-translate-y-0.5',
  };

  // Если кнопка disabled, убираем эффекты при наведении
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed hover:translate-y-0 hover:shadow-none' : '';
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={combinedClassName}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;