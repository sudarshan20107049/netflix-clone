
const Button = ({rounded,pX,pY,textSize,textColor='text-white',bg="bg-red-600",font='font-sm',onClick,children}) => {
    return (
        <button onClick={onClick}  className={`${textColor} ${textSize} ${bg} ${font} ${rounded} ${pX} ${pY}  `}>
        {children}
    </button>
    )
}

export default Button
