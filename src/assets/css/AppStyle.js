import styled from 'styled-components'

export const AppStyle = styled.div`
  display: flex;
  background: #fff;
  justify-content: center;
  /* height: 100vh;
  overflow: hidden; */
`

export const IconStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 600px;
  width: 800px;
  overflow-y: scroll;
  border: 1px solid #eee;
  background-color: #fff;
  padding: 20px;
  .icon-item {
    margin: 20px;
    font-size: 22px;
  }
`
