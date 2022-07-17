import styled from 'styled-components'
export const Wrapper = styled.div`
  ::-webkit-scrollbar {
    width: 0;
  }
  width: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(249, 249, 249);
  height: 100vh;
  .operation {
    padding: 20px 0;
    span {
      margin: 0 20px;
      cursor: pointer;
      position: relative;
      font-size: 17px;
      :after {
        content: attr(data-text);
        display: none;
        position: absolute;
        white-space: nowrap;
        top: -20px;
        left: -5px;
      }
      :hover {
        :after {
          display: inline-block;
        }
      }
    }
  }
  .view-list {
    width: 375px;
    height: 667px;
    border: 1px solid rgb(235, 234, 234);
    background: #fff;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
  }
`
