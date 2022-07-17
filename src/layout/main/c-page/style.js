import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  background: #fff;
  border: 1px solid #eee;
  width: 500px;
  top: 20px;
  height: 300px;
  padding: 20px;
  z-index: 999;
  .adm-radio {
    margin: 20px;
  }
  input {
    margin: 20px 0;
  }
  .btn {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    width: 100%;
    .adm-button {
      margin: 0 20px;
    }
  }
`
