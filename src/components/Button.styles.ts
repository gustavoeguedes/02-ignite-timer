import styled, {css} from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;

    border-radius: 6px;
    border: 0;
    color: #fff;
    margin: 8px;
    cursor: pointer;

    background-color: ${props => props.theme['green-500']}

    /* ${props => {
        return css`
            background-color: ${buttonVariants[props.variant]}`
    }
    } */
`