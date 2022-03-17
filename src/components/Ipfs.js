import { useState } from 'react'
import { create } from 'ipfs-http-client'

const client = create('https://ipfs.infura.io:5001/api/v0')

const Ipfs = () => {
    const [fileUrl, updateFileUrl] = useState(`https://ipfs.infura.io/ipfs/Qmeg2ZnRCKWDi1D61kae4ePeQgxRHGkfnbpwyoQCUjfU2K`)
    async function onChange(e) {
      const file = e.target.files[0]
      try {
        const added = await client.add(file)
        const url = `https://ipfs.infura.io/ipfs/${added.path}`
        console.log(url, 'lllllllllllllllllll')
        updateFileUrl(url)
      } catch (error) {
        console.log('Error uploading file: ', error)
      }  
    }
    return (
        <div className="App">
        <h1>IPFS Example</h1>
        <input
          type="file"
          onChange={onChange}
        />
        {
          fileUrl && (
            <img src={fileUrl} width="600px" />
          )
        }
      </div>
    )
}

export default Ipfs