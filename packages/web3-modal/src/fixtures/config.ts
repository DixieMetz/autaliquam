import { ThemeByModes, createCustomTheme } from '@past3lle/theme'

import { chains } from '../connectors/config'
import { PstlWeb3ModalProps } from '../providers'
import { PstlModalTheme } from '../theme/types'

const BG_LOGO = 'https://ik.imagekit.io/pastelle/SKILLFORGE/forge-background.png'
export const pstlModalTheme = createCustomTheme<ThemeByModes<PstlModalTheme>>({
  modes: {
    LIGHT: {},
    DARK: {},
    DEFAULT: {
      modals: {
        connection: {
          baseFontSize: 20,
          helpers: { show: true },
          backgroundImg: BG_LOGO,
          title: { color: '#cbb9ee', fontWeight: 700, letterSpacing: '-1.4px', lineHeight: 0.82 },
          button: {
            backgroundColor: '#301d4ea1',
            connectedBackgroundColor: '#37b9927d',
            border: { border: 'none', radius: '1em' },
            color: 'ghostwhite',
            fontStyle: 'normal',
            fontWeight: 200,
            letterSpacing: '-1px',
            textShadow: '2px 2px 3px #0000005c',
            textTransform: 'uppercase',
            hoverAnimations: true
          }
        }
      }
    }
  }
})

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
      // zIndex: 901
    },
    w3a: {
      appName: 'SKILLFORGE TEST',
      projectId: WEB3AUTH_TEST_ID,
      network: 'testnet'
      // zIndex: 901
    }
    // pstl: {
    //   zIndex: 900
    // }
  }
}

export { WALLETCONNECT_TEST_ID as wcId, DEFAULT_PROPS as commonProps }
