import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { vsCodeShortcuts } from "../shortcuts/vsCodeShortcuts"
import TopTip from "../components/TopTip"
import { ShortcutsSection } from "../components/PageComponents/ShortcutsSection"
import PageStyles from "../components/PageComponents/PageStyles"

export default () => (
  <Layout>
    <SEO title="Windows" />
    <TopTip />
    <PageStyles>
      <section>
        <h1 className="title">VS Code</h1>
        {Object.entries(vsCodeShortcuts).map(([sectionTitle, shortcuts]) => (
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
