interface Props {
  children: string;
  onButtonClick: () => void;
}

const Button = ({ children, onButtonClick }: Props) => {
  return (
    <button type='button' className='btn btn-primary' onClick={onButtonClick}>
      {children}
    </button>
  );
};

export default Button;
