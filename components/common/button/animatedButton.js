import React, { useEffect, useRef } from 'react'
import * as S from "./animatedButton.styles"
function AnimatedButton({ buttonname }) {
    const btn = useRef();
    useEffect(() => {
        btn.current.onmousemove = function (e) {
            const x = e.offsetX;
            const y = e.offsetY;
            btn.current.style.setProperty('--x', x + "px");
            btn.current.style.setProperty('--y', y + "px")

        }

    }, [])
    return (
        <S.ButtonContainer ref={btn}>
            <S.Button>
                {buttonname}
            </S.Button>
        </S.ButtonContainer>
    )
}

export default AnimatedButton
