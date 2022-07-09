import styled from 'styled-components'
export const View = styled.div`
  ::-webkit-scrollbar {
    width: 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(249, 249, 249);
  .operation {
    padding: 20px 0;
    span {
      margin: 0 10px;
    }
  }
  .view-list {
    width: 375px;
    height: 667px;
    border: 1px solid rgb(235, 234, 234);
    background: #fff;
    overflow-y: scroll;
  }
`
