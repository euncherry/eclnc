import React, { useRef, useEffect } from "react"
import styled from "styled-components"

export const Text = styled.input.attrs(props => ({ type: (props.type) || "text" }))`
display : flex;
width: 20.4rem;
  height: 4.5rem;
  border: 1px solid #90979a;
  font-size: 0.9rem;
  padding-left: 1.4rem;
  background: #ffffff8f;
  font-family: inherit;
  color: #9baacf;
  outline: 0;
::placeholder {
    color : #bec8e4;
};
&:focus {
    outline: 0;
    box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #FFFFFF
}
/* 모바일 환경에서 center */
@media screen and (max-width: 576px){
    text-align: center;
}


${props => {
        switch (props.size) {
            case "small":
                return `
                width: 6rem;
                height: 2.5rem;
            `
            case "large":
                return `
                font-size : 1.3rem
                width: 20.4rem;
                height: 3.5rem;
            `
            case "default":
                return `
                width: 20rem;
                height: 3.5rem;
            `
            default:
                return `
                width: 20.4rem;
                height: 3rem;
            `
        }
    }}
    text-align : ${props => (props.align) || null};

${props => (props.disabled) ? `background-color: rgba(0,0,0,0);` : null};

color : ${props => (props.color) || ` #707070`};

${props => (props.plane) ? `
padding: 4px 11px;
color: #000000d9;
background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    outline: 0;
    transition: all .3s;
    box-shadow: 0 0 0 2px #E4EBF5;
::selection {
    color: #fff;
    background: #1890ff;;
};
    &:hover{
        box-shadow: 0 0 0 1px #c8d0e7;
        border-color: #bec8e4;
    border-right-width: 1px!important;
    };
    &:focus{
        border-color: #bec8e4;
    box-shadow: 0 0 0 2px #E4EBF5;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #FFFFFF;
  
    }
    
`: null};
${props => (props.block) ? `width : 100%;` : null};
`

/**
 *  @param type input type
 * @param size 크기 
 * @param block 가로크기 부모로 조정
 * @param value 값
 * @param onChange onChange
 * @param placeholder 값입력 전 입력을 돕기위한 힌트
 * @param disabled textbox 비활성화
 * @param align 텍스트 정렬
 * @param plane plane style
 */
const TextBox = ({ onKeyPress, type, autofocus, size, block, plane, value, onChange, placeholder, disabled, align, color }) => {
    const textRef = useRef();

    useEffect(() => {
        if (autofocus) {
            console.log(textRef)
            textRef.current.focus()
        }
    }, [autofocus])

    return (
        <>
            <Text type={type} align={align} size={size} color={color} plane={plane} ref={textRef} onKeyPress={onKeyPress}
                block={block} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} >
            </Text>
        </>
    )
}


export default TextBox