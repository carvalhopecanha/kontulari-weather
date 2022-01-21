import styled from 'styled-components';


export const Container = styled.div`
  padding: 100px 0;
  text-align: center;
  h2{
	font-size: 2.5em;
  font-family: "Helvetica", arian;
  font-weight: 600;
  margin-bottom: 50px;
  }
`

/*   Card   */
export const CardCSS = styled.div`
    color: black;
    margin: 0 auto;
    margin-top: 10px;
    padding: 10px 30px;
    width: 260px;
    height: 290px;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, .2);
    -webkit-animation: open 2s cubic-bezier(.39, 0, .38, 1);
	h2{
	font-size: 1.8em;
    font-family: "Helvetica", arian;
    font-weight: 600;
    color: black;
	margin-top: 10px;
    margin-bottom: 20px;
      }
  h3{
	font-size: 1.8em;
    font-family: "Helvetica", arian;
    font-weight: 700;
    color: black;
	margin-top: 10px;
    margin-bottom: 20px;
    }
`


export const Loader = styled.div`
  margin:auto; 
  animation: is-rotating 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #51d4db;
  height: 30px;
  width: 30px;
  
@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}


`