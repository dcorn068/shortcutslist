import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { linuxShortcuts } from "../shortcuts/linuxShortcuts"
import TopTip from "../components/TopTip"
import { ShortcutsSection } from "../components/PageComponents/ShortcutsSection/ShortcutsSection"
import PageStyles from "../components/PageComponents/PageStyles"

export default () => (
  <Layout>
    <SEO title="Linux" />
    <TopTip />
    <PageStyles>
      <section>
        <h1 className="title">Linux</h1>
        {Object.entries(linuxShortcuts).map(([sectionTitle, shortcuts]) => (
          <ShortcutsSection
            key={sectionTitle}
            shortcuts={shortcuts.map(s => ({ ...s, shortcutMac: s.shortcut }))}
            sectionTitle={sectionTitle}
          />
        ))}
      </section>
    </PageStyles>
  </Layout>
)
