import styled from 'styled-components';


export const SpinnerContainer = styled.div `
  width: 204px;
  height: 204px;
  margin: 0 auto;
  display: inline-block;
  overflow: hidden;
  background: none;
`;

export const SpinnerItems = styled.div `
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */       
`;

export const Item = styled.div`
        box-sizing: content-box;
        position: absolute;
        animation: rotate 0.37s linear infinite;
        width: 97.92px;
        height: 97.92px;
        top: 53.04px;
        left: 53.04px;
        border-radius: 50%;
        box-shadow: 0 3.2640000000000002px 0 0 #132edf;
        transform-origin: 48.96px 50.592000000000006px;
        @keyframes rotate{
            from { transform: rotate(0deg) }
            to { transform: rotate(360deg) }
        }
`;