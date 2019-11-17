import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h1`
    font-size: 36px;
    color: #fff181;
    margin: 0;
    text-shadow: 0 0 5px #000;
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`;

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <a href="#1">
                Game of Thrones DB
                </a>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                    <a href="#1">Characters</a>
                </li>
                <li>
                    <a href="#1">Houses</a>
                </li>
                <li>
                    <a href="#1">Books</a>   
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;