import styled from "styled-components";




export const Star = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    height: 0.5px;
    z-index: -9999;
    background: linear-gradient(-45deg, #f9fbff, rgba(0, 0, 255, 0));
    border-radius: 999px;
    -webkit-filter: drop-shadow(0 0 6px #f9fbff);
            filter: drop-shadow(0 0 6px #f9fbff);
    -webkit-animation: tail 4000ms ease-in-out , shooting 4000ms ease-in-out ;
            animation: tail 4000ms ease-in-out , shooting 4000ms ease-in-out ;
    }
    .shooting_star::before, .shooting_star::after {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    height: 0.5px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #f9fbff, rgba(0, 0, 255, 0));
    -webkit-transform: translateX(50%) rotateZ(45deg);
            transform: translateX(50%) rotateZ(45deg);
    border-radius: 100%;
    -webkit-animation: shining 3000ms ease-in-out;
            animation: shining 3000ms ease-in-out;
    }

    .shooting_star:nth-child(1) {
    top: calc(50% - -90px);
    left: calc(50% - 260px);
    -webkit-animation-delay: 364ms;
            animation-delay: 364ms;
    }
    .shooting_star:nth-child(1)::before, .shooting_star:nth-child(1)::after, .shooting_star:nth-child(1)::after {
    -webkit-animation-delay: 364ms;
            animation-delay: 364ms;
    }
    .shooting_star:nth-child(2) {
    top: calc(50% - 120px);
    left: calc(50% - 200px);
    -webkit-animation-delay: 830ms;
            animation-delay: 830ms;
    }
    .shooting_star:nth-child(2)::before, .shooting_star:nth-child(2)::after, .shooting_star:nth-child(2)::after {
    -webkit-animation-delay: 1290ms;
            animation-delay: 1290ms;
    }
    .shooting_star:nth-child(3) {
    top: calc(50% - -200px);
    left: calc(50% - 200px);
    -webkit-animation-delay: 590ms;
            animation-delay: 590ms;
    }
    .shooting_star:nth-child(3)::before, .shooting_star:nth-child(2)::after, .shooting_star:nth-child(2)::after {
    -webkit-animation-delay: 590ms;
            animation-delay: 590ms;
    }
    .shooting_star:nth-child(4) {
    top: calc(50% - -10px);
    left: calc(50% - 60px);
    -webkit-animation-delay: 210ms;
            animation-delay: 210ms;
    }
    .shooting_star:nth-child(4)::before, .shooting_star:nth-child(2)::after, .shooting_star:nth-child(2)::after {
    -webkit-animation-delay: 210ms;
            animation-delay: 210ms;
    }
    .shooting_star:nth-child(5) {
    top: calc(50% - -123px);
    left: calc(50% - -25px);
    -webkit-animation-delay: 320ms;
            animation-delay: 320ms;
    }
    .shooting_star:nth-child(5)::before, .shooting_star:nth-child(2)::after, .shooting_star:nth-child(2)::after {
    -webkit-animation-delay: 320ms;
            animation-delay: 320ms;
    }

    @-webkit-keyframes tail {
    0% {
    width: 0;
    }
    30% {
    width: 100px;
    }
    100% {
    width: 0;
    }
    }

    @keyframes tail {
    0% {
    width: 0;
    }
    30% {
    width: 100px;
    }
    100% {
    width: 0;
    }
    }
    @-webkit-keyframes shining {
    0% {
    width: 0;
    }
    50% {
    width: 30px;
    }
    100% {
    width: 0;
    }
    }
    @keyframes shining {
    0% {
    width: 0;
    }
    50% {
    width: 30px;
    }
    100% {
    width: 0;
    }
    }
    @-webkit-keyframes shooting {
    0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    }
    100% {
    -webkit-transform: translateX(300px);
            transform: translateX(300px);
    }
    }
    @keyframes shooting {
    0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    }
    100% {
    -webkit-transform: translateX(300px);
            transform: translateX(300px);
    }
    }
    @-webkit-keyframes sky {
    0% {
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
    }
    100% {
    -webkit-transform: rotate(405deg);
            transform: rotate(405deg);
    }
    }
    @keyframes sky {
    0% {
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
    }
    100% {
    -webkit-transform: rotate(405deg);
            transform: rotate(405deg);
    }
    }
`