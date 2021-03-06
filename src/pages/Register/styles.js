import styled from "styled-components"

export const Container = styled.div`
    // display:flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    // height: 100vh;
`;

export const Form = styled.form`
    max-width: 400px;
    margin-top: 2vh;
    margin-left: 33vw;  
    display: flex;
    flex-direction:column;
    justify-content: center;

    img{
        width: 80px;
        margin-left: 50%;
    }

    p {
        color: #c266ff;
        margin-bottom: 15px;
        border: 1px solid #c266ff;
        padding: 10px;
        width: 88%;
        text-align:center;
    }

    .field-group{
        max-width: 400px;
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 36px;
    }
    
    input {
        flex: 1;
        outline: none;
        margin-bottom: 15px;
        padding: 16px 24px;
        color: #777;
        font-size: 15px;
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 8px;

    }

    label{
        font-size:14px
        margin-bottom: 8px;
    }

    .field-group .field + .field{
        margin-left: 24px;

    }

    button {
        color: #fff;
        font-size: 16px;
        background:  #d699ff;
        height: 56px;
        border: 0;
        border-radius: 8px;
        width: 450px;
        transition: background-color 400ms;
        outline:none;
    }
    button:hover{
        background-color: #c266ff;
    }

    a {
        font-size: 16px;
        color: #999;
        text-decoration: none;
        transition: 400ms;
    }
    a:hover{
      color: #c266ff;
    }
`;