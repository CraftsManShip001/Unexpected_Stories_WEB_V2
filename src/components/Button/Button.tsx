import styled from 'styled-components';

interface ButtonProps{
    content : string;
    margin? : number;
    onClick : ()=>void;
    slide? : boolean;
}

const Button = ({content, margin, onClick,slide} : ButtonProps) => {
    return (
        <Btn margin={margin} onClick={onClick} slide={slide}>
            {content}
        </Btn>
    )
}

const Btn = styled.div<{margin? : number, slide? : boolean}>`
    width : 14em;
    height : 3em;
    color : black;
    background-color: #ffffffb8;
    border-radius : 3em;
    font-size : 1.15em;
    margin : ${({ margin }) => (margin ? `${margin}vh auto` : '5vh auto')};
    display : block;
    position : relative;
    z-index : 1000;
    border : none;
    font-family: "더잠실1";
    transition: transform 1s ease-out, opacity 1s ease-out 3.6s;
    text-align:center;
    line-height:3em;
    transform: ${({ slide }) => (slide ? 'translateY(0)' : 'translateY(50px)')};
    opacity: ${({ slide }) => (slide || slide == undefined ? '1' : '0')};
`

export default Button