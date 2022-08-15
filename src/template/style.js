export const waterfallStyle = `
.waterfall-wrapper {
  column-gap: 10px;
  width: 100%;
  overflow: hidden;
  .content {
    break-inside: avoid-column;
    margin-bottom: 10px;
    img {
      width: 100%;
    }
  }
}
`

export const newsStyle = `
.news-wrapper {
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
