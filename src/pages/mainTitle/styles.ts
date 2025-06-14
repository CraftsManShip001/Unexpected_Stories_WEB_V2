import styled, { keyframes } from 'styled-components';

interface Props {
    slide:boolean
}

const shoot = keyframes`
  0% {
    transform: translate(-50%, -50%) translate(0, 0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) translate(800px, 900px);
    opacity: 0;
  }
`

const fadeOut = keyframes`
  to {
    opacity: 0;
    visibility: hidden;
  }
`

export const Star = styled.div<{
top: number
left: number
size: number
duration: number
}>`
position: absolute;
top: ${({ top }) => top -18}%;
left: ${({ left }) => left}%;
width: ${({ size }) => size}px;
height: ${({ size }) => size}px;
background: white;
border-radius: 50%;
box-shadow: 0 0 10px white;
animation: ${shoot} ${({ duration }) => duration}s ease-out forwards;
`

export const Maintitle = styled.div<{ slide: boolean }>`
  width: fit-content;
  height: fit-content;
  text-align: center;
  margin: 20% auto 0 auto;
  color: white;
  font-size: 3.2rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  font-family: '별빛하늘L';
  transform: ${({ slide }) => (slide ? 'translateY(0)' : 'translateY(50px)')};
  opacity: ${({ slide }) => (slide ? '1' : '0')};
  transition: transform 1s ease-out, opacity 1s ease-out 2.6s;
`

export const Subtitle = styled.div<{ slide:boolean}>`
  display: block;
  text-align: center;
  margin: 2em 0;
  color: white;
  font-family: '더잠실1';
  font-size: large;
  transform: ${({ slide }) => (slide ? 'translateY(0)' : 'translateY(50px)')};
  opacity: ${({ slide }) => (slide ? '1' : '0')};
  transition: transform 1s ease-out, opacity 1s ease-out 3s;
`