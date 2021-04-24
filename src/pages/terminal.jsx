import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { terminalShortcuts } from "../shortcuts/terminalShortcuts"
import TopTip from "../components/TopTip"
import ShortcutsSection from "../components/PageComponents/ShortcutsSection/ShortcutsSection"
import PageStyles from "../components/PageComponents/PageStyles"

export default () => (
  <Layout>
    <SEO title="Terminal" />
    <TopTip />
    <PageStyles>
      <section>
        <h1 className="title">Terminal</h1>
        {Object.entries(terminalShortcuts).map(([sectionTitle, shortcuts]) => (
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
