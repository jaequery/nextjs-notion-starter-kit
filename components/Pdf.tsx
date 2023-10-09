import * as React from 'react'

import { Viewer, Worker } from '@react-pdf-viewer/core'
// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

import * as types from '@/lib/types'

export const Pdf: React.FC<types.PageProps> = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js'>
      <div
        style={{
          height: '750px',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <Viewer
          fileUrl='/pdf/2023-10-01.pdf'
          plugins={[defaultLayoutPluginInstance]}
        />
      </div>
    </Worker>
  )
}
