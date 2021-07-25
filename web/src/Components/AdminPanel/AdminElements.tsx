import styled from "styled-components";

export const AdminPanelContainer = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
background : #004f9e;
border-radius : 20px;
width : 1100px;
margin : auto;`

export const Header = styled.h1`
color : white;
`

export const Input = styled.input`
appearance: none;
background: white;
border: 1px solid rgba(0,47,52,.2);
color: #002f34;
font-size: 1.5em;
height: 48px;
box-sizing: border-box;
border-radius : 4px;
outline: none;
width : 50%;
padding-left: 12px;
padding-right: 12px;
margin : 10px;
line-height: 12px;
&:focus{
    border: 3px solid #74b202; 
}
&[type = 'submit']{
    cursor : pointer;
    color : white;
    background : #74b202;
    &:hover{
        background : #639704;
    }
}`

export const Select = styled.select`
border: 1px solid rgba(0,47,52,.2);
color: #002f34;
font-size: 1em;
height: 48px;
box-sizing: border-box;
border-radius : 4px;
outline: none;
width : 50%;
padding-left: 12px;
padding-right: 12px;
margin : 10px;
line-height: 5px;
&:focus{
    border: 3px solid #74b202; 
}`

export const Option = styled.option`
appearance: none;
background: none;
border: 1px solid rgba(0,47,52,.2);
color: #002f34;
font-size: 0.8em;
height: 48px;
box-sizing: border-box;
border-radius : 4px;
outline: none;
width : 50%;
padding-left: 12px;
padding-right: 12px;
margin : 0px;
line-height: 5px;
&:focus{
    border: 3px solid teal; 
}
`
export const SubTitle = styled.p`
color : white;
`

export const FileInput = styled.div`
border : 1px solid #74b202;
color: #9dadb6;
cursor: pointer;
width : 100px;
height : 100px;`

export const FileLabel = styled.label``

export const FileAlign = styled.div`
width : 60%;
height : 90vh;
display: grid;
grid-template: 100px / auto auto auto auto ;
gap: 10px 10px;
border-radius : 4px;`

export const GalleryWrapper = styled.div`
display : flex;
justify-content : center;
padding : 10px;
padding-left : 50px;`


export const SeatCount = styled.input`
appearance: none;
background: white;
border: 1px solid rgba(0,47,52,.2);
color: #002f34;
font-size: 1.5em;
height: 48px;
box-sizing: border-box;
border-radius : 4px;
outline: none;
width : 25%;
padding-left: 12px;
padding-right: 12px;
margin : 10px;
line-height: 12px;
&:focus{
    border: 3px solid #74b202; 
}
&[type = 'submit']{
    cursor : pointer;
    color : white;
    background : #74b202;
    &:hover{
        background : #639704;
    }
}`
export const SeatPrice = styled.input`
appearance: none;
background: white;
border: 1px solid rgba(0,47,52,.2);
color: #002f34;
font-size: 1.5em;
height: 48px;
box-sizing: border-box;
border-radius : 4px;
outline: none;
width : 25%;
padding-left: 12px;
padding-right: 12px;
margin : 10px;
line-height: 12px;
&:focus{
    border: 3px solid #74b202; 
}
&[type = 'submit']{
    cursor : pointer;
    color : white;
    background : #74b202;
    &:hover{
        background : #639704;
    }
}`