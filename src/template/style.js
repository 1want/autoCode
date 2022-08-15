export const waterfallStyle = `
.waterfall-wrapper {
  column-gap: 0px;
  width: 100%;
  overflow: hidden;
  .content {
    break-inside: avoid-column;
    padding: 0 4px;
    margin-bottom: 10px;
    img {
      width: 100%;
    }
  }
}
`

export const newsStyle = `
.news-wrapper {
  padding: 10px;
  .content {
    display: flex;
    margin-bottom: 20px;
    img {
      width: 140px;
      height: 100px;
    }
    .info {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
`

export const listImgStyle = `
.list-img-wrapper {
  display: flex;
  overflow-y: scroll;
  padding: 10px;
  &::-webkit-scrollbar {
    width: 0;
  }
  .content {
    margin-right: 20px;

    img {
      border-radius: 4px;
      width: 200px;
      height: 120px;
      object-fit: cover;
    }
  }
}
`
