import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { macShortcuts } from "../shortcuts/macShortcuts"
import TopTip from "../components/TopTip"
import { ShortcutsSection } from "../components/PageComponents/ShortcutsSection"
import PageStyles from "../components/PageComponents/PageStyles"

export default () => (
  <Layout>
    <SEO title="Mac" />
    <TopTip />
    <PageStyles>
      <section>
        <h1 className="title">Mac</h1>

        {Object.entries(macShortcuts).map(([sectionTitle, shortcuts]) => (
          <ShortcutsSection
            key={sectionTitle}
            shortcuts={shortcuts}
            sectionTitle={sectionTitle}
          />
        ))}
      </section>
    </PageStyles>
  </Layout>
)
