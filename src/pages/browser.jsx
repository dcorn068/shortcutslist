import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { browserShortcuts } from "../shortcuts/browserShortcuts"
import TopTip from "../components/TopTip"
import ShortcutsSection from "../components/PageComponents/ShortcutsSection/ShortcutsSection"
import PageStyles from "../components/PageComponents/PageStyles"

export default () => (
  <Layout>
    <SEO title="Browser" />
    <TopTip />
    <PageStyles>
      <section>
        <h1 className="title">Browser</h1>
        {Object.entries(browserShortcuts).map(([sectionTitle, shortcuts]) => (
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
