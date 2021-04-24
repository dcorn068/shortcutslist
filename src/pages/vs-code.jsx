import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  vsCodeShortcuts,
  ReferenceSheets,
  JsResources,
} from "../shortcuts/vsCodeShortcuts"
import TopTip from "../components/TopTip"
import { ShortcutsSection } from "../components/PageComponents/ShortcutsSection"
import PageStyles from "../components/PageComponents/PageStyles"

export default () => (
  <Layout>
    <SEO title="VS Code" />
    <TopTip />
    <PageStyles>
      <section>
        <h1 className="title">VS Code</h1>
        <h3 className="title subtitle">
          Reference sheets: <ReferenceSheets />
        </h3>
        <h3 className="title subtitle">
          New to JavaScript? <JsResources />
        </h3>
        {Object.entries(vsCodeShortcuts).map(([sectionTitle, shortcuts]) => (
          <ShortcutsSection
            key={sectionTitle}
            shortcuts={shortcuts.map(s => ({
              ...s,
              shortcutMac: s.shortcutMac || s.shortcut,
            }))}
            sectionTitle={sectionTitle}
          />
        ))}
      </section>
    </PageStyles>
  </Layout>
)
