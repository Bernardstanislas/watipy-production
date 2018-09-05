import styled from 'styled-components';

const StyledLogo = styled.div`
    position: fixed;
    z-index: 2;
    margin: 20px;
    
    .name {
        letter-spacing: 15px;
        font-size: 60px;
        display: inline-block;
        margin-left: 16px;
        transform: translateY(-10px);
    }
`;

export default StyledLogo;
