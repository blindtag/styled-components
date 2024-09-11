import { Container } from "./styled/Container.styled";
import { StyledHeader, Nav, Logo } from "./styled/Header.styled";
import { Button } from "./styled/Button.styled";


export default function Header(){
    return (
        <StyledHeader >
            <Container>
                <Nav>
                <Logo src="./images/logo.svg" alt="" />
                <Button>Try It Free</Button>
                </Nav>
            </Container>
        </StyledHeader>
    )
}
