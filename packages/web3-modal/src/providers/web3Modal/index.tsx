import { devDebug } from '@past3lle/utils'
import React, { useEffect, useState } from 'react'

import { CHAIN_IMAGES, WALLET_IMAGES, Z_INDICES } from '../../constants'
import { PstlWeb3ModalProps } from '../types'

export const PstlWeb3Modal = ({
  ethereumClient,
  modals: {
    w3m: { projectId, zIndex = Z_INDICES.W3M, themeVariables, ...w3mProps }
  }
}: PstlWeb3ModalProps) => {
  if (!projectId) {
    throw new Error('MISSING or INVALID WalletConnect options! Please check your config object.')
  }

  const [LazyModal, setModal] = useState<React.ReactElement<any, any>>()

  useEffect(() => {
    if (projectId && ethereumClient?.walletConnectVersion) {
      devDebug('[@past3lle/web3-modal]::IMPORTING WEB3MODAL')
      import('@web3modal/react')
        .then(({ Web3Modal }) =>
          setModal(
            <Web3Modal
              {...w3mProps}
              chainImages={{
                ...CHAIN_IMAGES,
                ...w3mProps.chainImages
              }}
              walletImages={{
                ...WALLET_IMAGES,
                ...w3mProps.walletImages
              }}
              themeVariables={{ ...themeVariables, '--w3m-z-index': zIndex?.toString() }}
              projectId={projectId}
              ethereumClient={ethereumClient}
            />
          )
        )
        .catch(console.error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ethereumClient?.walletConnectVersion, projectId])

  if (!LazyModal) return null

  return LazyModal
}
