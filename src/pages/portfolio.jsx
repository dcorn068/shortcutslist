import Layout from "antd/lib/layout/layout"
import React from "react"
import SEO from "../components/seo"
import PageStyles from "../components/PageComponents/PageStyles"
import styled from "styled-components/macro"

export default () => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <PageStyles>
        <PortfolioStyles>
          <div className="titleAvatar">
            <h1 className="title">Hi, I'm Daniel</h1>
            <div className="avatarImg">
              <img
                src="https://pbs.twimg.com/profile_images/1152733728692719616/iVXJtBND_400x400.jpg"
                alt="avatar iamge"
              />
            </div>
          </div>
          <p>Coding is fun, especially when it's easy...</p>
          <p>Here are some of my other works:</p>

          <div className="worksGrid">
            <div className="work">work 1</div>
            <div className="work">work 2</div>
          </div>
        </PortfolioStyles>
      </PageStyles>
    </Layout>
  )
}

const PortfolioStyles = styled.div`
  .titleAvatar {
    display: flex;
    width: fit-content;
    margin: auto;
    align-items: flex-end;
    gap: 36px;
  }
  .avatarImg {
    border-radius: 50%;
    overflow: hidden;
    width: fit-content;
    margin: auto;
    img {
      width: 128px;
    }
  }
  .worksGrid {
    display: grid;
    grid-auto-flow: column;
  }
`
