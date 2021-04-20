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
        <h1 className="title">Windows</h1>
        {Object.entries(windowsShortcuts).map(([sectionTitle, shortcuts]) => (
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
