import { Column, Row } from '@past3lle/components'
import { skillforgeContractsVersion } from '@past3lle/skillforge-web3'
import React from 'react'
import styled from 'styled-components/macro'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../../../package.json')

const AppVersionContainer = styled(Column)`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.5rem 1rem 0.75rem;
  width: 100%;
  gap: 0.15rem;
  opacity: 0.4;
  background-color: #d5fb73;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  transition: opacity 0.3s ease-in-out;

  > ${Row} {
    gap: 0.25rem 0.75rem;
    justify-content: flex-end;

    > a {
      color: inherit;
    }

    &:hover {
      font-weight: 800;
    }
  }
`

export function AppVersion() {
  return (
    <AppVersionContainer>
      <Row>
        <strong>Version:</strong>
        <a
          href="https://github.com/PAST3LLE/monorepo/tree/main/apps/skillforge-ui/package.json"
          target="_blank noreferrer"
        >
          {packageJson?.version || 'Unknown version'}
        </a>
      </Row>
      <Row>
        <strong>Contracts: </strong>
        <a href="https://github.com/PAST3LLE/skilltree-contracts/tree/main/package.json" target="_blank noreferrer">
          {skillforgeContractsVersion || 'Unknown version'}
        </a>
      </Row>
    </AppVersionContainer>
  )
}
