import React, { Component } from "react";
import {
  EuiLink,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeaderSection,
  EuiPageContentHeader,
  EuiTitle,
  EuiPageBody
} from "@elastic/eui";
import { EuiSpacer } from "@elastic/eui";

class Home extends Component {
  render() {
    return (
      <EuiPageBody>
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>Welcome</h1>
            </EuiTitle>
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPageContent>
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection>
              <EuiTitle>
                <h2>Helpful resources</h2>
              </EuiTitle>
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
          <EuiPageContentBody>
            <EuiLink href="https://github.com/elastic/eui" target="_blank">
              EUI github
            </EuiLink>
            <EuiSpacer />
            <EuiLink href="https://elastic.github.io/eui/#/" target="_blank">
              EUI living style guide
            </EuiLink>
            <EuiSpacer />
            <EuiLink href="https://reactjs.org/docs/getting-started.html" target="_blank">
              React docs
            </EuiLink>
            <EuiSpacer />
            <EuiLink href="https://github.com/facebook/create-react-app" target="_blank">
              create-react-app
            </EuiLink>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    );
  }
}

export default Home;
