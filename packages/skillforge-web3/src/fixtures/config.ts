import { PstlWeb3ModalProps } from '@past3lle/web3-modal'

import { chains } from '../connectors/config'
import { SkillForgeContractAddressMap, SkillForgeMetadataUriMap } from '../types'

// TESTING ID - DONT USE IN PROD
const WALLETCONNECT_TEST_ID = 'a01e2f3b7c64ff495f9cb28e4e2d4b49'
// TESTING KEY DO NOT USE IN PROD
const WEB3AUTH_TEST_ID = 'BHloyoLW113nGn-mIfeeNqj2U0wNCXa4y83xLnR6d3FELPMz_oZ7rbY4ZEO3r0MVjQ_LX92obu1ta0NknOwfvtU'
const DEFAULT_PROPS: PstlWeb3ModalProps = {
  appName: 'COSMOS APP',
  chains,
  modals: {
    w3m: {
      projectId: WALLETCONNECT_TEST_ID,
      walletImages: {
        web3auth: 'https://web3auth.io/images/w3a-L-Favicon-1.svg',
        safe: 'https://user-images.githubusercontent.com/3975770/212338977-5968eae5-bb1b-4e71-8f82-af5282564c66.png'
      }
    },
    w3a: {
      appName: 'SKILLFORGE TEST',
      projectId: WEB3AUTH_TEST_ID,
      network: 'mainnet'
    }
  }
}
const DEFAULT_CONFIG_PROPS = {
  metadataUris: {
    [5]: { collectionsManager: 'www.google.com' },
    [80001]: { collectionsManager: 'www.google.com' }
  } as SkillForgeMetadataUriMap,
  contractAddresses: {
    [5]: {
      collectionsManager: '0x9e8e103ed51A18E92c0938573f9b7fB4A393083a',
      unlockManager: '0x0B397B88C96E22E63D6D9b802df62fe40bB1B544'
    },
    // TODO: change to mumbai addresses
    [80001]: {
      collectionsManager: '0x9e8e103ed51A18E92c0938573f9b7fB4A393083a',
      unlockManager: '0x0B397B88C96E22E63D6D9b802df62fe40bB1B544'
    }
  } as SkillForgeContractAddressMap
}

export { WALLETCONNECT_TEST_ID as wcId, DEFAULT_PROPS as commonProps, DEFAULT_CONFIG_PROPS as contractProps }
