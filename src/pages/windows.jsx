import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { windowsShortcuts } from "../shortcuts/windowsShortcuts"
import TopTip from "../components/TopTip"
import { ShortcutsSection } from "../components/PageComponents/ShortcutsSection"
import PageStyles from "../components/PageComponents/PageStyles"

export default () => (
  <Layout>
    <SEO title="Windows" />
    <TopTip />
    <PageStyles>
      <section>
        <h1 className="title">Mac</h1>
        Coming soon!
        {/* {Object.entries(windowsShortcuts).map(([sectionTitle, shortcuts]) => (
          <ShortcutsSection
            key={sectionTitle}
            shortcuts={shortcuts}
            sectionTitle={sectionTitle}
          />
        ))} */}
      </section>
    </PageStyles>
  </Layout>
)
