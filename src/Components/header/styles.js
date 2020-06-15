import styled from 'styled-components'

export const Header = styled.div`
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 7px 6px -5px rgb(212, 212, 212);
  padding: 0 80px 0 40px;
  img {
    width: 100px;
    margin-left:10vw;
  }
  a{
    color: #d699ff;
    font-weight: bold;
    text-decoration: none;
    margin: 0px 0px 0px 40px;
    font-size: 18px;
    line-height: 22px;
    position: relative;
    transition: 400ms;      
    }
    a:hover{
        color: #c266ff; 
  }`